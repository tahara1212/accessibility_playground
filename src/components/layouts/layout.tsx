import Head from "next/head";
import {
  Box,
  VStack,
  Text,
  Divider,
  Flex,
  Heading,
  calc,
} from "@chakra-ui/react";
import { Navigation } from "@/components/elements/navigation";
import { Header } from "@/components/elements/header";
import { HEADER_HEIGHT, MAX_WIDTH, TITLE } from "@/const/util";
import { ReactNode } from "react";

type Props = {
  children: ReactNode
}

export const Layout = ({children}: Props) => {
  return (
    <>
      <Head>
        <title>{TITLE}</title>
        <meta name="description" content={TITLE} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Box maxW={MAX_WIDTH} marginX="auto">
        <Flex>
          <Box as="main" w={`calc(70% - 100px)`} m={HEADER_HEIGHT}>
            {children}
          </Box>
          <Navigation />
        </Flex>
      </Box>
    </>
  );
}
