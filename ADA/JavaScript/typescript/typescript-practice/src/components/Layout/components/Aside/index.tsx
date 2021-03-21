import React, { FC } from "react";
import { Link } from "react-router-dom";
import * as Icon from "react-bootstrap-icons"
import { Logo } from "./components";
import "./aside.css";


const Aside: FC = () => {
    return (
        <aside className="aside bg-dark">
            <Logo />
            <div className="accordion accordion-flush ms-5" id="accordionFlushExample">
                <div className="accordion-item">
                    <h2 className="accordion-header mb-3" id="flush-headingOne">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            <Icon.PencilSquare className="me-3" /> Tasks</button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body text-white m-1">
                            <Link to="/tasks">+ Tasks List</Link>
                            <Link to="/tasks/add">+ Add Task</Link>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            <Icon.PersonSquare className="me-3" /> Users</button>
                    </h2>
                    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body text-white m-1">
                            <Link to="/users">+ Users List</Link>
                            <Link to="/users/add">+ Add User</Link>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">

                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                        <Link to="/users"></Link> <Icon.HouseDoorFill className="me-3" />  Home</button>//arreglar!

                    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body"></div>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export { Aside };