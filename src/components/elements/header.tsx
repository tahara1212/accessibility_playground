import NextLink from 'next/link'
import { MAX_WIDTH, TITLE } from "@/const/util";
import { Box, Flex, Heading, Link } from "@chakra-ui/react";

export const Header = () => {
  return (
    <Box as="header" pos="fixed" top="0" left="0" right="0" w="100%" h="50px" bgColor="gray.900" boxShadow='md' zIndex="3">
      <Flex
        w="100%"
        h="100%"
        maxW={MAX_WIDTH}
        alignItems="center"
        justifyContent="end"
        marginX="auto"
      >
        <Link as={NextLink} href='/'>
          <Heading as="h1" size="md" color="whiteAlpha.800" pr={4}>
            {TITLE}
          </Heading>
        </Link>
      </Flex>
    </Box>
  );
};
