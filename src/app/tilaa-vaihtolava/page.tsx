import type { Metadata } from "next";
import TilaaVaihtolavaContent from "./TilaaVaihtolavaContent";

export const metadata: Metadata = {
  title: "Tilaa vaihtolava",
  description:
    "Tilaa vaihtolava helposti Sun Piha Oy:ltä. Jätelavat, talkoolavat ja siirtolavat – toimitus usein seuraavaksi arkipäiväksi.",
};

export default function TilaaVaihtolavaPage() {
  return <TilaaVaihtolavaContent />;
}
