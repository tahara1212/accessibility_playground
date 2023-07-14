import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Box, VStack } from '@chakra-ui/react'
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
          <VStack>
            {NAVIGATION.map((nav) => (
              <Box>
                {nav.CHAPTER}
                {nav.LIST.map(list => <Box>{list.TITLE}</Box>)}
              </Box>
            ))}
          </VStack>
        </nav>
      </main>
    </>
  )
}
