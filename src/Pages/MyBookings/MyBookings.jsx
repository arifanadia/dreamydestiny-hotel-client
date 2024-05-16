import { useEffect, useState } from "react";
import useAuth from "../../Hook/useAuth";
import axios from "axios";
import BookingDetails from "./BookingDetails";
import toast from "react-hot-toast";
import Swal from "sweetalert2";


const MyBookings = () => {
    const { user } = useAuth();
    const [bookings, setBookings] = useState([])
    const { checkInDate, checkOutDate } = bookings || {}
    const [showModal, setShowModal] = useState(false);
    const [updateCheckInDate, setUpdateCheckInDate] = useState(checkInDate || '');
    const [updateCheckOutDate, setUpdateCheckOutDate] = useState(checkOutDate || '');
    const updateDate = {
        checkInDate: updateCheckInDate,
        checkOutDate: updateCheckOutDate
    };














    const url = `${import.meta.env.VITE_API_URL}/my-bookings/${user?.email}`

    useEffect(() => {
        getData()
    }, [user])
    const getData = async () => {
        const { data } = await axios.get(url, {withCredentials : true});
        console.log(data);
        setBookings(data)
    }

    const handleCancel = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const { data } = await axios.delete(`${import.meta.env.VITE_API_URL}/bookings/${id}`);
                    console.log(data);
                    if (data.deleteCount > 0) {
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        } )

                    }
                    getData()

                }
                catch (err) {
                    console.log(err);
                }
            }
        })

    }


    const handleUpdateDate = async (id) => {

        try {
            const { data } = await axios.patch(`${import.meta.env.VITE_API_URL}/bookings/${id}`, updateDate);
            console.log(data);
            if (data.modifiedCount > 0) {
                // setShowModal(true)

                getData()
                toast.success('updated date successfully')

            }

        }
        catch (err) {
            console.log(err);
        }




    }


    return (
        <div className="overflow-x-auto max-w-7xl mx-auto mt-20">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Products</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>SubTotal</th>
                        <th>Update</th>
                        <th>Post</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        bookings.map(booking =>
                            <BookingDetails
                                key={booking._id}
                                booking={booking}
                                handleUpdateDate={handleUpdateDate}
                                showModal={showModal}
                                setShowModal={setShowModal}
                                handleCancel={handleCancel}
                                updateCheckInDate={updateCheckInDate}
                                setUpdateCheckInDate={setUpdateCheckInDate}
                                setUpdateCheckOutDate={setUpdateCheckOutDate}
                                updateCheckOutDate={updateCheckOutDate}



                            ></BookingDetails>)
                    }
                </tbody>

            </table>
        </div >
    );
};

export default MyBookings;