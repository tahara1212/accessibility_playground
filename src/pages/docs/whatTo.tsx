import fs from 'fs'
import { DocsDivider, DocsHeading2xl, DocsHeadingxl, DocsText, DocsUnderDivider } from "@/components/elements/docs";
import { ArticleLayout } from "@/components/layouts/articleLayout";
import { Layout } from "@/components/layouts/layout";
import ReactMarkdown from 'react-markdown';
import { heading, caption, text } from '@/data/whatToMd';


export default function WhatTo() {
  return (
    <Layout>
      <ArticleLayout heading={heading}>
      <DocsText><ReactMarkdown>{caption}</ReactMarkdown></DocsText>
      <DocsDivider />
      <DocsHeading2xl>Webアクセシビリティ</DocsHeading2xl>
      <DocsText><ReactMarkdown>{text[1]}</ReactMarkdown></DocsText>
      <DocsDivider />
      <DocsHeadingxl>障害について</DocsHeadingxl>
      <DocsText><ReactMarkdown>{text[2]}</ReactMarkdown></DocsText>
      <DocsDivider />
      <DocsHeadingxl>アクセシビリティに取り組む理由</DocsHeadingxl>
      <DocsText><ReactMarkdown>{text[3]}</ReactMarkdown></DocsText>
      </ArticleLayout>
      <DocsDivider />
      <DocsHeadingxl>なぜWebアクセシビリティなのか</DocsHeadingxl>
      <DocsText><ReactMarkdown>{text[4]}</ReactMarkdown></DocsText>
    </Layout>
  )
}
