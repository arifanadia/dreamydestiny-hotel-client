import { Link } from "react-router-dom";
import bg from "../../images/banner/bg-5.jpg"
import SocialLogin from "./SocialLogin";

const LogIn = () => {
    return (
        <div className="flex max-w-7xl mx-auto shadow-xl my-16">


            <div className="flex-1 bg-no bg-repeat bg-cover bg-center text-center py-28" style={{ backgroundImage: `linear-gradient(#0f0c29BA ,#302b638A,#24243e4D),url(${bg})` }}>
                <div className="text-white my-24">
                    <h2 className=" font-inter font-bold text-4xl  ">WelCome Back Dear User!</h2>
                    <p className="mt-6" >We are happy to see you Back again.join us again.And Explore <br /> our new facilities and packages</p></div>


            </div>

            <div className="bg-gray-50 flex-1">
                <form class="max-w-sm mx-auto my-24 bg-white p-6 shadow-xl">
                    <h2 className="text-2xl font-inter font-bold mb-6">Please Login Now!</h2>
                    <SocialLogin></SocialLogin>
                    <div class="mb-5">
                        <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                        <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
                    </div>
                    <div className="mb-5">
                        <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                        <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    </div>
                    <div className="flex items-start mb-5">
                        <div className="flex items-center h-5">
                            <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                        </div>
                        <label for="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                    </div>
                <button className="bg-primaryColor text-white w-full py-2 rounded-lg">Sign In</button>
                <p className="my-4">Don't have an account? Please <Link to='/register' className="text-blue-500">Sign Up</Link></p>
                </form>
            </div>



        </div>
    );
};

export default LogIn;