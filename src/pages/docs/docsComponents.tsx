import {
  DocsCode,
  DocsDivider,
  DocsHeading2xl,
  DocsHeadingxl,
  DocsText,
  DocsUnderDivider,
} from "@/components/elements/docs";
import { ArticleLayout } from "@/components/layouts/articleLayout";
import { Layout } from "@/components/layouts/layout";
import { caption, code_01 } from "@/data/whatToMd";
import { Badge, Box, VStack } from "@chakra-ui/react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

export default function DocsComponents() {
  return (
    <Layout>
      <ArticleLayout heading="Docs Components">
        <VStack gap={6} alignItems="start">
          <DocsText>ehgahgrewh</DocsText>
          <DocsHeading2xl>hrehr</DocsHeading2xl>
          <DocsHeadingxl>ehgahgrewh</DocsHeadingxl>
          <DocsUnderDivider />
          <DocsDivider />
          <DocsCode>{code_01}</DocsCode>
        </VStack>
      </ArticleLayout>
    </Layout>
  );
}
