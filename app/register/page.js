import React from "react";
import "../dist/css/styles.css";
function page() {
  return (
    <div style={{marginTop:35}}>
      
      <div className="clearfix"></div>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="card mx-auto" style={{ maxWidth: 520 }}>
                <div className="card-body">
                  <h4 className="card-title mb-4">Register</h4>
                  <form action="#">
                    <div className="form-row">
                      <div className="col form-group">
                        <label>First name</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder=""
                        />
                      </div>
                      <div className="col form-group">
                        <label>Last name</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder=""
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label>Email</label>
                      <input type="email" className="form-control" placeholder="" />
                      <small className="form-text text-muted">
                        We'll never share your email with anyone else.
                      </small>
                    </div>
                    <div className="form-group">
                      <label className="custom-control custom-radio custom-control-inline">
                        <input
                          className="custom-control-input"
                          checked=""
                          type="radio"
                          name="gender"
                          defaultValue="option1"
                        />
                        <span className="custom-control-label"> Male </span>
                      </label>
                      <label className="custom-control custom-radio custom-control-inline">
                        <input
                          className="custom-control-input"
                          type="radio"
                          name="gender"
                          defaultValue="option2"
                        />
                        <span className="custom-control-label"> Female </span>
                      </label>
                    </div>
                    <div className="form-row">
                      <div className="form-group col-lg-6">
                        <label>City</label>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="form-group col-lg-6">
                        <label>Country</label>
                        <select className="form-control">
                          <option>Choose...</option>
                          <option>Uzbekistan</option>
                          <option>Russia</option>
                          <option selected="">United States</option>
                          <option>India</option>
                          <option>Afganistan</option>
                        </select>
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group col-md-6">
                        <label>Create password</label>
                        <input className="form-control" type="password" />
                      </div>
                      <div className="form-group col-md-6">
                        <label>Repeat password</label>
                        <input className="form-control" type="password" />
                      </div>
                    </div>
                    <div className="form-group">
                      <button type="submit" className="btn btn-primary btn-block">
                        Register
                      </button>
                    </div>
                    <div className="form-group">
                      <label className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          checked=""
                        />
                        <span className="custom-control-label">
                          I am agree with <a href="#">terms and contitions</a>
                        </span>
                      </label>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-v1 py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-9">
              <h2 className="text-uppercase text-white">
                Looking To Sell Or Rent Your Property?
              </h2>
              <p className="text-capitalize text-white">
                We Will Assist You In The Best And Comfortable Property Services
                For You
              </p>
            </div>
            <div className="col-lg-3">
              <a href="#" className="btn btn-light text-uppercase">
                request a quote <i className="fa fa-angle-right ml-3 arrow-btn"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      <a href="javascript:" id="return-to-top">
        <i className="fa fa-chevron-up"></i>
      </a>
    </div>
  );
}

export default page;
