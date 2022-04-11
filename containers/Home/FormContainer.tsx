import { Alert } from "@chakra-ui/react";
import React from "react";
import Alrt from "../../components/Alrt";

import InterviewDetails from "../../components/InterviewDetails";
import JobDetails from "../../components/JobDetails";
import Requestition from "../../components/Requestition";

function FormContainer(props) {
  return (
    <>
      {props.tabIndex === 0 ? (
        <Requestition
          next={props.next}
          tabIndex={props.tabIndex}
          previous={props.previous}
        />
      ) : props.tabIndex === 1 ? (
        <JobDetails
          next={props.next}
          tabIndex={props.tabIndex}
          previous={props.previous}
        />
      ) : props.tabIndex === 2 ? (
        <InterviewDetails
          next={props.next}
          tabIndex={props.tabIndex}
          previous={props.previous}
        />
      ) : (
        <Alrt />
      )}
    </>
  );
}

export default FormContainer;
