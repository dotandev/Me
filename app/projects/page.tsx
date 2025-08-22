
import { ProjectSearch } from "./imagery"

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
      {/* <Navigation /> */}

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

          <div className={`relative`}>
            {/* <ProjectsImagery /> */}
            <div className="mt-16">
              <ProjectSearch />
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}
