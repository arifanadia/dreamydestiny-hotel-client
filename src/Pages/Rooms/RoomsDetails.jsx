import { Divider } from "@mui/material";
import { useLoaderData } from "react-router-dom";
import swim from '../../images/icons/swimming-pool.png'
import crib from '../../images/icons/baby-crib.png'
import washing from '../../images/icons/washing-machine.png'
import { useState } from "react";


const RoomsDetails = () => {
    const roomDetails = useLoaderData();
    const [count, setCount] = useState(0);
    console.log(roomDetails);
    const { room_image, room_type, description, availability, room_size, price_per_night, special_offer } = roomDetails || {}


    const handleIncreaseCount = () => {
        setCount(count + 1)
    }
    const handleDecreaseCount = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }

    return (
        <div>
            <div className="bg-no-repeat bg-center bg-cover p-72"
                style={{ backgroundImage: `url(${room_image})` }}>

            </div>
            <div className="mt-16 max-w-7xl mx-auto flex justify-between gap-6">
                <div className="">
                    <h2 className="text-primaryColor text-3xl font-bold ">{room_type}</h2>
                    <p className="my-4">{room_size}/Enjoy Food With Family</p>
                    <p className="mb-8">Status : {availability}</p>
                    <Divider></Divider>
                    <h2 className="text-primaryColor text-xl mt-6 font-medium">Overview</h2>
                    <p className="mt-4 w-3/4">{description}</p>
                    <div>
                        <h2 className="text-primaryColor text-xl mt-6 font-medium">Family-Friendly Amenities</h2>
                        <div className="flex gap-6 my-6">
                            <div className="bg-gray-100 rounded-lg border">
                                <p className="flex items-center gap-4 py-4 px-6">
                                    <img className="w-10 h-10" src={swim} alt="" />
                                    Kids Swimming Pool</p>

                            </div>
                            <div className="bg-gray-100 rounded-lg border">
                                <p className="flex items-center gap-4 py-4 px-6">
                                    <img className="w-10 h-10" src={crib} alt="" />
                                    Kids Swimming Pool</p>

                            </div>
                            <div className="bg-gray-100 rounded-lg border">
                                <p className="flex items-center gap-4 py-4 px-6">
                                    <img className="w-10 h-10" src={washing} alt="" />
                                    Kids Swimming Pool</p>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white shadow-xl rounded-lg p-4  max-w-6xl">
                    <form className="px-3 my-6 text-primaryColor rounded-lg mx-8 lg:mx-auto">
                        <div className="flex  items-center gap-10 justify-between">
                            <h2 className=" mt-3 text-3xl font-inter font-semibold">RESERVE:</h2>
                            <p className=" flex gap-2 text-lg ">From
                                <span className="font-semibold text-primaryColor">${price_per_night}
                                    <span>/night</span></span></p>
                        </div>
                        <div className="form-control mt-6 ">

                            <input type="date" placeholder="" className="input input-bordered text-primaryColor dark:text-white" required />
                        </div>
                        <div className="form-control my-4 ">
                            <input type="date" placeholder="" className="input input-bordered " required />
                        </div>
                        <div className="form-control">
                            <select className="select select-bordered ">
                                <option disabled>Choose Room</option>
                                <option>Room 1</option>
                                <option>Room 2</option>
                                <option>Room 3</option>
                                <option>Room 4</option>

                            </select>
                        </div>
                        <div className="flex gap-2 my-4 ">
                            <select className="select select-bordered lg:w-1/2 ">
                                <option disabled>Adult</option>
                                <option>Adult 1</option>
                                <option>Adult 2</option>
                                <option>Adult 3</option>
                                <option>Adult 4</option>

                            </select>
                            <select className="select select-bordered w-1/2 ">
                                <option disabled>Child</option>
                                <option>Child 1</option>
                                <option>Child 2</option>
                                <option>Child 3</option>
                                <option>Child 4</option>

                            </select>
                        </div>
                        <div className="mt-10">
                            <h2 className=" mt-3 text-2xl font-inter font-semibold">Extra Services</h2>
                            <div className="flex mt-4 items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <input type="checkbox" name="clean" id="clean" />
                                    <h5>Room Clean</h5>
                                </div>
                                <h5>$12/night </h5>

                            </div>
                            <div className=" flex  mt-6 items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <input type="checkbox" name="massage" id="massage" />
                                    <h5>Massage</h5>
                                </div>
                                <div className="flex gap-3 items-center">
                                    <h5>$35/person</h5>
                                    {/* increment and decrement button */}
                                    <div className="relative flex items-center max-w-[8rem]">
                                        <button onClick={handleDecreaseCount} type="button" id="decrement-button" data-input-counter-decrement="quantity-input" className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                                            <svg className="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h16" />
                                            </svg>
                                        </button>
                                        <input type="text" id="quantity-input" data-input-counter aria-describedby="helper-text-explanation" className="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="999" value={count} required />
                                        <button onClick={handleIncreaseCount} type="button" id="increment-button" data-input-counter-increment="quantity-input" className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                                            <svg className="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="flex  mt-6 items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <input type="checkbox" name="spa" id="spa" />
                                    <h5>Day Spa</h5>
                                </div>
                                <div className="flex gap-3 items-center">
                                    <h5>$40/person</h5>
                                    {/* increment and decrement button */}
                                    <div className="relative flex items-center max-w-[8rem]">
                                        <button onClick={handleDecreaseCount} type="button" id="decrement-button" data-input-counter-decrement="quantity-input" className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                                            <svg className="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h16" />
                                            </svg>
                                        </button>
                                        <input type="text" id="quantity-input" data-input-counter aria-describedby="helper-text-explanation" className="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="999" value={count} required />
                                        <button onClick={handleIncreaseCount} type="button" id="increment-button" data-input-counter-increment="quantity-input" className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                                            <svg className="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-primaryColor dark:bg-white text-white">Book Now</button>
                        </div>
                    </form>
                </div>
            </div>



        </div>
    );
};

export default RoomsDetails;