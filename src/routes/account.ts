import { Elysia } from "elysia";

const defaultConfig = {
  detail: {
    tags: ["Api"],
  },
};

export const accounts = new Elysia().get(
  "/account",
  () => "account",
  defaultConfig
);
