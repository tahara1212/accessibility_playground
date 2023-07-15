import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Box, VStack, Text, Divider, Flex, Heading } from "@chakra-ui/react";
import { NAVIGATION } from "@/const/navigation";
import { Navigation } from "@/components/elements/navigation";
import { Header } from "@/components/elements/header";

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
      <main className={`${styles.main} ${inter.className}`}>
        <Flex align="center" justify="center" gap="20px">
          <Navigation />
          <Box bgColor="red.200" w="860px">
            test
          </Box>
        </Flex>
      </main>
    </>
  );
}
