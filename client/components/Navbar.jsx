import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to='/'>LIFT LOGGER APP</Link>
                </li>
                <li>
                    <Link to='/workouts'>Weight Lifting Log</Link>
                </li>
                <li>
                    <Link to='/'>Workouts</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar