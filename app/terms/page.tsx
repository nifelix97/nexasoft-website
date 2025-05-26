"use client"

import { ArrowLeft, FileText, Scale, AlertTriangle, Shield, Users, Gavel } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function TermsOfServicePage() {
  const sections = [
    {
      icon: <Users className="h-6 w-6" />,
      title: "Acceptance of Terms",
      content: [
        "By accessing and using NexaSoft services, you accept and agree to be bound by these terms",
        "If you do not agree to these terms, you may not use our services",
        "We reserve the right to modify these terms at any time",
        "Continued use of our services constitutes acceptance of modified terms",
      ],
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Services Description",
      content: [
        "Web development and custom software solutions",
        "Mobile application development for iOS and Android",
        "IoT solutions and smart device integration",
        "Consulting and technical support services",
      ],
    },
    {
      icon: <Scale className="h-6 w-6" />,
      title: "User Responsibilities",
      content: [
        "Provide accurate and complete information",
        "Maintain confidentiality of account credentials",
        "Use services in compliance with applicable laws",
        "Respect intellectual property rights",
      ],
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Intellectual Property",
      content: [
        "All content and materials are owned by NexaSoft or licensed to us",
        "You retain ownership of content you provide to us",
        "We grant you a limited license to use our services",
        "Unauthorized use of our intellectual property is prohibited",
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Terms of Service</h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
              These terms govern your use of NexaSoft services and establish the legal relationship between us.
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
                <Gavel className="h-8 w-8 text-emerald-600" />
                <div>
                  <CardTitle className="text-2xl dark:text-white">Legal Agreement</CardTitle>
                  <CardDescription className="dark:text-gray-300">
                    These Terms of Service constitute a legally binding agreement.
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="dark:text-gray-300">
              <p className="text-lg leading-relaxed">
                Welcome to NexaSoft. These Terms of Service ("Terms") govern your use of our website, services, and
                products. Please read these Terms carefully before using our services. By accessing or using our
                services, you agree to be bound by these Terms.
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

          {/* Additional Terms */}
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <Card className="dark:bg-gray-800 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="dark:text-white">Payment Terms</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 dark:text-gray-300">
                <p>• Payment terms are specified in project agreements</p>
                <p>• Invoices are due within 30 days unless otherwise agreed</p>
                <p>• Late payments may incur additional fees</p>
                <p>• Refunds are subject to our refund policy</p>
                <p>• All prices are in USD unless specified otherwise</p>
              </CardContent>
            </Card>

            <Card className="dark:bg-gray-800 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="dark:text-white">Service Availability</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 dark:text-gray-300">
                <p>• We strive for 99.9% uptime for our services</p>
                <p>• Scheduled maintenance will be announced in advance</p>
                <p>• We are not liable for third-party service interruptions</p>
                <p>• Emergency maintenance may occur without notice</p>
                <p>• Service credits may apply for extended outages</p>
              </CardContent>
            </Card>
          </div>

          {/* Limitation of Liability */}
          <Card className="mt-12 border-orange-200 dark:border-orange-800 bg-orange-50 dark:bg-orange-900/20">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <AlertTriangle className="h-6 w-6 text-orange-600" />
                <CardTitle className="dark:text-white">Limitation of Liability</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="dark:text-gray-300">
              <p className="mb-4">
                <strong>IMPORTANT:</strong> Please read this section carefully as it limits our liability.
              </p>
              <ul className="space-y-2 text-sm">
                <li>
                  • NexaSoft's total liability shall not exceed the amount paid by you for the specific service that
                  gave rise to the claim
                </li>
                <li>• We are not liable for indirect, incidental, special, consequential, or punitive damages</li>
                <li>• We do not warrant that our services will be uninterrupted or error-free</li>
                <li>• Some jurisdictions do not allow limitation of liability, so these limits may not apply to you</li>
              </ul>
            </CardContent>
          </Card>

          {/* Termination */}
          <Card className="mt-8 dark:bg-gray-800 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="dark:text-white">Termination</CardTitle>
            </CardHeader>
            <CardContent className="dark:text-gray-300">
              <p className="mb-4">
                Either party may terminate services with appropriate notice as specified in individual service
                agreements. Upon termination:
              </p>
              <ul className="space-y-2">
                <li>• You must cease using our services immediately</li>
                <li>• We will provide you with your data in a standard format</li>
                <li>• Outstanding payments become immediately due</li>
                <li>• Confidentiality obligations survive termination</li>
              </ul>
            </CardContent>
          </Card>

          {/* Governing Law */}
          <Card className="mt-8 dark:bg-gray-800 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="dark:text-white">Governing Law & Disputes</CardTitle>
            </CardHeader>
            <CardContent className="dark:text-gray-300">
              <p className="mb-4">
                These Terms are governed by the laws of [Your State/Country]. Any disputes will be resolved through:
              </p>
              <ul className="space-y-2">
                <li>• Good faith negotiation first</li>
                <li>• Mediation if negotiation fails</li>
                <li>• Binding arbitration as a last resort</li>
                <li>• Courts of [Your Jurisdiction] for any legal proceedings</li>
              </ul>
            </CardContent>
          </Card>

          {/* Contact */}
          <Card className="mt-12 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 border-emerald-200 dark:border-emerald-800">
            <CardHeader>
              <CardTitle className="dark:text-white">Questions About These Terms?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="space-y-2 text-sm dark:text-gray-300">
                <p>
                  <strong>Email:</strong> legal@nexasoft.com
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
        </div>
      </section>
      <Footer />
    </div>
  )
}
