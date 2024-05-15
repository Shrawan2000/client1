import React from "react";
import "../dist/css/styles.css";
function page() {
  return (
    <div style={{marginTop:35}}>
    
      <div className="clearfix"></div>

      {/* <!-- LISTING LIST --> */}
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {/* <!-- Form Login --> */}
              <div className="card mx-auto" style={{ maxWidth: 380 }}>
                <div className="card-body">
                  <h4 className="card-title mb-4">Sign in</h4>
                  <form action="#">
                    <a
                      href="#"
                      className="btn btn-facebook btn-block mb-2 text-white"
                    >
                      <i className="fa fa-facebook"></i>  Sign in with
                      Facebook
                    </a>
                    <a href="#" className="btn btn-primary btn-block mb-4">
                      <i className="fa fa-google"></i>  Sign in with Google
                    </a>
                    <div className="form-group">
                      <input
                        className="form-control"
                        placeholder="Username"
                        type="text"
                      />
                    </div>
                    {/* <!-- form-group// --> */}
                    <div className="form-group">
                      <input
                        className="form-control"
                        placeholder="Password"
                        type="password"
                      />
                    </div>
                    {/* <!-- form-group// --> */}

                    <div className="form-group">
                      <a href="#" className="float-right">
                        Forgot password?
                      </a>
                      <label className="float-left custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          checked=""
                        />
                        <span className="custom-control-label"> Remember </span>
                      </label>
                    </div>
                    {/* <!-- form-group form-check .// --> */}
                    <div className="form-group">
                      <button type="submit" className="btn btn-primary btn-block">
                        Login
                      </button>
                    </div>
                    {/* <!-- form-group// --> */}
                  </form>
                </div>
                {/* <!-- card-body.// --> */}
              </div>
              {/* <!-- card .// --> */}

              <p className="text-center mt-4">
                Don't have account? <a href="#">Sign up</a>
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- END LISTING LIST --> */}

      {/* <!-- CALL TO ACTION --> */}
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
      {/* <!-- END CALL TO ACTION --> */}

      <a href="javascript:" id="return-to-top">
        <i className="fa fa-chevron-up"></i>
      </a>
    </div>
  );
}

export default page;
