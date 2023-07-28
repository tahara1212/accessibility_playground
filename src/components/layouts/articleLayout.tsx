import { Box, Heading } from "@chakra-ui/react";
import { ReactNode } from "react";

type Props = {
  heading: string
  children: ReactNode
}

export const ArticleLayout = ({heading, children}: Props) => {
  return (
    <Box as="article" bgColor="whiteAlpha.300" mt={16}>
      <Heading>{heading}</Heading>
      {children}
    </Box>
  );
};
