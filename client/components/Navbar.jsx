import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <h2 className='centered'>
       <Link to="/">  <i className="fa-solid fa-dumbbell">  SWOLE - MATE </i> <i className="fa-solid fa-dumbbell"></i> </Link>
    </h2>
  );
};

export default Navbar;
