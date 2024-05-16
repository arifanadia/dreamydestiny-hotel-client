import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { useEffect, useState } from 'react';
import axios from 'axios';
import {  Card, Dropdown } from "flowbite-react";




const Review = () => {

    const [reviews, setReviews] = useState([]);


    const url = `${import.meta.env.VITE_API_URL}/reviews`

    useEffect(() => {
        getData()

    }, [])
    const getData = async () => {
        const { data } = await axios.get(url);
       
        setReviews(data)



    }
    return (
        <div className='my-24'>
            <Swiper
                slidesPerView={4}
                centeredSlides={true}
                spaceBetween={30}
                grabCursor={true}
                pagination={{
                    clickable: true,
                }}
                loop={true}
                modules={[Pagination]}
                className="mySwiper"
            >


                {


                    reviews.map(review => (

                        <SwiperSlide key={review._id}>
                            <Card className="max-w-sm">
                                <div className="flex justify-end px-4 pt-4">
                                    <Dropdown inline label="">
                                        <Dropdown.Item>
                                            <a
                                                href="#"
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                                            >
                                                Edit
                                            </a>
                                        </Dropdown.Item>
                                        <Dropdown.Item>
                                            <a
                                                href="#"
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                                            >
                                                Export Data
                                            </a>
                                        </Dropdown.Item>
                                        <Dropdown.Item>
                                            <a
                                                href="#"
                                                className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                                            >
                                                Delete
                                            </a>
                                        </Dropdown.Item>
                                    </Dropdown>
                                </div>
                                <div className="flex flex-col items-center pb-10">
                                    <img
                                        alt="Bonnie image"
                                        height="96"
                                        src={review.photo}
                                       width="96"
                                        className="mb-3 rounded-full shadow-lg"
                                    />
                                    <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{review.name}</h5>
                                    <span className="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
                                    <div className="mt-4 space-y-3 lg:mt-6">
                                        <p>{review.rating}</p>
                                        <p>{review.comment}</p>

                                    </div>
                                </div>
                            </Card>




                        </SwiperSlide>

                    ))
                }


            </Swiper>
        </div>
    );
};

export default Review;