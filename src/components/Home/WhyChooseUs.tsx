"use client";

import { useState } from "react";
import { Sparkles, BarChart3, Lightbulb, ShieldCheck } from "lucide-react";

interface Feature {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

interface Stat {
  value: string;
  label: string;
}

const features: Feature[] = [
  {
    icon: <Sparkles className="w-5 h-5" />,
    title: "Creative Experts",
    desc: "A blend of creativity and strategy – our team delivers experiences that convert.",
  },
  {
    icon: <BarChart3 className="w-5 h-5" />,
    title: "Data-Driven Approach",
    desc: "Every decision backed by intelligent data and real-time analytics.",
  },
  {
    icon: <Lightbulb className="w-5 h-5" />,
    title: "Tailored Strategies",
    desc: "We customize strategies for each client's unique industry and goals.",
  },
  {
    icon: <ShieldCheck className="w-5 h-5" />,
    title: "Transparent Results",
    desc: "You get full access to your performance metrics, anytime.",
  },
];

const stats: Stat[] = [
  { value: "25+", label: "Years Experience" },
  { value: "85+", label: "Experts" },
  { value: "$80M+", label: "Revenue Impact" },
];

const WhyChooseUs: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section className="bg-white py-20 px-6 sm:px-10 lg:px-20">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 text-xs font-medium text-indigo-600 bg-indigo-50 rounded-full mb-4">
            Why choose us
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-indigo-400 mb-4">
            Because we do it differently
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover what makes us the preferred choice for businesses looking for impactful digital transformation.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredCard(idx)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="bg-white border border-gray-100 rounded-xl p-6 transition-all duration-300 hover:border-indigo-200 hover:shadow-lg">
                <div className="flex items-start gap-4">
                  <div className={`p-2 rounded-lg transition-all duration-300 ${
                    hoveredCard === idx 
                      ? 'bg-indigo-600 text-white' 
                      : 'bg-gray-50 text-indigo-600'
                  }`}>
                    {feature.icon}
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {stats.map((stat, i) => (
              <div key={i} className="group">
                <div className="text-3xl md:text-4xl font-bold text-indigo-600 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500 uppercase tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default WhyChooseUs;