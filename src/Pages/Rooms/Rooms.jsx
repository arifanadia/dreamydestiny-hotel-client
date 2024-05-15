import { useLoaderData } from 'react-router-dom';
import bg from '../../images/rooms/roombg.jpg'
import bg1 from '../../images/rooms/roombg2.jpg'
import RoomSuites from './RoomSuites';

const Rooms = () => {
    const rooms = useLoaderData();
    console.log(rooms);

    return (
        <div className='mt-24 mb-[1500px]'>
            <div className="lg:p-32 p-24 bg-no-repeat bg-cover bg-center text-center text-white font-inter"
                style={{ backgroundImage: `linear-gradient(#0f0c29BA ,#302b638A,#24243e4D) , url(${bg})` }}>
                <h5>CHECK OUR ACCOMMODATIONS</h5>
                <h1 className='lg:text-6xl text-3xl mt-4 font-semibold '>Rooms,Suites & activities</h1>

            </div>

            <div className="text-center text-primaryColor font-inter mt-16" >
                <h5>Welcome to our DreamyDestiny</h5>
                <h1 className='lg:text-5xl text-3xl font-bold leading-relaxed my-4 '>Enjoy Island Views from <br />Our Lovely Rooms </h1>
                <h5 className='md:w-3/5 w-3/4 mx-auto'>Dreamy Destiny Beach Island Hotel offers a variety of lodging options for groups of all sizes. Whether you’re interested in accommodation in a corporate or family resort, a romantic room for two, or a self-contained cabin getaway, we’ve got the perfect accommodation for you. Our team is dedicated to providing service and accommodations that are as spectacular as the views.</h5>
                <div className='my-6 flex gap-4 justify-center'>
                    <a href='#activities'><button className='lg:text-xl border border-primaryColor py-2 px-4'>Our Rooms & Suites</button></a>
                    <a href='#rooms'><button className='lg:text-xl border border-primaryColor py-2 px-4'>Our Extra activities</button></a>
                </div>
                <div className=" lg:p-24 p-24 bg-no-repeat bg-cover bg-center text-center text-white font-inter"
                    style={{ backgroundImage: `linear-gradient(#0f0c29BA ,#302b638A,#24243e4D) , url(${bg1})` }}>
                    <h1 className='lg:text-4xl text-2xl mt-4 font-semibold '>Rooms & Suites</h1>

                </div>
                <div className='max-w-7xl justify-center lg:mx-auto mx-6 grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:h-64 xl:h-80 2xl:h-96 mt-10 mb-20'>
                    {
                        rooms.map(room => <RoomSuites key={room._id} room={room}></RoomSuites> )

                    }
                </div>
            </div>


        </div>
    );
};

export default Rooms;