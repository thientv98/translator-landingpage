'use client'
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { 
  MessageSquare, 
  Globe, 
  Zap, 
  Shield, 
  Users, 
  Settings, 
  HelpCircle, 
  Mail, 
  Phone, 
  Clock,
  CheckCircle,
  AlertCircle,
  Book,
  Download
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { handleAddToSlack } from "@/lib/utils"

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-slack-purple rounded-xl flex items-center justify-center">
                <HelpCircle className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-4xl font-bold text-gray-900">App Support</h1>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to know about MultiLang Bot - Installation, Usage, and Support
            </p>
          </div>

          {/* Quick Start Section */}
          <section className="mb-16">
            <div className="bg-gradient-to-r from-slack-purple/10 to-blue-50 p-8 rounded-2xl">
              <div className="flex items-center space-x-3 mb-6">
                <Zap className="w-6 h-6 text-slack-purple" />
                <h2 className="text-2xl font-bold text-gray-900">Quick Start Guide</h2>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mb-4">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Install the App</h3>
                  <p className="text-gray-600 text-sm mb-4">Click "Add to Slack" and authorize the app for your workspace.</p>
                  <Button 
                    size="sm" 
                    className="w-full bg-slack-purple hover:bg-slack-purple/90" 
                    onClick={handleAddToSlack}
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Add to Slack
                  </Button>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center mb-4">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">React with Flags</h3>
                  <p className="text-gray-600 text-sm">React to any message with flag emojis (🇺🇸, 🇯🇵, 🇻🇳, etc.) to translate.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center mb-4">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Get Translations</h3>
                  <p className="text-gray-600 text-sm">Receive instant, accurate translations in your preferred language.</p>
                </div>
              </div>
            </div>
          </section>

          {/* App Description */}
          <section className="mb-16">
            <div className="flex items-center space-x-3 mb-8">
              <MessageSquare className="w-6 h-6 text-slack-purple" />
              <h2 className="text-2xl font-bold text-gray-900">About MultiLang Bot</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">What is MultiLang Bot?</h3>
                <p className="text-gray-700 mb-4">
                  MultiLang Bot is a powerful Slack translation app that breaks down language barriers in your workspace. 
                  Simply react to any message with a flag emoji, and get instant translations in your preferred language.
                </p>
                <p className="text-gray-700">
                  Perfect for international teams, customer support, and multilingual collaboration.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Features</h3>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-gray-700">Support for 100+ languages</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-gray-700">Instant emoji-triggered translations</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-gray-700">Privacy-focused (24h data retention)</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-gray-700">Works in channels, DMs, and threads</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-gray-700">No slash commands needed</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* How It Works */}
          <section className="mb-16">
            <div className="flex items-center space-x-3 mb-8">
              <Globe className="w-6 h-6 text-slack-purple" />
              <h2 className="text-2xl font-bold text-gray-900">How It Works</h2>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl">
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MessageSquare className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">1. Message Posted</h3>
                  <p className="text-sm text-gray-600">Someone posts a message in any language</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🇺🇸</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">2. React with Flag</h3>
                  <p className="text-sm text-gray-600">React with target language flag emoji</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Globe className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">3. AI Translation</h3>
                  <p className="text-sm text-gray-600">Our AI processes and translates the message</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-yellow-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">4. Get Translation</h3>
                  <p className="text-sm text-gray-600">Receive accurate translation instantly</p>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-16">
            <div className="flex items-center space-x-3 mb-8">
              <HelpCircle className="w-6 h-6 text-slack-purple" />
              <h2 className="text-2xl font-bold text-gray-900">Frequently Asked Questions</h2>
            </div>
            <div className="space-y-4">
              {[
                {
                  q: "How do I install MultiLang Bot?",
                  a: "Click the 'Add to Slack' button above, authorize the app for your workspace, and you're ready to go!"
                },
                {
                  q: "Which languages are supported?",
                  a: "We support over 100 languages including English, Spanish, French, German, Japanese, Korean, Chinese, Vietnamese, and many more."
                },
                {
                  q: "How do I translate a message?",
                  a: "Simply react to any message with a flag emoji representing your target language (e.g., 🇺🇸 for English, 🇯🇵 for Japanese)."
                },
                {
                  q: "Is my data safe?",
                  a: "Yes! We automatically delete message content after 24 hours and never share your data with third parties. Check our Privacy Policy for details."
                },
                {
                  q: "Does it work in private channels and DMs?",
                  a: "Yes, MultiLang Bot works in public channels, private channels, group DMs, and direct messages."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
                  <p className="text-gray-700">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Contact Support */}
          <section className="mb-16">
            <div className="flex items-center space-x-3 mb-8">
              <Mail className="w-6 h-6 text-slack-purple" />
              <h2 className="text-2xl font-bold text-gray-900">Contact Support</h2>
            </div>
            <div className="bg-slack-purple text-white p-8 rounded-2xl">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <Mail className="w-8 h-8 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Email Support</h3>
                  <p className="text-sm opacity-90 mb-2">Get help via email</p>
                  <a href="mailto:support@multilangbot.com" className="text-sm underline">
                    support@multilangbot.com
                  </a>
                </div>
                <div className="text-center">
                  <Book className="w-8 h-8 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Documentation</h3>
                  <p className="text-sm opacity-90 mb-2">Detailed guides & tutorials</p>
                  <a href="/policy" className="text-sm underline">
                    Privacy Policy
                  </a>
                </div>
                <div className="text-center">
                  <Clock className="w-8 h-8 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Response Time</h3>
                  <p className="text-sm opacity-90">We typically respond within</p>
                  <p className="text-sm font-semibold">24 hours</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}