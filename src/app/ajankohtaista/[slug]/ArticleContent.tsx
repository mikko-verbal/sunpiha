"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import type { NewsArticle } from "@/data/news";
import { Reveal } from "@/components/ui/motion";

interface ArticleContentProps {
  article: NewsArticle;
}

export default function ArticleContent({ article }: ArticleContentProps) {
  return (
    <>
      <section className="relative min-h-[45vh] overflow-hidden pt-24">
        <Image
          src={article.image}
          alt={article.title}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="cinematic-overlay absolute inset-0" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/60 to-charcoal/30" />

        <div className="container-wide relative z-10 flex min-h-[45vh] flex-col justify-end pb-12 pt-20">
          <Link
            href="/ajankohtaista"
            className="mb-8 inline-flex items-center gap-2 text-sm text-cream/60 transition-colors hover:text-sun"
          >
            <ArrowLeft className="h-4 w-4" />
            Takaisin ajankohtaistaan
          </Link>
          <span className="mb-4 inline-flex w-fit rounded-full bg-sun/90 px-3 py-1 text-xs font-semibold text-charcoal">
            {article.category}
          </span>
          <h1 className="max-w-4xl font-display text-3xl font-bold tracking-tight text-cream md:text-4xl lg:text-5xl">
            {article.title}
          </h1>
          <time className="mt-4 text-sm text-cream/50">{article.date}</time>
        </div>
      </section>

      <section className="section-padding bg-charcoal">
        <div className="container-wide">
          <Reveal>
            <article className="mx-auto max-w-3xl">
              <div className="space-y-6 text-lg leading-relaxed text-cream/70">
                {article.content.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-12 rounded-2xl border border-sun/20 bg-charcoal-light p-8">
                <p className="font-display text-xl font-semibold text-cream">
                  Tarvitsetko apua?
                </p>
                <p className="mt-2 text-cream/60">
                  Ota yhteyttä ja kysy lisää palveluistamme.
                </p>
                <Link
                  href="/tarjouspyynto"
                  className="mt-4 inline-flex items-center text-sm font-semibold text-sun hover:text-sun-bright transition-colors"
                >
                  Pyydä tarjous →
                </Link>
              </div>
            </article>
          </Reveal>
        </div>
      </section>
    </>
  );
}
