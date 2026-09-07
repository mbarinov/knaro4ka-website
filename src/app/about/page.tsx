import AboutPage from "@/components/pages/about";
import { JsonLd } from "@/components/json-ld";
import { createPageMetadata, profileJsonLd } from "@/lib/metadata";

export const metadata = createPageMetadata("/about");

export default function Page() {
  return (
    <>
      <JsonLd data={profileJsonLd} />
      <AboutPage />
    </>
  );
}
