
interface Service {
  id: string;
  slug: string;
  title: string;
  description: string;
  seoTitle?: string;
  seoDescription?: string;
}
  

export const servicesData: Service[] = [
  {
    id: 'sem-1',
    slug: 'search-engine-marketing',
    title: 'Search Engine Marketing',
    description: 'Comprehensive SEM solutions to boost your online visibility and conversions.',
    seoTitle: 'Professional SEM Services | Boost Your Online Presence',
    seoDescription: 'Expert search engine marketing services to increase your website traffic and conversions through targeted PPC campaigns.',
  },
  // Other services...
];