// app/services/[service-type]/page.tsx
import { notFound } from "next/navigation";
import { servicesData } from "@/data/services";
import SEOHero from "@/components/Services/SEO/SEOHero";
import { Metadata } from "next";

interface PageProps {
  params: { "service-type": string };
  searchParams: { [key: string]: string | string[] | undefined };
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const service = servicesData.find((s) => s.slug === params["service-type"]);

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

export default function ServicePage({ params }: PageProps) {
  const service = servicesData.find((s) => s.slug === params["service-type"]);

  if (!service) {
    notFound();
  }

  // Format the URL-friendly slug to a display-friendly name
  const formatServiceName = (slug: string) => {
    return slug
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <>
      <SEOHero />
    </>
  );
}