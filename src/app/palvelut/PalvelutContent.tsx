"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone, ArrowUpRight } from "lucide-react";
import { serviceDetails, serviceCategories } from "@/data/services";
import { PageHero } from "@/components/layout/PageHero";
import { Reveal, SectionHeading, fadeInVariants } from "@/components/ui/motion";
import { Button } from "@/components/ui/button";
import { PHONE_HREF } from "@/lib/utils";
import { getServiceIcon } from "@/lib/service-icons";
import { IMAGES } from "@/data/images";

export default function PalvelutContent() {
  return (
    <>
      <PageHero
        label="Palvelut"
        title="Palvelumme"
        subtitle="Monipuolisia kiinteistönhuoltopalveluita vuoden ympäri – ammattitaidolla ja luotettavasti."
        image={IMAGES.sivuPalvelutHero}
      />

      <section className="section-padding bg-charcoal">
        <div className="container-wide">
          <SectionHeading
            label="Asiakastyypit"
            title="Kenelle palvelemme"
            align="center"
          />
          <div className="mb-20 grid gap-6 md:grid-cols-3">
            {serviceCategories.map((cat, i) => (
              <Reveal key={cat.title} delay={i * 0.1}>
                <div className="group relative overflow-hidden rounded-2xl">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={cat.image}
                      alt={cat.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="font-display text-xl font-bold text-cream md:text-2xl">
                      {cat.title}
                    </h3>
                    <p className="mt-2 text-sm text-cream/60">{cat.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <SectionHeading
            label="Kaikki palvelut"
            title="Valitse palvelu"
            description="Klikkaa palvelua lukeaksesi lisää ja pyytääksesi tarjouksen."
            align="center"
          />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {serviceDetails.map((service, i) => {
              const Icon = getServiceIcon(service.icon);
              return (
                <Reveal key={service.id} delay={i * 0.06} variants={fadeInVariants}>
                  <Link
                    href={`/palvelut/${service.slug}`}
                    className="group block h-full"
                  >
                    <div className="relative isolate h-full overflow-hidden rounded-2xl border border-white/5 bg-charcoal-light transition-[border-color,box-shadow,transform] duration-500 hover:border-sun/20 hover:shadow-xl hover:shadow-sun/5 hover:-translate-y-1">
                      <div className="relative aspect-[16/10] overflow-hidden bg-charcoal-light transform-gpu">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          sizes="(max-width: 640px) 100vw, 33vw"
                        />
                        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-charcoal-light from-20% to-transparent" />
                        <div className="absolute top-4 left-4 flex h-10 w-10 items-center justify-center rounded-xl bg-sun/90">
                          <Icon className="h-5 w-5 text-charcoal" />
                        </div>
                      </div>
                      <div className="relative z-10 -mt-px bg-charcoal-light p-5">
                        <div className="flex items-start justify-between gap-2">
                          <h3 className="font-display text-lg font-semibold text-cream group-hover:text-sun transition-colors">
                            {service.title}
                          </h3>
                          <ArrowUpRight className="h-5 w-5 shrink-0 text-cream/30 transition-all group-hover:text-sun group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </div>
                        <p className="mt-2 text-sm leading-relaxed text-cream/50">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-padding bg-charcoal-light">
        <div className="container-wide">
          <SectionHeading
            title="Tarvitsetko apua?"
            description="Ota yhteyttä ja kerro tarpeistasi – laadimme sinulle räätälöidyn tarjouksen."
            align="center"
          />
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="gold-glow">
              <Link href="/tarjouspyynto">
                Pyydä tarjous
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <a href={PHONE_HREF}>
                <Phone className="h-5 w-5" />
                Soita 24/7
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
