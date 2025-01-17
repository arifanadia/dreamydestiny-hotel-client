import bg1 from "../../images/about/about.jpg"
import bg2 from "../../images/about/about-2.webp"
import bg3 from "../../images/about/about-3.jpg"
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const AboutSection = () => {
    return (
        <div className="md:grid md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-6 md:mt-64  mt-72 lg:my-14 lg:mx-auto">
            <div className="hidden lg:inline bg-no-repeat bg-cover bg-center p-40" style={{ backgroundImage: ` url(${bg1})` }}></div>
            <div className="md:col-span-2 lg:col-span-1 bg-no-repeat bg-cover bg-center " style={{ backgroundImage: ` url(${bg2})` }}>
                <div className="bg-primaryColor lg:w-full xl:h-[520px] lg:h-[500px] md:h-[320px] h-[300px] opacity-80 flex justify-center items-center">
                    <div className="md:m-4 text-center w-full lg:w-11/12 xl:h-[490px] md:h-[300px] h-[280px] lg:h-[470px] border-2 border-white lg:py-6 lg:mx-auto mx-2 ">
                        <h5 className="font-inter font-semibold text-white mt-20 lg:m-0 ">Welcome To The DreamyDestiny Hotel</h5>
                        <h2 className="xl:text-5xl lg:text-4xl text-3xl lg:leading-snug  mt-4 font-inter font-bold xl:leading-snug text-white lg:w-4/5 lg:mx-auto">In the  Heart of Saint Martin, outstanding View</h2>
                        <Link to='/about-us'>
                            <button className="mx-auto text-white text-xl flex items-center justify-center gap-4 xl:my-6 my-4"><span>Explore the hotel</span> <FaArrowRightLong /></button>
                        </Link>
                    </div>

                </div>
            </div>
            <div className="lg:hidden col-span-1 bg-no-repeat bg-cover bg-center p-40" style={{ backgroundImage: ` url(${bg1})` }}></div>
            <div className="bg-no-repeat col-span-1 bg-cover bg-center p-40" style={{ backgroundImage: ` url(${bg3})` }}></div>

        </div>
    );
};

export default AboutSection;