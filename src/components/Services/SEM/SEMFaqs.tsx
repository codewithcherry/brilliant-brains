import React from "react";
import FAQAccordion from "@/Layout/FAQAccordion";

interface FAQItem {
    id: string;
    question: string;
    answer: string;
    category?: string;
    featured?: boolean;
  }

const semFAQs: FAQItem[] = [
  {
    id: 'sem-1',
    question: 'What is Search Engine Marketing (SEM)?',
    answer: 'Search Engine Marketing (SEM) involves using paid advertising platforms like Google Ads to display your website in search engine results. It’s a fast way to increase visibility, drive targeted traffic, and generate leads.',
    category: 'SEM',
    featured: true
  },
  {
    id: 'sem-2',
    question: 'What SEM services do you provide?',
    answer: 'We offer end-to-end SEM services including campaign strategy, keyword targeting, ad creation, A/B testing, bid optimization, conversion tracking, and performance reporting.',
    category: 'Services'
  },
  {
    id: 'sem-3',
    question: 'How is SEM different from SEO?',
    answer: 'SEM focuses on paid search engine advertising, while SEO improves organic rankings. SEM delivers faster visibility and results, whereas SEO provides long-term growth. We often recommend combining both for maximum impact.',
    category: 'Strategy'
  },
  {
    id: 'sem-4',
    question: 'How much does SEM cost?',
    answer: 'SEM costs depend on your ad budget, competition in your industry, and campaign goals. We customize plans based on your needs and ensure optimal return on ad spend (ROAS).',
    category: 'Pricing'
  },
  {
    id: 'sem-5',
    question: 'Which platforms do you manage SEM campaigns on?',
    answer: 'We manage SEM campaigns on Google Ads, Microsoft Ads (Bing), and YouTube. We also offer support for retargeting and display networks depending on your goals.',
    category: 'Platforms'
  },
  {
    id: 'sem-6',
    question: 'How do you choose keywords for SEM campaigns?',
    answer: 'We use AI tools and market research to identify high-intent keywords that align with your business goals. We focus on keywords that balance cost-efficiency and conversion potential.',
    category: 'Strategy'
  },
  {
    id: 'sem-7',
    question: 'How soon can I expect results from SEM?',
    answer: 'SEM delivers faster results than SEO — you can start seeing clicks and conversions as soon as your ads go live. However, optimization typically improves performance over the first 30–90 days.',
    category: 'Timeline'
  },
  {
    id: 'sem-8',
    question: 'Can you track conversions from my SEM ads?',
    answer: 'Yes, we set up conversion tracking using Google Tag Manager and Google Ads to monitor form submissions, calls, purchases, and other key actions on your website.',
    category: 'Analytics'
  },
  {
    id: 'sem-9',
    question: 'Do you offer remarketing services?',
    answer: 'Absolutely. We create tailored remarketing campaigns that re-engage previous visitors using display ads, search ads, and video ads — helping you increase conversion rates.',
    category: 'Retargeting'
  },
  {
    id: 'sem-10',
    question: 'Will I have access to reports and performance metrics?',
    answer: 'Yes, we provide detailed monthly reports covering clicks, impressions, conversions, cost-per-click, and ROI. You’ll also get real-time dashboard access if needed.',
    category: 'Reporting'
  }
];


const SEMFaqs = () => {
  return (
    <div className="min-h-screen  py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <FAQAccordion
          faqs={semFAQs}
          title="Digital Marketing FAQs"
          subtitle="Get answers to common questions about our digital marketing services"
          showSearch={true}
          showCategories={true}
          allowMultipleOpen={true}
        />
      </div>
    </div>
  );
};

export default SEMFaqs;
