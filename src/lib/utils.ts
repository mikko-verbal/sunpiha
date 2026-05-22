import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const PHONE_NUMBER = "041 312 1139";
export const PHONE_HREF = "tel:+358413121139";
export const EMAIL = "info@sunpiha.com";
export const SERVICE_EMAIL = "asiakaspalvelu@sunpiha.com";

export const COMPANY = {
  name: "Sun Piha Oy",
  address: "Kuminatie 39b",
  postalCode: "01300",
  city: "Vantaa",
  businessId: "3330218-7",
  area: "Helsinki, Espoo & Vantaa",
} as const;

export const NAV_LINKS = [
  { label: "Kiinteistönhuolto", href: "/kiinteistonhuolto" },
  { label: "Palvelut", href: "/palvelut" },
  { label: "Yritys", href: "/yritys" },
  { label: "Ajankohtaista", href: "/ajankohtaista" },
  { label: "Tarjouspyyntö", href: "/tarjouspyynto" },
  { label: "Yhteystiedot", href: "/yhteystiedot" },
] as const;

export const FOOTER_SERVICE_LINKS = [
  { label: "Kiinteistönhuolto", href: "/palvelut/kiinteistonhuolto" },
  { label: "Talvikunnossapito", href: "/palvelut/lumityot-talvikunnossapito" },
  { label: "Nurmikon kunnossapito", href: "/palvelut/nurmikon-kunnossapito" },
  { label: "Pesupalvelut", href: "/palvelut/pesupalvelut" },
  { label: "Tilaa vaihtolava", href: "/tilaa-vaihtolava" },
] as const;
