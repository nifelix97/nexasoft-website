"use client"

import { ArrowLeft, Cookie, Settings, BarChart, Target, Shield, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import Link from "next/link"
import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function CookiePolicyPage() {
  const [cookiePreferences, setCookiePreferences] = useState({
    essential: true, // Always enabled
    analytics: true,
    marketing: false,
    functional: true,
  })

  const cookieTypes = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Essential Cookies",
      description: "Required for basic website functionality",
      required: true,
      examples: ["Session management", "Security features", "Load balancing", "Form submissions"],
      retention: "Session or up to 1 year",
    },
    {
      icon: <BarChart className="h-6 w-6" />,
      title: "Analytics Cookies",
      description: "Help us understand how visitors use our website",
      required: false,
      examples: ["Google Analytics", "Page views", "User behavior", "Performance metrics"],
      retention: "Up to 2 years",
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Marketing Cookies",
      description: "Used to deliver personalized advertisements",
      required: false,
      examples: ["Ad targeting", "Social media pixels", "Retargeting", "Campaign tracking"],
      retention: "Up to 1 year",
    },
    {
      icon: <Settings className="h-6 w-6" />,
      title: "Functional Cookies",
      description: "Enable enhanced functionality and personalization",
      required: false,
      examples: ["Language preferences", "Theme settings", "Chat widgets", "Video players"],
      retention: "Up to 1 year",
    },
  ]

  const handlePreferenceChange = (type: string, enabled: boolean) => {
    if (type === "essential") return // Essential cookies cannot be disabled
    setCookiePreferences((prev) => ({
      ...prev,
      [type]: enabled,
    }))
  }

  const savePreferences = () => {
    // Here you would typically save preferences to localStorage or send to your backend
    console.log("Cookie preferences saved:", cookiePreferences)
    alert("Cookie preferences saved successfully!")
  }

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
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Cookie Policy</h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
              Learn about how we use cookies and similar technologies to improve your experience on our website.
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
                <Cookie className="h-8 w-8 text-emerald-600" />
                <div>
                  <CardTitle className="text-2xl dark:text-white">What Are Cookies?</CardTitle>
                  <CardDescription className="dark:text-gray-300">
                    Understanding cookies and how we use them on our website.
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="dark:text-gray-300">
              <p className="text-lg leading-relaxed mb-4">
                Cookies are small text files that are stored on your device when you visit our website. They help us
                provide you with a better experience by remembering your preferences and understanding how you use our
                site.
              </p>
              <p className="leading-relaxed">
                We use both first-party cookies (set by NexaSoft) and third-party cookies (set by our partners) to
                enhance functionality, analyze usage, and provide personalized content.
              </p>
            </CardContent>
          </Card>

          {/* Cookie Types */}
          <div className="space-y-8">
            {cookieTypes.map((type, index) => {
              const preferenceKey = type.title.toLowerCase().split(" ")[0] as keyof typeof cookiePreferences
              const isEnabled = cookiePreferences[preferenceKey]

              return (
                <Card key={index} className="dark:bg-gray-800 dark:border-gray-700">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900 rounded-lg flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                          {type.icon}
                        </div>
                        <div>
                          <CardTitle className="text-xl dark:text-white">{type.title}</CardTitle>
                          <CardDescription className="dark:text-gray-300">{type.description}</CardDescription>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        {type.required && <Badge variant="secondary">Required</Badge>}
                        <Switch
                          checked={isEnabled}
                          onCheckedChange={(checked) => handlePreferenceChange(preferenceKey, checked)}
                          disabled={type.required}
                        />
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-2 dark:text-white">Examples:</h4>
                        <ul className="space-y-1">
                          {type.examples.map((example, idx) => (
                            <li key={idx} className="flex items-start space-x-2 text-sm dark:text-gray-300">
                              <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span>{example}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 dark:text-white">Retention Period:</h4>
                        <p className="text-sm dark:text-gray-300">{type.retention}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Cookie Preferences */}
          <Card className="mt-12 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 border-emerald-200 dark:border-emerald-800">
            <CardHeader>
              <CardTitle className="dark:text-white">Manage Your Cookie Preferences</CardTitle>
              <CardDescription className="dark:text-gray-300">
                You can control which cookies we use by adjusting your preferences below.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-lg">
                  <div>
                    <h4 className="font-medium dark:text-white">Essential Cookies</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Always enabled - required for basic functionality
                    </p>
                  </div>
                  <Switch checked={true} disabled />
                </div>
                <div className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-lg">
                  <div>
                    <h4 className="font-medium dark:text-white">Analytics Cookies</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Help us improve our website</p>
                  </div>
                  <Switch
                    checked={cookiePreferences.analytics}
                    onCheckedChange={(checked) => handlePreferenceChange("analytics", checked)}
                  />
                </div>
                <div className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-lg">
                  <div>
                    <h4 className="font-medium dark:text-white">Marketing Cookies</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Personalized ads and content</p>
                  </div>
                  <Switch
                    checked={cookiePreferences.marketing}
                    onCheckedChange={(checked) => handlePreferenceChange("marketing", checked)}
                  />
                </div>
                <div className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-lg">
                  <div>
                    <h4 className="font-medium dark:text-white">Functional Cookies</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Enhanced features and personalization</p>
                  </div>
                  <Switch
                    checked={cookiePreferences.functional}
                    onCheckedChange={(checked) => handlePreferenceChange("functional", checked)}
                  />
                </div>
              </div>
              <Button onClick={savePreferences} className="mt-6 w-full bg-emerald-600 hover:bg-emerald-700">
                Save Preferences
              </Button>
            </CardContent>
          </Card>

          {/* Third-Party Cookies */}
          <Card className="mt-8 dark:bg-gray-800 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="dark:text-white">Third-Party Cookies</CardTitle>
            </CardHeader>
            <CardContent className="dark:text-gray-300">
              <p className="mb-4">We use the following third-party services that may set cookies:</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h4 className="font-semibold dark:text-white">Analytics:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Google Analytics</li>
                    <li>• Hotjar</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold dark:text-white">Marketing:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Google Ads</li>
                    <li>• Facebook Pixel</li>
                    <li>• LinkedIn Insight Tag</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Browser Controls */}
          <Card className="mt-8 dark:bg-gray-800 dark:border-gray-700">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <Info className="h-6 w-6 text-emerald-600" />
                <CardTitle className="dark:text-white">Browser Cookie Controls</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="dark:text-gray-300">
              <p className="mb-4">You can also manage cookies through your browser settings:</p>
              <ul className="space-y-2 text-sm">
                <li>
                  • <strong>Chrome:</strong> Settings → Privacy and security → Cookies and other site data
                </li>
                <li>
                  • <strong>Firefox:</strong> Preferences → Privacy & Security → Cookies and Site Data
                </li>
                <li>
                  • <strong>Safari:</strong> Preferences → Privacy → Manage Website Data
                </li>
                <li>
                  • <strong>Edge:</strong> Settings → Cookies and site permissions → Cookies and site data
                </li>
              </ul>
              <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                Note: Disabling certain cookies may affect website functionality.
              </p>
            </CardContent>
          </Card>

          {/* Contact */}
          <Card className="mt-12 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 border-emerald-200 dark:border-emerald-800">
            <CardHeader>
              <CardTitle className="dark:text-white">Questions About Cookies?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                If you have any questions about our use of cookies, please contact us:
              </p>
              <div className="space-y-2 text-sm dark:text-gray-300">
                <p>
                  <strong>Email:</strong> privacy@nexasoft.com
                </p>
                <p>
                  <strong>Phone:</strong> +1 (555) 123-4567
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
