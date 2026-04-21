//IMPORTS

import { Outlet } from "react-router-dom";

export default function DefaultLayout() {

    return(
        <>
        <div>HEADER</div>
        <Outlet />
        <div>FOOTER</div>
        
        </>
    )
}