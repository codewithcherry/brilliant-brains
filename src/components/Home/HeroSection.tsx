'use client';

import React, { useState, useEffect } from 'react'
import { 
  Star, Users, TrendingUp, Award, ArrowRight, Play, 
  Sparkles, Brain, Target, Zap, CheckCircle, MessageCircle,
  Phone, Calendar, ChevronDown, Globe, Rocket, Shield
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'

const HeroSection = () => {
  const [currentStat, setCurrentStat] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [ratingAnimation, setRatingAnimation] = useState(false)
  const [visibleStars, setVisibleStars] = useState(0)

  const stats = [
    { number: '2K+', label: 'Happy Customers', icon: Users, color: 'from-blue-500 to-cyan-500' },
    { number: '98%', label: 'Success Rate', icon: TrendingUp, color: 'from-green-500 to-emerald-500' },
    { number: '4.8★', label: 'Average Rating', icon: Star, color: 'from-amber-500 to-orange-500' },
    { number: '24/7', label: 'Support', icon: Award, color: 'from-purple-500 to-pink-500' }
  ]

  const features = [
    'AI-Powered Lead Generation',
    'Data-Driven Growth Strategies',
    '360° Marketing Support',
    'ROI-Focused Campaigns'
  ]

  const floatingElements = [
    { icon: Brain, delay: 0, duration: 3 },
    { icon: Target, delay: 1, duration: 4 },
    { icon: Zap, delay: 2, duration: 3.5 },
    { icon: Sparkles, delay: 0.5, duration: 2.5 }
  ]

  const achievements = [
    { icon: Globe, text: 'Global Reach', value: '50+' },
    { icon: Rocket, text: 'Growth Rate', value: '300%' },
    { icon: Shield, text: 'Guaranteed', value: 'ROI' }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e:any) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      setRatingAnimation(true)
      let starCount = 0
      const starInterval = setInterval(() => {
        setVisibleStars(prev => {
          starCount++
          if (starCount >= 5) {
            clearInterval(starInterval)
          }
          return starCount
        })
      }, 200)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-white to-indigo-50/30 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-r from-indigo-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-r from-purple-400/15 to-pink-400/15 rounded-full blur-3xl animate-pulse" 
             style={{ animationDelay: '1s' }} />
        
        {/* Floating Icons */}
        {floatingElements.map((element, index) => {
          const IconComponent = element.icon
          return (
            <div
              key={index}
              className="absolute text-indigo-300/30 animate-bounce"
              style={{
                left: `${20 + (index * 25)}%`,
                top: `${20 + (index * 15)}%`,
                animationDelay: `${element.delay}s`,
                animationDuration: `${element.duration}s`
              }}
            >
              <IconComponent className="w-8 h-8" />
            </div>
          )
        })}

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      {/* Mouse Follower */}
      <div
        className="absolute w-6 h-6 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full blur-sm opacity-20 pointer-events-none z-10 transition-all duration-100"
        style={{
          left: mousePosition.x - 16,
          top: mousePosition.y - 16
        }}
      />

      <div className="relative z-20 max-w-7xl mx-auto px-6 ">
        <div className="grid lg:grid-cols-2 gap-8 items-center min-h-[90vh]">
          
          {/* Left Content */}
          <div className="animate-fade-in">
            {/* Badge */}
            <div className="mb-4">
              <Badge className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white border-0 px-4 py-2 text-sm font-medium shadow-lg">
                <Award className="w-4 h-4 mr-2" />
                #1 Growth Marketing Agency
              </Badge>
            </div>

            {/* Main Headline */}
            <h1 className="text-2xl md:text2xl lg:text-3xl xl:text-4xl font-bold leading-tight mb-4">
              <span className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent">
                Top Rated
              </span>
              <br />
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                AI Digital Marketing
              </span>
              <br />
              <span className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent">
                Experts For Lead
              </span>
              <br />
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Generation & Growth
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg text-slate-600 leading-relaxed mb-6 max-w-2xl">
              We are a team of growth specialists helping brands exceed targets, drive sales, and 
              generate leads through tailored strategies & 360° support.
            </p>

            {/* Features List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
              {features.map((feature, index) => (
                <div
                  key={feature}
                  className="flex items-center gap-3 text-sm text-slate-600 animate-fade-in py-1"
                  style={{ animationDelay: `${0.1 * index}s` }}
                >
                  <div className="w-5 h-5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-3 h-3 text-white" />
                  </div>
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <Button 
                className="rounded-xl shadow-lg hover:shadow-xl group bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white transform hover:scale-105"
                size="lg"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Get Free Consultation
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              
              <Button 
                variant="outline" 
                className="rounded-xl group hover:scale-105 border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50"
                size="lg"
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </Button>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row gap-4 text-sm text-slate-600">
              <a href="tel:+919876543210" className="flex items-center gap-2 hover:text-indigo-600 transition-colors duration-300">
                <Phone className="w-4 h-4" />
                +91 9876543210
              </a>
              <a href="https://wa.me/919876543210" className="flex items-center gap-2 hover:text-green-600 transition-colors duration-300">
                <MessageCircle className="w-4 h-4" />
                WhatsApp Now
              </a>
            </div>
          </div>

          {/* Right Content - Enhanced Stats & Visual */}
          <div className="relative flex items-center justify-center">
            {/* Main Stats Card */}
            <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-2xl rounded-3xl overflow-hidden relative z-10 transform hover:scale-105 transition-all duration-500">
              <CardContent className="p-8">
                {/* Rating Section */}
                <div className="text-center mb-8">
                  <div className="mb-4">
                    <div className="flex justify-center gap-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-8 h-8 transition-all duration-300 ${
                            i < visibleStars 
                              ? 'text-amber-400 fill-amber-400 transform scale-110' 
                              : 'text-gray-300'
                          }`}
                          style={{ 
                            animationDelay: `${i * 0.2}s`,
                            transform: i < visibleStars ? 'scale(1.1) rotate(10deg)' : 'scale(1)'
                          }}
                        />
                      ))}
                    </div>
                    
                    <div className="relative">
                      <div className="text-6xl font-bold bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent mb-2 animate-pulse">
                        4.8
                      </div>
                      <div className="text-slate-600 text-sm font-medium">Based on 2,000+ reviews</div>
                      
                      {/* Animated rating bar */}
                      <div className="mt-3 bg-gray-200 rounded-full h-2 overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-amber-500 to-orange-500 rounded-full transition-all duration-2000 ease-out"
                          style={{ 
                            width: ratingAnimation ? '96%' : '0%',
                            transition: 'width 2s ease-out'
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Dynamic Stats */}
                <div className="text-center mb-6">
                  <div className="inline-flex items-center gap-4 p-4 bg-gradient-to-r from-gray-50 to-indigo-50 rounded-2xl">
                    <div className={`p-3 bg-gradient-to-r ${stats[currentStat].color} rounded-full shadow-lg transition-all duration-500 transform hover:scale-110`}>
                      {React.createElement(stats[currentStat].icon, { className: "w-6 h-6 text-white" })}
                    </div>
                    <div>
                      <div className="text-4xl font-bold text-slate-800 transition-all duration-300">
                        {stats[currentStat].number}
                      </div>
                      <div className="text-sm text-slate-600 font-medium">
                        {stats[currentStat].label}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Achievement Badges */}
                <div className="grid grid-cols-3 gap-3">
                  {achievements.map((achievement, index) => (
                    <div 
                      key={index}
                      className="text-center p-3 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                    >
                      <div className="mb-2 flex justify-center">
                        <div className="p-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg">
                          <achievement.icon className="w-4 h-4 text-white" />
                        </div>
                      </div>
                      <div className="text-lg font-bold text-slate-800">{achievement.value}</div>
                      <div className="text-xs text-slate-600">{achievement.text}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Enhanced Floating Mini Cards */}
            <div className="absolute -top-8 -right-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl p-4 shadow-xl border-2 border-green-200 animate-bounce z-20">
              <div className="flex items-center gap-2 text-white">
                <div className="w-4 h-4 bg-white rounded-full animate-pulse flex items-center justify-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                </div>
                <span className="text-sm font-bold">Live Analytics</span>
              </div>
              <div className="text-xs text-green-100 mt-1">Real-time tracking</div>
            </div>

            <div className="absolute -bottom-8 -left-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl p-4 shadow-xl text-white animate-bounce z-20"
                 style={{ animationDelay: '1s' }}>
              <div className="flex items-center gap-2 mb-1">
                <TrendingUp className="w-5 h-5" />
                <span className="text-sm font-bold">ROI +350%</span>
              </div>
              <div className="text-xs text-blue-100">Average increase</div>
            </div>

            <div className="absolute top-1/2 -left-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-3 shadow-xl text-white animate-bounce z-20"
                 style={{ animationDelay: '2s' }}>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-bold">AI-Powered</span>
              </div>
            </div>

            {/* Enhanced Decorative Elements */}
            <div className="absolute -top-16 -left-16 w-32 h-32 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-2xl animate-pulse" />
            <div className="absolute -bottom-12 -right-12 w-40 h-40 bg-gradient-to-r from-indigo-400/20 to-blue-400/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }} />
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-2">
          <div className="flex flex-col items-center gap-2 text-slate-400 cursor-pointer hover:text-indigo-600 transition-colors duration-300 animate-bounce">
            <span className="text-sm">Scroll to explore</span>
            <ChevronDown className="w-5 h-5" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection