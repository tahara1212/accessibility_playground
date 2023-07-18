import { Box, Flex, Heading } from "@chakra-ui/react";

export const Header = () => {
  return (
    <Box as="header" pos="sticky" top="0" w="100%" h="50px" bgColor="gray.600">
      <Flex
        w="100%"
        h="100%"
        maxW="1440px"
        alignItems="center"
        justifyContent="end"
        marginX="auto"
      >
        <Heading as="h1" size="md" color="whiteAlpha.800">
          Accessibility Playground
        </Heading>
      </Flex>
    </Box>
  );
};
