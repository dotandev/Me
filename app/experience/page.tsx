import { Navigation } from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Building } from "lucide-react"

const experiences = [
  {
    title: "Senior Research Scientist",
    company: "TechCorp AI Labs",
    location: "San Francisco, CA",
    duration: "2022 - Present",
    type: "Full-time",
    description:
      "Leading cutting-edge research in quantum machine learning and developing next-generation AI algorithms for enterprise applications.",
    achievements: [
      "Published 8 peer-reviewed papers in top-tier journals",
      "Led a team of 12 researchers across 3 continents",
      "Secured $2.5M in research funding from NSF and industry partners",
      "Developed quantum-enhanced ML algorithms with 40% performance improvement",
    ],
    technologies: ["Python", "TensorFlow", "Qiskit", "CUDA", "Docker", "Kubernetes"],
  },
  {
    title: "Principal Software Engineer",
    company: "InnovateTech Solutions",
    location: "New York, NY",
    duration: "2020 - 2022",
    type: "Full-time",
    description:
      "Architected and implemented large-scale distributed systems serving millions of users with focus on performance and reliability.",
    achievements: [
      "Designed microservices architecture handling 10M+ daily requests",
      "Reduced system latency by 60% through optimization initiatives",
      "Mentored 15+ junior engineers and established best practices",
      "Led migration to cloud-native infrastructure saving $500K annually",
    ],
    technologies: ["Go", "Kubernetes", "PostgreSQL", "Redis", "AWS", "Terraform"],
  },
  {
    title: "Machine Learning Engineer",
    company: "DataDriven Analytics",
    location: "Boston, MA",
    duration: "2018 - 2020",
    type: "Full-time",
    description:
      "Developed and deployed ML models for predictive analytics, computer vision, and natural language processing applications.",
    achievements: [
      "Built ML pipeline processing 1TB+ data daily",
      "Improved model accuracy by 25% through feature engineering",
      "Deployed 15+ production ML models with 99.9% uptime",
      "Created automated model monitoring and retraining systems",
    ],
    technologies: ["Python", "Scikit-learn", "PyTorch", "Apache Spark", "MLflow", "Docker"],
  },
  {
    title: "Research Assistant",
    company: "MIT Computer Science Lab",
    location: "Cambridge, MA",
    duration: "2016 - 2018",
    type: "Part-time",
    description:
      "Conducted research in distributed systems and blockchain technology under the supervision of renowned faculty members.",
    achievements: [
      "Co-authored 5 research papers in blockchain and distributed systems",
      "Developed novel consensus algorithm for permissioned networks",
      "Presented research at 8 international conferences",
      "Received Outstanding Research Assistant Award",
    ],
    technologies: ["C++", "Go", "Solidity", "Python", "Linux", "Docker"],
  },
]

const skills = [
  { category: "Programming Languages", items: ["Python", "Go", "JavaScript", "TypeScript", "C++", "Rust", "Solidity"] },
  {
    category: "AI/ML Frameworks",
    items: ["TensorFlow", "PyTorch", "Scikit-learn", "Qiskit", "Hugging Face", "MLflow"],
  },
  { category: "Cloud & DevOps", items: ["AWS", "Azure", "GCP", "Kubernetes", "Docker", "Terraform", "Jenkins"] },
  { category: "Databases", items: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch", "Neo4j", "InfluxDB"] },
  { category: "Web Technologies", items: ["React", "Next.js", "Node.js", "GraphQL", "REST APIs", "WebSocket"] },
  { category: "Blockchain", items: ["Ethereum", "Hyperledger", "Web3.js", "IPFS", "Smart Contracts"] },
]

export default function ExperiencePage() {
  return (
    <div className="min-h-screen">
      {/* <Navigation /> */}

      {/* Hero Section */}
      <section className="pt-16 py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="font-heading font-black text-5xl sm:text-7xl text-foreground mb-6">
              PROFESSIONAL
              <br />
              <span className="text-accent">EXPERIENCE</span>
            </h1>
            <div className="w-24 h-1 bg-accent mx-auto mb-8" />
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A journey through innovative companies and research institutions, building cutting-edge technology
              solutions and advancing the state of the art in computer science.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="pb-20 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline Line */}
                {index !== experiences.length - 1 && <div className="absolute left-8 top-20 w-0.5 h-32 bg-border" />}

                <Card className="group hover:shadow-lg transition-all duration-300 border-border">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-6">
                      {/* Timeline Dot */}
                      <div className="w-4 h-4 bg-accent rounded-full mt-2 flex-shrink-0" />

                      <div className="flex-1">
                        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                          <div>
                            <h3 className="font-heading font-bold text-2xl text-foreground group-hover:text-accent transition-colors mb-2">
                              {exp.title}
                            </h3>
                            <div className="flex items-center gap-4 text-muted-foreground mb-2">
                              <div className="flex items-center gap-1">
                                <Building className="w-4 h-4" />
                                {exp.company}
                              </div>
                              <div className="flex items-center gap-1">
                                <MapPin className="w-4 h-4" />
                                {exp.location}
                              </div>
                            </div>
                          </div>

                          <div className="flex items-center gap-3">
                            <Badge variant="outline" className="flex items-center gap-1">
                              <Calendar className="w-3 h-3" />
                              {exp.duration}
                            </Badge>
                            <Badge variant="secondary">{exp.type}</Badge>
                          </div>
                        </div>

                        <p className="text-foreground leading-relaxed mb-6">{exp.description}</p>

                        <div className="mb-6">
                          <h4 className="font-semibold text-foreground mb-3">Key Achievements:</h4>
                          <ul className="space-y-2">
                            {exp.achievements.map((achievement, i) => (
                              <li key={i} className="flex items-start gap-2 text-muted-foreground">
                                <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-semibold text-foreground mb-3">Technologies Used:</h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech) => (
                              <Badge key={tech} variant="outline" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl sm:text-5xl text-foreground mb-6">Technical Expertise</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive skill set spanning multiple domains of technology and innovation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skillGroup, index) => (
              <Card key={index} className="border-border">
                <CardContent className="p-6">
                  <h3 className="font-heading font-bold text-lg mb-4 text-accent">{skillGroup.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill) => (
                      <Badge key={skill} variant="outline" className="text-sm">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
