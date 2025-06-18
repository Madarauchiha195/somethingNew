"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Home, Plus, Library, Settings, Bell, Heart, Bookmark } from "lucide-react";

interface FloatingDockProps {
  className?: string;
}

export function FloatingDock({ className = "" }: FloatingDockProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const menuItems = [
    { icon: <Home className="w-6 h-6" />, label: "Home", href: "/mainfeed" },
    { icon: <Plus className="w-6 h-6" />, label: "Create", href: "#", onClick: () => setShowCreateModal(true) },
    { icon: <Library className="w-6 h-6" />, label: "Library", href: "/library" },
    { icon: <Heart className="w-6 h-6" />, label: "Liked", href: "/liked" },
    { icon: <Bookmark className="w-6 h-6" />, label: "Saved", href: "/saved" },
    { icon: <Bell className="w-6 h-6" />, label: "Notifications", href: "/notifications" },
    { icon: <Settings className="w-6 h-6" />, label: "Settings", href: "/settings" },
  ];

  return (
    <motion.div
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      className={`fixed left-6 top-1/2 -translate-y-1/2 z-50 ${className}`}
    >
      <div
        className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)]"
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
      >
        <div className="flex flex-col gap-4">
          {menuItems.map((item) => (
            <motion.div
              key={item.label}
              className="relative"
              onHoverStart={() => setActiveItem(item.label)}
              onHoverEnd={() => setActiveItem(null)}
            >
              <Link
                to={item.href}
                onClick={item.onClick}
                className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/20 transition-colors"
              >
                <div className="text-white">{item.icon}</div>
                <AnimatePresence>
                  {isExpanded && (
                    <motion.span
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      className="text-white font-medium whitespace-nowrap"
                    >
                      {item.label}
                    </motion.span>
                  )}
                </AnimatePresence>
              </Link>
              
              {/* Tooltip for collapsed state */}
              <AnimatePresence>
                {!isExpanded && activeItem === item.label && (
                  <motion.div
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    className="absolute left-full ml-2 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-white text-sm whitespace-nowrap"
                  >
                    {item.label}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
} 