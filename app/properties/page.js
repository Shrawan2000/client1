import React from "react";
import "../dist/css/styles.css";
function page() {
  return (
    <div style={{ marginTop: 35 }}>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="products__filter mb-30">
                <div className="products__filter__group">
                  <div className="products__filter__header">
                    <h5 className="text-center text-capitalize">property filter</h5>
                  </div>
                  <div className="products__filter__body">
                    <div className="form-group">
                      <select className="wide select_option">
                        <option data-display="Property Status">
                          Property Status
                        </option>
                        <option>For Sale</option>
                        <option>For Rent</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <select className="wide select_option">
                        <option data-display="Property Type">
                          Property Type
                        </option>
                        <option>Residential</option>
                        <option>Commercial</option>
                        <option>Land</option>
                        <option>Luxury</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <select className="wide select_option">
                        <option data-display="Area From">Area From </option>
                        <option>1500</option>
                        <option>1200</option>
                        <option>900</option>
                        <option>600</option>
                        <option>300</option>
                        <option>100</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <select className="wide select_option">
                        <option data-display="Locations">Locations</option>
                        <option>United Kingdom</option>
                        <option>American Samoa</option>
                        <option>Belgium</option>
                        <option>Canada</option>
                        <option>Delaware</option>
                      </select>
                    </div>
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
                    <div className="form-group">
                      <div className="form-group">
                        <select className="wide select_option">
                          <option data-display="Bathrooms">Bathrooms</option>
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                        </select>
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="mb-3">Price range</label>
                      <div className="filter__price">
                        <input
                          className="price-range"
                          type="text"
                          name="my_range"
                        />
                      </div>
                    </div>

                    <div className="form-group mb-0 mt-2">
                      <a
                        className="btn btn-outline-primary btn-block text-capitalize advanced-filter"
                        data-toggle="collapse"
                        href="#multiCollapseExample1"
                        aria-controls="multiCollapseExample1"
                      >
                        <i className="fa fa-plus-circle"></i> advanced filter
                      </a>

                      <div
                        className="collapse multi-collapse"
                        id="multiCollapseExample1"
                      >
                        <div className="advancedfilter">
                          <div className="checkbox checkbox-primary">
                            <input id="checkbox2" type="checkbox" />
                            <label
                              for="checkbox2"
                              className="label-brand text-capitalize"
                            >
                              Air Conditioning
                            </label>
                          </div>
                          <div className="checkbox checkbox-primary">
                            <input id="checkbox3" type="checkbox" />
                            <label
                              for="checkbox3"
                              className="label-brand text-capitalize"
                            >
                              Swiming Pool
                            </label>
                          </div>
                          <div className="checkbox checkbox-primary">
                            <input id="checkbox4" type="checkbox" />
                            <label
                              for="checkbox4"
                              className="label-brand text-capitalize"
                            >
                              Central Heating
                            </label>
                          </div>
                          <div className="checkbox checkbox-primary">
                            <input id="checkbox5" type="checkbox" />
                            <label
                              for="checkbox5"
                              className="label-brand text-capitalize"
                            >
                              Spa & Massage
                            </label>
                          </div>
                          <div className="checkbox checkbox-primary">
                            <input id="checkbox6" type="checkbox" />
                            <label
                              for="checkbox6"
                              className="label-brand text-capitalize"
                            >
                              Pets Allow
                            </label>
                          </div>
                          <div className="checkbox checkbox-primary">
                            <input id="checkbox7" type="checkbox" />
                            <label
                              for="checkbox7"
                              className="label-brand text-capitalize"
                            >
                              Air Conditioning
                            </label>
                          </div>

                          <div className="checkbox checkbox-primary">
                            <input id="checkbox8" type="checkbox" />
                            <label
                              for="checkbox8"
                              className="label-brand text-capitalize"
                            >
                              Gym
                            </label>
                          </div>

                          <div className="checkbox checkbox-primary">
                            <input id="checkbox9" type="checkbox" />
                            <label
                              for="checkbox9"
                              className="label-brand text-capitalize"
                            >
                              Alarm
                            </label>
                          </div>
                          <div className="checkbox checkbox-primary">
                            <input id="checkbox10" type="checkbox" />
                            <label
                              for="checkbox10"
                              className="label-brand text-capitalize"
                            >
                              Window Covering
                            </label>
                          </div>
                          <div className="checkbox checkbox-primary">
                            <input id="checkbox11" type="checkbox" />
                            <label
                              for="checkbox11"
                              className="label-brand text-capitalize"
                            >
                              Free WiFi
                            </label>
                          </div>
                          <div className="checkbox checkbox-primary">
                            <input id="checkbox12" type="checkbox" />
                            <label
                              for="checkbox12"
                              className="label-brand text-capitalize"
                            >
                              Car Parking
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="products__filter__footer">
                    <div className="form-group mb-0">
                      <button className="btn btn-primary text-capitalize btn-block">
                        <i className="fa fa-search ml-1"></i> search property{" "}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" wrapper__list__category">
                <div className="widget widget__archive">
                  <div className="widget__title">
                    <h5 className="text-dark mb-0 text-center">
                      Categories Property
                    </h5>
                  </div>
                  <ul className="list-unstyled">
                    <li>
                      <a href="#" className="text-capitalize">
                        apartement
                        <span className="badge badge-primary">14</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-capitalize">
                        villa
                        <span className="badge badge-primary">4</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-capitalize">
                        family house
                        <span className="badge badge-primary">2</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-capitalize">
                        modern villa
                        <span className="badge badge-primary">8</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-capitalize">
                        town house
                        <span className="badge badge-primary">10</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-capitalize">
                        office
                        <span className="badge badge-primary">12</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="download mb-0">
                <h5 className="text-center text-capitalize">
                  Property Attachments
                </h5>
                <div className="download__item">
                  <a href="#" target="_blank">
                    <i className="fa fa-file-pdf-o mr-3" aria-hidden="true"></i>
                    Download Document.Pdf
                  </a>
                </div>
                <div className="download__item">
                  <a href="#" target="_blank">
                    <i className="fa fa-file-word-o mr-3" aria-hidden="true"></i>
                    Presentation 2016-17.Doc
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="row">
                <div className="col-lg-12">
                  <div className="tabs__custom-v2">
                    <ul className="nav nav-pills myTab" role="tablist">
                      <li className="list-inline-item mr-auto">
                        <span className="title-text">Sort by</span>
                        <div className="btn-group">
                          <a
                            href="javascript:void(0)"
                            className="dropdown-toggle"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            Based Properties
                          </a>
                          <div className="dropdown-menu">
                            <a className="dropdown-item" href="javascript:void(0)">
                              Low to High Price
                            </a>
                            <a className="dropdown-item" href="javascript:void(0)">
                              High to Low Price{" "}
                            </a>
                            <a className="dropdown-item" href="javascript:void(0)">
                              Sell Properties
                            </a>

                            <a className="dropdown-item" href="javascript:void(0)">
                              Rent Properties
                            </a>
                          </div>
                        </div>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link pills-tab-one"
                          data-toggle="pill"
                          href="#pills-tab-one"
                          role="tab"
                          aria-controls="pills-tab-one"
                          aria-selected="true"
                        >
                          <span className="fa fa-th-list"></span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link active pills-tab-two"
                          data-toggle="pill"
                          href="#pills-tab-two"
                          role="tab"
                          aria-controls="pills-tab-two"
                          aria-selected="false"
                        >
                          <span className="fa fa-th-large"></span>
                        </a>
                      </li>
                    </ul>

                    <div className="tab-content" id="myTabContent">
                      <div
                        className="tab-pane fade"
                        id="pills-tab-one"
                        role="tabpanel"
                        aria-labelledby="pills-tab-one"
                      >
                        <div className="row">
                          <div className="col-lg-12">
                            {/* hello */}
                            <div className="card__image card__box-v1">
                              <div className="row no-gutters">
                                <div className="col-md-4 col-lg-3 col-xl-4">
                                  <div className="card__image__header h-250">
                                    <a href="#">
                                      <div className="ribbon text-capitalize">
                                        sold out
                                      </div>
                                      <img
                                        src="../../images/placeholder/600x400.jpg"
                                        alt=""
                                        className="img-fluid w100 img-transition"
                                      />
                                      <div className="info"> for sale</div>
                                    </a>
                                  </div>
                                </div>
                                <div className="col-md-4 col-lg-6 col-xl-5 my-auto">
                                  <div className="card__image__body">
                                    <span className="badge badge-primary text-capitalize mb-2">
                                      house
                                    </span>
                                    <h6>
                                      <a href="#">vila in coral gables</a>
                                    </h6>
                                    <div className="card__image__body-desc">
                                      <p className="text-capitalize">
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Libero, alias!
                                      </p>
                                      <p className="text-capitalize">
                                        <i className="fa fa-map-marker"></i>
                                        west flaminggo road, las vegas
                                      </p>
                                    </div>

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
                                </div>
                                <div className="col-md-4 col-lg-3 col-xl-3 my-auto card__image__footer-first">
                                  <div className="card__image__footer">
                                    <figure>
                                      <img
                                        src="../../images/placeholder/80x80.jpg"
                                        alt=""
                                        className="img-fluid rounded-circle"
                                      />
                                    </figure>
                                    <ul className="list-inline my-auto">
                                      <li className="list-inline-item name">
                                        <a href="#">tom wilson</a>
                                      </li>
                                    </ul>
                                    <ul className="list-inline my-auto ml-auto price">
                                      <li className="list-inline-item ">
                                        <h6>$350.000</h6>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="card__image card__box-v1">
                              <div className="row no-gutters">
                                <div className="col-md-4 col-lg-3 col-xl-4">
                                  <div className="card__image__header h-250">
                                    <a href="#">
                                      <div className="ribbon text-capitalize">
                                        sold out
                                      </div>
                                      <img
                                        src="images/placeholder/home1.jpeg"
                                        alt=""
                                        className="img-fluid w100 img-transition"
                                      />
                                      <div className="info"> for sale</div>
                                    </a>
                                  </div>
                                </div>
                                <div className="col-md-4 col-lg-6 col-xl-5 my-auto">
                                  <div className="card__image__body">
                                    <span className="badge badge-primary text-capitalize mb-2">
                                      house
                                    </span>
                                    <h6>
                                      <a href="#">
                                        Ample Apartment At Last Floor
                                      </a>
                                    </h6>
                                    <div className="card__image__body-desc">
                                      <p className="text-capitalize">
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Libero, alias!
                                      </p>
                                      <p className="text-capitalize">
                                        <i className="fa fa-map-marker"></i>
                                        west flaminggo road, las vegas
                                      </p>
                                    </div>

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
                                </div>
                                <div className="col-md-4 col-lg-3 col-xl-3 my-auto card__image__footer-first">
                                  <div className="card__image__footer">
                                    <figure>
                                      <img
                                        src="../../images/placeholder/80x80.jpg"
                                        alt=""
                                        className="img-fluid rounded-circle"
                                      />
                                    </figure>
                                    <ul className="list-inline my-auto">
                                      <li className="list-inline-item name">
                                        <a href="#">tom wilson</a>
                                      </li>
                                    </ul>
                                    <ul className="list-inline  my-auto ml-auto price">
                                      <li className="list-inline-item ">
                                        <h6>$350.000</h6>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="card__image card__box-v1">
                              <div className="row no-gutters">
                                <div className="col-md-4 col-lg-3 col-xl-4">
                                  <div className="card__image__header h-250">
                                    <a href="#">
                                      <div className="ribbon text-capitalize">
                                        sold out
                                      </div>
                                      <img
                                        src="../../images/placeholder/600x400.jpg"
                                        alt=""
                                        className="img-fluid w100 img-transition"
                                      />
                                      <div className="info"> for sale</div>
                                    </a>
                                  </div>
                                </div>
                                <div className="col-md-4 col-lg-6 col-xl-5 my-auto">
                                  <div className="card__image__body">
                                    <span className="badge badge-primary text-capitalize mb-2">
                                      house
                                    </span>
                                    <h6>
                                      <a href="#">
                                        Ample Apartment At Last Floor
                                      </a>
                                    </h6>
                                    <div className="card__image__body-desc">
                                      <p className="text-capitalize">
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Libero, alias!
                                      </p>
                                      <p className="text-capitalize">
                                        <i className="fa fa-map-marker"></i>
                                        west flaminggo road, las vegas
                                      </p>
                                    </div>

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
                                </div>
                                <div className="col-md-4 col-lg-3 col-xl-3 my-auto card__image__footer-first">
                                  <div className="card__image__footer">
                                    <figure>
                                      <img
                                        src="../../images/placeholder/80x80.jpg"
                                        alt=""
                                        className="img-fluid rounded-circle"
                                      />
                                    </figure>
                                    <ul className="list-inline my-auto">
                                      <li className="list-inline-item name">
                                        <a href="#">tom wilson</a>
                                      </li>
                                    </ul>
                                    <ul className="list-inline  my-auto ml-auto price">
                                      <li className="list-inline-item ">
                                        <h6>$350.000</h6>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="card__image card__box-v1">
                              <div className="row no-gutters">
                                <div className="col-md-4 col-lg-3 col-xl-4">
                                  <div className="card__image__header h-250">
                                    <a href="#">
                                      <div className="ribbon text-capitalize">
                                        sold out
                                      </div>
                                      <img
                                        src="../../images/placeholder/600x400.jpg"
                                        alt=""
                                        className="img-fluid w100 img-transition"
                                      />
                                      <div className="info"> for sale</div>
                                    </a>
                                  </div>
                                </div>
                                <div className="col-md-4 col-lg-6 col-xl-5 my-auto">
                                  <div className="card__image__body">
                                    <span className="badge badge-primary text-capitalize mb-2">
                                      house
                                    </span>
                                    <h6>
                                      <a href="#">Family Home For Sale</a>
                                    </h6>
                                    <div className="card__image__body-desc">
                                      <p className="text-capitalize">
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Libero, alias!
                                      </p>
                                      <p className="text-capitalize">
                                        <i className="fa fa-map-marker"></i>
                                        west flaminggo road, las vegas
                                      </p>
                                    </div>

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
                                </div>
                                <div className="col-md-4 col-lg-3 col-xl-3 my-auto card__image__footer-first">
                                  <div className="card__image__footer">
                                    <figure>
                                      <img
                                        src="../../images/placeholder/80x80.jpg"
                                        alt=""
                                        className="img-fluid rounded-circle"
                                      />
                                    </figure>
                                    <ul className="list-inline my-auto">
                                      <li className="list-inline-item name">
                                        <a href="#">tom wilson</a>
                                      </li>
                                    </ul>
                                    <ul className="list-inline  my-auto ml-auto price">
                                      <li className="list-inline-item ">
                                        <h6>$350.000</h6>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="card__image card__box-v1">
                              <div className="row no-gutters">
                                <div className="col-md-4 col-lg-3 col-xl-4">
                                  <div className="card__image__header h-250">
                                    <a href="#">
                                      <div className="ribbon text-capitalize">
                                        sold out
                                      </div>
                                      <img
                                        src="../../images/placeholder/600x400.jpg"
                                        alt=""
                                        className="img-fluid w100 img-transition"
                                      />
                                      <div className="info"> for sale</div>
                                    </a>
                                  </div>
                                </div>
                                <div className="col-md-4 col-lg-6 col-xl-5 my-auto">
                                  <div className="card__image__body">
                                    <span className="badge badge-primary text-capitalize mb-2">
                                      house
                                    </span>
                                    <h6>
                                      <a href="#">Luxury Villa With Pool</a>
                                    </h6>
                                    <div className="card__image__body-desc">
                                      <p className="text-capitalize">
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Libero, alias!
                                      </p>
                                      <p className="text-capitalize">
                                        <i className="fa fa-map-marker"></i>
                                        west flaminggo road, las vegas
                                      </p>
                                    </div>

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
                                </div>
                                <div className="col-md-4 col-lg-3 col-xl-3 my-auto card__image__footer-first">
                                  <div className="card__image__footer">
                                    <figure>
                                      <img
                                        src="../../images/placeholder/80x80.jpg"
                                        alt=""
                                        className="img-fluid rounded-circle"
                                      />
                                    </figure>
                                    <ul className="list-inline my-auto">
                                      <li className="list-inline-item name">
                                        <a href="#">tom wilson</a>
                                      </li>
                                    </ul>
                                    <ul className="list-inline  my-auto ml-auto price">
                                      <li className="list-inline-item ">
                                        <h6>$350.000</h6>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="card__image card__box-v1">
                              <div className="row no-gutters">
                                <div className="col-md-4 col-lg-3 col-xl-4">
                                  <div className="card__image__header h-250">
                                    <a href="#">
                                      <div className="ribbon text-capitalize">
                                        sold out
                                      </div>
                                      <img
                                        src="../../images/placeholder/600x400.jpg"
                                        alt=""
                                        className="img-fluid w100 img-transition"
                                      />
                                      <div className="info"> for sale</div>
                                    </a>
                                  </div>
                                </div>
                                <div className="col-md-4 col-lg-6 col-xl-5 my-auto">
                                  <div className="card__image__body">
                                    <span className="badge badge-primary text-capitalize mb-2">
                                      house
                                    </span>
                                    <h6>
                                      <a href="#">184 Lexington Avenue</a>
                                    </h6>
                                    <div className="card__image__body-desc">
                                      <p className="text-capitalize">
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Libero, alias!
                                      </p>
                                      <p className="text-capitalize">
                                        <i className="fa fa-map-marker"></i>
                                        west flaminggo road, las vegas
                                      </p>
                                    </div>

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
                                </div>
                                <div className="col-md-4 col-lg-3 col-xl-3 my-auto card__image__footer-first">
                                  <div className="card__image__footer">
                                    <figure>
                                      <img
                                        src="../../images/placeholder/80x80.jpg"
                                        alt=""
                                        className="img-fluid rounded-circle"
                                      />
                                    </figure>
                                    <ul className="list-inline my-auto">
                                      <li className="list-inline-item name">
                                        <a href="#">tom wilson</a>
                                      </li>
                                    </ul>
                                    <ul className="list-inline  my-auto ml-auto price">
                                      <li className="list-inline-item ">
                                        <h6>$350.000</h6>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="card__image card__box-v1">
                              <div className="row no-gutters">
                                <div className="col-md-4 col-lg-3 col-xl-4">
                                  <div className="card__image__header h-250">
                                    <a href="#">
                                      <div className="ribbon text-capitalize">
                                        sold out
                                      </div>
                                      <img
                                        src="../../images/placeholder/600x400.jpg"
                                        alt=""
                                        className="img-fluid w100 img-transition"
                                      />
                                      <div className="info"> for sale</div>
                                    </a>
                                  </div>
                                </div>
                                <div className="col-md-4 col-lg-6 col-xl-5 my-auto">
                                  <div className="card__image__body">
                                    <span className="badge badge-primary text-capitalize mb-2">
                                      house
                                    </span>
                                    <h6>
                                      <a href="#">
                                        The Citizen Apartment 5th Floor
                                      </a>
                                    </h6>
                                    <div className="card__image__body-desc">
                                      <p className="text-capitalize">
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Libero, alias!
                                      </p>
                                      <p className="text-capitalize">
                                        <i className="fa fa-map-marker"></i>
                                        west flaminggo road, las vegas
                                      </p>
                                    </div>

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
                                </div>
                                <div className="col-md-4 col-lg-3 col-xl-3 my-auto card__image__footer-first">
                                  <div className="card__image__footer">
                                    <figure>
                                      <img
                                        src="../../images/placeholder/80x80.jpg"
                                        alt=""
                                        className="img-fluid rounded-circle"
                                      />
                                    </figure>
                                    <ul className="list-inline my-auto">
                                      <li className="list-inline-item name">
                                        <a href="#">tom wilson</a>
                                      </li>
                                    </ul>
                                    <ul className="list-inline  my-auto ml-auto price">
                                      <li className="list-inline-item ">
                                        <h6>$350.000</h6>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="clearfix"></div>
                      </div>
                      <div
                        className="tab-pane fade show active"
                        id="pills-tab-two"
                        role="tabpanel"
                        aria-labelledby="pills-tab-two"
                      >
                        <div className="row">
                          <div className="col-md-6 col-lg-6 mt-4">
                            <a href="#">
                              <div className="card__image-hover h-250">
                                <div className="card__image-hover-overlay">
                                  <div className="listing-badges">
                                    <span className="featured">Featured</span>
                                    <span>For Rent</span>
                                  </div>
                                  <div className="card__image-content">
                                    <div className="card__image-content-desc">
                                      <h6> Citra Garden Estate</h6>
                                      <p className="mb-0"> $1300 / monthly</p>
                                    </div>
                                    <ul className="list-inline card__hidden-content">
                                      <li className="list-inline-item">
                                        Baths
                                        <span>
                                          <i className="fa fa-bath"></i> 2
                                        </span>
                                      </li>
                                      <li className="list-inline-item">
                                        Beds
                                        <span>
                                          <i className="fa fa-bed"></i> 2
                                        </span>
                                      </li>
                                      <li className="list-inline-item">
                                        Rooms
                                        <span>
                                          <i className="fa fa-inbox"></i> 3
                                        </span>
                                      </li>
                                      <li className="list-inline-item">
                                        Area
                                        <span>
                                          <i className="fa fa-map"></i> 1450 sq ft
                                        </span>
                                      </li>
                                    </ul>
                                  </div>
                                  <img
                                    alt=""
                                    src="images/placeholder/home5.jpeg"
                                    className="img-fluid h-40 "
                                  />
                                </div>
                              </div>
                            </a>
                          </div>
                          <div className="col-md-6 col-lg-6 mt-4">
                            <a href="#">
                              <div className="card__image-hover h-250">
                                <div className="card__image-hover-overlay">
                                  <div className="listing-badges">
                                    <span className="featured">Featured</span>
                                    <span>For Rent</span>
                                  </div>
                                  <div className="card__image-content">
                                    <div className="card__image-content-desc">
                                      <h6> Ample Apartment At Last Floor</h6>
                                      <p className="mb-0"> $1300 / monthly</p>
                                    </div>
                                    <ul className="list-inline card__hidden-content">
                                      <li className="list-inline-item">
                                        Baths
                                        <span>
                                          <i className="fa fa-bath"></i> 2
                                        </span>
                                      </li>
                                      <li className="list-inline-item">
                                        Beds
                                        <span>
                                          <i className="fa fa-bed"></i> 2
                                        </span>
                                      </li>
                                      <li className="list-inline-item">
                                        Rooms
                                        <span>
                                          <i className="fa fa-inbox"></i> 3
                                        </span>
                                      </li>
                                      <li className="list-inline-item">
                                        Area
                                        <span>
                                          <i className="fa fa-map"></i> 1450 sq ft
                                        </span>
                                      </li>
                                    </ul>
                                  </div>
                                  <img
                                    alt=""
                                    src="images/placeholder/home3.jpeg"
                                    className="img-fluid h-40 "
                                  />
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6 col-lg-6 mt-4">
                            <a href="#">
                              <div className="card__image-hover h-250">
                                <div className="card__image-hover-overlay">
                                  <div className="listing-badges">
                                    <span className="featured">Featured</span>
                                    <span>For Rent</span>
                                  </div>
                                  <div className="card__image-content">
                                    <div className="card__image-content-desc">
                                      <h6> Contemporary Apartment</h6>
                                      <p className="mb-0"> $1300 / monthly</p>
                                    </div>
                                    <ul className="list-inline card__hidden-content">
                                      <li className="list-inline-item">
                                        Baths
                                        <span>
                                          <i className="fa fa-bath"></i> 2
                                        </span>
                                      </li>
                                      <li className="list-inline-item">
                                        Beds
                                        <span>
                                          <i className="fa fa-bed"></i> 2
                                        </span>
                                      </li>
                                      <li className="list-inline-item">
                                        Rooms
                                        <span>
                                          <i className="fa fa-inbox"></i> 3
                                        </span>
                                      </li>
                                      <li className="list-inline-item">
                                        Area
                                        <span>
                                          <i className="fa fa-map"></i> 1450 sq ft
                                        </span>
                                      </li>
                                    </ul>
                                  </div>
                                  <img
                                    alt=""
                                    src="images/placeholder/home5.jpeg"
                                    className="img-fluid h-40 "
                                  />
                                </div>
                              </div>
                            </a>
                          </div>
                          <div className="col-md-6 col-lg-6 mt-4">
                            <a href="#">
                              <div className="card__image-hover h-250">
                                <div className="card__image-hover-overlay">
                                  <div className="listing-badges">
                                    <span className="featured">Featured</span>
                                    <span>For Rent</span>
                                  </div>
                                  <div className="card__image-content">
                                    <div className="card__image-content-desc">
                                      <h6> Citra Garden Estate</h6>
                                      <p className="mb-0"> $1300 / monthly</p>
                                    </div>
                                    <ul className="list-inline card__hidden-content">
                                      <li className="list-inline-item">
                                        Baths
                                        <span>
                                          <i className="fa fa-bath"></i> 2
                                        </span>
                                      </li>
                                      <li className="list-inline-item">
                                        Beds
                                        <span>
                                          <i className="fa fa-bed"></i> 2
                                        </span>
                                      </li>
                                      <li className="list-inline-item">
                                        Rooms
                                        <span>
                                          <i className="fa fa-inbox"></i> 3
                                        </span>
                                      </li>
                                      <li className="list-inline-item">
                                        Area
                                        <span>
                                          <i className="fa fa-map"></i> 1450 sq ft
                                        </span>
                                      </li>
                                    </ul>
                                  </div>
                                  <img
                                    alt=""
                                    src="images/placeholder/home.jpeg"
                                    className="img-fluid h-40 "
                                  />
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6 col-lg-6 mt-4">
                            <a href="#">
                              <div className="card__image-hover h-250">
                                <div className="card__image-hover-overlay">
                                  <div className="listing-badges">
                                    <span className="featured">Featured</span>
                                    <span>For Rent</span>
                                  </div>
                                  <div className="card__image-content">
                                    <div className="card__image-content-desc">
                                      <h6> Family Home For Sale</h6>
                                      <p className="mb-0"> $1300 / monthly</p>
                                    </div>
                                    <ul className="list-inline card__hidden-content">
                                      <li className="list-inline-item">
                                        Baths
                                        <span>
                                          <i className="fa fa-bath"></i> 2
                                        </span>
                                      </li>
                                      <li className="list-inline-item">
                                        Beds
                                        <span>
                                          <i className="fa fa-bed"></i> 2
                                        </span>
                                      </li>
                                      <li className="list-inline-item">
                                        Rooms
                                        <span>
                                          <i className="fa fa-inbox"></i> 3
                                        </span>
                                      </li>
                                      <li className="list-inline-item">
                                        Area
                                        <span>
                                          <i className="fa fa-map"></i> 1450 sq ft
                                        </span>
                                      </li>
                                    </ul>
                                  </div>
                                  <img
                                    alt=""
                                    src="images/placeholder/home1.jpeg"
                                    className="img-fluid h-40 "
                                  />
                                </div>
                              </div>
                            </a>
                          </div>
                          <div className="col-md-6 col-lg-6 mt-4">
                            <a href="#">
                              <div className="card__image-hover h-250">
                                <div className="card__image-hover-overlay">
                                  <div className="listing-badges">
                                    <span className="featured">Featured</span>
                                    <span>For Rent</span>
                                  </div>
                                  <div className="card__image-content">
                                    <div className="card__image-content-desc">
                                      <h6> Citra Garden Estate</h6>
                                      <p className="mb-0"> $1300 / monthly</p>
                                    </div>
                                    <ul className="list-inline card__hidden-content">
                                      <li className="list-inline-item">
                                        Baths
                                        <span>
                                          <i className="fa fa-bath"></i> 2
                                        </span>
                                      </li>
                                      <li className="list-inline-item">
                                        Beds
                                        <span>
                                          <i className="fa fa-bed"></i> 2
                                        </span>
                                      </li>
                                      <li className="list-inline-item">
                                        Rooms
                                        <span>
                                          <i className="fa fa-inbox"></i> 3
                                        </span>
                                      </li>
                                      <li className="list-inline-item">
                                        Area
                                        <span>
                                          <i className="fa fa-map"></i> 1450 sq ft
                                        </span>
                                      </li>
                                    </ul>
                                  </div>
                                  <img
                                    alt=""
                                    src="images/placeholder/home8.jpeg"
                                    className="img-fluid h-40 "
                                  />
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6 col-lg-6 mt-4">
                            <a href="#">
                              <div className="card__image-hover h-250">
                                <div className="card__image-hover-overlay">
                                  <div className="listing-badges">
                                    <span className="featured">Featured</span>
                                    <span>For Rent</span>
                                  </div>
                                  <div className="card__image-content">
                                    <div className="card__image-content-desc">
                                      <h6> Luxury Villa With Pool</h6>
                                      <p className="mb-0"> $1300 / monthly</p>
                                    </div>
                                    <ul className="list-inline card__hidden-content">
                                      <li className="list-inline-item">
                                        Baths
                                        <span>
                                          <i className="fa fa-bath"></i> 2
                                        </span>
                                      </li>
                                      <li className="list-inline-item">
                                        Beds
                                        <span>
                                          <i className="fa fa-bed"></i> 2
                                        </span>
                                      </li>
                                      <li className="list-inline-item">
                                        Rooms
                                        <span>
                                          <i className="fa fa-inbox"></i> 3
                                        </span>
                                      </li>
                                      <li className="list-inline-item">
                                        Area
                                        <span>
                                          <i className="fa fa-map"></i> 1450 sq ft
                                        </span>
                                      </li>
                                    </ul>
                                  </div>
                                  <img
                                    alt=""
                                    src="images/placeholder/home2.jpeg"
                                    className="img-fluid h-40 "
                                  />
                                </div>
                              </div>
                            </a>
                          </div>
                          <div className="col-md-6 col-lg-6 mt-4">
                            <a href="#">
                              <div className="card__image-hover h-250">
                                <div className="card__image-hover-overlay">
                                  <div className="listing-badges">
                                    <span className="featured">Featured</span>
                                    <span>For Rent</span>
                                  </div>
                                  <div className="card__image-content">
                                    <div className="card__image-content-desc">
                                      <h6> Citra Garden Estate</h6>
                                      <p className="mb-0"> $1300 / monthly</p>
                                    </div>
                                    <ul className="list-inline card__hidden-content">
                                      <li className="list-inline-item">
                                        Baths
                                        <span>
                                          <i className="fa fa-bath"></i> 2
                                        </span>
                                      </li>
                                      <li className="list-inline-item">
                                        Beds
                                        <span>
                                          <i className="fa fa-bed"></i> 2
                                        </span>
                                      </li>
                                      <li className="list-inline-item">
                                        Rooms
                                        <span>
                                          <i className="fa fa-inbox"></i> 3
                                        </span>
                                      </li>
                                      <li className="list-inline-item">
                                        Area
                                        <span>
                                          <i className="fa fa-map"></i> 1450 sq ft
                                        </span>
                                      </li>
                                    </ul>
                                  </div>
                                  <img
                                    alt=""
                                    src="images/placeholder/home1.jpeg"
                                    className="img-fluid h-40 "
                                  />
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6 col-lg-6 mt-4">
                            <a href="#">
                              <div className="card__image-hover h-250">
                                <div className="card__image-hover-overlay">
                                  <div className="listing-badges">
                                    <span className="featured">Featured</span>
                                    <span>For Rent</span>
                                  </div>
                                  <div className="card__image-content">
                                    <div className="card__image-content-desc">
                                      <h6> 184 Lexington Avenue</h6>
                                      <p className="mb-0"> $1300 / monthly</p>
                                    </div>
                                    <ul className="list-inline card__hidden-content">
                                      <li className="list-inline-item">
                                        Baths
                                        <span>
                                          <i className="fa fa-bath"></i> 2
                                        </span>
                                      </li>
                                      <li className="list-inline-item">
                                        Beds
                                        <span>
                                          <i className="fa fa-bed"></i> 2
                                        </span>
                                      </li>
                                      <li className="list-inline-item">
                                        Rooms
                                        <span>
                                          <i className="fa fa-inbox"></i> 3
                                        </span>
                                      </li>
                                      <li className="list-inline-item">
                                        Area
                                        <span>
                                          <i className="fa fa-map"></i> 1450 sq ft
                                        </span>
                                      </li>
                                    </ul>
                                  </div>
                                  <img
                                    alt=""
                                    src="images/placeholder/home2.jpeg"
                                    className="img-fluid h-40 "
                                  />
                                </div>
                              </div>
                            </a>
                          </div>
                          <div className="col-md-6 col-lg-6 mt-4">
                            <a href="#">
                              <div className="card__image-hover h-250">
                                <div className="card__image-hover-overlay">
                                  <div className="listing-badges">
                                    <span className="featured">Featured</span>
                                    <span>For Rent</span>
                                  </div>
                                  <div className="card__image-content">
                                    <div className="card__image-content-desc">
                                      <h6> The Citizen Apartment 5th Floor</h6>
                                      <p className="mb-0"> $1300 / monthly</p>
                                    </div>
                                    <ul className="list-inline card__hidden-content">
                                      <li className="list-inline-item">
                                        Baths
                                        <span>
                                          <i className="fa fa-bath"></i> 2
                                        </span>
                                      </li>
                                      <li className="list-inline-item">
                                        Beds
                                        <span>
                                          <i className="fa fa-bed"></i> 2
                                        </span>
                                      </li>
                                      <li className="list-inline-item">
                                        Rooms
                                        <span>
                                          <i className="fa fa-inbox"></i> 3
                                        </span>
                                      </li>
                                      <li className="list-inline-item">
                                        Area
                                        <span>
                                          <i className="fa fa-map"></i> 1450 sq ft
                                        </span>
                                      </li>
                                    </ul>
                                  </div>
                                  <img
                                    alt=""
                                    src="images/placeholder/home3.jpeg"
                                    className="img-fluid h-40 "
                                  />
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6 col-lg-6 mt-4">
                            <a href="#">
                              <div className="card__image-hover h-250">
                                <div className="card__image-hover-overlay">
                                  <div className="listing-badges">
                                    <span className="featured">Featured</span>
                                    <span>For Rent</span>
                                  </div>
                                  <div className="card__image-content">
                                    <div className="card__image-content-desc">
                                      <h6>Ample Apartment At Last Floor</h6>
                                      <p className="mb-0"> $1300 / monthly</p>
                                    </div>
                                    <ul className="list-inline card__hidden-content">
                                      <li className="list-inline-item">
                                        Baths
                                        <span>
                                          <i className="fa fa-bath"></i> 2
                                        </span>
                                      </li>
                                      <li className="list-inline-item">
                                        Beds
                                        <span>
                                          <i className="fa fa-bed"></i> 2
                                        </span>
                                      </li>
                                      <li className="list-inline-item">
                                        Rooms
                                        <span>
                                          <i className="fa fa-inbox"></i> 3
                                        </span>
                                      </li>
                                      <li className="list-inline-item">
                                        Area
                                        <span>
                                          <i className="fa fa-map"></i> 1450 sq ft
                                        </span>
                                      </li>
                                    </ul>
                                  </div>
                                  <img
                                    alt=""
                                    src="images/placeholder/home4.jpeg"
                                    className="img-fluid h-40 "
                                  />
                                </div>
                              </div>
                            </a>
                          </div>
                          <div className="col-md-6 col-lg-6 mt-4">
                            <a href="#">
                              <div className="card__image-hover h-250">
                                <div className="card__image-hover-overlay">
                                  <div className="listing-badges">
                                    <span className="featured">Featured</span>
                                    <span>For Rent</span>
                                  </div>
                                  <div className="card__image-content">
                                    <div className="card__image-content-desc">
                                      <h6> Contemporary Apartment</h6>
                                      <p className="mb-0"> $1300 / monthly</p>
                                    </div>
                                    <ul className="list-inline card__hidden-content">
                                      <li className="list-inline-item">
                                        Baths
                                        <span>
                                          <i className="fa fa-bath"></i> 2
                                        </span>
                                      </li>
                                      <li className="list-inline-item">
                                        Beds
                                        <span>
                                          <i className="fa fa-bed"></i> 2
                                        </span>
                                      </li>
                                      <li className="list-inline-item">
                                        Rooms
                                        <span>
                                          <i className="fa fa-inbox"></i> 3
                                        </span>
                                      </li>
                                      <li className="list-inline-item">
                                        Area
                                        <span>
                                          <i className="fa fa-map"></i> 1450 sq ft
                                        </span>
                                      </li>
                                    </ul>
                                  </div>
                                  <img
                                    alt=""
                                    src="images/placeholder/home6.jpeg"
                                    className="img-fluid h-40 "
                                  />
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>

                        <div className="cleafix"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default page;
