/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

import { toast } from "react-toastify";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Form() {
  // this is all done by firebase
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch(`https://jainam-a57e6-default-rtdb.firebaseio.com/contact.json`)
  //     .then((response) => response.json())
  //     .then((data) => setData(data));
  // }, []);

  // const [formvalue, setFormvalue] = useState({
  //   name: "",
  //   mobile: "",
  //   email: "",
  //   message: "",
  // });

  // const onchange = (j) => {
  //   setFormvalue({
  //     ...formvalue,
  //     id: new Date().getTime().toString(),
  //     [j.target.name]: j.target.value,
  //   });
  //   console.log(formvalue);
  // };

  // const save = (j) => {
  //   j.preventDefault();
  //   fetch("https://jainam-a57e6-default-rtdb.firebaseio.com/contact.json", {
  //     method: "POST",
  //     body: JSON.stringify(formvalue),
  //     headers: {
  //       "Content-type": "application/json; charset=UTF-8",
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       if (data) {
  //         alert("Register Success");
  //         setFormvalue({
  //           ...formvalue,
  //           name: "",
  //           mobile: "",
  //           email: "",
  //           message: "",
  //         });
  //       }
  //     });
  //   // setData([...data, formvalue]);
  //   // // console.log(data);
  //   // setFormvalue({...formvalue, name: "", mobile: "", email: "", message: "",})
  // };

  // // const ondelete = (delit) => {
  // //   var filterdata = data.filter((item, index, ent) => item.id !== delit);
  // //   setData(filterdata);
  // // };

  // this crud is all done by axios

  // const [data, setData] = useState([]);
  const redirect = useNavigate();

  const [formvalue, setFormvalue] = useState({
    name: "",
    mobile: "",
    email: "",
    password: "",
  });

  const onchange = (jj) => {
    setFormvalue({ ...formvalue, [jj.target.name]: jj.target.value });
    //console.log(formvalue);
  };

  // const save = async(jj) => {
  //   alert("save")
  // }

  const validation = () => {
    let result = true;

    if (formvalue.email == "" || formvalue.email == null) {
      result = false;
      toast.error("email field is required");
    }
    if (formvalue.password == "" || formvalue.password == null) {
      result = false;
      toast.error("password field is required");
    }
    return result;
  };

  const save = async (jj) => {
    // jj.preventDefault();
    jj.preventDefault();
    if (validation()) {
      const res = await axios.post(`http://localhost:3000/user`, formvalue);
      toast.success("Registered Succeess");
      setFormvalue({
        ...formvalue,
        name: "",
        mobile: "",

        email: "",
        password: "",
      });
      return redirect("/login");
    }
    // if(validation())
    // {
    //     const res=await axios.get(`http://localhost:3000/user?email=${formvalue.email}`);
    //     if(res.data.length>0)
    //     {
    //           if(res.data[0].password==formvalue.password)
    //           {
    //             // create storage session
    //             localStorage.setItem('id',res.data[0].id);
    //             localStorage.setItem('name',res.data[0].name);

    //             // Toast.success('Login Successful ');
    //             return redirect('/');
    //           }
    //           else
    //           {
    //             // Toast.error('Enter Valid Password !');
    //             return redirect('/');
    //           }
    //     }
    //     else
    //     {
    //       // Toast.error('Enter Valid Email !');
    //       return redirect('/');
    //     }
  };

  return (
    <div>
      <div className="contact_section layout_padding">
        <div className="container-fluid">
          <h1 className="ballet_text">User Form</h1>

          <div className="contact_section2">
            <div className="row">
              <div className="col-md-12 mt-5 ms-5 padding_left_0">
                <div className="mail_section">
                  <input
                    type="text"
                    className="mail_text"
                    placeholder="Name"
                    name="name"
                    onChange={onchange}
                    value={formvalue.name}
                    required
                  />
                  <input
                    type="number"
                    className="mail_text"
                    placeholder="Phone Number"
                    name="mobile"
                    onChange={onchange}
                    value={formvalue.mobile}
                    required
                  />
                  <input
                    type="mail"
                    className="mail_text"
                    placeholder="Email"
                    name="email"
                    onChange={onchange}
                    value={formvalue.email}
                    required
                  />
                  <input
                    className="massage_text"
                    placeholder="Password"
                    rows={5}
                    id="comment"
                    name="password"
                    defaultValue={""}
                    onChange={onchange}
                    type="password"
                    value={formvalue.password}
                    required
                  />
                  <div className="send_bt">
                    <button
                      className="btn btn-primary send_btn px-5"
                      onClick={save}
                    >
                      SignUp
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* this is extra work */}
        {/* <div className="row">
          <div className="col-md-12">
            <div class="container mt-3">
              <h2>Signup Data</h2>
              <table class="table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Phone Number</th>
                    <th>Email</th>
                    <th>Message</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {
                  
                  Object.keys(data).map((item, index, enterr) => {
                    return (
                      <tr>
                        <td>{data[item].id}</td>
                        <td>{data[item].name}</td>
                        <td>{data[item].mobile}</td>
                        <td>{data[item].email}</td>
                        <td>{data[item].message}</td>
                        <td>
                          <button
                            className="btn btn-danger"
                            // onClick={() => ondelete(item.id)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Form;

// const [data, setData] = useState([]);
// useEffect(() => {
// fetch(`https://jainam-a57e6-default-rtdb.firebaseio.com/contact.json`)
//   .then((response) => response.json())
//   .then((data) => setData(data));
// }, []);

// const [formvalue, setFormvalue] = useState({
//     name: "",
//     number: "",
//     email: "",
//     password: "",
// });

// const onchange = (j) => {
// setFormvalue({
//   ...formvalue,
//   id: new Date().getTime().toString(),
//   [j.target.name]: j.target.value,
// });
// console.log(formvalue);
// };

// const save = (j) => {
// j.preventDefault();
// fetch("https://jainam-a57e6-default-rtdb.firebaseio.com/contact.json", {
//   method: "POST",
//   body: JSON.stringify(formvalue),
//   headers: {
//     "Content-type": "application/json; charset=UTF-8",
//   },
// })
//   .then((response) => response.json())
//   .then((data) => {
//     if (data) {
//       alert("Register Success");
//       setFormvalue({
//         ...formvalue,
//         name: "",
//         number: "",
//         email: "",
//         password: "",
//       });
//     }
//   });

// // const ondelete=(delit)=> {
// //     var filterdata=data.filter((item,index,ent)=> item.id!==delit);
// //     setData(filterdata);
// // }

// return (
// <div>
//     <div className='container-fluid my-5 px-5 py-5'>

//         <form className='text-center'>
//             <h1 className='text-center text-primary my-5'><b>This is the form to input all the details.</b></h1>
//             <input className="contactus mx-2 border-3 rounded border-primary "  type='text' placeholder='Name' value={formvalue.name} onChange={onchange} name='name'  required></input>

//             <input className="contactus mx-2 border-3 rounded border-primary "  type='number' placeholder='Phone Number'  onChange={onchange} value={formvalue.number} name='number'  required></input>

//             <input className="contactus mx-2 border-3 rounded border-primary "  type='email' placeholder='E-mail' onChange={onchange}  value={formvalue.email} name='email'  required></input>

//             <input className="contactus mx-2 border-3 rounded border-primary "  type='password' placeholder='Password' value={formvalue.password} name='password'  onChange={onchange}  required></input>
//             <br></br>
//             <button className='btn btn-primary my-5' onClick={save}> Submit</button>
//         </form>

//         <br></br><br></br><br></br><br></br>
//         <h1>This is practice form.</h1>
//         <table className='table table-primary'>
//             <thead>
//                 <tr>
//                     <th>Id</th>
//                     <th>Name</th>
//                     <th>Phone Number</th>
//                     <th>Email</th>
//                     <th>Password</th>
//                     <th>Delete</th>
//                 </tr>
//             </thead>
//             <tbody>
//             {

//               Object.keys(data).map((item, index, enterr) => {
//                 return (
//                   <tr>
//                     <td>{data[item].id}</td>
//                     <td>{data[item].name}</td>
//                     <td>{data[item].number}</td>
//                     <td>{data[item].email}</td>
//                     <td>{data[item].password}</td>
//                     <td>
//                       <button
//                         className="btn btn-danger"
//                         // onClick={() => ondelete(item.id)}
//                       >
//                         Delete
//                       </button>
//                     </td>
//                   </tr>
//                 );
//               })}
//             </tbody>

//         </table>
//     </div>
// </div>
// )
