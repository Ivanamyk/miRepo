import React, { FC } from "react";
import LogoBlue from "../../../../../../assets/img/logo.png";

const Logo: FC = () => {
    return (
        <>
            <div className="d-flex justify-content-center m-2">
                <img src={LogoBlue} alt="To Do logo" height="50" />
            </div>
            <p className="text-white text-center"><b>To Do</b></p>
        </>
    );
};

export { Logo };
