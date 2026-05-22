import type { Metadata } from "next";
import KiinteistonhuoltoContent from "./KiinteistonhuoltoContent";

export const metadata: Metadata = {
  title: "Kiinteistönhuolto",
  description:
    "Monipuolista kiinteistönhuoltoa Uudellamaalla. Palvelemme omakotitaloja, taloyhtiöitä ja julkisia toimijoita Helsingissä, Espoossa ja Vantaalla.",
};

export default function KiinteistonhuoltoPage() {
  return <KiinteistonhuoltoContent />;
}
