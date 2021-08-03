import React , { useEffect, useState, useReducer } from "react";
import * as ReactDOM from 'react-dom';
import "./BillingAndPayments.css";
import { submitBillingDataRequest } from '../Data/ApiData';


const formReducer = (state, event) => {
 return {
   ...state,
   [event.name]: event.value
 }
}

const BillAndPayments = ({billingOption}) => {

const [formData, setFormData] = useReducer(formReducer, {    
    csuId: ''});
const [billingInfo, setBillingInfo] = useState(null);  
const [paymentMethod, setPaymentMethod] = useState("");     
const [paymentAmount, setPaymentAmount] = useState("");     

const handleSubmit = (event) => {
  event.preventDefault();
  formData.optionType = billingOption
  submitBillingDataRequest(formData).then(response =>{
        if (!response) return null;
        if(response.balance){
          setBillingInfo(response.balance);
        }else{
          setPaymentMethod(response.paymentMethod)
          setPaymentAmount(response.paymentAmount)
        }          
  })   
 };

const handleChange = (event) => {
   setFormData({
     name: event.target.name,
     value: event.target.value,
   });
 }

 if (billingInfo) {
     return (
      <div className="bill-payments-container">Your current account balance is {billingInfo}</div>
    );
 }
 if(Object.keys(paymentMethod).length>0){
     return (
      <div className="bill-payments-container">Your recent payment  is on {paymentMethod} card for an amount of dollars {paymentAmount}</div>
    );
}     
 return (
    <div className="body_header" id="body_header">
    <form className="billing-form" onSubmit={handleSubmit}>
      <fieldset>
        <label htmlFor="name">Please enter you Chicago State University Id*:</label>
        <input type="text" id="name" name="csuId" onChange={handleChange} required/>
      </fieldset>
      <button type="submit">Submit</button>
    </form>
  </div>
  );
};

export default BillAndPayments;
