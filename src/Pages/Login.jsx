import React from "react";
import Navbar from "../Components/Navbar";
import Background from "../Components/Background";
import Footer from "../Components/Footer";
export default function Login(){
    return(
        <>
        <div style={{height:"110vh",position:"relative"}}>
        <Navbar></Navbar>
        <Background></Background>
        <div id='login' style={{position:"absolute",top:"400Px",left:"33%",backgroundColor:"white"}}>
                <h2>Login</h2>
              <form action="">
           <div>
           <input type="email" name="email" required="" class="form-control" id="floatingInput" placeholder="Email address"/>
           {/* <label for="floatingInput">Email address</label> */}
           </div>
           <div>
           <input type="password" name="password" required="" class="form-control" id="floatingPassword" placeholder="Password"/>
           {/* <label for="floatingPassword">Password</label> */}
           </div>
           <div>
           <button class="btn btn-primary btn-login" type="submit">Login to QTrip</button>
           </div>
           <div>
            <p>Don't have an account?<span style={{color:"orange"}}>Register Now</span></p>
           </div>
           
              </form>
            </div>
        </div>
         <Footer></Footer>
        </>
    )
}