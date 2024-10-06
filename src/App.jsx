import React,{Component}  from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './style.css'
import Final from "./Components/Final";

import Reservations from "./Pages/Reservations";
import Login from "./Pages/Login";
import Bengaluru from "./Pages/Bengaluru/Bengaluru";
import Register from "./Pages/Register";
import Niaboytown from "./Pages/Bengaluru/Niaboytown";
import Goa from "./Pages/Goa/Goa";
import Kolkata from "./Pages/Kolkata/Kolkata";
import Singapore from "./Pages/Singapore/Singapore";
import Malaysia from "./Pages/Malaysia/Malaysia";
import Bangkok from "./Pages/Bangkok/Bangkok";
import Newyork from "./Pages/Newyork/Newyork";
import Paris from "./Pages/Paris/Paris";
import Fortsion from "./Pages/Bengaluru/Fortsion";
import Wooddaux from "./Pages/Bengaluru/Wooddaux";
import Shiwood from "./Pages/Bengaluru/Shiwood";
import Heathber from "./Pages/Goa/Heathber";
import Lowtra from "./Pages/Goa/Lowtra";
import Thton from "./Pages/Kolkata/Thton";
import Bageorge from "./Pages/Bengaluru/Bageorge";
import Stonelumhawk from "./Pages/Bengaluru/Stonelumhawk";
import LaAnrncast from "./Pages/Bengaluru/LaAnrncast";
import FortShilbluff from "./Pages/Bengaluru/FortShilbluff";
import EastVyfolk from "./Pages/Bengaluru/EastVyfolk";
import Perthby from "./Pages/Goa/Perthby";
import Nesbridge from "./Pages/Goa/Nesbridge";
import KennticEnd from "./Pages/Goa/KennticEnd";
import PressalCreek from "./Pages/Goa/PressalCreek";
import StPlympside from "./Pages/Goa/StPlympside";
import ChettbouAuxDersting from "./Pages/Goa/ChettbouAuxDersting";
import Bucktim from "./Pages/Goa/Bucktim";
import NtibranLake from "./Pages/Goa/NtibranLake";
import Warflin from "./Pages/Goa/Warflin";
import GrandRubouDuWagten from "./Pages/Kolkata/GrandRubouDuWagten";
import NorthGelgoon from "./Pages/Kolkata/NorthGelgoon";
import LaLakechiWithLipentage from "./Pages/Kolkata/LaLakechiWithLipentage";
import AnnvirInIngsaukLake from "./Pages/Kolkata/AnnvirInIngsaukLake";
import Vangreatshot from "./Pages/Singapore/Vangreatshot";
import PortHillslfleet from "./Pages/Singapore/PortHillslfleet";
import NewSpriha from "./Pages/Singapore/NewSpriha";
import GrandAshland from "./Pages/Singapore/GrandAshland";
import WestDgethall from "./Pages/Singapore/WestDgethall";
import GrandPresbir from "./Pages/Singapore/GrandPresbir";
import Gerjuaqpool from "./Pages/Singapore/Gerjuaqpool";
import GrandDinyardlodge from "./Pages/Singapore/GrandDinyardlodge";
import StGosmydro from "./Pages/Malaysia/StGosmydro";
import Sanboolburgh from "./Pages/Malaysia/Sanboolburgh";
import SterdallesannesEnd from "./Pages/Malaysia/SterdallesannesEnd";
import Wootkentree from "./Pages/Malaysia/Wootkentree";
import SonkinsSands from "./Pages/Malaysia/SonkinsSands";
import Lia from "./Pages/Malaysia/Lia";
import NorthLdeztidsils from "./Pages/Malaysia/NorthLdeztidsils";
import Nishgam from "./Pages/Bangkok/Nishgam";
import Calnyonnenfield from "./Pages/Newyork/Calnyonnenfield";
import NorthVenwar from "./Pages/Bangkok/NorthVenwar";
import Error from "./Pages/Error";

export default class App extends Component{
    render(){
        return(
            <>
            <BrowserRouter>
            <Routes>
                <Route path="/" element={<Final/>}></Route>
                <Route path="/bengaluru" element={<Bengaluru/>}></Route>
                <Route path="/Niaboytown" element={<Niaboytown/>}></Route>
                <Route path="/reservations" element={<Reservations/>}></Route>
                <Route path="/register" element={<Register/>}></Route>
                <Route path="/login" element={<Login/>}></Route>
                <Route path="/goa" element={<Goa/>}></Route>
                <Route path="/kolkata" element={<Kolkata/>}></Route>
                <Route path="/singapore" element={<Singapore/>}></Route>
                <Route path="/malaysia" element={<Malaysia/>}></Route>
                <Route path="/bangkok" element={<Bangkok/>}></Route>
                <Route path="/new-york" element={<Newyork/>}></Route>
                <Route path="/paris" element={<Paris/>}></Route>
                <Route path="/Fort%20Sionnnn" element={<Fortsion/>}></Route>
                <Route path="/Wooddaux" element={<Wooddaux/>}></Route>
                <Route path="/Shiwood" element={<Shiwood/>}></Route>
                <Route path="/Heathber" element={<Heathber/>}></Route>
                <Route path="/Lowtra" element={<Lowtra/>}></Route>
                <Route path="/Thton" element={<Thton/>}></Route>
                <Route path="/Fort Sionnnn" element={<Fortsion/>}></Route>
                <Route path="/Bageorge With Nonshi Harbour" element={<Bageorge/>}></Route>
                <Route path="/Stonelumhawk" element={<Stonelumhawk/>}></Route>
                <Route path="/La Anrncast" element={<LaAnrncast/>}></Route>
                <Route path="Fort Shilbluff" element={<FortShilbluff/>}></Route>
                <Route path="/East Vyfolk" element={<EastVyfolk/>}></Route>
                <Route path="/Perthby" element={<Perthby/>}></Route>
                <Route path="/Nesbridge" element={<Nesbridge/>}></Route>
                <Route path="/Kenntic End" element={<KennticEnd/>}></Route>
                <Route path="/Pressal Creek" element={<PressalCreek/>}></Route>
                <Route path="/St Plympside" element={<StPlympside/>}></Route>
                <Route path="/Chettbou Aux Dersting" element={<ChettbouAuxDersting/>}></Route>
                <Route path="/Bucktim" element={<Bucktim/>}></Route>
                <Route path="/Ntibran Lake" element={<NtibranLake/>}></Route>
                <Route path="/Warflin" element={<Warflin/>}></Route>
                <Route path="/Grand Rubou Du Wagten" element={<GrandRubouDuWagten/>}></Route>
                <Route path="/North Gelgoon" element={<NorthGelgoon/>}></Route>
                <Route path="/La Lakechi With Lipentage" element={<LaLakechiWithLipentage/>}></Route>
                <Route path="/Annvir-In-Ingsauk Lake" element={<AnnvirInIngsaukLake/>}></Route>
                <Route path="/Vangreatshot" element={<Vangreatshot/>}></Route>
                <Route path="/Port Hillslfleet" element={<PortHillslfleet/>}></Route>
                <Route path="/New Spriha" element={<NewSpriha/>}></Route>
                <Route path="/Grand Ashland" element={<GrandAshland/>}></Route>
                <Route path="/West Dgethall" element={<WestDgethall/>}></Route>
                <Route path="Grand Presbir" element={<GrandPresbir/>}></Route>
                <Route path="/Gerjuaqpool" element={<Gerjuaqpool/>}></Route>
                 <Route path="/Grand Dinyardlodge" element={<GrandDinyardlodge/>}></Route>
                 <Route path="/St Gosmydro" element={<StGosmydro/>}></Route>
                 <Route path="/Sanboolburgh" element={<Sanboolburgh/>}></Route>
                 <Route path="Sterdallesannes End" element={<SterdallesannesEnd/>}></Route>
                 <Route path="/Wootkentree" element={<Wootkentree/>}></Route>
                 <Route path="/Sonkins Sands" element={<SonkinsSands/>}></Route>
                 <Route path="/Lia" element={<Lia/>}></Route>
                 <Route path="/North Ldeztidsils" element={<NorthLdeztidsils/>}></Route>
                 <Route path="/Nishgam-In-Haprnia" element={<Nishgam/>}></Route>
                 <Route path="/Calnyonnenfield" element={<Calnyonnenfield/>}></Route>
                 <Route path="/North Venwar" element={<NorthVenwar/>}></Route>
                 <Route path="*" element={<Error/>}></Route>
            </Routes>
            </BrowserRouter>
            </>
        )
    }
}

//