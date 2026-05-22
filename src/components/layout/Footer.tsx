import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import {
  NAV_LINKS,
  FOOTER_SERVICE_LINKS,
  PHONE_HREF,
  PHONE_NUMBER,
  SERVICE_EMAIL,
  COMPANY,
} from "@/lib/utils";

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-charcoal-light">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sun/30 to-transparent" />
      <div className="container-wide py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-sun to-sun-bright">
                <span className="font-display text-lg font-black text-charcoal">
                  S
                </span>
              </div>
              <span className="font-display text-xl font-bold text-cream">
                Sun Piha Oy
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-cream/50">
              Monipuolisia kiinteistönhuoltopalveluita vuoden ympäri
              Helsingissä, Espoossa ja Vantaalla.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-sun">
              Sivut
            </h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-cream/60 transition-colors hover:text-cream"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/tilaa-vaihtolava"
                  className="text-sm text-cream/60 transition-colors hover:text-cream"
                >
                  Tilaa vaihtolava
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-sun">
              Palvelut
            </h3>
            <ul className="space-y-3">
              {FOOTER_SERVICE_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-cream/60 transition-colors hover:text-cream"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div id="yhteystiedot">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-sun">
              Yhteystiedot
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={PHONE_HREF}
                  className="flex items-center gap-3 text-sm text-cream/60 transition-colors hover:text-sun"
                >
                  <Phone className="h-4 w-4 shrink-0 text-sun" />
                  {PHONE_NUMBER}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SERVICE_EMAIL}`}
                  className="flex items-center gap-3 text-sm text-cream/60 transition-colors hover:text-sun"
                >
                  <Mail className="h-4 w-4 shrink-0 text-sun" />
                  {SERVICE_EMAIL}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-cream/60">
                <MapPin className="h-4 w-4 shrink-0 text-sun mt-0.5" />
                <span>
                  {COMPANY.address}, {COMPANY.postalCode} {COMPANY.city}
                  <br />
                  {COMPANY.area} · Päivystys 24/7
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 md:flex-row">
          <p className="text-xs text-cream/40">
            © {new Date().getFullYear()} Sun Piha Oy. Kaikki oikeudet pidätetään.
          </p>
          <p className="text-xs text-cream/30">
            Y-tunnus: {COMPANY.businessId} ·{" "}
            <Link
              href="/tietosuojaseloste"
              className="hover:text-cream/50 transition-colors"
            >
              Tietosuojaseloste
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
