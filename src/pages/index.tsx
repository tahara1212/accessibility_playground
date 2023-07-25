import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import {
  Box,
  VStack,
  Text,
  Divider,
  Flex,
  Heading,
  calc,
} from "@chakra-ui/react";
import { NAVIGATION } from "@/const/navigation";
import { Navigation } from "@/components/elements/navigation";
import { Header } from "@/components/elements/header";
import { HEADER_HEIGHT, MAX_WIDTH, TITLE } from "@/const/util";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
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
            <p>main</p>
          </Box>
          <Navigation />
        </Flex>
      </Box>
    </>
  );
}
