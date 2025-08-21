import { Navigation } from "@/components/navigation"
import { GitHubActivityHeatmap } from "@/components/github-activity-heatmap"
import { GitHubStats } from "@/components/github-stats"
import { GitHubRepositories } from "@/components/github-repositories"
import { GitHubContributions } from "@/components/github-contributions"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ActivityPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-16 py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="font-heading font-black text-5xl sm:text-7xl text-foreground mb-6">
              DEVELOPMENT
              <br />
              <span className="text-accent">ACTIVITY</span>
            </h1>
            <div className="w-24 h-1 bg-accent mx-auto mb-8" />
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Real-time insights into my development journey, contribution patterns, and open-source involvement across
              multiple platforms and repositories.
            </p>
          </div>
        </div>
      </section>

      {/* GitHub Stats Overview */}
      <section className="pb-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <GitHubStats />
        </div>
      </section>

      {/* Activity Heatmap */}
      <section className="pb-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-border">
            <CardHeader>
              <CardTitle className="font-heading text-2xl">Contribution Activity</CardTitle>
              <p className="text-muted-foreground">
                Daily contribution patterns over the past year showing consistency and dedication to development.
              </p>
            </CardHeader>
            <CardContent>
              <GitHubActivityHeatmap />
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contribution Charts */}
      <section className="pb-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <GitHubContributions />
        </div>
      </section>

      {/* Top Repositories */}
      <section className="pb-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <GitHubRepositories />
        </div>
      </section>
    </div>
  )
}
