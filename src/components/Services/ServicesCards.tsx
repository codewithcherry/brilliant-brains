'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Search, 
  Mail, 
  Globe, 
  Share2, 
  Mic, 
  BarChart3, 
  MousePointer, 
  FileText, 
  Users, 
  Map, 
  Palette, 
  MapPin, 
  Link, 
  Smartphone, 
  Target, 
  MessageCircle, 
  AlertTriangle, 
  TrendingUp, 
  Star,
  RotateCcw
} from 'lucide-react';
import { useRouter } from 'next/navigation';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  category: 'marketing' | 'development' | 'analytics' | 'management';
  featured?: boolean;
  metaUrl: string;
}

const services: Service[] = [
  {
    id: 'seo',
    title: 'Search Engine Optimization',
    description: 'Improve your website\'s visibility and ranking in search engine results.',
    icon: Search,
    category: 'marketing',
    metaUrl: 'search-engine-optimization'
  },
  {
    id: 'sem',
    title: 'Search Engine Marketing',
    description: 'Drive targeted traffic through paid search advertising campaigns.',
    icon: MousePointer,
    category: 'marketing',
    metaUrl: 'search-engine-marketing'
  },
  {
    id: 'email',
    title: 'Email Marketing',
    description: 'Build and nurture customer relationships through strategic email campaigns.',
    icon: Mail,
    category: 'marketing',
    metaUrl: 'email-marketing'
  },
  {
    id: 'web-dev',
    title: 'Website Development',
    description: 'Create responsive, user-friendly websites that convert visitors into customers.',
    icon: Globe,
    category: 'development',
    featured: true,
    metaUrl: 'website-development'
  },
  {
    id: 'social-media',
    title: 'Social Media Marketing',
    description: 'Engage your audience and build brand awareness across social platforms.',
    icon: Share2,
    category: 'marketing',
    metaUrl: 'social-media-marketing'
  },
  {
    id: 'voice-seo',
    title: 'Voice Search Optimization',
    description: 'Optimize your content for voice search queries and smart speakers.',
    icon: Mic,
    category: 'marketing',
    metaUrl: 'voice-search-optimization'
  },
  {
    id: 'analytics',
    title: 'Analytics and Reporting',
    description: 'Track performance and gain insights with comprehensive data analysis.',
    icon: BarChart3,
    category: 'analytics',
    metaUrl: 'analytics-and-reporting'
  },
  {
    id: 'ppc',
    title: 'Pay Per Click Management',
    description: 'Maximize ROI with expertly managed PPC advertising campaigns.',
    icon: MousePointer,
    category: 'marketing',
    metaUrl: 'pay-per-click-management'
  },
  {
    id: 'content',
    title: 'Content Marketing',
    description: 'Create compelling content that attracts and engages your target audience.',
    icon: FileText,
    category: 'marketing',
    metaUrl: 'content-marketing'
  },
  {
    id: 'journey-mapping',
    title: 'Customer Journey Mapping',
    description: 'Understand and optimize every touchpoint in your customer\'s experience.',
    icon: Map,
    category: 'management',
    metaUrl: 'customer-journey-mapping'
  },
  {
    id: 'branding',
    title: 'Branding and Design',
    description: 'Develop a strong brand identity that resonates with your audience.',
    icon: Palette,
    category: 'development',
    featured: true,
    metaUrl: 'branding-and-design'
  },
  {
    id: 'local-seo',
    title: 'Local SEO',
    description: 'Improve your local search visibility to attract nearby customers.',
    icon: MapPin,
    category: 'marketing',
    metaUrl: 'local-seo'
  },
  {
    id: 'affiliate',
    title: 'Affiliate Marketing',
    description: 'Expand your reach through strategic partnership marketing programs.',
    icon: Link,
    category: 'marketing',
    metaUrl: 'affiliate-marketing'
  },
  {
    id: 'native',
    title: 'Native Marketing',
    description: 'Create seamless advertising experiences that blend with organic content.',
    icon: Smartphone,
    category: 'marketing',
    metaUrl: 'native-marketing'
  },
  {
    id: 'influencer',
    title: 'Influencer Marketing',
    description: 'Leverage influential voices to amplify your brand message.',
    icon: Users,
    category: 'marketing',
    metaUrl: 'influencer-marketing'
  },
  {
    id: 'interactive',
    title: 'Interactive Content Creation',
    description: 'Engage users with interactive content that drives participation.',
    icon: Target,
    category: 'development',
    metaUrl: 'interactive-content-creation'
  },
  {
    id: 'retargeting',
    title: 'Retargeting',
    description: 'Re-engage previous visitors with targeted advertising campaigns.',
    icon: RotateCcw,
    category: 'marketing',
    metaUrl: 'retargeting'
  },
  {
    id: 'chatbot',
    title: 'Chatbot Services',
    description: 'Automate customer support and improve user experience with AI chatbots.',
    icon: MessageCircle,
    category: 'development',
    metaUrl: 'chatbot-services'
  },
  {
    id: 'crisis',
    title: 'Crisis Management',
    description: 'Protect and restore your brand reputation during challenging times.',
    icon: AlertTriangle,
    category: 'management',
    metaUrl: 'crisis-management'
  },
  {
    id: 'growth',
    title: 'Growth Hacking',
    description: 'Accelerate business growth through innovative marketing strategies.',
    icon: TrendingUp,
    category: 'marketing',
    featured: true,
    metaUrl: 'growth-hacking'
  },
  {
    id: 'reputation',
    title: 'Online Reputation Management',
    description: 'Monitor and manage your brand\'s online presence and reputation.',
    icon: Star,
    category: 'management',
    metaUrl: 'online-reputation-management'
  }
];
const categoryColors = {
  marketing: 'bg-indigo-100 text-indigo-800 border-indigo-200',
  development: 'bg-purple-100 text-purple-800 border-purple-200',
  analytics: 'bg-blue-100 text-blue-800 border-blue-200',
  management: 'bg-green-100 text-green-800 border-green-200'
};

const ServicesCards: React.FC = () => {
  const router = useRouter();

  const handleServiceClick = (metaUrl: string) => {
    router.push(`/services/${metaUrl}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-indigo-600">Services</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive digital marketing solutions to help your business grow and succeed in the digital landscape.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card
                key={service.id}
                className={`group relative cursor-pointer transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/10 hover:-translate-y-1 border-2 hover:border-indigo-300 ${
                  service.featured ? 'ring-2 ring-indigo-500 ring-opacity-50' : ''
                }`}
                onClick={() => handleServiceClick(service.metaUrl)}
                style={{
                  animationDelay: `${index * 50}ms`
                }}
              >
                {service.featured && (
                  <div className="absolute -top-2 -right-2 bg-indigo-500 text-white text-xs font-bold py-1 px-2 rounded-full">
                    Featured
                  </div>
                )}
                
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2 bg-indigo-100 rounded-lg group-hover:bg-indigo-200 transition-colors">
                      <IconComponent className="h-6 w-6 text-indigo-600" />
                    </div>
                    <Badge className={categoryColors[service.category]}>
                      {service.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent>
                  <CardDescription className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
                
                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-indigo-500 opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-lg" />
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto border border-indigo-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-gray-600 mb-6">
              Contact us today to discuss how we can help your business achieve its digital marketing goals.
            </p>
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl">
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesCards;