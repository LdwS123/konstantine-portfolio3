'use client'

import { motion } from 'framer-motion'
import { ArrowDownIcon, SparklesIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export function Hero() {
  const handleExploreClick = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      const yOffset = -100;
      const y = projectsSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <motion.section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-primary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
        animate={{ 
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{ 
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <motion.div 
          className="space-y-8"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ 
            type: "spring",
            stiffness: 100,
            damping: 15,
            delay: 0.2,
          }}
        >
          <motion.h1 
            className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ 
              type: "spring",
              stiffness: 100,
              damping: 15,
              delay: 0.4,
            }}
          >
            <motion.span 
              className="gradient-text"
              animate={{ 
                backgroundPosition: ['0% 0%', '100% 100%'],
              }}
              transition={{ 
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              Shaping the Future of Fintech
            </motion.span>
            <br />
            <motion.span 
              className="text-3xl sm:text-5xl lg:text-6xl mt-4 block"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ 
                type: "spring",
                stiffness: 100,
                damping: 15,
                delay: 0.6,
              }}
            >
              with AI, Blockchain & Vision
            </motion.span>
          </motion.h1>
          
          <motion.p 
            className="mt-6 text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ 
              type: "spring",
              stiffness: 100,
              damping: 15,
              delay: 0.8,
            }}
          >
            <motion.span
              animate={{ 
                scale: [1, 1.05, 1],
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              Driven by purpose, fueled by technology.
            </motion.span>
          </motion.p>
          
          <motion.div 
            className="mt-10 flex items-center justify-center gap-x-6"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ 
              type: "spring",
              stiffness: 100,
              damping: 15,
              delay: 1,
            }}
          >
            <motion.button
              onClick={handleExploreClick}
              className="inline-flex items-center rounded-md bg-primary-600 px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 transition-colors duration-300"
              whileHover={{ 
                scale: 1.05,
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              Explore My Projects
              <motion.div
                animate={{ 
                  y: [0, 5, 0],
                }}
                transition={{ 
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                <ArrowDownIcon className="ml-2 -mr-1 h-5 w-5" />
              </motion.div>
            </motion.button>
            <motion.div
              whileHover={{ 
                scale: 1.05,
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/Konstantine Gugunava gen.pdf"
                download
                className="text-lg font-semibold leading-6 text-gray-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300"
              >
                Download Resume <motion.span 
                  aria-hidden="true"
                  animate={{ 
                    x: [0, 5, 0],
                  }}
                  transition={{ 
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                >→</motion.span>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
} 