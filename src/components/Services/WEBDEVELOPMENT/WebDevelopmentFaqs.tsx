import React, { FC } from 'react'
import FAQAccordion from '@/Layout/FAQAccordion';

interface FAQItem {
    id: string;
    question: string;
    answer: string;
    category?: string;
    featured?: boolean;
  }

const WebDevelopmentFAQs: FAQItem[] = [
  {
    id: 'web-1',
    question: 'What web development services do you offer?',
    answer: 'We offer end-to-end web development services including website design, front-end and back-end development, CMS integration, eCommerce solutions, performance optimization, and ongoing maintenance.',
    category: 'Services',
    featured: true
  },
  {
    id: 'web-2',
    question: 'What technologies do you use for web development?',
    answer: 'We work with modern technologies like HTML5, CSS3, JavaScript, React, Next.js, Node.js, PHP, Laravel, and WordPress. We choose the stack based on your project’s needs and scalability requirements.',
    category: 'Technologies'
  },
  {
    id: 'web-3',
    question: 'Do you build responsive and mobile-friendly websites?',
    answer: 'Yes, all our websites are fully responsive and optimized for mobile devices, ensuring a seamless user experience across desktops, tablets, and smartphones.',
    category: 'Design'
  },
  {
    id: 'web-4',
    question: 'Can you redesign my existing website?',
    answer: 'Absolutely. We offer website redesign services to improve aesthetics, performance, user experience, and SEO — all while preserving or enhancing your brand identity.',
    category: 'Redesign'
  },
  {
    id: 'web-5',
    question: 'Do you offer eCommerce website development?',
    answer: 'Yes, we build custom eCommerce websites using platforms like Shopify, WooCommerce, and Magento. We focus on secure checkout, product management, and user-friendly design to drive sales.',
    category: 'eCommerce'
  },
  {
    id: 'web-6',
    question: 'How long does it take to build a website?',
    answer: 'The timeline varies based on complexity. A standard business website typically takes 4–6 weeks, while larger or custom projects may take longer. We provide a clear timeline during the planning phase.',
    category: 'Timeline'
  },
  {
    id: 'web-7',
    question: 'Will I be able to update the website myself?',
    answer: 'Yes, we build websites with user-friendly CMS platforms like WordPress or custom admin dashboards, so you can easily manage and update content without needing technical skills.',
    category: 'CMS'
  },
  {
    id: 'web-8',
    question: 'Do you provide website maintenance and support?',
    answer: 'Yes, we offer ongoing maintenance plans that include updates, backups, performance monitoring, security patches, and technical support to keep your site running smoothly.',
    category: 'Maintenance',
    featured: true
  },
  {
    id: 'web-9',
    question: 'Will my website be optimized for SEO?',
    answer: 'Definitely. We follow SEO best practices such as clean code, fast loading speed, schema markup, and optimized metadata to ensure your website is search-engine friendly from day one.',
    category: 'SEO'
  },
  {
    id: 'web-10',
    question: 'Do you integrate third-party tools and APIs?',
    answer: 'Yes, we can integrate a wide range of tools and APIs including CRMs, payment gateways, marketing automation tools, and analytics platforms to enhance your website’s functionality.',
    category: 'Integrations'
  }
];


const WebDevelopmentFaqs :FC= () => {
  return (
    <div className="min-h-screen  py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <FAQAccordion
          faqs={WebDevelopmentFAQs}
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

export default WebDevelopmentFaqs;
