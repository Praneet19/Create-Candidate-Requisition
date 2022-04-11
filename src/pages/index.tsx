import React, { useState } from "react";

import { Box, Container, Flex, Spacer } from "@chakra-ui/react";

import FormContainer from "../../containers/Home/FormContainer";
import SideView from "../../containers/Home/SideView";
import Head from "../../components/Head";

export default function Home() {
  const [tabIndex, setTabIndex] = React.useState(0);

  function next() {
    setTabIndex(tabIndex + 1);
  }

  function previous() {
    setTabIndex(tabIndex - 1);
  }

  return (
    <Container bg="#f8f9fb" maxWidth="1440px">
      <Container maxWidth="1250px" bg="#f8f9fb">
        <Head tabIndex={tabIndex} />
        <Flex>
          <Box
            bg="gray.40"
            width="100%"
            p="3"
            textAlign="center"
            rounded="lg"
            color="gray.400"
          >
            <FormContainer
              next={next}
              tabIndex={tabIndex}
              previous={previous}
            />
          </Box>
          <Spacer />
          <Box
            p="2"
            rounded="md"
            bg="gray.40"
            margin={4}
            w={[400, 500, 600]}
            boxShadow="2xl"
          >
            <SideView />
          </Box>
        </Flex>
      </Container>
    </Container>
  );
}
