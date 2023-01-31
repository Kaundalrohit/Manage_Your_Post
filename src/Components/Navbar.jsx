import React from "react";
import { Link } from "react-router-dom";
export default function Navbar(props) {
  return (
    <>
      <nav className="navbar fixed-top  navbar-expand-lg bg-dark navbar-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            INDIA_TOp_NEWS
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link active" to="/sports">
                  Sports
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link active" to="/business">
                  Business
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link active" to="/technology">
                  Technology
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link active" to="/science">
                  Science
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link active" to="/health">
                  Health
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link active" to="/entertainment">
                  Entertainment
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link active" to="/general">
                  General
                </Link>
              </li>
            </ul>
            <div className="icons me-2">
              <button className="btn" onClick={props.changeTheme}>
                <i class="bi bi-fire" style={{ color: "white" }}></i>
              </button>
            </div>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}
