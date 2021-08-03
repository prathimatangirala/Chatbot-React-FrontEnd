const baseURL = "http://192.168.0.14:8000";
const environment = "dev";

export const getQueryData = async (question) => {
  const requestOptions = {
        method: 'POST',
        mode: 'cors',
        headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
        body: JSON.stringify({ 'query': question })
    };	
  let data = await fetch(`${baseURL}/chatbot/data`, requestOptions);
  let responseData = await data.json();
  return responseData;
};

export const sendEmailMessage = async (emailMessage) => {
  const requestOptions = {
        method: 'POST',
        mode: 'cors',
        headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
        body: JSON.stringify(emailMessage)
    };	
  let data = await fetch(`${baseURL}/chatbot/send-message`, requestOptions);
  let responseData = await data.json();
  return responseData;
};

export const submitBillingDataRequest = async (billingRequest) => {
  const requestOptions = {
        method: 'POST',
        mode: 'cors',
        headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
        body: JSON.stringify(billingRequest)
    };  
  let data = await fetch(`${baseURL}/chatbot/submit-billing-data-request`, requestOptions);
  let responseData = await data.json();
  return responseData;
};

export const submitCourseDataRequest = async (courseRequest) => {
  const requestOptions = {
        method: 'POST',
        mode: 'cors',
        headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
        body: JSON.stringify(courseRequest)
    };  
  let data = await fetch(`${baseURL}/chatbot/submit-course-data-request`, requestOptions);
  let responseData = await data.json();
  return responseData;
};