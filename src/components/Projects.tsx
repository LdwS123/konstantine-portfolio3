'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'
import { AcademicCapIcon, SparklesIcon } from '@heroicons/react/24/outline'

const projects = [
  {
    id: 'msc-thesis',
    title: 'MSc Thesis',
    tagline: 'AI & Profitability in US Neobanks',
    description: 'Research on how AI, Blockchain, and Emerging Technologies are reshaping B2C Neobanks.',
    tech: ['AI/ML', 'Data Analysis', 'Financial Modeling'],
    isCurrent: true,
    highlight: 'Currently working on this project',
  },
  {
    id: 'predict-tag-ai',
    title: 'PredictTagAI',
    tagline: 'AI-Powered Dynamic Pricing & Tagging',
    description: 'An AI-driven tool designed to optimize pricing and metadata tagging in real-time for retail products.',
    tech: ['Python', 'TensorFlow', 'FastAPI'],
  },
  {
    id: 'finka',
    title: 'FinKa',
    tagline: 'P2P Microfinance App for Students',
    description: 'A peer-to-peer lending platform offering accessible microfinance services to university students.',
    tech: ['React Native', 'Node.js', 'MongoDB'],
  },
  {
    id: 'hivenet',
    title: 'HiveNet',
    tagline: 'Tokenized Cloud Ecosystem',
    description: 'A decentralized cloud platform aiming to reach 100M users through tokenized user contribution and AI-powered incentives.',
    tech: ['Solidity', 'Web3.js', 'React'],
  }
]

export default function Projects() {
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
      id="projects" 
      className="py-20 bg-gray-50 dark:bg-gray-800"
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
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
                Projects
              </h2>
            </motion.div>
            <motion.p
              variants={subtitleVariants}
              className="mt-3 text-xl text-gray-500 dark:text-gray-300 sm:mt-4"
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
                Explore my latest work and ongoing projects
              </span>
            </motion.p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
            <AnimatePresence>
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.02,
                    rotateX: 2,
                    transition: { type: "spring", stiffness: 300, damping: 20 }
                  }}
                  className={`
                    relative overflow-hidden rounded-2xl bg-white dark:bg-gray-900 shadow-lg transition-all duration-300 hover:shadow-xl
                    ${project.isCurrent ? 'ring-2 ring-yellow-500 dark:ring-yellow-400' : ''}
                  `}
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
                  <div className="p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <motion.h3 
                        className="text-xl font-bold text-gray-900 dark:text-white"
                        whileHover={{ 
                          scale: 1.05,
                          x: 5,
                          transition: { type: "spring", stiffness: 300, damping: 20 }
                        }}
                      >
                        {project.title}
                      </motion.h3>
                      {project.isCurrent && (
                        <motion.div 
                          className="flex items-center space-x-2"
                          whileHover={{ 
                            scale: 1.05,
                            transition: { type: "spring", stiffness: 300, damping: 20 }
                          }}
                        >
                          <motion.div
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
                            <AcademicCapIcon className="h-5 w-5 text-yellow-500 dark:text-yellow-400" />
                          </motion.div>
                          <motion.span 
                            className="text-sm font-medium text-yellow-600 dark:text-yellow-400"
                            whileHover={{ 
                              scale: 1.05,
                              transition: { type: "spring", stiffness: 300, damping: 20 }
                            }}
                          >
                            Current Project
                          </motion.span>
                        </motion.div>
                      )}
                    </div>

                    <motion.p 
                      className="text-lg font-medium text-primary-600 dark:text-primary-400"
                      whileHover={{ 
                        scale: 1.02,
                        x: 5,
                        transition: { type: "spring", stiffness: 300, damping: 20 }
                      }}
                    >
                      {project.tagline}
                    </motion.p>

                    <motion.p 
                      className="text-gray-600 dark:text-gray-300"
                      whileHover={{ 
                        scale: 1.02,
                        transition: { type: "spring", stiffness: 300, damping: 20 }
                      }}
                    >
                      {project.description}
                    </motion.p>

                    <motion.div 
                      className="flex flex-wrap gap-2"
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
                      {project.tech.map((tech, i) => (
                        <motion.span
                          key={tech}
                          className="px-3 py-1 text-sm font-medium bg-primary-50 text-primary-700 dark:bg-primary-900/20 dark:text-primary-300 rounded-full"
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
                            scale: 1.1,
                            transition: { type: "spring", stiffness: 300, damping: 20 }
                          }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </motion.div>

                    <motion.div
                      whileHover={{ 
                        scale: 1.05,
                        transition: { type: "spring", stiffness: 300, damping: 20 }
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link
                        href={`/projects/${project.id}`}
                        className={`
                          inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200
                          ${
                            project.isCurrent
                              ? 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200 dark:bg-yellow-900/20 dark:text-yellow-300 dark:hover:bg-yellow-900/30'
                              : 'bg-primary-100 text-primary-800 hover:bg-primary-200 dark:bg-primary-900/20 dark:text-primary-300 dark:hover:bg-primary-900/30'
                          }
                        `}
                      >
                        Learn More
                        <motion.svg
                          className="ml-2 h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          animate={{ 
                            x: [0, 5, 0],
                          }}
                          transition={{ 
                            duration: 1.5,
                            repeat: Infinity,
                            repeatType: "reverse",
                          }}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </motion.svg>
                      </Link>
                    </motion.div>
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