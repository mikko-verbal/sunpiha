"use client";

import { newsArticles } from "@/data/news";
import { NewsCard } from "@/components/news/NewsCard";
import { PageHero } from "@/components/layout/PageHero";
import { Reveal } from "@/components/ui/motion";
import { IMAGES } from "@/data/images";

export default function AjankohtaistaContent() {
  const [featured, ...rest] = newsArticles;

  return (
    <>
      <PageHero
        label="Ajankohtaista"
        title="Uutiset ja tiedotteet"
        subtitle="Pysy ajan tasalla Sun Piha Oy:n uusimmista uutisista, palveluista ja avoimista työpaikoista."
        image={IMAGES.sivuAjankohtaistaHero}
      />

      <section className="section-padding bg-charcoal">
        <div className="container-wide">
          <Reveal>
            <NewsCard article={featured} featured />
          </Reveal>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((article, i) => (
              <Reveal key={article.id} delay={i * 0.08}>
                <NewsCard article={article} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
