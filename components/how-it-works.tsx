"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { MessageCircle, MousePointer, Sparkles } from "lucide-react"

export default function HowItWorks() {
  console.log("HowItWorks component rendered")

  const steps = [
    {
      icon: <MessageCircle className="w-8 h-8 text-slack-purple" />,
      title: "Someone Posts a Message",
      description: "Any team member posts a message in any language in your Slack channel.",
      emoji: "💬"
    },
    {
      icon: <MousePointer className="w-8 h-8 text-slack-green" />,
      title: "React with Flag Emoji",
      description: "Simply react to the message with 🇯🇵 for Japanese, 🇺🇸 for English, or 🇻🇳 for Vietnamese.",
      emoji: "👆"
    },
    {
      icon: <Sparkles className="w-8 h-8 text-slack-gold" />,
      title: "Instant Translation",
      description: "The bot automatically detects the language and posts the translation in the same channel.",
      emoji: "✨"
    }
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-slack-dark mb-6">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            No slash commands, no complex setup. Just react and read.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-8 text-center space-y-6">
                  {/* Step Number */}
                  <div className="w-12 h-12 bg-gradient-to-br from-slack-purple to-slack-green rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto">
                    {index + 1}
                  </div>

                  {/* Icon & Emoji */}
                  <div className="flex justify-center items-center space-x-4">
                    {step.icon}
                    <span className="text-3xl">{step.emoji}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-slack-dark">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Demo Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-slack-gray to-white rounded-3xl p-8 md:p-12"
        >
          <h3 className="text-2xl font-bold text-slack-dark text-center mb-8">
            Supported Languages
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="text-6xl">🇯🇵</div>
              <h4 className="text-xl font-semibold text-slack-dark">Japanese</h4>
              <p className="text-gray-600">React with 🇯🇵 to translate to Japanese</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="text-6xl">🇺🇸</div>
              <h4 className="text-xl font-semibold text-slack-dark">English</h4>
              <p className="text-gray-600">React with 🇺🇸 to translate to English</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="text-6xl">🇻🇳</div>
              <h4 className="text-xl font-semibold text-slack-dark">Vietnamese</h4>
              <p className="text-gray-600">React with 🇻🇳 to translate to Vietnamese</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}