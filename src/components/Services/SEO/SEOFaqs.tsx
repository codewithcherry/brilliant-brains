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
    question: 'What is SEO and why is it important for my business?',
    answer: 'SEO (Search Engine Optimization) is the process of optimizing your website to rank higher on search engines like Google. It helps increase organic traffic, boost brand visibility, and attract potential customers without relying on paid ads.',
    category: 'SEO',
    featured: true
  },
  {
    id: '2',
    question: 'What SEO services do you offer?',
    answer: 'We offer comprehensive SEO services including keyword research, on-page optimization, technical SEO audits, link building, content optimization, and local SEO. Our strategies are tailored to help you rank higher and attract more qualified traffic.',
    category: 'Services'
  },
  {
    id: '3',
    question: 'How long does it take to see results from SEO?',
    answer: 'SEO results typically start showing within 3 to 6 months. However, significant improvements in traffic and rankings may take 6 to 12 months depending on your industry, competition, and current website performance.',
    category: 'SEO'
  },
  {
    id: '4',
    question: 'Do you guarantee first-page rankings on Google?',
    answer: 'No legitimate SEO agency can guarantee first-page rankings. We focus on using proven, ethical strategies that improve your visibility and rankings over time in a sustainable way.',
    category: 'SEO'
  },
  {
    id: '5',
    question: 'What’s the difference between on-page and off-page SEO?',
    answer: 'On-page SEO refers to optimizing elements on your website such as content, meta tags, and internal links. Off-page SEO involves building authority through external methods like backlinks, social signals, and online citations.',
    category: 'SEO'
  },
  {
    id: '6',
    question: 'Do you offer local SEO services?',
    answer: 'Yes, we specialize in local SEO strategies to help your business rank in local search results and Google Maps. This includes optimizing your Google Business Profile, local citations, and geo-targeted content.',
    category: 'Local SEO',
    featured: true
  },
  {
    id: '7',
    question: 'How do you select the right keywords for my business?',
    answer: 'We use industry tools and competitor analysis to identify high-value keywords based on search volume, user intent, and business relevance. Our goal is to target keywords that drive qualified traffic and conversions.',
    category: 'Strategy'
  },
  {
    id: '8',
    question: 'Can you help recover my website from a Google penalty?',
    answer: 'Yes, we offer Google penalty recovery services. We conduct a thorough audit to identify the cause of the penalty and implement a strategy to regain lost rankings and traffic.',
    category: 'Technical SEO'
  },
  {
    id: '9',
    question: 'What kind of reports will I receive?',
    answer: 'You’ll receive monthly SEO performance reports including keyword rankings, traffic metrics, backlink analysis, and insights into areas of improvement. We also hold regular strategy sessions to discuss progress.',
    category: 'Analytics'
  },
  {
    id: '10',
    question: 'Do you offer one-time SEO audits or only monthly retainers?',
    answer: 'We offer both one-time SEO audits and ongoing monthly SEO services. Whether you need a full SEO health check or a long-term strategy, we can customize a solution for your needs.',
    category: 'Pricing'
  }
]
;

const SEOFaqs = () => {
  return (
    <div className="min-h-screen  py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <FAQAccordion
          faqs={sampleFAQs}
          title="Digital Marketing FAQs"
          subtitle="Get answers to common questions about our digital marketing services"
          showSearch={true}
          showCategories={true}
          allowMultipleOpen={true}
        />
      </div>
    </div>
  )
}

export default SEOFaqs
