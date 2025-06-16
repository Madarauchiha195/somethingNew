"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { Shield, Lock, Eye, Database, Share2, Settings } from "lucide-react";

export default function PrivacyPolicy() {
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
      icon: <Database className="w-6 h-6" />,
      title: "Information We Collect",
      content: [
        "Personal information provided during registration (name, email, professional details)",
        "Content uploaded to the platform including portfolios, videos, images, and creative works",
        "Usage data such as login times, feature usage, and platform interactions",
        "Communication data from messages, comments, and collaboration activities",
        "Technical information including IP address, browser type, and device information"
      ]
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "How We Use Your Information",
      content: [
        "To provide and maintain our platform services and features",
        "To facilitate connections between creators and industry professionals",
        "To improve user experience through personalized recommendations",
        "To communicate important updates, security alerts, and platform news",
        "To ensure platform security and prevent fraudulent activities",
        "To comply with legal obligations and enforce our terms of service"
      ]
    },
    {
      icon: <Share2 className="w-6 h-6" />,
      title: "Information Sharing",
      content: [
        "Your public profile and portfolio content is visible to other platform users",
        "We do not sell personal information to third parties for marketing purposes",
        "Information may be shared with service providers who help operate our platform",
        "Legal authorities may receive information when required by law or court order",
        "Business transfers may include user data if the company is acquired or merged",
        "Anonymous, aggregated data may be used for research and platform improvement"
      ]
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Data Security",
      content: [
        "Industry-standard encryption protects data transmission and storage",
        "Regular security audits and updates maintain platform protection",
        "Access controls ensure only authorized personnel can access user data",
        "Secure backup systems protect against data loss and corruption",
        "Multi-factor authentication options available for enhanced account security",
        "Incident response procedures in place for any potential security breaches"
      ]
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Your Privacy Rights",
      content: [
        "Access and download your personal data and uploaded content",
        "Correct or update inaccurate information in your profile",
        "Delete your account and associated data (subject to legal retention requirements)",
        "Control visibility settings for your profile and portfolio content",
        "Opt-out of non-essential communications and marketing messages",
        "Request information about how your data is processed and stored"
      ]
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Data Retention",
      content: [
        "Active account data is retained while your account remains active",
        "Deleted content may be retained for 30 days to allow recovery",
        "Some information may be retained longer for legal compliance purposes",
        "Anonymous usage statistics may be retained indefinitely for platform improvement",
        "Communication records may be kept for dispute resolution and support purposes",
        "Financial transaction data retained according to applicable tax and accounting laws"
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
              <Shield className="w-8 h-8 text-green-400" />
              <h1 className="text-4xl md:text-6xl font-bold text-white">
                Privacy Policy
              </h1>
            </div>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
            </p>
            <div className="mt-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
              <p className="text-sm text-gray-400">
                Last updated: January 2025 • We may update this policy periodically
              </p>
            </div>
          </motion.div>
        </section>

        {/* Privacy Sections */}
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
                    <div className="text-green-400">
                      {section.icon}
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white">
                      {section.title}
                    </h2>
                  </div>
                  
                  <div className="space-y-4">
                    {section.content.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-300 leading-relaxed">{item}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Cookie Policy */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mt-12 bg-gradient-to-r from-green-500/20 to-blue-500/20 backdrop-blur-md border border-white/20 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <Settings className="w-6 h-6 text-green-400" />
                Cookie Policy
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                We use cookies and similar technologies to enhance your experience, analyze platform usage, 
                and provide personalized content. You can control cookie preferences through your browser settings.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Essential Cookies</h4>
                  <p className="text-gray-400 text-sm">Required for platform functionality and security</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Analytics Cookies</h4>
                  <p className="text-gray-400 text-sm">Help us understand how users interact with our platform</p>
                </div>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mt-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-white mb-4">Privacy Questions?</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                If you have questions about this Privacy Policy, want to exercise your privacy rights, 
                or need assistance with your account privacy settings, please contact our privacy team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white/20 backdrop-blur-md border border-white/30 text-white rounded-full px-6 py-3 font-medium hover:bg-white/30 transition-all duration-300">
                  Contact Privacy Team
                </button>
                <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full px-6 py-3 font-medium hover:bg-white/20 transition-all duration-300">
                  Manage Privacy Settings
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </AuroraBackground>
  );
}