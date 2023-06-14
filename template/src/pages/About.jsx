import React from "react";
import { NavLink } from "react-router-dom";

function About() {
  return (
    <div>
      <div className="about">
        <div className="container_width">
          <div className="row d_flex">
            <div className="col-md-7">
              <div className="titlepage text_align_left">
                <h2>About Corona Virus </h2>
                <p>
                  English. Many desktop publishing packages and web page editors
                  now use Lorem Ipsum as their default model text, and a search
                  for
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
    </div>
  );
}

export default About;
