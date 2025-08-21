"use client"

"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { fetchGitHub } from "@/lib/utils"
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts"

type MonthlyDatum = { month: string; commits: number; prs: number; issues: number }
type LanguageDatum = { language: string; percentage: number; commits: number }

export function GitHubContributions() {
  const [monthlyData, setMonthlyData] = useState<MonthlyDatum[]>([])
  const [languageData, setLanguageData] = useState<LanguageDatum[]>([])

  useEffect(() => {
    async function fetchData() {
      // ----------- Language Distribution (REST) -----------
      const repos = await fetchGitHub(
        `/users/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}/repos?per_page=100`
      )

      const langCounts: Record<string, number> = {}
      for (const repo of repos) {
        const langs = await fetchGitHub(`/repos/${repo.full_name}/languages`)
        Object.entries(langs).forEach(([lang, bytes]) => {
          langCounts[lang] = (langCounts[lang] || 0) + Number(bytes)
        })
      }

      const totalBytes = Object.values(langCounts).reduce((a, b) => a + b, 0)
      const langsFormatted: LanguageDatum[] = Object.entries(langCounts).map(
        ([language, bytes]) => ({
          language,
          percentage: (bytes / totalBytes) * 100,
          // TODO: replace random commits with actual per-language commit counts via GraphQL
          commits: Math.floor(Math.random() * 500),
        })
      )
      setLanguageData(langsFormatted)

      // ----------- Monthly Activity (GraphQL) -----------
      const query = `
        query($login: String!) {
          user(login: $login) {
            contributionsCollection {
              commitContributionsByRepository(maxRepositories: 10) {
                contributions(first: 100) {
                  nodes {
                    occurredAt
                  }
                }
              }
            }
          }
        }
      `
      const res = await fetch("https://api.github.com/graphql", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
        },
        body: JSON.stringify({
          query,
          variables: { login: process.env.NEXT_PUBLIC_GITHUB_USERNAME },
        }),
      })
      const json = await res.json()

      // Simplified: bucket commits by month
      const commitsByMonth: Record<string, number> = {}
      json.data.user.contributionsCollection.commitContributionsByRepository.forEach(
        (repo: any) => {
          repo.contributions.nodes.forEach((c: any) => {
            const date = new Date(c.occurredAt)
            const month = date.toLocaleString("default", { month: "short" })
            commitsByMonth[month] = (commitsByMonth[month] || 0) + 1
          })
        }
      )

      const months = [
        "Jan","Feb","Mar","Apr","May","Jun",
        "Jul","Aug","Sep","Oct","Nov","Dec"
      ]
      const monthlyFormatted: MonthlyDatum[] = months.map((m) => ({
        month: m,
        commits: commitsByMonth[m] || 0,
        prs: Math.floor(Math.random() * 40), // TODO: replace with GraphQL PR data
        issues: Math.floor(Math.random() * 20), // TODO: replace with GraphQL issues data
      }))

      setMonthlyData(monthlyFormatted)
    }

    fetchData()
  }, [])

  return (
    <div className="grid lg:grid-cols-2 gap-8">
      {/* Monthly Activity Chart */}
      <Card className="border-border">
        <CardHeader>
          <CardTitle className="font-heading text-xl">Monthly Activity</CardTitle>
          <p className="text-sm text-muted-foreground">
            Commits, pull requests, and issues over the past year
          </p>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={{
              commits: { label: "Commits", color: "hsl(var(--accent))" },
              prs: { label: "Pull Requests", color: "hsl(var(--primary))" },
              issues: { label: "Issues", color: "hsl(var(--muted))" },
            }}
            className="h-[300px]"
          >
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                <XAxis dataKey="month" className="text-muted-foreground" />
                <YAxis className="text-muted-foreground" />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Line type="monotone" dataKey="commits" stroke="var(--color-commits)" strokeWidth={3} />
                <Line type="monotone" dataKey="prs" stroke="var(--color-prs)" strokeWidth={2} />
                <Line type="monotone" dataKey="issues" stroke="var(--color-issues)" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>

      {/* Language Distribution */}
      <Card className="border-border">
        <CardHeader>
          <CardTitle className="font-heading text-xl">Language Distribution</CardTitle>
          <p className="text-sm text-green-600">
            Programming languages used in commits this year
          </p>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={{
              commits: { label: "Commits", color: "hsl(var(--red))" },
            }}
            className="h-[300px]"
          >
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={languageData} layout="horizontal">
                <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                <XAxis type="number" className="text-blue-500" />
                <YAxis
                  dataKey="language"
                  type="category"
                  className="text-red-600"
                  width={80}
                />
                <ChartTooltip
                  content={<ChartTooltipContent />}
                  formatter={(value, name) => [`${value} commits`, name]}
                />
                <Bar dataKey="commits" fill="var(--color-commits)" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  )
}







































// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
// import { fetchGitHub } from "@/lib/utils"
// import { useEffect } from "react"
// import { Line, LineChart, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Bar, BarChart } from "recharts"

// const monthlyData = [
//   { month: "Jan", commits: 89, prs: 12, issues: 5 },
//   { month: "Feb", commits: 156, prs: 18, issues: 8 },
//   { month: "Mar", commits: 203, prs: 25, issues: 12 },
//   { month: "Apr", commits: 178, prs: 22, issues: 9 },
//   { month: "May", commits: 234, prs: 31, issues: 15 },
//   { month: "Jun", commits: 267, prs: 28, issues: 11 },
//   { month: "Jul", commits: 189, prs: 19, issues: 7 },
//   { month: "Aug", commits: 298, prs: 35, issues: 18 },
//   { month: "Sep", commits: 245, prs: 29, issues: 13 },
//   { month: "Oct", commits: 312, prs: 42, issues: 21 },
//   { month: "Nov", commits: 278, prs: 38, issues: 16 },
//   { month: "Dec", commits: 198, prs: 24, issues: 10 },
// ]

// const languageData = [
//   { language: "TypeScript", percentage: 35, commits: 1247 },
//   { language: "Python", percentage: 28, commits: 998 },
//   { language: "Go", percentage: 15, commits: 534 },
//   { language: "Rust", percentage: 12, commits: 427 },
//   { language: "JavaScript", percentage: 6, commits: 214 },
//   { language: "Other", percentage: 4, commits: 142 },
// ]

// export function GitHubContributions() {


//   useEffect(() => {
//     async function fetchData() {
//       const repos = await fetchGitHub(`/users/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}/repos?per_page=100`)
      
//       // aggregate commits/issues/PRs requires per-repo calls or GraphQL
//       // Example: language distribution
//       const langCounts: Record<string, number> = {}
//       for (const repo of repos) {
//         const langs = await fetchGitHub(`/repos/${repo.full_name}/languages`)
//         Object.entries(langs).forEach(([lang, bytes]) => {
//           langCounts[lang] = (langCounts[lang] || 0) + Number(bytes)
//         })
//       }
  
//       const languageData = Object.entries(langCounts).map(([language, bytes]) => ({
//         language,
//         percentage: (bytes as number) / Object.values(langCounts).reduce((a, b) => a + b, 0) * 100,
//         commits: Math.floor(Math.random() * 500), // optional, unless you track commits per language
//       }))
//     }
  
//     fetchData()
//   }, [])
  
  
//   return (
//     <div className="grid lg:grid-cols-2 gap-8">
//       {/* Monthly Activity Chart */}
//       <Card className="border-border">
//         <CardHeader>
//           <CardTitle className="font-heading text-xl">Monthly Activity</CardTitle>
//           <p className="text-sm text-muted-foreground">Commits, pull requests, and issues over the past year</p>
//         </CardHeader>
//         <CardContent>
//           <ChartContainer
//             config={{
//               commits: {
//                 label: "Commits",
//                 color: "hsl(var(--accent))",
//               },
//               prs: {
//                 label: "Pull Requests",
//                 color: "hsl(var(--primary))",
//               },
//               issues: {
//                 label: "Issues",
//                 color: "hsl(var(--muted))",
//               },
//             }}
//             className="h-[300px]"
//           >
//             <ResponsiveContainer width="100%" height="100%">
//               <LineChart data={monthlyData}>
//                 <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
//                 <XAxis dataKey="month" className="text-muted-foreground" />
//                 <YAxis className="text-muted-foreground" />
//                 <ChartTooltip content={<ChartTooltipContent />} />
//                 <Line
//                   type="monotone"
//                   dataKey="commits"
//                   stroke="var(--color-commits)"
//                   strokeWidth={3}
//                   dot={{ fill: "var(--color-commits)", strokeWidth: 2, r: 4 }}
//                 />
//                 <Line
//                   type="monotone"
//                   dataKey="prs"
//                   stroke="var(--color-prs)"
//                   strokeWidth={2}
//                   dot={{ fill: "var(--color-prs)", strokeWidth: 2, r: 3 }}
//                 />
//                 <Line
//                   type="monotone"
//                   dataKey="issues"
//                   stroke="var(--color-issues)"
//                   strokeWidth={2}
//                   dot={{ fill: "var(--color-issues)", strokeWidth: 2, r: 3 }}
//                 />
//               </LineChart>
//             </ResponsiveContainer>
//           </ChartContainer>
//         </CardContent>
//       </Card>

//       {/* Language Distribution */}
//       <Card className="border-border">
//         <CardHeader>
//           <CardTitle className="font-heading text-xl">Language Distribution</CardTitle>
//           <p className="text-sm text-muted-foreground">Programming languages used in commits this year</p>
//         </CardHeader>
//         <CardContent>
//           <ChartContainer
//             config={{
//               commits: {
//                 label: "Commits",
//                 color: "hsl(var(--accent))",
//               },
//             }}
//             className="h-[300px]"
//           >
//             <ResponsiveContainer width="100%" height="100%">
//               <BarChart data={languageData} layout="horizontal">
//                 <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
//                 <XAxis type="number" className="text-muted-foreground" />
//                 <YAxis dataKey="language" type="category" className="text-muted-foreground" width={80} />
//                 <ChartTooltip
//                   content={<ChartTooltipContent />}
//                   formatter={(value, name) => [`${value} commits`, name]}
//                 />
//                 <Bar dataKey="commits" fill="var(--color-commits)" radius={[0, 4, 4, 0]} />
//               </BarChart>
//             </ResponsiveContainer>
//           </ChartContainer>
//         </CardContent>
//       </Card>
//     </div>
//   )
// }
