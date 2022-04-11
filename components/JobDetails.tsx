import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Box,
  SimpleGrid,
  FormLabel,
  Input,
  Flex,
  Button,
  Spacer,
} from "@chakra-ui/react";

function JobDetails(props) {
  const MultiformSchema = Yup.object({
    jobtitle: Yup.string().required("Job is Required"),
    jobDes: Yup.string().required("Job Destination is Required"),
    jobLoc: Yup.string().required("Job Location is Required"),
  });

  const formik = useFormik({
    initialValues: {
      jobtitle: "",
      jobDes: "",
      jobLoc: "",
    },
    validationSchema: MultiformSchema,
    onSubmit: (values) => {
      //
      props.next();
      console.log(values);
    },
  });
  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <SimpleGrid columns={1} spacing={2} alignItems="stretch">
          <Box paddingBottom={2}>
            <FormLabel>Job Title</FormLabel>
            <Input
              name="jobtitle"
              size="lg"
              bg="white"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.jobtitle}
            />
            {formik.errors.jobtitle && formik.touched.jobtitle ? (
              <p style={{ color: "red", textAlign: "left" }}>
                {formik.errors.jobtitle}
              </p>
            ) : null}
          </Box>
          <Box paddingBottom={2}>
            <FormLabel>Job Description</FormLabel>
            <Input
              name="jobDes"
              size="lg"
              bg="white"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.jobDes}
            />
            {formik.errors.jobDes && formik.touched.jobDes ? (
              <p style={{ color: "red", textAlign: "left" }}>
                {formik.errors.jobDes}
              </p>
            ) : null}
          </Box>
          <Box paddingBottom={5}>
            <FormLabel>Job Location</FormLabel>
            <Input
              name="jobLoc"
              size="lg"
              bg="white"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.jobLoc}
            />
            {formik.errors.jobLoc && formik.touched.jobLoc ? (
              <p style={{ color: "red", textAlign: "left" }}>
                {formik.errors.jobLoc}
              </p>
            ) : null}
          </Box>
        </SimpleGrid>
        <Flex justify="center" alignItems="center" margin={5}>
          <Box>
            <Button
              bg="gray.200"
              color="black"
              value={props.tabIndex}
              onClick={props.previous}
            >
              Previous
            </Button>
          </Box>
          <Spacer />
          <Box>
            <Button type="submit" bg="#F87671" color="white">
              {props.tabIndex == 2 ? "Submit" : "Next"}
            </Button>
          </Box>
        </Flex>
      </form>
    </>
  );
}

export default JobDetails;
