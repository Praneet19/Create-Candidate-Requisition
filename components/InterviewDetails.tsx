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

function InterviewDetails(props) {
  const MultiformSchema = Yup.object({
    InterviewMod: Yup.string().required("Interview Mode is Required"),
    InterviewDur: Yup.string().required("Interview Duration is Required"),
    InterviewLan: Yup.string().required("Interview Language is Required"),
  });

  const formik = useFormik({
    initialValues: {
      InterviewMod: "",
      InterviewDur: "",
      InterviewLan: "",
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
        <SimpleGrid columns={1} spacing={3} alignItems="stretch">
          <Box paddingBottom={2}>
            <FormLabel>Interview Mode</FormLabel>
            <Input
              name="InterviewMod"
              size="lg"
              bg="white"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.InterviewMod}
            />
            {formik.errors.InterviewMod && formik.touched.InterviewMod ? (
              <p style={{ color: "red", textAlign: "left" }}>
                {formik.errors.InterviewMod}
              </p>
            ) : null}
          </Box>
          <Box paddingBottom={2}>
            <FormLabel>Interview Duration</FormLabel>
            <Input
              name="InterviewDur"
              size="lg"
              bg="white"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.InterviewDur}
            />
            {formik.errors.InterviewDur && formik.touched.InterviewDur ? (
              <p style={{ color: "red", textAlign: "left" }}>
                {formik.errors.InterviewDur}
              </p>
            ) : null}
          </Box>
          <Box paddingBottom={5}>
            <FormLabel>Interview Language</FormLabel>
            <Input
              name="InterviewLan"
              size="lg"
              bg="white"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.InterviewLan}
            />
            {formik.errors.InterviewLan && formik.touched.InterviewLan ? (
              <p style={{ color: "red", textAlign: "left" }}>
                {formik.errors.InterviewLan}
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
            <Button
              type="submit"
              bg="#F87671"
              color="white"
              value={props.tabIndex}
            >
              {props.tabIndex == 2 ? "Submit" : "Next"}
            </Button>
          </Box>
        </Flex>
      </form>
    </>
  );
}

export default InterviewDetails;
