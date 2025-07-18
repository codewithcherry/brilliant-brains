import React, { FC } from 'react'
import FAQAccordion from '@/Layout/FAQAccordion'


interface FAQItem {
    id: string;
    question: string;
    answer: string;
    category?: string;
    featured?: boolean;
  }


const SocialMediaFAQs: FAQItem[] = [
  {
    id: 'smm-1',
    question: 'What is social media marketing?',
    answer: 'Social media marketing involves creating and sharing content on social media platforms like Instagram, Facebook, LinkedIn, and Twitter to promote your brand, engage your audience, and drive traffic and sales.',
    category: 'Social Media Marketing',
    featured: true
  },
  {
    id: 'smm-2',
    question: 'What social media marketing services do you offer?',
    answer: 'We offer content creation, social media strategy, account management, community engagement, paid advertising, influencer collaboration, and detailed analytics reporting.',
    category: 'Services'
  },
  {
    id: 'smm-3',
    question: 'Which platforms do you manage?',
    answer: 'We manage campaigns across major platforms including Instagram, Facebook, LinkedIn, Twitter (X), Pinterest, and TikTok. We tailor strategies to each platform’s audience and features.',
    category: 'Platforms'
  },
  {
    id: 'smm-4',
    question: 'How often should I post on social media?',
    answer: 'Posting frequency depends on your goals and audience. We typically recommend 3–5 posts per week, but we customize schedules based on platform performance and engagement trends.',
    category: 'Strategy'
  },
  {
    id: 'smm-5',
    question: 'Can you help grow my followers organically?',
    answer: 'Yes, we focus on organic growth through consistent content, community engagement, hashtags, influencer collaborations, and platform-specific tactics to attract real and relevant followers.',
    category: 'Growth'
  },
  {
    id: 'smm-6',
    question: 'Do you offer paid social media advertising?',
    answer: 'Absolutely. We run highly targeted paid ad campaigns on platforms like Facebook Ads Manager, LinkedIn Ads, Instagram, and TikTok Ads to boost reach, engagement, and conversions.',
    category: 'Advertising',
    featured: true
  },
  {
    id: 'smm-7',
    question: 'How do you measure success on social media?',
    answer: 'We track metrics like engagement rate, follower growth, reach, clicks, conversions, and ROI. You receive monthly reports and insights to measure campaign performance.',
    category: 'Analytics'
  },
  {
    id: 'smm-8',
    question: 'Will you manage comments and messages?',
    answer: 'Yes, we offer community management services where we monitor and respond to comments, messages, and mentions to foster engagement and maintain a positive brand presence.',
    category: 'Community Management'
  },
  {
    id: 'smm-9',
    question: 'Can you create branded social media content?',
    answer: 'Yes, our creative team designs scroll-stopping graphics, short videos, carousels, reels, and branded templates tailored to each platform and your brand identity.',
    category: 'Content Creation'
  },
  {
    id: 'smm-10',
    question: 'Do you offer influencer marketing services?',
    answer: 'Yes, we identify, outreach, and manage collaborations with influencers that align with your brand. We handle contracts, briefs, content approval, and performance tracking.',
    category: 'Influencer Marketing'
  }
];


const SocialMediaFaqs :FC= () => {
  return (
    <div className="min-h-screen  py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <FAQAccordion
          faqs={SocialMediaFAQs}
          title="Social Media Marketing FAQs"
          subtitle="Get answers to common questions about our digital marketing services"
          showSearch={true}
          showCategories={true}
          allowMultipleOpen={true}
        />
      </div>
    </div>
  )
}

export default SocialMediaFaqs
