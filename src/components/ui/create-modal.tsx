"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowLeft, ArrowRight, Video, Image, Music, FileText, Globe, Lock, Users } from "lucide-react";

interface CreateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const domains = [
  {
    id: 'animation',
    name: 'Animation',
    description: '2D/3D animations, motion graphics, and visual effects',
    icon: <Video className="w-6 h-6" />
  },
  {
    id: 'music',
    name: 'Music',
    description: 'Original compositions, covers, and sound design',
    icon: <Music className="w-6 h-6" />
  },
  {
    id: 'visual-art',
    name: 'Visual Art',
    description: 'Digital art, illustrations, and concept designs',
    icon: <Image className="w-6 h-6" />
  },
  {
    id: 'writing',
    name: 'Writing',
    description: 'Stories, scripts, and creative writing',
    icon: <FileText className="w-6 h-6" />
  }
];

export function CreateModal({ isOpen, onClose }: CreateModalProps) {
  const [step, setStep] = useState<'domain' | 'details' | 'settings'>('domain');
  const [selectedDomain, setSelectedDomain] = useState<string | null>(null);

  const handleDomainSelect = (domainId: string) => {
    setSelectedDomain(domainId);
    setStep('details');
  };

  const renderStep = () => {
    switch (step) {
      case 'domain':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white mb-6">Choose Your Domain</h2>
            <div className="grid grid-cols-2 gap-4">
              {domains.map((domain) => (
                <motion.button
                  key={domain.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleDomainSelect(domain.id)}
                  className="flex flex-col items-start p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all"
                >
                  <div className="text-blue-400 mb-3">{domain.icon}</div>
                  <h3 className="text-lg font-semibold text-white mb-1">{domain.name}</h3>
                  <p className="text-sm text-gray-400">{domain.description}</p>
                </motion.button>
              ))}
            </div>
          </div>
        );

      case 'details':
        return (
          <div className="space-y-6">
            <div className="flex items-center gap-4 mb-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setStep('domain')}
                className="p-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-colors"
              >
                <ArrowLeft className="w-5 h-5 text-white" />
              </motion.button>
              <h2 className="text-2xl font-bold text-white">Content Details</h2>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Title</label>
                <input
                  type="text"
                  placeholder="Enter a title for your content"
                  className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-white/40"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Description</label>
                <textarea
                  placeholder="Describe your content..."
                  className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-white/40 h-32"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Tags</label>
                <input
                  type="text"
                  placeholder="Add tags separated by commas"
                  className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-white/40"
                />
              </div>
            </div>

            <div className="flex justify-end gap-4 mt-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setStep('settings')}
                className="px-6 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 transition-all"
              >
                Next
              </motion.button>
            </div>
          </div>
        );

      case 'settings':
        return (
          <div className="space-y-6">
            <div className="flex items-center gap-4 mb-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setStep('details')}
                className="p-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-colors"
              >
                <ArrowLeft className="w-5 h-5 text-white" />
              </motion.button>
              <h2 className="text-2xl font-bold text-white">Visibility Settings</h2>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-3 gap-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex flex-col items-center p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all"
                >
                  <Globe className="w-6 h-6 text-blue-400 mb-2" />
                  <span className="text-sm font-medium text-white">Public</span>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex flex-col items-center p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all"
                >
                  <Users className="w-6 h-6 text-purple-400 mb-2" />
                  <span className="text-sm font-medium text-white">Friends</span>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex flex-col items-center p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all"
                >
                  <Lock className="w-6 h-6 text-red-400 mb-2" />
                  <span className="text-sm font-medium text-white">Private</span>
                </motion.button>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Additional Settings</label>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-gray-300">
                    <input type="checkbox" className="rounded bg-white/10 border-white/20" />
                    Allow comments
                  </label>
                  <label className="flex items-center gap-2 text-gray-300">
                    <input type="checkbox" className="rounded bg-white/10 border-white/20" />
                    Allow sharing
                  </label>
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-4 mt-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onClose}
                className="px-6 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all"
              >
                Cancel
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 transition-all"
              >
                Create Content
              </motion.button>
            </div>
          </div>
        );
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 w-full max-w-2xl"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-white">Create Content</h2>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="p-2 rounded-full hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5 text-white" />
              </motion.button>
            </div>

            {renderStep()}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 