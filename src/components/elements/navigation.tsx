import { Box, VStack, Text, Divider, Flex } from "@chakra-ui/react";
import { NAVIGATION } from "@/const/navigation";

export const Navigation = () => {
  return (
    <nav>
      {/* <Flex align="center" justify="center" gap="20px"> */}
      <VStack
        w="280px"
        h="100vh"
        p={6}
        align="left"
        lineHeight="9"
        overflowY="scroll"
      >
        {NAVIGATION.map((nav) => (
          <Box key={nav.CHAPTER}>
            <Text fontSize="md" fontWeight="bold" color="gray.800">
              {nav.CHAPTER}
            </Text>
            {nav.LIST.map((list) => (
              <Text key={list.TITLE} fontSize="sm" color="gray.600">
                {list.TITLE}
              </Text>
            ))}
          </Box>
        ))}
      </VStack>
      {/* <Divider orientation="vertical" height='70vh' /> */}
      {/* </Flex> */}
    </nav>
  );
};
