import { Link } from "react-router-dom";
import image from "../../images/about/about-3.jpg"

const Register = () => {

    const handleSignIn = e => {
        
    }
    return (


        <div className="bg-gray-50 border bg-no-repeat bg-cover bg-center "
            style={{ backgroundImage: `linear-gradient(#0f0c29BA ,#302b638A,#24243e4D) ,url(${image})` }}>
            <div>
                <form className="max-w-xl mx-auto my-20  bg-white p-6 shadow-xl">
                    <h2 className="text-2xl text-center font-inter font-bold mb-6">Hey,Welcome here.join us Now!</h2>
                    <div className="mb-5">
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
                        <input type="text" id="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="User name" required />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="photo" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your PhotoURL</label>
                        <input type="url" id="url" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="your photoURL" required />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                        <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                        <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    </div>
                    <button className="bg-primaryColor text-white w-full py-2 rounded-lg">Sign Up</button>
                    <p className="my-4 text-center">Don&apos;t have an account? Please <Link to='/register' className="text-blue-500">Sign In</Link></p>
                </form>
            </div>
        </div>


    );
};

export default Register;