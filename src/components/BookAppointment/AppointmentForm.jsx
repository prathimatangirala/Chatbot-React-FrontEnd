import React , { useEffect, useState, useReducer } from "react";
import * as ReactDOM from 'react-dom';
import "./AppointmentForm.css";
import { sendEmailMessage } from '../Data/ApiData';


const formReducer = (state, event) => {
 return {
   ...state,
   [event.name]: event.value
 }
}

const AppointmentForm = () => {

const [formData, setFormData] = useReducer(formReducer, {    
    name: '',
    sender: '',
    subject: '',
    msg: '',
    date: '',
    time: ''});

const [emailSendStatus, setEmailSendStatus] = useState('');

const handleSubmit = (event) => {
  event.preventDefault();
  sendEmailMessage(formData).then(response =>{
        if (!response) return null;
        setEmailSendStatus(response.message);
  })   
 };

const handleChange = (event) => {
   setFormData({
     name: event.target.name,
     value: event.target.value,
   });
 }

if (emailSendStatus === "success") {
    return (
      <div className="email-status-container">Appointment Request has been sent successfully  Our office will respond to you asap with the earliest available slots matching your preference.</div>
    );
}

 return (
    <div className="body_header" id="body_header">
    <form className="appointment-form" onSubmit={handleSubmit}>
      <fieldset>
        <label htmlFor="name">Name*:</label>
        <input type="text" id="name" name="name" onChange={handleChange} required/>
        <label htmlFor="mail">Email*:</label>
        <input type="email" id="mail" name="sender" onChange={handleChange} required/>
        <label htmlFor="appointment_for">Appointment for*:</label>
        <select id="appointment_for" onChange={handleChange} name="subject" required>
          <option value="Help Desk">None</option>
          <option value="Admission">Admission</option>
          <option value="Payments">Payments</option>
          <option value="Financial Aid">Financial Aid</option>
          <option value="Health">Health</option>
        </select>
        <label htmlFor="appointment_description">Appointment Description:</label>
        <textarea id="appointment_description" name="msg" onChange={handleChange}></textarea>
        <label htmlFor="date">Date*:</label>
        <input type="date" name="date"  onChange={handleChange} required></input>
        <label htmlFor="time">Time*:</label>
        <input type="time" name="time"  onChange={handleChange} required></input>
      </fieldset>
      <button type="submit">Request For Appointment</button>
    </form>
  </div>
  );
};

export default AppointmentForm;
