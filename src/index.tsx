import { Context, Elysia } from "elysia";
import { swagger } from "@elysiajs/swagger";
import { html } from "@elysiajs/html";
import { loginPage } from "./page/loginPage";
import { notFoundPage } from "./page/notFoundPage";
import { staticPlugin } from "@elysiajs/static";
import { Resend } from "resend";

import { accounts } from "./routes/account";
import { PrismaClient } from "@prisma/client";
import { logger } from "@bogeychan/elysia-logger";

const db = new PrismaClient();

// Simulate a slow login
const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const sendEmail = async (account: any) => {
  const resend = new Resend(process.env.RESEND_KEY);

  const { data, error } = await resend.emails.send({
    from: "Dev <onboarding@resend.dev>",
    to: account.email,
    subject: "OTP",
    html: `<p>Your token: <strong>${account.token}</strong></p>`,
  });

  return { data, error };
};

const loginHandler = async ({ body, set }: Context) => {
  const { email }: any = body;

  // check if "account" exists with email
  let account = await db.account.findUnique({
    where: {
      email,
    },
  });
  set.status = 200;

  if (!account) {
    // create account a generate new token
    account = await db.account.create({
      data: {
        email: email,
        token: Bun.hash(email).toString(),
      },
    });
    set.status = 201;
  }

  const { error } = await sendEmail(account);

  if (error) {
    set.status = 500;

    console.log(error);
    return new Response("Failed to send email");
  }

  return new Response("Check your email for the token.");
};

new Elysia()
  .use(logger())
  .group("/api", (api) => api.use(accounts).post("/login", loginHandler))
  .use(
    swagger({
      path: "/docs",
      exclude: ["/docs", "/404"],
      documentation: {
        info: {
          title: "UI and API endpoints documentation",
          version: "0.1",
          description: `UI endpoints are public for signing in/up and managing your API keys.
            \nAPI endpoints are private and require authentication.`,
        },
        tags: [
          { name: "App", description: "UI endpoints" },
          { name: "Api", description: "API endpoints" },
        ],
      },
    })
  )
  .use(html())
  .use(staticPlugin())
  .get("/", loginPage, {
    detail: {
      tags: ["App"],
    },
  })
  .get("/404", notFoundPage, {
    detail: {
      tags: ["App"],
    },
  })
  .get("*", notFoundPage)
  .listen(3000);

console.log("Server started at http://localhost:3000");
