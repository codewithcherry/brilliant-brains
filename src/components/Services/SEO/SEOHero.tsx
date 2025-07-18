'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
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
  Star
} from 'lucide-react';

const SEOHero: React.FC = () => {
  const features = [
    {
      icon: Search,
      title: 'AI-Powered Keywords',
      description: 'Advanced keyword research with machine learning insights',
      color: 'from-emerald-500 to-teal-600'
    },
    {
      icon: TrendingUp,
      title: 'Traffic Acceleration',
      description: 'Proven strategies for exponential organic growth',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      icon: Target,
      title: 'Competitor Intelligence',
      description: 'Strategic analysis and competitive advantage',
      color: 'from-purple-500 to-violet-600'
    },
    {
      icon: BarChart3,
      title: 'Real-Time Analytics',
      description: 'Comprehensive performance tracking & insights',
      color: 'from-orange-500 to-red-600'
    }
  ];

  const stats = [
    { value: '500+', label: 'Projects Completed', icon: Shield },
    { value: '150%', label: 'Traffic Boost', icon: TrendingUp },
    { value: '95%', label: 'Client Satisfaction', icon: Star },
    { value: '24/7', label: 'Support Available', icon: Users }
  ];

  const benefits = [
    'AI-enhanced search engine optimization',
    'Cutting-edge ML algorithms for SEO',
    'Improved website visibility & rankings',
    'Enhanced user engagement metrics',
    'Sustainable long-term growth strategy'
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent"></div>
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-10 w-80 h-80 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-gradient-to-r from-pink-200 to-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
        
        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-pulse opacity-60"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-purple-400 rounded-full animate-pulse opacity-40 animation-delay-1000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-pink-400 rounded-full animate-pulse opacity-50 animation-delay-2000"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-3">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-4">
            {/* Enhanced Badge */}
            <div className="animate-fade-in">
              <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 text-white border-0 px-6 py-3 text-sm font-semibold rounded-full shadow-lg">
                <Award className="w-4 h-4 mr-2" />
                #1 SEO Agency in India
                <Sparkles className="w-4 h-4 ml-2 animate-pulse" />
              </Badge>
            </div>

            {/* Enhanced Main Heading */}
            <div className="space-y-3 animate-fade-in-up">
              <h1 className="text-3xl md:text-4xl lg:text-4xl font-bold text-gray-900 leading-tight">
                Search Engine{' '}
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent relative">
                  Optimization
                  <div className="absolute -bottom-4 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600 transform scale-x-0 animate-scale-x rounded-full"></div>
                </span>
              </h1>
              
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-700">
                Best SEO Agency in India
              </h2>
            </div>

            {/* Enhanced Description */}
            <div className="space-y-6 animate-fade-in-up animation-delay-200">
              <p className="text-base text-gray-600 leading-relaxed">
                The best SEO Agency in India practices <span className="font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">AI-enhanced search engine optimization</span> and 
                marketing to represent cutting-edge approaches to search engine optimization, 
                leveraging the power of AI/ML to improve website visibility and drive organic traffic.
              </p>
              
              <p className="text-base text-gray-500 leading-relaxed">
                This innovative technology utilises algorithms and data analysis to identify keyword 
                trends, analyse competitor strategies, and generate content recommendations for a 
                business. This enables businesses to develop highly targeted and relevant content that 
                resonates with their target audience.
              </p>
            </div>

            {/* Enhanced Benefits List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 animate-fade-in-up animation-delay-400">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-4 group">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-full p-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700 text-sm group-hover:text-gray-900 transition-colors duration-200">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>


            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-600">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-4 rounded-xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 group border-0"
              >
                Get Free SEO Audit
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300"
              >
                View Our Work
              </Button>
            </div>
            
          </div>

          {/* Enhanced Right Content */}
          <div className="relative animate-fade-in-up animation-delay-300 mt-10 md:mt-0">
            <div className="relative bg-white rounded-3xl shadow-2xl p-2 transform hover:scale-105 transition-all duration-500 border border-gray-200">
              {/* Enhanced SEO Illustration */}
              <div className="relative">
                <div className="m-6">
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl p-4 text-center shadow-lg transform hover:scale-105 transition-transform duration-300">
                      <div className="text-xs font-bold text-white mb-2">RANKING</div>
                      <TrendingUp className="w-6 h-6 text-white mx-auto" />
                    </div>
                    <div className="bg-gradient-to-r from-emerald-400 to-teal-500 rounded-xl p-4 text-center shadow-lg transform hover:scale-105 transition-transform duration-300">
                      <div className="text-xs font-bold text-white mb-2">KEYWORDS</div>
                      <Search className="w-6 h-6 text-white mx-auto" />
                    </div>
                    <div className="bg-gradient-to-r from-pink-400 to-purple-500 rounded-xl p-4 text-center shadow-lg transform hover:scale-105 transition-transform duration-300">
                      <div className="text-xs font-bold text-white mb-2">CONTENT</div>
                      <MousePointer className="w-6 h-6 text-white mx-auto" />
                    </div>
                  </div>
                  
                  {/* Enhanced Central SEO Text */}
                  <div className="text-center bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                    <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">SEO</h3>
                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg p-3 transform hover:scale-105 transition-transform duration-300">
                        <span className="text-white font-semibold">WEB</span>
                      </div>
                      <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg p-3 transform hover:scale-105 transition-transform duration-300">
                        <span className="text-white font-semibold">TRAFFIC</span>
                      </div>
                      <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg p-3 transform hover:scale-105 transition-transform duration-300">
                        <span className="text-white font-semibold">ANALYTICS</span>
                      </div>
                      <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-lg p-3 transform hover:scale-105 transition-transform duration-300">
                        <span className="text-white font-semibold">OPTIMIZE</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Enhanced Decorative Elements */}
                <div className="absolute -top-16 -right-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full w-12 h-12 flex items-center justify-center shadow-lg animate-pulse">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full w-12 h-12 flex items-center justify-center shadow-lg animate-pulse animation-delay-1000">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <div className="absolute top-1/2 -right-8 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full w-10 h-10 flex items-center justify-center shadow-lg animate-pulse animation-delay-2000">
                  <Eye className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>

            {/* Enhanced Floating Feature Cards */}
            <div className="absolute -left-4 md:-left-12  -top-14 md:-top-22 animate-float">
              <Card className="bg-white border-gray-200 shadow-xl">
                <CardContent className="md:p-2">
                  <div className="flex items-center space-x-3">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-full md:p-2">
                      <Users className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm text-gray-900">User Engagement</div>
                      <div className="text-xs text-green-600">+47% increase</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="absolute  -right-4 md:-right-12 -bottom-14 md:-bottom-22 animate-float animation-delay-1000">
              <Card className="bg-white border-gray-200 shadow-xl">
                <CardContent className="md:p-2">
                  <div className="flex items-center space-x-3">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full md:p-2">
                      <BarChart3 className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm text-gray-900">Organic Traffic</div>
                      <div className="text-xs text-green-600">+125% growth</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Enhanced Stats */}
        <div className="flex flex-row justify-center w-full mx-auto gap-2 md:gap-8 mt-10 pt-8 animate-fade-in-up animation-delay-800">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group w-1/4">
                  <div className="bg-white rounded-2xl p-4 shadow-lg border border-gray-200 group-hover:border-blue-300 transition-all duration-300 group-hover:shadow-xl">
                    <stat.icon className="w-8 h-8 text-blue-500 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                    <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{stat.value}</div>
                    <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
                  </div>
                </div>
              ))}
          </div>

        {/* Enhanced Feature Cards */}
        <div className="mt-24 grid md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in-up animation-delay-1000">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-500 bg-white border-gray-200 hover:border-blue-300 transform hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className={`bg-gradient-to-r ${feature.color} rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-xl text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Enhanced Custom Animations */}
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(3deg);
          }
        }
        
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes scale-x {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
        
        .animate-fade-in-up {
          animation: fade-in 1s ease-out;
        }
        
        .animate-scale-x {
          animation: scale-x 1s ease-out 0.8s both;
        }
        
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        
        .animation-delay-400 {
          animation-delay: 0.4s;
        }
        
        .animation-delay-600 {
          animation-delay: 0.6s;
        }
        
        .animation-delay-800 {
          animation-delay: 0.8s;
        }
        
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default SEOHero;