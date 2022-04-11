import { Box, Container, Flex, Heading } from "@chakra-ui/react";
import React from "react";

const Head = (props) => {
  return (
    <>
      <Heading
        paddingBottom={5}
        paddingTop={5}
        bg="gray.40"
        color="black"
        textAlign="initial"
        fontSize={35}
      >
        Create Candidate Requisition
      </Heading>
      <Container
        borderBottom={"4px groove"}
        maxWidth={"1440px"}
        marginBottom={"3vh"}
      >
        <Flex w={"750px"} alignItems={"left"} justifyItems={"left"}>
          <Box
            w={"100%"}
            h={"80px"}
            textAlign={"initial"}
            paddingTop={"25px"}
            fontSize={20}
            zIndex={9}
            position={"relative"}
            borderBottom={props.tabIndex === 0 ? "solid 3px red" : null}
            color={props.tabIndex === 0 ? "black" : "#A0A0A0"}
          >
            Requestition Details
          </Box>
          <Box
            w={"100%"}
            h={"80px"}
            textAlign={"center"}
            paddingTop={"25px"}
            fontSize={20}
            zIndex={9}
            position={"relative"}
            borderBottom={props.tabIndex === 1 ? "solid 3px red" : null}
            color={props.tabIndex === 1 ? "black" : "	#A0A0A0"}
          >
            Job Details
          </Box>

          <Box
            w={"100%"}
            h={"80px"}
            textAlign={"center"}
            paddingTop={"25px"}
            fontSize={20}
            zIndex={9}
            position={"relative"}
            borderBottom={props.tabIndex === 2 ? "solid 3px red" : null}
            color={props.tabIndex === 2 ? "black" : "	#A0A0A0"}
          >
            Interview Details
          </Box>
        </Flex>
      </Container>
    </>
  );
};

export default Head;
