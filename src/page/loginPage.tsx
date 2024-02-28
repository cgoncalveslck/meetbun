import { LoginForm } from "../components/loginForm";
import { Layout } from "../layout/Layout";

export const loginPage = () => {
  return (
    <Layout
      title="Login Page"
      children={
        <>
          <LoginForm />
        </>
      }
    />
  );
};
