import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Box, VStack, Text } from '@chakra-ui/react'
import { NAVIGATION } from '@/const/navigation'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>accessibility_playground</title>
        <meta name="description" content="accessibility_playground" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <nav>
          <VStack align="left" lineHeight="8">
            {NAVIGATION.map((nav) => (
              <Box key={nav.CHAPTER}>
                <Text fontSize="md" fontWeight="bold" color="gray.800">
                  {nav.CHAPTER}
                </Text>
                {nav.LIST.map(list => <Text fontSize="sm" color="gray.600">{list.TITLE}</Text>)}
              </Box>
            ))}
          </VStack>
        </nav>
      </main>
    </>
  )
}
