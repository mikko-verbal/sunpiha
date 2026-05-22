import type { Metadata } from "next";
import YhteystiedotContent from "./YhteystiedotContent";

export const metadata: Metadata = {
  title: "Yhteystiedot",
  description:
    "Ota yhteyttä Sun Piha Oy:hyn. Päivystys 24/7, osoite Vantaalla. Palvelemme Helsingissä, Espoossa ja Vantaalla.",
};

export default function YhteystiedotPage() {
  return <YhteystiedotContent />;
}
