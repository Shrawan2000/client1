import Image from "next/image";
import "./dist/css/styles.css";
// import "./dist/images/"
export default function Home() {
  return (
    <main className="" style={{marginTop:100}}>
      
      {/* <!-- CAROUSEL HOMEPAGE 3 --> */}
      <div className="homepage__property bg-light">
        <div className="homepage__property-carousel owl-carousel owl-theme">
          <div className="item">
            <a href="#">
              <div className="tc-image-caption4">
                <img src="images/800x1000.jpg" alt="img1" />
                <div className="caption">
                  <h6 className="text-uppercase text-white">walls property</h6>
                  <h2 className="text-capitalize">family house</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Pariatur, assumenda!
                  </p>
                </div>
              </div>
            </a>
          </div>
          <div className="item">
            <a href="#">
              <div className="tc-image-caption4">
                <img src="images/800x1000.jpg" alt="img1" />
                <div className="caption">
                  <h6 className="text-uppercase text-white">walls property</h6>
                  <h2 className="text-capitalize">family house</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Pariatur, assumenda!
                  </p>
                </div>
              </div>
            </a>
          </div>
          <div className="item">
            <a href="#">
              <div className="tc-image-caption4">
                <img src="images/800x1000.jpg" alt="img1" />
                <div className="caption">
                  <h6 className="text-uppercase text-white">walls property</h6>
                  <h2 className="text-capitalize">family house</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Pariatur, assumenda!
                  </p>
                </div>
              </div>
            </a>
          </div>
          <div className="item">
            <a href="#">
              <div className="tc-image-caption4">
                <img src="images/800x1000.jpg" alt="img1" />
                <div className="caption">
                  <h6 className="text-uppercase text-white">walls property</h6>
                  <h2 className="text-capitalize">family house</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Pariatur, assumenda!
                  </p>
                </div>
              </div>
            </a>
          </div>
          <div className="item">
            <a href="#">
              <div className="tc-image-caption4">
                <img src="images/800x1000.jpg" alt="img1" />
                <div className="caption">
                  <h6 className="text-uppercase text-white">walls property</h6>
                  <h2 className="text-capitalize">family house</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Pariatur, assumenda!
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
      {/* <!-- END CAROUSEL HOMEPAGE 3 --> */}
      <div className="clearfix"></div>
      <div className="search__area bg-light">
        <div className="container">
          <div className="search__area-inner">
            <div className="row">
              <div className="col-6 col-lg-3 col-md-3">
                <div className="form-group">
                  <select className="wide select_option">
                    <option data-display="Property Status">
                      Property Status
                    </option>
                    <option>For Sale</option>
                    <option>For Rent</option>
                  </select>
                </div>
              </div>
              <div className="col-6 col-lg-3 col-md-3">
                <div className="form-group">
                  <select className="wide select_option">
                    <option data-display="Property Type">Property Type</option>
                    <option>Residential</option>
                    <option>Commercial</option>
                    <option>Land</option>
                    <option>Luxury</option>
                  </select>
                </div>
              </div>
              <div className="col-6 col-lg-3 col-md-3">
                <div className="form-group">
                  <select className="wide select_option">
                    <option data-display="Area From">Area From</option>
                    <option>1500</option>
                    <option>1200</option>
                    <option>900</option>
                    <option>600</option>
                    <option>300</option>
                    <option>100</option>
                  </select>
                </div>
              </div>
              <div className="col-6 col-lg-3 col-md-3">
                <div className="form-group">
                  <select className="wide select_option">
                    <option data-display="Locations">Locations</option>
                    <option>United Kingdom</option>
                    <option>American Samoa</option>
                    <option>Belgium</option>
                    <option>Canada</option>
                    <option>Delaware</option>
                    <option>Indonesia</option>
                    <option>Malaysia</option>
                    <option>Japan</option>
                  </select>
                </div>
              </div>
              <div className="col-6 col-lg-3 col-md-3">
                <div className="form-group">
                  <select className="wide select_option">
                    <option data-display="Bedrooms">Bedrooms</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                  </select>
                </div>
              </div>
              <div className="col-6 col-lg-3 col-md-3">
                <div className="form-group">
                  <select className="wide select_option">
                    <option data-display="Bathrooms">Bathrooms</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </select>
                </div>
              </div>
              <div className="col-12 col-lg-3 col-md-3">
                <div className="form-group">
                  <div className="filter__price">
                    <input
                      className="price-range"
                      type="text"
                      name="my_range"
                    />
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-3 col-md-3">
                <div className="form-group">
                  <button className="btn btn-primary text-uppercase btn-block">
                    search <i className="fa fa-search ml-1"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- POPULAR CITY --> */}
      <section className="popular__city-large">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-lg-6 mx-auto">
              <div className="title__head">
                <h2 className="text-center text-capitalize">popular city</h2>
                <p className="text-center text-capitalize">
                  Find Properties In These Cities.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-3">
              {/* <!-- CARD IMAGE --> */}
              <a href="#">
                <div className="card__image-hover-style-v3">
                  <div className="card__image-hover-style-v3-thumb h-230">
                    <img
                      src="images/placeholder/home1.jpeg"
                      alt=""
                      className="img-fluid w-100"
                    />
                  </div>
                  <div className="overlay">
                    <div className="desc">
                      <h6 className="text-capitalize">australia</h6>
                      <p className="text-capitalize">70 properties</p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-md-6 col-lg-3">
              {/* <!-- CARD IMAGE --> */}
              <a href="#">
                <div className="card__image-hover-style-v3">
                  <div className="card__image-hover-style-v3-thumb h-230">
                    <img
                      src="images/placeholder/home2.jpeg"
                      alt=""
                      className="img-fluid w-100"
                    />
                  </div>
                  <div className="overlay">
                    <div className="desc">
                      <h6 className="text-capitalize">australia</h6>
                      <p className="text-capitalize">70 properties</p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-md-6 col-lg-3">
              {/* <!-- CARD IMAGE --> */}
              <a href="#">
                <div className="card__image-hover-style-v3">
                  <div className="card__image-hover-style-v3-thumb h-230">
                    <img
                      src="images/placeholder/home3.jpeg"
                      alt=""
                      className="img-fluid w-100"
                    />
                  </div>
                  <div className="overlay">
                    <div className="desc">
                      <h6 className="text-capitalize">australia</h6>
                      <p className="text-capitalize">70 properties</p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-md-6 col-lg-3">
              {/* <!-- CARD IMAGE --> */}
              <a href="#">
                <div className="card__image-hover-style-v3">
                  <div className="card__image-hover-style-v3-thumb h-230">
                    <img
                      src="images/placeholder/home4.jpeg"
                      alt=""
                      className="img-fluid w-100"
                    />
                  </div>
                  <div className="overlay">
                    <div className="desc">
                      <h6 className="text-capitalize">australia</h6>
                      <p className="text-capitalize">70 properties</p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- END POPULAR CITY --> */}

      {/* <!-- FEATURED PROPERTIES --> */}
      <section className="featured__property bg-light">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-lg-6 mx-auto">
              <div className="title__head">
                <h2 className="text-center text-capitalize">featured properties</h2>
                <p className="text-center text-capitalize">
                  handpicked exclusive properties by our team.
                </p>
              </div>
            </div>
            <div className="clearfix"></div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="featured__property-carousel owl-carousel owl-theme">
                <div className="item">
                  {/* <!-- ONE --> */}
                  <div className="card__image card__box">
                    <div className="card__image-header h-250">
                      <div className="ribbon text-capitalize">featured</div>
                      <img
                        src="images/600x400.jpg"
                        alt=""
                        className="img-fluid w100 img-transition"
                      />
                      <div className="info">for sale</div>
                    </div>
                    <div className="card__image-body">
                      <span className="badge badge-primary text-capitalize mb-2">
                        house
                      </span>
                      <h6 className="text-capitalize">vila in coral gables</h6>

                      <p className="text-capitalize">
                        <i className="fa fa-map-marker"></i>
                        west flaminggo road, las vegas
                      </p>
                      <ul className="list-inline card__content">
                        <li className="list-inline-item">
                          <span>
                            baths <br />
                            <i className="fa fa-bath"></i> 2
                          </span>
                        </li>
                        <li className="list-inline-item">
                          <span>
                            beds <br />
                            <i className="fa fa-bed"></i> 3
                          </span>
                        </li>
                        <li className="list-inline-item">
                          <span>
                            rooms <br />
                            <i className="fa fa-inbox"></i> 3
                          </span>
                        </li>
                        <li className="list-inline-item">
                          <span>
                            area <br />
                            <i className="fa fa-map"></i> 4300 sq ft
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div className="card__image-footer">
                      <figure>
                        <img
                          src="images/80x80.jpg"
                          alt=""
                          className="img-fluid rounded-circle"
                        />
                      </figure>
                      <ul className="list-inline my-auto">
                        <li className="list-inline-item">
                          <a href="#"> tom wilson </a>
                        </li>
                      </ul>
                      <ul className="list-inline my-auto ml-auto">
                        <li className="list-inline-item">
                          <h6>$350.000</h6>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="item">
                  {/* <!-- TWO --> */}
                  <div className="card__image card__box">
                    <div className="card__image-header h-250">
                      <div className="ribbon text-capitalize">featured</div>
                      <img
                        src="images/600x400.jpg"
                        alt=""
                        className="img-fluid w100 img-transition"
                      />
                      <div className="info">for sale</div>
                    </div>
                    <div className="card__image-body">
                      <span className="badge badge-primary text-capitalize mb-2">
                        house
                      </span>
                      <h6 className="text-capitalize">
                        Ample Apartment At Last Floor
                      </h6>

                      <p className="text-capitalize">
                        <i className="fa fa-map-marker"></i>
                        west flaminggo road, las vegas
                      </p>
                      <ul className="list-inline card__content">
                        <li className="list-inline-item">
                          <span>
                            baths <br />
                            <i className="fa fa-bath"></i> 2
                          </span>
                        </li>
                        <li className="list-inline-item">
                          <span>
                            beds <br />
                            <i className="fa fa-bed"></i> 3
                          </span>
                        </li>
                        <li className="list-inline-item">
                          <span>
                            rooms <br />
                            <i className="fa fa-inbox"></i> 3
                          </span>
                        </li>
                        <li className="list-inline-item">
                          <span>
                            area <br />
                            <i className="fa fa-map"></i> 4300 sq ft
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div className="card__image-footer">
                      <figure>
                        <img
                          src="images/80x80.jpg"
                          alt=""
                          className="img-fluid rounded-circle"
                        />
                      </figure>
                      <ul className="list-inline my-auto">
                        <li className="list-inline-item">
                          <a href="#"> tom wilson </a>
                        </li>
                      </ul>
                      <ul className="list-inline my-auto ml-auto">
                        <li className="list-inline-item">
                          <h6>$350.000</h6>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="item">
                  {/* <!-- THREE --> */}
                  <div className="card__image card__box">
                    <div className="card__image-header h-250">
                      <div className="ribbon text-capitalize">featured</div>
                      <img
                        src="images/600x400.jpg"
                        alt=""
                        className="img-fluid w100 img-transition"
                      />
                      <div className="info">for sale</div>
                    </div>
                    <div className="card__image-body">
                      <span className="badge badge-primary text-capitalize mb-2">
                        house
                      </span>
                      <h6 className="text-capitalize">Contemporary Apartment</h6>

                      <p className="text-capitalize">
                        <i className="fa fa-map-marker"></i>
                        west flaminggo road, las vegas
                      </p>
                      <ul className="list-inline card__content">
                        <li className="list-inline-item">
                          <span>
                            baths <br />
                            <i className="fa fa-bath"></i> 2
                          </span>
                        </li>
                        <li className="list-inline-item">
                          <span>
                            beds <br />
                            <i className="fa fa-bed"></i> 3
                          </span>
                        </li>
                        <li className="list-inline-item">
                          <span>
                            rooms <br />
                            <i className="fa fa-inbox"></i> 3
                          </span>
                        </li>
                        <li className="list-inline-item">
                          <span>
                            area <br />
                            <i className="fa fa-map"></i> 4300 sq ft
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div className="card__image-footer">
                      <figure>
                        <img
                          src="images/80x80.jpg"
                          alt=""
                          className="img-fluid rounded-circle"
                        />
                      </figure>
                      <ul className="list-inline my-auto">
                        <li className="list-inline-item">
                          <a href="#"> tom wilson </a>
                        </li>
                      </ul>
                      <ul className="list-inline my-auto ml-auto">
                        <li className="list-inline-item">
                          <h6>$350.000</h6>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="item">
                  {/* <!-- FOUR --> */}
                  <div className="card__image card__box">
                    <div className="card__image-header h-250">
                      <div className="ribbon text-capitalize">featured</div>
                      <img
                        src="images/600x400.jpg"
                        alt=""
                        className="img-fluid w100 img-transition"
                      />
                      <div className="info">for sale</div>
                    </div>
                    <div className="card__image-body">
                      <span className="badge badge-primary text-capitalize mb-2">
                        house
                      </span>
                      <h6 className="text-capitalize">Family Home For Sale</h6>

                      <p className="text-capitalize">
                        <i className="fa fa-map-marker"></i>
                        west flaminggo road, las vegas
                      </p>
                      <ul className="list-inline card__content">
                        <li className="list-inline-item">
                          <span>
                            baths <br />
                            <i className="fa fa-bath"></i> 2
                          </span>
                        </li>
                        <li className="list-inline-item">
                          <span>
                            beds <br />
                            <i className="fa fa-bed"></i> 3
                          </span>
                        </li>
                        <li className="list-inline-item">
                          <span>
                            rooms <br />
                            <i className="fa fa-inbox"></i> 3
                          </span>
                        </li>
                        <li className="list-inline-item">
                          <span>
                            area <br />
                            <i className="fa fa-map"></i> 4300 sq ft
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div className="card__image-footer">
                      <figure>
                        <img
                          src="images/80x80.jpg"
                          alt=""
                          className="img-fluid rounded-circle"
                        />
                      </figure>
                      <ul className="list-inline my-auto">
                        <li className="list-inline-item">
                          <a href="#"> tom wilson </a>
                        </li>
                      </ul>
                      <ul className="list-inline my-auto ml-auto">
                        <li className="list-inline-item">
                          <h6>$350.000</h6>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="item">
                  {/* <!-- FIVE --> */}
                  <div className="card__image card__box">
                    <div className="card__image-header h-250">
                      <div className="ribbon text-capitalize">featured</div>
                      <img
                        src="images/600x400.jpg"
                        alt=""
                        className="img-fluid w100 img-transition"
                      />
                      <div className="info">for sale</div>
                    </div>
                    <div className="card__image-body">
                      <span className="badge badge-primary text-capitalize mb-2">
                        house
                      </span>
                      <h6 className="text-capitalize">
                        <a href="#">184 Lexington Avenue</a>
                      </h6>

                      <p className="text-capitalize">
                        <i className="fa fa-map-marker"></i>
                        west flaminggo road, las vegas
                      </p>
                      <ul className="list-inline card__content">
                        <li className="list-inline-item">
                          <span>
                            baths <br />
                            <i className="fa fa-bath"></i> 2
                          </span>
                        </li>
                        <li className="list-inline-item">
                          <span>
                            beds <br />
                            <i className="fa fa-bed"></i> 3
                          </span>
                        </li>
                        <li className="list-inline-item">
                          <span>
                            rooms <br />
                            <i className="fa fa-inbox"></i> 3
                          </span>
                        </li>
                        <li className="list-inline-item">
                          <span>
                            area <br />
                            <i className="fa fa-map"></i> 4300 sq ft
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div className="card__image-footer">
                      <figure>
                        <img
                          src="images/80x80.jpg"
                          alt=""
                          className="img-fluid rounded-circle"
                        />
                      </figure>
                      <ul className="list-inline my-auto">
                        <li className="list-inline-item">
                          <a href="#"> tom wilson </a>
                        </li>
                      </ul>
                      <ul className="list-inline my-auto ml-auto">
                        <li className="list-inline-item">
                          <h6>$350.000</h6>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="item">
                  {/* <!-- SIX --> */}
                  <div className="card__image card__box">
                    <div className="card__image-header h-250">
                      <div className="ribbon text-capitalize">featured</div>
                      <img
                        src="images/600x400.jpg"
                        alt=""
                        className="img-fluid w100 img-transition"
                      />
                      <div className="info">for sale</div>
                    </div>
                    <div className="card__image-body">
                      <span className="badge badge-primary text-capitalize mb-2">
                        house
                      </span>
                      <h6 className="text-capitalize">Luxury Villa With Pool</h6>

                      <p className="text-capitalize">
                        <i className="fa fa-map-marker"></i>
                        west flaminggo road, las vegas
                      </p>
                      <ul className="list-inline card__content">
                        <li className="list-inline-item">
                          <span>
                            baths <br />
                            <i className="fa fa-bath"></i> 2
                          </span>
                        </li>
                        <li className="list-inline-item">
                          <span>
                            beds <br />
                            <i className="fa fa-bed"></i> 3
                          </span>
                        </li>
                        <li className="list-inline-item">
                          <span>
                            rooms <br />
                            <i className="fa fa-inbox"></i> 3
                          </span>
                        </li>
                        <li className="list-inline-item">
                          <span>
                            area <br />
                            <i className="fa fa-map"></i> 4300 sq ft
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div className="card__image-footer">
                      <figure>
                        <img
                          src="images/80x80.jpg"
                          alt=""
                          className="img-fluid rounded-circle"
                        />
                      </figure>
                      <ul className="list-inline my-auto">
                        <li className="list-inline-item">
                          <a href="#"> tom wilson </a>
                        </li>
                      </ul>
                      <ul className="list-inline my-auto ml-auto">
                        <li className="list-inline-item">
                          <h6>$350.000</h6>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="card__image card__box">
                    <div className="card__image-header h-250">
                      <div className="ribbon text-capitalize">featured</div>
                      <img
                        src="images/600x400.jpg"
                        alt=""
                        className="img-fluid w100 img-transition"
                      />
                      <div className="info">for sale</div>
                    </div>
                    <div className="card__image-body">
                      <span className="badge badge-primary text-capitalize mb-2">
                        house
                      </span>
                      <h6 className="text-capitalize">
                        The Citizen Apartment 5th Floor
                      </h6>

                      <p className="text-capitalize">
                        <i className="fa fa-map-marker"></i>
                        west flaminggo road, las vegas
                      </p>
                      <ul className="list-inline card__content">
                        <li className="list-inline-item">
                          <span>
                            baths <br />
                            <i className="fa fa-bath"></i> 2
                          </span>
                        </li>
                        <li className="list-inline-item">
                          <span>
                            beds <br />
                            <i className="fa fa-bed"></i> 3
                          </span>
                        </li>
                        <li className="list-inline-item">
                          <span>
                            rooms <br />
                            <i className="fa fa-inbox"></i> 3
                          </span>
                        </li>
                        <li className="list-inline-item">
                          <span>
                            area <br />
                            <i className="fa fa-map"></i> 4300 sq ft
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div className="card__image-footer">
                      <figure>
                        <img
                          src="images/80x80.jpg"
                          alt=""
                          className="img-fluid rounded-circle"
                        />
                      </figure>
                      <ul className="list-inline">
                        <li className="list-inline-item">
                          <a href="#"> tom wilson </a>
                        </li>
                      </ul>
                      <ul className="list-inline my-auto ml-auto">
                        <li className="list-inline-item">
                          <h6>$350.000</h6>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="item">
                  {/* <!-- SEVEN --> */}
                  <div className="card__image card__box">
                    <div className="card__image-header h-250">
                      <div className="ribbon text-capitalize">featured</div>
                      <img
                        src="images/600x400.jpg"
                        alt=""
                        className="img-fluid w100 img-transition"
                      />
                      <div className="info">for sale</div>
                    </div>
                    <div className="card__image-body">
                      <span className="badge badge-primary text-capitalize mb-2">
                        house
                      </span>
                      <h6 className="text-capitalize">Family Home For Sale</h6>

                      <p className="text-capitalize">
                        <i className="fa fa-map-marker"></i>
                        west flaminggo road, las vegas
                      </p>
                      <ul className="list-inline card__content">
                        <li className="list-inline-item">
                          <span>
                            baths <br />
                            <i className="fa fa-bath"></i> 2
                          </span>
                        </li>
                        <li className="list-inline-item">
                          <span>
                            beds <br />
                            <i className="fa fa-bed"></i> 3
                          </span>
                        </li>
                        <li className="list-inline-item">
                          <span>
                            rooms <br />
                            <i className="fa fa-inbox"></i> 3
                          </span>
                        </li>
                        <li className="list-inline-item">
                          <span>
                            area <br />
                            <i className="fa fa-map"></i> 4300 sq ft
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div className="card__image-footer">
                      <figure>
                        <img
                          src="images/80x80.jpg"
                          alt=""
                          className="img-fluid rounded-circle"
                        />
                      </figure>
                      <ul className="list-inline my-auto">
                        <li className="list-inline-item">
                          <a href="#"> tom wilson </a>
                        </li>
                      </ul>
                      <ul className="list-inline my-auto ml-auto">
                        <li className="list-inline-item">
                          <h6>$350.000</h6>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- END FEATURED PROPERTIES -->

    <!-- ABOUT --> */}
      <section className="home__about">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="title__leading">
                {/* <!-- <h6 className="text-uppercase">trusted By thousands</h6> --> */}
                <h2 className="text-capitalize">why choose use?</h2>
                <p>
                  The first step in selling your property is to get a valuation
                  from local experts. They will inspect your home and take into
                  account its unique features, the area and market conditions
                  before providing you with the most accurate valuation.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <a href="#" className="btn btn-primary mt-3 text-capitalize">
                  read more <i className="fa fa-angle-right ml-3"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about__image">
                <div className="about__image-top">
                  <div className="about__image-top-hover">
                    <img src="images/600x400.jpg" alt="" className="img-fluid" />
                  </div>
                </div>
                <div className="about__image-bottom">
                  <div className="about__image-bottom-hover">
                    <img src="images/600x400.jpg" alt="" className="img-fluid" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- END ABOUT --> */}

      <section className="projects__partner bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 col-lg-6">
              <div className="title__head">
                <h2 className="text-center text-capitalize">our partners</h2>
                <p className="text-center text-capitalize">
                  Brand Partners Successful Projects Trusted Many Clients Real
                  Estate
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="projects__partner-logo">
                <ul className="list-inline mb-0">
                  <li className="list-inline-item">
                    <img
                      src="images/partner-logo6.png"
                      alt=""
                      className="img-fluid"
                    />
                  </li>
                  <li className="list-inline-item">
                    <img
                      src="images/partner-logo7.png"
                      alt=""
                      className="img-fluid"
                    />
                  </li>
                  <li className="list-inline-item">
                    <img
                      src="images/partner-logo8.png"
                      alt=""
                      className="img-fluid"
                    />
                  </li>
                  <li className="list-inline-item">
                    <img
                      src="images/partner-logo1.png"
                      alt=""
                      className="img-fluid"
                    />
                  </li>
                  <li className="list-inline-item">
                    <img
                      src="images/partner-logo5.png"
                      alt=""
                      className="img-fluid"
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- TESTIMONIAL --> */}
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-lg-6 mx-auto">
              <div className="title__head">
                <h2 className="text-center text-capitalize">what people says</h2>
                <p className="text-center text-capitalize">
                  people says about walls property.
                </p>
              </div>
            </div>
            <div className="clearfix"></div>
          </div>
          <div className="testimonial owl-carousel owl-theme">
            {/* <!-- TESTIMONIAL --> */}
            <div className="item testimonial__block">
              <div className="testimonial__block-card bg-reviews">
                <p>
                  Thank you walls property help me, choice dream home We were
                  impressed with the build quality, Plus they are competitively
                  priced.
                </p>
              </div>
              <div className="testimonial__block-users">
                <div className="testimonial__block-users-img">
                  <img src="images/80x80.jpg" alt="" className="img-fluid" />
                </div>
                <div className="testimonial__block-users-name">
                  jhon doe <br />
                  <span>owner, digital agency</span>
                </div>
              </div>
            </div>
            {/* <!-- END TESTIMONIAL -->
          <!-- TESTIMONIAL --> */}
            <div className="item testimonial__block">
              <div className="testimonial__block-card bg-reviews">
                <p>
                  Thank you walls property help me, choice dream home We were
                  impressed with the build quality, Plus they are competitively
                  priced.
                </p>
              </div>
              <div className="testimonial__block-users">
                <div className="testimonial__block-users-img">
                  <img src="images/80x80.jpg" alt="" className="img-fluid" />
                </div>
                <div className="testimonial__block-users-name">
                  jhon doe <br />
                  <span>owner, digital agency</span>
                </div>
              </div>
            </div>
            {/* <!-- END TESTIMONIAL --> */}
            {/* <!-- TESTIMONIAL --> */}
            <div className="item testimonial__block">
              <div className="testimonial__block-card bg-reviews">
                <p>
                  Thank you walls property help me, choice dream home We were
                  impressed with the build quality, Plus they are competitively
                  priced.
                </p>
              </div>
              <div className="testimonial__block-users">
                <div className="testimonial__block-users-img">
                  <img src="images/80x80.jpg" alt="" className="img-fluid" />
                </div>
                <div className="testimonial__block-users-name">
                  jhon doe <br />
                  <span>owner, digital agency</span>
                </div>
              </div>
            </div>
            {/* <!-- END TESTIMONIAL --> */}
            {/* <!-- TESTIMONIAL --> */}
            <div className="item testimonial__block">
              <div className="testimonial__block-card bg-reviews">
                <p>
                  Thank you walls property help me, choice dream home We were
                  impressed with the build quality, Plus they are competitively
                  priced.
                </p>
              </div>
              <div className="testimonial__block-users">
                <div className="testimonial__block-users-img">
                  <img src="images/80x80.jpg" alt="" className="img-fluid" />
                </div>
                <div className="testimonial__block-users-name">
                  jhon doe <br />
                  <span>owner, digital agency</span>
                </div>
              </div>
            </div>
            {/* <!-- END TESTIMONIAL --> */}
            {/* <!-- TESTIMONIAL --> */}
            <div className="item testimonial__block">
              <div className="testimonial__block-card bg-reviews">
                <p>
                  Thank you walls property help me, choice dream home We were
                  impressed with the build quality, Plus they are competitively
                  priced.
                </p>
              </div>
              <div className="testimonial__block-users">
                <div className="testimonial__block-users-img">
                  <img src="images/80x80.jpg" alt="" className="img-fluid" />
                </div>
                <div className="testimonial__block-users-name">
                  jhon doe <br />
                  <span>owner, digital agency</span>
                </div>
              </div>
            </div>
            {/* <!-- END TESTIMONIAL --> */}
          </div>
        </div>
      </section>
      {/* <!-- END TESTIMONIAL --> */}

      {/* <!-- BLOG --> */}
      <section className="blog__home bg-light">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-lg-6 mx-auto">
              <div className="title__head">
                <h2 className="text-center text-capitalize">lastest news</h2>
                <p className="text-center text-capitalize">
                  Find Of The Most Popular Real Estate Company All Around
                  Indonesia.
                </p>
              </div>
            </div>
            <div className="clearfix"></div>
          </div>
          <div className="row">
            <div className="col-md-4">
              {/* <!-- BLOG  --> */}
              <div className="card__image">
                <div className="card__image-header h-250">
                  <img
                    src="images/placeholder/home5.jpeg"
                    alt=""
                    className="img-fluid w100 img-transition"
                  />
                  <div className="info">event</div>
                </div>
                <div className="card__image-body">
                  {/* <!-- <span className="badge badge-secondary p-1 text-capitalize mb-3">May 08, 2019 </span> --> */}
                  <h6 className="text-capitalize">
                    <a href="/blog-single.html">Best Interior Oppertunity </a>
                  </h6>
                  <p className="mb-0">
                    Real estate festival is one of the famous feval for explain
                    to you how all this mistaolt deand praising pain wasnad I
                    will give complete
                  </p>
                </div>
                <div className="card__image-footer">
                  <figure>
                    <img
                      src="images/80x80.jpg"
                      alt=""
                      className="img-fluid rounded-circle"
                    />
                  </figure>
                  <ul className="list-inline my-auto">
                    <li className="list-inline-item">
                      <a href="#"> tom wilson </a>
                    </li>
                  </ul>
                  <ul className="list-inline my-auto ml-auto">
                    <li className="list-inline-item">
                      <a
                        href="/blog-single.html"
                        className="btn btn-sm btn-primary"
                      >
                        <small className="text-white">
                          read more <i className="fa fa-angle-right ml-1"></i>
                        </small>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* <!-- END BLOG --> */}
            </div>
            <div className="col-md-4">
              {/* <!-- BLOG  --> */}
              <div className="card__image">
                <div className="card__image-header h-250">
                  <img
                    src="images/placeholder/home6.jpeg"
                    alt=""
                    className="img-fluid w100 img-transition"
                  />
                  <div className="info">event</div>
                </div>
                <div className="card__image-body">
                  {/* <!-- <span className="badge badge-secondary p-1 text-capitalize mb-3">May 08, 2019 </span> --> */}
                  <h6 className="text-capitalize">
                    <a href="#">Tips & Trick buy real estate </a>
                  </h6>
                  <p className="mb-0">
                    Real estate festival is one of the famous feval for explain
                    to you how all this mistaolt deand praising pain wasnad I
                    will give complete
                  </p>
                </div>
                <div className="card__image-footer">
                  <figure>
                    <img
                      src="images/80x80.jpg"
                      alt=""
                      className="img-fluid rounded-circle"
                    />
                  </figure>
                  <ul className="list-inline my-auto">
                    <li className="list-inline-item">
                      <a href="#"> tom wilson </a>
                    </li>
                  </ul>
                  <ul className="list-inline my-auto ml-auto">
                    <li className="list-inline-item">
                      <a href="#" className="btn btn-sm btn-primary">
                        <small className="text-white">
                          read more <i className="fa fa-angle-right ml-1"></i>
                        </small>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* <!-- END BLOG --> */}
            </div>
            <div className="col-md-4">
              {/* <!-- BLOG  --> */}
              <div className="card__image">
                <div className="card__image-header h-250">
                  <img
                    src="images/placeholder/home.jpeg"
                    alt=""
                    className="img-fluid w100 img-transition"
                  />
                  <div className="info">event</div>
                </div>
                <div className="card__image-body">
                  {/* <!-- <span className="badge badge-secondary p-1 text-capitalize mb-3">May 08, 2019 </span> --> */}
                  <h6 className="text-capitalize">
                    <a href="#">Our Must Popular Deluxe House </a>
                  </h6>
                  <p className="mb-0">
                    Real estate festival is one of the famous feval for explain
                    to you how all this mistaolt deand praising pain wasnad I
                    will give complete
                  </p>
                </div>
                <div className="card__image-footer">
                  <figure>
                    <img
                      src="images/80x80.jpg"
                      alt=""
                      className="img-fluid rounded-circle"
                    />
                  </figure>
                  <ul className="list-inline my-auto">
                    <li className="list-inline-item">
                      <a href="#"> tom wilson </a>
                    </li>
                  </ul>
                  <ul className="list-inline my-auto ml-auto">
                    <li className="list-inline-item">
                      <a href="#" className="btn btn-sm btn-primary">
                        <small className="text-white">
                          read more <i className="fa fa-angle-right ml-1"></i>
                        </small>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* <!-- END BLOG --> */}
            </div>
          </div>
        </div>
      </section>
      {/* <!-- END BLOG --> */}

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

     
    </main>
  );
}
