import React from "react";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div>
      <div>
        <div className="full_bg">
          {/* header inner */}
          <div className="section">
            {/* carousel code */}
            <div id="banner1" className="carousel slide slider_main">
              <ol className="carousel-indicators ">
                <li
                  data-target="#banner1"
                  data-slide-to={0}
                  className="indicator-li-1"
                >
                  01
                </li>
                <li data-target="#banner1" data-slide-to={1} className>
                  02
                </li>
                <li data-target="#banner1" data-slide-to={2} className="active">
                  03
                </li>
              </ol>
              <div className="carousel-inner">
                {/* first slide */}
                <div className="carousel-item active">
                  <div className="carousel-caption cuplle">
                    <div className="container">
                      <div className="row">
                        <div className="col-md-8">
                          <div className="photog">
                            <h1>
                              Care early
                              <br />
                              Coronavirus
                            </h1>
                            <NavLink className="read_more" to="javascript:void(0)">
                              Read More
                            </NavLink>
                            <NavLink className="read_more" to="about.html">
                              About Us
                            </NavLink>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* second slide */}
                <div className="carousel-item">
                  <div className="carousel-caption cuplle">
                    <div className="container">
                      <div className="row">
                        <div className="col-md-8">
                          <div className="photog">
                            <h1>
                              Care early
                              <br />
                              Coronavirus
                            </h1>
                            <NavLink className="read_more" to="javascript:void(0)">
                              Read More
                            </NavLink>
                            <NavLink className="read_more" to="about.html">
                              About Us
                            </NavLink>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* third slide */}
                <div className="carousel-item">
                  <div className="carousel-caption cuplle">
                    <div className="container">
                      <div className="row">
                        <div className="col-md-8">
                          <div className="photog">
                            <h1>
                              Care early
                              <br />
                              Coronavirus
                            </h1>
                            <NavLink className="read_more" to="javascript:void(0)">
                              Read More
                            </NavLink>
                            <NavLink className="read_more" to="about.html">
                              About Us
                            </NavLink>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* controls */}
              <NavLink
                className="carousel-control-prev"
                to="#banner1"
                role="button"
                data-slide="prev"
              >
                <i className="fa fa-angle-left" aria-hidden="true" />
                <span className="sr-only">Previous</span>
              </NavLink>
              <NavLink
                className="carousel-control-next"
                to="#banner1"
                role="button"
                data-slide="next"
              >
                <i className="fa fa-angle-right" aria-hidden="true" />
                <span className="sr-only">Next</span>
              </NavLink>
            </div>
          </div>
        </div>
        {/* end banner */}
        {/* about */}
        <div className="about">
          <div className="container_width">
            <div className="row d_flex">
              <div className="col-md-7">
                <div className="titlepage text_align_left">
                  <h2>About Corona Virus </h2>
                  <p>
                    English. Many desktop publishing packages and web page
                    editors now use Lorem Ipsum as their default model text, and
                    a search for
                  </p>
                  <NavLink className="read_more" to="about.html">
                    About More
                  </NavLink>
                </div>
              </div>
              <div className="col-md-5">
                <div className="about_img text_align_center">
                  <figure>
                    <img src="images/about.png" alt="#" />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end about */}
        {/* coronata */}
        <div className="coronata">
          <div className="container">
            <div className="row d_flex grid">
              <div className="col-md-7">
                <div className="coronata_img text_align_center">
                  <figure>
                    <img src="images/corona.png" alt="#" />
                  </figure>
                </div>
              </div>
              <div className="col-md-5 oder1">
                <div className="titlepage text_align_left">
                  <h2>Coronavirus what it is?</h2>
                  <p>
                    when looking at its layout. The point of using Lorem Ipsum
                    is that it has a more-or-less normal distribution of
                    letters, as opposed to using
                  </p>
                  <NavLink className="read_more" to="coronata.html">
                    About More
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end coronata */}
        {/* protect */}
        <div className="protect">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="titlepage text_align_center">
                  <h2>How to Protect Yourself</h2>
                  <p>
                    when looking at its layout. The point of using Lorem Ipsum
                    is that it has a more-or-less normal distribution of
                    letters, as opposed to using
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="protect_bg">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  {/*  Demos */}
                  <div className="owl-carousel owl-theme">
                    <div className="item">
                      <div className="protect_box text_align_center">
                        <div className="desktop">
                          <i>
                            <img src="images/pro1.png" alt="#" />
                          </i>
                          <h3> Wear Mask</h3>
                          <span>
                            {" "}
                            Many desktop publishing packages and web page
                            editors now use Lorem Ipsum as their default model
                            text, and a search for
                          </span>
                        </div>
                        <NavLink className="read_more" to="protect.html">
                          Read More
                        </NavLink>
                      </div>
                    </div>
                    <div className="item">
                      <div className="protect_box text_align_center">
                        <div className="desktop">
                          <i>
                            <img src="images/pro2.png" alt="#" />
                          </i>
                          <h3> Wash Your Hands</h3>
                          <span>
                            {" "}
                            Many desktop publishing packages and web page
                            editors now use Lorem Ipsum as their default model
                            text, and a search for
                          </span>
                        </div>
                        <NavLink className="read_more" to="protect.html">
                          Read More
                        </NavLink>
                      </div>
                    </div>
                    <div className="item">
                      <div className="protect_box text_align_center">
                        <div className="desktop">
                          <i>
                            <img src="images/pro3.png" alt="#" />
                          </i>
                          <h3> Stay at Home</h3>
                          <span>
                            {" "}
                            Many desktop publishing packages and web page
                            editors now use Lorem Ipsum as their default model
                            text, and a search for
                          </span>
                        </div>
                        <NavLink className="read_more" to="protect.html">
                          Read More
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end protect */}
        {/* cases */}
        <div className="cases">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <div className="titlepage text_align_center ">
                  <h2>Coronavirus Cases</h2>
                  <p>
                    making this the first true generator on the Internet. It
                    uses a dictionary of over 200 Latin words, combined with a
                    handful
                  </p>
                </div>
              </div>
            </div>
            <div className="row d_flex">
              <div className=" col-md-4">
                <div className="latest text_align_center">
                  <figure>
                    <img src="images/cases1.png" alt="#" />
                  </figure>
                  <NavLink className="read_more" to="cases.html">
                    Read More
                  </NavLink>
                  <div className="nostrud">
                    <h3>Cases 01</h3>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a more-or-less normal distribution of letters, as
                      opposed to using 'Content here, content here', making it
                      look
                    </p>
                  </div>
                </div>
              </div>
              <div className=" col-md-4">
                <div className="latest text_align_center">
                  <figure>
                    <img src="images/cases2.png" alt="#" />
                  </figure>
                  <NavLink className="read_more" to="cases.html">
                    Read More
                  </NavLink>
                  <div className="nostrud">
                    <h3>Cases 02</h3>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a more-or-less normal distribution of letters, as
                      opposed to using 'Content here, content here', making it
                      look
                    </p>
                  </div>
                </div>
              </div>
              <div className=" col-md-4">
                <div className="latest text_align_center">
                  <figure>
                    <img src="images/cases3.png" alt="#" />
                  </figure>
                  <NavLink className="read_more" to="cases.html">
                    Read More
                  </NavLink>
                  <div className="nostrud">
                    <h3>Cases 03</h3>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a more-or-less normal distribution of letters, as
                      opposed to using 'Content here, content here', making it
                      look
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end cases */}
        {/* doctors */}
        <div className="doctors">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="titlepage text_align_center ">
                  <h2>What doctors say..</h2>
                </div>
              </div>
            </div>
            <div className="row d_flex">
              <div className=" col-md-6">
                <div id="ho_efcet" className="reader text_align_center">
                  <i>
                    <img src="images/doctor1.png" alt="#" />
                  </i>
                  <h3>Dr.Golap den</h3>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using 'Content here, content here', making it look
                  </p>
                  <span>
                    <img src="images/do.png" alt="#" />
                  </span>
                </div>
              </div>
              <div className=" col-md-6">
                <div id="ho_efcet" className="reader text_align_center">
                  <i>
                    <img src="images/doctor2.png" alt="#" />
                  </i>
                  <h3>Dr.Golap den</h3>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using 'Content here, content here', making it look
                  </p>
                  <span>
                    <img src="images/do.png" alt="#" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end cases */}
        {/* update */}
        <div className="update">
          <div className="cevery_white">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="titlepage">
                    <h2>Get Every Update.... </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="cevery_bg">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <form id="colof" className="form_subscri">
                    <input
                      className="newsl"
                      placeholder="Your Email"
                      type="text"
                      name="Email"
                    />
                    <button className="subsci_btn">Subscribe Now</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
