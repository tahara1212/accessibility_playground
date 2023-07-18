import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Box, VStack, Text, Divider, Flex, Heading, calc } from "@chakra-ui/react";
import { NAVIGATION } from "@/const/navigation";
import { Navigation } from "@/components/elements/navigation";
import { Header } from "@/components/elements/header";
import { HEADER_HEIGHT } from "@/const/util";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>accessibility_playground</title>
        <meta name="description" content="accessibility_playground" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Box as="main" maxW="1440px" marginX="auto" h={`calc(100vh - 50px)`}>
        <Flex align="start" justify="center" p={14} gap="20px">
          <Navigation />
          <Box bgColor="red.200" w="860px" h="3000px">
            test
          </Box>
        </Flex>
      </Box>
    </>
  );
}
