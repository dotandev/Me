"use client"

import { Navigation } from "@/components/navigation"
import { ScrollReveal } from "@/components/scroll-reveal"
import { MagneticButton } from "@/components/magnetic-button"
import { ParticleBackground } from "@/components/particle-background"
import { FloatingElements } from "@/components/floating-elements"
import { ArrowRight, Github, Linkedin, Mail, ExternalLink } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/contexts/language-context"

export function HomePage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen relative">
      <ParticleBackground />
      <FloatingElements />
      {/* <Navigation /> */}

      {/* Hero Section - Enhanced with animations */}
      <section className="pt-16 min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="space-y-12">
            {/* Main Heading with staggered animation */}
            <ScrollReveal direction="up" delay={200}>
              <div className="space-y-6">
                <h1 className="font-heading font-black text-5xl sm:text-7xl lg:text-9xl text-foreground leading-[0.9] tracking-tight">
                  <span className="inline-block animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                    {t("home.hero.title")}
                  </span>
                  <br />
                  <span className="text-accent inline-block animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
                    {t("home.hero.accent")}
                  </span>
                  <br />
                  <span className="inline-block animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
                    {t("home.hero.subtitle")}
                  </span>
                </h1>

                <div className="w-24 h-1 bg-accent mx-auto animate-scale-in" style={{ animationDelay: "0.8s" }} />
              </div>
            </ScrollReveal>

            {/* Subtitle */}
            <ScrollReveal direction="up" delay={400}>
              <p className="max-w-4xl mx-auto text-xl sm:text-2xl text-muted-foreground font-medium leading-relaxed">
                {t("home.hero.description")}
              </p>
            </ScrollReveal>

            {/* CTA Buttons with magnetic effect */}
            <ScrollReveal direction="up" delay={600}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
                <MagneticButton
                  size="lg"
                  className="bg-primary cursor-pointer text-primary-foreground hover:bg-primary/90 px-8 py-4 text-lg font-semibold group hover:scale-105 transition-all duration-300"
                  onClick={() => (window.location.href = "/projects")}  
                >
                  {t("home.hero.cta.projects")}
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </MagneticButton>
                <a href="/resume.pdf" download>
                  <MagneticButton
                    variant="outline"
                    size="lg"
                    className="border-2 cursor-pointer border-border hover:bg-accent hover:text-accent-foreground px-8 py-4 text-lg font-semibold bg-transparent hover:scale-105 transition-all duration-300"
                  >
                    {t("home.hero.cta.resume")}
                  </MagneticButton>
                </a>
              </div>
            </ScrollReveal>

            {/* Social Links with hover animations */}
            <ScrollReveal direction="up" delay={800}>
              <div className="flex items-center justify-center space-x-6 pt-8">
                {[
                  { icon: Github, href: "#" },
                  { icon: Linkedin, href: "#" },
                  { icon: Mail, href: "#" },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="text-muted-foreground hover:text-accent transition-all duration-300 p-2 hover:scale-125 hover:rotate-12"
                  >
                    <social.icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Animated scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center hover:border-accent transition-colors cursor-pointer">
            <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Dark Impact Section with enhanced animations */}
      <section className="py-32 bg-primary text-primary-foreground relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-accent rounded-full animate-pulse" />
          <div
            className="absolute bottom-20 right-20 w-24 h-24 bg-accent rounded-full animate-pulse"
            style={{ animationDelay: "1s" }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left" delay={200}>
              <div className="space-y-8">
                <h2 className="font-heading font-black text-4xl sm:text-6xl leading-tight">
                  {t("home.impact.title")}
                  <br />
                  <span className="text-accent">{t("home.impact.accent")}</span>
                </h2>
                <p className="text-xl text-primary-foreground/80 leading-relaxed">{t("home.impact.description")}</p>
                <MagneticButton
                  size="lg"
                  variant="secondary"
                  className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
                >
                  {t("home.impact.cta")}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </MagneticButton>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={400}>
              <div className="space-y-6">
                <div className="text-sm text-primary-foreground/60 uppercase tracking-wider font-semibold">
                  LATEST WORK
                </div>
                <div className="space-y-4">
                  {[
                    { title: "AI-Powered Analytics Platform", tech: "React, Python, TensorFlow" },
                    { title: "Blockchain Supply Chain", tech: "Solidity, Node.js, Web3" },
                    { title: "Real-time Data Visualization", tech: "D3.js, WebSocket, Redis" },
                  ].map((project, index) => (
                    <div
                      key={index}
                      className="border-l-2 border-accent pl-6 py-2 hover:border-primary-foreground/40 transition-all duration-300 cursor-pointer group hover:translate-x-2"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <h3 className="font-semibold text-lg group-hover:text-accent transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-primary-foreground/60 text-sm">{project.tech}</p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Capabilities Grid with enhanced hover effects */}
      <ScrollReveal direction="up" delay={200}>
        <section className="py-32 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="font-heading font-bold text-4xl sm:text-5xl text-foreground mb-6">
                {t("home.capabilities.title")}
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{t("home.capabilities.subtitle")}</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Full-Stack Development",
                  description: "End-to-end application development with modern frameworks and scalable architectures",
                  icon: "🚀",
                },
                {
                  title: "AI & Machine Learning",
                  description: "Intelligent systems and data-driven solutions using cutting-edge ML algorithms",
                  icon: "🧠",
                },
                {
                  title: "Research & Innovation",
                  description:
                    "Academic research and experimental technologies pushing the boundaries of what's possible",
                  icon: "🔬",
                },
                {
                  title: "Cloud Architecture",
                  description: "Scalable cloud solutions and infrastructure design for enterprise applications",
                  icon: "☁️",
                },
                {
                  title: "Data Engineering",
                  description: "Big data processing, ETL pipelines, and real-time analytics systems",
                  icon: "📊",
                },
                {
                  title: "Cybersecurity",
                  description: "Security-first development practices and vulnerability assessment protocols",
                  icon: "🔒",
                },
              ].map((capability, index) => (
                <ScrollReveal key={index} direction="up" delay={index * 100}>
                  <Card className="group cursor-pointer hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-border hover:border-accent/50 relative overflow-hidden">
                    {/* Animated background on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <CardContent className="p-8 relative z-10">
                      <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                        {capability.icon}
                      </div>
                      <h3 className="font-heading font-bold text-xl mb-4 group-hover:text-accent transition-colors duration-300">
                        {capability.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed mb-6">{capability.description}</p>
                      <div className="mt-6">
                        <div className="flex items-center text-accent font-semibold group-hover:translate-x-2 transition-transform duration-300">
                          Learn More{" "}
                          <ExternalLink className="ml-2 w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Stats Section with counter animations */}
      <ScrollReveal direction="up" delay={200}>
        <section className="py-20 bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: "150+", key: "home.stats.projects" as const },
                { number: "25+", key: "home.stats.papers" as const },
                { number: "8+", key: "home.stats.experience" as const },
                { number: "50+", key: "home.stats.certifications" as const },
              ].map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="text-4xl sm:text-5xl font-heading font-black text-accent mb-2 group-hover:scale-125 transition-all duration-300 cursor-pointer">
                    {stat.number}
                  </div>
                  <div className="text-muted-foreground font-medium">{t(stat.key)}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Footer CTA with enhanced animations */}
      <ScrollReveal direction="up" delay={200}>
        <section className="py-20 bg-background border-t border-border">
          <div className="curso max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-foreground mb-6">{t("home.cta.title")}</h2>
            <p className="text-xl text-muted-foreground mb-8">{t("home.cta.description")}</p>
            <MagneticButton
              size="lg"
              onClick={() => (window.location.href = "mailto:jesusdotdev@gmail.com")}
              className="cursor-pointer bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
            >
              {t("home.cta.button")}
              <Mail className="ml-2 w-5 h-5" />
            </MagneticButton>
          </div>
        </section>
      </ScrollReveal>

      {/* Custom CSS for additional animations */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scaleX(0);
          }
          to {
            opacity: 1;
            transform: scaleX(1);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-scale-in {
          animation: scale-in 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  )
}
