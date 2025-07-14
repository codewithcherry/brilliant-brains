'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  Home, User, Briefcase, BookOpen, Mail, Phone, MessageCircle, Sparkles, Brain, Menu, X
} from 'lucide-react'
import { Button } from '@/components/ui/button'

const navItems = [
  { name: 'Home', icon: Home, href: '/' },
  { name: 'About', icon: User, href: '/about' },
  { name: 'Services', icon: Briefcase, href: '/services' },
  { name: 'Blog', icon: BookOpen, href: '/blog' },
  { name: 'Contact', icon: Mail, href: '/contact' },
]

const Navbar = () => {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = (href: string) => pathname === href

  return (
    <>
      {/* Top Navbar */}
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-xl shadow-lg border-b border-slate-200/50'
            : 'bg-gradient-to-r from-slate-50/90 via-white/90 to-slate-50/90 backdrop-blur-xl'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="flex items-center justify-between h-18">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <motion.div 
                className="relative p-2.5 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-400 to-purple-400 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                <Brain className="w-6 h-6 text-white relative z-10" />
              </motion.div>
              <div className="leading-tight">
                <h1 className="text-xl font-bold tracking-tight bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                  BrilliantBrains
                </h1>
                <div className="text-xs text-indigo-600 flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  <span className="font-medium">AI Marketing</span>
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex gap-1">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className={`relative px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 group ${
                      isActive(item.href)
                        ? 'text-white'
                        : 'text-slate-600 hover:text-indigo-600'
                    }`}
                  >
                    {isActive(item.href) && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl shadow-lg"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    {!isActive(item.href) && (
                      <div className="absolute inset-0 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    )}
                    <span className="relative z-10">{item.name}</span>
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex gap-3">
              <Link href="tel:+919876543210">
                <Button 
                  variant="ghost" 
                  className="text-slate-600 hover:text-indigo-600 hover:bg-indigo-50/50 rounded-xl border border-transparent hover:border-indigo-200/50 transition-all duration-300"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  +91 9876543210
                </Button>
              </Link>
              <Link href="https://wa.me/919876543210" target="_blank">
                <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl rounded-xl border-0 transition-all duration-300">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="lg:hidden p-2 rounded-xl text-slate-600 hover:text-indigo-600 hover:bg-indigo-50/50 transition-all duration-300"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: isMobileMenuOpen ? 1 : 0,
            height: isMobileMenuOpen ? 'auto' : 0
          }}
          transition={{ duration: 0.3 }}
          className="lg:hidden overflow-hidden border-t border-slate-200/50"
        >
          <div className="px-6 py-4 bg-white/95 backdrop-blur-xl">
            <div className="space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                    isActive(item.href)
                      ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
                      : 'text-slate-600 hover:text-indigo-600 hover:bg-indigo-50/50'
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-slate-200/50 space-y-2">
              <Link href="tel:+919876543210" className="block">
                <Button 
                  variant="ghost" 
                  className="w-full justify-start text-slate-600 hover:text-indigo-600 hover:bg-indigo-50/50 rounded-xl"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  +91 9876543210
                </Button>
              </Link>
              <Link href="https://wa.me/919876543210" target="_blank" className="block">
                <Button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white shadow-lg rounded-xl">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </motion.header>

      {/* Enhanced Mobile Bottom Navigation */}
      <motion.nav
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-t border-slate-200/50 shadow-2xl"
      >
        <div className="grid grid-cols-5 px-4 py-3">
          {navItems.map((item, index) => {
            const active = isActive(item.href)
            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className="flex flex-col items-center justify-center text-sm group"
                >
                  <motion.div
                    className={`relative p-2.5 rounded-xl transition-all duration-300 ${
                      active
                        ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
                        : 'text-slate-500 group-hover:text-indigo-600 group-hover:bg-indigo-50/50'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {active && (
                      <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-xl opacity-20 animate-pulse" />
                    )}
                    <item.icon className="w-5 h-5 relative z-10" />
                  </motion.div>
                  <span className={`mt-1 text-xs font-medium transition-colors duration-300 ${
                    active ? 'text-indigo-600' : 'text-slate-500 group-hover:text-indigo-600'
                  }`}>
                    {item.name}
                  </span>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </motion.nav>

      {/* Enhanced Floating Call Button */}
      <motion.a
        href="tel:+919876543210"
        className="lg:hidden fixed bottom-24 right-4 z-50 bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, type: "spring", bounce: 0.3 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full opacity-0 hover:opacity-20 transition-opacity duration-300" />
        <Phone className="w-6 h-6 relative z-10" />
      </motion.a>

      {/* Spacer for header */}
      <div className="h-18" />
    </>
  )
}

export default Navbar