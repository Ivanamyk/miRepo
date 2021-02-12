import React from "react";
import { Header, Footer, Aside } from "./components";
import "./styles.css";

const Layout = ({ children, hideHeader, hideAside, hideFooter }) => {

  return (
    <div className="layout">
      {!hideAside && <Aside />}
      {/* //si el hideFooter es falso se muestra el footer. tiene que ser true para que no se muestre */}
      <div className="contenedor">
        {!hideHeader && <Header />}
        {children}
        {!hideFooter && <Footer />}
      </div>
    </div>
  );
};

//seteo la propiedad de que se oculten las siguientes paginas
Layout.defaultProps = {
  hideHeader: false,
  hideAside: false,
  hideFooter: false,
};

export { Layout };
