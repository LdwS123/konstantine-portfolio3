'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { SparklesIcon } from '@heroicons/react/24/outline'

export function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.95,
      rotateX: -10,
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      }
    },
  }

  return (
    <motion.section 
      id="about" 
      className="py-24 bg-white dark:bg-gray-900"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Bio Section */}
          <motion.div variants={itemVariants} className="space-y-6">
            <motion.h2 
              className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white"
              whileHover={{ 
                scale: 1.05,
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
            >
              About Me
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600 dark:text-gray-300"
              whileHover={{ 
                scale: 1.02,
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
            >
              Hi, I'm Konstantine, a business & tech student at SKEMA Business School, passionate about fintech, AI, and blockchain. As a former political refugee who arrived in France at age 11, I've learned to turn challenges into fuel for growth.
            </motion.p>
            <motion.p 
              className="text-lg text-gray-600 dark:text-gray-300"
              whileHover={{ 
                scale: 1.02,
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
            >
              I'm building real-world solutions that matter — from tokenized cloud storage to AI-driven health tech. My goal? Help reshape financial systems by merging vision, tech, and human-centered thinking.
            </motion.p>
          </motion.div>

          {/* Languages & Core Values */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <motion.h3 
                className="text-xl font-semibold text-gray-900 dark:text-white mb-4"
                whileHover={{ 
                  scale: 1.05,
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
              >
                Languages
              </motion.h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { lang: 'French', level: 'Native' },
                  { lang: 'English', level: 'Fluent' },
                  { lang: 'Georgian', level: 'Native' },
                  { lang: 'Russian', level: 'Proficient' },
                  { lang: 'Spanish', level: 'Conversational' },
                ].map((language, index) => (
                  <motion.div
                    key={language.lang}
                    className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      type: "spring",
                      stiffness: 100,
                      damping: 15,
                      delay: index * 0.1,
                    }}
                    whileHover={{ 
                      scale: 1.05,
                      transition: { type: "spring", stiffness: 300, damping: 20 }
                    }}
                  >
                    <motion.p 
                      className="font-medium text-gray-900 dark:text-white"
                      whileHover={{ 
                        scale: 1.05,
                        transition: { type: "spring", stiffness: 300, damping: 20 }
                      }}
                    >
                      {language.lang}
                    </motion.p>
                    <motion.p 
                      className="text-sm text-gray-500 dark:text-gray-400"
                      whileHover={{ 
                        scale: 1.05,
                        transition: { type: "spring", stiffness: 300, damping: 20 }
                      }}
                    >
                      {language.level}
                    </motion.p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <motion.h3 
                className="text-xl font-semibold text-gray-900 dark:text-white mb-4"
                whileHover={{ 
                  scale: 1.05,
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
              >
                Core Values
              </motion.h3>
              <div className="flex flex-wrap gap-3">
                {['Resilience', 'Innovation', 'Transparency', 'Purpose'].map((value, index) => (
                  <motion.span
                    key={value}
                    className="px-4 py-2 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      type: "spring",
                      stiffness: 100,
                      damping: 15,
                      delay: index * 0.1,
                    }}
                    whileHover={{ 
                      scale: 1.1,
                      transition: { type: "spring", stiffness: 300, damping: 20 }
                    }}
                  >
                    {value}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
} 