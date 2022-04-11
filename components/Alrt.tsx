import React from "react";
import {
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Alert,
} from "@chakra-ui/react";

function Alrt() {
  return (
    <>
      <Alert
        status="success"
        variant="subtle"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        height="200px"
      >
        <AlertIcon boxSize="40px" mr={0} />
        <AlertTitle mt={4} mb={1} fontSize="lg" color="black">
          Application submitted!
        </AlertTitle>
        <AlertDescription maxWidth="sm" color="black" fontSize="20px">
          Thanks Ziyad for submitting your application. Our team will get back
          to you soon.
        </AlertDescription>
      </Alert>
    </>
  );
}

export default Alrt;
