import type { Metadata } from "next";
import PalvelutContent from "./PalvelutContent";

export const metadata: Metadata = {
  title: "Palvelut",
  description:
    "Tutustu Sun Piha Oy:n kiinteistönhuolto-, talvikunnossapito-, nurmikko- ja pesupalveluihin pääkaupunkiseudulla.",
};

export default function PalvelutPage() {
  return <PalvelutContent />;
}
