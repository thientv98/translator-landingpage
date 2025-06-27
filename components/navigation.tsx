"use client"

import { Button } from "@/components/ui/button"
import { MessageSquare, Menu, X } from "lucide-react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { handleAddToSlack } from "@/lib/utils"

export default function Navigation() {
  console.log("Navigation component rendered")
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    console.log("Menu toggled:", !isMenuOpen)
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-slack-purple rounded-xl flex items-center justify-center">
              <MessageSquare className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-slack-dark">
              CasterTranslatorBot
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-700 hover:text-slack-purple transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="text-gray-700 hover:text-slack-purple transition-colors">
              How it Works
            </a>
            <a href="#pricing" className="text-gray-700 hover:text-slack-purple transition-colors">
              Pricing
            </a>
            <a href="#support" className="text-gray-700 hover:text-slack-purple transition-colors">
              Support
            </a>
            <Button className="bg-slack-purple hover:bg-slack-purple/90 text-white" onClick={handleAddToSlack}>
              Add to Slack
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden border-t border-gray-200 bg-white"
            >
              <div className="px-4 py-4 space-y-4">
                <a 
                  href="#features" 
                  className="block text-gray-700 hover:text-slack-purple transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Features
                </a>
                <a 
                  href="#how-it-works" 
                  className="block text-gray-700 hover:text-slack-purple transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  How it Works
                </a>
                <a 
                  href="#pricing" 
                  className="block text-gray-700 hover:text-slack-purple transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Pricing
                </a>
                <a 
                  href="#support" 
                  className="block text-gray-700 hover:text-slack-purple transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Support
                </a>
                <Button className="w-full bg-slack-purple hover:bg-slack-purple/90 text-white" onClick={handleAddToSlack}>
                  Add to Slack
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}