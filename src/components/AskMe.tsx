'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import { SparklesIcon, QuestionMarkCircleIcon } from '@heroicons/react/24/outline'

const questions = [
  {
    id: 'fintech-passion',
    question: 'What drives your interest in fintech and blockchain?',
    answer: `My passion for fintech and blockchain stems from their transformative potential in the financial sector. Through my experiences and studies, I've developed a deep understanding of how these technologies can revolutionize traditional banking systems.

I'm particularly fascinated by blockchain's ability to create transparent, secure, and decentralized financial solutions. My work on various projects has shown me firsthand how these technologies can improve efficiency and accessibility in financial services.

What truly excites me is the opportunity to contribute to this evolution, whether it's through developing innovative solutions or implementing existing technologies in new ways.`
  },
  {
    id: 'problem-solving',
    question: 'How do you approach complex problem-solving?',
    answer: `My approach to complex problem-solving combines analytical thinking with practical implementation. I start by breaking down large problems into smaller, manageable components, then systematically address each part while keeping the bigger picture in mind.

I believe in using data-driven decision making and always consider scalability and maintainability in my solutions. When faced with challenges, I research thoroughly, prototype quickly, and iterate based on feedback.

My experience has taught me that the best solutions often come from collaborating with others and being open to different perspectives.`
  },
  {
    id: 'banking-future',
    question: "What's your vision for the future of banking?",
    answer: `I envision a future where banking is more accessible, efficient, and user-centric. Digital transformation will continue to reshape traditional banking models, with technologies like AI, blockchain, and open banking playing crucial roles.

I believe we'll see increased personalization in financial services, with AI-driven insights helping people make better financial decisions. The integration of blockchain technology will make transactions more transparent and secure.

The future of banking will be about creating seamless experiences that empower users while maintaining the highest standards of security and compliance.`
  },
  {
    id: 'industry-trends',
    question: 'How do you stay updated with industry trends?',
    answer: `I maintain a comprehensive approach to staying current with industry trends. This includes regularly reading financial technology publications, participating in relevant online communities, and attending industry conferences when possible.

I actively follow key thought leaders and organizations in the fintech space, engage in continuous learning through online courses, and experiment with new technologies as they emerge.

Additionally, I believe in the importance of networking and maintaining dialogues with other professionals in the field to share insights and perspectives.`
  }
]

export function AskMe() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [selectedQuestion, setSelectedQuestion] = useState<string | null>(null)
  const [isTyping, setIsTyping] = useState(false)
  const [displayedAnswer, setDisplayedAnswer] = useState('')

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

  const handleQuestionClick = (questionId: string) => {
    setSelectedQuestion(questionId)
    const answer = questions.find(q => q.id === questionId)?.answer || ''
    setDisplayedAnswer(answer)
    setIsTyping(false)
  }

  return (
    <motion.section 
      id="ask-me" 
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
                Ask Me
              </h2>
            </motion.div>
            <motion.p
              className="mt-4 text-xl text-gray-500 dark:text-gray-300"
              whileHover={{ 
                scale: 1.05,
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
                Get to know me better
              </span>
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div 
              variants={itemVariants}
              className="space-y-4"
            >
              {questions.map((q, index) => (
                <motion.button
                  key={q.id}
                  onClick={() => handleQuestionClick(q.id)}
                  className={`w-full text-left p-6 rounded-2xl transition-all duration-300 ${
                    selectedQuestion === q.id
                      ? 'bg-primary-50 dark:bg-primary-900/20 shadow-lg'
                      : 'bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700'
                  }`}
                  whileHover={{ 
                    scale: 1.02,
                    x: 5,
                    transition: { type: "spring", stiffness: 300, damping: 20 }
                  }}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ 
                    type: "spring",
                    stiffness: 100,
                    damping: 15,
                    delay: index * 0.1,
                  }}
                >
                  <div className="flex items-center space-x-3">
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
                      <QuestionMarkCircleIcon className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                    </motion.div>
                    <span className="text-lg font-medium text-gray-900 dark:text-white">
                      {q.question}
                    </span>
                  </div>
                </motion.button>
              ))}
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="relative"
            >
              <AnimatePresence mode="wait">
                {selectedQuestion && (
                  <motion.div
                    key={selectedQuestion}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8"
                  >
                    <motion.div
                      className="prose dark:prose-invert max-w-none"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line text-lg">
                        {displayedAnswer}
                      </p>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
} 