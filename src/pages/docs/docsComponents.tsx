import { DocsDivider, DocsHeading2xl, DocsHeadingxl, DocsText, DocsUnderDivider } from "@/components/elements/docs";
import { ArticleLayout } from "@/components/layouts/articleLayout";
import { Layout } from "@/components/layouts/layout";

export default function DocsComponents() {
  return (
    <Layout>
      <ArticleLayout heading="Docs Components">
        <DocsText>ehgahgrewh</DocsText>
        <DocsHeading2xl>hrehr</DocsHeading2xl>
        <DocsHeadingxl>ehgahgrewh</DocsHeadingxl>
        <DocsUnderDivider />
        <DocsHeading2xl>hrehr</DocsHeading2xl>
        <DocsDivider />
        <DocsHeadingxl>ehgahgrewh</DocsHeadingxl>
      </ArticleLayout>
    </Layout>
  )
}
