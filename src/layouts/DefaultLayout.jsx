//IMPORTS

import { Outlet } from "react-router-dom";
import AppHeader from "../components/AppHeader";
import AppFooter from "../components/AppFooter";
import { useLoader } from "../../contexts/LoaderContext";
import { Puff } from "react-loader-spinner";
export default function DefaultLayout() {
    const { loader, setLoader } = useLoader()
    return (
        <>
            <AppHeader />
            <main className="py-5">

                {loader && <Puff
                visible={true}
                height="300"
                width="300"
                color="#ee250f"
                ariaLabel="puff-loading"
                
                wrapperClass="d-flex justify-content-center align-items-center vh-100"
        
        />}
                <Outlet />

            </main>
            <AppFooter />

        </>
    )
}