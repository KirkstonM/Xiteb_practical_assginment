import React from "react";
import './header.css';
import { RxCross2 } from "react-icons/rx";
import { Button} from 'react-bootstrap';


export default function Booking(props) {

    return (
        <>
            <div className="guest-modal">
                <p>Max. 8 guests per room </p>
                <div className="section">
                    <p>Adult(s)</p>
                    <p>Children (under 12)</p>
                </div>
                <div className="rooms-section">
                    <h6> Room1</h6>
                    <div className="counter-1">
                        <div> - </div>
                        <div> 0 </div>
                        <div> + </div>
                    </div>
                    <div className="counter-2">
                        <span> - </span>
                        <span> 0 </span>
                        <span> + </span>
                    </div>
                </div>
                <div className="dash"></div>
                <Button className="w-100 addroom-btn"> + Add Button </Button>
                <div className="close-btn" onClick={() => props.setBookingModal(false)}>
                    <RxCross2 />
                </div>
            </div>
        </>
    )
}