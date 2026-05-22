export interface WastePriceRow {
  wasteType: string;
  lowCode?: string;
  rd?: string;
  materialCode?: string;
  price: string;
  unit: string;
}

export const wastePrices: WastePriceRow[] = [
  { wasteType: "Betoni max 1 x 1 x 1 m", lowCode: "17 01 01", rd: "R12.2", materialCode: "bp", price: "29,90 €", unit: "tonni" },
  { wasteType: "Betoni max 1-5 m", lowCode: "17 01 01", rd: "R12.2", materialCode: "bi", price: "38,90 €", unit: "tonni" },
  { wasteType: "Betoni seka, sis. tiiltä", lowCode: "17 01 01", rd: "R12.2", materialCode: "bt", price: "33,90 €", unit: "tonni" },
  { wasteType: "Kevytbetoni", lowCode: "17 01 01", rd: "R12.2", materialCode: "bk", price: "88,80 €", unit: "tonni" },
  { wasteType: "Betoni, erikoiskappaleet", lowCode: "17 01 01", rd: "R12.2", materialCode: "be", price: "68,70 €", unit: "tonni" },
  { wasteType: "Puu (puhdas, pinnoittamaton)", lowCode: "17 02 01", rd: "R12.2", materialCode: "pp", price: "20,00 €", unit: "tonni" },
  { wasteType: "Purku- ja saneerauspuu", lowCode: "17 02 01", rd: "R12.2", materialCode: "pj", price: "38,50 €", unit: "tonni" },
  { wasteType: "Painekyllästetty puu", lowCode: "17 02 04*", rd: "R12.2", materialCode: "pkp", price: "280,90 €", unit: "tonni" },
  { wasteType: "Risut, luonnonmateriaali", lowCode: "20 02 01", rd: "R12.2", materialCode: "lr", price: "32,20 €", unit: "tonni" },
  { wasteType: "Kannot", lowCode: "20 02 01", rd: "R12.2", materialCode: "lk", price: "39,10 €", unit: "tonni" },
  { wasteType: "Rakennusjäte LK1>50%", lowCode: "17 09 04", rd: "R12.2", materialCode: "rj1", price: "179,00 €", unit: "tonni" },
  { wasteType: "Rakennusjäte LK2<50%", lowCode: "17 09 04", rd: "R12.2", materialCode: "rj2", price: "209,00 €", unit: "tonni" },
  { wasteType: "Asbestijäte", lowCode: "17 06 05*", rd: "D1", materialCode: "asb", price: "220,00 €", unit: "tonni" },
  { wasteType: "Bitumi/kattohuopa", lowCode: "17 03 02", rd: "R12.2", materialCode: "bit", price: "170,00 €", unit: "tonni" },
  { wasteType: "Energiajäte", lowCode: "15 01 06", rd: "R12.2", materialCode: "kte", price: "178,80 €", unit: "tonni" },
  { wasteType: "Talkoojäte", lowCode: "20 03 01", rd: "R12.2", materialCode: "st", price: "179,00 €", unit: "tonni" },
  { wasteType: "Sekalainen maa-aines (seulottava)", lowCode: "17 05 04A", rd: "R12.2", materialCode: "sma", price: "65,40 €", unit: "tonni" },
  { wasteType: "Lavan raavinta", materialCode: "rav", price: "30,00 €", unit: "lava" },
  { wasteType: "Käsinsiivous", materialCode: "si1", price: "35,00 €", unit: "lava" },
  { wasteType: "Koneellinen siivous", materialCode: "si2", price: "65,00 €", unit: "lava" },
  { wasteType: "Punnitusmaksu", price: "40,00 €", unit: "kuorma" },
];
