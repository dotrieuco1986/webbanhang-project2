import { FC } from "react";
import Layout from "./components/Layout";
import Router from "./routes";

const App: FC = () => {
  return (
    <Layout>
      <Router />
    </Layout>
  );
};

export default App;
