"use client"

import type React from "react"

import { useState } from "react"
import { Calendar, Clock, CheckCircle, Video, Phone, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function ScheduleCallPage() {
  const [selectedDate, setSelectedDate] = useState("")
  const [selectedTime, setSelectedTime] = useState("")
  const [callType, setCallType] = useState("")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    projectType: "",
    message: "",
  })
  const [isScheduled, setIsScheduled] = useState(false)

  const availableDates = [
    "2024-01-15",
    "2024-01-16",
    "2024-01-17",
    "2024-01-18",
    "2024-01-19",
    "2024-01-22",
    "2024-01-23",
  ]

  const timeSlots = ["09:00 AM", "10:00 AM", "11:00 AM", "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM"]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the data to your backend
    console.log("Call scheduled:", { ...formData, selectedDate, selectedTime, callType })
    setIsScheduled(true)
  }

  if (isScheduled) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 flex items-center justify-center px-4">
        <Card className="max-w-md w-full text-center">
          <CardHeader>
            <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="h-8 w-8 text-white" />
            </div>
            <CardTitle className="text-2xl font-bold text-gray-900">Call Scheduled!</CardTitle>
            <CardDescription>
              Your consultation has been scheduled for {selectedDate} at {selectedTime}. We'll send you a calendar
              invite and meeting details shortly.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-emerald-50 p-4 rounded-lg">
              <h3 className="font-medium text-emerald-800 mb-2">What to Expect:</h3>
              <ul className="text-sm text-emerald-700 space-y-1">
                <li>• 30-minute consultation call</li>
                <li>• Discussion of your project requirements</li>
                <li>• Technical recommendations</li>
                <li>• Timeline and budget estimates</li>
              </ul>
            </div>
            <Button asChild className="w-full bg-gradient-to-r from-emerald-500 to-teal-600">
              <Link href="/">Return to Home</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <Navbar />
      <div className="pt-20 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Schedule a Consultation</h1>
            <p className="text-xl text-gray-600">
              Book a free 30-minute consultation to discuss your project requirements and get expert advice.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Book Your Free Consultation</CardTitle>
                  <CardDescription>
                    Choose your preferred date, time, and call type. We'll discuss your project and provide
                    recommendations.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Call Type Selection */}
                    <div>
                      <Label className="text-base font-medium">Preferred Call Type</Label>
                      <div className="grid md:grid-cols-3 gap-4 mt-3">
                        <Card
                          className={`cursor-pointer transition-all ${callType === "video" ? "ring-2 ring-emerald-500 bg-emerald-50" : "hover:shadow-md"}`}
                          onClick={() => setCallType("video")}
                        >
                          <CardContent className="p-4 text-center">
                            <Video className="h-8 w-8 mx-auto mb-2 text-emerald-600" />
                            <h3 className="font-medium">Video Call</h3>
                            <p className="text-sm text-gray-600">Zoom/Google Meet</p>
                          </CardContent>
                        </Card>
                        <Card
                          className={`cursor-pointer transition-all ${callType === "phone" ? "ring-2 ring-emerald-500 bg-emerald-50" : "hover:shadow-md"}`}
                          onClick={() => setCallType("phone")}
                        >
                          <CardContent className="p-4 text-center">
                            <Phone className="h-8 w-8 mx-auto mb-2 text-emerald-600" />
                            <h3 className="font-medium">Phone Call</h3>
                            <p className="text-sm text-gray-600">Traditional call</p>
                          </CardContent>
                        </Card>
                        <Card
                          className={`cursor-pointer transition-all ${callType === "chat" ? "ring-2 ring-emerald-500 bg-emerald-50" : "hover:shadow-md"}`}
                          onClick={() => setCallType("chat")}
                        >
                          <CardContent className="p-4 text-center">
                            <MessageSquare className="h-8 w-8 mx-auto mb-2 text-emerald-600" />
                            <h3 className="font-medium">Chat Session</h3>
                            <p className="text-sm text-gray-600">Text-based meeting</p>
                          </CardContent>
                        </Card>
                      </div>
                    </div>

                    {/* Date and Time Selection */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="date">Select Date *</Label>
                        <Select onValueChange={setSelectedDate} required>
                          <SelectTrigger>
                            <SelectValue placeholder="Choose a date" />
                          </SelectTrigger>
                          <SelectContent>
                            {availableDates.map((date) => (
                              <SelectItem key={date} value={date}>
                                {new Date(date).toLocaleDateString("en-US", {
                                  weekday: "long",
                                  year: "numeric",
                                  month: "long",
                                  day: "numeric",
                                })}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="time">Select Time *</Label>
                        <Select onValueChange={setSelectedTime} required>
                          <SelectTrigger>
                            <SelectValue placeholder="Choose a time" />
                          </SelectTrigger>
                          <SelectContent>
                            {timeSlots.map((time) => (
                              <SelectItem key={time} value={time}>
                                {time} (EST)
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Personal Information */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="company">Company Name</Label>
                        <Input
                          id="company"
                          value={formData.company}
                          onChange={(e) => setFormData((prev) => ({ ...prev, company: e.target.value }))}
                          placeholder="Your Company"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="projectType">Project Type</Label>
                      <Select onValueChange={(value) => setFormData((prev) => ({ ...prev, projectType: value }))}>
                        <SelectTrigger>
                          <SelectValue placeholder="What type of project are you considering?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="web-app">Web Application</SelectItem>
                          <SelectItem value="mobile-app">Mobile Application</SelectItem>
                          <SelectItem value="ecommerce">E-commerce Platform</SelectItem>
                          <SelectItem value="real-estate">Real Estate Platform</SelectItem>
                          <SelectItem value="iot">IoT Solution</SelectItem>
                          <SelectItem value="custom">Custom Software</SelectItem>
                          <SelectItem value="consultation">General Consultation</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="message">Tell us about your project</Label>
                      <Textarea
                        id="message"
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
                        placeholder="Briefly describe your project, goals, and any specific questions you'd like to discuss..."
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700"
                      size="lg"
                      disabled={!selectedDate || !selectedTime || !callType}
                    >
                      Schedule Consultation
                      <Calendar className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>What We'll Cover</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Clock className="h-5 w-5 text-emerald-600 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Project Requirements</h4>
                      <p className="text-sm text-gray-600">Understand your goals and technical needs</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="h-5 w-5 text-emerald-600 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Technical Recommendations</h4>
                      <p className="text-sm text-gray-600">Best technologies and approaches for your project</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="h-5 w-5 text-emerald-600 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Timeline & Budget</h4>
                      <p className="text-sm text-gray-600">Realistic estimates for your project scope</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="h-5 w-5 text-emerald-600 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Next Steps</h4>
                      <p className="text-sm text-gray-600">Clear roadmap to get your project started</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white">
                <CardHeader>
                  <CardTitle>Free Consultation</CardTitle>
                  <CardDescription className="text-emerald-100">
                    No commitment required. Get expert advice on your project.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 mr-2" />
                      30-minute session
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 mr-2" />
                      Expert technical advice
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 mr-2" />
                      Project roadmap
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 mr-2" />
                      No sales pressure
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Available Times</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Monday - Friday:</span>
                      <span>9:00 AM - 6:00 PM EST</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday:</span>
                      <span>10:00 AM - 4:00 PM EST</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday:</span>
                      <span>Closed</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
