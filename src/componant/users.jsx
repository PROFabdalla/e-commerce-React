import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from 'react-router-dom';

export default function Users() {


    let [user, setuser] = useState([]);
    let [userval,setuserval] = useState("")



  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/users")
      .then((response) => {
        setuser(response.data);
      })
      .catch((Error) => {
        console.log(Error);
      });
  }, []);


  let getuserval = (e) =>{
    setuserval(e.target.value)
};


// ########################################################################################

  user.map((item) => {
    console.log(item.id);
    return ("sdfsdf")})

 



  return (
    <div className='container'>
        <form >
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={getuserval}/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <NavLink to={"/"} className="btn btn-outline-dark mb-3">login</NavLink>




  {/* <button type="submit" className="btn btn-success">login</button> */}
</form>
    </div>
  )
}
