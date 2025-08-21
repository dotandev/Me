"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, GitFork, Eye, ExternalLink, Calendar } from "lucide-react"
import { useEffect, useState } from "react"
import { fetchGitHub } from "@/lib/utils"

const repositories = [
  {
    name: "quantum-ml-framework",
    description: "A comprehensive framework for quantum machine learning algorithms with classical simulation support.",
    language: "Python",
    stars: 1247,
    forks: 189,
    watchers: 67,
    lastUpdated: "2 days ago",
    topics: ["quantum-computing", "machine-learning", "python", "qiskit"],
    isPrivate: false,
  },
  {
    name: "distributed-consensus",
    description: "Implementation of various distributed consensus algorithms including Raft, PBFT, and novel variants.",
    language: "Go",
    stars: 892,
    forks: 134,
    watchers: 45,
    lastUpdated: "1 week ago",
    topics: ["distributed-systems", "consensus", "blockchain", "go"],
    isPrivate: false,
  },
  {
    name: "neural-architecture-search",
    description: "Automated neural architecture search for computer vision tasks with resource-aware optimization.",
    language: "Python",
    stars: 634,
    forks: 98,
    watchers: 32,
    lastUpdated: "3 days ago",
    topics: ["deep-learning", "computer-vision", "automl", "pytorch"],
    isPrivate: false,
  },
  {
    name: "blockchain-identity-system",
    description: "Decentralized identity management system using blockchain technology and zero-knowledge proofs.",
    language: "Solidity",
    stars: 456,
    forks: 67,
    watchers: 28,
    lastUpdated: "5 days ago",
    topics: ["blockchain", "identity", "zero-knowledge", "ethereum"],
    isPrivate: false,
  },
  {
    name: "real-time-analytics-engine",
    description: "High-performance real-time analytics engine for processing streaming data at scale.",
    language: "Rust",
    stars: 378,
    forks: 45,
    watchers: 19,
    lastUpdated: "1 day ago",
    topics: ["real-time", "analytics", "streaming", "rust"],
    isPrivate: false,
  },
  {
    name: "federated-learning-platform",
    description: "Privacy-preserving federated learning platform for distributed machine learning across edge devices.",
    language: "Python",
    stars: 289,
    forks: 34,
    watchers: 15,
    lastUpdated: "4 days ago",
    topics: ["federated-learning", "privacy", "edge-computing", "tensorflow"],
    isPrivate: false,
  },
]

export function GitHubRepositories() {

  const [repositories, setRepositories] = useState<any[]>([])

  useEffect(() => {
    async function fetchRepos() {
      const repos = await fetchGitHub(`/users/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}/repos?sort=stars&per_page=100&type=owner`)
      console.log(`Fetching GitHub data from: ${repos}`)
      setRepositories(
        repos.map((repo: any) => ({
          name: repo.name,
          description: repo.description,
          language: repo.language,
          stars: repo.stargazers_count,
          forks: repo.forks_count,
          watchers: repo.watchers_count,
          lastUpdated: new Date(repo.updated_at).toDateString(),
          topics: repo.topics,
          isPrivate: repo.private,
          htmlUrl: repo.html_url,
        }))
      )
    }
    fetchRepos()
  }, [])
  
  return (
    <Card className="border-border">
      <CardHeader>
        <CardTitle className="font-heading text-2xl">Popular Repositories</CardTitle>
        <p className="text-muted-foreground">Most starred and actively maintained open-source projects</p>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6">
          {repositories.map((repo, index) => (
            <div
              key={index}
              className="group border border-border rounded-lg p-6 hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <h3 className="font-heading font-bold text-lg text-foreground group-hover:text-accent transition-colors">
                    {repo.name}
                  </h3>
                  {!repo.isPrivate && (
                    <Badge variant="outline" className="text-xs">
                      Public
                    </Badge>
                  )}
                </div>
                <Button size="sm" variant="ghost" className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </div>

              <p className="text-green-500 mb-4 leading-relaxed">{repo.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {repo.topics.map((topic: any) => (
                  <Badge
                    key={topic}
                    variant="secondary"
                    className="text-xs bg-red-600 text-red-600 hover:bg-accent/20"
                  >
                    {topic}
                  </Badge>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-6 text-sm text-red-600">
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-3 bg-red-600 rounded-full" />
                    {repo.language}
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4" />
                    {repo.stars.toLocaleString()}
                  </div>
                  <div className="flex items-center gap-1">
                    <GitFork className="w-4 h-4" />
                    {repo.forks.toLocaleString()}
                  </div>
                  <div className="flex items-center gap-1">
                    <Eye className="w-4 h-4" />
                    {repo.watchers}
                  </div>
                </div>

                <div className="flex items-center gap-1 text-xs text-red-600">
                  <Calendar className="w-3 h-3" />
                  Updated {repo.lastUpdated}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button variant="outline" size="lg" className="bg-transparent">
            View All Repositories
            <ExternalLink className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
