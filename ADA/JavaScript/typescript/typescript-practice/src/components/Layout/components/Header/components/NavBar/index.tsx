import React, { FC } from "react";
import { Bell, ArrowLeft, Grid3x3GapFill, PersonX, Search } from "react-bootstrap-icons";
import { useHistory, Link } from "react-router-dom";
import { useAuth } from '../../../../../../hooks';
import { UserPic } from './components'
import './navBar.css'


const NavBar: FC = () => {
  const { goBack } = useHistory();
  const { logout } = useAuth()

  return (

    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid d-flex flex-row-reverse">
        <a className="navbar-brand" href="#">
          <UserPic />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        </button>
        <div className="collapse navbar-collapse d-flex flex-row-reverse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" id='navLink' href="#">Account</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id='navLink' href="#">Help</a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" id='navLink' href="#" to='./users'>Sign Out</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export { NavBar };