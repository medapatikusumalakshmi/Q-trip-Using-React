import React from "react";
import Navbar from "../Components/Navbar";
import Background from "../Components/Background";
import Footer from "../Components/Footer";
export default function Register(){

    return(
        <>
        <div style={{height:"130vh",position:"relative"}}>
        <Navbar></Navbar>
        <Background></Background>
        <div id='register' style={{position:"absolute",top:"400Px",left:"33%",backgroundColor:"white"}}>
                <h2>Register</h2>
              <form action="">
           <div>
           <input type="email"  placeholder="Email address" id="mail"/>
         
           </div>
           <div>
           <input type="password" id="pswrd" placeholder="Type to create account password"/>
           
           </div>
           <div>
            <h6>Password must include at least one special character and a numeric character</h6>
           </div>
           <div>
           <input type="password" name="password" required="" class="form-control" id="floatingPassword" placeholder="Retype Password to Confirm"/>
           </div>
           <div>
           <button class="btn btn-primary btn-login" type="submit">Register Now</button>
           </div>
           <div>
            <p>Already have an account?<span style={{color:"orange"}}>Login Now</span></p>
           </div>
           
              </form>
            </div>
        </div>
        <Footer></Footer>
        </>
    )
}