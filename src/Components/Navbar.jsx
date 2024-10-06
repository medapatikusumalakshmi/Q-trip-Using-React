import React,{Component} from "react";
import { Link } from "react-router-dom";
export default class Navbar extends Component{
    render(){
        return(
            <>
             <nav> 
            <span>QTrip
            </span>

                <ul>
                    <Link to="/"><li style={{color:"orange"}}>Home</li></Link>
                     <Link to="/reservations"><li style={{color:"orange"}}>Reservations</li></Link>
                    <Link to="/login"><li id="col" style={{color:"orange"}}>Login Here</li></Link>
                    <Link to="/register"><li><button>Register</button></li></Link>
                </ul>
            </nav>
            </>
        )
    }
}