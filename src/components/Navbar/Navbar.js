import React from "react";
import "./navbar.css";
import logo from "./netflixlogo.jpg";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountBoxIcon from "@mui/icons-material/AccountBox";

export default function Navbar() {
  return (
    <header className="Navbar">
      <ul className="Navbar__group">
        <img className="Navbar__netflixlogo" src={logo} alt="netflix" />
        <li>Home</li>
        <li>TV Shows</li>
        <li>Movies</li>
        <li>New &amp; Popular</li>
        <li>My List</li>
      </ul>
      <div className="Navbar__group Navbar__group--right">
        <h6>
          <SearchOutlinedIcon />
        </h6>
        <h5 className="Navbar__item">Kids</h5>
        <h6>
          <NotificationsIcon />
        </h6>
        <h6>
          <AccountBoxIcon />
        </h6>
      </div>
    </header>
  );
}
