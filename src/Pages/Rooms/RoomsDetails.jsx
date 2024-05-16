import { Divider } from "@mui/material";
import { useLoaderData } from "react-router-dom";
import swim from '../../images/icons/swimming-pool.png'
import crib from '../../images/icons/baby-crib.png'
import washing from '../../images/icons/washing-machine.png'
import BookNow from "./BookNow";
import Review from "./Review";
import DisplayComment from "./DisplayComment";



// price_per_night, special_offer

const RoomsDetails = () => {

    const roomDetails = useLoaderData();

    console.log(roomDetails);
    const { room_image, room_type, description, availability, room_size, } = roomDetails || {}
    



    return (
        <div>
            <div className="bg-no-repeat bg-center bg-cover p-72"
                style={{ backgroundImage: `url(${room_image})` }}>

            </div>
            <div className="mt-16 max-w-7xl mx-auto lg:flex justify-between gap-6">
                <div className="">
                    <h2 className="text-primaryColor text-3xl font-bold ">{room_type}</h2>
                    <p className="my-4">{room_size}/Enjoy Food With Family</p>
                    <p className="mb-8">Status : {availability}</p>
                    <Divider></Divider>
                    <h2 className="text-primaryColor text-xl mt-6 font-medium">Overview</h2>
                    <p className="mt-4 w-11/12">{description}</p>
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
                <div className="bg-white shadow-xl rounded-lg p-4  max-w-4xl">
                    <BookNow roomDetails={roomDetails}></BookNow>
                </div>

            </div>


        <div className="max-w-7xl ml-20">
        <Review roomDetails={roomDetails}></Review>
            <DisplayComment roomDetails={roomDetails}></DisplayComment>
            
        </div>

        </div>
    );
};

export default RoomsDetails;