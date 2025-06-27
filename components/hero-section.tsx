"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { MessageSquare, Zap, Globe } from "lucide-react"

export default function HeroSection() {
  console.log("HeroSection component rendered")
  
  return (
    <section className="min-h-screen bg-gradient-to-br from-slack-gray via-white to-slack-gray flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Logo/Icon Area */}
          <div className="flex justify-center items-center space-x-4 mb-8">
            <div className="relative">
              <div className="w-16 h-16 bg-slack-purple rounded-2xl flex items-center justify-center shadow-lg">
                <MessageSquare className="w-8 h-8 text-white" />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-slack-gold rounded-full flex items-center justify-center">
                <Globe className="w-4 h-4 text-slack-dark" />
              </div>
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-slack-dark leading-tight">
            Break Language Barriers
            <br />
            <span className="text-slack-purple">Instantly</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            MultiLang Translator Bot helps your team communicate seamlessly across languages. 
            Just react with a flag emoji and watch the magic happen.
          </p>

          {/* Flag Demo */}
          <motion.div 
            className="flex justify-center items-center space-x-6 py-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <motion.div 
              className="text-4xl cursor-pointer hover:scale-110 transition-transform"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              🇯🇵
            </motion.div>
            <Zap className="w-6 h-6 text-slack-gold" />
            <motion.div 
              className="text-4xl cursor-pointer hover:scale-110 transition-transform"
              whileHover={{ scale: 1.2, rotate: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              🇺🇸
            </motion.div>
            <Zap className="w-6 h-6 text-slack-gold" />
            <motion.div 
              className="text-4xl cursor-pointer hover:scale-110 transition-transform"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              🇻🇳
            </motion.div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button 
              size="lg" 
              className="bg-slack-purple hover:bg-slack-purple/90 text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              Add to Slack
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-slack-purple text-slack-purple hover:bg-slack-purple hover:text-white px-8 py-6 text-lg font-semibold rounded-xl transition-all"
            >
              Watch Demo
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="pt-8 text-sm text-gray-500"
          >
            <p>Trusted by teams worldwide • No setup required • Works instantly</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}