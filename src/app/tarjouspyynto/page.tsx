import type { Metadata } from "next";
import TarjouspyyntoContent from "./TarjouspyyntoContent";

export const metadata: Metadata = {
  title: "Tarjouspyyntö",
  description:
    "Pyydä maksuton tarjous Sun Piha Oy:n kiinteistönhuolto- ja pihapalveluista. Vastaamme 24 tunnin sisällä.",
};

export default function TarjouspyyntoPage() {
  return <TarjouspyyntoContent />;
}
