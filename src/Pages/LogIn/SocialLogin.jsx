import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";



const SocialLogin = () => {
    return (
        <div>
            <div className="border-2 px-6 py-2 border-primaryColor rounded-lg flex justify-center items-center gap-4">
                <FcGoogle className="text-2xl"></FcGoogle><span className="font-inter font-bold"> Sign In With Google</span>
            </div>
            <div className="border-2 my-4 px-6 py-2 border-primaryColor rounded-lg flex justify-center items-center gap-4">
            <FaGithub className="text-2xl"></FaGithub> <span className="font-inter font-bold"> Sign In With Google</span>
            </div>
            <p>-------------  or connect with Email  ------------</p>

            
        </div>
    );
};

export default SocialLogin;