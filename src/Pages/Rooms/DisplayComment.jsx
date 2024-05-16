import axios from "axios";
import { useEffect, useState } from "react";
import { MdOutlineStarPurple500 } from "react-icons/md";


const DisplayComment = ({ roomDetails }) => {
    const [reviews, setReviews] = useState([]);


    const url = `${import.meta.env.VITE_API_URL}/reviews`

    useEffect(() => {
        getData()

    }, [])
    const getData = async () => {
        const { data } = await axios.get(url);
        console.log(data);
        setReviews(data)



    }
    const filteredReviews = reviews.filter(review => review.roomId === roomDetails._id);
    console.log(filteredReviews);



    return (
        <div className="space-y-5">

           
                {
                    filteredReviews.map(reviews => (

                        <div key={reviews._id}
                        className="border-yellow-400 w-1/3 p-6 border">

                           
                         
                               <h1 className="4xl text-primaryColor font-bold">{reviews.name}</h1>
                               <p>{new Date(reviews.timeStamp).toLocaleDateString()}</p>
                               <p className="flex gap-2  items-center">{reviews.rating}<MdOutlineStarPurple500 /></p>
                              
                                <p>{reviews.comment}</p>
                              

                        </div>
                    ))
                }
         

        </div>
    );
};

export default DisplayComment;