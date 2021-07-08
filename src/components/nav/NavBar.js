import React from "react";
import { Link } from "react-router-dom"
import "./NavBar.css";

export const NavBar = () => {
  return (
    <>
      <ul className="navbar">
	<li className="navbar_item active">
		<Link className="navbar_link" to="/">Thorns and Roses</Link>
	</li>
	<li className="navbar_item active">
		<Link className="navbar_link" to="/nurseries">Nurseries</Link>
	</li>
	<li className="navbar_item active">
		<Link className="navbar_link" to="/distributors">Distributors</Link>
	</li>
	<li className="navbar_item active">
		<Link className="navbar_link" to="/retailers">Retailers</Link>
	</li>
	<li className="navbar_item active">
		<Link className="navbar_link" to="/flowers">Flowers</Link>
	</li>

      </ul>
    </>
  );
};
