'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Brain, Zap, Code, Database, Sparkles } from 'lucide-react';

const InfiniteScrollReviews = () => {
  const reviews = [
    {
      name: "Sarah Chen",
      role: "CTO",
      company: "TechFlow Solutions",
      rating: 5,
      text: "Brilliant Brains revolutionized our entire tech stack with their AI-powered solutions. The neural network they implemented increased our processing efficiency by 300%. Absolutely phenomenal work!",
      date: "2 days ago",
      avatar: "SC",
      color: "from-violet-600 to-purple-700",
      projectType: "AI Integration",
      icon: <Brain className="w-3 h-3" />
    },
    {
      name: "Marcus Rodriguez",
      role: "Founder & CEO",
      company: "InnovateLab",
      rating: 5,
      text: "The team at Brilliant Brains doesn't just deliver code - they deliver transformation. Their blockchain implementation helped us secure $50M in Series B funding. Game-changing expertise!",
      date: "5 days ago",
      avatar: "MR",
      color: "from-cyan-600 to-blue-700",
      projectType: "Blockchain",
      icon: <Database className="w-3 h-3" />
    },
    {
      name: "Dr. Elena Vasquez",
      role: "Head of Innovation",
      company: "MedTech Dynamics",
      rating: 5,
      text: "Working with Brilliant Brains on our healthcare AI platform was extraordinary. Their deep learning algorithms now help diagnose conditions 40% faster than traditional methods.",
      date: "1 week ago",
      avatar: "EV",
      color: "from-emerald-600 to-teal-700",
      projectType: "Healthcare AI",
      icon: <Brain className="w-3 h-3" />
    },
    {
      name: "James Thompson",
      role: "VP of Engineering",
      company: "QuantumSoft",
      rating: 5,
      text: "The quantum computing simulation they built for us is absolutely mind-blowing. Brilliant Brains pushed the boundaries of what we thought was possible in our industry.",
      date: "3 days ago",
      avatar: "JT",
      color: "from-amber-600 to-orange-700",
      projectType: "Quantum Computing",
      icon: <Zap className="w-3 h-3" />
    },
    {
      name: "Priya Patel",
      role: "Chief Data Officer",
      company: "DataVision Corp",
      rating: 5,
      text: "Their machine learning models transformed our data analytics capabilities. We're now processing petabytes of data in real-time with 99.9% accuracy. Incredible engineering prowess!",
      date: "4 days ago",
      avatar: "PP",
      color: "from-rose-600 to-pink-700",
      projectType: "ML Analytics",
      icon: <Database className="w-3 h-3" />
    },
    {
      name: "Alex Kim",
      role: "Technical Director",
      company: "CyberSecure Pro",
      rating: 5,
      text: "Brilliant Brains developed an AI-powered cybersecurity system that detected and prevented 99.8% of potential threats. Their expertise in neural networks is unmatched.",
      date: "6 days ago",
      avatar: "AK",
      color: "from-indigo-600 to-purple-700",
      projectType: "Cybersecurity",
      icon: <Code className="w-3 h-3" />
    },
    {
      name: "Rachel Morrison",
      role: "Product Manager",
      company: "FintechFlow",
      rating: 5,
      text: "The algorithmic trading platform they built uses advanced AI to optimize our portfolio performance. We've seen 250% improvement in trading accuracy since implementation.",
      date: "1 week ago",
      avatar: "RM",
      color: "from-teal-600 to-cyan-700",
      projectType: "FinTech AI",
      icon: <Brain className="w-3 h-3" />
    },
    {
      name: "David Wilson",
      role: "R&D Director",
      company: "RoboTech Industries",
      rating: 5,
      text: "Their robotics AI integration is phenomenal. Our manufacturing robots now operate with human-like precision and adaptability. Brilliant Brains truly lives up to their name!",
      date: "2 weeks ago",
      avatar: "DW",
      color: "from-slate-600 to-gray-700",
      projectType: "Robotics",
      icon: <Zap className="w-3 h-3" />
    },
    {
      name: "Lisa Zhang",
      role: "Innovation Lead",
      company: "CloudNine Systems",
      rating: 5,
      text: "The cloud infrastructure they designed scales seamlessly with our growth. Their serverless architecture handles millions of requests with zero downtime. Absolutely brilliant execution!",
      date: "3 days ago",
      avatar: "LZ",
      color: "from-blue-600 to-indigo-700",
      projectType: "Cloud Architecture",
      icon: <Database className="w-3 h-3" />
    },
    {
      name: "Michael Brown",
      role: "CEO",
      company: "VisionTech AI",
      rating: 5,
      text: "Brilliant Brains developed a computer vision system that revolutionized our quality control process. 99.7% accuracy in defect detection - this is the future of manufacturing!",
      date: "5 days ago",
      avatar: "MB",
      color: "from-purple-600 to-violet-700",
      projectType: "Computer Vision",
      icon: <Brain className="w-3 h-3" />
    },
    {
      name: "Jennifer Park",
      role: "Head of AI",
      company: "NeuralNet Solutions",
      rating: 5,
      text: "Their natural language processing models understand context better than any solution we've tested. Customer satisfaction increased by 180% after implementing their chatbot system.",
      date: "1 week ago",
      avatar: "JP",
      color: "from-green-600 to-emerald-700",
      projectType: "NLP",
      icon: <Code className="w-3 h-3" />
    },
    {
      name: "Robert Singh",
      role: "CTO",
      company: "EdgeCompute Labs",
      rating: 5,
      text: "The edge computing solution they architected processes data at lightning speed. Latency reduced by 90% while maintaining enterprise-grade security. Exceptional technical mastery!",
      date: "4 days ago",
      avatar: "RS",
      color: "from-orange-600 to-red-700",
      projectType: "Edge Computing",
      icon: <Zap className="w-3 h-3" />
    }
  ];

  const ReviewCard = ({ review }) => (
    <Card className="group relative overflow-hidden backdrop-blur-sm bg-white/80 border-0 shadow-lg hover:shadow-2xl transition-all duration-700 ease-out hover:-translate-y-2 rounded-3xl will-change-transform">
      <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/10 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      
      <CardContent className="px-4 relative z-10">
        <div className="flex items-center gap-4 mb-2">
          <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${review.color} flex items-center justify-center text-white font-bold text-sm shadow-xl shadow-black/20 group-hover:scale-110 transition-transform duration-500 ease-out`}>
            {review.avatar}
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-bold text-gray-900 text-lg mb-1 truncate">{review.name}</h3>
            <p className="text-transparent bg-clip-text bg-gradient-to-r from-gray-600 to-gray-800 text-sm font-semibold truncate">{review.role}</p>
            <p className="text-gray-500 text-sm truncate">{review.company}</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3 mb-2">
          <div className="flex text-amber-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-current drop-shadow-sm" />
            ))}
          </div>
          <span className="text-gray-700 text-sm font-semibold">{review.rating}.0</span>
        </div>
        
        <p className="text-gray-700 leading-relaxed mb-2 text-sm line-clamp-4 font-medium">
          {review.text}
        </p>
        
        <div className="flex items-center justify-between">
          <span className="text-gray-400 text-xs font-medium">{review.date}</span>
          <Badge className={`bg-gradient-to-r ${review.color} text-white border-0 text-xs gap-1.5 px-4 py-1.5 rounded-full font-semibold shadow-lg shadow-black/20 hover:shadow-xl transition-shadow duration-300`}>
            {review.icon}
            <span className="hidden sm:inline">{review.projectType}</span>
          </Badge>
        </div>
      </CardContent>
    </Card>
  );

  const ScrollingColumn = ({ reviews, direction, delay }) => {
    const duplicatedReviews = [...reviews, ...reviews, ...reviews, ...reviews];
    
    return (
      <div className="relative h-full overflow-hidden">
        <div 
          className="flex flex-col gap-6 sm:gap-8"
          style={{
            transform: direction === 'up' ? 'translateY(0)' : 'translateY(-25%)',
            animation: `scroll-${direction} 80s linear infinite`,
            animationDelay: `${delay}s`,
            willChange: 'transform'
          }}
        >
          {duplicatedReviews.map((review, index) => (
            <ReviewCard key={`${review.name}-${index}`} review={review} />
          ))}
        </div>
      </div>
    );
  };

  const column1Reviews = reviews.slice(0, 4);
  const column2Reviews = reviews.slice(4, 8);
  const column3Reviews = reviews.slice(8, 12);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 text-gray-800 overflow-hidden relative">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-cyan-400/20 to-teal-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-violet-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }} />
      </div>
      
      <style jsx>{`
        @keyframes scroll-up {
          0% { transform: translateY(0); }
          100% { transform: translateY(-25%); }
        }
        
        @keyframes scroll-down {
          0% { transform: translateY(-25%); }
          100% { transform: translateY(0); }
        }
        
        .line-clamp-4 {
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600/10 to-purple-600/10 backdrop-blur-sm border border-blue-200/30 rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-700">Client Success Stories</span>
          </div>
          
          <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-4xl font-bold mb-3 bg-gradient-to-r from-slate-800 via-blue-700 to-purple-800 bg-clip-text text-transparent leading-tight">
            Transforming Businesses
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Through Innovation
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl lg:max-w-4xl mx-auto mb-4 sm:mb-8 px-4 leading-relaxed">
            Discover how <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-bold">Brilliant Brains</span> transforms businesses through cutting-edge AI solutions and revolutionary technology implementations
          </p>
          
          {/* Enhanced Stats */}
          <div className="grid grid-cols-3 sm:grid-cols-3 gap-4 sm:gap-8 lg:gap-20 mt-6 sm:mt-8 max-w-4xl mx-auto">
            <div className="text-center group">
              <div className="relative">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">
                  500+
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="text-gray-600 text-sm font-semibold uppercase tracking-wide">Projects Delivered</div>
            </div>
            <div className="text-center group">
              <div className="relative">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">
                  98%
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-teal-600/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="text-gray-600 text-sm font-semibold uppercase tracking-wide">Client Satisfaction</div>
            </div>
            <div className="text-center group">
              <div className="relative">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">
                  50+
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 to-red-600/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="text-gray-600 text-sm font-semibold uppercase tracking-wide">Countries Served</div>
            </div>
          </div>
        </div>
        
        {/* Reviews Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 h-[65vh] sm:h-[75vh] lg:h-[80vh]">
          {/* Mobile: Single Column */}
          <div className="lg:hidden">
            <ScrollingColumn 
              reviews={reviews} 
              direction="up" 
              delay={0}
            />
          </div>
          
          {/* Desktop: Three Columns */}
          <div className="hidden lg:block">
            <ScrollingColumn 
              reviews={column1Reviews} 
              direction="up" 
              delay={0}
            />
          </div>
          <div className="hidden lg:block">
            <ScrollingColumn 
              reviews={column2Reviews} 
              direction="down" 
              delay={-25}
            />
          </div>
          <div className="hidden lg:block">
            <ScrollingColumn 
              reviews={column3Reviews} 
              direction="up" 
              delay={-50}
            />
          </div>
        </div>
        
        {/* Enhanced Bottom CTA */}
        <div className="text-center mt-12 sm:mt-16">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600/10 to-purple-600/10 backdrop-blur-sm border border-blue-200/30 rounded-full px-6 py-3 shadow-lg">
            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-gray-700">
              • Real client testimonials • 24/7 innovation
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfiniteScrollReviews;