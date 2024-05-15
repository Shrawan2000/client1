import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-soft">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src="images/logo-blue-stiky.png" alt="" className="img-fluid" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#main_nav99"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="main_nav99">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
              
               <a className="nav-link active" href="/">
                  Home
                </a>
               
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/properties">
                  Properties
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/blog">
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">
                  Contact
                </a>
              </li>
            </ul>

            <ul className="navbar-nav">
              <li>
                <a
                  href="#"
                  className="btn btn-primary text-capitalize rounded-pill"
                >
                  <i className="fa fa-plus-circle mr-1"></i> Add Listing
                </a>
              </li>
            </ul>

            <div className="top-search navigation-shadow">
              <div className="container">
                <div className="input-group">
                  <form action="#">
                    <div className="row no-gutters mt-3">
                      <div className="col">
                        <input
                          className="form-control border-secondary border-right-0 rounded-0"
                          type="search"
                          placeholder="Search "
                          id="example-search-input4"
                        />
                      </div>
                      <div className="col-auto">
                        <a
                          className="btn btn-outline-secondary border-left-0 rounded-0 rounded-right"
                          href="/search-result.html"
                        >
                          <i className="fa fa-search"></i>
                        </a>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Page;
