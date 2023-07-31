import fs from 'fs'
import { DocsDivider, DocsHeading2xl, DocsHeadingxl, DocsText, DocsUnderDivider } from "@/components/elements/docs";
import { ArticleLayout } from "@/components/layouts/articleLayout";
import { Layout } from "@/components/layouts/layout";
import ReactMarkdown from 'react-markdown';
import { heading, caption, text_01 } from '@/data/whatToMd';


export default function WhatTo() {
  return (
    <Layout>
      <ArticleLayout heading={heading}>
      <DocsText><ReactMarkdown>{caption}</ReactMarkdown></DocsText>
      <DocsHeading2xl>Webアクセシビリティ</DocsHeading2xl>
      <DocsText><ReactMarkdown>{text_01}</ReactMarkdown></DocsText>
      <DocsHeadingxl>ehgahgrewh</DocsHeadingxl>
      <DocsUnderDivider />
      <DocsDivider />
      <DocsHeadingxl>ehgahgrewh</DocsHeadingxl>
      </ArticleLayout>
    </Layout>
  )
}
