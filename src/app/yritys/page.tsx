import type { Metadata } from "next";
import YritysContent from "./YritysContent";

export const metadata: Metadata = {
  title: "Yritys",
  description:
    "Tutustu Sun Piha Oy:hyn – luotettava kumppani kiinteistönhuoltoon ja pihapalveluihin pääkaupunkiseudulla.",
};

export default function YritysPage() {
  return <YritysContent />;
}
