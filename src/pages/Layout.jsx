import { Outlet } from "react-router-dom";
import Navbar from "../components/NavBar";
import Item from "../components/Item";

function Layout (){

    return(
        <div>
            <Navbar/>
            <Outlet/>
            <Item/>
        </div>
    )
}

export default Layout;