import React, { useContext } from "react";
import { Outlet } from "react-router-dom";

import { AppContext } from "../../context";
import "./Navbar.css";

function Navbar() {
  const { searchProducts } = useContext(AppContext);

  return (
    <nav>
      <ul className="nav">
        <li className="links-nav">
          <a href="/">Products</a>
        </li>

        <li className="links-nav">
            
          <a href="/cart">Cart</a>
        </li>

        <li className="searchBar">
          <label htmlFor="">Search</label>
          <input
            type="text"
            defaultValue={"Search Query"}
            onChange={searchProducts}
          />
        </li>
      </ul>

      <Outlet></Outlet>
    </nav>
  );
}

export default Navbar;
