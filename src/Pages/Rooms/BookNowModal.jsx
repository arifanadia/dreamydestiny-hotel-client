
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import axios from "axios";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const BookNowModal = ({ bookingData, handleClose, open }) => {
    const {
        checkInDate,
        checkOutDate,
        adultCount,
        childCount,
        totalPrice,
        img,
        room_type,
        roomCount,
    } = bookingData || {}


    const handleConfirm = async () => {

        try {
            const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/bookings`, bookingData)
            console.log(data);



        }
        catch (err) {
            console.log(err);
        }
    }





    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <div>
                    <img src={img} alt="Room" className="w-64 h-48 mx-auto mb-4" />
                    <p>Room Type: {room_type}</p>
                    <p>Check-in Date: {checkInDate}</p>
                    <p>Check-out Date: {checkOutDate}</p>
                    <p>Adults: {adultCount}</p>
                    <p>Children: {childCount}</p>
                    <p>Total Price: ${totalPrice}</p>
                    <p>Number of Rooms: {roomCount}</p>
                </div>
                <div className='flex gap-4 mt-6'>
                    <button className='bg-primaryColor w-20 py-2 px-3 rounded-lg text-white' onClick={() => { handleConfirm(), handleClose() }}>Confirm</button>
                    <button className='bg-primaryColor w-20 py-2 px-3 rounded-lg text-white' onClick={() => handleClose()}>Cancel</button>
                </div>
            </Box>
        </Modal>

    );
};

export default BookNowModal;