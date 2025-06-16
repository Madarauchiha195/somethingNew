"use client";

import { motion } from "framer-motion";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { Navbar } from "@/components/ui/navbar";
import { Shield, AlertTriangle, Users, FileText, Scale, Eye } from "lucide-react";

export default function TermsOfService() {
  const sections = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Platform Usage",
      content: [
        "Our platform is designed for entertainment industry professionals and creators aged 18 and above.",
        "Users must provide accurate information during registration and maintain the security of their accounts.",
        "Each user is responsible for all activities that occur under their account.",
        "Commercial use of the platform requires appropriate subscription or licensing agreements."
      ]
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Content Guidelines",
      content: [
        "All uploaded content must be original work created by the user or properly licensed.",
        "Plagiarism, copyright infringement, and unauthorized use of existing content is strictly prohibited.",
        "Users retain ownership of their original content but grant us license to display and distribute it on the platform.",
        "Content must comply with applicable laws and our community standards."
      ]
    },
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: "Prohibited Content",
      content: [
        "Pornographic content and explicit sexual material are strictly prohibited.",
        "Partial nudity similar to mainstream entertainment (Netflix-level) is acceptable for artistic purposes.",
        "Gore, extreme violence, and content promoting harm to individuals or groups is not allowed.",
        "Content that incites hatred, discrimination, or violence based on religion, race, gender, or other protected characteristics is prohibited.",
        "Illegal activities, drug promotion, and content violating local laws are strictly forbidden."
      ]
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Religious & Cultural Content",
      content: [
        "Respectful discussion and artistic interpretation of religious themes is welcome.",
        "Light-hearted jokes and comedy about religions are acceptable when not malicious or hateful.",
        "Content that deliberately offends, mocks, or demeans specific religious beliefs or practices is prohibited.",
        "Forcing others to engage with religious content they find offensive is not allowed.",
        "Cultural sensitivity and respect for diverse beliefs is expected from all users."
      ]
    },
    {
      icon: <Scale className="w-6 h-6" />,
      title: "Legal Compliance",
      content: [
        "Users must comply with all applicable local, national, and international laws.",
        "Any illegal activities conducted through the platform will result in immediate account termination.",
        "We cooperate with law enforcement agencies when required by law.",
        "Users are responsible for ensuring their content doesn't violate any third-party rights.",
        "Disputes regarding intellectual property will be handled according to DMCA procedures."
      ]
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Account Termination",
      content: [
        "We reserve the right to suspend or terminate accounts that violate these terms.",
        "Repeated violations of community guidelines will result in permanent account closure.",
        "Users may delete their accounts at any time, but some content may remain for legal compliance.",
        "Terminated users forfeit access to all platform features and any paid subscriptions.",
        "Appeals for account restoration can be submitted through our support channels."
      ]
    }
  ];

  return (
    <AuroraBackground>
      <Navbar />
      
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
              <Scale className="w-8 h-8 text-blue-400" />
              <h1 className="text-4xl md:text-6xl font-bold text-white">
                Terms of Service
              </h1>
            </div>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Please read these terms carefully. By using our platform, you agree to comply with these guidelines and policies.
            </p>
            <div className="mt-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
              <p className="text-sm text-gray-400">
                Last updated: January 2025 • Effective immediately for all users
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

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mt-12 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-md border border-white/20 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-white mb-4">Questions or Concerns?</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                If you have any questions about these Terms of Service or need clarification on any policies, 
                please don't hesitate to contact our support team. We're here to help ensure a safe and 
                creative environment for all users.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white/20 backdrop-blur-md border border-white/30 text-white rounded-full px-6 py-3 font-medium hover:bg-white/30 transition-all duration-300">
                  Contact Support
                </button>
                <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full px-6 py-3 font-medium hover:bg-white/20 transition-all duration-300">
                  Report Violation
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </AuroraBackground>
  );
}