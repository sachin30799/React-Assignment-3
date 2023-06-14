import React from "react";
import { NavLink } from "react-router-dom";

function News() {
  return (
    <div>
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
                <h2>Our News</h2>
                <p>
                  when looking at its layout. The point of using Lorem Ipsum is
                  that it has a more-or-less normal distribution of letters, as
                  opposed to using
                </p>
                <NavLink className="read_more" to="coronata.html">
                  About More
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;
