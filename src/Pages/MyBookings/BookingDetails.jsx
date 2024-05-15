import { Modal } from "flowbite-react";
// import { useState } from "react";

import DatePicker from "react-datepicker";


const BookingDetails = ({ booking, handleUpdateDate, showModal, setShowModal, handleCancel,
    updateCheckInDate,
    setUpdateCheckInDate,
    setUpdateCheckOutDate,
    updateCheckOutDate,
}) => {
    const { _id, img, room_type, totalPrice, roomCount, checkInDate, checkOutDate, adultCount, childCount } = booking || {}
    console.log(booking);

    return (
        <>
            {/* row 1 */}
            <tr >
                <th>
                    <button onClick={() => handleCancel(_id)} className="btn btn-sm btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </th>
                <td>
                    <div className="flex items-center gap-3">
                        <div className="avatar">
                            <div className="rounded-lg w-24 h-24">
                                <img src={img} alt="Avatar Tailwind CSS Component" />
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">{room_type}</div>
                            <div className="text-sm opacity-50">
                                <span className="font-bold">Date :</span>
                                {checkInDate && checkOutDate ? `${checkInDate} - ${checkOutDate}` : 'N/A'}
                            </div>
                            <div className="text-sm opacity-50">
                                <span className="font-bold">Details :</span>
                                Adults: {adultCount}, Child : {childCount}
                            </div>


                        </div>
                    </div>
                </td>
                <td>{totalPrice} </td>
                <td>{roomCount}</td>
                <td>{totalPrice}</td>
                <th>
                    <button onClick={() => setShowModal(true)} className="btn btn-ghost btn-xs">Update Date</button>

                    {/* Modal component */}
                    <Modal className="-mt-6 py-12 h-[600px] text-primaryColor font-inter bg-white shadow-xl text-center p-6" show={showModal} >
                        <h2 className="text-2xl mt-8 font-bold">Update Dates</h2>
                        <p>Your Previous Booking Dates: {checkInDate && checkOutDate ? `${new Date(checkInDate).toLocaleDateString()} - ${new Date(checkOutDate).toLocaleDateString()}` : 'N/A'}</p>
                        <div className="mt-6 mb-4 md:flex md:gap-4 gap-8 mx-auto">
                            {/* check in date update */}
                            <DatePicker className="border-2 p-2 rounded-md" selected={updateCheckInDate} onChange={(updateCheckInDate) => setUpdateCheckInDate(new Date(updateCheckInDate).toLocaleDateString())} minDate={new Date()} />

                            {/* check Out date update */}

                            <DatePicker className="border-2 p-2 mt-4 md:mt-0 rounded-md" selected={updateCheckOutDate} onChange={(updateCheckOutDate) => setUpdateCheckOutDate(new Date(updateCheckOutDate).toLocaleDateString())}
                                minDate={new Date()} />

                        </div>
                        <button onClick={() => { handleUpdateDate(_id); setShowModal(false) }} className="btn mt-14 mb-8 mx-auto bg-primaryColor text-white">Save Changes</button>
                    </Modal>
                </th>
            </tr>
        </>
    );
};

export default BookingDetails;