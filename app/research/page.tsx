import { Navigation } from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { FileText, ExternalLink, Calendar, Award } from "lucide-react"

const researchPapers = [
  {
    title: "Quantum-Enhanced Machine Learning for Cryptographic Protocol Analysis",
    authors: ["John Doe", "Jane Smith", "Dr. Alice Johnson"],
    journal: "Nature Quantum Information",
    year: "2024",
    status: "Published",
    category: "Quantum Computing",
    abstract:
      "This paper presents a novel approach to analyzing cryptographic protocols using quantum-enhanced machine learning algorithms, demonstrating significant improvements in detection accuracy and computational efficiency.",
    citations: 47,
    impact_factor: 8.2,
    links: {
      pdf: "#",
      arxiv: "#",
      doi: "#",
    },
  },
  {
    title: "Federated Learning in Edge Computing: Privacy-Preserving Distributed AI",
    authors: ["John Doe", "Dr. Bob Wilson", "Sarah Chen"],
    journal: "IEEE Transactions on Mobile Computing",
    year: "2024",
    status: "Under Review",
    category: "Distributed Systems",
    abstract:
      "We propose a federated learning framework optimized for edge computing environments, addressing privacy concerns while maintaining model performance across distributed nodes.",
    citations: 23,
    impact_factor: 6.8,
    links: {
      arxiv: "#",
      preprint: "#",
    },
  },
  {
    title: "Blockchain-Based Identity Management for IoT Ecosystems",
    authors: ["John Doe", "Dr. Carol Martinez", "Mike Thompson"],
    journal: "ACM Transactions on Internet Technology",
    year: "2023",
    status: "Published",
    category: "Blockchain",
    abstract:
      "A comprehensive framework for managing digital identities in IoT ecosystems using blockchain technology, ensuring security, privacy, and scalability.",
    citations: 89,
    impact_factor: 4.9,
    links: {
      pdf: "#",
      doi: "#",
      code: "#",
    },
  },
  {
    title: "Neural Architecture Search for Real-Time Computer Vision Applications",
    authors: ["John Doe", "Dr. David Lee"],
    journal: "Computer Vision and Image Understanding",
    year: "2023",
    status: "Published",
    category: "Computer Vision",
    abstract:
      "An automated neural architecture search methodology specifically designed for real-time computer vision applications with resource constraints.",
    citations: 156,
    impact_factor: 5.3,
    links: {
      pdf: "#",
      doi: "#",
      code: "#",
    },
  },
  {
    title: "Adversarial Robustness in Deep Learning: A Comprehensive Survey",
    authors: ["John Doe", "Dr. Emma Rodriguez", "Alex Kim", "Dr. Frank Zhang"],
    journal: "Machine Learning Journal",
    year: "2023",
    status: "Published",
    category: "Machine Learning",
    abstract:
      "A comprehensive survey of adversarial robustness techniques in deep learning, analyzing current methods and proposing future research directions.",
    citations: 234,
    impact_factor: 7.1,
    links: {
      pdf: "#",
      doi: "#",
    },
  },
  {
    title: "Sustainable AI: Energy-Efficient Deep Learning Models",
    authors: ["John Doe", "Dr. Grace Liu", "Tom Anderson"],
    journal: "Nature Machine Intelligence",
    year: "2022",
    status: "Published",
    category: "Sustainable AI",
    abstract:
      "This work addresses the environmental impact of AI by developing energy-efficient deep learning models without compromising performance.",
    citations: 312,
    impact_factor: 9.4,
    links: {
      pdf: "#",
      doi: "#",
      code: "#",
    },
  },
]

const categories = [
  "All",
  "Quantum Computing",
  "Distributed Systems",
  "Blockchain",
  "Computer Vision",
  "Machine Learning",
  "Sustainable AI",
]

export default function ResearchPage() {
  return (
    <div className="min-h-screen">
      {/* <Navigation /> */}

      {/* Hero Section */}
      <section className="pt-16 py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="font-heading font-black text-5xl sm:text-7xl text-foreground mb-6">
              RESEARCH &
              <br />
              <span className="text-accent">PUBLICATIONS</span>
            </h1>
            <div className="w-24 h-1 bg-accent mx-auto mb-8" />
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Advancing the frontiers of technology through rigorous research, peer-reviewed publications, and
              collaborative academic endeavors that shape the future of computing.
            </p>
          </div>

          {/* Research Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl font-heading font-bold text-accent mb-2">25+</div>
              <div className="text-muted-foreground font-medium">Publications</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-heading font-bold text-accent mb-2">1,200+</div>
              <div className="text-muted-foreground font-medium">Citations</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-heading font-bold text-accent mb-2">15+</div>
              <div className="text-muted-foreground font-medium">Collaborators</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-heading font-bold text-accent mb-2">8.2</div>
              <div className="text-muted-foreground font-medium">Avg Impact Factor</div>
            </div>
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

      {/* Research Papers */}
      <section className="pb-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {researchPapers.map((paper, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border">
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <Badge variant="secondary" className="bg-accent text-accent-foreground">
                            {paper.category}
                          </Badge>
                          <Badge variant={paper.status === "Published" ? "default" : "outline"}>{paper.status}</Badge>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {paper.year}
                          </div>
                          <div className="flex items-center gap-1">
                            <Award className="w-4 h-4" />
                            IF: {paper.impact_factor}
                          </div>
                        </div>
                      </div>

                      <h3 className="font-heading font-bold text-2xl mb-3 group-hover:text-accent transition-colors">
                        {paper.title}
                      </h3>

                      <div className="text-muted-foreground mb-3">
                        <span className="font-semibold">Authors:</span> {paper.authors.join(", ")}
                      </div>

                      <div className="text-muted-foreground mb-4">
                        <span className="font-semibold">Published in:</span> {paper.journal}
                      </div>

                      <p className="text-foreground leading-relaxed mb-6">{paper.abstract}</p>

                      <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
                        <div className="flex items-center gap-1">
                          <FileText className="w-4 h-4" />
                          {paper.citations} citations
                        </div>
                      </div>

                      <div className="flex flex-wrap items-center gap-3">
                        {paper.links.pdf && (
                          <Button size="sm" variant="outline" className="flex items-center gap-2 bg-transparent">
                            <FileText className="w-4 h-4" />
                            PDF
                          </Button>
                        )}
                        {paper.links.doi && (
                          <Button size="sm" variant="outline" className="flex items-center gap-2 bg-transparent">
                            <ExternalLink className="w-4 h-4" />
                            DOI
                          </Button>
                        )}
                        {paper.links.arxiv && (
                          <Button size="sm" variant="outline" className="flex items-center gap-2 bg-transparent">
                            <ExternalLink className="w-4 h-4" />
                            arXiv
                          </Button>
                        )}
                        {paper.links.code && (
                          <Button size="sm" variant="outline" className="flex items-center gap-2 bg-transparent">
                            <ExternalLink className="w-4 h-4" />
                            Code
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Collaboration CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl mb-6">Interested in Collaboration?</h2>
          <p className="text-xl text-primary-foreground/80 mb-8">
            Let's explore opportunities for joint research, academic partnerships, and innovative projects.
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-4 text-lg font-semibold"
          >
            Discuss Research Opportunities
          </Button>
        </div>
      </section>
    </div>
  )
}
