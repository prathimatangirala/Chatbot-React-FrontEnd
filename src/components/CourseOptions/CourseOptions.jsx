import React from "react";

import Options from "../Options/Options";

const CourseOptions = props => {
  const options = [
    {
      name: "Registered Courses for Semester",
      handler: props.actionProvider.handleRegisteredCourses,
      id: 1
    },
    {
      name: "Current Schedule for Courses",
      handler: props.actionProvider.handleCourseSchedule,
      id: 2
    },
    {
      name: "Latest Transcripts",
      handler: props.actionProvider.handleTranscripts,
      id: 3
    }
  ];
  return <Options options={options} title="Options" {...props} />;
};

export default CourseOptions;
