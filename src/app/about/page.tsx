import HeroAboutSection from '@/components/About/HeroAboutSection'
import WhyUsSection from '@/components/About/WhyUsSection'
import React from 'react'
import FAQAccordion from '@/Layout/FAQAccordion';

interface FAQItem {
    id: string;
    question: string;
    answer: string;
    category?: string;
    featured?: boolean;
  }

  const aboutUsFAQs: FAQItem[] = [
  {
    id: '1',
    question: 'Who makes up your team?',
    answer: 'Our team is composed of seasoned professionals with expertise in digital marketing, design, development, and analytics. We’re a diverse group of strategists, creatives, and technologists united by a shared passion for helping businesses grow.',
    category: 'Team',
    featured: true
  },
  {
    id: '2',
    question: 'What is your company’s vision?',
    answer: 'Our vision is to empower businesses of all sizes with impactful digital solutions that drive measurable results. We aim to be a trusted partner in our clients’ growth journeys by delivering transparent, innovative, and data-driven strategies.',
    category: 'Vision',
    featured: true
  },
  {
    id: '3',
    question: 'What types of projects have you worked on?',
    answer: 'We’ve successfully delivered projects ranging from SEO and content campaigns to full-scale website revamps and multi-channel digital strategies. Our portfolio spans various industries including healthcare, retail, SaaS, and finance.',
    category: 'Projects'
  },
  {
    id: '4',
    question: 'How do you define project success?',
    answer: 'Success for us means exceeding client expectations. We track KPIs such as increased traffic, improved conversion rates, brand visibility, and ROI. Client satisfaction and long-term relationships are also key indicators of our success.',
    category: 'Success Rate'
  },
  {
    id: '5',
    question: 'What is your project success rate?',
    answer: 'Over 90% of our projects meet or exceed defined goals within the first 6 months. Many clients continue working with us long-term, which we see as a testament to our commitment, quality, and results.',
    category: 'Success Rate',
    featured: true
  },
  {
    id: '6',
    question: 'How do you ensure collaboration within your team?',
    answer: 'We foster a collaborative environment using agile project management, regular team syncs, and open communication tools. This ensures alignment across departments and timely execution of tasks for every project.',
    category: 'Team'
  }
];



const page = () => {
  return (
    <div>
      <HeroAboutSection />
      <WhyUsSection />
      <div className="min-h-screen  py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <FAQAccordion
          faqs={aboutUsFAQs}
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

export default page
