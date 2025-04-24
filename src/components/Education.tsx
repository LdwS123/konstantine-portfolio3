'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { AcademicCapIcon, MapPinIcon, SparklesIcon } from '@heroicons/react/24/outline'

const education = [
  {
    school: 'University of California, Berkeley',
    location: 'Berkeley, CA',
    degree: 'Start-up Semester at SCET & MSc Entrepreneurship, Technology, and Startup Management',
    highlights: [
      'An immersive academic semester focused on startup creation and innovation within Silicon Valley\'s ecosystem.',
      'Key coursework: Technology Entrepreneurship, Challenge Lab, Growth Marketing, Product Development.',
      'Developed PredicTagAI, an AI-driven dynamic pricing tool, pitched to Silicon Valley VCs.'
    ]
  },
  {
    school: 'North Carolina State University',
    location: 'Raleigh, NC',
    degree: 'Master in Management – Exchange Program',
    period: 'Spring 2024'
  },
  {
    school: 'SKEMA Business School',
    location: 'Paris, France',
    degree: 'Master in Management (MIM) & MSc Entrepreneurship, Technology, and Startup Management',
    highlights: [
      'Dual-degree program with UC Berkeley specializing in entrepreneurship and venture creation.',
      'Key coursework: Corporate Finance, Strategy, Venture Capital, AI Applications, MVP Development.'
    ]
  },
  {
    school: 'Université Paris 1 Panthéon-Sorbonne',
    location: 'Paris, France',
    degree: 'Bachelor\'s Degree in Economics',
    highlights: [
      'Research focus: Neobank Business Models and Fintech Profitability Analysis.',
      'Specialized in economic modeling, financial analysis, and international monetary systems.'
    ]
  }
]

export function Education() {
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

  const titleVariants = {
    hidden: { 
      scale: 0.8, 
      opacity: 0,
      y: -20,
      rotateY: -20,
    },
    visible: { 
      scale: 1, 
      opacity: 1,
      y: 0,
      rotateY: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      }
    },
  }

  const subtitleVariants = {
    hidden: { 
      y: 20, 
      opacity: 0,
      scale: 0.9,
      rotateX: 20,
    },
    visible: { 
      y: 0, 
      opacity: 1,
      scale: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: 0.3,
      }
    },
  }

  return (
    <motion.section 
      id="education" 
      className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900"
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
          className="space-y-12"
        >
          <div className="text-center">
            <motion.div
              variants={titleVariants}
              className="inline-block"
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
            >
              <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-400">
                Education
              </h2>
            </motion.div>
            <motion.p
              variants={subtitleVariants}
              className="mt-4 text-xl text-gray-500 dark:text-gray-300"
              whileHover={{ 
                scale: 1.05,
                rotateX: 5,
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
            >
              <span className="inline-flex items-center">
                <motion.span
                  animate={{ 
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.2, 1.2, 1],
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                >
                  <SparklesIcon className="h-5 w-5 mr-2 text-primary-500" />
                </motion.span>
                My Academic Journey
              </span>
            </motion.p>
          </div>

          <div className="grid grid-cols-1 gap-8">
            <AnimatePresence>
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.02,
                    rotateX: 2,
                    transition: { type: "spring", stiffness: 300, damping: 20 }
                  }}
                  className="relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-lg transition-all duration-300 hover:shadow-xl border border-gray-100 dark:border-gray-700"
                >
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ opacity: 1 }}
                    animate={{ 
                      backgroundPosition: ['0% 0%', '100% 100%'],
                    }}
                    transition={{ 
                      duration: 5,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                  />
                  <div className="p-8 space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <motion.div 
                          className="p-2 bg-primary-50 dark:bg-primary-900/20 rounded-lg"
                          whileHover={{ 
                            scale: 1.1,
                            rotate: 5,
                            transition: { type: "spring", stiffness: 300, damping: 20 }
                          }}
                          animate={{ 
                            rotate: [0, 5, -5, 0],
                            scale: [1, 1.1, 1.1, 1],
                          }}
                          transition={{ 
                            duration: 3,
                            repeat: Infinity,
                            repeatType: "reverse",
                          }}
                        >
                          <AcademicCapIcon className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                        </motion.div>
                        <motion.h3 
                          className="text-xl font-bold text-gray-900 dark:text-white"
                          whileHover={{ 
                            scale: 1.05,
                            x: 5,
                            transition: { type: "spring", stiffness: 300, damping: 20 }
                          }}
                        >
                          {edu.school}
                        </motion.h3>
                      </div>
                      <motion.div 
                        className="flex items-center space-x-2 text-gray-500 dark:text-gray-400"
                        whileHover={{ 
                          scale: 1.05,
                          x: -5,
                          transition: { type: "spring", stiffness: 300, damping: 20 }
                        }}
                      >
                        <motion.div
                          animate={{ 
                            y: [0, -2, 0],
                          }}
                          transition={{ 
                            duration: 2,
                            repeat: Infinity,
                            repeatType: "reverse",
                          }}
                        >
                          <MapPinIcon className="h-5 w-5" />
                        </motion.div>
                        <span className="text-sm">{edu.location}</span>
                      </motion.div>
                    </div>

                    <motion.p 
                      className="text-lg font-medium text-primary-600 dark:text-primary-400"
                      whileHover={{ 
                        scale: 1.02,
                        x: 5,
                        transition: { type: "spring", stiffness: 300, damping: 20 }
                      }}
                    >
                      {edu.degree}
                    </motion.p>

                    {edu.period && (
                      <motion.p 
                        className="text-sm text-gray-500 dark:text-gray-400"
                        whileHover={{ 
                          scale: 1.05,
                          x: 5,
                          transition: { type: "spring", stiffness: 300, damping: 20 }
                        }}
                      >
                        {edu.period}
                      </motion.p>
                    )}

                    {edu.highlights && (
                      <motion.ul 
                        className="mt-4 space-y-3"
                        variants={{
                          hidden: { opacity: 0 },
                          visible: {
                            opacity: 1,
                            transition: {
                              staggerChildren: 0.1,
                            },
                          },
                        }}
                      >
                        {edu.highlights.map((highlight, i) => (
                          <motion.li 
                            key={i} 
                            className="flex items-start"
                            variants={{
                              hidden: { opacity: 0, x: -20 },
                              visible: { 
                                opacity: 1, 
                                x: 0,
                                transition: {
                                  type: "spring",
                                  stiffness: 100,
                                  damping: 15,
                                }
                              },
                            }}
                            whileHover={{ 
                              x: 5,
                              scale: 1.02,
                              transition: { type: "spring", stiffness: 300, damping: 20 }
                            }}
                          >
                            <motion.span 
                              className="flex-shrink-0 h-5 w-5 text-primary-600 dark:text-primary-400"
                              whileHover={{ 
                                scale: 1.2,
                                rotate: 180,
                                transition: { type: "spring", stiffness: 300, damping: 20 }
                              }}
                              animate={{ 
                                scale: [1, 1.1, 1],
                                rotate: [0, 180, 360],
                              }}
                              transition={{ 
                                duration: 3,
                                repeat: Infinity,
                                repeatType: "reverse",
                              }}
                            >•</motion.span>
                            <span className="ml-2 text-gray-600 dark:text-gray-300">{highlight}</span>
                          </motion.li>
                        ))}
                      </motion.ul>
                    )}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
} 