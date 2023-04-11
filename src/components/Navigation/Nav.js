import React from "react";
import "./Nav.css";
import { NavLink } from "react-router-dom";
export default function Nav(props) {
    return (
            <div>
                <div class="topnav">
                    <NavLink to="/" exact>To do List</NavLink>
                    <NavLink to="/news">News</NavLink>
                </div>
            </div>
    );
}