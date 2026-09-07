import HomePage from "@/components/pages/home";
import { JsonLd } from "@/components/json-ld";
import { createPageMetadata, websiteJsonLd } from "@/lib/metadata";

export const metadata = createPageMetadata("/");

export default function Page() {
  return (
    <>
      <JsonLd data={websiteJsonLd} />
      <HomePage />
    </>
  );
}
