import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="navigation">
      <h1>Homepage</h1>
      <p className="headline">
        This project is a Test for {" "}
        <a href="https://www.lendsqr.com"> Lendsqr</a>. by Joshua Anop Email: rolexy.inc@protonmail.com
      </p>
      <ul>
        <li>
          <Link to="/login">Loginn</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/usersshowingfilters">Usersshowingfilters</Link>
        </li>
        <li>
          <Link to="/usersgeneraldetails">Usersgeneraldetails</Link>
        </li>
      </ul>
    </div>
  );
};
export default Home;
