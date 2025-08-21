import { Navigation } from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Calendar, Users } from "lucide-react"

const projects = [
  {
    title: "AI-Powered Analytics Platform",
    description:
      "Enterprise-grade analytics platform leveraging machine learning for predictive insights and real-time data processing.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["React", "Python", "TensorFlow", "PostgreSQL", "Docker"],
    category: "AI/ML",
    year: "2024",
    team: "4 developers",
    status: "Production",
    links: {
      github: "#",
      demo: "#",
      case_study: "#",
    },
  },
  {
    title: "Blockchain Supply Chain",
    description:
      "Decentralized supply chain management system ensuring transparency and traceability from manufacturer to consumer.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["Solidity", "Node.js", "Web3", "IPFS", "React"],
    category: "Blockchain",
    year: "2024",
    team: "6 developers",
    status: "Beta",
    links: {
      github: "#",
      demo: "#",
    },
  },
  {
    title: "Real-time Data Visualization",
    description:
      "Interactive dashboard for monitoring IoT sensor data with real-time updates and predictive analytics.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["D3.js", "WebSocket", "Redis", "Node.js", "MongoDB"],
    category: "Data Viz",
    year: "2023",
    team: "3 developers",
    status: "Production",
    links: {
      github: "#",
      demo: "#",
      case_study: "#",
    },
  },
  {
    title: "Quantum Computing Simulator",
    description:
      "Educational quantum computing simulator with visual circuit builder and quantum algorithm implementations.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["Python", "Qiskit", "React", "WebGL", "NumPy"],
    category: "Quantum",
    year: "2023",
    team: "2 developers",
    status: "Research",
    links: {
      github: "#",
      demo: "#",
    },
  },
  {
    title: "Cybersecurity Threat Detection",
    description:
      "ML-based network intrusion detection system with real-time threat analysis and automated response protocols.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["Python", "Scikit-learn", "Elasticsearch", "Kibana", "Docker"],
    category: "Security",
    year: "2023",
    team: "5 developers",
    status: "Production",
    links: {
      github: "#",
      case_study: "#",
    },
  },
  {
    title: "Cloud Infrastructure Automation",
    description: "Infrastructure as Code solution for automated cloud deployment and scaling with multi-cloud support.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["Terraform", "Kubernetes", "AWS", "Azure", "Python"],
    category: "DevOps",
    year: "2022",
    team: "4 developers",
    status: "Production",
    links: {
      github: "#",
      demo: "#",
    },
  },
]

const categories = ["All", "AI/ML", "Blockchain", "Data Viz", "Quantum", "Security", "DevOps"]

export default function ProjectsPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-16 py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="font-heading font-black text-5xl sm:text-7xl text-foreground mb-6">
              FEATURED
              <br />
              <span className="text-accent">PROJECTS</span>
            </h1>
            <div className="w-24 h-1 bg-accent mx-auto mb-8" />
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A curated collection of innovative solutions spanning AI, blockchain, data visualization, and cutting-edge
              technologies that drive meaningful impact.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                className="px-6 py-2 font-semibold"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
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
                    <Badge variant="secondary" className="bg-accent text-accent-foreground">
                      {project.category}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge variant="outline" className="bg-background/80 backdrop-blur-sm">
                      {project.status}
                    </Badge>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="font-heading font-bold text-xl mb-3 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {project.year}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {project.team}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.technologies.length - 3} more
                      </Badge>
                    )}
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
          <h2 className="font-heading font-bold text-3xl sm:text-4xl mb-6">Have a Project in Mind?</h2>
          <p className="text-xl text-primary-foreground/80 mb-8">
            Let's collaborate and bring your innovative ideas to life with cutting-edge technology.
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-4 text-lg font-semibold"
          >
            Start a Conversation
          </Button>
        </div>
      </section>
    </div>
  )
}
