'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Variants } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Search, 
  TrendingUp, 
  Target, 
  BarChart3, 
  Zap, 
  Award, 
  ArrowRight,
  CheckCircle,
  Globe,
  Users,
  Eye,
  MousePointer,
  Sparkles,
  Shield,
  Star,
  DollarSign,
  Megaphone,
  Rocket,
  Calendar,
  LineChart
} from 'lucide-react';

const SEMHero: React.FC = () => {
  const features = [
    {
      icon: Target,
      title: 'PPC Campaign Management',
      description: 'Strategic pay-per-click campaigns with maximum ROI',
      color: 'from-indigo-500 to-purple-600'
    },
    {
      icon: TrendingUp,
      title: 'Conversion Optimization',
      description: 'Data-driven approach to boost conversions',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      icon: BarChart3,
      title: 'Performance Analytics',
      description: 'Real-time tracking and detailed reporting',
      color: 'from-purple-500 to-indigo-600'
    },
    {
      icon: Megaphone,
      title: 'Ad Copy Creation',
      description: 'Compelling ads that drive clicks and conversions',
      color: 'from-indigo-500 to-blue-600'
    }
  ];

  const stats = [
    { value: '300+', label: 'Campaigns Managed', icon: Rocket },
    { value: '250%', label: 'ROI Increase', icon: DollarSign },
    { value: '98%', label: 'Client Retention', icon: Star },
    { value: '24/7', label: 'Campaign Monitoring', icon: Eye }
  ];

  const benefits = [
    'Google Ads certified specialists',
    'Advanced bidding strategies',
    'Multi-platform campaign management',
    'A/B testing and optimization',
    'Detailed performance reporting'
  ];

  const containerVariants:Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  } as const;

  const itemVariants:Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut' as const
      }
    }
  } as const;

  const floatingVariants:Variants = {
    animate: {
      y: [-10, 10, -10],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: 'easeInOut' as const
      }
    }
  } as const;

  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-300 to-transparent"></div>
        
        {/* Animated background blobs */}
        <motion.div 
          className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-indigo-200 to-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
          animate={{
            scale: [1, 1.1, 1],
            x: [0, 30, 0],
            y: [0, -20, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
        
        <motion.div 
          className="absolute top-40 right-10 w-80 h-80 bg-gradient-to-r from-purple-200 to-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, -20, 0],
            y: [0, 30, 0]
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1
          }}
        />
        
        <motion.div 
          className="absolute -bottom-8 left-20 w-72 h-72 bg-gradient-to-r from-blue-200 to-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
          animate={{
            scale: [1, 1.15, 1],
            x: [0, 20, 0],
            y: [0, -30, 0]
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2
          }}
        />
        
        {/* Floating particles */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-2 h-2 bg-indigo-400 rounded-full"
          animate={{
            y: [-5, 5, -5],
            opacity: [0.4, 0.8, 0.4]
          }}
          transition={{
            duration: 3,
            repeat: Infinity
          }}
        />
        <motion.div 
          className="absolute top-1/3 right-1/3 w-1 h-1 bg-purple-400 rounded-full"
          animate={{
            y: [5, -5, 5],
            opacity: [0.3, 0.7, 0.3]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: 1
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-blue-400 rounded-full"
          animate={{
            y: [-3, 3, -3],
            opacity: [0.5, 0.9, 0.5]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            delay: 2
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-3">
        <motion.div 
          className="grid lg:grid-cols-2 gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Content */}
          <div className="space-y-6">
            {/* Enhanced Badge */}
            <motion.div variants={itemVariants}>
              <Badge className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white border-0 px-6 py-3 text-sm font-semibold rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300">
                <Award className="w-4 h-4 mr-2" />
                Premier SEM Agency
                <Sparkles className="w-4 h-4 ml-2 animate-pulse" />
              </Badge>
            </motion.div>

            {/* Enhanced Main Heading */}
            <motion.div className="space-y-4" variants={itemVariants}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Search Engine{' '}
                <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent relative">
                  Marketing
                  <motion.div 
                    className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                  />
                </span>
              </h1>
              
              <h2 className="text-xl md:text-2xl font-semibold text-gray-700">
                Drive Results with Strategic PPC Campaigns
              </h2>
            </motion.div>

            {/* Enhanced Description */}
            <motion.div className="space-y-6" variants={itemVariants}>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our <span className="font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">expert SEM specialists</span> create 
                high-converting pay-per-click campaigns that maximize your ROI. We combine data-driven 
                strategies with creative excellence to deliver measurable results.
              </p>
              
              <p className="text-base text-gray-500 leading-relaxed">
                From Google Ads to social media advertising, we manage every aspect of your search 
                engine marketing campaigns to ensure optimal performance and continuous growth.
              </p>
            </motion.div>

            {/* Enhanced Benefits List */}
            <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-3" variants={itemVariants}>
              {benefits.map((benefit, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-center space-x-3 group"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <div className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full p-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700 group-hover:text-gray-900 transition-colors duration-200">
                    {benefit}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* Enhanced CTA Buttons */}
            <motion.div className="flex flex-col sm:flex-row gap-4" variants={itemVariants}>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white px-8 py-4 rounded-xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 group border-0"
              >
                Get Free PPC Audit
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-indigo-500 text-indigo-600 hover:bg-indigo-500 hover:text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300"
              >
                View Case Studies
              </Button>
            </motion.div>
          </div>

          {/* Enhanced Right Content */}
          <motion.div className="relative mt-10 lg:mt-0" variants={itemVariants}>
            <motion.div 
              className="relative bg-white rounded-3xl shadow-2xl p-2 border border-gray-200"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Enhanced SEM Illustration */}
              <div className="relative">
                <div className="m-6">
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    <motion.div 
                      className="bg-gradient-to-r from-indigo-400 to-purple-500 rounded-xl p-4 text-center shadow-lg"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="text-xs font-bold text-white mb-2">PPC</div>
                      <DollarSign className="w-6 h-6 text-white mx-auto" />
                    </motion.div>
                    <motion.div 
                      className="bg-gradient-to-r from-blue-400 to-indigo-500 rounded-xl p-4 text-center shadow-lg"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="text-xs font-bold text-white mb-2">ADS</div>
                      <Megaphone className="w-6 h-6 text-white mx-auto" />
                    </motion.div>
                    <motion.div 
                      className="bg-gradient-to-r from-purple-400 to-indigo-500 rounded-xl p-4 text-center shadow-lg"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="text-xs font-bold text-white mb-2">ROI</div>
                      <LineChart className="w-6 h-6 text-white mx-auto" />
                    </motion.div>
                  </div>
                  
                  {/* Enhanced Central SEM Text */}
                  <div className="text-center bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                    <h3 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">SEM</h3>
                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <motion.div 
                        className="bg-gradient-to-r from-indigo-500 to-blue-500 rounded-lg p-3"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        <span className="text-white font-semibold">GOOGLE ADS</span>
                      </motion.div>
                      <motion.div 
                        className="bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg p-3"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        <span className="text-white font-semibold">BING ADS</span>
                      </motion.div>
                      <motion.div 
                        className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg p-3"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        <span className="text-white font-semibold">SHOPPING</span>
                      </motion.div>
                      <motion.div 
                        className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg p-3"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        <span className="text-white font-semibold">DISPLAY</span>
                      </motion.div>
                    </div>
                  </div>
                </div>

                {/* Enhanced Decorative Elements */}
                <motion.div 
                  className="absolute -top-16 -right-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full w-12 h-12 flex items-center justify-center shadow-lg"
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 180, 360]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut' as const
                  }}
                >
                  <Zap className="w-6 h-6 text-white" />
                </motion.div>
                
                <motion.div 
                  className="absolute -bottom-6 -left-6 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full w-12 h-12 flex items-center justify-center shadow-lg"
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, -180, -360]
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: 'easeInOut' as const,
                    delay: 1
                  }}
                >
                  <Globe className="w-6 h-6 text-white" />
                </motion.div>
                
                <motion.div 
                  className="absolute top-1/2 -right-8 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full w-10 h-10 flex items-center justify-center shadow-lg"
                  animate={{
                    scale: [1, 1.15, 1],
                    y: [-5, 5, -5]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut' as const,
                    delay: 2
                  }}
                >
                  <Eye className="w-5 h-5 text-white" />
                </motion.div>
              </div>
            </motion.div>

            {/* Enhanced Floating Feature Cards */}
            <motion.div 
              className="absolute -left-4 md:-left-12 -top-14 md:-top-22"
              variants={floatingVariants}
              animate="animate"
            >
              <Card className="bg-white border-gray-200 shadow-xl">
                <CardContent className="p-3 md:p-2">
                  <div className="flex items-center space-x-3">
                    <div className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full p-2 md:p-2">
                      <Users className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm text-gray-900">Click-Through Rate</div>
                      <div className="text-xs text-green-600">+65% increase</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div 
              className="absolute -right-4 md:-right-12 -bottom-14 md:-bottom-22"
              variants={floatingVariants}
              animate="animate"
              style={{ animationDelay: '1s' }}
            >
              <Card className="bg-white border-gray-200 shadow-xl">
                <CardContent className="p-3 md:p-2">
                  <div className="flex items-center space-x-3">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full p-2 md:p-2">
                      <BarChart3 className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm text-gray-900">Conversion Rate</div>
                      <div className="text-xs text-green-600">+180% boost</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Enhanced Stats */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mt-16 pt-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index} 
              className="text-center group"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 group-hover:border-indigo-300 transition-all duration-300 group-hover:shadow-xl">
                <stat.icon className="w-8 h-8 text-indigo-500 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">{stat.value}</div>
                <div className="text-xs md:text-sm text-gray-500 mt-1">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Feature Cards */}
        <motion.div 
          className="mt-24 grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="group hover:shadow-2xl transition-all duration-500 bg-white border-gray-200 hover:border-indigo-300 h-full">
                <CardContent className="p-8 text-center">
                  <motion.div 
                    className={`bg-gradient-to-r ${feature.color} rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-6 shadow-lg`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <feature.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="font-bold text-xl text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors duration-300">{feature.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default SEMHero;