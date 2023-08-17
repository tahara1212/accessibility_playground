import fs from 'fs'
import { DocsDivider, DocsCenterDivider, DocsHeadingxl, DocsText, DocsUnderDivider, DocsImageBox } from "@/components/elements/docs";
import { ArticleLayout } from "@/components/layouts/articleLayout";
import { Layout } from "@/components/layouts/layout";
import ReactMarkdown from 'react-markdown';
import { heading, caption, text } from '@/data/device';
import { Box, Text, Image } from '@chakra-ui/react';


export default function Device() {
  return (
    <Layout>
      <ArticleLayout heading={heading}>
      <DocsText><ReactMarkdown>{caption}</ReactMarkdown></DocsText>
      <DocsCenterDivider />
      <DocsHeadingxl>スクリーンリーダー</DocsHeadingxl>
      <DocsText><ReactMarkdown>{text[1]}</ReactMarkdown></DocsText>
      <DocsCenterDivider />
      <DocsHeadingxl>マウススティック</DocsHeadingxl>
      <DocsText><ReactMarkdown>{text[2]}</ReactMarkdown></DocsText>
      <DocsImageBox>
        <Image src='/sf_stick.png' alt='SFマウススティック' />
        <Text>写真提供：トクソー技研株式会社</Text>
      </DocsImageBox>
      <DocsCenterDivider />
      <DocsHeadingxl>カメラ入力</DocsHeadingxl>
      <DocsText><ReactMarkdown>{text[3]}</ReactMarkdown></DocsText>
      <DocsImageBox>
        <Image src='/headpoint.png' alt='ヘッドポインタ' />
        <Text>macOSのヘッドポインタ機能 </Text>
      </DocsImageBox>
      <DocsCenterDivider />
      </ArticleLayout>
    </Layout>
  )
}
