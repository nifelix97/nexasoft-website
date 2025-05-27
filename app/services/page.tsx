"use client"

import { Code, Smartphone, Wifi, Globe, CheckCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function ServicesPage() {
  const services = [
    {
      icon: <Globe className="h-12 w-12" />,
      title: "Web Development",
      description: "Custom web applications and e-commerce solutions built with modern technologies",
      features: [
        "React & Next.js Applications",
        "E-commerce Platforms",
        "Real Estate Solutions",
        "Custom CMS Development",
        "Progressive Web Apps",
        "API Integration",
        "Database Design",
        "Performance Optimization",
      ],
      technologies: ["React", "Next.js", "Node.js", "MongoDB", "PostgreSQL", "AWS"],
      pricing: "Starting from $5,000",
      timeline: "4-12 weeks",
    },
    {
      icon: <Smartphone className="h-12 w-12" />,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android",
      features: [
        "React Native Development",
        "Flutter Applications",
        "Native iOS Development",
        "Native Android Development",
        "Cross-platform Solutions",
        "App Store Optimization",
        "Push Notifications",
        "Offline Functionality",
      ],
      technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase"],
      pricing: "Starting from $8,000",
      timeline: "6-16 weeks",
    },
    {
      icon: <Wifi className="h-12 w-12" />,
      title: "IoT Solutions",
      description: "Internet of Things development for smart devices and connected systems",
      features: [
        "Smart Home Systems",
        "Industrial IoT",
        "Sensor Networks",
        "Cloud Integration",
        "Real-time Monitoring",
        "Data Analytics",
        "Device Management",
        "Security Implementation",
      ],
      technologies: ["Arduino", "Raspberry Pi", "AWS IoT", "MQTT", "Python"],
      pricing: "Starting from $10,000",
      timeline: "8-20 weeks",
    },
    {
      icon: <Code className="h-12 w-12" />,
      title: "Custom Software",
      description: "Tailored software solutions to meet your specific business requirements",
      features: [
        "Enterprise Software",
        "API Development",
        "Database Design",
        "System Integration",
        "Legacy System Modernization",
        "Cloud Migration",
        "DevOps Implementation",
        "Maintenance & Support",
      ],
      technologies: ["Python", "Java", "C#", ".NET", "Docker", "Kubernetes"],
      pricing: "Starting from $15,000",
      timeline: "10-24 weeks",
    },
  ]

  const process = [
    {
      step: "1",
      title: "Discovery & Planning",
      description: "We analyze your requirements and create a detailed project roadmap",
    },
    {
      step: "2",
      title: "Design & Prototyping",
      description: "Create wireframes, mockups, and interactive prototypes",
    },
    {
      step: "3",
      title: "Development",
      description: "Build your solution using agile methodology with regular updates",
    },
    {
      step: "4",
      title: "Testing & QA",
      description: "Comprehensive testing to ensure quality and performance",
    },
    {
      step: "5",
      title: "Deployment & Launch",
      description: "Deploy to production and provide ongoing support",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <Navbar />

      {/* Header */}
      <div className="bg-gradient-to-r from-slate-700 to-gray-900 text-white py-20 pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-4 bg-white/20 text-white">Our Services</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Comprehensive Tech Solutions</h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
              From web development to IoT solutions, we provide end-to-end technology services that help businesses
              thrive in the digital landscape.
            </p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 dark:bg-gray-800 dark:border-gray-700"
              >
                <CardHeader>
                  <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">{service.title}</CardTitle>
                  <CardDescription className="text-lg text-gray-600 dark:text-gray-300">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">What's Included:</h4>
                    <div className="grid md:grid-cols-2 gap-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                          <CheckCircle className="h-4 w-4 text-emerald-500 mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs dark:bg-gray-700 dark:text-gray-300">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* <div className="grid grid-cols-2 gap-4 pt-4 border-t dark:border-gray-700">
                    <div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Starting Price</div>
                      <div className="font-semibold text-emerald-600 dark:text-emerald-400">{service.pricing}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Timeline</div>
                      <div className="font-semibold text-gray-900 dark:text-white">{service.timeline}</div>
                    </div>
                  </div> */}

                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700"
                  >
                    <Link href="/start-project">
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200">
              Our Process
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">How We Work</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our proven development process ensures successful project delivery from concept to launch.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {process.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-slate-700 to-gray-900 text-white py-20 pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Let's discuss your requirements and create a solution that drives your business forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-emerald-600 hover:bg-white/10">
              <Link href="/start-project">Start a Project</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-emerald-600 hover:bg-white/10">
              <Link href="/schedule-call">Schedule Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
