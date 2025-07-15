'use client';

import React, { useState } from 'react';
import { motion, useInView ,Variants} from 'framer-motion';
import { 
  Clock, 
  TrendingUp, 
  Globe, 
  Brain, 
  Target, 
  BarChart3,
  Building,
  Database,
  Users,
  Zap,
  MapPin,
  Cog,
  Shield,
  Award
} from 'lucide-react';

const WhyUsSection = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const containerVariants:Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants:Variants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      rotateX: -15
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const features = [
    {
      icon: Clock,
      title: "Quick Turn around",
      description: "Time is currency, and we excel in rapid delivery.",
      gradient: "from-indigo-500 to-purple-600"
    },
    {
      icon: TrendingUp,
      title: "10X Revenue Assurance",
      description: "We guarantee a 10X revenue increase in 3 months - or we work for free.",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      icon: Globe,
      title: "Multi-Platform Mastery",
      description: "Gain visibility on Google, Bing, Facebook, LinkedIn, Netflix, Disney, Pinterest, TikTok, YouTube, & more.",
      gradient: "from-indigo-600 to-blue-600"
    },
    {
      icon: Brain,
      title: "Strategic AI Solutions",
      description: "Real AI, Real Outcomes. We transform data into actionable decisions.",
      gradient: "from-blue-500 to-cyan-600"
    },
    {
      icon: Target,
      title: "World-class proficiency at local pricing (£).",
      description: "World-class expertise. Local pricing (£)",
      gradient: "from-cyan-500 to-teal-600"
    },
    {
      icon: BarChart3,
      title: "Comprehensive Solutions",
      description: "From SEO to Chatbots, we cover all angles.",
      gradient: "from-teal-500 to-green-600"
    },
    {
      icon: Building,
      title: "Industry Agnostic",
      description: "From Healthcare to Ecommerce to IT, we've got you covered.",
      gradient: "from-green-500 to-lime-600"
    },
    {
      icon: Database,
      title: "Data-Driven Insights",
      description: "Monitor growth in real-time. Maintain control with data, not guesswork.",
      gradient: "from-lime-500 to-yellow-600"
    },
    {
      icon: Users,
      title: "Personalized Account Management",
      description: "A dedicated manager for your unique needs. One focus, your success.",
      gradient: "from-yellow-500 to-orange-600"
    },
    {
      icon: Zap,
      title: "Scalable Strategies",
      description: "For startups and enterprises alike. We grow with you.",
      gradient: "from-orange-500 to-red-600"
    },
    {
      icon: MapPin,
      title: "Global Reach, Local Expertise",
      description: "Worldwide accessibility with localized knowledge.",
      gradient: "from-red-500 to-pink-600"
    },
    {
      icon: Cog,
      title: "Tech-Savvy Integration",
      description: "Seamlessly incorporating the latest technology.",
      gradient: "from-pink-500 to-rose-600"
    },
    {
      icon: Shield,
      title: "Long-Term Partnership",
      description: "More than a service—our 90%+ retention rate speaks volumes.",
      gradient: "from-rose-500 to-indigo-600"
    },
    {
      icon: Award,
      title: "Proven Track Record",
      description: "Documented returns on investment across diverse industries.",
      gradient: "from-violet-500 to-purple-600"
    }
  ];

  return (
    <section className="relative min-h-screen bg-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-100/50 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-purple-100/50 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-blue-100/50 rounded-full blur-3xl animate-pulse delay-2000"></div>
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-indigo-50/80 rounded-full blur-2xl animate-pulse delay-3000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 mb-8 p-2">
            Why Us
          </h2>
          <p className="text-base md:text-base text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium">
            Choose Brilliant Brains for visionary growth marketing that sets you apart. 
            We turn possibilities into triumphs, and your success is our relentless pursuit.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                z: 50
              }}
              whileTap={{ scale: 0.95 }}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
              className="group relative"
            >
              <div className="relative h-full bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-6 transition-all duration-500 hover:border-indigo-300/50 shadow-md hover:shadow-2xl hover:shadow-indigo-200/30 hover:bg-white/90">
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                {/* Icon */}
                <div className="relative mb-4">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.gradient} p-0.5 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <div className="w-full h-full bg-white rounded-xl flex items-center justify-center">
                      <feature.icon className="w-8 h-8 text-gray-700" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-purple-600 transition-all duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>

                {/* Hover glow effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-200 to-purple-200 rounded-2xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-500 -z-10"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-20"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-12 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold text-lg rounded-full hover:from-indigo-500 hover:to-purple-500 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-indigo-300/30"
          >
            <span className="relative z-10">Start Your Journey</span>
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyUsSection;