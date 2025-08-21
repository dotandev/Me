import { Navigation } from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink, Clock, Trophy, Users } from "lucide-react"

const hackathonProjects = [
  {
    title: "QuantumChat - Secure Messaging with Quantum Encryption",
    hackathon: "MIT Quantum Hackathon 2024",
    duration: "48 hours",
    team: "4 members",
    placement: "1st Place",
    prize: "$10,000",
    description:
      "Real-time messaging application using quantum key distribution for unbreakable encryption, built with quantum simulators and classical networking.",
    technologies: ["Qiskit", "WebSocket", "React", "Node.js", "Quantum Cryptography"],
    image: "/placeholder.svg?height=300&width=500",
    links: {
      github: "#",
      demo: "#",
      devpost: "#",
    },
  },
  {
    title: "EcoTrack - AI-Powered Carbon Footprint Tracker",
    hackathon: "Climate Change AI Hackathon 2024",
    duration: "36 hours",
    team: "3 members",
    placement: "2nd Place",
    prize: "$5,000",
    description:
      "Mobile app that uses computer vision and ML to track personal carbon footprint through receipt scanning and activity monitoring.",
    technologies: ["React Native", "TensorFlow Lite", "Python", "Firebase", "Computer Vision"],
    image: "/placeholder.svg?height=300&width=500",
    links: {
      github: "#",
      demo: "#",
    },
  },
  {
    title: "DeepFake Detector - Real-time Video Authentication",
    hackathon: "Cybersecurity Hackathon 2023",
    duration: "24 hours",
    team: "2 members",
    placement: "1st Place",
    prize: "$8,000",
    description:
      "Browser extension that detects deepfake videos in real-time using advanced neural networks and provides authenticity scores.",
    technologies: ["PyTorch", "JavaScript", "WebRTC", "Chrome Extension API", "Deep Learning"],
    image: "/placeholder.svg?height=300&width=500",
    links: {
      github: "#",
      demo: "#",
    },
  },
  {
    title: "BlockVote - Decentralized Voting System",
    hackathon: "Blockchain for Good Hackathon 2023",
    duration: "48 hours",
    team: "5 members",
    placement: "3rd Place",
    prize: "$3,000",
    description:
      "Transparent and secure voting platform using blockchain technology with zero-knowledge proofs for voter privacy.",
    technologies: ["Solidity", "Web3.js", "React", "IPFS", "Zero-Knowledge Proofs"],
    image: "/placeholder.svg?height=300&width=500",
    links: {
      github: "#",
      demo: "#",
    },
  },
  {
    title: "NeuroControl - Brain-Computer Interface for Accessibility",
    hackathon: "Accessibility Tech Hackathon 2023",
    duration: "36 hours",
    team: "4 members",
    placement: "Winner - Best Accessibility Solution",
    prize: "$7,500",
    description:
      "BCI system that allows users with mobility impairments to control computers using EEG signals and machine learning.",
    technologies: ["Python", "OpenBCI", "TensorFlow", "Signal Processing", "Electron"],
    image: "/placeholder.svg?height=300&width=500",
    links: {
      github: "#",
      demo: "#",
    },
  },
  {
    title: "AR Surgery Assistant - Mixed Reality Medical Training",
    hackathon: "HealthTech Innovation Hackathon 2022",
    duration: "48 hours",
    team: "6 members",
    placement: "2nd Place",
    prize: "$6,000",
    description:
      "Augmented reality application for surgical training with haptic feedback and real-time guidance for medical students.",
    technologies: ["Unity", "ARCore", "C#", "3D Modeling", "Haptic Feedback"],
    image: "/placeholder.svg?height=300&width=500",
    links: {
      github: "#",
      demo: "#",
    },
  },
]

const hackathonStats = [
  { label: "Hackathons Participated", value: "25+" },
  { label: "Awards Won", value: "12" },
  { label: "Total Prize Money", value: "$45K+" },
  { label: "Team Projects", value: "20+" },
]

export default function HacksPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-16 py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="font-heading font-black text-5xl sm:text-7xl text-foreground mb-6">
              HACKATHON
              <br />
              <span className="text-accent">PROJECTS</span>
            </h1>
            <div className="w-24 h-1 bg-accent mx-auto mb-8" />
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Rapid prototyping and innovative solutions built under pressure. A showcase of creativity, technical
              skills, and collaborative problem-solving in time-constrained environments.
            </p>
          </div>

          {/* Hackathon Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {hackathonStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-heading font-bold text-accent mb-2">{stat.value}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {hackathonProjects.map((project, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-border overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-accent text-accent-foreground flex items-center gap-1">
                      <Trophy className="w-3 h-3" />
                      {project.placement}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge variant="outline" className="bg-background/80 backdrop-blur-sm">
                      {project.prize}
                    </Badge>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="font-heading font-bold text-xl mb-2 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>

                  <div className="text-accent font-semibold mb-4">{project.hackathon}</div>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {project.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {project.team}
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center gap-3">
                    {project.links.github && (
                      <Button size="sm" variant="outline" className="flex items-center gap-2 bg-transparent">
                        <Github className="w-4 h-4" />
                        Code
                      </Button>
                    )}
                    {project.links.demo && (
                      <Button size="sm" variant="outline" className="flex items-center gap-2 bg-transparent">
                        <ExternalLink className="w-4 h-4" />
                        Demo
                      </Button>
                    )}
                    {project.links.devpost && (
                      <Button size="sm" variant="outline" className="flex items-center gap-2 bg-transparent">
                        <ExternalLink className="w-4 h-4" />
                        DevPost
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl mb-6">Want to Hack Together?</h2>
          <p className="text-xl text-primary-foreground/80 mb-8">
            Looking for a hackathon teammate or organizing an event? Let's build something amazing in record time.
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-4 text-lg font-semibold"
          >
            Let's Collaborate
          </Button>
        </div>
      </section>
    </div>
  )
}
