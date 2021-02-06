import React from "react";
import { Header } from "./Header"
import "./styles.css";

const Main = ({ children }) => {
  // Javascript
  const handleOnClick = () => {
    console.log('HOLA')
  }

  return (
    <>
      {/* JSX */}
      <Header titulo='Mi Titulo' handleOnClick={handleOnClick} />
      <main className="main bg-light">{children}</main>
    </>
  );
};

export { Main };
