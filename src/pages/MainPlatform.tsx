"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { 
  Search, Bell, MessageCircle, User, Upload, Heart, 
  MessageSquare, Share2, Bookmark, Play, Music, 
  Image as ImageIcon, FileText, Video, Palette,
  TrendingUp, Users, Filter, MoreHorizontal,
  Eye, ThumbsUp, Hash, Calendar, Globe
} from "lucide-react";

// Mock data for demonstration
const mockPosts = [
  {
    id: 1,
    creator: "Sarah Chen",
    handle: "@sarahfilms",
    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    type: "video",
    title: "Cinematic Short Film - 'Midnight Dreams'",
    description: "A 5-minute psychological thriller exploring the boundaries between reality and dreams. Shot on RED camera with practical effects.",
    thumbnail: "https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    views: 12500,
    likes: 892,
    comments: 156,
    tags: ["#shortfilm", "#thriller", "#cinematography"],
    timeAgo: "2 hours ago",
    category: "Film"
  },
  {
    id: 2,
    creator: "Marcus Rodriguez",
    handle: "@musicmarc",
    avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    type: "music",
    title: "Original Soundtrack - 'Neon Nights'",
    description: "Synthwave-inspired instrumental track perfect for cyberpunk films and games. Available for licensing.",
    thumbnail: "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    views: 8200,
    likes: 634,
    comments: 89,
    tags: ["#synthwave", "#soundtrack", "#instrumental"],
    timeAgo: "5 hours ago",
    category: "Music"
  },
  {
    id: 3,
    creator: "Emma Thompson",
    handle: "@emmadesigns",
    avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    type: "image",
    title: "Character Design Portfolio",
    description: "Fantasy character designs for upcoming animated series. Each character tells a unique story through visual elements.",
    thumbnail: "https://images.pexels.com/photos/1266808/pexels-photo-1266808.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    views: 15600,
    likes: 1240,
    comments: 203,
    tags: ["#characterdesign", "#fantasy", "#animation"],
    timeAgo: "1 day ago",
    category: "Design"
  },
  {
    id: 4,
    creator: "David Park",
    handle: "@davidwrites",
    avatar: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    type: "text",
    title: "Screenplay Excerpt - 'The Last Signal'",
    description: "Opening scene from my sci-fi thriller screenplay. A mysterious signal from deep space changes everything for humanity.",
    content: "FADE IN:\n\nEXT. RADIO TELESCOPE FACILITY - NIGHT\n\nA massive dish points toward the star-filled sky. The only sound is the gentle hum of machinery.\n\nINT. CONTROL ROOM - CONTINUOUS\n\nDR. ELENA VASQUEZ (40s) sits alone, monitoring screens filled with data. Coffee cups and energy drink cans litter her desk.\n\nSuddenly, all screens flicker. A new signal appears - unlike anything seen before.",
    views: 3400,
    likes: 287,
    comments: 45,
    tags: ["#screenplay", "#scifi", "#thriller"],
    timeAgo: "3 days ago",
    category: "Writing"
  }
];

const trendingTags = [
  "#shortfilm", "#music", "#characterdesign", "#vfx", "#animation", 
  "#screenplay", "#photography", "#gamedev", "#voiceover", "#comedy"
];

const suggestedCreators = [
  { name: "Alex Johnson", handle: "@alexvfx", followers: "12.5K", category: "VFX Artist" },
  { name: "Maya Patel", handle: "@mayamusic", followers: "8.2K", category: "Composer" },
  { name: "Chris Lee", handle: "@chrisanims", followers: "15.7K", category: "Animator" }
];

export default function MainPlatform() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [uploadType, setUploadType] = useState("");

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
          ? 'py-3 bg-gradient-to-r from-black/80 via-black/90 to-black/80 backdrop-blur-[12px] border-b border-white/10'
          : 'py-4 bg-gradient-to-r from-black/60 via-black/70 to-black/60 backdrop-blur-[8px]'}
      `}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-8">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              CreativeHub
            </span>
            
            {/* Category Dropdown - Desktop */}
            <div className="hidden md:block">
              <select className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-4 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-400">
                <option value="">All Categories</option>
                <option value="film">Film & Video</option>
                <option value="music">Music & Audio</option>
                <option value="design">Design & Art</option>
                <option value="writing">Writing</option>
                <option value="animation">Animation</option>
                <option value="vfx">VFX & 3D</option>
              </select>
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl mx-8 hidden md:block">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search creators, content, or tags..."
                className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-full pl-12 pr-6 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              />
            </div>
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setShowUploadModal(true)}
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full px-6 py-2 font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center gap-2"
            >
              <Upload className="w-4 h-4" />
              <span className="hidden sm:inline">Upload</span>
            </button>
            
            <button className="p-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-colors">
              <Bell className="w-5 h-5 text-white" />
            </button>
            
            <button className="p-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-colors">
              <MessageCircle className="w-5 h-5 text-white" />
            </button>
            
            <button className="p-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-colors">
              <User className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden mt-4">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-full pl-12 pr-6 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
        </div>
      </div>
    </motion.nav>
  );

  const PostCard = ({ post }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden hover:bg-white/15 transition-all duration-300"
    >
      {/* Post Header */}
      <div className="p-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img 
            src={post.avatar} 
            alt={post.creator}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h3 className="text-white font-medium">{post.creator}</h3>
            <p className="text-gray-400 text-sm">{post.handle} • {post.timeAgo}</p>
          </div>
        </div>
        <button className="p-2 rounded-full hover:bg-white/10 transition-colors">
          <MoreHorizontal className="w-5 h-5 text-gray-400" />
        </button>
      </div>

      {/* Post Content */}
      <div className="px-4 pb-4">
        <h2 className="text-white text-lg font-semibold mb-2">{post.title}</h2>
        <p className="text-gray-300 text-sm mb-4 line-clamp-2">{post.description}</p>
        
        {/* Media Preview */}
        <div className="relative mb-4 rounded-xl overflow-hidden">
          {post.type === 'video' && (
            <div className="relative">
              <img 
                src={post.thumbnail} 
                alt={post.title}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <button className="bg-white/20 backdrop-blur-md rounded-full p-4 hover:bg-white/30 transition-colors">
                  <Play className="w-8 h-8 text-white" />
                </button>
              </div>
            </div>
          )}
          
          {post.type === 'music' && (
            <div className="relative">
              <img 
                src={post.thumbnail} 
                alt={post.title}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-4 flex items-center space-x-3">
                  <button className="bg-white/20 backdrop-blur-md rounded-full p-3 hover:bg-white/30 transition-colors">
                    <Music className="w-6 h-6 text-white" />
                  </button>
                  <div className="flex-1 bg-white/20 rounded-full h-2">
                    <div className="bg-blue-400 h-2 rounded-full w-1/3"></div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {post.type === 'image' && (
            <img 
              src={post.thumbnail} 
              alt={post.title}
              className="w-full h-64 object-cover"
            />
          )}
          
          {post.type === 'text' && (
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-xl">
              <pre className="text-gray-300 text-sm font-mono whitespace-pre-wrap line-clamp-6">
                {post.content}
              </pre>
            </div>
          )}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map((tag, index) => (
            <span 
              key={index}
              className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-xs font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Stats */}
        <div className="flex items-center justify-between text-gray-400 text-sm mb-4">
          <div className="flex items-center space-x-4">
            <span className="flex items-center gap-1">
              <Eye className="w-4 h-4" />
              {post.views.toLocaleString()}
            </span>
            <span className="bg-white/10 px-2 py-1 rounded-full text-xs">
              {post.category}
            </span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <button className="flex items-center space-x-2 text-gray-400 hover:text-red-400 transition-colors">
              <Heart className="w-5 h-5" />
              <span>{post.likes}</span>
            </button>
            <button className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition-colors">
              <MessageSquare className="w-5 h-5" />
              <span>{post.comments}</span>
            </button>
            <button className="text-gray-400 hover:text-green-400 transition-colors">
              <Share2 className="w-5 h-5" />
            </button>
          </div>
          <button className="text-gray-400 hover:text-yellow-400 transition-colors">
            <Bookmark className="w-5 h-5" />
          </button>
        </div>
      </div>
    </motion.div>
  );

  const UploadModal = () => (
    <AnimatePresence>
      {showUploadModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setShowUploadModal(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-xl border border-white/20 rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-2xl font-bold text-white mb-6">Upload Your Content</h2>
            
            {!uploadType ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  { type: 'video', icon: Video, label: 'Video', desc: 'Films, tutorials, demos' },
                  { type: 'music', icon: Music, label: 'Music', desc: 'Songs, soundtracks, audio' },
                  { type: 'image', icon: ImageIcon, label: 'Image', desc: 'Art, photos, designs' },
                  { type: 'text', icon: FileText, label: 'Text', desc: 'Scripts, stories, articles' },
                  { type: 'animation', icon: Palette, label: 'Animation', desc: '2D/3D animations' },
                  { type: 'other', icon: Upload, label: 'Other', desc: 'Documents, portfolios' }
                ].map((item) => (
                  <button
                    key={item.type}
                    onClick={() => setUploadType(item.type)}
                    className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all duration-300 text-center group"
                  >
                    <item.icon className="w-8 h-8 text-blue-400 mx-auto mb-3 group-hover:text-blue-300" />
                    <h3 className="text-white font-medium mb-1">{item.label}</h3>
                    <p className="text-gray-400 text-xs">{item.desc}</p>
                  </button>
                ))}
              </div>
            ) : (
              <div className="space-y-6">
                <button 
                  onClick={() => setUploadType("")}
                  className="text-blue-400 hover:text-blue-300 text-sm"
                >
                  ← Back to content types
                </button>
                
                <div className="border-2 border-dashed border-white/30 rounded-xl p-8 text-center">
                  <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-white mb-2">Drop your files here or click to browse</p>
                  <p className="text-gray-400 text-sm">Supports multiple formats up to 500MB</p>
                </div>
                
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Title"
                    className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                  <textarea
                    placeholder="Description"
                    rows={4}
                    className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
                  />
                  <input
                    type="text"
                    placeholder="Tags (comma separated)"
                    className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                  
                  <div className="flex items-center space-x-4">
                    <select className="flex-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-400">
                      <option value="public">Public</option>
                      <option value="private">Private</option>
                      <option value="friends">Friends Only</option>
                    </select>
                    <button className="flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-4 py-3 text-white hover:bg-white/20 transition-colors">
                      <Calendar className="w-4 h-4" />
                      <span>Schedule</span>
                    </button>
                  </div>
                </div>
                
                <div className="flex space-x-4">
                  <button 
                    onClick={() => setShowUploadModal(false)}
                    className="flex-1 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-lg py-3 hover:bg-white/20 transition-colors"
                  >
                    Cancel
                  </button>
                  <button className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg py-3 hover:from-blue-600 hover:to-purple-700 transition-all duration-300">
                    Publish
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <AuroraBackground>
      <Navigation />
      <UploadModal />
      
      <div className="min-h-screen pt-24">
        <div className="container mx-auto px-6 py-8">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Filters */}
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
                <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                  <Filter className="w-5 h-5" />
                  Filters
                </h3>
                <div className="space-y-2">
                  {["All", "Video", "Music", "Images", "Text", "Animation"].map((filter) => (
                    <button
                      key={filter}
                      onClick={() => setSelectedFilter(filter)}
                      className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                        selectedFilter === filter 
                          ? 'bg-blue-500/30 text-blue-300' 
                          : 'text-gray-300 hover:bg-white/10'
                      }`}
                    >
                      {filter}
                    </button>
                  ))}
                </div>
              </div>

              {/* Trending Tags */}
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
                <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  Trending
                </h3>
                <div className="space-y-2">
                  {trendingTags.map((tag, index) => (
                    <button
                      key={index}
                      className="block text-blue-300 hover:text-blue-200 text-sm transition-colors"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>

              {/* Suggested Creators */}
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
                <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Suggested Creators
                </h3>
                <div className="space-y-4">
                  {suggestedCreators.map((creator, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div>
                        <p className="text-white text-sm font-medium">{creator.name}</p>
                        <p className="text-gray-400 text-xs">{creator.handle}</p>
                        <p className="text-gray-500 text-xs">{creator.category}</p>
                      </div>
                      <button className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-xs hover:bg-blue-500/30 transition-colors">
                        Follow
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Main Content Feed */}
            <div className="lg:col-span-3">
              <div className="space-y-6">
                {mockPosts.map((post) => (
                  <PostCard key={post.id} post={post} />
                ))}
              </div>
              
              {/* Load More */}
              <div className="text-center mt-12">
                <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full px-8 py-3 hover:bg-white/20 transition-colors">
                  Load More Content
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-black/50 backdrop-blur-md border-t border-white/10 mt-20">
          <div className="container mx-auto px-6 py-12">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-white font-semibold mb-4">CreativeHub</h3>
                <p className="text-gray-400 text-sm">
                  The ultimate platform for entertainment creators to showcase, connect, and collaborate.
                </p>
              </div>
              <div>
                <h4 className="text-white font-medium mb-4">Platform</h4>
                <div className="space-y-2">
                  <a href="#" className="block text-gray-400 hover:text-white text-sm transition-colors">How it Works</a>
                  <a href="#" className="block text-gray-400 hover:text-white text-sm transition-colors">Pricing</a>
                  <a href="#" className="block text-gray-400 hover:text-white text-sm transition-colors">Features</a>
                </div>
              </div>
              <div>
                <h4 className="text-white font-medium mb-4">Support</h4>
                <div className="space-y-2">
                  <a href="#" className="block text-gray-400 hover:text-white text-sm transition-colors">Help Center</a>
                  <a href="#" className="block text-gray-400 hover:text-white text-sm transition-colors">Contact Us</a>
                  <a href="#" className="block text-gray-400 hover:text-white text-sm transition-colors">Community</a>
                </div>
              </div>
              <div>
                <h4 className="text-white font-medium mb-4">Legal</h4>
                <div className="space-y-2">
                  <a href="/terms" className="block text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
                  <a href="/privacy" className="block text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
                  <a href="#" className="block text-gray-400 hover:text-white text-sm transition-colors">About Us</a>
                </div>
              </div>
            </div>
            <div className="border-t border-white/10 mt-8 pt-8 text-center">
              <p className="text-gray-400 text-sm">
                © 2025 CreativeHub. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </AuroraBackground>
  );
}