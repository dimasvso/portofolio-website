import Footer from "./component/Footer";
import Navbar from "./component/Navbar";
import { Outlet } from "react-router-dom";


function Template() {
    return ( 
        <>
        <Navbar />
        <Outlet />
        <Footer />
        </> 
    );
}

export default Template;