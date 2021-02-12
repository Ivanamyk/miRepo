import React from "react";
import { Header } from "./Header"
import "./styles.css";

const Main = ({ children, titulo }) => {

  return (
    <>
      <Header titulo={titulo} />
      <main className="main bg-light">{children}</main>
    </>
  );
};

export { Main };
