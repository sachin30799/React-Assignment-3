import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div>
      {/* header */}
      <header className="header-area">
        <div className="left">
          <NavLink to="Javascript:void(0)">
            <i className="fa fa-search" aria-hidden="true" />
          </NavLink>
        </div>
        <div className="right">
          <NavLink to="Javascript:void(0)">
            <i className="fa fa-user" aria-hidden="true" />
          </NavLink>
        </div>
        <div className="container">
          <div className="row d_flex">
            <div className="col-sm-3 logo_sm">
              <div className="logo">
                <NavLink to="index.html" />
              </div>
            </div>
            <div className="col-lg-10 offset-lg-1 col-md-12 col-sm-9">
              <div className="navbar-area">
                <nav className="site-navbar">
                  <ul>
                    <li>
                      <NavLink className="active" to="/">
                        Home
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/about">About</NavLink>
                    </li>
                    <li>
                      <NavLink to="/action">take action</NavLink>
                    </li>
                    <li>
                      <NavLink to="/" className="logo_midle">
                        covido
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/news">news</NavLink>
                    </li>
                    <li>
                      <NavLink to="/doctors">doctores</NavLink>
                    </li>
                    <li>
                      <NavLink to="/contact">Contact </NavLink>
                    </li>
                    <li>
                      <NavLink to="/form">Form </NavLink>
                    </li>
                  </ul>
                  <button className="nav-toggler" >
                    <span />
                  </button>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* end header */}
    </div>
  );
}

export default Header;
