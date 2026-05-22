"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone, ArrowUpRight } from "lucide-react";
import { services, serviceCategories } from "@/data/services";
import { NewsCard } from "@/components/news/NewsCard";
import { newsArticles } from "@/data/news";
import { PageHero } from "@/components/layout/PageHero";
import { Reveal, SectionHeading } from "@/components/ui/motion";
import { Button } from "@/components/ui/button";
import { PHONE_HREF, PHONE_NUMBER } from "@/lib/utils";

export default function KiinteistonhuoltoContent() {
  return (
    <>
      <PageHero
        label="Kiinteistönhuolto"
        title="Monipuolista kiinteistönhuoltoa Uudellamaalla"
        subtitle="Monipuolisia kiinteistönhuoltopalveluita vuoden ympäri Helsingissä, Espoossa ja Vantaalla. Takaamme laadukkaan ja ammattitaitoisen palvelukokemuksen jokaiselle asiakkaallemme."
        image="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80"
      />

      <section className="section-padding bg-charcoal">
        <div className="container-wide">
          <SectionHeading
            label="Kenelle palvelumme sopii"
            title="Ratkaisu jokaiseen tarpeeseen"
            align="center"
          />
          <div className="grid gap-6 md:grid-cols-3">
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
        </div>
      </section>

      <section className="section-padding bg-charcoal-light">
        <div className="container-wide">
          <SectionHeading
            label="Palvelumme"
            title="Kattava kiinteistönhuolto"
            description="Hoidamme kiinteistösi kaikki ulkoalueet ja huoltotarpeet ammattitaidolla."
            align="center"
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((service, i) => (
              <Reveal key={service.id} delay={i * 0.06}>
                <Link href={service.href} className="group block h-full">
                  <div className="relative h-full overflow-hidden rounded-2xl border border-white/5 bg-charcoal transition-all duration-500 hover:border-sun/20 hover:-translate-y-1">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent" />
                    </div>
                    <div className="p-5">
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
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button asChild variant="outline">
              <Link href="/palvelut">
                Kaikki palvelut
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="relative py-24 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1491002052546-bf38f186af56?w=1920&q=80"
          alt="Päivystyspalvelu talvella"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-charcoal/85" />
        <div className="container-wide relative text-center">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sun">
              Päivystys 24 / 7
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold text-cream md:text-4xl">
              Apu on aina lähellä
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-cream/60">
              Päivystysaikana suoritetaan työt, joita ei voida turvallisuussyistä
              siirtää seuraavaan arkipäivään – lumenpudotukset, liukkaudentorjunta,
              myrskyraivaus ja muut kiinteistöä vaarantavat tekijät.
            </p>
            <Button asChild size="lg" className="mt-8 gold-glow">
              <a href={PHONE_HREF}>
                <Phone className="h-5 w-5" />
                Soita {PHONE_NUMBER}
              </a>
            </Button>
          </Reveal>
        </div>
      </section>

      <section className="section-padding bg-charcoal">
        <div className="container-wide">
          <SectionHeading
            label="Ajankohtaista"
            title="Uusimmat uutiset"
            align="left"
          />
          <div className="grid gap-8 md:grid-cols-3">
            {newsArticles.slice(0, 3).map((article, i) => (
              <Reveal key={article.id} delay={i * 0.08}>
                <NewsCard article={article} />
              </Reveal>
            ))}
          </div>
          <div className="mt-10">
            <Link
              href="/ajankohtaista"
              className="inline-flex items-center gap-1 text-sm font-semibold text-sun hover:text-sun-bright transition-colors"
            >
              Kaikki uutiset
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
