"use client";

import React from &apos;react&apos;;
import { motion } from &apos;framer-motion&apos;;
import { AlertTriangle, RefreshCw, Home, ArrowLeft, Camera, Wifi, Server } from &apos;lucide-react&apos;;
import { EnhancedButton } from &apos;./enhanced-button&apos;;
import Link from &apos;next/link&apos;;

interface LuxuryErrorProps {
  variant?: &apos;404&apos; | &apos;500&apos; | &apos;network&apos; | &apos;generic&apos;;
  title?: string;
  message?: string;
  showRetry?: boolean;
  showHome?: boolean;
  showBack?: boolean;
  onRetry?: () => void;
  className?: string;
}

const LuxuryError: React.FC<LuxuryErrorProps> = ({
  variant = &apos;generic&apos;,
  title,
  message,
  showRetry = true,
  showHome = true,
  showBack = false,
  onRetry,
  className = &apos;&apos;
}) => {
  const getErrorConfig = () => {
    switch (variant) {
      case &apos;404&apos;:
        return {
          icon: Camera,
          title: title || &apos;Page Not Found&apos;,
          message: message || &apos;The page you\&apos;re looking for seems to have been moved or doesn\&apos;t exist.&apos;,
          code: &apos;404&apos;
        };
      case &apos;500&apos;:
        return {
          icon: Server,
          title: title || &apos;Server Error&apos;,
          message: message || &apos;Something went wrong on our end. Please try again later.&apos;,
          code: &apos;500&apos;
        };
      case &apos;network&apos;:
        return {
          icon: Wifi,
          title: title || &apos;Connection Error&apos;,
          message: message || &apos;Please check your internet connection and try again.&apos;,
          code: &apos;NET&apos;
        };
      default:
        return {
          icon: AlertTriangle,
          title: title || &apos;Something went wrong&apos;,
          message: message || &apos;An unexpected error occurred. Please try again.&apos;,
          code: &apos;ERR&apos;
        };
    }
  };

  const config = getErrorConfig();
  const IconComponent = config.icon;

  return (
    <div className={`min-h-screen bg-gradient-to-br from-luxury-charcoal-50 to-white dark:from-luxury-charcoal-900 dark:to-luxury-charcoal-800 flex items-center justify-center relative overflow-hidden ${className}`}>
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-luxury-gold-500/5 rounded-full blur-3xl animate-luxury-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-luxury-teal-500/5 rounded-full blur-3xl animate-luxury-float" style={{ animationDelay: &apos;2s&apos; }}></div>
      </div>

      <div className="relative z-10 text-center max-w-2xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          {/* Error Code */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-8xl md:text-9xl font-display font-bold gradient-text-luxury mb-4 opacity-20"
          >
            {config.code}
          </motion.div>

          {/* Error Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-24 h-24 mx-auto mb-6 relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-luxury-gold-500/20 to-luxury-teal-500/20 rounded-full blur-lg"></div>
            <div className="relative z-10 w-full h-full bg-gradient-to-br from-luxury-charcoal-100 to-luxury-charcoal-200 dark:from-luxury-charcoal-800 dark:to-luxury-charcoal-700 rounded-full flex items-center justify-center border border-luxury-gold-400/30">
              <IconComponent className="w-12 h-12 text-luxury-gold-500" />
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="space-y-6"
        >
          {/* Error Title */}
          <h1 className="text-3xl md:text-4xl font-display font-bold text-luxury-charcoal-900 dark:text-white">
            {config.title}
          </h1>

          {/* Error Message */}
          <p className="text-lg text-luxury-charcoal-600 dark:text-luxury-charcoal-300 leading-relaxed max-w-lg mx-auto">
            {config.message}
          </p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8"
          >
            {showRetry && onRetry && (
              <EnhancedButton
                variant="gradient"
                size="lg"
                onClick={onRetry}
                icon={<RefreshCw className="w-5 h-5" />}
                iconPosition="left"
                animate
                glow
              >
                Try Again
              </EnhancedButton>
            )}

            {showHome && (
              <Link href="/">
                <EnhancedButton
                  variant="outline"
                  size="lg"
                  icon={<Home className="w-5 h-5" />}
                  iconPosition="left"
                  animate
                >
                  Go Home
                </EnhancedButton>
              </Link>
            )}

            {showBack && (
              <EnhancedButton
                variant="ghost"
                size="lg"
                onClick={() => window.history.back()}
                icon={<ArrowLeft className="w-5 h-5" />}
                iconPosition="left"
                animate
              >
                Go Back
              </EnhancedButton>
            )}
          </motion.div>

          {/* Additional Help */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-12 p-6 bg-luxury-charcoal-50 dark:bg-luxury-charcoal-800/50 rounded-2xl border border-luxury-charcoal-200 dark:border-luxury-charcoal-700"
          >
            <h3 className="text-lg font-semibold text-luxury-charcoal-900 dark:text-white mb-3">
              Need Help?
            </h3>
            <p className="text-luxury-charcoal-600 dark:text-luxury-charcoal-300 mb-4">
              If you continue to experience issues, please don&apos;t hesitate to contact us.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/contact">
                <EnhancedButton
                  variant="luxury"
                  size="sm"
                  animate
                >
                  Contact Support
                </EnhancedButton>
              </Link>
              <Link href="/portfolio">
                <EnhancedButton
                  variant="ghost"
                  size="sm"
                  animate
                >
                  View Portfolio
                </EnhancedButton>
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

// Inline Error Component (for smaller errors within pages)
export const LuxuryInlineError: React.FC<{
  message?: string;
  onRetry?: () => void;
  className?: string;
}> = ({ message = &apos;Something went wrong&apos;, onRetry, className = &apos;&apos; }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`p-6 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-2xl ${className}`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-red-100 dark:bg-red-900/50 rounded-full flex items-center justify-center">
            <AlertTriangle className="w-5 h-5 text-red-600 dark:text-red-400" />
          </div>
          <div>
            <h4 className="font-semibold text-red-900 dark:text-red-100">Error</h4>
            <p className="text-red-700 dark:text-red-300 text-sm">{message}</p>
          </div>
        </div>
        {onRetry && (
          <EnhancedButton
            variant="ghost"
            size="sm"
            onClick={onRetry}
            icon={<RefreshCw className="w-4 h-4" />}
            className="text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300"
          >
            Retry
          </EnhancedButton>
        )}
      </div>
    </motion.div>
  );
};

export default LuxuryError;
