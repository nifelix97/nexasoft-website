"use client"

import { ArrowLeft, Shield, Eye, Lock, Database, Users, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function PrivacyPolicyPage() {
  const sections = [
    {
      icon: <Eye className="h-6 w-6" />,
      title: "Information We Collect",
      content: [
        "Personal information you provide when contacting us or requesting services",
        "Technical information about your device and browsing behavior",
        "Cookies and similar tracking technologies",
        "Communication records and project-related information",
      ],
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "How We Use Your Information",
      content: [
        "To provide and improve our services",
        "To communicate with you about projects and updates",
        "To analyze website usage and optimize user experience",
        "To comply with legal obligations and protect our rights",
      ],
    },
    {
      icon: <Lock className="h-6 w-6" />,
      title: "Data Security",
      content: [
        "We implement industry-standard security measures",
        "Data is encrypted in transit and at rest",
        "Regular security audits and updates",
        "Limited access to personal information on a need-to-know basis",
      ],
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Information Sharing",
      content: [
        "We do not sell your personal information to third parties",
        "Information may be shared with trusted service providers",
        "Legal compliance may require disclosure in certain circumstances",
        "Business transfers may include customer information",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <Navbar />

      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white py-20 pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button variant="ghost" asChild className="mb-6 text-white hover:bg-white/10">
            <Link href="/">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
          </Button>
          <div className="text-center">
            <Badge className="mb-4 bg-white/20 text-white">Legal</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Privacy Policy</h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
              Your privacy is important to us. This policy explains how we collect, use, and protect your information.
            </p>
            <p className="text-sm opacity-75 mt-4">Last updated: January 2024</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Introduction */}
          <Card className="mb-12 dark:bg-gray-800 dark:border-gray-700">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <Shield className="h-8 w-8 text-emerald-600" />
                <div>
                  <CardTitle className="text-2xl dark:text-white">Our Commitment to Privacy</CardTitle>
                  <CardDescription className="dark:text-gray-300">
                    NexaSoft is committed to protecting your privacy and personal information.
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="dark:text-gray-300">
              <p className="text-lg leading-relaxed">
                This Privacy Policy describes how NexaSoft ("we," "our," or "us") collects, uses, and shares information
                about you when you use our website, services, or interact with us. By using our services, you agree to
                the collection and use of information in accordance with this policy.
              </p>
            </CardContent>
          </Card>

          {/* Main Sections */}
          <div className="space-y-8">
            {sections.map((section, index) => (
              <Card key={index} className="dark:bg-gray-800 dark:border-gray-700">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900 rounded-lg flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                      {section.icon}
                    </div>
                    <CardTitle className="text-xl dark:text-white">{section.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {section.content.map((item, idx) => (
                      <li key={idx} className="flex items-start space-x-3 dark:text-gray-300">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Sections */}
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <Card className="dark:bg-gray-800 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="dark:text-white">Your Rights</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 dark:text-gray-300">
                <p>• Access your personal information</p>
                <p>• Correct inaccurate information</p>
                <p>• Request deletion of your data</p>
                <p>• Opt-out of marketing communications</p>
                <p>• Data portability rights</p>
              </CardContent>
            </Card>

            <Card className="dark:bg-gray-800 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="dark:text-white">Cookies & Tracking</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 dark:text-gray-300">
                <p>• Essential cookies for website functionality</p>
                <p>• Analytics cookies to improve our services</p>
                <p>• Marketing cookies for personalized content</p>
                <p>• You can manage cookie preferences</p>
                <p>
                  <Link href="/cookies" className="text-emerald-600 hover:underline">
                    View Cookie Policy
                  </Link>
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Section */}
          <Card className="mt-12 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 border-emerald-200 dark:border-emerald-800">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <Mail className="h-6 w-6 text-emerald-600" />
                <CardTitle className="dark:text-white">Questions About Privacy?</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="space-y-2 text-sm dark:text-gray-300">
                <p>
                  <strong>Email:</strong> privacy@nexasoft.com
                </p>
                <p>
                  <strong>Phone:</strong> +1 (555) 123-4567
                </p>
                <p>
                  <strong>Address:</strong> 123 Tech Street, Innovation District, City, State 12345
                </p>
              </div>
              <Button asChild className="mt-4 bg-emerald-600 hover:bg-emerald-700">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </CardContent>
          </Card>

          {/* Updates */}
          <Card className="mt-8 dark:bg-gray-800 dark:border-gray-700">
            <CardContent className="pt-6">
              <h3 className="font-semibold mb-2 dark:text-white">Policy Updates</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the
                new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this
                Privacy Policy periodically for any changes.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
      <Footer />
    </div>
  )
}
