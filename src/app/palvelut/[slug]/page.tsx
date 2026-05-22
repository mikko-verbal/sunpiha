import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getServiceBySlug,
  getAllServiceSlugs,
} from "@/data/services";
import { ServiceDetailView } from "@/components/services/ServiceDetailView";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: "Palvelua ei löytynyt" };

  return {
    title: service.title,
    description: service.description,
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  return <ServiceDetailView service={service} />;
}
