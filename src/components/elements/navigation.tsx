import { Box, VStack, Text, Divider, Flex } from "@chakra-ui/react";
import { NAVIGATION } from "@/const/navigation";
import { HEADER_HEIGHT } from "@/const/util";

export const Navigation = () => {
  return (
    <Box as="nav" pos="sticky" top={HEADER_HEIGHT} flexShrink="0" h="80vh" overflowY="scroll">
      {/* <Flex align="center" justify="center" gap="20px"> */}
      <VStack w="280px" p={6} align="left" lineHeight="9">
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
    </Box>
  );
};
