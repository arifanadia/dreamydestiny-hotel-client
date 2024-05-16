import { Link, useNavigate } from "react-router-dom";
import image from "../../images/about/about-3.jpg"
import useAuth from "../../Hook/useAuth";
import toast from "react-hot-toast";
import axios from "axios";


const Register = () => {
    const { createUser, user, setUser, updateUserProfile } = useAuth();
    const navigate = useNavigate()

    const handleSignIn = async (e) => {
        e.preventDefault();
        const form = e.target
        const name = form.name.value
        const photo = form.photo.value
        const email = form.email.value
        const pass = form.password.value

        const userData = { name, photo, email, pass }

        try {
            const { data } = axios.post(`${import.meta.env.VITE_API_URL}/users`, userData)

            if (data.insertedId) {

                const result = await createUser(email, pass)
                console.log(result)
                await updateUserProfile(name, photo)
                setUser({ ...user, photoURL: photo, displayName: name })
                navigate('/')
                toast.success('sign up Successfully')
            }


        } catch (err) {
            toast.error(err?.message)
        }

    }
    return (


        <div className="bg-gray-50 border bg-no-repeat bg-cover bg-center "
            style={{ backgroundImage: `linear - gradient(#0f0c29BA,#302b638A,#24243e4D), url(${image})` }}>
            <div>
                <form onSubmit={handleSignIn} className="max-w-xl mx-auto my-20  bg-white p-6 shadow-xl">
                    <h2 className="text-2xl text-center font-inter leading-snug font-bold mb-6">Hey,Welcome here!!! <br />Sign Up and join us Now!</h2>
                    <div className="mb-5">
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
                        <input type="text" name="name" id="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="User name" required />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="photo" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your PhotoURL</label>
                        <input type="url" name="photo" id="url" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="your photoURL" required />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                        <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                        <input type="password" name="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    </div>
                    <button className="bg-primaryColor text-white w-full py-2 rounded-lg">Sign Up</button>
                    <p className="my-4 text-center">Don&apos;t have an account? Please <Link to='/register' className="text-blue-500">Sign In</Link></p>
                </form>
            </div>
        </div>


    );
};

export default Register;