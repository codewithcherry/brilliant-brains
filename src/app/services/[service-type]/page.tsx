// app/services/[service-type]/page.tsx
import { notFound } from "next/navigation";
import { servicesData } from "@/data/services";
import SEOHero from "@/components/Services/SEO/SEOHero";

export async function generateMetadata({
  params,
}: {
  params: { "service-type": string };
}) {
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

export default function ServicePage({
  params,
}: {
  params: { "service-type": string };
}) {
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
    // <main className="w-full max-w-7xl mx-auto px-2 sm:px-2 lg:px-4 py-6">
    //   <section className="max-w-5xl mx-auto space-y-2">
    //     {/* Breadcrumb */}
    //     <nav className="sticky top-0 z-10 bg-white/80 backdrop-blur-sm py-3 mb-8 text-sm text-indigo-500">
    //       <ol className="flex flex-wrap gap-x-2 gap-y-1 items-center">
    //         <li>
    //           <a
    //             href="/"
    //             className="hover:text-indigo-700 transition-colors font-medium"
    //           >
    //             Home
    //           </a>
    //         </li>
    //         <li className="text-indigo-300">/</li>
    //         <li>
    //           <a
    //             href="/services"
    //             className="hover:text-indigo-700 transition-colors font-medium"
    //           >
    //             Services
    //           </a>
    //         </li>
    //         <li className="text-indigo-300">/</li>
    //         <li className="font-semibold text-indigo-800">
    //           {formatServiceName(service.slug)}
    //         </li>
    //       </ol>
    //     </nav>

    //     {/* Header */}
            
    //     {/* Features Section */}
    //   </section>
    // </main>
    <>
    <SEOHero />
    </>
  );
}
