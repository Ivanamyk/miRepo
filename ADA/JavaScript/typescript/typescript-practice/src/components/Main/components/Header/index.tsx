import React, { FC } from "react";
import { Link } from "react-router-dom";
import './header.css'

interface Props {
    showButton?: boolean
    title?: string
    txt?: string
    link?: string
}

const Header: FC<Props> = ({ showButton = false, title, txt, link }) => {

    return (
        <div className="container">
            <div className="row mb-5">
                <div className="col">
                    <h2> {title} </h2>

                    <div className="col d-flex justify-content-end">
                        {showButton && link &&
                            <button className="d-none d-sm-inline-block btn-add">
                                {/* <link className="btn-lnk-header" to={link}>+ {txt}</link> */}
                            </button>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export { Header };