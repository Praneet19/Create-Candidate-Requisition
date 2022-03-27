import React, { useState } from 'react';
import { Step, StepLabel, Stepper, Grid, Icon } from '@material-ui/core';
import { Field, Form, Formik, FormikConfig, FormikValues } from 'formik';
import { mixed, number, object } from 'yup';
import * as Yup from 'yup';
import { Box, Link, Select, Flex, SimpleGrid, Spacer, StackDivider, Divider, Tag, useToast, Drawer, DrawerContent, DrawerOverlay, DrawerCloseButton, DrawerHeader, DrawerBody, FormLabel, Input, InputGroup, DrawerFooter, InputLeftAddon, InputRightAddon, Textarea, Heading, Stack, toast, FormControl } from '@chakra-ui/react';
import {Button} from '@chakra-ui/button';
import { TextField } from 'formik-material-ui';
import NextLink from "next/link"
import { AddIcon } from '@chakra-ui/icons'
import { useDisclosure } from "@chakra-ui/react";

//const sleep = (time) => new Promise((acc) => setTimeout(acc, time));



export default function Home() {

  const { isOpen, onOpen, onClose } = useDisclosure()
  const firstField = React.useRef()

  return (
    <>
      <Flex p={5} >
        <Box>
          <Heading bg='gray.90' fontSize={35}>Create Candidate Requisition</Heading>
        </Box>
        <Spacer />
        <Box>
          <Flex>
            <Box as='button' bg='gray.300' borderRadius='md' px={8} h={10} marginRight='5px'>
              <NextLink href='./Login' passHref>
                <Link>Login</Link>
              </NextLink>
            </Box>
            <Spacer />
            <Box >
              <Button leftIcon={<AddIcon />} bg='#3f51b5' onClick={onOpen} color='white'>
                Create user
              </Button>
              <Drawer
                isOpen={isOpen}
                placement='right'
                initialFocusRef={firstField}
                onClose={onClose}
              >
                <DrawerOverlay />
                <DrawerContent>
                  <DrawerCloseButton />
                  <DrawerHeader borderBottomWidth='1px'>
                    Create a new account
                  </DrawerHeader>

                  <DrawerBody>
                    <Stack spacing='24px'>
                      <Box>
                        <FormLabel htmlFor='username'>Name</FormLabel>
                        <Input
                          ref={firstField}
                          id='username'
                          placeholder='Please enter user name'
                        />
                      </Box>

                      <Box>
                        <FormLabel htmlFor='url'>Mail-ID</FormLabel>
                        <InputGroup>

                          <Input
                            type='url'
                            id='url'
                            placeholder='Please enter email'
                          />
                          <InputRightAddon>.com</InputRightAddon>
                        </InputGroup>
                      </Box>

                      <Box>
                        <FormLabel htmlFor='owner'>Select Gender</FormLabel>
                        <Select id='owner' defaultValue='segun' form={undefined} >
                          <option value='segun'>Male</option>
                          <option value='kola'> Female</option>
                        </Select>
                      </Box>

                      <Box>
                        <FormLabel htmlFor='desc'>Description</FormLabel>
                        <Textarea id='desc' />
                      </Box>
                    </Stack>
                  </DrawerBody>

                  <DrawerFooter borderTopWidth='1px'>
                    <Button variant='outline' mr={3} onClick={onClose}>
                      Cancel
                    </Button>
                    <Button colorScheme='blue'>Submit</Button>
                  </DrawerFooter>
                </DrawerContent>
              </Drawer>
            </Box>
          </Flex>
        </Box>
      </Flex>
      <Divider orientation='horizontal' />
      <SimpleGrid
        bg='gray.40'
        spacing='2'
        columns={1}
        row={2}
        p='3'
        textAlign='center'
        rounded='lg'
        color='gray.400'
        minChildWidth='45vw'
        spacingX='50px'

      >

        <Box p='3' rounded='md' bg='gray.90'>
          <FormikStepper
            initialValues={{
              RequestTitle: '',
              owner: '',
              hiringmanager: '',
              NOO: '',
              urgency: '',
              status: '',
              jobtitle: '',
              jobDes: '',
              jobLoc: '',
              InterviewMod: '',
              InterviewDur: '',
              InterviewLan: '',
            }}


            onSubmit={async (values) => {
              await sleep(3000);
              console.log('values', values);
            }}
          >
            <FormikStep
              label="Requisition Details"
              validationSchema={object({
                RequestTitle: Yup.string().required("Requested Title is Required"),
                owner: Yup.string().required("Owner is Required"),
                hiringmanager: Yup.string().required("Hiring Manager is Required"),
                NOO: Yup.number().required("Number of Opening is Required"),
                urgency: Yup.string().required("Urgency is Required"),
                status: Yup.string().required("Status is Required"),
              })}
            >
              <SimpleGrid columns={1} spacing={2} alignItems='stretch'>
                <Box >
                  <Field fullWidth name="RequestTitle" type="text" component={TextField} label="Request Title" />

                </Box>
                <Box >
                  <Field fullWidth name="owner" type="text" component={TextField} label="Owner" />
                </Box>
                <Box >
                  <Field fullWidth name="hiringmanager" type="text" component={TextField} label="Hiring Manager" />
                </Box>
                <Box >
                  <Field fullWidth name="NOO" type="number" component={TextField} label="Number of Openings" />
                </Box>
                <Box >
                  <Field fullWidth name="urgency" type="text" component={TextField} label="Urgency" />
                </Box>

                <Box paddingBottom={5}>
                  <Field fullWidth name="status" type="text" component={TextField} label="status" />
                </Box>

                
              </SimpleGrid>
            </FormikStep>
            <FormikStep
              label="Job Details"
              validationSchema={object({
                jobtitle: Yup.string().required("Job is Required"),
                jobDes: Yup.string().required("Job Destination is Required"),
                jobLoc: Yup.string().required("Job Location is Required"),
              })}
            >
              <SimpleGrid columns={1} spacing={3} alignItems='stretch'>
                <Box paddingBottom={2}>
                  <Field
                    fullWidth
                    name="jobtitle"
                    component={TextField}
                    type="text"
                    label="Job Title"
                  />
                </Box>
                <Box paddingBottom={2} >
                  <Field
                    fullWidth
                    name="jobDes"
                    component={TextField}
                    type="text"
                    label="Job Description"
                  />
                </Box>
                <Box paddingBottom={5}>
                  <Field fullWidth name="jobLoc" component={TextField} type="text" label="Job Location" >
                  </Field>
                </Box>
              </SimpleGrid>
            </FormikStep>
            <FormikStep label="Interview Settings"
              validationSchema={object({
                InterviewMod: Yup.string().required("Interview Mode is Required"),
                InterviewDur: Yup.string().required("Interview Location is Required"),
                InterviewLan: Yup.string().required("Interview Language is Required"),
              })}
            >
              <SimpleGrid columns={1} spacing={3} alignItems='stretch'>
                <Box paddingBottom={2}>
                  <Field fullWidth name="InterviewMod" component={TextField} label="Interview Mode" />
                </Box>
                <Box paddingBottom={2}>
                  <Field fullWidth name="InterviewDur" component={TextField} label="Interview Duration" />
                </Box>
                <Box paddingBottom={5}>
                  <Field fullWidth name="InterviewLan" component={TextField} label="Interview Language" />
                </Box>
              </SimpleGrid>
            </FormikStep>
          </FormikStepper>
        </Box>
        <Box p='5' rounded='md' bg='gray.40' w={[300, 400, 500]} boxShadow='2xl' >
          <Flex>
            <Box>
              <b><i>Draft</i></b>
            </Box>
            <Spacer />
            <Box >
              {/* <b><i><h1>Preview</h1></i></b> */}
              <Tag p={3}>Preview</Tag>
            </Box>
          </Flex>

          <Flex bg='#253754' marginTop='50px' padding='19' borderRadius='12px' boxShadow='xl' >
            <Box alignItems='center' justifyContent='center' color='white' >
              <b>Senior Javascript Developer</b>
            </Box>
            <Spacer />
            <Box color='white'>
              <b><h1>OPENINGS: 5</h1></b>
            </Box>
          </Flex>
          <Box bg='white' marginTop='50px' padding='3' borderRadius='10px'>
            <Flex >
              <Box>
                <b>REQUISITIONS DETAILS</b>
              </Box>
            </Flex>

            <SimpleGrid spacingX={15} marginTop='40PX' fontSize={10} textStyle='bold' columns={3} justifyItems='flex-start'>
              <Box>
                EMPLOYMENT TYPE

              </Box>

              <Box >
                OWNER
              </Box>

              <Box >
                URGENCY
              </Box>
            </SimpleGrid>

            <SimpleGrid marginTop='1PX' spacingX={15} columns={3} justifyItems='flex-start'>
              <Box>
                <b>Permanent</b>
              </Box>
              <Box >
                <b> HCL Tech</b>
              </Box>
              <Box >
                <b>Low</b>
              </Box>
            </SimpleGrid>



            <Flex marginTop='50PX' fontSize={14}>
              <Box>
                Gender Preference
              </Box>
            </Flex>
            <Flex >
              <Box>
                <b>No Preference</b>
              </Box>
            </Flex>
          </Box>
        </Box>
      </SimpleGrid>
    </>
  );
}

export interface FormikStepProps
  extends Pick<FormikConfig<FormikValues>, 'children' | 'validationSchema'> {
  label: string;
}

export function FormikStep({ children }: FormikStepProps) {
  return <>{children}</>;
}

export function FormikStepper({ children, ...props }: FormikConfig<FormikValues>) {
  const childrenArray = React.Children.toArray(children) as React.ReactElement<FormikStepProps>[];
  const [step, setStep] = useState(0);
  const currentChild = childrenArray[step];
  const [completed, setCompleted] = useState(false);

  function isLastStep() {
    return step === childrenArray.length - 1;
  }

  const toast = useToast()

  function alert() {

    return toast({
      title: 'Details Submited',
      description: "We've created Candidate Requisition",
      status: 'success',
      duration: 9000,
      isClosable: true,
    })
  }

  return (
    <Formik
      {...props}
      validationSchema={currentChild.props.validationSchema}
      onSubmit={async (values, helpers) => {
        if (isLastStep()) {
          await props.onSubmit(values, helpers);
          setCompleted(true);
        } else {
          setStep((s) => s + 1);

          helpers.setTouched({});
        }
      }}
    >
      {({ isSubmitting }) => (
        <Form autoComplete="off">
          <Stepper alternativeLabel activeStep={step}>
            {childrenArray.map((child, index) => (
              <Step key={child.props.label} completed={step > index || completed}>
                <StepLabel>{child.props.label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          {currentChild}

          <Grid container spacing={2} justify='flex-end'>
            {step > 0 ? (
              <Grid item>
                <Button
                  bg='#3f51b5'
                  color='white'
                  variant='contained'
                  disabled={isSubmitting}
                  onClick={() => setStep((s) => s - 1)}
                >
                  Back
                </Button>
              </Grid>
            ) : null}
            <Grid item>
              <Button
                onClick={() => isSubmitting ? 'Submitting' : isLastStep() ? alert() : null}
                disabled={isSubmitting}
                bg='#3f51b5'
                variant='contained'
                type="submit"
                color='white'

              >
                {isSubmitting ? 'Submitting' : isLastStep() ? 'Submit' : 'Next'}
              </Button>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  );
}

function sleep(arg0: number) {
  throw new Error('Function not implemented.');
}




