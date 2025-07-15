'use client';

import React, { useState, useEffect } from 'react';
import { motion, useInView ,Variants} from 'framer-motion';
import { 
  ArrowRight, 
  Sparkles, 
  Brain, 
  Users, 
  Target,
  Zap,
  Globe,
  Award,
  TrendingUp,
  Heart,
  Lightbulb,
  Rocket,
  BarChart3,
  Shield,
  Eye,
  Star,
  Database,
  Cloud,
  Code
} from 'lucide-react';
import TeamCard from './TeamCard';

const HeroAboutSection = () => {
  const [currentStat, setCurrentStat] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentStat(prev => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    { number: "85%", label: "Continuous Optimisation", icon: TrendingUp },
    { number: "97%", label: "Strategic & Humanistic Approach", icon: Heart },
    { number: "89%", label: "Data-Driven Analytics", icon: BarChart3 },
    { number: "98%", label: "Reputation Management", icon: Shield }
  ];

  const values = [
    {
      icon: Target,
      title: "Revenue-First Approach",
      description: "We operate on a revenue-first approach, always focused on driving up sales and hitting all your targets with our marketing that boosts ROI."
    },
    {
      icon: Zap,
      title: "Technological Advancement",
      description: "We believe in the augmentation of the human marketing instinct with the unfailing accuracy & efficiency of technology."
    },
    {
      icon: Eye,
      title: "Complete Transparency",
      description: "We promise our stakeholders – clients, collaborators, and partners – complete transparency through all processes. Honesty is our guiding principle."
    },
    {
      icon: Star,
      title: "Delivering Beyond Expectations",
      description: "We strive to outdo every expectation of us. We pursue results that exceed what is promised, and work to outdo ourselves every time."
    }
  ];

  const teamMembers = [
    {
      name: "Vijay R",
      role: "Founder & Cloud Architecture Specialist",
      description: "Meet Vijay R, our founder and Cloud Architecture Consultant. Vijay empowers our clients with scalable and secure digital solutions. His expertise and strategic insights ensure peak performance and reliability.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b6fd3643?w=200&h=200&fit=crop&crop=face",
      location: "EdinBurg, UK",
      joinDate: "2022",
      isOnline: true,
      skills: ["Growth Stragist", "Gen AI Specialist", "Cloud Architect"],
      achievements: ["Top Contributor 2023", "Tech Lead"],
      socials: [
        { platform: 'github' as const, url: 'https://github.com/sarahchen', followers: '2.3k' },
        { platform: 'linkedin' as const, url: 'https://linkedin.com/in/sarahchen', followers: '5.1k' },
        { platform: 'twitter' as const, url: 'https://twitter.com/sarahchen', followers: '1.8k' },
        { platform: 'website' as const, url: 'https://sarahchen.dev' },
        { platform: 'email' as const, url: 'sarah@example.com' }
      ]
    },
    {
      name: "Harish Mulaka",
      role: "CEO",
      description: "Harish Mulaka is our visionary CEO and Data Scientist. Under him our clients’ digital marketing efforts are guided by insights, not guesswork. His leadership drives our mission to transform businesses through the power of data.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
      location: "Hyderabad, IN",
      joinDate: "2021",
      isOnline: false,
      skills: ["Data Scientist", "Marketing Expert", "Data Specialist"],
      achievements: ["Research Paper Published", "Innovation Award"],
      socials: [
        { platform: 'github' as const, url: 'https://github.com/marcusr', followers: '4.2k' },
        { platform: 'linkedin' as const, url: 'https://linkedin.com/in/marcusr', followers: '3.7k' },
        { platform: 'twitter' as const, url: 'https://twitter.com/marcusr', followers: '2.9k' }
      ]
    },
    {
      name: "Shilpa Mulaka",
      role: "Co-Founder & Data Scientist",
      description: "Design thinking enthusiast with a passion for creating intuitive and accessible user experiences. I bridge the gap between users and technology.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face",
      location: "Hyderabad, IN",
      joinDate: "2020",
      isOnline: true,
      skills: ["Data Scientist","Social Media Specialist", "Market Stragist"],
      achievements: ["Design Excellence Award", "UX Mentor"],
      socials: [
        { platform: 'linkedin' as const, url: 'https://linkedin.com/in/zoeanderson', followers: '4.5k' },
        { platform: 'twitter' as const, url: 'https://twitter.com/zoedesigns', followers: '3.2k' },
        { platform: 'website' as const, url: 'https://zoeanderson.design' }
      ]
    }
  ];

  const containerVariants:Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants:Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="relative min-h-screen bg-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-indigo-100/40 to-purple-100/40 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-80 h-80 bg-gradient-to-br from-blue-100/40 to-cyan-100/40 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-72 h-72 bg-gradient-to-br from-purple-100/40 to-pink-100/40 rounded-full blur-3xl animate-pulse delay-2000"></div>
        <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-gradient-to-br from-indigo-50/60 to-blue-50/60 rounded-full blur-2xl animate-pulse delay-3000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        {/* Main Hero Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center mb-20"
        >
          {/* Animated Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200/50 rounded-full px-6 py-3 mb-8"
          >
            <Sparkles className="w-5 h-5 text-indigo-600" />
            <span className="text-indigo-700 font-semibold">25+ Years of Industry Experience</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-6xl md:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 mb-8 leading-tight"
          >
            About
            <br />
            <span className="text-gray-900">Brilliant Brains</span>
          </motion.h1>

          {/* Main Description */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-600 max-w-5xl mx-auto leading-relaxed font-medium mb-8"
          >
            Founded by data and marketing experts with over 25 years of industry experience, 
            Brilliant Brains is an AI driven digital branding and marketing agency that leaves no stone unturned to get the best for our clients.
          </motion.p>

          {/* Location Info */}
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-500 max-w-4xl mx-auto leading-relaxed mb-12"
          >
            With our base in the UK, we have now set up our technical team with global access in India. 
            We envision being the vanguard of the best digital marketing agencies in Hyderabad, turning brands into industry leaders through innovative, all-encompassing digital strategies.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold text-lg rounded-full hover:from-indigo-500 hover:to-purple-500 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-indigo-300/30 flex items-center gap-3"
            >
              <span className="relative z-10">Our Vision</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group px-8 py-4 border-2 border-indigo-200 text-indigo-700 font-bold text-lg rounded-full hover:border-indigo-300 hover:bg-indigo-50 transition-all duration-300 flex items-center gap-3"
            >
              <Users className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              <span>Meet the Team</span>
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className={`group text-center p-6 rounded-2xl transition-all duration-500 ${
                currentStat === index 
                  ? 'bg-gradient-to-br from-indigo-50 to-purple-50 border-2 border-indigo-200/50 shadow-lg' 
                  : 'bg-white/50 border border-gray-200/50 hover:bg-gray-50/50'
              }`}
            >
              <div className="flex justify-center mb-4">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 p-0.5 group-hover:scale-110 transition-transform duration-300 ${
                  currentStat === index ? 'animate-pulse' : ''
                }`}>
                  <div className="w-full h-full bg-white rounded-xl flex items-center justify-center">
                    <stat.icon className="w-8 h-8 text-gray-700" />
                  </div>
                </div>
              </div>
              <div className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Vision Section */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="text-center mb-20"
        >
          <div className="max-w-4xl mx-auto p-8 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-3xl border border-indigo-200/50">
            <Lightbulb className="w-12 h-12 text-indigo-600 mx-auto mb-6" />
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Our Vision
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Brilliant Brains envisions being the vanguard of growth marketing, turning brands into industry leaders through innovative, all-encompassing digital strategies.
            </p>
          </div>
        </motion.div>

        {/* Values Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-6xl mx-auto mb-20"
        >
          <motion.div
            variants={itemVariants}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              We Are <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Technologically Sound</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              AI-driven solutions to break all targets through our core principles
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02, rotateY: 5 }}
                className="group relative p-8 bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl hover:border-indigo-300/50 hover:shadow-xl hover:shadow-indigo-100/50 transition-all duration-500"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 p-0.5 group-hover:scale-110 transition-transform duration-300 shadow-lg mb-6">
                    <div className="w-full h-full bg-white rounded-xl flex items-center justify-center">
                      <value.icon className="w-8 h-8 text-gray-700" />
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-purple-600 transition-all duration-300">
                    {value.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {value.description}
                  </p>
                </div>

                <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-200 to-purple-200 rounded-2xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-500 -z-10"></div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-6xl mx-auto"
        >
          <motion.div
            variants={itemVariants}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Team</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The experts behind your success
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {teamMembers.map((member, index) => (
              <TeamCard
              key={index}
              name={member.name}
              role={member.role}
              description={member.description}
              image={member.image}
              location={member.location}
              joinDate={member.joinDate}
              isOnline={member.isOnline}
              skills={member.skills}
              achievements={member.achievements}
              socials={member.socials}
            />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroAboutSection;