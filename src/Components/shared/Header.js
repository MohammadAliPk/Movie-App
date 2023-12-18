import React, { useState } from "react";
import { Link } from "react-router-dom";
import { slide as Menu } from 'react-burger-menu';
import './Header.css';

const Header = () => {

  const [isOpen, setOpen] = useState(false);

  const handleIsOpen = () => {
    setOpen(!isOpen);
  };

  const closeSideBar = () => {
    setOpen(false);
  };


  return (
    <Menu isOpen={isOpen} onOpen={handleIsOpen} onClose={handleIsOpen}>
      <h1 id="logo" className="bm-item">Movie App</h1>
      <Link to="/movies" className="bm-item" onClick={closeSideBar}>
        Movies
      </Link>
      <Link to="/series" className="bm-item" onClick={closeSideBar}>
        Series
      </Link>
      <Link to="/trending" className="bm-item" onClick={closeSideBar}>
        Trendings
      </Link>
    </Menu>
  );
};

export default Header;
