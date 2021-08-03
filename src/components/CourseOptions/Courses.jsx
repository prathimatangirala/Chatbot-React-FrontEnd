import React , { useEffect, useState, useReducer } from "react";
import * as ReactDOM from 'react-dom';
import "./courses.css";
import { submitCourseDataRequest } from '../Data/ApiData';
import { ConditionallyRender } from "react-util-kit";


const formReducer = (state, event) => {
 return {
   ...state,
   [event.name]: event.value
 }
}

const Courses = ({courseOption}) => {

const [formData, setFormData] = useReducer(formReducer, {    
    csuId: '',
    semester: '',});
const [registeredCourses, setRegisteredCourses] = useState([]);  
const [courseSchedule, setCourseSchedule] = useState([]);     
const [transcripts, setTranscripts] = useState([]); 
const [apiCallSuccessfull, setApiCallSuccessfull] = useState(false);   

const handleSubmit = (event) => {
  event.preventDefault();
  formData.optionType = courseOption
  submitCourseDataRequest(formData).then(response =>{
        if (!response) return null;
        setApiCallSuccessfull(true)
        if(courseOption === 'registered_courses') {
          setRegisteredCourses(response);
        }else if(courseOption === 'course_schedule'){
          setCourseSchedule(response);
        }else if(courseOption === 'transcripts'){
          setTranscripts(response);
        }          
  })   
 };

const handleChange = (event) => {
   setFormData({
     name: event.target.name,
     value: event.target.value,
   });
 }

 if (registeredCourses && registeredCourses.length>0) { 
    return( 
         <div className="container">
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>Course name</th>
                        <th>Course semester</th>
                    </tr>
                </thead>
                <tbody>
                    {registeredCourses && registeredCourses.map(registeredCourse =>
                        <tr  key={registeredCourse.id}>
                            <td>{registeredCourse.course_name}</td>
                            <td>{registeredCourse.course_semester}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
     )
 }

 if (apiCallSuccessfull && courseOption === 'registered_courses' && registeredCourses && registeredCourses.length==0) { 
    return( 
         <div className="empty-container">You don't have any courses registered for this semester</div>
     )
 }

 if (courseSchedule && courseSchedule.length>0) {
    return( 
         <div className="container">
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>Course name</th>
                        <th>Course timings</th>
                    </tr>
                </thead>
                <tbody>
                    {courseSchedule && courseSchedule.map(schedule =>
                        <tr key={schedule.id}>
                            <td>{schedule.course_name}</td>
                            <td>{schedule.course_semester}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
     )
 }

if (apiCallSuccessfull && courseOption === 'course_schedule' && courseSchedule && courseSchedule.length.length==0) { 
    return( 
         <div className="empty-container">You don't have any courses scheduled for this semester</div>
     )
 }


 if (transcripts && transcripts.length>0) {
    return( 
         <div className="container">
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>Course Name</th>
                        <th>Course Grade</th>
                    </tr>
                </thead>
                <tbody>
                    {transcripts && transcripts.map(transcript =>
                        <tr key={transcript.id}>
                            <td>{transcript.course_name}</td>
                            <td>{transcript.course_grade}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
     )
 }

 if (apiCallSuccessfull && courseOption === 'transcripts' && transcripts && transcripts.length.length==0) { 
    return( 
         <div className="empty-container">You don't have any grades avaliable for this semester</div>
     )
 }

return (
    <div className="body_header" id="body_header">
    <form className="billing-form" onSubmit={handleSubmit}>
      <fieldset>
        <ConditionallyRender
            ifTrue={courseOption === 'registered_courses' || courseOption === 'transcripts'}
            show={ <div> <label htmlFor="name">Please enter you Chicago State University Id*:</label>
        <input type="text" id="name" name="csuId" onChange={handleChange} required/></div>}
          />
        <ConditionallyRender
            ifTrue={courseOption === 'registered_courses' || courseOption === 'course_schedule'}
            show={<div><label htmlFor="name">Please enter you Semester Info*:</label>
        <input type="text" id="name" name="semester" onChange={handleChange} required/></div>}
          />  
      </fieldset>
      <button type="submit">Submit</button>
    </form>
  </div>
);  

};

export default Courses;
