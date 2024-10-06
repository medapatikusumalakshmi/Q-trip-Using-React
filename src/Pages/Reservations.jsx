import React,{Component} from "react";
import Navbar from "../Components/Navbar";
import Background from "../Components/Background";
export default class Reservations extends Component{
    render(){
        return(
            <>
            <Navbar></Navbar>
            <div id='pag2'>
        <div id='resdiv1'>
           <div>
           <div id='resdiv2'>
            <h1>Your Reservations</h1>
            </div>
            <div id='oop'>
                
            Oops! You have not made any reservations yet! (Click here to explore some cities)
                
            </div>
            <div id='ta'>
                <table>
                    <thead>
                        <tr>
                            <th scope="col">Transaction ID</th>
                            <th scope="col">Booking Name</th>
                            <th scope="col">Adventure</th>
                            <th scope="col">Person(s)</th>
                            <th scope="col">Date</th>
                            <th scope="col">Price</th>
                            <th scope="col">Booking Time</th>
                            <th scope="col">Action</th>
                            <th scope="col">Cancel</th>
                        </tr>
                    </thead>
                </table>
            </div>
           </div>
        </div>
       </div>
            </>
        )
    }
}
