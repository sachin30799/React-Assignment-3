/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react"
import React from 'react'
import axios from "axios";

import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";

function Login() {
  
 const redirect=useNavigate();
  
  useEffect(()=>{
    if(localStorage.getItem('id'))
    {
        return redirect('/login');
    }
  },[]);

  const [formvalue, setFormvalue] = useState({
    email: "",
    password: "",
  });

  const onchange = (e) => {
    setFormvalue({ ...formvalue,[e.target.name]: e.target.value });
    //console.log(formvalue);
  }

  const validation=()=>{
    let result=true;
   
    if(formvalue.email==="" || formvalue.email==null)
    {
      result=false;
      toast.error('email field is required');
    }
    if(formvalue.password==="" || formvalue.password==null)
    {
      result=false;
      toast.error('password field is required');
    }
    return result;
  }

  const login= async(e) => {
    e.preventDefault();
    if (validation())
    {
        const res=await axios.get(`http://localhost:3000/user?email=${formvalue.email}`);
        if(res.data.length>0)
        {
              if(res.data[0].password===formvalue.password)
              {
                // create storage session
                localStorage.setItem('id',res.data[0].id);
                localStorage.setItem('name',res.data[0].name);

                toast.success('Login Successful ');
                return redirect('/');
              }
              else
              {
                toast.error('Enter Valid Password !');
                return redirect('/login');
              }
        }
        else
        {
          toast.error('Enter Valid Email !');
          // alert ("Enter Valid Email !");
          return redirect('/login');
        }
        
    }

  }
  return (
    <div>
      {/* contact section */}
      <div id="contact" className="contact">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <form id="request" className="main_form">
                <div className="row">
                  <div className="col-md-12">
                    <h3>Login Us</h3>
                  </div>
                  <div className="col-md-12">                                
                    <input className="contactus" placeholder="Email" type="type" onChange={onchange} value={formvalue.email} name="email" required />
                  </div>
                  <div className="col-md-12">
                    <input className="contactusmess" placeholder="Password" onChange={onchange} value={formvalue.password} type="password" name="password" required />
                  </div>
                  
                  <div className="col-md-12 my-3">
                    <button className="btn btn-primary send_btn" onClick={login}>Login</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="map_section">
            <div id="map">
            </div>
          </div>
        </div>
      </div>
      
    </div>

  )
}

export default Login;