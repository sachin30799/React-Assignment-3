import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";


function Contact() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`https://sachin-36dfb-default-rtdb.firebaseio.com/contact.json`)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  const [formvalue, setFormvalue] = useState({
    name: "",
    mobile: "",
    email: "",
    message: "",
  });

  const onchange = (j) => {
    setFormvalue({
      ...formvalue,
      id: new Date().getTime().toString(),
      [j.target.name]: j.target.value,
    });
    console.log(formvalue);
  };

  const save = (j) => {
    j.preventDefault();
    fetch("https://sachin-36dfb-default-rtdb.firebaseio.com/contact.json", {
      method: "POST",
      body: JSON.stringify(formvalue),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          alert("Register Success");
          setFormvalue({
            ...formvalue,
            name: "",
            mobile: "",
            email: "",
            message: "",
          });
        }
      });
    // setData([...data, formvalue]);
    // // console.log(data);
    // setFormvalue({...formvalue, name: "", mobile: "", email: "", message: "",})
  };

  return (
    <div>
      <div className="contact">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="titlepage text_align_left">
                <h2>Contact Us</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <form id="request" className="main_form">
                <div className="row">
                  <div className="col-md-12 ">
                    <input
                      className="contactus"
                      placeholder="Name"
                      type="text"
                      onChange={onchange}
                      value={formvalue.name}
                      name="name"
                      required
                    />
                  </div>
                  <div className="col-md-12">
                    <input
                      className="contactus"
                      placeholder="Phone"
                      type="number"
                      onChange={onchange}
                      value={formvalue.number}
                      name="number"
                      required
                    />
                  </div>
                  <div className="col-md-12">
                    <input
                      className="contactus"
                      placeholder="Email"
                      type="mail"
                      onChange={onchange}
                      value={formvalue.email}
                      name="email"
                      required
                    />
                  </div>
                  <div className="col-md-12">
                    <textarea
                      className="textarea"
                      placeholder="Message"
                      type="type"
                      message="Name"
                      onChange={onchange}
                      value={formvalue.msg}
                      defaultValue={""}
                      name="msg"
                      required
                    />
                  </div>
                  <div className="col-md-12">
                    <button className="send_btn" onClick={save}>
                      Send Now
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-md-6">
              <div className="map-responsive">
                <iframe
                  src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=Eiffel+Tower+Paris+France"
                  width={600}
                  height={540}
                  frameBorder={0}
                  style={{ border: 0, width: "100%" }}
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
