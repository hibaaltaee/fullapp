import React, { useState } from 'react';
import axios from 'axios';
import './form.css';
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import logo from '../assets/logo.png';

function Reservation() {
    const [formData, setFormData] = useState({
        full_name: '',
        email: '',
        phone_number: '',
        occasion: '',
        guests: 1,
        date_time: '',
    });

    const [formSubmitted, setFormSubmitted] = useState(false); // State to track form submission

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
        axios.post('https://djangoapp-production-755d.up.railway.app/api/reservations/', formData)
            .then(response => {
                console.log('Response:', response.data);
                setFormSubmitted(true); // Set state to trigger form reset
            })
            .catch(error => {
                console.error('Error:', error.response ? error.response.data : error.message);
            });
    };

    const handleReset = () => {
        setFormData({
            full_name: '',
            email: '',
            phone_number: '',
            occasion: '',
            guests: 1,
            date_time: '',
        });
        setFormSubmitted(false); // Reset formSubmitted state
    };

    return (
        <div className="container">
            <div className="container1">
                <img src={logo} alt="Logo" />
                <form onSubmit={handleSubmit} className="forms">
                    <div className="form">
                        <Form.Group>
                            <Form.Label>Enter your full name:</Form.Label>
                            <Form.Control
                                type="text"
                                name="full_name"
                                value={formData.full_name}
                                onChange={handleChange}
                                placeholder="Enter your full name"
                            />
                            <Form.Label>Enter your email address:</Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="name@gmail.com"
                            />
                            <Form.Label>Enter your phone number:</Form.Label>
                            <Form.Control
                                type="text"
                                name="phone_number"
                                value={formData.phone_number}
                                onChange={handleChange}
                                placeholder="123456"
                            />
                        </Form.Group>
                    </div>

                    <div className="form">
                        <Form.Group>
                            <Form.Label>Occasion (optional):</Form.Label>
                            <Form.Select
                                name="occasion"
                                value={formData.occasion}
                                onChange={handleChange}
                                aria-label="Default select example"
                            >
                                <option>select Occasion</option>
                                <option value="birthday">birthday</option>
                                <option value="anniversary">anniversary</option>
                                <option value="graduation">graduation</option>
                            </Form.Select>

                            <Form.Label>Enter number of guests:</Form.Label>
                            <Form.Control
                                type="number"
                                name="guests"
                                value={formData.guests}
                                onChange={handleChange}
                                placeholder="2"
                                min="1"
                                max="20"
                            />

                            <Form.Label>Date & time</Form.Label>
                            <Form.Control
                                type="datetime-local"
                                name="date_time"
                                value={formData.date_time}
                                onChange={handleChange}
                            />
                        </Form.Group>
                    </div>

                    <Button type="submit" className="formbutton">Reserve</Button>
                </form>
                {formSubmitted && (
                    <p>Reservation submitted successfully!</p>
                )}
            </div>
        </div>
    );
}

export default Reservation;
