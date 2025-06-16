"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Aperture } from 'lucide-react';

interface LuxuryLoadingProps {
  variant?: 'spinner' | 'camera' | 'dots' | 'pulse';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  text?: string;
  className?: string;
}

const LuxuryLoading: React.FC<LuxuryLoadingProps> = ({
  variant = 'camera',
  size = 'md',
  text = 'Loading...',
  className = ''
}) => {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  };

  const textSizes = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl'
  };

  if (variant === 'camera') {
    return (
      <div className={`flex flex-col items-center justify-center space-y-4 ${className}`}>
        <motion.div
          className={`${sizeClasses[size]} relative`}
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-luxury-gold-500 to-luxury-teal-500 rounded-full opacity-20 blur-sm"></div>
          <Camera className={`${sizeClasses[size]} text-luxury-gold-500 relative z-10`} />
        </motion.div>
        
        <motion.div
          className="flex items-center space-x-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <span className={`${textSizes[size]} font-medium text-luxury-charcoal-700 dark:text-luxury-charcoal-300`}>
            {text}
          </span>
          <motion.div
            className="flex space-x-1"
            animate={{
              opacity: [1, 0.5, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="w-1 h-1 bg-luxury-gold-500 rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    );
  }

  if (variant === 'spinner') {
    return (
      <div className={`flex flex-col items-center justify-center space-y-4 ${className}`}>
        <motion.div
          className={`${sizeClasses[size]} border-4 border-luxury-charcoal-200 dark:border-luxury-charcoal-700 border-t-luxury-gold-500 rounded-full`}
          animate={{ rotate: 360 }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        {text && (
          <span className={`${textSizes[size]} font-medium text-luxury-charcoal-700 dark:text-luxury-charcoal-300`}>
            {text}
          </span>
        )}
      </div>
    );
  }

  if (variant === 'dots') {
    return (
      <div className={`flex flex-col items-center justify-center space-y-4 ${className}`}>
        <div className="flex space-x-2">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className={`${size === 'sm' ? 'w-2 h-2' : size === 'md' ? 'w-3 h-3' : size === 'lg' ? 'w-4 h-4' : 'w-5 h-5'} bg-gradient-to-r from-luxury-gold-500 to-luxury-teal-500 rounded-full`}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </div>
        {text && (
          <span className={`${textSizes[size]} font-medium text-luxury-charcoal-700 dark:text-luxury-charcoal-300`}>
            {text}
          </span>
        )}
      </div>
    );
  }

  if (variant === 'pulse') {
    return (
      <div className={`flex flex-col items-center justify-center space-y-4 ${className}`}>
        <motion.div
          className={`${sizeClasses[size]} relative`}
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-luxury-gold-500/30 to-luxury-teal-500/30 rounded-full blur-md"></div>
          <Aperture className={`${sizeClasses[size]} text-luxury-gold-500 relative z-10`} />
        </motion.div>
        {text && (
          <span className={`${textSizes[size]} font-medium text-luxury-charcoal-700 dark:text-luxury-charcoal-300`}>
            {text}
          </span>
        )}
      </div>
    );
  }

  return null;
};

// Skeleton Loading Component
export const LuxurySkeleton: React.FC<{
  className?: string;
  variant?: 'card' | 'text' | 'image' | 'button';
}> = ({ className = '', variant = 'card' }) => {
  const baseClasses = "animate-pulse bg-gradient-to-r from-luxury-charcoal-100 via-luxury-charcoal-200 to-luxury-charcoal-100 dark:from-luxury-charcoal-800 dark:via-luxury-charcoal-700 dark:to-luxury-charcoal-800";
  
  if (variant === 'card') {
    return (
      <div className={`${className} space-y-4`}>
        <div className={`${baseClasses} h-48 rounded-2xl`}></div>
        <div className="space-y-2">
          <div className={`${baseClasses} h-4 rounded-full w-3/4`}></div>
          <div className={`${baseClasses} h-4 rounded-full w-1/2`}></div>
        </div>
      </div>
    );
  }

  if (variant === 'text') {
    return (
      <div className={`${className} space-y-2`}>
        <div className={`${baseClasses} h-4 rounded-full w-full`}></div>
        <div className={`${baseClasses} h-4 rounded-full w-5/6`}></div>
        <div className={`${baseClasses} h-4 rounded-full w-4/6`}></div>
      </div>
    );
  }

  if (variant === 'image') {
    return <div className={`${baseClasses} ${className} rounded-2xl`}></div>;
  }

  if (variant === 'button') {
    return <div className={`${baseClasses} ${className} h-12 rounded-full`}></div>;
  }

  return <div className={`${baseClasses} ${className} rounded-lg`}></div>;
};

// Page Loading Component
export const LuxuryPageLoading: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-luxury-charcoal-50 to-white dark:from-luxury-charcoal-900 dark:to-luxury-charcoal-800 flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-luxury-gold-500/10 rounded-full blur-3xl animate-luxury-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-luxury-teal-500/10 rounded-full blur-3xl animate-luxury-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="w-24 h-24 mx-auto mb-6 relative">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-luxury-gold-500 to-luxury-teal-500 rounded-full opacity-20 blur-lg"
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="relative z-10 w-full h-full bg-gradient-to-br from-luxury-charcoal-800 to-luxury-charcoal-700 rounded-full flex items-center justify-center border border-luxury-gold-400/30"
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <Camera className="w-12 h-12 text-luxury-gold-400" />
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="space-y-4"
        >
          <h2 className="text-2xl md:text-3xl font-display font-bold gradient-text-luxury">
            Madiun Photography
          </h2>
          <p className="text-luxury-charcoal-600 dark:text-luxury-charcoal-300 text-lg">
            Loading your visual experience...
          </p>
          
          <motion.div
            className="flex justify-center space-x-2 mt-6"
            animate={{
              opacity: [1, 0.5, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="w-2 h-2 bg-luxury-gold-500 rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default LuxuryLoading;

