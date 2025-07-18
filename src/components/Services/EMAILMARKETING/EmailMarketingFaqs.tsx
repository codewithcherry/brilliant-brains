import React from 'react'
import { FC } from 'react'
import FAQAccordion from '@/Layout/FAQAccordion';

interface FAQItem {
    id: string;
    question: string;
    answer: string;
    category?: string;
    featured?: boolean;
  }

const EmailMarketingFAQs: FAQItem[] = [
  {
    id: 'email-1',
    question: 'What is email marketing and why is it important?',
    answer: 'Email marketing is a digital marketing strategy that involves sending targeted messages to a list of subscribers via email. It’s effective for nurturing leads, promoting products, and retaining customers through personalized communication.',
    category: 'Email Marketing',
    featured: true
  },
  {
    id: 'email-2',
    question: 'What email marketing services do you offer?',
    answer: 'We provide full-service email marketing including campaign strategy, copywriting, design, list segmentation, automation setup, A/B testing, and performance analytics.',
    category: 'Services'
  },
  {
    id: 'email-3',
    question: 'Which platforms do you use for email marketing?',
    answer: 'We work with leading email platforms such as Mailchimp, Klaviyo, HubSpot, ActiveCampaign, and ConvertKit, depending on your business needs and scale.',
    category: 'Platforms'
  },
  {
    id: 'email-4',
    question: 'How often should I send marketing emails?',
    answer: 'The ideal frequency depends on your audience and goals. For most businesses, 1–4 emails per month is a good starting point. We help you find the right cadence through testing and engagement tracking.',
    category: 'Strategy'
  },
  {
    id: 'email-5',
    question: 'Can you help grow my email list?',
    answer: 'Yes, we implement list-building strategies like lead magnets, website popups, landing pages, and gated content to grow your subscriber base with qualified leads.',
    category: 'Lead Generation'
  },
  {
    id: 'email-6',
    question: 'Do you create email automation workflows?',
    answer: 'Absolutely. We set up email automation workflows such as welcome sequences, abandoned cart emails, re-engagement campaigns, and post-purchase follow-ups to increase conversions.',
    category: 'Automation',
    featured: true
  },
  {
    id: 'email-7',
    question: 'How do you segment email lists?',
    answer: 'We segment lists based on user behavior, purchase history, demographics, and engagement to ensure the right message is sent to the right audience, improving open and conversion rates.',
    category: 'Segmentation'
  },
  {
    id: 'email-8',
    question: 'What metrics do you track for email marketing?',
    answer: 'We track key metrics such as open rates, click-through rates, bounce rates, unsubscribe rates, and conversions. These insights help us continuously optimize your campaigns.',
    category: 'Analytics'
  },
  {
    id: 'email-9',
    question: 'How do you ensure email deliverability?',
    answer: 'We follow best practices such as proper sender authentication (SPF, DKIM, DMARC), list hygiene, and avoiding spammy content to maximize inbox placement and deliverability.',
    category: 'Deliverability'
  },
  {
    id: 'email-10',
    question: 'Can you design branded email templates?',
    answer: 'Yes, we create custom-branded email templates that reflect your visual identity and are optimized for both desktop and mobile devices.',
    category: 'Design'
  }
];


const EmailMarketingFaqs :FC= () => {
  return (
    <div className="min-h-screen  py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <FAQAccordion
          faqs={EmailMarketingFAQs}
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

export default EmailMarketingFaqs
