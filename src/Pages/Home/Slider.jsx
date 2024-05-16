import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import 'aos/dist/aos.css'; 

import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import bg from '../../images/banner/bg.webp'
import bg1 from '../../images/banner/bg-2.jpeg'
import bg2 from '../../images/banner/bg-3.jpg'
import bg3 from '../../images/banner/bg-4.jpg'
import bg4 from '../../images/banner/bg-5.jpg'
import Banner from './Banner';

const Slider = () => {
    return (
        <div className='relative'>
            <Swiper
                effect={'fade'}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{ delay: 2000 }}
                loop={true}
                modules={[EffectFade, Navigation, Autoplay, Pagination]}
                className="mySwiper "
            >
                <SwiperSlide >
                    <Banner image={bg} text={'Your Perfect Gateway Awaits!'}
                        des={"Discover comfort and luxury at our hotels. Perfect for any trip. Indulge, relax, and create unforgettable memories with us."} /></SwiperSlide>
                <SwiperSlide >
                    <Banner image={bg1} text={'Your Perfect Gateway Awaits!'}
                        des={"Discover comfort and luxury at our hotels. Perfect for any trip. Indulge, relax, and create unforgettable memories with us."} /> </SwiperSlide>
                <SwiperSlide >
                    <Banner image={bg2} text={'Your Perfect Gateway Awaits!'}
                        des={"Discover comfort and luxury at our hotels. Perfect for any trip. Indulge, relax, and create unforgettable memories with us."} /></SwiperSlide>
                <SwiperSlide >
                    <Banner image={bg3} text={'Your Perfect Gateway Awaits!'}
                        des={"Discover comfort and luxury at our hotels. Perfect for any trip. Indulge, relax, and create unforgettable memories with us."} /> </SwiperSlide>
                <SwiperSlide >
                    <Banner image={bg4} text={'Your Perfect Gateway Awaits!'}
                        des={"Discover comfort and luxury at our hotels. Perfect for any trip. Indulge, relax, and create unforgettable memories with us."} /></SwiperSlide>

            </Swiper>
            <div   data-aos="fade-left"
                data-aos-duration="2000"  className="absolute -top-2 z-[2] right-2 hidden lg:inline w-1/2 py-20 pl-28 mr-10">
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
                    <div className="form-control mt-6">
                        <button className="btn bg-primaryColor dark:bg-white text-white">Check Now</button>
                    </div>
                </form>
            </div>
            <div className="absolute z-[2] lg:hidden mx-auto top-96  md:right-8 md:left-8 right-6 left-6 w-3/4">

                <form className=" p-6 bg-[#f6f6f6E9] text-primaryColor rounded-lg mx-8 lg:mx-0">
                    <p className="text-center font-inter ">CHOOSE DATE TO SEARCH</p>
                    <h2 className="text-center mt-3 text-3xl  font-inter font-semibold">BOOK YOUR STAY</h2>
                    <div className="form-control mt-6 ">
                        <input type="date" placeholder="email" className="input input-bordered " required />
                    </div>
                    <div className="form-control my-4 ">
                        <input type="date" placeholder="email" className="input input-bordered " required />
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
                        <select className="select select-bordered w-1/2 ">
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
                    <div className="form-control mt-6">
                        <button className="btn bg-primaryColor dark:bg-white text-white">Check Now</button>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default Slider;