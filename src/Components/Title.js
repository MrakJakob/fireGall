import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";

export const Title = () => {
  return (
    <Flex direction="column">
      <Box p="4">
        <Text fontSize="xl" className="appTitle">
          FireGallery
        </Text>
      </Box>
      <Box w="full" align="center" mt="10">
        <Text fontSize="4xl" className="appDesc" color="gray.600">Your image gallery</Text>
      </Box>
      <Box align="center" mt="3">
        <Text fontSize="md" color="gray.500" className="appText">Upload your favourite memories</Text>
      </Box>
    </Flex>
  );
};
