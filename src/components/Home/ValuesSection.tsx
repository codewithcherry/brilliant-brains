"use client";

import React, { useState, useEffect } from "react";
import {
  Play,
  Award,
  Target,
  TrendingUp,
  Sparkles,
  Brain,
  Users,
  CheckCircle,
  ArrowRight,
  Star,
  Zap,
  Shield,
  Globe,
  Rocket,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const ValuesSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("values-section");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="values-section"
      className="relative bg-gradient-to-br from-slate-50 via-white to-indigo-50/30 py-20 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-indigo-300/10 to-purple-300/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-300/10 to-pink-300/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="relative z-20 max-w-4xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-full px-6 py-3 border border-indigo-100 mb-6">
            <Award className="w-5 h-5 text-indigo-600" />
            <span className="text-sm font-semibold text-indigo-700 tracking-wide">
              SPECIALIZATION
            </span>
          </div>

          <h2
            className={`text-2xl lg:text-4xl font-bold text-gray-900 leading-tight mb-6 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            Award Winning Growth
            <br />
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Marketers
            </span>
          </h2>

          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8">
              Transforming brands through strategic AI-driven marketing and
              value-focused growth strategies
            </p>
          </div>
        </div>

        {/* Values Content */}
        <div className="space-y-8">
          <div
            className={`transition-all duration-1000 delay-500 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center flex items-center justify-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center">
                <Star className="w-5 h-5 text-white" />
              </div>
              Our Values
            </h3>
          </div>

          <div className="grid grid-cols-1 gap-8">
  {/* Value 1 */}
  <Card
    className={`bg-white/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-[1.02] ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
    }`}
    style={{ transitionDelay: '0.7s' }}
  >
    <CardContent className="p-6 md:p-8">
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
        <div className="p-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl shadow-lg w-fit">
          <Brain className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
        </div>
        <div className="text-center sm:text-left space-y-2">
          <h4 className="text-xl md:text-2xl font-bold text-gray-900">
            Strategic AI-driven techniques
          </h4>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            We make use of the latest and most efficient AI-driven technology to sift through data, user search behaviour, and consumer data. These insights guide the strategic decisions that we make to build your brand & get your results!
          </p>
        </div>
      </div>
    </CardContent>
  </Card>

  {/* Value 2 */}
  <Card
    className={`bg-white/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-[1.02] ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
    }`}
    style={{ transitionDelay: '0.9s' }}
  >
    <CardContent className="p-6 md:p-8">
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
        <div className="p-4 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl shadow-lg w-fit">
          <Target className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
        </div>
        <div className="text-center sm:text-left space-y-2">
          <h4 className="text-xl md:text-2xl font-bold text-gray-900">
            Building Brands With Value
          </h4>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            We use our resources to the max to build a holistic digital presence for your brand – one that reflects your values and customer's trust. We work with your future in mind, developing value, excellence, and perfection that converts into sales!
          </p>
        </div>
      </div>
    </CardContent>
  </Card>
</div>


          {/* Stats Row */}
          <div
            className={`flex items-center justify-center gap-8 pt-8 px-2 transition-all duration-1000 delay-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="text-sm text-gray-600 font-medium">4.9/5</span>
            </div>
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md">
              <Users className="w-4 h-4 text-indigo-600" />
              <span className="text-sm text-gray-600 font-medium">
                2K+ Clients
              </span>
            </div>
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md">
              <TrendingUp className="w-4 h-4 text-green-600" />
              <span className="text-sm text-gray-600 font-medium">
                350% ROI
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const VideoSection = () => {
  const [showVideo, setShowVideo] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("video-section");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const handlePlayClick = () => {
    setShowVideo(true);
  };

  return (
    <section
      id="video-section"
      className="relative bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 py-24 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="relative z-20 max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 backdrop-blur-sm rounded-full px-6 py-3 border border-indigo-400/30 mb-6">
            <Play className="w-5 h-5 text-indigo-400" />
            <span className="text-sm font-semibold text-indigo-300 tracking-wide">
              PROMOTIONAL VIDEO
            </span>
          </div>

          <h2
            className={`text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Discover How We
            <br />
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Empower Success
            </span>
          </h2>

          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-12">
              Watch how our strategies, innovation, and commitment pave the way for
              our clients' growth. This isn't just what we do—it's how we help you
              succeed.
            </p>
          </div>
        </div>

        {/* Video Container */}
        <div
          className={`relative max-w-5xl mx-auto transition-all duration-1000 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            {!showVideo ? (
              // Video Thumbnail/Placeholder
              <div
                className="aspect-video bg-gradient-to-br from-indigo-600 to-purple-700 relative cursor-pointer group"
                onClick={handlePlayClick}
              >
                {/* Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/90 to-purple-700/90">
                  <div className="absolute inset-0 bg-black/20" />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />

                  {/* Content Overlays */}
                  <div className="absolute top-8 left-8 right-8">
                    <h3 className="text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight">
                      GET
                      <br />
                      MORE
                      <br />
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                        SALES
                      </span>
                    </h3>
                  </div>

                  <div className="absolute bottom-8 left-8 right-8">
                    <blockquote className="text-2xl lg:text-3xl font-bold text-white leading-tight">
                      "Leads. Sales.
                      <br />
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300">
                        Growth. Repeat.
                      </span>
                      "
                    </blockquote>
                  </div>

                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-sm border-4 border-white/30 flex items-center justify-center group-hover:bg-white/30 group-hover:scale-110 transition-all duration-300">
                      <Play className="w-10 h-10 text-white ml-1" />
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              // YouTube Embed with Autoplay
              <div className="aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/jOfrJUVHwuM?si=4m32H8koduvv0k_Y&autoplay=1"
                  title="Growth Marketing Video"
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            )}
          </div>

          {/* Floating Achievement Cards - with conditional animation */}
          <div className={`absolute -top-6 -right-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-md md:rounded-2xl p-1 md:p-4 shadow-xl z-20 transition-all duration-700 ${
            showVideo 
              ? 'opacity-0 scale-0 translate-y-8 pointer-events-none' 
              : 'opacity-100 scale-100 translate-y-0 animate-bounce'
          }`}>
            <div className="flex items-center gap-2 text-white">
              <CheckCircle className="w-2 h-2 md:w-4 md:h-4" />
              <div>
                <div className="text-xs md:text-sm font-bold">Proven Results</div>
                <div className="text-[8px] md:text-xs text-green-100">
                  2000+ Success Stories
                </div>
              </div>
            </div>
          </div>

          <div
            className={`absolute md:-bottom-16 md:-left-22 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl p-1 md:p-4 shadow-xl z-20 transition-all duration-700 delay-100 ${
              showVideo 
                ? 'opacity-0 scale-0 translate-y-8 pointer-events-none' 
                : 'opacity-100 scale-100 translate-y-0 animate-bounce'
            }`}
            style={{ animationDelay: showVideo ? '0s' : '1s' }}
          >
            <div className="flex items-center gap-2 text-white">
              <Award className="w-2 h-2 md:w-4 md:h-4" />
              <div>
                <div className="text-xs md:text-sm font-bold">Award Winning</div>
                <div className="text-[8px] md:text-xs text-blue-100">
                  Industry Recognition
                </div>
              </div>
            </div>
          </div>

          <div
            className={`absolute top-1/2 -right-4 md:-right-22 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-1 md:p-3 shadow-xl z-20 transition-all duration-700 delay-200 ${
              showVideo 
                ? 'opacity-0 scale-0 translate-y-8 pointer-events-none' 
                : 'opacity-100 scale-100 translate-y-0 animate-bounce'
            }`}
            style={{ animationDelay: showVideo ? '0s' : '2s' }}
          >
            <div className="flex items-center gap-2 text-white">
              <Rocket className="w-2 h-2 md:w-4 md:h-4" />
              <div className="text-xs md:text-sm font-bold">350% Growth</div>
            </div>
          </div>

          <div
            className={`absolute top-2/5 -left-6 md:-left-8 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl p-1 md:p-3 shadow-xl z-20 transition-all duration-700 delay-300 ${
              showVideo 
                ? 'opacity-0 scale-0 translate-y-8 pointer-events-none' 
                : 'opacity-100 scale-100 translate-y-0 animate-bounce'
            }`}
            style={{ animationDelay: showVideo ? '0s' : '3s' }}
          >
            <div className="flex items-center gap-1 md:gap-2 text-white">
              <Globe className="w-2 h-2 md:w-4 md:h-4" />
              <div className="text-xs md:text-sm font-bold">Global Reach</div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div
          className={`text-center mt-16 transition-all duration-1000 delay-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <Button
            className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-indigo-400/30"
            size="lg"
          >
            <Play className="w-5 h-5 mr-2" />
            Discover More Success Stories
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

// Combined Component for Demo
const CombinedSections = () => {
  return (
    <div>
      <ValuesSection />
      <VideoSection />
    </div>
  );
};

export default CombinedSections;
