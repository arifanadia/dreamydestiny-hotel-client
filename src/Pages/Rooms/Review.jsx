import { Modal } from "flowbite-react";
import {  useState } from "react";
import { MdOutlineCancel, MdOutlineStarHalf, MdOutlineStarPurple500 } from "react-icons/md";
import useAuth from "../../Hook/useAuth";
import { Textarea } from "flowbite-react";
import axios from "axios";
import { useEffect } from "react";
import toast from "react-hot-toast";



const Review = ({ roomDetails }) => {
    const [showModal, setShowModal] = useState(false);
    const { user } = useAuth();
    const { _id } = roomDetails || {}
    // const hasReviewed = localStorage.getItem(`reviewed_${roomDetails._id}_${user?.uid}`);
    const [booked, setBooked] = useState([]);
    useEffect(() => {
        bookData()
    }, [])


    const bookData = async () => {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/bookings`);
        console.log(data)
        setBooked(data)
    }
  
        const hasBooked = booked.some(book => book.room_type === roomDetails.room_type);
        console.log(hasBooked);

    
    


    const handleReview = async (e) => {
        e.preventDefault();
        const form = e.target;
        const name = user?.displayName
        const rating = form.rating.value
        const comment = form.comment.value
        const roomId = _id
        const timeStamp = new Date().toISOString()
        const photo = user?.photoURL

        const reviews = {
            name,
            rating,
            comment,
            roomId,
            timeStamp,
            photo
        }

        // if (hasReviewed) {

        //     return toast.error('you arlready reviewed')
        // }
        // Implement this function
        if(!hasBooked){
        return toast.error('you can only review rooms you have booked')
        
        }



        try {
            const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/reviews`, reviews)
            console.log(data);


            // localStorage.setItem(`reviewed_${roomDetails._id}_${user?.uid}`, "true");
            setShowModal(false)



        }
        catch (err) {
            console.log(err);
        }





    }
    return (
        <div className="mt-24  ">
            <div className="flex gap-8">
                <div>
                    <h5 className="text-xl text-primaryColor">Rating & Reviews :</h5>
                    <div className="flex items-center gap-4 my-4">
                        <h4 className="text-2xl font-bold text-primaryColor">5.00</h4>
                        <p className="text-yellow-300 text-2xl flex items-center gap-1"><MdOutlineStarPurple500 />
                            <MdOutlineStarPurple500 />
                            <MdOutlineStarPurple500 />
                            <MdOutlineStarPurple500 />
                            <MdOutlineStarHalf /></p>
                        <p className="bg-yellow-300 text-white py-1 px-2">Awesome</p>
                    </div>

                </div>
                <div className="border-l-2 border-primaryColor pl-20">
                    <div className="flex items-center gap-2">
                        <h4 className="text-xl font-medium text-primaryColor">5.00</h4>
                        <progress className="progress progress-warning w-56" value='100' max="100"></progress>
                    </div>

                    <div className="flex items-center gap-2">
                        <h4 className="text-xl font-medium text-primaryColor">4.00</h4>
                        <progress className="progress progress-warning w-56" value='80' max="100"></progress>
                    </div>
                    <div className="flex items-center gap-2">
                        <h4 className="text-xl font-medium text-primaryColor">3.00</h4>
                        <progress className="progress progress-warning w-56" value='60' max="100"></progress>
                    </div>
                    <div className="flex items-center gap-2">
                        <h4 className="text-xl font-medium text-primaryColor">2.00</h4>
                        <progress className="progress progress-warning w-56" value='40' max="100"></progress>
                    </div>
                    <div className="flex items-center gap-2">
                        <h4 className="text-xl font-medium text-primaryColor">2.00</h4>
                        <progress className="progress progress-warning w-56" value='10' max="100"></progress>
                    </div>
                </div>

            </div>
            <div>
                <button onClick={() => setShowModal(true)} className="text-xl py-3 px-4 shadow-xl text-primaryColor font-bold my-6">Write Your Review Here</button>
                <Modal className="-mt-6 py-24 h-[800px] text-primaryColor font-inter bg-white shadow-xl text-center p-8" show={showModal} >
                    <button onClick={() => setShowModal(false)} className="flex justify-end pr-6 text-3xl" ><MdOutlineCancel /></button>
                    <h2 className="text-xl mt-8 font-medium">What You Feel About Us <br /> Write here Freely</h2>


                    <form onSubmit={handleReview}>
                        <div className="rating mx-auto">
                            <input type="radio" value={1} name="rating" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" value={2} name="rating" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" value={3} name="rating" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" value={4} name="rating" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" value={5} name="rating" className="mask mask-star-2 bg-orange-400" />
                        </div>
                        <div className="mt-5">

                            <input value={user?.displayName} type="text" name="name" id="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-3/4 mx-auto p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="User name" required readOnly />
                        </div>
                        <Textarea className="textarea w-3/4 mx-auto mt-5"
                            placeholder="Write something..." name="comment"></Textarea>

                        <button type="submit" className="btn mt-14 mb-8 mx-auto bg-primaryColor text-white">Save </button>

                    </form>
                    <div>

                    </div>


                </Modal>
            </div>


        </div>
    );
};

export default Review;