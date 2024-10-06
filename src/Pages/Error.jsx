import React,{Component} from "react";
import x from "../assests/error.jpg"
export default class Error extends Component{
   render(){
    return(
        <>
        <img  style={{width:"100%",height:"100vh"}} src={x} alt="error"  />
        </>
    )
   }
}