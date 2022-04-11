import { Box, Flex, SimpleGrid, Spacer, Tag } from "@chakra-ui/react";
import React from "react";

function Sider() {
  return (
    <>
      <Flex>
        <Box>
          <b>
            <i>Draft</i>
          </b>
        </Box>
        <Spacer />
        <Box>
          <Tag p={3}>Preview</Tag>
        </Box>
      </Flex>

      <Flex
        bg="#253754"
        marginTop="50px"
        paddingBottom="25px"
        paddingTop="25px"
        paddingRight="10px"
        paddingLeft="10px"
        borderRadius="12px"
        boxShadow="xl"
      >
        <Box alignItems="center" justifyContent="center" color="white">
          <b>Senior Javascript Developer</b>
        </Box>
        <Spacer />
        <Box color="white">
          <b>
            <h1>OPENINGS: 5</h1>
          </b>
        </Box>
      </Flex>
      <Box bg="white" marginTop="50px" padding="3" borderRadius="10px">
        <Flex>
          <Box>
            <b>REQUISITIONS DETAILS</b>
          </Box>
        </Flex>

        <SimpleGrid
          spacingX={15}
          marginTop="40PX"
          fontSize={10}
          textStyle="bold"
          columns={3}
          justifyItems="flex-start"
        >
          <Box>EMPLOYMENT TYPE</Box>

          <Box>OWNER</Box>

          <Box>URGENCY</Box>
        </SimpleGrid>

        <SimpleGrid
          marginTop="1PX"
          spacingX={15}
          columns={3}
          justifyItems="flex-start"
        >
          <Box>
            <b>Permanent</b>
          </Box>
          <Box>
            <b> HCL Tech</b>
          </Box>
          <Box>
            <b>Low</b>
          </Box>
        </SimpleGrid>

        <Flex marginTop="50PX" fontSize={14}>
          <Box>Gender Preference</Box>
        </Flex>
        <Flex>
          <Box>
            <b>No Preference</b>
          </Box>
        </Flex>
      </Box>
    </>
  );
}

export default Sider;
