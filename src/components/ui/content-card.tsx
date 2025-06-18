"use client";

import { motion } from "framer-motion";
import { Heart, MessageSquare, Share2, Bookmark, Clock, Eye } from "lucide-react";

interface ContentCardProps {
  id: number;
  type: 'video' | 'audio' | 'image' | 'text';
  title: string;
  creator: string;
  views: number;
  likes: number;
  comments: number;
  thumbnail: string;
  duration?: string;
  waveform?: string;
  excerpt?: string;
  tags: string[];
}

export function ContentCard({
  type,
  title,
  creator,
  views,
  likes,
  comments,
  thumbnail,
  duration,
  waveform,
  excerpt,
  tags
}: ContentCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl overflow-hidden hover:bg-white/15 transition-all duration-300"
    >
      {/* Thumbnail */}
      <div className="relative aspect-video">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover"
        />
        {duration && (
          <div className="absolute bottom-2 right-2 px-2 py-1 rounded bg-black/80 text-white text-xs">
            {duration}
          </div>
        )}
        {type === 'audio' && waveform && (
          <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-black/80 to-transparent">
            <img
              src={waveform}
              alt="Waveform"
              className="w-full h-full object-cover opacity-50"
            />
          </div>
        )}
      </div>

      {/* Content Info */}
      <div className="p-3">
        <h3 className="text-sm font-medium text-white line-clamp-2 mb-1">{title}</h3>
        <p className="text-xs text-gray-400 mb-2">{creator}</p>
        
        {/* Stats */}
        <div className="flex items-center gap-3 text-gray-400 text-xs mb-2">
          <span className="flex items-center gap-1">
            <Eye className="w-3 h-3" />
            {views.toLocaleString()}
          </span>
          <span className="flex items-center gap-1">
            <Heart className="w-3 h-3" />
            {likes}
          </span>
          <span className="flex items-center gap-1">
            <MessageSquare className="w-3 h-3" />
            {comments}
          </span>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1">
          {tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded-full bg-white/10 text-xs text-gray-300"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
} 