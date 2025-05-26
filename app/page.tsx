"use client"
import { ArrowRight, Code, Smartphone, Wifi, Globe, ChevronRight, Star, Users, Award, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"
import Image from "next/image"

export default function NexaSoftWebsite() {
  const services = [
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Web Development",
      description: "Custom web applications and e-commerce solutions built with modern technologies",
      features: ["React & Next.js", "E-commerce Platforms", "Real Estate Solutions", "Custom CMS"],
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android",
      features: ["React Native", "Flutter", "Native iOS/Android", "Progressive Web Apps"],
    },
    {
      icon: <Wifi className="h-8 w-8" />,
      title: "IoT Solutions",
      description: "Internet of Things development for smart devices and connected systems",
      features: ["Smart Home Systems", "Industrial IoT", "Sensor Networks", "Cloud Integration"],
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: "Custom Software",
      description: "Tailored software solutions to meet your specific business requirements",
      features: ["Enterprise Software", "API Development", "Database Design", "System Integration"],
    },
  ]

  const portfolio = [
    {
      name: "Tunganawe",
      description: "Comprehensive real estate platform connecting buyers, sellers, and agents",
      category: "Real Estate",
      url: "https://www.tunganawe.com/",
      image: "/placeholder.svg?height=300&width=500",
      tech: ["Next.js", "React", "Database", "Authentication"],
    },
    {
      name: "Umusirimu",
      description: "E-commerce platform specializing in home appliances and household items",
      category: "E-commerce",
      url: "https://umusirimu.com/",
      image: "/placeholder.svg?height=300&width=500",
      tech: ["E-commerce", "Payment Gateway", "Inventory Management", "Mobile Responsive"],
    },
    {
      name: "NexaTechHub",
      description: "Modern e-commerce solution for electronic devices and tech gadgets",
      category: "E-commerce",
      url: "https://nexa-tech-hub.vercel.app/",
      image: "/placeholder.svg?height=300&width=500",
      tech: ["Next.js", "Vercel", "Modern UI", "Fast Performance"],
    },
  ]

  const stats = [
    { number: "50+", label: "Projects Completed" },
    { number: "30+", label: "Happy Clients" },
    { number: "5+", label: "Years Experience" },
    { number: "24/7", label: "Support Available" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="animate-fade-in-up">
              <Badge className="mb-4 bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200 hover:bg-emerald-200 dark:hover:bg-emerald-800">
                🚀 Leading Tech Solutions Provider
              </Badge>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6">
                Transforming Ideas Into
                <span className="block bg-gradient-to-r from-emerald-500 to-teal-600 bg-clip-text text-transparent">
                  Digital Reality
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
                NexaSoft delivers cutting-edge web development, mobile apps, and IoT solutions that drive your business
                forward in the digital age.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-lg px-8 py-3"
                >
                  <Link href="/start-project">
                    Start Your Project
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-3 border-emerald-300 text-emerald-700 hover:bg-emerald-50 dark:border-emerald-600 dark:text-emerald-400 dark:hover:bg-emerald-950"
                >
                  <Link href="#portfolio">View Our Work</Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-gray-600 dark:text-gray-400 mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200">
              Our Expertise
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Comprehensive Tech Solutions
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              From web development to IoT solutions, we provide end-to-end technology services that help businesses
              thrive in the digital landscape.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg dark:bg-gray-800 dark:border-gray-700"
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-300">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                        <ChevronRight className="h-4 w-4 text-emerald-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section
        id="portfolio"
        className="py-20 bg-gradient-to-br from-gray-50 to-emerald-50 dark:from-gray-800 dark:to-emerald-950"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200">
              Our Work
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Explore our portfolio of successful projects that showcase our expertise in delivering high-quality
              digital solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolio.map((project, index) => (
              <Card
                key={index}
                className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 dark:bg-gray-800 dark:border-gray-700"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.name}
                    width={500}
                    height={300}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-emerald-500 text-white">{project.category}</Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">{project.name}</CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-300">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs dark:bg-gray-700 dark:text-gray-300">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full group-hover:bg-emerald-50 group-hover:border-emerald-300 dark:group-hover:bg-emerald-950 dark:border-gray-600"
                  >
                    <Link href={project.url} target="_blank" rel="noopener noreferrer">
                      View Project
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200">
                About NexaSoft
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Innovation Meets Excellence
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                NexaSoft is a leading technology solutions company dedicated to transforming businesses through
                innovative digital solutions. We specialize in creating custom software, web applications, mobile apps,
                and IoT systems that drive growth and efficiency.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Our team of experienced developers and designers work closely with clients to understand their unique
                needs and deliver solutions that exceed expectations. From concept to deployment, we ensure every
                project is built with precision, scalability, and user experience in mind.
              </p>
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <Users className="h-8 w-8 text-emerald-600 mx-auto mb-2" />
                  <div className="font-semibold text-gray-900 dark:text-white">Expert Team</div>
                </div>
                <div className="text-center">
                  <Award className="h-8 w-8 text-emerald-600 mx-auto mb-2" />
                  <div className="font-semibold text-gray-900 dark:text-white">Quality Assured</div>
                </div>
                <div className="text-center">
                  <Zap className="h-8 w-8 text-emerald-600 mx-auto mb-2" />
                  <div className="font-semibold text-gray-900 dark:text-white">Fast Delivery</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Why Choose NexaSoft?</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Star className="h-5 w-5 mr-3" />
                    Proven track record with 50+ successful projects
                  </li>
                  <li className="flex items-center">
                    <Star className="h-5 w-5 mr-3" />
                    Cutting-edge technologies and best practices
                  </li>
                  <li className="flex items-center">
                    <Star className="h-5 w-5 mr-3" />
                    Dedicated support and maintenance
                  </li>
                  <li className="flex items-center">
                    <Star className="h-5 w-5 mr-3" />
                    Competitive pricing and flexible packages
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-emerald-600 to-teal-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-4 bg-white/20 text-white">Get In Touch</Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Let's discuss how NexaSoft can help transform your ideas into powerful digital solutions. Contact us today
            for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-emerald-600 hover:bg-gray-100 text-lg px-8 py-3">
              <Link href="/start-project">
                Start a Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 text-lg px-8 py-3"
            >
              <Link href="/schedule-call">Schedule a Call</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
