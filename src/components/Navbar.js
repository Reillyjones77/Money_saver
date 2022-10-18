import React from "react";
import {Link} from "react-router-dom";

export default function Navbar(){
    return(
    <div id="Navbar">
      <Link to="/">
        <button className='btn' type="button">Home</button>
      </Link>
      <Link to="/Income">
        <button className='btn' type="button">Income</button>
      </Link>
      <Link to="/Expense">
        <button className="btn" type="button">Expenses</button>
      </Link>
    </div>
    )
}