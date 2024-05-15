import React from "react";

const Page = () => {
  return (
    <>
      <footer>
        <div className="wrapper__footer bg-theme-footer">
          <div className="container">
            <div className="row">
              {/* <!-- ADDRESS --> */}
              <div className="col-md-4">
                <div className="widget__footer">
                  <figure>
                    <img
                      src="images/logo-blue.png"
                      alt=""
                      className="logo-footer"
                    />
                  </figure>
                  <p>
                    QwikkReturns is a premium Property template based on
                    Bootstrap 4. QwikkReturns helped thousands of clients to
                    find the right property for their needs.
                  </p>

                  <ul className="list-unstyled mb-0 mt-3">
                    <li>
                      <b>
                        {" "}
                        <i className="fa fa-map-marker"></i>
                      </b>
                      <span>214 West Arnold St. New York, NY 10002</span>
                    </li>
                    <li>
                      <b>
                        <i className="fa fa-phone-square"></i>
                      </b>
                      <span>(123) 345-6789</span>
                    </li>
                    <li>
                      <b>
                        <i className="fa fa-phone-square"></i>
                      </b>
                      <span>(+100) 123 456 7890</span>
                    </li>
                    <li>
                      <b>
                        <i className="fa fa-headphones"></i>
                      </b>
                      <span>support@realvilla.demo</span>
                    </li>
                    <li>
                      <b>
                        <i className="fa fa-clock-o"></i>
                      </b>
                      <span>Mon - Sun / 9:00AM - 8:00PM</span>
                    </li>
                  </ul>
                </div>
              </div>
              {/* <!-- END ADDRESS --> */}

              {/* <!-- QUICK LINKS --> */}
              <div className="col-md-4">
                <div className="widget__footer">
                  <h4 className="footer-title">Quick Links</h4>
                  <div className="link__category-two-column">
                    <ul className="list-unstyled">
                      <li className="list-inline-item">
                        <a href="#">Commercial</a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#">business</a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#">House</a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#">Residential</a>
                      </li>

                      <li className="list-inline-item">
                        <a href="#">Residential Tower</a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#">Beverly Hills</a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#">Los angeles</a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#">The beach</a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#">Property Listing</a>
                      </li>

                      <li className="list-inline-item">
                        <a href="#">Clasic</a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#">Modern Home</a>
                      </li>

                      <li className="list-inline-item">
                        <a href="#">Luxury</a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#">Beach Pasadena</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* <!-- END QUICK LINKS --> */}

              {/* <!-- NEWSLETTERS --> */}
              <div className="col-md-4">
                <div className="widget__footer">
                  <h4 className="footer-title">follow us</h4>
                  <p className="mb-2">
                    Follow us and stay in touch to get the latest news
                  </p>
                  <p>
                    <button className="btn btn-social btn-social-o facebook mr-1">
                      <i className="fa fa-facebook-f"></i>
                    </button>
                    <button className="btn btn-social btn-social-o twitter mr-1">
                      <i className="fa fa-twitter"></i>
                    </button>

                    <button className="btn btn-social btn-social-o linkedin mr-1">
                      <a href="https://www.linkedin.com/in/shrawan13/">
                        {" "}
                        <i className="fa fa-linkedin"></i>
                      </a>
                    </button>
                    <button className="btn btn-social btn-social-o instagram mr-1">
                      <i className="fa fa-instagram"></i>
                    </button>

                    <button className="btn btn-social btn-social-o youtube mr-1">
                      <i className="fa fa-youtube"></i>
                    </button>
                  </p>
                  <br />
                  <h4 className="footer-title">newsletter</h4>
                  {/* <!-- Form Newsletter --> */}
                  <div className="widget__form-newsletter">
                    <p>
                      Don’t miss to subscribe to our news feeds, kindly fill the
                      form below
                    </p>
                    <div className="mt-3">
                      <input
                        type="text"
                        className="form-control mb-2"
                        placeholder="Your email address"
                      />

                      <button
                        className="btn btn-primary btn-block text-capitalize"
                        type="button"
                      >
                        subscribe
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- END NEWSLETTER --> */}
            </div>
          </div>
        </div>

        {/* <!-- Footer Bottom --> */}
        <div className="bg__footer-bottom-v1">
          <div className="container">
            <div className="row flex-column-reverse flex-md-row">
              <div className="col-md-6">
                <span>
                  © 2023 QwikkReturns - Premium real estate & theme &amp; theme
                  by
                  <a href="#">retenvi.com</a>
                </span>
              </div>
              <div className="col-md-6">
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <a href="#"> privacy </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#"> contact </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#"> about </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#"> faq </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- End Footer  --> */}
      </footer>
    </>
  );
};

export default Page;
