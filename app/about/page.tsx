"use client"

import { ArrowLeft, Users, Award, Zap, Target, Heart, Lightbulb, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  const values = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "Excellence",
      description: "We strive for perfection in every project, delivering solutions that exceed expectations.",
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Client-Focused",
      description: "Your success is our success. We build lasting partnerships with our clients.",
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Innovation",
      description: "We embrace cutting-edge technologies to create forward-thinking solutions.",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Reliability",
      description: "Dependable delivery, transparent communication, and ongoing support you can trust.",
    },
  ]

  const team = [
    {
      name: "Alex Johnson",
      role: "CEO & Founder",
      image: "/placeholder.svg?height=300&width=300",
      bio: "10+ years in tech leadership, passionate about transforming businesses through technology.",
    },
    {
      name: "Sarah Chen",
      role: "CTO",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Full-stack architect with expertise in scalable web applications and cloud infrastructure.",
    },
    {
      name: "Michael Rodriguez",
      role: "Lead Mobile Developer",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Mobile app specialist with 8+ years creating iOS and Android applications.",
    },
    {
      name: "Emily Davis",
      role: "IoT Solutions Engineer",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Hardware and software integration expert specializing in smart device ecosystems.",
    },
  ]

  const milestones = [
    {
      year: "2019",
      title: "Company Founded",
      description: "NexaSoft was established with a vision to transform businesses through technology.",
    },
    {
      year: "2020",
      title: "First Major Project",
      description: "Successfully launched our first e-commerce platform, setting the foundation for growth.",
    },
    {
      year: "2021",
      title: "Team Expansion",
      description: "Grew our team to include specialists in mobile development and IoT solutions.",
    },
    {
      year: "2022",
      title: "50+ Projects",
      description: "Reached the milestone of 50 completed projects across various industries.",
    },
    {
      year: "2023",
      title: "IoT Innovation",
      description: "Launched our IoT division, expanding into smart home and industrial solutions.",
    },
    {
      year: "2024",
      title: "Continued Growth",
      description: "Serving 30+ happy clients with 24/7 support and cutting-edge solutions.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <Navbar />

      {/* Header */}
      <div className="bg-gradient-to-r from-slate-700 to-gray-900 text-white py-20 pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button variant="ghost" asChild className="mb-6 text-white hover:bg-white/10">
            <Link href="/">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
          </Button>
          <div className="text-center">
            <Badge className="mb-4 bg-white/20 text-white">About NexaSoft</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Innovation Meets Excellence</h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
              We're a passionate team of developers, designers, and innovators dedicated to transforming businesses
              through cutting-edge technology solutions.
            </p>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                At NexaSoft, we believe technology should empower businesses to reach their full potential. Our mission
                is to create innovative, scalable, and user-friendly solutions that drive growth, efficiency, and
                success for our clients.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                We combine technical expertise with creative problem-solving to deliver solutions that not only meet
                today's needs but also prepare businesses for tomorrow's challenges.
              </p>
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <Users className="h-8 w-8 text-emerald-600 mx-auto mb-2" />
                  <div className="font-semibold text-gray-900">Expert Team</div>
                </div>
                <div className="text-center">
                  <Award className="h-8 w-8 text-emerald-600 mx-auto mb-2" />
                  <div className="font-semibold text-gray-900">Quality Assured</div>
                </div>
                <div className="text-center">
                  <Zap className="h-8 w-8 text-emerald-600 mx-auto mb-2" />
                  <div className="font-semibold text-gray-900">Fast Delivery</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="mb-6">
                  To be the leading technology partner for businesses worldwide, known for our innovation, reliability,
                  and commitment to client success.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                    Global technology leadership
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                    Sustainable digital transformation
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                    Empowering business growth
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-emerald-100 text-emerald-800">Our Values</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Drives Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our core values guide every decision we make and every solution we create.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center text-white mx-auto mb-4">
                    {value.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      {/* <section className="py-20 bg-gradient-to-br from-gray-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-emerald-100 text-emerald-800">Our Team</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet the Experts</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our diverse team of talented professionals brings together years of experience and passion for technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={300}
                    height={300}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <CardTitle className="text-xl font-bold text-gray-900">{member.name}</CardTitle>
                  <CardDescription className="text-emerald-600 font-medium">{member.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-emerald-100 text-emerald-800">Our Journey</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Company Timeline</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From humble beginnings to becoming a trusted technology partner.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-emerald-500 to-teal-600"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                    <Card className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <Badge className="bg-emerald-500 text-white">{milestone.year}</Badge>
                        </div>
                        <CardTitle className="text-xl font-bold text-gray-900">{milestone.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="relative z-10">
                    <div className="w-4 h-4 bg-emerald-500 rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-slate-700 to-gray-900 text-white py-20 pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Work With Us?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Join our growing list of satisfied clients and let's create something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-emerald-600 hover:bg-white/10">
              <Link href="/start-project">Start Your Project</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-emerald-600 hover:bg-white/10">
              <Link href="/schedule-call">Schedule a Meeting</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
