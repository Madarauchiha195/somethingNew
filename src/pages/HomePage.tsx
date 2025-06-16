"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { Camera, Palette, Music, Theater, Film, Users, Star, Sparkles, Award, Globe, Mic, Brush } from "lucide-react";
import { Link } from "react-router-dom";

export default function HomePage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const Navigation = () => (
    <AnimatePresence>
      {isScrolled && (
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed w-full z-50 py-4 bg-gradient-to-r from-white/5 via-white/10 to-white/5 backdrop-blur-[12px] border-b border-white/10 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)]"
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
                    { title: 'Home', href: '#home' },
                    { title: 'About', href: '#about' },
                    { title: 'Features', href: '#features' },
                    { title: 'Contact', href: '#contact' },
                    { title: 'Terms & Conditions', href: '/terms' },
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
                CreativePro
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
                      { title: 'Home', href: '#home' },
                      { title: 'About', href: '#about' },
                      { title: 'Features', href: '#features' },
                      { title: 'Contact', href: '#contact' },
                      { title: 'Terms & Conditions', href: '/terms' },
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
      )}
    </AnimatePresence>
  );

  const features = [
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Visual Storytellers",
      description: "Directors, cinematographers, VFX artists, and animators showcase their visual mastery"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Creative Artists",
      description: "Painters, designers, costume creators, and makeup artists display their artistic vision"
    },
    {
      icon: <Music className="w-8 h-8" />,
      title: "Audio Creators",
      description: "Songwriters, singers, composers, and sound designers share their musical talents"
    },
    {
      icon: <Theater className="w-8 h-8" />,
      title: "Performance Artists",
      description: "Actors, actresses, choreographers, and performers bring stories to life"
    },
    {
      icon: <Film className="w-8 h-8" />,
      title: "Content Creators",
      description: "Scriptwriters, story writers, and dialogue creators craft compelling narratives"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Industry Professionals",
      description: "Producers, casting directors, and industry experts discover new talent"
    }
  ];

  const stats = [
    { number: "10K+", label: "Creative Artists" },
    { number: "500+", label: "Productions" },
    { number: "50+", label: "Categories" },
    { number: "24/7", label: "Platform Access" }
  ];

  return (
    <AuroraBackground>
      <Navigation />
      
      {/* Main Content */}
      <div className="flex flex-col min-h-screen">
        {/* Hero Section - Moved down */}
        <section id="home" className="flex-1 flex items-center justify-center px-4 pt-32 pb-20">
          <motion.div
            initial={{ opacity: 0.0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="relative flex flex-col gap-6 items-center justify-center text-center max-w-6xl"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 mb-4"
            >
              <Sparkles className="w-5 h-5 text-yellow-400" />
              <span className="text-white font-medium">Where Creativity Meets Opportunity</span>
            </motion.div>
            
            <div className="text-4xl md:text-7xl font-bold text-white leading-tight">
              The Ultimate Platform for
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"> Entertainment Creators</span>
            </div>
            
            <div className="font-light text-lg md:text-2xl text-gray-200 py-4 max-w-4xl leading-relaxed">
              From cartoons to cinematics, comedy to drama - showcase your talent, connect with industry professionals, and bring your creative vision to life without boundaries.
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Link to="/platform">
                <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full px-8 py-4 font-semibold hover:from-blue-600 hover:to-purple-700 hover:scale-105 transition-all duration-300 shadow-2xl">
                  <span className="flex items-center gap-2">
                    <Star className="w-5 h-5" />
                    Start Creating
                  </span>
                </button>
              </Link>
              <Link to="/platform">
                <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full px-8 py-4 font-semibold hover:bg-white/20 hover:scale-105 transition-all duration-300">
                  <span className="flex items-center gap-2">
                    <Globe className="w-5 h-5" />
                    Explore Talent
                  </span>
                </button>
              </Link>
            </div>
          </motion.div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* About Section */}
        <section id="about" className="min-h-screen flex items-center justify-center px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl text-center"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
              A Platform Built for 
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent"> Creative Freedom</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-left"
              >
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
                  We believe every creative mind deserves a stage. Our platform breaks down barriers in the entertainment industry, giving equal opportunities to storytellers, artists, performers, and visionaries from all backgrounds.
                </p>
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                  Whether you're crafting the next blockbuster screenplay, designing breathtaking costumes, or perfecting your acting craft - this is your space to shine and connect with like-minded creators and industry professionals.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 hover:bg-white/15 transition-all duration-300"
              >
                <Award className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
                <p className="text-gray-300 leading-relaxed">
                  To democratize the entertainment industry by providing a platform where talent meets opportunity, creativity flourishes without restrictions, and collaborative magic happens naturally.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Features Section */}
        <section id="features" className="min-h-screen flex items-center justify-center px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-7xl text-center"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              For Every Creative 
              <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent"> Professional</span>
            </h2>
            <p className="text-xl text-gray-300 mb-16 max-w-3xl mx-auto">
              From emerging artists to industry veterans, our platform caters to every role in the entertainment ecosystem
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 hover:bg-white/15 hover:scale-105 transition-all duration-300 group"
                >
                  <div className="text-blue-400 mb-6 group-hover:text-yellow-400 transition-colors duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-16">
              How It 
              <span className="bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent"> Works</span>
            </h2>
            
            <div className="grid md:grid-cols-3 gap-12">
              {[
                {
                  step: "01",
                  title: "Create & Showcase",
                  description: "Upload your work, build your portfolio, and tell your creative story to the world",
                  icon: <Brush className="w-8 h-8" />
                },
                {
                  step: "02", 
                  title: "Connect & Collaborate",
                  description: "Network with industry professionals, join creative communities, and find your perfect collaborators",
                  icon: <Users className="w-8 h-8" />
                },
                {
                  step: "03",
                  title: "Create & Succeed",
                  description: "Turn connections into productions, ideas into reality, and dreams into successful entertainment projects",
                  icon: <Award className="w-8 h-8" />
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative"
                >
                  <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-md border border-white/20 rounded-3xl p-8 hover:from-blue-500/30 hover:to-purple-500/30 transition-all duration-300">
                    <div className="text-6xl font-bold text-white/20 mb-4">{item.step}</div>
                    <div className="text-blue-400 mb-6">{item.icon}</div>
                    <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="min-h-screen flex items-center justify-center px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl text-center"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
              Ready to Join the 
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Creative Revolution?</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-12 leading-relaxed">
              Be part of a community that celebrates creativity, fosters collaboration, and turns artistic visions into reality. Your journey in entertainment starts here.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link to="/platform">
                <button className="bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-full px-10 py-5 font-semibold hover:from-purple-600 hover:to-pink-700 hover:scale-105 transition-all duration-300 shadow-2xl">
                  <span className="flex items-center gap-3">
                    <Mic className="w-6 h-6" />
                    Join Our Community
                  </span>
                </button>
              </Link>
              <Link to="/platform">
                <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full px-10 py-5 font-semibold hover:bg-white/20 hover:scale-105 transition-all duration-300">
                  <span className="flex items-center gap-3">
                    <Globe className="w-6 h-6" />
                    Learn More
                  </span>
                </button>
              </Link>
            </div>
            
            <div className="mt-16 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8">
              <p className="text-gray-400 text-sm leading-relaxed">
                By joining our platform, you agree to our community guidelines that promote creativity, respect, and professional collaboration. 
                <br />
                <a href="/terms" className="text-blue-400 hover:text-blue-300 transition-colors">Terms of Service</a> • 
                <a href="/privacy" className="text-blue-400 hover:text-blue-300 transition-colors ml-2">Privacy Policy</a>
              </p>
            </div>
          </motion.div>
        </section>
      </div>
    </AuroraBackground>
  );
}