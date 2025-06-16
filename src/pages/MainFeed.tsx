"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AuroraBackground } from "../components/ui/aurora-background";
import { Link } from "react-router-dom";
import { 
  Search, 
  Bell, 
  MessageSquare, 
  User, 
  Upload, 
  Filter,
  Heart,
  MessageCircle,
  Share2,
  Bookmark,
  TrendingUp,
  Users,
  Hash,
  X,
  Image as ImageIcon,
  Video,
  Music,
  FileText,
  Film,
  Mic
} from "lucide-react";

export default function MainFeed() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isUploadOpen, setIsUploadOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const categories = [
    "All",
    "Animation",
    "Music",
    "Writing",
    "Film",
    "Design",
    "Photography",
    "Art"
  ];

  const trendingTags = [
    "#Animation2024",
    "#MusicProduction",
    "#DigitalArt",
    "#ShortFilm",
    "#CreativeWriting"
  ];

  const suggestedCreators = [
    { name: "Alex Creative", followers: "10K", avatar: "👨‍🎨" },
    { name: "Sarah Artist", followers: "5K", avatar: "👩‍🎨" },
    { name: "Mike Director", followers: "8K", avatar: "👨‍🎬" }
  ];

  const samplePosts = [
    {
      id: 1,
      type: "video",
      title: "Behind the Scenes: Animation Process",
      creator: "Alex Creative",
      views: "1.2K",
      likes: 234,
      comments: 45,
      thumbnail: "🎬",
      tags: ["#Animation", "#BehindTheScenes"]
    },
    {
      id: 2,
      type: "music",
      title: "New Original Composition",
      creator: "Sarah Artist",
      views: "3.4K",
      likes: 567,
      comments: 89,
      thumbnail: "🎵",
      tags: ["#Music", "#Original"]
    },
    {
      id: 3,
      type: "writing",
      title: "Short Story: The Last Chapter",
      creator: "Mike Director",
      views: "2.1K",
      likes: 345,
      comments: 67,
      thumbnail: "📝",
      tags: ["#Writing", "#ShortStory"]
    }
  ];

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
        <div className="flex items-center justify-between">
          {/* Logo */}
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            CreativeHub
          </span>

          {/* Search Bar */}
          <div className="hidden md:flex items-center flex-1 max-w-2xl mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search creators, content, or tags..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 pl-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-white/40"
              />
              <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
            </div>
          </div>

          {/* Navigation Icons */}
          <div className="flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-colors"
            >
              <Bell className="w-5 h-5 text-white" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-colors"
            >
              <MessageSquare className="w-5 h-5 text-white" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-colors"
            >
              <User className="w-5 h-5 text-white" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsUploadOpen(true)}
              className="p-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-colors"
            >
              <Upload className="w-5 h-5 text-white" />
            </motion.button>
          </div>
        </div>

        {/* Category Navigation */}
        <div className="mt-4 flex items-center space-x-4 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category)}
              className={`
                px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap
                ${selectedCategory === category
                  ? 'bg-white/20 backdrop-blur-md border border-white/30 text-white'
                  : 'bg-white/10 backdrop-blur-md border border-white/20 text-gray-300 hover:bg-white/15'}
              `}
            >
              {category}
            </motion.button>
          ))}
        </div>
      </div>
    </motion.nav>
  );

  const UploadDialog = () => (
    <AnimatePresence>
      {isUploadOpen && (
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
            className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 w-full max-w-2xl"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-white">Upload Content</h2>
              <button
                onClick={() => setIsUploadOpen(false)}
                className="p-2 rounded-full hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
              {[
                { icon: <Video className="w-6 h-6" />, label: "Video" },
                { icon: <ImageIcon className="w-6 h-6" />, label: "Image" },
                { icon: <Music className="w-6 h-6" />, label: "Music" },
                { icon: <FileText className="w-6 h-6" />, label: "Text" },
                { icon: <Film className="w-6 h-6" />, label: "Animation" },
                { icon: <Mic className="w-6 h-6" />, label: "Audio" }
              ].map((type) => (
                <motion.button
                  key={type.label}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex flex-col items-center gap-2 p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-colors"
                >
                  <div className="text-white">{type.icon}</div>
                  <span className="text-sm text-gray-300">{type.label}</span>
                </motion.button>
              ))}
            </div>

            <div className="space-y-4">
              <input
                type="text"
                placeholder="Title"
                className="w-full px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-white/40"
              />
              <textarea
                placeholder="Description"
                rows={4}
                className="w-full px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-white/40"
              />
              <input
                type="text"
                placeholder="Tags (comma separated)"
                className="w-full px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-white/40"
              />
            </div>

            <div className="flex justify-end gap-4 mt-6">
              <button
                onClick={() => setIsUploadOpen(false)}
                className="px-6 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-colors"
              >
                Cancel
              </button>
              <button className="px-6 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 transition-colors">
                Upload
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <AuroraBackground>
      <Navigation />
      <UploadDialog />
      
      <div className="flex min-h-screen pt-32">
        {/* Main Content */}
        <div className="flex-1 px-6">
          {/* Content Feed */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {samplePosts.map((post) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden hover:bg-white/15 transition-all duration-300"
              >
                <div className="aspect-video bg-white/5 flex items-center justify-center text-4xl">
                  {post.thumbnail}
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-white mb-2">{post.title}</h3>
                  <p className="text-sm text-gray-300 mb-4">by {post.creator}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                    <span>{post.views} views</span>
                    <span>{post.likes} likes</span>
                    <span>{post.comments} comments</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {post.tags.map((tag) => (
                      <span key={tag} className="text-xs text-blue-400">{tag}</span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/10">
                    <div className="flex items-center gap-4">
                      <button className="p-2 rounded-full hover:bg-white/10 transition-colors">
                        <Heart className="w-5 h-5 text-white" />
                      </button>
                      <button className="p-2 rounded-full hover:bg-white/10 transition-colors">
                        <MessageCircle className="w-5 h-5 text-white" />
                      </button>
                      <button className="p-2 rounded-full hover:bg-white/10 transition-colors">
                        <Share2 className="w-5 h-5 text-white" />
                      </button>
                    </div>
                    <button className="p-2 rounded-full hover:bg-white/10 transition-colors">
                      <Bookmark className="w-5 h-5 text-white" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="hidden lg:block w-80 p-6 space-y-6">
          {/* Trending Tags */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              Trending Tags
            </h3>
            <div className="space-y-2">
              {trendingTags.map((tag) => (
                <motion.a
                  key={tag}
                  href={`#${tag}`}
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                >
                  <Hash className="w-4 h-4" />
                  <span>{tag}</span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Suggested Creators */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <Users className="w-5 h-5" />
              Suggested Creators
            </h3>
            <div className="space-y-4">
              {suggestedCreators.map((creator) => (
                <motion.div
                  key={creator.name}
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-xl">
                    {creator.avatar}
                  </div>
                  <div>
                    <p className="text-white font-medium">{creator.name}</p>
                    <p className="text-sm text-gray-400">{creator.followers} followers</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AuroraBackground>
  );
} 