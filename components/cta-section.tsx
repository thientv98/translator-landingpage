"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight, MessageSquare, Star } from "lucide-react"

export default function CTASection() {
  console.log("CTASection component rendered")

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slack-purple via-purple-800 to-slack-purple">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          {/* Icon */}
          <div className="flex justify-center">
            <div className="w-20 h-20 bg-white/10 rounded-3xl flex items-center justify-center backdrop-blur-sm">
              <MessageSquare className="w-10 h-10 text-white" />
            </div>
          </div>

          {/* Headline */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Ready to Break Down
            <br />
            Language Barriers?
          </h2>

          {/* Subheadline */}
          <p className="text-xl sm:text-2xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
            Join thousands of teams who communicate seamlessly across languages. 
            Setup takes less than 60 seconds.
          </p>

          {/* Testimonial */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto"
          >
            <div className="flex justify-center mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-5 h-5 text-slack-gold fill-current" />
              ))}
            </div>
            <p className="text-purple-100 italic text-lg">
              "Game changer for our international team. Translation happens instantly and the UX is perfect."
            </p>
            <p className="text-purple-200 mt-3 font-medium">
              — Sarah Kim, Product Manager at TechCorp
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button 
              size="lg" 
              className="bg-white text-slack-purple hover:bg-gray-100 px-8 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all group"
            >
              Add to Slack
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-slack-purple px-8 py-6 text-lg font-semibold rounded-xl transition-all"
            >
              View Documentation
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            viewport={{ once: true }}
            className="pt-8 text-purple-200 text-sm"
          >
            <p>Free to install • No credit card required • 30-day money-back guarantee</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}