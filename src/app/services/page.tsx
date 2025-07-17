'use client';

import ServicesCards from '@/components/Services/ServicesCards';
import React from 'react'
import FAQAccordion from '@/Layout/FAQAccordion';

interface FAQItem {
    id: string;
    question: string;
    answer: string;
    category?: string;
    featured?: boolean;
  }

  const sampleFAQs: FAQItem[] = [
    {
      id: '1',
      question: 'What digital marketing services do you offer?',
      answer: 'We offer a comprehensive range of digital marketing services including SEO, PPC advertising, social media marketing, content marketing, email marketing, and website development. Our team works closely with clients to create customized strategies that align with their business goals.',
      category: 'Services',
      featured: true
    },
    {
      id: '2',
      question: 'How long does it take to see results from SEO?',
      answer: 'SEO results typically begin to show within 3-6 months, with significant improvements often visible after 6-12 months. The timeline depends on factors such as your industry competitiveness, current website status, and the keywords you\'re targeting.',
      category: 'SEO'
    },
    {
      id: '3',
      question: 'What is your pricing structure?',
      answer: 'Our pricing varies based on the specific services you need and the scope of your project. We offer both monthly retainer packages and project-based pricing. Contact us for a customized quote based on your requirements.',
      category: 'Pricing'
    },
    {
      id: '4',
      question: 'Do you work with small businesses?',
      answer: 'Absolutely! We work with businesses of all sizes, from startups to enterprise companies. We understand that small businesses have unique needs and budget constraints, so we offer scalable solutions that grow with your business.',
      category: 'Services'
    },
    {
      id: '5',
      question: 'How do you measure campaign success?',
      answer: 'We use a variety of metrics to measure success including website traffic, conversion rates, lead generation, ROI, and engagement metrics. We provide detailed monthly reports and regular strategy reviews to ensure your campaigns are meeting their objectives.',
      category: 'Analytics',
      featured: true
    },
    {
      id: '6',
      question: 'Can you help with social media management?',
      answer: 'Yes, we offer comprehensive social media management services including content creation, posting schedules, community management, and paid social advertising across all major platforms like Facebook, Instagram, LinkedIn, and Twitter.',
      category: 'Social Media'
    }
  ];

const page = () => {
  return (
    <div>
      <ServicesCards />
      <div className="min-h-screen  py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <FAQAccordion
          faqs={sampleFAQs}
          title="FAQs"
          subtitle="Get answers to common questions about our digital marketing services"
          showSearch={true}
          showCategories={true}
          allowMultipleOpen={true}
        />
      </div>
    </div>
    </div>
  )
}

export default page;
