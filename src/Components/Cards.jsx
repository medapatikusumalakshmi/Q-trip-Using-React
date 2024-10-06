
// import React, { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// export default function Cards(){
//     let navigate=useNavigate()
// let[api,setApi]=useState({"cities":[]})
// useEffect(()=>{
//     let url=fetch("https://content-qtripdynamic-qa-backend.azurewebsites.net//api/v1/cities")
//     url.then(x=>x.json()).then(x=>{
//         console.log(x);
//         setApi({cities:x})  
//     })
// },[])

//    const a=()=>{
//     let citySearch=document.getElementById("typsearch")
// if((citySearch.value)==="bengaluru"){
//    navigate("/bengaluru")
// }else if((citySearch.value)==="goa"){
//     navigate("/goa")
// }else if((citySearch.value)==="kolkata"){
//     navigate("/kolkata")
// }else if((citySearch.value)==="singapore"){
//     navigate("/singapore")
// }else if((citySearch.value)==="malaysia"){
//     navigate("/malaysia")
// }else if((citySearch.value)==="bangkok"){
//     navigate("/bangkok")
// }else if((citySearch.value)==="newyork"){
//     navigate("/new-york")
// }else if((citySearch.value)==="paris"){
//     navigate("/paris")
// }else{
//     navigate("/")
// }
// }
   
//      return(
//         <>
//          <div id="bg">
//             <div id='con'>
//             <h1>Welcome to QTrip</h1>
//             <p> Explore the world with fantastic places to venture around</p>
//              <input type="text" placeholder="Search a City " onChange={a} id="typsearch" style={{paddingLeft:"15px",fontWeight:"1rem",fontSize:"15px"}}></input>
//             </div>
//             </div>
//         <div style={{display:"flex",flexWrap:"wrap", padding:"100px 60px 100px 100px",textAlign:"center", height:"150vh",width:"100%",paddingLeft:"100px"}}>
//             {api.cities.map((x,ind)=>{
//                 return(
//                     <>
//                    <Link to={x.id}>
//                    <div>
//                     <div id="hover" style={{position:"relative"}}>
//                     <img src={x.image} alt="img"  style={{height:"450px", width:"300px",borderRadius:"8px", marginLeft:"20px",marginBottom:"20px"}} id="maimg"/>
//                     <div id="text">
//                     <h5>{x.city}</h5>
//                     <p>{x.description}</p>
//                     </div>
//                     </div>
//                     </div>
//                    </Link>
//                     </>
//                 )
//             })}
//         </div>
//         </>
//      )
// }

import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Cards() {
  let navigate = useNavigate();
  let [api, setApi] = useState({ cities: [] });

  useEffect(() => {
    let url = fetch("https://content-qtripdynamic-qa-backend.azurewebsites.net//api/v1/cities");
    url.then((x) => x.json()).then((x) => {
      console.log(x);
      setApi({ cities: x });
    }).catch(()=>console.log("api is not working properly")
    )
  }, []);

  const a = () => {
    let citySearch = document.getElementById("typsearch");
    if (citySearch.value === "bengaluru") {
      navigate("/bengaluru");
    } else if (citySearch.value === "goa") {
      navigate("/goa");
    } else if (citySearch.value === "kolkata") {
      navigate("/kolkata");
    } else if (citySearch.value === "singapore") {
      navigate("/singapore");
    } else if (citySearch.value === "malaysia") {
      navigate("/malaysia");
    } else if (citySearch.value === "bangkok") {
      navigate("/bangkok");
    } else if (citySearch.value === "newyork") {
      navigate("/new-york");
    } else if (citySearch.value === "paris") {
      navigate("/paris");
    } else {
      navigate("/");
    }
  };

  return (
    <>
      <div id="bg">
        <div id="con">
          <h1>Welcome to QTrip</h1>
          <p> Explore the world with fantastic places to venture around</p>
          <input
            type="text"
            placeholder="Search a City"
            onChange={a}
            id="typsearch"
            style={{ paddingLeft: "15px", fontWeight: "1rem", fontSize: "15px" }}
          />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          padding: "100px 60px 100px 100px",
          textAlign: "center",
          height: "150vh",
          width: "100%",
          paddingLeft: "100px",
        }}
      >
        {api.cities.map((x, ind) => {
          return (
            <Link to={x.id} key={x.id || ind}>  {/* Add the key here */}
              <div>
                <div id="hover" style={{ position: "relative" }}>
                  <img
                    src={x.image}
                    alt="img"
                    style={{
                      height: "450px",
                      width: "300px",
                      borderRadius: "8px",
                      marginLeft: "20px",
                      marginBottom: "20px",
                    }}
                    id="maimg"
                  />
                  <div id="text">
                    <h5>{x.city}</h5>
                    <p>{x.description}</p>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}
