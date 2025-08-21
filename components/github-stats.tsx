"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GitBranch, Star, GitFork, Users, Calendar, Code } from "lucide-react"
import { useEffect, useState } from "react"
import { fetchGitHub } from "@/lib/utils"

interface GitHubStatsData {
  totalRepos: number
  totalStars: number
  totalForks: number
  totalCommits: number
  followers: number
  following: number
  yearsActive: number
  languagesUsed: string[]
}

export function GitHubStats() {
  const [stats, setStats] = useState<GitHubStatsData>({
    totalRepos: 127,
    totalStars: 2847,
    totalForks: 456,
    totalCommits: 3421,
    followers: 892,
    following: 234,
    yearsActive: 8,
    languagesUsed: ["TypeScript", "Python", "Go", "Rust", "Solidity", "C++"],
  })

  // In a real implementation, you would fetch this data from GitHub API
  // useEffect(() => {
  //   fetchGitHubStats().then(setStats)
  // }, [])

  const statCards = [
    {
      title: "Public Repositories",
      value: stats.totalRepos.toLocaleString(),
      icon: GitBranch,
      description: "Open source projects",
    },
    {
      title: "Total Stars Earned",
      value: stats.totalStars.toLocaleString(),
      icon: Star,
      description: "Community recognition",
    },
    {
      title: "Total Forks",
      value: stats.totalForks.toLocaleString(),
      icon: GitFork,
      description: "Project contributions",
    },
    {
      title: "Total Commits",
      value: stats.totalCommits.toLocaleString(),
      icon: Code,
      description: "Code contributions",
    },
    {
      title: "Followers",
      value: stats.followers.toLocaleString(),
      icon: Users,
      description: "Developer network",
    },
    {
      title: "Years Active",
      value: stats.yearsActive.toString(),
      icon: Calendar,
      description: "Development experience",
    },
  ]


  useEffect(() => {
    async function fetchStats() {
      const user = await fetchGitHub(`/users/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}`)
      const repos = await fetchGitHub(`/users/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}/repos?per_page=100`)
  
      const totalStars = repos.reduce((sum: number, r: any) => sum + r.stargazers_count, 0)
      const totalForks = repos.reduce((sum: number, r: any) => sum + r.forks_count, 0)
      const languagesUsed = [...new Set(repos.map((r: any) => r.language).filter(Boolean))] as string[] // unique languages   
  
      setStats({
        totalRepos: user.public_repos,
        totalStars,
        totalForks,
        totalCommits: 0, // requires GraphQL "CommitContributionsByRepository"
        followers: user.followers,
        following: user.following,
        yearsActive: new Date().getFullYear() - new Date(user.created_at).getFullYear(),
        languagesUsed,
      })
    }
    fetchStats()
  }, [])

  
  return (
    <div className="space-y-8">
      {/* Main Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {statCards.map((stat, index) => (
          <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border">
            <CardContent className="p-6 text-center">
              <div className="flex justify-center mb-3">
                <stat.icon className="w-8 h-8 text-accent group-hover:scale-110 transition-transform" />
              </div>
              <div className="text-3xl font-heading font-bold text-foreground mb-1">{stat.value}</div>
              <div className="text-sm font-semibold text-foreground mb-1">{stat.title}</div>
              <div className="text-xs text-muted-foreground">{stat.description}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Languages Used */}
      <Card className="border-border">
        <CardContent className="p-6">
          <h3 className="font-heading font-bold text-xl mb-4 text-foreground">Primary Languages</h3>
          <div className="flex flex-wrap gap-3">
            {stats.languagesUsed.map((language, index) => (
              <Badge key={index} variant="secondary" className="px-3 py-1 text-sm bg-accent text-accent-foreground">
                {language}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
