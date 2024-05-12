import { Button } from "flowbite-react";


const Banner = ({ image, text, des }) => {
    return (

        <div className=" h-[600px] bg-no-repeat bg-cover bg-center "
            style={{ backgroundImage: `linear-gradient(#0f0c29BA ,#302b638A,#24243e4D) ,url(${image})` }}>
            <div className=" text-center mx-auto lg:text-left lg:pl-20 py-32 ">
                <h1 className="font-inter text-5xl text-white  font-bold  leading-snug xl:w-1/3 lg:w-2/5  ">{text}</h1>
                <p className="lg:w-1/3 text-[#f6f6f6]">{des}</p>
                <div className="flex gap-6">
                    <Button className="bg-primaryColor mx-auto lg:mx-0 mt-8 text-2xl shadow-xl">Register Now</Button>
                    <Button className="bg-primaryColor mx-auto lg:mx-0 mt-8 text-2xl shadow-xl">Enquire Now</Button>
                </div>
            </div>


            {/* <div className="hidden lg:inline w-1/2 py-20 pl-28 mr-10">

                    <form className="lg:w-10/12 p-6 bg-[#f6f6f6E9] text-primaryColor rounded-lg mx-8 lg:mx-0">
                        <p className="text-center font-inter ">CHOOSE DATE TO SEARCH</p>
                        <h2 className="text-center mt-3 text-3xl  font-inter font-semibold">BOOK YOUR STAY</h2>
                        <div className="form-control mt-6 ">
                            
                            <input type="date" placeholder="" className="input input-bordered text-primaryColor dark:text-white" required />
                        </div>
                        <div className="form-control my-4 ">
                            <input type="date" placeholder="" className="input input-bordered " required />
                        </div>
                        <div className="form-control">
                            <select className="select select-bordered ">
                                <option disabled selected>Choose Room</option>
                                <option>Room 1</option>
                                <option>Room 2</option>
                                <option>Room 3</option>
                                <option>Room 4</option>

                            </select>
                        </div>
                        <div className="flex gap-2 my-4 ">
                            <select className="select select-bordered lg:w-1/2 ">
                                <option disabled selected>Adult</option>
                                <option>Adult 1</option>
                                <option>Adult 2</option>
                                <option>Adult 3</option>
                                <option>Adult 4</option>

                            </select>
                            <select className="select select-bordered w-1/2 ">
                                <option disabled selected>Child</option>
                                <option>Child 1</option>
                                <option>Child 2</option>
                                <option>Child 3</option>
                                <option>Child 4</option>

                            </select>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-primaryColor dark:bg-white text-white">Check Now</button>
                        </div>
                    </form>
                </div> */}



        </div >


    );
};

export default Banner;