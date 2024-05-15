import axios from "axios";
import { Card } from "flowbite-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";



const Featured = () => {

    const [rooms, setRooms] = useState([]);
 
    const url = `${import.meta.env.VITE_API_URL}/featured-rooms`

    useEffect(() => {
        getData()
        
    }, [])
    const getData = async () => {
        const { data } = await axios.get(url);
        console.log(data);
        setRooms(data)
        
       
    
    }
    const featuredRooms = rooms.filter(f => f.featured)
    console.log(featuredRooms);

    console.log(rooms);
 


    return (

        <div className="font-inter max-w-7xl lg:mx-auto md:mx-6 mt-20 md:text-left text-center
            xl:mb-[700px] lg:mb-[800px] md:mb-[1300px]  mb-[2700px]  ">
            <p className="lg:w-2/5">ENJOY WORLD-CLASS STAY EXPERIANCE</p>
            <h1 className="text-5xl font-bold text-primaryColor dark:text-white my-6">Featured Rooms</h1>
            <p className="lg:w-1/2">Elevate your stay with our dreamyDestiny.Boasting modern design, expansive living spaces, and breathtaking city vistas, this penthouse suite offers the epitome of luxury living. Experience sophistication and comfort like never before.</p>
            <div className="grid h-56 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:h-64 xl:h-80 2xl:h-96 mt-10 mb-20">
                {featuredRooms.map((room) =>
                    <Card key={room._id}
                        className="lg:max-w-full max-w-lg mx-auto "

                    > <img className="h-[250px] rounded-lg" src={room.room_image} alt="" />
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            {room.room_type}
                        </h5>
                        <p title={room.description} className="font-normal text-gray-700 dark:text-gray-400">
                            {room.description.substring(0, 70)}....
                        </p>
                        <Link to={`/room-details/${room._id}`}>
                            <button className="bg-primaryColor w-full rounded-lg py-2 text-white">Book Now</button>
                        </Link>

                    </Card>



                )}

            </div>
        </div>

    );
};

export default Featured;