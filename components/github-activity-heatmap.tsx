"use client"

import { useEffect, useState } from "react"

interface ContributionDay {
  date: string
  count: number
  level: number
}

export function GitHubActivityHeatmap() {
  const [contributions, setContributions] = useState<ContributionDay[]>([])

  // useEffect(() => {
  //   // Generate mock data for the past year
  //   const generateMockData = () => {
  //     const data: ContributionDay[] = []
  //     const today = new Date()
  //     const oneYearAgo = new Date(today.getFullYear() - 1, today.getMonth(), today.getDate())

  //     for (let d = new Date(oneYearAgo); d <= today; d.setDate(d.getDate() + 1)) {
  //       const count = Math.floor(Math.random() * 15)
  //       const level = count === 0 ? 0 : count <= 3 ? 1 : count <= 6 ? 2 : count <= 9 ? 3 : 4

  //       data.push({
  //         date: d.toISOString().split("T")[0],
  //         count,
  //         level,
  //       })
  //     }
  //     return data
  //   }

  //   setContributions(generateMockData())
  // }, [])

  useEffect(() => {
    async function fetchContributions() {
      const query = `
        query($login: String!) {
          user(login: $login) {
            contributionsCollection {
              contributionCalendar {
                weeks {
                  contributionDays {
                    date
                    contributionCount
                    color
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
        body: JSON.stringify({ query, variables: { login: process.env.NEXT_PUBLIC_GITHUB_USERNAME } }),
      })
      const json = await res.json()
      const weeks = json.data.user.contributionsCollection.contributionCalendar.weeks

      const data: ContributionDay[] = weeks.flatMap((week: any) =>
        week.contributionDays.map((d: any) => ({
          date: d.date,
          count: d.contributionCount,
          level: d.contributionCount === 0 ? 0 : d.contributionCount <= 3 ? 1 : d.contributionCount <= 6 ? 2 : d.contributionCount <= 9 ? 3 : 4,
        }))
      )

      setContributions(data)
    }

    fetchContributions()
  }, [])


  const getLevelColor = (level: number) => {
    switch (level) {
      case 0:
        return "bg-gray-500"
      case 1:
        return "bg-green-300"
      case 2:
        return "bg-green-400"
      case 3:
        return "bg-green-500"
      case 4:
        return "bg-green-600"
      default:
        return "bg-red-300"
    }
  }

  const weeks: any = []
  let currentWeek: ContributionDay[] = []

  contributions.forEach((day, index) => {
    const dayOfWeek = new Date(day.date).getDay()

    if (dayOfWeek === 0 && currentWeek.length > 0) {
      weeks.push([...currentWeek])
      currentWeek = []
    }

    currentWeek.push(day)

    if (index === contributions.length - 1) {
      weeks.push(currentWeek)
    }
  })

  const monthLabels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  const dayLabels = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

  return (
    <div className="space-y-4">
      <div className="overflow-x-auto">
        <div className="inline-flex flex-col gap-1 min-w-max">
          {/* Month labels */}
          <div className="flex gap-1 ml-8">
            {monthLabels.map((month, index) => (
              <div key={index} className="text-xs text-muted-foreground w-12 text-center">
                {month}
              </div>
            ))}
          </div>

          {/* Heatmap grid */}
          <div className="flex gap-1">
            {/* Day labels */}
            <div className="flex flex-col gap-1 w-8">
              {dayLabels.map((day, index) => (
                <div key={index} className="text-xs text-muted-foreground h-3 flex items-center">
                  {index % 2 === 1 ? day : ""}
                </div>
              ))}
            </div>

            {/* Contribution squares */}
            <div className="flex gap-1">
              {weeks.map((week: any, weekIndex: any) => (
                <div key={weekIndex} className="flex flex-col gap-1">
                  {Array.from({ length: 7 }, (_, dayIndex) => {
                    const day = week.find((d: any) => new Date(d.date).getDay() === dayIndex)
                    return (
                      <div
                        key={dayIndex}
                        className={`w-3 h-3 rounded-sm ${day ? getLevelColor(day.level) : "bg-muted/30"}`}
                        title={day ? `${day.count} contributions on ${day.date}` : ""}
                      />
                    )
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="flex items-center justify-between text-sm text-muted-foreground">
        <span>Less</span>
        <div className="flex items-center gap-1">
          {[0, 1, 2, 3, 4].map((level) => (
            <div key={level} className={`w-3 h-3 rounded-sm ${getLevelColor(level)}`} />
          ))}
        </div>
        <span>More</span>
      </div>
    </div>
  )
}
