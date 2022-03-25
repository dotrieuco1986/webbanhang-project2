import React, { FC } from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

interface Props {
  children?: React.ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
