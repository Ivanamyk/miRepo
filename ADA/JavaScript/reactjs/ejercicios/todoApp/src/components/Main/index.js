import React from "react";
import { Header } from "./Header"
import "./styles.css";

const Main = () => {
  const handleOnClick = () => {
    window.open(
      "http://localhost:3000/agregar", "_blank");
  }

  return (
    <>
      <Header titulo='Mis Tareas' />
      <main className="main bg-light">
        <div className='container'>
          <div className="card text-dark bg-light mb-3" style={{ width: "18rem" }}>
            <div className="card-header bg-secondary text-light">10/7/1999</div>
            <div className="card-body">
              <h5 className="card-title"><b>Mi Tarea</b></h5>
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
          <div>
            <button className='btn btn-dark' onClick={handleOnClick}>Agregar Tarea</button>
          </div>
        </div>
      </main>
    </>
  );
};

export { Main };
