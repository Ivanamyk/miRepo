import React, { FC } from "react";
import { Header } from "./Header";
import { Aside } from "./Aside";
import { Footer } from "./Footer";
import "./styles.css";

interface Props {
    hideHeader: boolean
    hideAside: boolean
    hideFooter: boolean
}

export const Layout: FC<Props> = ({ children, hideHeader = false, hideAside = false, hideFooter = false }) => {

    return (
        <div className="layout" >
            {!hideAside && <Aside />}
            {/* //si el hideFooter es falso se muestra el footer. tiene que ser true para que no se muestre */}
            <div className="contenedor" >
                {!hideHeader && <Header />}
                {children}
                {
                    !hideFooter && <Footer />}
            </div>
        </div>
    );
};


