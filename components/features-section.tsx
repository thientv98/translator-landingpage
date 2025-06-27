"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { 
  Zap, 
  Shield, 
  Users, 
  Clock, 
  Globe, 
  Workflow 
} from "lucide-react"

export default function FeaturesSection() {
  console.log("FeaturesSection component rendered")

  const features = [
    {
      icon: <Zap className="w-8 h-8 text-slack-gold" />,
      title: "Instant Translation",
      description: "Get translations in seconds with just an emoji reaction. No waiting, no delays."
    },
    {
      icon: <Shield className="w-8 h-8 text-slack-green" />,
      title: "Secure & Private",
      description: "Your messages are processed securely and never stored or shared outside your workspace."
    },
    {
      icon: <Users className="w-8 h-8 text-slack-purple" />,
      title: "Team-Friendly",
      description: "Perfect for multicultural teams working across different languages and time zones."
    },
    {
      icon: <Clock className="w-8 h-8 text-slack-gold" />,
      title: "24/7 Available",
      description: "Works around the clock, ensuring communication never stops regardless of language barriers."
    },
    {
      icon: <Globe className="w-8 h-8 text-slack-green" />,
      title: "Auto-Detection",
      description: "Automatically detects the source language, so you don't need to specify what you're translating from."
    },
    {
      icon: <Workflow className="w-8 h-8 text-slack-purple" />,
      title: "Zero Setup",
      description: "No configuration needed. Add to Slack and start translating immediately with emoji reactions."
    }
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-slack-dark mb-6">
            Why Teams Love It
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Built for modern teams who need seamless communication across languages.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-0 shadow-md hover:shadow-xl transition-all duration-300 group hover:scale-105">
                <CardContent className="p-8 space-y-4">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-br from-slack-gray to-white rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all">
                    {feature.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-slack-dark">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="text-center space-y-2">
            <div className="text-4xl font-bold text-slack-purple">99.9%</div>
            <p className="text-gray-600">Translation Accuracy</p>
          </div>
          
          <div className="text-center space-y-2">
            <div className="text-4xl font-bold text-slack-green">&lt;2s</div>
            <p className="text-gray-600">Average Response Time</p>
          </div>
          
          <div className="text-center space-y-2">
            <div className="text-4xl font-bold text-slack-gold">24/7</div>
            <p className="text-gray-600">Always Available</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}