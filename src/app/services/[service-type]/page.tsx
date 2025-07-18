// app/services/[service-type]/page.tsx
import { notFound } from "next/navigation";
import { servicesData } from "@/data/services";
import SEOHero from "@/components/Services/SEO/SEOHero";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ "service-type": string }>;
}): Promise<Metadata> {
  const { "service-type": serviceType } = await params;
  const service = servicesData.find((s) => s.slug === serviceType);

  if (!service) {
    return {
      title: "Service Not Found",
      description: "The requested service does not exist",
    };
  }

  return {
    title: service.seoTitle || `${service.title} Services | Our Company`,
    description: service.seoDescription || service.description,
    alternates: {
      canonical: `/services/${service.slug}`,
    },
    openGraph: {
      title: service.seoTitle || `${service.title} Services`,
      description: service.seoDescription || service.description,
      url: `/services/${service.slug}`,
    },
  };
}

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    "service-type": service.slug,
  }));
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ "service-type": string }>;
}) {
  const { "service-type": serviceType } = await params;
  const service = servicesData.find((s) => s.slug === serviceType);

  if (!service) {
    notFound();
  }

  return (
    <>
      <SEOHero />
    </>
  );
}