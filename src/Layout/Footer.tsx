'use client';

'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  Brain, Sparkles, Mail, Phone, MapPin, MessageCircle, 
  Facebook, Twitter, Instagram, Linkedin, Youtube,
  Globe, Users, TrendingUp, Award, BookOpen, Briefcase,
  Smartphone, ChevronRight, Heart, ArrowRight
} from 'lucide-react'
import { Button } from '@/components/ui/button'

const Footer = () => {
  const [hoveredSection, setHoveredSection] = useState(null)

  const quickLinks = [
    { name: 'AI Marketing Services', href: '/services', icon: TrendingUp },
    { name: 'Digital Strategy', href: '/strategy', icon: Globe },
    { name: 'Content Creation', href: '/content', icon: BookOpen },
    { name: 'Analytics & Insights', href: '/analytics', icon: Award },
    { name: 'Case Studies', href: '/case-studies', icon: Briefcase },
    { name: 'Free Consultation', href: '/consultation', icon: Users },
  ]

  const services = [
    { name: 'AI-Powered SEO', href: '/services/seo' },
    { name: 'Social Media Marketing', href: '/services/social' },
    { name: 'Content Marketing', href: '/services/content' },
    { name: 'PPC Advertising', href: '/services/ppc' },
    { name: 'Email Marketing', href: '/services/email' },
    { name: 'Brand Strategy', href: '/services/branding' },
  ]

  const industries = [
    { name: 'E-commerce', href: '/industries/ecommerce' },
    { name: 'Healthcare', href: '/industries/healthcare' },
    { name: 'Technology', href: '/industries/technology' },
    { name: 'Finance', href: '/industries/finance' },
    { name: 'Education', href: '/industries/education' },
    { name: 'Real Estate', href: '/industries/realestate' },
  ]

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#', color: 'hover:text-blue-600' },
    { name: 'Twitter', icon: Twitter, href: '#', color: 'hover:text-sky-500' },
    { name: 'Instagram', icon: Instagram, href: '#', color: 'hover:text-pink-600' },
    { name: 'LinkedIn', icon: Linkedin, href: '#', color: 'hover:text-blue-700' },
    { name: 'YouTube', icon: Youtube, href: '#', color: 'hover:text-red-600' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  }

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.08),transparent_50%)]" />
      
      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-16 pb-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
        >
          {/* Company Info */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <motion.div 
                className="p-3 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl shadow-lg"
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Brain className="w-8 h-8 text-white" />
              </motion.div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                  BrilliantBrains
                </h3>
                <div className="text-sm text-indigo-400 flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  <span>AI Marketing</span>
                </div>
              </div>
            </div>
            
            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              Transforming businesses with AI-powered marketing solutions. We help brands connect with their audience through innovative strategies and cutting-edge technology.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <motion.a
                href="mailto:hello@brilliantbrains.ai"
                className="flex items-center gap-3 text-slate-300 hover:text-indigo-400 transition-colors duration-300 group"
                whileHover={{ x: 5 }}
              >
                <div className="p-2 bg-slate-800 rounded-lg group-hover:bg-indigo-600/20 transition-colors duration-300">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="text-sm">hello@brilliantbrains.ai</span>
              </motion.a>

              <motion.a
                href="tel:+919876543210"
                className="flex items-center gap-3 text-slate-300 hover:text-indigo-400 transition-colors duration-300 group"
                whileHover={{ x: 5 }}
              >
                <div className="p-2 bg-slate-800 rounded-lg group-hover:bg-indigo-600/20 transition-colors duration-300">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="text-sm">+91 9876543210</span>
              </motion.a>

              <motion.div
                className="flex items-center gap-3 text-slate-300 group"
                whileHover={{ x: 5 }}
              >
                <div className="p-2 bg-slate-800 rounded-lg group-hover:bg-indigo-600/20 transition-colors duration-300">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="text-sm">Hyderabad, Telangana, India</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
            <div className="space-y-2">
              {quickLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link
                    href={link.href}
                    className="flex items-center gap-3 text-slate-300 hover:text-indigo-400 transition-all duration-300 group py-2"
                  >
                    <link.icon className="w-4 h-4 text-indigo-500 group-hover:text-indigo-400" />
                    <span className="text-sm group-hover:translate-x-1 transition-transform duration-300">
                      {link.name}
                    </span>
                    <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-6 text-white">Our Services</h4>
            <div className="space-y-2">
              {services.map((service, index) => (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link
                    href={service.href}
                    className="block text-slate-300 hover:text-indigo-400 transition-all duration-300 text-sm py-2 group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-300 inline-block">
                      {service.name}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-slate-700">
              <h5 className="text-sm font-medium text-slate-400 mb-3">Industries We Serve</h5>
              <div className="grid grid-cols-2 gap-1">
                {industries.map((industry) => (
                  <Link
                    key={industry.name}
                    href={industry.href}
                    className="text-xs text-slate-400 hover:text-indigo-400 transition-colors duration-300 py-1"
                  >
                    {industry.name}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-6 text-white">Get Started Today</h4>
            
            <div className="bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-2xl p-6 border border-indigo-500/20 backdrop-blur-sm mb-6">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="w-5 h-5 text-indigo-400" />
                <span className="text-sm font-medium text-indigo-400">Free Consultation</span>
              </div>
              <p className="text-sm text-slate-300 mb-4">
                Ready to transform your marketing strategy? Let's discuss how AI can boost your business growth.
              </p>
              <Link href="/consultation">
                <Button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white shadow-lg rounded-xl border-0 transition-all duration-300 group">
                  Book Free Consultation
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </Link>
            </div>

            {/* Mobile App */}
            <div className="mb-6">
              <h5 className="text-sm font-medium text-slate-400 mb-3 flex items-center gap-2">
                <Smartphone className="w-4 h-4" />
                Mobile App
              </h5>
              <p className="text-xs text-slate-400 mb-3">
                Access our AI marketing tools on the go. Download our app for real-time insights and campaign management.
              </p>
              <div className="flex gap-2">
                <Link href="#" className="flex-1">
                  <Button variant="outline" className="w-full text-xs py-2 bg-slate-800 border-slate-600 text-slate-300 hover:bg-slate-700 rounded-lg">
                    App Store
                  </Button>
                </Link>
                <Link href="#" className="flex-1">
                  <Button variant="outline" className="w-full text-xs py-2 bg-slate-800 border-slate-600 text-slate-300 hover:bg-slate-700 rounded-lg">
                    Google Play
                  </Button>
                </Link>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h5 className="text-sm font-medium text-slate-400 mb-3">Follow Us</h5>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    className={`p-2 bg-slate-800 rounded-lg text-slate-400 ${social.color} transition-all duration-300 hover:scale-110`}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className="w-4 h-4" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="border-t border-slate-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <div className="flex items-center gap-2 text-sm text-slate-400">
            <span>© 2025 BrilliantBrains. All rights reserved.</span>
            <div className="flex items-center gap-1 text-indigo-400">
              <Heart className="w-3 h-3" />
              <span className="text-xs">Made with AI for businesses worldwide</span>
            </div>
          </div>
          
          <div className="flex items-center gap-6 text-sm">
            <Link href="/about" className="text-slate-400 hover:text-indigo-400 transition-colors duration-300">
              About Us
            </Link>
            <Link href="/privacy" className="text-slate-400 hover:text-indigo-400 transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-slate-400 hover:text-indigo-400 transition-colors duration-300">
              Terms of Service
            </Link>
            <Link href="/sitemap" className="text-slate-400 hover:text-indigo-400 transition-colors duration-300">
              Sitemap
            </Link>
          </div>
        </motion.div>

        {/* WhatsApp Float Button (matches navbar) */}
        <motion.a
          href="https://wa.me/919876543210"
          target="_blank"
          className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-green-500 to-green-600 text-white p-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 lg:hidden"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, type: "spring", bounce: 0.3 }}
        >
          <MessageCircle className="w-6 h-6" />
        </motion.a>
      </div>
    </footer>
  )
}

export default Footer