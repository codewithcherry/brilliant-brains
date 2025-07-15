"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, BarChart3, Lightbulb, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  {
    icon: <Sparkles className="text-indigo-600 w-6 h-6" />,
    title: "Creative Experts",
    desc: "A blend of creativity and strategy – our team delivers experiences that convert.",
  },
  {
    icon: <BarChart3 className="text-indigo-600 w-6 h-6" />,
    title: "Data-Driven Approach",
    desc: "Every decision backed by intelligent data and real-time analytics.",
  },
  {
    icon: <Lightbulb className="text-indigo-600 w-6 h-6" />,
    title: "Tailored Strategies",
    desc: "We customize strategies for each client’s unique industry and goals.",
  },
  {
    icon: <ShieldCheck className="text-indigo-600 w-6 h-6" />,
    title: "Transparent Results",
    desc: "You get full access to your performance metrics, anytime.",
  },
];

const stats = [
  { value: "25+", label: "Years Experience" },
  { value: "85+", label: "Experts" },
  { value: "$80M+", label: "Revenue Impact" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.2 },
  },
};

const WhyChooseUs: FC = () => {
  return (
    <section className="relative bg-indigo-50 overflow-hidden py-24 px-6 sm:px-10 lg:px-24">
      {/* Floating particles */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-indigo-300 opacity-30 rounded-full animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${3 + Math.random() * 3}s`,
              animationDelay: `${Math.random()}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center mb-14"
        >
          <Badge className="bg-indigo-100 text-indigo-700 mb-4 text-sm font-medium">
            Why choose us
          </Badge>
          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 tracking-tight">
            Because we do it differently
          </h2>

          <p className="mt-4 text-base md:text-lg text-gray-600 max-w-xl mx-auto">
            Discover what makes us the preferred choice for businesses looking
            for impactful digital transformation.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {features.map((f, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              className="group transition duration-300 hover:scale-[1.02]"
            >
              <Card className="bg-white/70 backdrop-blur border border-indigo-100 shadow-xl transition duration-300 hover:shadow-2xl rounded-2xl">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="bg-indigo-100 rounded-full p-2">{f.icon}</div>
                  <div>
                    <h3 className="text-lg font-semibold text-indigo-900 mb-1">
                      {f.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-snug">
                      {f.desc}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="flex flex-wrap justify-center gap-6 md:gap-12"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={stagger}
        >
          {stats.map((s, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="text-center px-6 py-4 border border-indigo-100 rounded-xl bg-white/60 backdrop-blur shadow"
            >
              <div className="text-3xl font-bold text-indigo-700">
                {s.value}
              </div>
              <div className="text-sm text-gray-600">{s.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
