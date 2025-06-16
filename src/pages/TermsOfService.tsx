"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { FileText, Shield, AlertTriangle, Scale, Users, Settings } from "lucide-react";

export default function TermsOfService() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const Navigation = () => (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`
        fixed w-full z-50 transition-all duration-500
        ${isScrolled 
          ? 'py-4 bg-gradient-to-r from-white/5 via-white/10 to-white/5 backdrop-blur-[12px] border-b border-white/10 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)]'
          : 'py-6 bg-transparent'}
      `}
    >
      <div className="container mx-auto px-6">
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center">
          <div className="flex w-full items-center justify-between px-6 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)]">
            {/* Logo on left */}
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              CreativeHub
            </span>

            {/* Navigation links on right with spacing */}
            <div className="flex space-x-8">
              {[
                { title: 'Home', href: '/#home' },
                { title: 'About', href: '/#about' },
                { title: 'Features', href: '/#features' },
                { title: 'Contact', href: '/#contact' },
                { title: 'Terms & Conditions', href: '/Terms' },
                { title: 'Privacy Policy', href: '/privacy' }
              ].map((link) => (
                <motion.a
                  key={link.title}
                  href={link.href}
                  whileHover={{ scale: 1.05 }}
                  className="relative group"
                >
                  <span className="text-sm font-medium text-gray-200 hover:text-white transition-colors duration-300">
                    {link.title}
                  </span>
                  <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Navigation Header */}
        <div className="flex md:hidden items-center justify-between">
          {/* Mobile Logo */}
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            CreativeHub
          </span>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="p-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-colors"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`block w-6 h-0.5 bg-white transform transition-transform ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block w-6 h-0.5 bg-white transition-opacity ${isOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-6 h-0.5 bg-white transform transition-transform ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </motion.button>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-4"
            >
              <div className="rounded-2xl bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] p-4 space-y-3">
                {[
                  { title: 'Home', href: '/#home' },
                  { title: 'About', href: '/#about' },
                  { title: 'Features', href: '/#features' },
                  { title: 'Contact', href: '/#contact' },
                  { title: 'Terms & Conditions', href: '/Terms' },
                  { title: 'Privacy Policy', href: '/privacy' }
                ].map((link, index) => (
                  <motion.a
                    key={link.title}
                    href={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-2 text-gray-200 hover:text-white rounded-lg hover:bg-white/10 transition-all duration-300"
                  >
                    {link.title}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );

  const sections = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Acceptance of Terms",
      content: [
        "By accessing and using CreativeHub, you agree to be bound by these Terms of Service",
        "You must be at least 18 years old to use the platform",
        "You are responsible for maintaining the confidentiality of your account",
        "You agree to provide accurate and complete information during registration",
        "We reserve the right to modify these terms at any time"
      ]
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "User Conduct",
      content: [
        "Respect other users and their creative works",
        "Do not upload content that infringes on intellectual property rights",
        "Maintain professional conduct in all interactions",
        "Do not engage in spam or unauthorized advertising",
        "Report any violations or inappropriate content"
      ]
    },
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: "Content Guidelines",
      content: [
        "All content must be original or properly licensed",
        "No explicit, offensive, or illegal content",
        "Respect copyright and intellectual property rights",
        "Maintain appropriate content ratings",
        "Follow industry standards and best practices"
      ]
    },
    {
      icon: <Scale className="w-6 h-6" />,
      title: "Intellectual Property",
      content: [
        "You retain ownership of your original content",
        "You grant us license to display and distribute your content",
        "Respect others' intellectual property rights",
        "Report any copyright infringement",
        "Follow fair use guidelines"
      ]
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Community Guidelines",
      content: [
        "Be respectful and professional in all interactions",
        "Provide constructive feedback",
        "Maintain a positive and supportive environment",
        "Respect diversity and inclusion",
        "Follow platform-specific community rules"
      ]
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Account Management",
      content: [
        "Keep your account information up to date",
        "Use strong passwords and enable 2FA",
        "Report any security concerns",
        "Follow account termination procedures",
        "Understand data retention policies"
      ]
    }
  ];

  return (
    <AuroraBackground>
      <Navigation />
      
      <div className="flex flex-col min-h-screen pt-24">
        {/* Header */}
        <section className="px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <FileText className="w-8 h-8 text-blue-400" />
              <h1 className="text-4xl md:text-6xl font-bold text-white">
                Terms of Service
              </h1>
            </div>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Please read these terms carefully before using our platform. By using CreativeHub, you agree to these terms.
            </p>
            <div className="mt-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
              <p className="text-sm text-gray-400">
                Last updated: January 2025 • We may update these terms periodically
              </p>
            </div>
          </motion.div>
        </section>

        {/* Terms Sections */}
        <section className="px-4 pb-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid gap-8">
              {sections.map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="text-blue-400">
                      {section.icon}
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white">
                      {section.title}
                    </h2>
                  </div>
                  
                  <div className="space-y-4">
                    {section.content.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-300 leading-relaxed">{item}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Contact Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mt-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-white mb-4">Questions About Terms?</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                If you have questions about these Terms of Service or need clarification on any points, 
                please contact our legal team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white/20 backdrop-blur-md border border-white/30 text-white rounded-full px-6 py-3 font-medium hover:bg-white/30 transition-all duration-300">
                  Contact Legal Team
                </button>
                <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full px-6 py-3 font-medium hover:bg-white/20 transition-all duration-300">
                  Download Terms
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </AuroraBackground>
  );
}