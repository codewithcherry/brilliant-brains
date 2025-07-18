'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Variants } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Instagram, 
  Facebook, 
  Twitter, 
  Youtube, 
  TrendingUp, 
  Target, 
  Users, 
  MessageCircle, 
  Heart, 
  Share2, 
  Play, 
  Eye, 
  BarChart3, 
  Zap, 
  Sparkles, 
  ArrowRight,
  Crown,
  Megaphone,
  Calendar,
  Camera,
  Video,
  Palette,
  Globe,
  Award,
  Star,
  ChevronRight,
  CheckCircle2,
  Rocket,
  ThumbsUp,
  Bookmark,
  Send
} from 'lucide-react';

const SocialMediaHero: React.FC = () => {
  const socialPlatforms = [
    { icon: Instagram, color: 'from-pink-500 to-purple-600', name: 'Instagram', followers: '2.8M' },
    { icon: Facebook, color: 'from-blue-500 to-indigo-600', name: 'Facebook', followers: '1.5M' },
    { icon: Twitter, color: 'from-blue-400 to-cyan-500', name: 'Twitter', followers: '890K' },
    { icon: Youtube, color: 'from-red-500 to-pink-600', name: 'YouTube', followers: '3.2M' }
  ];

  const services = [
    {
      icon: Target,
      title: 'Targeted Campaigns',
      description: 'Precision-targeted ads that reach your ideal audience',
      metric: '300% ROI',
      color: 'from-indigo-500 to-purple-600'
    },
    {
      icon: Users,
      title: 'Community Building',
      description: 'Grow engaged followers who become loyal customers',
      metric: '10K+ followers',
      color: 'from-purple-500 to-pink-600'
    },
    {
      icon: Video,
      title: 'Content Creation',
      description: 'Stunning visuals and videos that capture attention',
      metric: '5M+ views',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      icon: BarChart3,
      title: 'Analytics & Insights',
      description: 'Data-driven strategies for maximum impact',
      metric: '95% accuracy',
      color: 'from-indigo-500 to-blue-600'
    }
  ];

  const achievements = [
    { value: '500+', label: 'Campaigns Launched', icon: Rocket },
    { value: '50M+', label: 'Impressions Generated', icon: Eye },
    { value: '2.8M+', label: 'Followers Gained', icon: Users },
    { value: '450%', label: 'Average ROI', icon: TrendingUp }
  ];

  const containerVariants :Variants= {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants :Variants= {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  const floatingVariants :Variants= {
    animate: {
      y: [-15, 15, -15],
      x: [-5, 5, -5],
      rotate: [0, 3, -3, 0],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: 'easeInOut'
      }
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <motion.div 
          className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-indigo-400/20 to-purple-400/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2
          }}
        />
        
        {/* Geometric Shapes */}
        <motion.div 
          className="absolute top-32 right-32 w-4 h-4 bg-indigo-400 rounded-full"
          animate={{
            y: [-10, 10, -10],
            opacity: [0.4, 0.8, 0.4]
          }}
          transition={{
            duration: 4,
            repeat: Infinity
          }}
        />
        <motion.div 
          className="absolute bottom-40 left-40 w-6 h-6 bg-purple-400 rotate-45"
          animate={{
            rotate: [45, 225, 45],
            opacity: [0.3, 0.7, 0.3]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            delay: 1
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <Badge className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white border-0 px-8 py-3 text-base font-semibold rounded-full shadow-lg">
              <Crown className="w-5 h-5 mr-2" />
              #1 Social Media Agency
              <Sparkles className="w-5 h-5 ml-2" />
            </Badge>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Amplify Your{' '}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Social Presence
                </span>
                <motion.div 
                  className="absolute -bottom-2 left-0 right-0 h-2 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1.2, delay: 1 }}
                />
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Transform your brand into a social media powerhouse with our data-driven strategies 
              that deliver <span className="font-semibold text-indigo-600">measurable results</span>
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-10 py-6 rounded-2xl font-semibold shadow-2xl hover:shadow-3xl transition-all duration-300 group border-0 text-lg"
            >
              <Megaphone className="w-6 h-6 mr-3" />
              Start Your Campaign
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white px-10 py-6 rounded-2xl font-semibold transition-all duration-300 text-lg"
            >
              <Play className="w-6 h-6 mr-3" />
              Watch Success Stories
            </Button>
          </motion.div>
        </motion.div>

        {/* Social Media Platforms Showcase */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {socialPlatforms.map((platform, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="group hover:shadow-2xl transition-all duration-500 bg-white/80 backdrop-blur-sm border-gray-200 hover:border-indigo-300 overflow-hidden">
                <CardContent className="p-6 text-center">
                  <motion.div 
                    className={`bg-gradient-to-r ${platform.color} rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <platform.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">{platform.name}</h3>
                  <p className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    {platform.followers}
                  </p>
                  <p className="text-sm text-gray-500">followers</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <motion.div 
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Drive Growth Through
                <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Strategic Social Media
                </span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our comprehensive social media marketing solutions help brands build meaningful 
                connections, increase engagement, and drive conversions across all major platforms.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {services.map((service, index) => (
                <motion.div 
                  key={index}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200 hover:border-indigo-300 transition-all duration-300 group"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className={`bg-gradient-to-r ${service.color} rounded-xl w-12 h-12 flex items-center justify-center mb-4`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{service.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-indigo-600">{service.metric}</span>
                    <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-indigo-600 transition-colors" />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Social Media Dashboard */}
          <motion.div 
            className="relative"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants}>
              <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-gray-200">
                {/* Dashboard Header */}
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-gray-900">Campaign Dashboard</h3>
                  <Badge className="bg-green-100 text-green-800 border-green-200">
                    <CheckCircle2 className="w-4 h-4 mr-1" />
                    Live
                  </Badge>
                </div>

                {/* Metrics Cards */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl p-4 text-white">
                    <div className="flex items-center justify-between mb-2">
                      <Eye className="w-6 h-6" />
                      <span className="text-sm opacity-90">Reach</span>
                    </div>
                    <div className="text-2xl font-bold">2.5M</div>
                    <div className="text-sm opacity-90">+24% this week</div>
                  </div>
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-4 text-white">
                    <div className="flex items-center justify-between mb-2">
                      <Heart className="w-6 h-6" />
                      <span className="text-sm opacity-90">Engagement</span>
                    </div>
                    <div className="text-2xl font-bold">18.7%</div>
                    <div className="text-sm opacity-90">+12% this week</div>
                  </div>
                </div>

                {/* Social Posts Preview */}
                <div className="space-y-4">
                  <motion.div 
                    className="bg-gray-50 rounded-2xl p-4 border border-gray-200"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-sm">BR</span>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">Brand Name</div>
                        <div className="text-sm text-gray-500">2 hours ago</div>
                      </div>
                    </div>
                    <div className="w-full h-32 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-xl mb-3"></div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <Heart className="w-5 h-5 text-red-500" />
                          <span className="text-sm text-gray-600">1.2K</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MessageCircle className="w-5 h-5 text-blue-500" />
                          <span className="text-sm text-gray-600">89</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Share2 className="w-5 h-5 text-green-500" />
                          <span className="text-sm text-gray-600">45</span>
                        </div>
                      </div>
                      <Bookmark className="w-5 h-5 text-gray-400" />
                    </div>
                  </motion.div>

                  <motion.div 
                    className="bg-gray-50 rounded-2xl p-4 border border-gray-200"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-sm">BR</span>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">Brand Name</div>
                        <div className="text-sm text-gray-500">5 hours ago</div>
                      </div>
                    </div>
                    <div className="bg-white rounded-xl p-3 border border-gray-200 mb-3">
                      <div className="w-3/4 h-3 bg-gray-200 rounded-full mb-2"></div>
                      <div className="w-1/2 h-3 bg-gray-200 rounded-full"></div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <ThumbsUp className="w-5 h-5 text-blue-500" />
                          <span className="text-sm text-gray-600">856</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MessageCircle className="w-5 h-5 text-green-500" />
                          <span className="text-sm text-gray-600">34</span>
                        </div>
                      </div>
                      <Send className="w-5 h-5 text-gray-400" />
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Floating Elements */}
            <motion.div 
              className="absolute -top-6 -right-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full w-16 h-16 flex items-center justify-center shadow-2xl"
              variants={floatingVariants}
              animate="animate"
            >
              <Star className="w-8 h-8 text-white" />
            </motion.div>

            <motion.div 
              className="absolute -bottom-6 -left-6 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full w-14 h-14 flex items-center justify-center shadow-2xl"
              variants={floatingVariants}
              animate="animate"
              style={{ animationDelay: '2s' }}
            >
              <TrendingUp className="w-7 h-7 text-white" />
            </motion.div>

            <motion.div 
              className="absolute top-1/2 -right-8 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full w-12 h-12 flex items-center justify-center shadow-2xl"
              variants={floatingVariants}
              animate="animate"
              style={{ animationDelay: '4s' }}
            >
              <Zap className="w-6 h-6 text-white" />
            </motion.div>
          </motion.div>
        </div>

        {/* Achievements Section */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {achievements.map((achievement, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="text-center group"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-200 group-hover:border-indigo-300 transition-all duration-300 group-hover:shadow-xl">
                <achievement.icon className="w-12 h-12 text-indigo-500 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  {achievement.value}
                </div>
                <div className="text-sm text-gray-600">{achievement.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default SocialMediaHero;