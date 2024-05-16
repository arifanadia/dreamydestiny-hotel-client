import { Link, useRouteError } from "react-router-dom";
import errorPng from "../../images/banner/error.png"


const Error = () => {
    const error = useRouteError()
    return (
        <div className="mx-auto max-w-7xl text-center  mt-10">

            {
                error.status === 404 &&
                <div>
                    <img className="w-2/6 mx-auto" src={errorPng} alt="" />
                    <h1 className="text-navyBlue text-6xl font-bold">Oops!!!!</h1>
                    <p className="my-6 text-2xl font-medium text-skyBlue">Page not Found</p>
                    <Link  to={`/`}
                    className="text-xl font-medium border border-skyBlue px-8 py-4 rounded-xl text-skyBlue"
                    >Go Back Home</Link>

                </div>
            }

        </div>
    );
};

export default Error;