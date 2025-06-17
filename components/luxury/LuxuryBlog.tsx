"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, ArrowRight, Search, Tag, Eye, Heart } from 'lucide-react';
import { EnhancedCard, CardContent } from '@/components/ui/enhanced-card';
import { EnhancedButton } from '@/components/ui/enhanced-button';
import { Input } from '@/components/ui/input';
import Image from 'next/image';
import Link from 'next/link';
import { useDatabase } from '@/lib/database-context';

const LuxuryBlog: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const { blogPosts, loading, error } = useDatabase();

  // Get published blog posts only
  const publishedPosts = blogPosts.filter(post => post.published);

  // Get unique categories from published posts
  const categories = ['all', ...Array.from(new Set(publishedPosts.map(post => post.category)))];

  const filteredPosts = publishedPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = filteredPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-luxury-gold-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-2">Error Loading Blog</h2>
          <p className="text-gray-600">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-luxury-charcoal-50 to-luxury-gold-50 dark:from-luxury-charcoal-900 dark:to-luxury-charcoal-800 py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-luxury-gold-500/5 rounded-full blur-3xl animate-luxury-float"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-luxury-teal-500/5 rounded-full blur-3xl animate-luxury-float" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-luxury-gold-100 dark:bg-luxury-gold-900/20 text-luxury-gold-700 dark:text-luxury-gold-300 rounded-full text-sm font-medium border border-luxury-gold-200 dark:border-luxury-gold-800 mb-6">
            <Tag className="w-4 h-4" />
            Photography Blog
          </div>
          
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
            <span className="text-luxury-charcoal-900 dark:text-white">Photography</span>
            <br />
            <span className="gradient-text-luxury">Insights & Tips</span>
          </h1>
          
          <p className="text-xl text-luxury-charcoal-600 dark:text-luxury-charcoal-300 max-w-2xl mx-auto">
            Discover professional photography techniques, industry insights, and creative inspiration from our expert team.
          </p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-luxury-charcoal-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-white/80 dark:bg-luxury-charcoal-800/80 border-luxury-charcoal-300 dark:border-luxury-charcoal-600"
              />
            </div>

            {/* Category Filter */}
            <div className="flex gap-2 flex-wrap">
              {categories.map((category) => (
                <EnhancedButton
                  key={category}
                  variant={selectedCategory === category ? 'luxury' : 'ghost'}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  animate
                >
                  {category === 'all' ? 'All Posts' : category}
                </EnhancedButton>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Featured Post */}
        {featuredPost && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-16"
          >
            <EnhancedCard variant="glass" hover animate className="overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-auto">
                  <Image
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-luxury-gold-500 text-white text-sm font-medium rounded-full">
                      Featured
                    </span>
                  </div>
                </div>
                
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-4 text-sm text-luxury-charcoal-500 dark:text-luxury-charcoal-400 mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(featuredPost.date).toLocaleDateString()}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {featuredPost.readTime}
                    </span>
                    <span className="flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      {featuredPost.views}
                    </span>
                  </div>
                  
                  <h2 className="text-2xl md:text-3xl font-display font-bold text-luxury-charcoal-900 dark:text-white mb-4">
                    {featuredPost.title}
                  </h2>
                  
                  <p className="text-luxury-charcoal-600 dark:text-luxury-charcoal-300 mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-luxury-gold-500 to-luxury-teal-500 rounded-full flex items-center justify-center">
                        <User className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-luxury-charcoal-900 dark:text-white">
                          {featuredPost.author}
                        </p>
                        <p className="text-sm text-luxury-charcoal-500 dark:text-luxury-charcoal-400">
                          {featuredPost.category}
                        </p>
                      </div>
                    </div>
                    
                    <Link href={`/blog/${featuredPost.id}`}>
                      <EnhancedButton
                        variant="gradient"
                        icon={<ArrowRight className="w-4 h-4" />}
                        iconPosition="right"
                        animate
                      >
                        Read More
                      </EnhancedButton>
                    </Link>
                  </div>
                </div>
              </div>
            </EnhancedCard>
          </motion.div>
        )}

        {/* Regular Posts Grid */}
        {regularPosts.length === 0 && !featuredPost ? (
          <div className="text-center py-16">
            <div className="w-24 h-24 mx-auto mb-6 bg-luxury-gold-100 dark:bg-luxury-gold-900/20 rounded-full flex items-center justify-center">
              <Tag className="w-12 h-12 text-luxury-gold-500" />
            </div>
            <h3 className="text-2xl font-bold text-luxury-charcoal-900 dark:text-white mb-4">
              No Blog Posts Found
            </h3>
            <p className="text-luxury-charcoal-600 dark:text-luxury-charcoal-400 max-w-md mx-auto">
              {searchTerm || selectedCategory !== 'all'
                ? "No posts match your current filters. Try adjusting your search or category selection."
                : "No blog posts have been published yet. Check back soon for photography insights and tips!"
              }
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
            >
              <EnhancedCard variant="elevated" hover animate className="h-full overflow-hidden group">
                <div className="relative h-48">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-2 py-1 bg-luxury-charcoal-800/80 text-white text-xs font-medium rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <CardContent className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-4 text-xs text-luxury-charcoal-500 dark:text-luxury-charcoal-400 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {new Date(post.date).toLocaleDateString()}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-display font-bold text-luxury-charcoal-900 dark:text-white mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-luxury-charcoal-600 dark:text-luxury-charcoal-300 mb-4 flex-1 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-luxury-charcoal-200 dark:border-luxury-charcoal-700">
                    <div className="flex items-center gap-4 text-sm text-luxury-charcoal-500 dark:text-luxury-charcoal-400">
                      <span className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        {post.views}
                      </span>
                      <span className="flex items-center gap-1">
                        <Heart className="w-4 h-4" />
                        {post.likes}
                      </span>
                    </div>
                    
                    <Link href={`/blog/${post.id}`}>
                      <EnhancedButton
                        variant="ghost"
                        size="sm"
                        icon={<ArrowRight className="w-4 h-4" />}
                        iconPosition="right"
                        animate
                      >
                        Read
                      </EnhancedButton>
                    </Link>
                  </div>
                </CardContent>
              </EnhancedCard>
            </motion.div>
          ))}
          </div>
        )}

        {/* No Results */}
        {filteredPosts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center py-16"
          >
            <div className="w-24 h-24 bg-luxury-charcoal-100 dark:bg-luxury-charcoal-800 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="w-12 h-12 text-luxury-charcoal-400" />
            </div>
            <h3 className="text-xl font-semibold text-luxury-charcoal-900 dark:text-white mb-2">
              No articles found
            </h3>
            <p className="text-luxury-charcoal-600 dark:text-luxury-charcoal-300">
              Try adjusting your search terms or browse all categories.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default LuxuryBlog;

