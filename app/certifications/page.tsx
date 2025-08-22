'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion";

const certifications = [
  {
    title: "Machine Learning Scientist",
    issuer: "DataCamp",
    date: "June 2024",
    link: "https://datacamp.com/certificate/ml-scientist",
    logo: "/logos/datacamp.png",
  },
  {
    title: "Deep Learning Specialization",
    issuer: "Coursera",
    date: "April 2024",
    link: "https://coursera.org/certificate/deep-learning",
    logo: "/logos/coursera.png",
  },
  {
    title: "AWS Solutions Architect Associate",
    issuer: "Amazon Web Services",
    date: "Feb 2024",
    link: "https://aws.amazon.com/certification/certified-solutions-architect-associate/",
    logo: "/logos/aws.png",
  },
  {
    title: "Full-Stack Web Developer",
    issuer: "FreeCodeCamp",
    date: "Jan 2024",
    link: "https://freecodecamp.org/certification/full-stack",
    logo: "/logos/fcc.png",
  },
]

function CertificationsPage() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-10 text-center">My Certifications</h1>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert, index) => (
          <motion.a
            key={index}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
          >
            <Card className="hover:shadow-xl transition-shadow duration-300 rounded-2xl overflow-hidden">
              <CardHeader className="flex flex-col items-center text-center space-y-4">
                <img src={cert.logo} alt={cert.issuer} className="h-16 w-16 object-contain" />
                <CardTitle className="text-xl">{cert.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-gray-600">
                <p className="font-medium">{cert.issuer}</p>
                <p className="text-sm">{cert.date}</p>
              </CardContent>
            </Card>
          </motion.a>
        ))}
      </div>
    </section>
  )
}

export default function ExperiencePage() {
  return (
    <div className="min-h-screen">
      {/* <Navigation /> */}

      {/* Hero Section */}
      <section className="pt-16 py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-1">
            <h1 className="font-heading font-black text-5xl sm:text-7xl text-foreground mb-6">
              PROFESSIONAL
              <br />
              <span className="text-accent">EXPERIENCE</span>
            </h1>
            <div className="w-24 h-1 bg-accent mx-auto mb-8" />
            <p className="text-xl text-black max-w-3xl mx-auto leading-relaxed">
              A journey through innovative companies and research institutions, building cutting-edge technology
              solutions and advancing the state of the art in computer science.
            </p>
          </div>
        </div>
      </section>

      <CertificationsPage />
    </div>
  )
}
