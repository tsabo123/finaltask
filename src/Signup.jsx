import { Link } from 'react-router-dom';

import React, { useState } from "react";
 import { useNavigate } from "react-router-dom";
 import axios from "axios";



function Signup(){

  const [email, setEmail]= useState ("");
  const [password, setPassword]= useState ("");
  const [name_lastname, setName]=useState ("");

  const navigate = useNavigate ();

    const Signup =(event)=>{

      event.preventDefault();
  
      axios.post("https://apitest.reachstar.io/signup",{
        
        name: name_lastname,
        email : email,
        password: password,
        
      }).then(function(response){
        window.alert ("თქვენ გაიარეთ რეგისტრაცია", response)
        navigate("/");
      }).catch(function(error){
        window.alert("თქვენ ვერ გაიარეთ ავტორიზაცია", error)
      })
    }
    return(
        <React.Fragment>
        <div className="container mt-5">
          <div className="row justify-content-center  ">
              <div className="col-6">

               
                <form method="POST" onSubmit={(event)=> Signup (event)}>
                <div className="form-group mb-3">
                        <label htmlFor="Name">Name, Lastname</label>
                         <input  className="form-control" type="text" id="Name" placeholder="Jon Doe"onChange={(event) => setName(event.target.value)}/>
                       </div>
                       <div className="form-group mb-3">
                        
                        <label htmlFor="email">Email</label>
                         <input className="form-control" type="email" id="email"placeholder="Email"onChange={(event) => setEmail(event.target.value)}/>
                       </div>
                       <div className="form-group mb-3">
                        <label htmlFor="password">Password</label>
                         <input  className="form-control" type="password" id="password"placeholder="Password"onChange={(event) => setPassword(event.target.value)}/>
                       </div>
                       
                       <div className="form-group d-grid mt-4 ">
                       <input  className="btn btn-primary" type="submit" value="Registration" />

                       </div>
                       <p>
                        <Link to="/">Login</Link>
                       </p>

                </form>
              </div>
          </div>

        </div>

      </React.Fragment>

    )
};
export default Signup;