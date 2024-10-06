import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";


export default function Perthby(){
    let[api,setApi]=useState([])
    useEffect(()=>{
    let url=fetch("https://content-qtripdynamic-qa-backend.azurewebsites.net//api/v1/adventures/detail?adventure=8549673097");
    url.then((x)=>x.json()).then((y)=>setApi([y])).catch(()=>{console.log("api is not working properly");
            
    })
    },[])
    return(
        <>
        <Navbar></Navbar>
        {
            api.map(x=>{
                console.log(x);
                return(
                    <div key={x.id}>
                    <div id="indiv">
                    <div id="indiv1">
                    <h1 style={{marginBottom:"15px"}}>{x.name}</h1>
                    <h2 style={{marginBottom:"15px"}}>{x.subtitle}</h2>
                    <div className="cdiv">
                        <Carousel>
                        <img src={x.images[0]} alt=""  style={{height:"500px", width:"900px"}} /> 
                        <img src={x.images[1]} alt=""  style={{height:"500px", width:"900px"}}  /> 
                        <img src={x.images[2]} alt=""  style={{height:"500px", width:"900px"}} />
                        </Carousel>
                    </div>
        
                    <hr />
                    <h3 style={{marginBottom:"10px",fontWeight:"bold",fontSize:"1.8rem"}}>About The Experience</h3>
                    <p>{x.content}</p>
                    </div>
                    </div >
                    </div>
                )
            })
        }
        <Footer></Footer>
        </>
    )
}