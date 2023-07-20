import { Box, VStack, Text, Divider, Flex } from "@chakra-ui/react";
import { NAVIGATION } from "@/const/navigation";
import { HEADER_HEIGHT } from "@/const/util";
import { useState } from "react";

export const Navigation = () => {
  const [openList, setOpen] = useState(() => {
    return NAVIGATION.map((v, i) => (i === 0 ? true : false));
  });

  const onClickNavBtn = (index: number) => {
    setOpen(openList.map((open, i) => (i === index ? !open : false)));
  };

  return (
    <Box as="aside" w="30%">
      <Box
        as="nav"
        pos="fixed"
        top={HEADER_HEIGHT}
        py={16}
        pl={12}
        pr="999px"
        mr="-999px"
        overflowY="auto"
        h={`calc(100vh - ${HEADER_HEIGHT})`}
        bgColor="blackAlpha.600"
      >
        <VStack w="100%" align="left" lineHeight="9" overflowY="scroll">
          {NAVIGATION.map((nav, i) => (
            <Box key={nav.CHAPTER}>
              <Flex
                alignItems="center"
                fontSize="md"
                fontWeight="bold"
                color={openList[i] ? "white" : "gray.800"}
                cursor="pointer"
                _hover={{ color: "whiteAlpha.800" }}
                // _after={{
                //   content: '""',
                //   display: "inline-block",
                //   bgImage: "url('/arrow.svg')",
                //   w: "2em",
                //   h: "2em",
                //   color: openList[i] ? "white" : "gray.800",
                //   transform: openList[i] ? "rotate(-90deg)" : "rotate(90deg)",
                // }}
                onClick={() => onClickNavBtn(i)}
              >
                {nav.CHAPTER}
              </Flex>
              {openList[i] &&
                nav.LIST.map((list) => (
                  <Text
                    key={list.TITLE}
                    pl={2}
                    fontSize="sm"
                    color={openList[i] ? "white" : "gray.800"}
                  >
                    {list.TITLE}
                  </Text>
                ))}
            </Box>
          ))}
        </VStack>
      </Box>
    </Box>
  );
};
