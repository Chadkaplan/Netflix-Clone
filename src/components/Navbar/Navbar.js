import React from "react";
import "./navbar.css";
import logo from "./netflixlogo.jpg";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountBoxIcon from "@mui/icons-material/AccountBox";

export default function Navbar() {
  return (
    <header className="Navbar">
      <ul className="Navbar__group Navbar__group--left">
        <img className="Navbar__netflixlogo" src={logo} alt="netflix" />
        <li className="Navbar__item">Home</li>
        <li className="Navbar__item">TV Shows</li>
        <li className="Navbar__item">Movies</li>
        <li className="Navbar__item">New &amp; Popular</li>
        <li className="Navbar__item">My List</li>
      </ul>
      <div className="Navbar__group Navbar__group--right">
        <h6 className="Navbar__item">
          <SearchOutlinedIcon />
        </h6>
        <h5 className="Navbar__item Navbar__item--pad">Kids</h5>
        <h6 className="Navbar__item">
          <NotificationsIcon />
        </h6>
        <h6 className="Navbar__item">
          <AccountBoxIcon />
        </h6>
      </div>
    </header>
  );
}
