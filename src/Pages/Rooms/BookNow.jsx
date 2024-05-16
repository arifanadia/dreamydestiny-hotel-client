import useAuth from "../../Hook/useAuth";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import toast from "react-hot-toast";

import BookNowModal from "./BookNowModal";




const BookNow = ({ roomDetails }) => {
    const { room_image, price_per_night, room_type } = roomDetails || {}
    const roomCleanPrice = 12;
    const massagePrice = 34;
    const spaPrice = 40;
    const roomCount = 1;

    const { user } = useAuth()
    const [massageCount, setMassageCount] = useState(0);
    const [spaCount, setSpaCount] = useState(0);
    const [bookingData, setBookingData] = useState({});
    const [startDate, setStartDate] = useState(new Date());
    const [startDate2, setStartDate2] = useState(new Date());
    // const [isAvailable, setIsAvailable] = useState(availability === true)
    const [open, setOpen] = useState(false);

    


    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    const handleBookNow = async (e) => {
        e.preventDefault();
        const form = e.target
        const checkInDate = startDate
        const checkOutDate = startDate2
        if (checkOutDate <= checkInDate) return toast.error('end date must be after start date')
    

        const adultCount = form.adultCount.value;
        console.log(adultCount);
        if (adultCount < 1) {
            return toast.error('Please select at least 1 adult')

        }
        const childCount = form.childCount.value;
        const email = user?.email;
        const name = user?.displayName
        const roomClean = form.roomClean.value;
        console.log(roomClean);



        // start date to end date how many days are
        const nightCount = Math.floor((checkOutDate - checkInDate) / (1000 * 60 * 60 * 24));

        // main total price
        const mainTotalPrice = price_per_night * nightCount;

        // extraPrice 
        let extraPrice = 0;
        if (roomClean) {
            extraPrice = roomCleanPrice * nightCount
            console.log(extraPrice);
        }

        const extraTotalPrice = (massageCount * massagePrice) + (spaCount * spaPrice) + extraPrice
        const totalPrice = mainTotalPrice + extraTotalPrice


      setBookingData ( {
                checkInDate: new Date(checkInDate).toLocaleDateString(),
                checkOutDate: new Date(checkOutDate).toLocaleDateString(),
                adultCount,
                childCount,
                totalPrice,
                price_per_night,
                email,
                img: room_image,
                room_type,
                roomCount,
                name
            }
            )
      

 


        // } else {

        //     toast.error('sorry this room is already booked')
        // }


    }


    const handleIncreaseCount = () => {
        setMassageCount(massageCount + 1)
    }
    const handleDecreaseCount = () => {
        if (massageCount > 0) {
            setMassageCount(massageCount - 1)
        }
    }
    const handleIncreaseCount2 = () => {
        setSpaCount(spaCount + 1)
    }
    const handleDecreaseCount2 = () => {
        if (massageCount > 0) {
            setSpaCount(spaCount - 1)
        }
    }
    console.log(bookingData);
    return (
        <form onSubmit={handleBookNow} className="px-3 my-6 text-primaryColor rounded-lg mx-8 lg:mx-auto">
            <div className="flex  items-center gap-10 justify-between">
                <h2 className=" mt-3 text-3xl font-inter font-semibold">RESERVE:</h2>
                <p className=" flex gap-2 text-lg ">From
                    <span className="font-semibold text-primaryColor">${price_per_night}
                        <span>/night</span></span></p>
            </div>
            <div className=" mt-6 mb-4 md:flex md:gap-4 gap-8  ">

                <DatePicker className="border-2 p-2 rounded-md" selected={startDate} onChange={(date) => setStartDate(date)} minDate={new Date()}/>
                <DatePicker className="border-2 p-2 mt-4 md:mt-0 rounded-md" selected={startDate2} onChange={(date) => setStartDate2(date)} minDate={new Date()} />
            </div>

            <div className="flex gap-2 my-4 ">
                <select name="adultCount" id="countries" className="bg-white border-2 border-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" defaultValue={0} required>
                    <option value={0} disabled  >Select Adult</option>
                    <option value={1} >Adult 1</option>
                    <option value={2}>Adult 2</option>
                    <option value={3}>Adult 3</option>
                    <option value={4}>Adult 4</option>
                </select>
                <select name="childCount" id="countries" className="bg-white border-2 border-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" defaultValue={0} required>
                    <option value={0} disabled>Select Child</option>
                    <option value={1}>Child 1</option>
                    <option value={2}>Child 2</option>
                    <option value={3}>Child 3</option>
                    <option value={4}>Child 4</option>
                </select>

            </div>
            <div className="mt-10">
                <h2 className=" mt-3 text-2xl font-inter font-semibold">Extra Services</h2>
                <div className="flex mt-4 items-center justify-between">
                    <div className="flex items-center gap-2">
                        <input type="checkbox" name="roomClean" id="roomClean" />
                        <h5>Room Clean</h5>
                    </div>
                    <h5>${roomCleanPrice}/night </h5>

                </div>
                <div className=" flex  mt-6 items-center justify-between">
                    <div className="flex items-center gap-2">
                        <input type="checkbox" name="massage" id="massage" />
                        <h5>Massage</h5>
                    </div>
                    <div className="flex gap-3 items-center">
                        <h5>${massagePrice}/person</h5>
                        {/* increment and decrement button */}
                        <div className="relative flex items-center max-w-[8rem]">
                            <button onClick={handleDecreaseCount} type="button" id="decrement-button" data-input-counter-decrement="quantity-input" className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                                <svg className="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h16" />
                                </svg>
                            </button>
                            <input name="massagePersons" type="text" id="quantity-input" data-input-counter aria-describedby="helper-text-explanation" className="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="999" value={massageCount} required />
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
                        <h5>${spaPrice}/person</h5>
                        {/* increment and decrement button */}
                        <div className="relative flex items-center max-w-[8rem]">
                            <button onClick={handleDecreaseCount2} type="button" id="decrement-button" data-input-counter-decrement="quantity-input" className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                                <svg className="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h16" />
                                </svg>
                            </button>
                            <input name="spaPersons" type="text" id="quantity-input" data-input-counter aria-describedby="helper-text-explanation" className="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="999" value={spaCount} required />
                            <button onClick={handleIncreaseCount2} type="button" id="increment-button" data-input-counter-increment="quantity-input" className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                                <svg className="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

            </div>
            <div className="form-control mt-6">
                <button onClick={handleOpen}
                    className="btn bg-primaryColor dark:bg-white text-white">Book Now</button>
                <BookNowModal bookingData={bookingData} handleClose={handleClose} open={open}></BookNowModal>


            </div>
        </form >
    );
};

export default BookNow;