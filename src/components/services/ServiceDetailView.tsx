"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone, CheckCircle } from "lucide-react";
import type { ServiceDetail } from "@/data/services";
import { getServiceIcon } from "@/lib/service-icons";
import { PageHero } from "@/components/layout/PageHero";
import { Reveal } from "@/components/ui/motion";
import { Button } from "@/components/ui/button";
import { PHONE_HREF } from "@/lib/utils";

interface ServiceDetailViewProps {
  service: ServiceDetail;
}

export function ServiceDetailView({ service }: ServiceDetailViewProps) {
  const Icon = getServiceIcon(service.icon);

  return (
    <>
      <PageHero
        label="Palvelut"
        title={service.title}
        subtitle={service.description}
        image={service.image}
      />

      <section className="section-padding bg-charcoal">
        <div className="container-wide">
          <div className="grid items-start gap-16 lg:grid-cols-2 lg:gap-24">
            <Reveal>
              <div className="relative">
                <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent" />
                </div>
                <div className="absolute -bottom-4 -left-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-sun/90 shadow-lg shadow-sun/20">
                  <Icon className="h-8 w-8 text-charcoal" />
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="text-lg leading-relaxed text-cream/70">
                {service.longDescription}
              </p>

              <h2 className="mt-10 font-display text-2xl font-bold text-cream">
                Palveluun kuuluu
              </h2>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {service.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm text-cream/70"
                  >
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-sun" />
                    {item}
                  </li>
                ))}
              </ul>

              <h2 className="mt-10 font-display text-2xl font-bold text-cream">
                Miksi valita meidät?
              </h2>
              <ul className="mt-6 space-y-3">
                {service.benefits.map((benefit) => (
                  <li
                    key={benefit}
                    className="flex items-start gap-3 text-sm text-cream/70"
                  >
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-sun" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-padding bg-charcoal-light">
        <div className="container-wide text-center">
          <Reveal>
            <h2 className="font-display text-3xl font-bold text-cream md:text-4xl">
              Kiinnostuitko palvelusta?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-cream/60">
              Pyydä maksuton tarjous tai soita suoraan – vastaamme nopeasti.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
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
          </Reveal>
        </div>
      </section>
    </>
  );
}
