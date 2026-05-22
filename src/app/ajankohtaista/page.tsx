import type { Metadata } from "next";
import AjankohtaistaContent from "./AjankohtaistaContent";

export const metadata: Metadata = {
  title: "Ajankohtaista",
  description:
    "Sun Piha Oy:n uutiset, tiedotteet ja avoimet työpaikat – pysy ajan tasalla kiinteistönhuoltopalveluistamme.",
};

export default function AjankohtaistaPage() {
  return <AjankohtaistaContent />;
}
