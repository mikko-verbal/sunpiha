"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { serviceCategories } from "@/data/services";
import { PageHero } from "@/components/layout/PageHero";
import { Reveal, SectionHeading } from "@/components/ui/motion";
import { Button } from "@/components/ui/button";
import {
  PHONE_HREF,
  PHONE_NUMBER,
  SERVICE_EMAIL,
  COMPANY,
} from "@/lib/utils";

export default function YhteystiedotContent() {
  return (
    <>
      <PageHero
        label="Yhteystiedot"
        title="Ota yhteyttä"
        subtitle="Olemme apunasi vuoden jokaisena päivänä – tarvittaessa vaikka kellon ympäri."
        image="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&q=80"
      />

      <section className="section-padding bg-charcoal">
        <div className="container-wide">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Phone,
                title: "Puhelin",
                content: PHONE_NUMBER,
                href: PHONE_HREF,
                sub: "Päivystys 24/7",
              },
              {
                icon: Mail,
                title: "Sähköposti",
                content: SERVICE_EMAIL,
                href: `mailto:${SERVICE_EMAIL}`,
                sub: "Vastaamme arkisin 24 h",
              },
              {
                icon: MapPin,
                title: "Osoite",
                content: `${COMPANY.address}, ${COMPANY.postalCode} ${COMPANY.city}`,
                sub: COMPANY.area,
              },
              {
                icon: Clock,
                title: "Aukiolo",
                content: "Ma–Pe 7:00–17:00",
                sub: "Päivystys 24/7",
              },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 0.08}>
                <div className="rounded-2xl border border-white/5 bg-charcoal-light p-6 transition-colors hover:border-sun/15">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sun/10">
                    <item.icon className="h-6 w-6 text-sun" />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold text-cream">
                    {item.title}
                  </h3>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="mt-2 block text-cream/70 transition-colors hover:text-sun"
                    >
                      {item.content}
                    </a>
                  ) : (
                    <p className="mt-2 text-cream/70">{item.content}</p>
                  )}
                  {item.sub && (
                    <p className="mt-1 text-sm text-cream/40">{item.sub}</p>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-charcoal-light">
        <div className="container-wide">
          <SectionHeading
            title="Palvelemme pääkaupunkiseudulla"
            description="Toimimme Helsingissä, Espoossa ja Vantaalla – paikallisena huoltoyhtiönä apu on aina lähellä."
            align="center"
          />
          <div className="grid gap-6 md:grid-cols-3">
            {serviceCategories.map((cat, i) => (
              <Reveal key={cat.title} delay={i * 0.1}>
                <div className="overflow-hidden rounded-2xl border border-white/5">
                  <div className="relative aspect-[16/10]">
                    <Image
                      src={cat.image}
                      alt={cat.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal to-transparent" />
                  </div>
                  <div className="bg-charcoal p-6">
                    <h3 className="font-display text-lg font-semibold text-cream">
                      {cat.title}
                    </h3>
                    <p className="mt-2 text-sm text-cream/50">{cat.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-charcoal">
        <div className="container-wide text-center">
          <Reveal>
            <h2 className="font-display text-3xl font-bold text-cream md:text-4xl">
              Pyydä tarjous tai soita suoraan
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-cream/60">
              Kerro tarpeistasi – laadimme sinulle räätälöidyn tarjouksen.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="gold-glow">
                <Link href="/tarjouspyynto">Pyydä tarjous</Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <a href={PHONE_HREF}>
                  <Phone className="h-5 w-5" />
                  Soita {PHONE_NUMBER}
                </a>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
