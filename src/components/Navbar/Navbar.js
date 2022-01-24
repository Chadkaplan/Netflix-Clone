import React from "react";
import "./navbar.css";
import logo from "./netflixlogo.jpg";
import { GiMagnifyingGlass } from "react-icons/gi";
import { BsBell } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";

export default function Navbar() {
  return (
    <header className="flex-container">
      <ul className="nav-left">
        <img className="netflix-logo" src={logo} />
        <li className="nav-item">Home</li>
        <li className="nav-item">Tv Shows</li>
        <li className="nav-item">Movies</li>
        <li className="nav-item">New &amp; Popular</li>
        <li className="nav-item">My List</li>
      </ul>
      <div className="nav-right">
        <h6 className="nav-item">
          <GiMagnifyingGlass />
        </h6>
        <h6 className="nav-item">Kids</h6>
        <h6 className="nav-item">
          <BsBell />
        </h6>
        <h6 className="nav-item">
          <CgProfile />
        </h6>
      </div>
    </header>
  );
}
