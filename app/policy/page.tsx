import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Shield, Eye, Lock, Database, Globe, MessageSquare } from "lucide-react"

export default function PolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-slack-purple rounded-xl flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-4xl font-bold text-gray-900">Privacy Policy</h1>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to protecting your privacy and data when using Caster Translator Bot
            </p>
            <p className="text-sm text-gray-500 mt-4">
              Last updated: {new Date().toLocaleDateString('en-US')}
            </p>
          </div>

          {/* Main Content */}
          <div className="prose prose-lg max-w-none">
            {/* Section 1: Introduction */}
            <section className="mb-12">
              <div className="flex items-center space-x-3 mb-6">
                <MessageSquare className="w-6 h-6 text-slack-purple" />
                <h2 className="text-2xl font-bold text-gray-900 m-0">1. Introduction</h2>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">
                  Caster Translator Bot is an automatic translation application for Slack that helps break down language barriers in workplace communication. 
                  We are committed to protecting the privacy and data of our users.
                </p>
                <p className="text-gray-700">
                  By using Caster Translator Bot, you agree to the terms outlined in this privacy policy.
                </p>
              </div>
            </section>

            {/* Section 2: Data Collection */}
            <section className="mb-12">
              <div className="flex items-center space-x-3 mb-6">
                <Database className="w-6 h-6 text-slack-purple" />
                <h2 className="text-2xl font-bold text-gray-900 m-0">2. Information We Collect</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-3">Message Information</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Content of messages to be translated</li>
                    <li>• Source and target languages</li>
                    <li>• Message timestamps</li>
                    <li>• Channel/workspace IDs</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-3">User Information</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Slack User ID</li>
                    <li>• Display name</li>
                    <li>• Workspace information</li>
                    <li>• Preferred language settings</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 3: Data Usage */}
            <section className="mb-12">
              <div className="flex items-center space-x-3 mb-6">
                <Globe className="w-6 h-6 text-slack-purple" />
                <h2 className="text-2xl font-bold text-gray-900 m-0">3. How We Use Your Data</h2>
              </div>
              <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-lg">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Primary Purposes</h3>
                    <ul className="text-gray-700 space-y-2">
                      <li>✓ Perform message translations</li>
                      <li>✓ Improve translation quality</li>
                      <li>✓ Customize user experience</li>
                      <li>✓ Provide technical support</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Our Commitments</h3>
                    <ul className="text-gray-700 space-y-2">
                      <li>🔒 No sharing with third parties</li>
                      <li>🔒 No use for advertising</li>
                      <li>🔒 No long-term storage</li>
                      <li>🔒 GDPR and CCPA compliant</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 4: Data Security */}
            <section className="mb-12">
              <div className="flex items-center space-x-3 mb-6">
                <Lock className="w-6 h-6 text-slack-purple" />
                <h2 className="text-2xl font-bold text-gray-900 m-0">4. Data Security</h2>
              </div>
              <div className="bg-red-50 border border-red-200 p-6 rounded-lg">
                <h3 className="font-semibold text-red-900 mb-4">Security Measures</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-medium text-red-900">Encryption</h4>
                    <p className="text-sm text-red-700">AES-256 encryption for all data</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Lock className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-medium text-red-900">Access Control</h4>
                    <p className="text-sm text-red-700">2FA authentication for all staff</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Database className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-medium text-red-900">Storage</h4>
                    <p className="text-sm text-red-700">Secure servers hosted on AWS</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 5: Your Rights */}
            <section className="mb-12">
              <div className="flex items-center space-x-3 mb-6">
                <Eye className="w-6 h-6 text-slack-purple" />
                <h2 className="text-2xl font-bold text-gray-900 m-0">5. Your Rights</h2>
              </div>
              <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">You have the right to:</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="text-gray-700 space-y-2">
                    <li>📋 View information we store about you</li>
                    <li>✏️ Edit or update your information</li>
                    <li>🗑️ Request deletion of personal data</li>
                    <li>📤 Export your data</li>
                  </ul>
                  <ul className="text-gray-700 space-y-2">
                    <li>🚫 Object to data processing</li>
                    <li>📧 Be notified of data breaches</li>
                    <li>⚖️ File complaints with regulatory authorities</li>
                    <li>🔒 Withdraw consent at any time</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 6: Data Retention */}
            <section className="mb-12">
              <div className="flex items-center space-x-3 mb-6">
                <Database className="w-6 h-6 text-slack-purple" />
                <h2 className="text-2xl font-bold text-gray-900 m-0">6. Data Retention</h2>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-slack-purple mb-2">24 hours</div>
                    <h4 className="font-medium text-gray-900">Message Content</h4>
                    <p className="text-sm text-gray-600">Automatically deleted after translation</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-slack-purple mb-2">30 days</div>
                    <h4 className="font-medium text-gray-900">System Logs</h4>
                    <p className="text-sm text-gray-600">For debugging purposes</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-slack-purple mb-2">∞</div>
                    <h4 className="font-medium text-gray-900">User Settings</h4>
                    <p className="text-sm text-gray-600">Until you uninstall the bot</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 7: Contact */}
            <section className="mb-12">
              <div className="flex items-center space-x-3 mb-6">
                <MessageSquare className="w-6 h-6 text-slack-purple" />
                <h2 className="text-2xl font-bold text-gray-900 m-0">7. Contact Us</h2>
              </div>
              <div className="bg-slack-purple text-white p-6 rounded-lg">
                <p className="mb-4">
                  If you have questions about this policy or want to exercise your rights, please contact us:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium mb-2">📧 Email</h4>
                    <p>thien.truong@cast-er.com</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">🏢 Address</h4>
                    <p>EBM Tower, 683-685 Dien Bien Phu, Ward 25, Binh Thanh District, Ho Chi Minh City, Vietnam</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 8: Policy Updates */}
            <section className="mb-12">
              <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-3">📝 Policy Changes</h3>
                <p className="text-blue-800">
                  We may update this policy from time to time. Significant changes will be notified 
                  through your Slack workspace and registered email. Continued use of the bot after 
                  changes means you accept the new policy.
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
} 