"use client";

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Heart, Share2, Download } from 'lucide-react';
import { EnhancedButton } from './enhanced-button';
import Image from 'next/image';

interface LuxuryModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  showCloseButton?: boolean;
  closeOnOverlayClick?: boolean;
  className?: string;
}

const LuxuryModal: React.FC<LuxuryModalProps> = ({
  isOpen,
  onClose,
  children,
  title,
  size = 'md',
  showCloseButton = true,
  closeOnOverlayClick = true,
  className = ''
}) => {
  const sizeClasses = {
    sm: 'max-w-md',
    md: 'max-w-2xl',
    lg: 'max-w-4xl',
    xl: 'max-w-6xl',
    full: 'max-w-[95vw] max-h-[95vh]'
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-luxury-charcoal-900/80 backdrop-blur-sm"
            onClick={closeOnOverlayClick ? onClose : undefined}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className={`relative w-full ${sizeClasses[size]} bg-white dark:bg-luxury-charcoal-800 rounded-3xl shadow-luxury-lg border border-luxury-charcoal-200 dark:border-luxury-charcoal-700 overflow-hidden ${className}`}
          >
            {/* Header */}
            {(title || showCloseButton) && (
              <div className="flex items-center justify-between p-6 border-b border-luxury-charcoal-200 dark:border-luxury-charcoal-700">
                {title && (
                  <h2 className="text-xl font-display font-bold text-luxury-charcoal-900 dark:text-white">
                    {title}
                  </h2>
                )}
                {showCloseButton && (
                  <button
                    onClick={onClose}
                    className="w-10 h-10 rounded-full bg-luxury-charcoal-100 dark:bg-luxury-charcoal-700 hover:bg-luxury-charcoal-200 dark:hover:bg-luxury-charcoal-600 flex items-center justify-center transition-colors"
                  >
                    <X className="w-5 h-5 text-luxury-charcoal-600 dark:text-luxury-charcoal-300" />
                  </button>
                )}
              </div>
            )}

            {/* Content */}
            <div className="p-6">
              {children}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

// Image Gallery Modal
interface ImageGalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: Array<{
    id: string;
    src: string;
    title: string;
    description?: string;
    category?: string;
    likes?: number;
  }>;
  currentIndex: number;
  onNavigate: (index: number) => void;
}

export const LuxuryImageModal: React.FC<ImageGalleryModalProps> = ({
  isOpen,
  onClose,
  images,
  currentIndex,
  onNavigate
}) => {
  const currentImage = images[currentIndex];

  const handlePrevious = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1;
    onNavigate(newIndex);
  };

  const handleNext = () => {
    const newIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0;
    onNavigate(newIndex);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      
      if (e.key === 'ArrowLeft') handlePrevious();
      if (e.key === 'ArrowRight') handleNext();
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex, handleNext, handlePrevious, onClose]);

  if (!currentImage) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-luxury-charcoal-900">
          {/* Background */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-luxury-charcoal-900"
          />

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-0 left-0 right-0 z-10 p-6 bg-gradient-to-b from-luxury-charcoal-900/80 to-transparent"
          >
            <div className="flex items-center justify-between">
              <div className="text-white">
                <h3 className="text-xl font-display font-bold">{currentImage.title}</h3>
                <p className="text-luxury-charcoal-300 text-sm">
                  {currentIndex + 1} of {images.length}
                </p>
              </div>
              
              <div className="flex items-center space-x-3">
                <EnhancedButton
                  variant="glass"
                  size="sm"
                  icon={<Heart className="w-4 h-4" />}
                >
                  {currentImage.likes || 0}
                </EnhancedButton>
                <EnhancedButton
                  variant="glass"
                  size="sm"
                  icon={<Share2 className="w-4 h-4" />}
                >
                  <span className="sr-only">Share</span>
                </EnhancedButton>
                <EnhancedButton
                  variant="glass"
                  size="sm"
                  icon={<Download className="w-4 h-4" />}
                >
                  <span className="sr-only">Download</span>
                </EnhancedButton>
                <button
                  onClick={onClose}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                >
                  <X className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Main Image */}
          <div className="flex items-center justify-center h-full p-20">
            <motion.div
              key={currentImage.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-full max-h-full"
            >
              <Image
                src={currentImage.src}
                alt={currentImage.title}
                width={1200}
                height={800}
                className="max-w-full max-h-full object-contain rounded-2xl shadow-luxury-lg"
              />
            </motion.div>
          </div>

          {/* Navigation */}
          {images.length > 1 && (
            <>
              <button
                onClick={handlePrevious}
                className="absolute left-6 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button
                onClick={handleNext}
                className="absolute right-6 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}

          {/* Bottom Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-luxury-charcoal-900/80 to-transparent"
          >
            <div className="text-center text-white">
              {currentImage.description && (
                <p className="text-luxury-charcoal-200 mb-2">{currentImage.description}</p>
              )}
              {currentImage.category && (
                <span className="inline-block px-3 py-1 bg-luxury-gold-500/20 text-luxury-gold-300 rounded-full text-sm">
                  {currentImage.category}
                </span>
              )}
            </div>
          </motion.div>

          {/* Thumbnails */}
          {images.length > 1 && (
            <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2">
              <div className="flex space-x-2 bg-luxury-charcoal-900/50 backdrop-blur-sm rounded-full p-2">
                {images.map((image) => (
                  <button
                    key={image.id}
                    onClick={() => onNavigate(index)}
                    className={`w-12 h-12 rounded-full overflow-hidden border-2 transition-all ${
                      index === currentIndex
                        ? 'border-luxury-gold-400 scale-110'
                        : 'border-transparent hover:border-white/50'
                    }`}
                  >
                    <Image
                      src={image.src}
                      alt={image.title}
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </AnimatePresence>
  );
};

export default LuxuryModal;

