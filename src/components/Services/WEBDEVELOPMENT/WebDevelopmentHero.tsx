'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Variants } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Code, 
  Globe, 
  Smartphone, 
  BarChart3, 
  Zap, 
  Award, 
  ArrowRight,
  CheckCircle,
  Users,
  Eye,
  MousePointer,
  Sparkles,
  Rocket,
  Star,
  TrendingUp,
  Monitor,
  Database,
  Calendar,
  Clock,
  Shield,
  Palette,
  Server,
  Layout,
  Coffee,
  Github,
  Figma,
  Chrome
} from 'lucide-react';

const WebDevelopmentHero: React.FC = () => {
  const features = [
    {
      icon: Code,
      title: 'Custom Web Development',
      description: 'Tailored solutions built with modern technologies',
      color: 'from-indigo-500 to-purple-600'
    },
    {
      icon: Smartphone,
      title: 'Responsive Design',
      description: 'Mobile-first approach for all devices',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      icon: Database,
      title: 'Backend Development',
      description: 'Robust APIs and database architecture',
      color: 'from-purple-500 to-indigo-600'
    },
    {
      icon: Rocket,
      title: 'Performance Optimization',
      description: 'Lightning-fast websites that convert',
      color: 'from-indigo-500 to-blue-600'
    }
  ];

  const stats = [
    { value: '200+', label: 'Projects Delivered', icon: Globe },
    { value: '99.9%', label: 'Uptime Guarantee', icon: Shield },
    { value: '< 2s', label: 'Load Time', icon: Zap },
    { value: '24/7', label: 'Support', icon: Clock }
  ];

  const benefits = [
    'Modern React & Next.js',
    'SEO optimized structure',
    'Mobile-first responsive design',
    'Advanced security features',
    'Continuous maintenance & updates'
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  } as const;

  const itemVariants: Variants = {
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

  const floatingVariants: Variants = {
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
                Expert Development Team
                <Sparkles className="w-4 h-4 ml-2 animate-pulse" />
              </Badge>
            </motion.div>

            {/* Enhanced Main Heading */}
            <motion.div className="space-y-4" variants={itemVariants}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Web{' '}
                <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent relative">
                  Development
                  <motion.div 
                    className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                  />
                </span>
              </h1>
              
              <h2 className="text-xl md:text-2xl font-semibold text-gray-700">
                Building Digital Experiences That Scale
              </h2>
            </motion.div>

            {/* Enhanced Description */}
            <motion.div className="space-y-6" variants={itemVariants}>
              <p className="text-lg text-gray-600 leading-relaxed">
                Transform your ideas into <span className="font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">powerful web applications</span> that 
                drive business growth. We create custom solutions using cutting-edge technologies 
                and best practices for optimal performance and user experience.
              </p>
              
              <p className="text-base text-gray-500 leading-relaxed">
                From concept to deployment, our full-stack development team delivers scalable, 
                secure, and maintainable web applications that exceed expectations.
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
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-indigo-500 text-indigo-600 hover:bg-indigo-500 hover:text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300"
              >
                View Portfolio
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
              {/* Enhanced Web Development Illustration */}
              <div className="relative">
                <div className="m-6">
                  {/* Browser Window Mockup */}
                  <div className="bg-gray-100 rounded-t-xl p-3 border border-gray-200">
                    <div className="flex items-center space-x-2 mb-3">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      <div className="flex-1 bg-white rounded-full px-3 py-1 text-xs text-gray-500">
                        https://yourwebsite.com
                      </div>
                    </div>
                  </div>
                  
                  {/* Website Content Area */}
                  <div className="bg-white rounded-b-xl border-x border-b border-gray-200 p-4 space-y-4">
                    {/* Navigation */}
                    <div className="flex items-center justify-between">
                      <motion.div 
                        className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg px-3 py-1"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        <span className="text-white font-bold text-xs">LOGO</span>
                      </motion.div>
                      <div className="flex space-x-2">
                        <div className="w-12 h-2 bg-gray-200 rounded-full"></div>
                        <div className="w-12 h-2 bg-gray-200 rounded-full"></div>
                        <div className="w-12 h-2 bg-gray-200 rounded-full"></div>
                      </div>
                    </div>
                    
                    {/* Hero Section */}
                    <div className="space-y-3">
                      <div className="w-3/4 h-3 bg-gradient-to-r from-indigo-300 to-purple-300 rounded-full"></div>
                      <div className="w-full h-2 bg-gray-200 rounded-full"></div>
                      <div className="w-2/3 h-2 bg-gray-200 rounded-full"></div>
                      <motion.div 
                        className="w-24 h-6 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      ></motion.div>
                    </div>
                    
                    {/* Feature Cards */}
                    <div className="grid grid-cols-3 gap-2">
                      <motion.div 
                        className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-2 border border-indigo-200"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="w-4 h-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded mb-1"></div>
                        <div className="w-full h-1 bg-gray-200 rounded mb-1"></div>
                        <div className="w-3/4 h-1 bg-gray-200 rounded"></div>
                      </motion.div>
                      <motion.div 
                        className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-2 border border-blue-200"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-indigo-500 rounded mb-1"></div>
                        <div className="w-full h-1 bg-gray-200 rounded mb-1"></div>
                        <div className="w-3/4 h-1 bg-gray-200 rounded"></div>
                      </motion.div>
                      <motion.div 
                        className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg p-2 border border-purple-200"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="w-4 h-4 bg-gradient-to-r from-purple-500 to-indigo-500 rounded mb-1"></div>
                        <div className="w-full h-1 bg-gray-200 rounded mb-1"></div>
                        <div className="w-3/4 h-1 bg-gray-200 rounded"></div>
                      </motion.div>
                    </div>
                  </div>
                  
                  {/* Development Tools */}
                  {/* <div className="mt-6 text-center bg-white rounded-2xl p-4 shadow-lg border border-gray-200">
                    <div className="flex items-center justify-center space-x-2 mb-4">
                      <Code className="w-6 h-6 text-indigo-600" />
                      <h3 className="text-lg font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Tech Stack</h3>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <motion.div 
                        className="bg-gradient-to-r from-indigo-500 to-blue-500 rounded-lg p-2"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="text-white font-semibold">REACT</div>
                      </motion.div>
                      <motion.div 
                        className="bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg p-2"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="text-white font-semibold">NODE.JS</div>
                      </motion.div>
                      <motion.div 
                        className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg p-2"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="text-white font-semibold">NEXT.JS</div>
                      </motion.div>
                      <motion.div 
                        className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg p-2"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="text-white font-semibold">MONGODB</div>
                      </motion.div>
                    </div>
                  </div> */}
                </div>

                {/* Enhanced Decorative Elements */}
                <motion.div 
                  className="absolute -top-6 -right-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full w-12 h-12 flex items-center justify-center shadow-lg"
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
                  <Coffee className="w-6 h-6 text-white" />
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
                  <Github className="w-6 h-6 text-white" />
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
                  <Figma className="w-5 h-5 text-white" />
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
                <CardContent className="p-3 md:p-4">
                  <div className="flex items-center space-x-3">
                    <div className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full p-2">
                      <Monitor className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm text-gray-900">Page Speed</div>
                      <div className="text-xs text-green-600">95+ Score</div>
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
                <CardContent className="p-3 md:p-4">
                  <div className="flex items-center space-x-3">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full p-2">
                      <Users className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm text-gray-900">User Engagement</div>
                      <div className="text-xs text-green-600">+85% increase</div>
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

export default WebDevelopmentHero;