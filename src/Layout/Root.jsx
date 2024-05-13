import { Outlet } from "react-router-dom";
import Header from "../Shared/Header/Header";
import Footer from "../Shared/Footer/FooterD";




const Root = () => {
    return (
        <div className="font-inter ">
            <Header></Header>

            <div className="min-h-[calc(100vh - 116px)]">
                <Outlet></Outlet>
            </div>

            <Footer></Footer>

        </div>
    );
};

export default Root;