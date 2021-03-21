import React, { FC, useState } from "react";
import "./card.css";
import { task } from '../../../../../../utils'
import { Link } from 'react-router-dom';
import { PencilFill } from "react-bootstrap-icons";

interface Props {
    title: string
    description: string
    date: string
    status: string
    id: string
    assigned: string
    className: string
    style: {}
}

const CardTask: FC<Props> = ({ title, description, assigned, date, status, id, className, style }) => {
    const [taskStatus, setTaskStatus] = useState(status);
    const handleOnClick = (status: string) => {
        setTaskStatus(status);
        //task.patch(id, { status })
    }
    const getCardColor = () => {
        switch (taskStatus) {
            case "pending":
                return "border-start-pending";
            case "canceled":
                return "border-start-canceled";
            default:
                return "border-start-success";
        }
    };

    return (
        <div className={`card text-dark  ${getCardColor()} ${taskStatus} ${className} shadow-sm`} style={style}>
            <div className="card-body">
                <div className="row">
                    <div className="col">
                        <h5 className="card-header d-flex align-items-center">
                            <h4>{title}</h4>
                            <div className="d-flex ms-auto custom-botton ">
                                <button className="btn-search shadow-sm" title="Pending" id="pending" onClick={() => handleOnClick("pending")} />
                                <button className="btn-success shadow-sm" title="Done" id="Done" onClick={() => handleOnClick("success")} />
                                <button className="btn-danger shadow-sm" title="Cancel" id="cancel" onClick={() => handleOnClick("canceled")} />
                            </div>
                        </h5>
                    </div>
                    <div className="row">
                        <div className="col">
                            <h5 className="card-subtitle">{assigned}</h5>
                            <p className="card-text">{description}</p>
                            <h6>{date}</h6>
                        </div>
                    </div>
                </div>
                {/* <link to={`/tasks/edit/${id}`} className="mx-2">
                    <PencilFill />
                </link> */}
            </div>
        </div>
    );
};

export { CardTask };