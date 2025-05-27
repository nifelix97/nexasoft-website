"use client"

import { useState } from "react"
import { ArrowRight, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"
import Image from "next/image"

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const projects = [
    {
      name: "Tunganawe",
      description:
        "Comprehensive real estate platform connecting buyers, sellers, and agents with advanced search capabilities, property management, and virtual tours.",
      category: "Real Estate",
      url: "https://www.tunganawe.com/",
      image: "/tunga.png?height=400&width=600",
      tech: ["Next.js", "React", "Node.js", "MongoDB", "Authentication", "Payment Gateway"],
      features: [
        "Property Search & Filtering",
        "Virtual Property Tours",
        "Agent Management System",
        "Mortgage Calculator",
        "User Authentication",
        "Mobile Responsive Design",
      ],
      timeline: "4 weeks",
      client: "Real Estate Agency",
    },
    {
      name: "Umusirimu",
      description:
        "E-commerce platform specializing in home appliances and household items with inventory management, order tracking, and payment processing.",
      category: "E-commerce",
      url: "https://umusirimu.com/",
      image: "/umusirimu.png?height=400&width=600",
      tech: ["React", "Node.js", "Express", "PostgreSQL", "Stripe", "AWS"],
      features: [
        "Product Catalog Management",
        "Shopping Cart & Checkout",
        "Payment Processing",
        "Order Tracking",
        "Inventory Management",
        "Customer Reviews",
      ],
      timeline: "6 weeks",
      client: "Home Appliances Retailer",
    },
    {
      name: "NexaTechHub",
      description:
        "Modern e-commerce solution for electronic devices and tech gadgets with advanced filtering, comparison tools, and tech specifications.",
      category: "E-commerce",
      url: "https://nexa-tech-hub.vercel.app/",
      image: "/nexat.png?height=400&width=600",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel", "Stripe", "Sanity CMS"],
      features: [
        "Product Comparison Tool",
        "Advanced Search & Filters",
        "Tech Specifications Display",
        "User Reviews & Ratings",
        "Wishlist Functionality",
        "Fast Performance",
      ],
      timeline: "6 weeks",
      client: "Electronics Retailer",
    },
    // {
    //   name: "Smart Home IoT System",
    //   description:
    //     "Comprehensive IoT solution for home automation including lighting, temperature control, security cameras, and energy monitoring.",
    //   category: "IoT",
    //   url: "#",
    //   image: "/placeholder.svg?height=400&width=600",
    //   tech: ["Arduino", "Raspberry Pi", "Python", "MQTT", "AWS IoT", "React Dashboard"],
    //   features: [
    //     "Smart Lighting Control",
    //     "Temperature Monitoring",
    //     "Security Camera Integration",
    //     "Energy Usage Tracking",
    //     "Mobile App Control",
    //     "Voice Assistant Integration",
    //   ],
    //   timeline: "12 weeks",
    //   client: "Smart Home Company",
    // },
    {
      name: "Healthcare Management System",
      description:
        "Custom software solution for healthcare providers with patient management, appointment scheduling, and medical records.",
      category: "Custom Software",
      url: "#",
      image: "/bloodbag.jpg?height=400&width=600",
      tech: ["React", "Node.js", "PostgreSQL", "Docker", "AWS", "HIPAA Compliant"],
      features: [
        "Patient Management",
        "Appointment Scheduling",
        "Medical Records System",
        "Billing Integration",
        "HIPAA Compliance",
        "Reporting Dashboard",
      ],
      timeline: "14 weeks",
      client: "Healthcare Provider",
    },
    {
      name: "Restaurant Mobile App",
      description:
        "Cross-platform mobile application for restaurant ordering, table reservations, and loyalty program management.",
      category: "Mobile App",
      url: "#",
      image: "/food.jpg?height=400&width=600",
      tech: ["React Native", "Firebase", "Stripe", "Google Maps API", "Push Notifications"],
      features: [
        "Online Ordering System",
        "Table Reservation",
        "Loyalty Program",
        "Push Notifications",
        "GPS Integration",
        "Payment Processing",
      ],
      timeline: "5 weeks",
      client: "Restaurant Chain",
    },
  ]

  const categories = ["All", "Real Estate", "E-commerce", "IoT", "Custom Software", "Mobile App"]

  // Filter projects based on selected category
  const filteredProjects =
    selectedCategory === "All" ? projects : projects.filter((project) => project.category === selectedCategory)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <Navbar />

      {/* Header */}
      <div className="bg-gradient-to-r from-slate-700 to-gray-900 text-white py-20 pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-4 bg-white/20 text-white">Our Work</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Featured Projects</h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
              Explore our portfolio of successful projects that showcase our expertise in delivering high-quality
              digital solutions.
            </p>
          </div>
        </div>
      </div>

      {/* Filter Categories */}
      <section className="py-12 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === selectedCategory ? "default" : "outline"}
                className={
                  category === selectedCategory
                    ? "bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700"
                    : "border-emerald-300 text-emerald-700 hover:bg-emerald-50 dark:border-emerald-600 dark:text-emerald-400 dark:hover:bg-emerald-950"
                }
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                No projects found in the "{selectedCategory}" category.
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <Card
                  key={index}
                  className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 dark:bg-gray-800 dark:border-gray-700"
                >
                  <div className="relative overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.name}
                      width={600}
                      height={400}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-emerald-500 text-white">{project.category}</Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                      <div className="text-white text-sm bg-black/50 px-2 py-1 rounded">{project.timeline}</div>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">{project.name}</CardTitle>
                    <CardDescription className="text-gray-600 dark:text-gray-300">
                      {project.description}
                    </CardDescription>
                    <div className="text-sm text-emerald-600 dark:text-emerald-400 font-medium">
                      Client: {project.client}
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Key Features:</h4>
                      <div className="grid grid-cols-1 gap-1">
                        {project.features.slice(0, 3).map((feature, idx) => (
                          <div key={idx} className="text-sm text-gray-600 dark:text-gray-400">
                            • {feature}
                          </div>
                        ))}
                        {project.features.length > 3 && (
                          <div className="text-sm text-gray-500 dark:text-gray-500">
                            +{project.features.length - 3} more features
                          </div>
                        )}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Technologies:</h4>
                      <div className="flex flex-wrap gap-1">
                        {project.tech.map((tech, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs dark:bg-gray-700 dark:text-gray-300">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-2 pt-4">
                      {project.url !== "#" ? (
                        <Button
                          asChild
                          variant="outline"
                          className="flex-1 group-hover:bg-emerald-50 group-hover:border-emerald-300 dark:group-hover:bg-emerald-950 dark:border-gray-600"
                        >
                          <Link href={project.url} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            View Live
                          </Link>
                        </Button>
                      ) : (
                        <Button variant="outline" className="flex-1" disabled>
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Private Project
                        </Button>
                      )}
                      <Button asChild size="sm" className="bg-gradient-to-r from-emerald-500 to-teal-600">
                        <Link href="/start-project">Similar Project</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Project Success Metrics
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-2">
                50+
              </div>
              <div className="text-gray-600 dark:text-gray-400">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-2">
                98%
              </div>
              <div className="text-gray-600 dark:text-gray-400">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-2">
                30+
              </div>
              <div className="text-gray-600 dark:text-gray-400">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-2">
                24/7
              </div>
              <div className="text-gray-600 dark:text-gray-400">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-slate-700 to-gray-900 text-white py-20 pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Join Our Success Stories?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Let's create something amazing together. Start your project today and see your vision come to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-emerald-600 hover:bg-white/10">
              <Link href="/start-project">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
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
