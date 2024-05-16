
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';


const SpecialOffer = ({ rooms }) => {

    return (
        <div className='max-w-7xl mx-auto '>
            <h1 className="text-5xl font-bold text-primaryColor dark:text-white my-6">Our Special Offers</h1>
            <p className="lg:w-1/2">Elevate your stay with our dreamyDestiny.Boasting modern design, expansive living spaces, and breathtaking city vistas, this penthouse suite offers the epitome of luxury living. Experience sophistication and comfort like never before.</p>
            <Swiper
                cssMode={true}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                loop={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className="mySwiper">
                {
                    rooms.map(room => (
                        <SwiperSlide key={room._id}>
                            <div className=" max-bg-no-repeat bg-cover bg-center my-24 rounded-lg "
                                style={{ backgroundImage: `linear-gradient(#0f0c29BA ,#302b638A,#24243e4D) ,url(${room.room_image})` }}>
                                <div data-aos-duration="2000" className=" text-center mx-auto py-48 ">
                                    <h1 className="font-lobster text-3xl text-white  font-bold  leading-snug  ">{room.special_offers}</h1>
                                    <p className="lg:w-1/3 text-[#f6f6f6]"></p>
                                </div>
                            </div></SwiperSlide>


                    ))
                }




            </Swiper>


        </div>


    );
};

export default SpecialOffer;