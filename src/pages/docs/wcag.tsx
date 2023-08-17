import fs from 'fs'
import { DocsDivider, DocsHeading2xl, DocsHeadingxl, DocsText, DocsUnderDivider } from "@/components/elements/docs";
import { ArticleLayout } from "@/components/layouts/articleLayout";
import { Layout } from "@/components/layouts/layout";
import ReactMarkdown from 'react-markdown';
import { heading, caption, text } from '@/data/wcag';


export default function Wcag() {
  return (
    <Layout>
      <ArticleLayout heading={heading}>
      <DocsText><ReactMarkdown>{caption}</ReactMarkdown></DocsText>
      <DocsDivider />
      <DocsHeading2xl>4つの原則</DocsHeading2xl>
      <DocsText><ReactMarkdown>{text[1]}</ReactMarkdown></DocsText>
      <DocsDivider />
      <DocsHeadingxl>ガイドライン</DocsHeadingxl>
      <DocsText><ReactMarkdown>{text[2]}</ReactMarkdown></DocsText>
      <DocsDivider />
      <DocsHeadingxl>達成基準</DocsHeadingxl>
      <DocsText><ReactMarkdown>{text[2]}</ReactMarkdown></DocsText>
      <DocsDivider />
      </ArticleLayout>
    </Layout>
  )
}
