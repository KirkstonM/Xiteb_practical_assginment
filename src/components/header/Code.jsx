import React from "react";
import './header.css';
import { RxCross2 } from "react-icons/rx";
import { Form} from 'react-bootstrap';


export default function Code(props) {

    return (
        <>
            <div className="special-code-modal">
                <p> corporate/special rate</p>
                <Form.Select aria-label="Default select example">
                    <option>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </Form.Select>

                <input type='text'
                    placeholder="enter code"
                    className="form-control my-3"
                />
                <div className="close-btn" onClick={() => props.setCodeModal(false)}>
                    <RxCross2 />
                </div>
            </div>

        </>
    )
}