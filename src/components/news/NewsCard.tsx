import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { NewsArticle } from "@/data/news";

interface NewsCardProps {
  article: NewsArticle;
  featured?: boolean;
}

export function NewsCard({ article, featured = false }: NewsCardProps) {
  return (
    <Link
      href={`/ajankohtaista/${article.slug}`}
      className="group block h-full"
    >
      <article
        className={`relative h-full overflow-hidden rounded-2xl border border-white/5 bg-charcoal-light transition-all duration-500 hover:border-sun/20 hover:-translate-y-1 ${
          featured ? "md:grid md:grid-cols-2 md:gap-0" : ""
        }`}
      >
        <div
          className={`relative overflow-hidden ${
            featured ? "aspect-[16/10] md:aspect-auto md:min-h-full" : "aspect-[16/10]"
          }`}
        >
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes={featured ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 100vw, 33vw"}
          />
          <div className="absolute top-4 left-4">
            <span className="rounded-full bg-sun/90 px-3 py-1 text-xs font-semibold text-charcoal">
              {article.category}
            </span>
          </div>
        </div>
        <div className={`p-6 ${featured ? "flex flex-col justify-center md:p-10" : ""}`}>
          <time className="text-xs text-cream/40">{article.date}</time>
          <h3
            className={`mt-2 font-display font-semibold leading-snug text-cream group-hover:text-sun transition-colors ${
              featured ? "text-2xl md:text-3xl" : "text-lg"
            }`}
          >
            {article.title}
          </h3>
          <p
            className={`mt-3 leading-relaxed text-cream/50 ${
              featured ? "text-base line-clamp-4" : "text-sm line-clamp-3"
            }`}
          >
            {article.excerpt}
          </p>
          <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-sun">
            Lue lisää
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </article>
    </Link>
  );
}
