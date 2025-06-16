"use client";

import { motion } from "framer-motion";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { Navbar } from "@/components/ui/navbar";

export default function AuroraBackgroundDemo() {
  return (
    <AuroraBackground>
      <Navbar />
      
      {/* Main Content */}
      <div className="flex flex-col min-h-screen">
        {/* Hero Section */}
        <section id="home" className="flex-1 flex items-center justify-center px-4 pt-20">
          <motion.div
            initial={{ opacity: 0.0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="relative flex flex-col gap-4 items-center justify-center text-center"
          >
            <div className="text-3xl md:text-7xl font-bold text-white">
              Background lights are cool you know.
            </div>
            <div className="font-extralight text-base md:text-4xl text-gray-200 py-4">
              And this, is chemical burn.
            </div>
            <button className="bg-white text-black rounded-full w-fit px-6 py-3 font-medium hover:bg-gray-200 hover:scale-105 transition-all duration-300 shadow-lg">
              Debug now
            </button>
          </motion.div>
        </section>

        {/* About Section */}
        <section id="about" className="min-h-screen flex items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl text-center"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">About Us</h2>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              We create stunning visual experiences that captivate and inspire. Our aurora backgrounds 
              represent the perfect blend of technology and artistry, bringing your digital presence to life 
              with mesmerizing animations and beautiful gradients.
            </p>
          </motion.div>
        </section>

        {/* Features Section */}
        <section id="features" className="min-h-screen flex items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl text-center"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-12">Features</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Liquid Glass UI",
                  description: "Beautiful frosted glass effects with perfect transparency and blur"
                },
                {
                  title: "Responsive Design",
                  description: "Seamlessly adapts to all screen sizes and devices"
                },
                {
                  title: "Smooth Animations",
                  description: "Buttery smooth transitions and hover effects"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300"
                >
                  <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="min-h-screen flex items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl text-center"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">Get In Touch</h2>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              Ready to create something amazing together? Let's bring your vision to life.
            </p>
            <button className="bg-white text-black rounded-full px-8 py-4 font-medium hover:bg-gray-200 hover:scale-105 transition-all duration-300 shadow-lg">
              Contact Us
            </button>
          </motion.div>
        </section>
      </div>
    </AuroraBackground>
  );
}