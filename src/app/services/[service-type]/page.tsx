// app/services/[service-type]/page.tsx
import { notFound } from "next/navigation";
import { servicesData } from "@/data/services";
import { Metadata } from "next";
import SEO from "@/components/Services/SEO";
import SEM from "@/components/Services/SEM";
import EmailMarketing from "@/components/Services/EmailMarketing";
import WebDevelopment from "@/components/Services/WebDevelopment";
import SocialMediaMarketing from "@/components/Services/SocialMediaMarketing";

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

  console.log(service);

  if (!service) {
    notFound();
  }

  if(service.slug=="search-engine-optimization"){
    return <SEO />
  }

  if(service.slug=="search-engine-marketing"){
    return <SEM />
  }

  if(service.slug=="email-marketing"){
    return <EmailMarketing />
  }

  if(service.slug=="website-development"){
    return <WebDevelopment />
  }

   if(service.slug=="social-media-marketing"){
    return <SocialMediaMarketing />
  }



  return (
    <div className="w-full mx-auto my-auto min-h-screen">
      <h1 className="text-3xl text-center animate-pulse">Working on it</h1>
    </div>
  );
}