import React, { useState } from "react";
import { useFormik } from "formik";

import * as Yup from "yup";

import {
  Box,
  SimpleGrid,
  FormLabel,
  Input,
  Button,
  Flex,
  Spacer,
} from "@chakra-ui/react";

function Requestition(props) {
  const MultiformSchema = Yup.object({
    RequestTitle: Yup.string().required("Requested Title is Required"),
    owner: Yup.string().required("Owner is Required"),
    hiringmanager: Yup.string().required("Hiring Manager is Required"),
    NOO: Yup.number().required("Number of Opening is Required"),
    urgency: Yup.string().required("Urgency is Required"),
    status: Yup.string().required("Status is Required"),
  });

  const formik = useFormik({
    initialValues: {
      RequestTitle: "",
      owner: "",
      hiringmanager: "",
      NOO: "",
      urgency: "",
      status: "",
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
          <Box>
            <FormLabel>Request Title</FormLabel>
            <Input
              name="RequestTitle"
              bg="white"
              size="lg"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.RequestTitle}
            />
            {formik.errors.RequestTitle && formik.touched.RequestTitle ? (
              <p style={{ color: "red", textAlign: "left" }}>
                {formik.errors.RequestTitle}
              </p>
            ) : null}
          </Box>

          <Box>
            <FormLabel>Owner</FormLabel>
            <Input
              name="owner"
              bg="white"
              size="lg"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.owner}
            />
            {formik.errors.owner && formik.touched.owner ? (
              <p style={{ color: "red", textAlign: "left" }}>
                {formik.errors.owner}
              </p>
            ) : null}
          </Box>
          <Box>
            <FormLabel>Hiring Manager</FormLabel>
            <Input
              name="hiringmanager"
              bg="white"
              size="lg"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.hiringmanager}
            />
            {formik.errors.hiringmanager && formik.touched.hiringmanager ? (
              <p style={{ color: "red", textAlign: "left" }}>
                {formik.errors.hiringmanager}
              </p>
            ) : null}
          </Box>
          <Box>
            <FormLabel>Number of Openings</FormLabel>
            <Input
              name="NOO"
              size="lg"
              bg="white"
              type="number"
              onChange={formik.handleChange}
              value={formik.values.NOO}
            />
            {formik.errors.NOO && formik.touched.NOO ? (
              <p style={{ color: "red", textAlign: "left" }}>
                {formik.errors.NOO}
              </p>
            ) : null}
          </Box>
          <Box>
            <FormLabel>Urgency</FormLabel>
            <Input
              name="urgency"
              size="lg"
              bg="white"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.urgency}
            />
            {formik.errors.urgency && formik.touched.urgency ? (
              <p style={{ color: "red", textAlign: "left" }}>
                {formik.errors.urgency}
              </p>
            ) : null}
          </Box>

          <Box>
            <FormLabel>status</FormLabel>
            <Input
              name="status"
              size="lg"
              bg="white"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.status}
            />
            {formik.errors.status && formik.touched.status ? (
              <p style={{ color: "red", textAlign: "left" }}>
                {formik.errors.status}
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

export default Requestition;
