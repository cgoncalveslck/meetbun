import { BottomNav } from "../components/bottomNav";

type LayoutProps = {
  title: string;
  children: JSX.Element;
};

export const Layout = ({ title, children }: LayoutProps): JSX.Element => {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        ></meta>
        <link rel="stylesheet" href="/public/css/output.css"></link>
        <link rel="stylesheet" href="/public/css/app.css"></link>
        <script src="/public/js/htmx.min.js"></script>
        <script src="/public/js/index.js"></script>
        <title>{title}</title>
      </head>
      <body class="container mx-auto dark:bg-shade-950 bg-shade-500">
        {children}
        <BottomNav />
      </body>
    </html>
  );
};
