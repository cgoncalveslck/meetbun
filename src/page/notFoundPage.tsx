import { NotFound } from "../components/notFound";
import { Layout } from "../layout/Layout";

export const notFoundPage = () => {
  return (
    <Layout
      title="Not Found"
      children={
        <>
          <NotFound />
        </>
      }
    />
  );
};
