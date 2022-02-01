import React from "react";
import "./navbar.css";
import logo from "./netflixlogo.jpg";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

export default function Navbar() {
  return (
    <header className="navbar">
      <ul className="navbar--group navbar--group-left">
        <img className="netflixlogo" src={logo} alt="netflix" />
        <li className="nav--item">Home</li>
        <li className="nav--item">Tv Shows</li>
        <li className="nav--item">Movies</li>
        <li className="nav--item">New &amp; Popular</li>
        <li className="nav--item">My List</li>
      </ul>
      <div className="navbar--group navbar--group-right">
        <h6 className="nav--item">
          <SearchOutlinedIcon />
        </h6>
        <h5 className="nav--item pad-top">Kids</h5>
        <h6 className="nav--item">
          <NotificationsIcon />
        </h6>
        <h6 className="nav--item">
          <AccountBoxIcon />
        </h6>
      </div>
    </header>
  );
}
