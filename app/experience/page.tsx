'use client'

import { Navigation } from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Building, ArrowRight } from "lucide-react"
import { motion } from "framer-motion";
import {
  Code,
  Cloud,
  Database,
  Brain,
  Globe,
  Blocks,
} from "lucide-react"
import clsx from "clsx";
import { JSX } from "react"

// const experiences = [
//   {
//     title: "Senior Research Scientist",
//     company: "TechCorp AI Labs",
//     location: "San Francisco, CA",
//     duration: "2022 - Present",
//     type: "Full-time",
//     description:
//       "Leading cutting-edge research in quantum machine learning and developing next-generation AI algorithms for enterprise applications.",
//     achievements: [
//       "Published 8 peer-reviewed papers in top-tier journals",
//       "Led a team of 12 researchers across 3 continents",
//       "Secured $2.5M in research funding from NSF and industry partners",
//       "Developed quantum-enhanced ML algorithms with 40% performance improvement",
//     ],
//     technologies: ["Python", "TensorFlow", "Qiskit", "CUDA", "Docker", "Kubernetes"],
//   },
//   {
//     title: "Principal Software Engineer",
//     company: "InnovateTech Solutions",
//     location: "New York, NY",
//     duration: "2020 - 2022",
//     type: "Full-time",
//     description:
//       "Architected and implemented large-scale distributed systems serving millions of users with focus on performance and reliability.",
//     achievements: [
//       "Designed microservices architecture handling 10M+ daily requests",
//       "Reduced system latency by 60% through optimization initiatives",
//       "Mentored 15+ junior engineers and established best practices",
//       "Led migration to cloud-native infrastructure saving $500K annually",
//     ],
//     technologies: ["Go", "Kubernetes", "PostgreSQL", "Redis", "AWS", "Terraform"],
//   },
//   {
//     title: "Machine Learning Engineer",
//     company: "DataDriven Analytics",
//     location: "Boston, MA",
//     duration: "2018 - 2020",
//     type: "Full-time",
//     description:
//       "Developed and deployed ML models for predictive analytics, computer vision, and natural language processing applications.",
//     achievements: [
//       "Built ML pipeline processing 1TB+ data daily",
//       "Improved model accuracy by 25% through feature engineering",
//       "Deployed 15+ production ML models with 99.9% uptime",
//       "Created automated model monitoring and retraining systems",
//     ],
//     technologies: ["Python", "Scikit-learn", "PyTorch", "Apache Spark", "MLflow", "Docker"],
//   },
//   {
//     title: "Research Assistant",
//     company: "MIT Computer Science Lab",
//     location: "Cambridge, MA",
//     duration: "2016 - 2018",
//     type: "Part-time",
//     description:
//       "Conducted research in distributed systems and blockchain technology under the supervision of renowned faculty members.",
//     achievements: [
//       "Co-authored 5 research papers in blockchain and distributed systems",
//       "Developed novel consensus algorithm for permissioned networks",
//       "Presented research at 8 international conferences",
//       "Received Outstanding Research Assistant Award",
//     ],
//     technologies: ["C++", "Go", "Solidity", "Python", "Linux", "Docker"],
//   },
// ]


// function ExperienceTimeline() {
//   return (
//     <section className="pb-20 bg-background">
//       <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
//         <h2 className="text-4xl font-bold mb-12 text-center">Professional Journey</h2>

//         <div className="relative">
//           {/* Vertical Progress Line */}
//           <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border" />

//           <div className="space-y-20">
//             {experiences.map((exp, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.8, delay: index * 0.2 }}
//                 className="relative flex items-start"
//               >
//                 {/* Timeline Dot */}
//                 <motion.div
//                   initial={{ scale: 0 }}
//                   whileInView={{ scale: 1 }}
//                   transition={{ type: "spring", stiffness: 200, delay: index * 0.2 }}
//                   className="absolute left-8 -ml-2 w-4 h-4 bg-accent rounded-full shadow-md"
//                 />

//                 {/* Experience Card */}
//                 <Card
//                   className={clsx(
//                     "ml-20 w-full group hover:shadow-xl hover:scale-[1.02] transition-all duration-300 border-border",
//                     index % 2 === 0 ? "lg:ml-20" : "lg:mr-20"
//                   )}
//                 >
//                   <CardContent className="p-8">
//                     <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
//                       <div>
//                         <h3 className="font-heading font-bold text-2xl text-foreground group-hover:text-accent transition-colors mb-2">
//                           {exp.title}
//                         </h3>
//                         <div className="flex items-center gap-4 text-black mb-2">
//                           <div className="flex items-center gap-1">
//                             <Building className="w-4 h-4" />
//                             {exp.company}
//                           </div>
//                           <div className="flex items-center gap-1">
//                             <MapPin className="w-4 h-4" />
//                             {exp.location}
//                           </div>
//                         </div>
//                       </div>

//                       <div className="flex items-center gap-3">
//                         <Badge variant="outline" className="flex items-center gap-1">
//                           <Calendar className="w-3 h-3" />
//                           {exp.duration}
//                         </Badge>
//                         <Badge variant="secondary">{exp.type}</Badge>
//                       </div>
//                     </div>

//                     <motion.p
//                       initial={{ opacity: 0 }}
//                       whileInView={{ opacity: 1 }}
//                       transition={{ delay: index * 0.3 + 0.3 }}
//                       className="text-foreground leading-relaxed mb-6"
//                     >
//                       {exp.description}
//                     </motion.p>

//                     {/* Achievements */}
//                     <motion.div
//                       initial={{ y: 20, opacity: 0 }}
//                       whileInView={{ y: 0, opacity: 1 }}
//                       transition={{ delay: index * 0.3 + 0.5 }}
//                       className="mb-6"
//                     >
//                       <h4 className="font-semibold text-foreground mb-3">Key Achievements:</h4>
//                       <ul className="space-y-2">
//                         {exp.achievements.map((achievement, i) => (
//                           <li key={i} className="flex items-start gap-2 text-black">
//                             <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
//                             {achievement}
//                           </li>
//                         ))}
//                       </ul>
//                     </motion.div>

//                     {/* Technologies */}
//                     <motion.div
//                       initial={{ opacity: 0 }}
//                       whileInView={{ opacity: 1 }}
//                       transition={{ delay: index * 0.3 + 0.7 }}
//                     >
//                       <h4 className="font-semibold text-foreground mb-3">Technologies Used:</h4>
//                       <div className="flex flex-wrap gap-2">
//                         {exp.technologies.map((tech) => (
//                           <Badge key={tech} variant="outline" className="text-xs">
//                             {tech}
//                           </Badge>
//                         ))}
//                       </div>
//                     </motion.div>
//                   </CardContent>
//                 </Card>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


// const timeline = [
//   {
//     type: "company",
//     company: "TechCorp AI Labs",
//     location: "San Francisco, CA",
//     roles: [
//       {
//         title: "Software Engineer",
//         duration: "Aug 7, 2023 – Aug 4, 2024",
//         type: "Full-time",
//         description:
//           "Built scalable, production-grade ML systems powering core business apps.",
//         achievements: [
//           "Optimized training pipeline reducing costs by 40%",
//           "Collaborated across 5 teams to deliver AI-driven features",
//         ],
//         technologies: ["Python", "TensorFlow", "Docker", "AWS"],
//       },
//       {
//         title: "Director of Engineering",
//         duration: "Sep 30, 2025 – Present",
//         type: "Leadership",
//         description:
//           "Promoted to lead engineering division, driving innovation and scaling teams globally.",
//         achievements: [
//           "Spearheaded strategy for 200+ engineers worldwide",
//           "Launched mentorship & R&D programs across org",
//         ],
//         technologies: ["Leadership", "Architecture", "AI Strategy"],
//       },
//     ],
//   },
//   {
//     type: "break",
//     duration: "Aug 2024 – Sep 2025",
//     description:
//       "Took a career break to travel, pursue personal projects, and focus on professional development.",
//   },
//   {
//     type: "company",
//     company: "InnovateTech Solutions",
//     location: "New York, NY",
//     roles: [
//       {
//         title: "Principal Software Engineer",
//         duration: "2020 – 2022",
//         type: "Full-time",
//         description:
//           "Architected distributed systems serving millions with high reliability.",
//         achievements: [
//           "Designed microservices handling 10M+ daily requests",
//           "Reduced system latency by 60% through optimization",
//         ],
//         technologies: ["Go", "Kubernetes", "AWS", "Terraform"],
//       },
//     ],
//   },
// ];



// function ExperienceTimeline() {
//   return (
//     <section className="pb-20 bg-background">
//       <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
//         <h2 className="text-4xl font-bold mb-12 text-center">Professional Journey</h2>

//         <div className="relative">
//           {/* Vertical Progress Line */}
//           <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border" />

//           <div className="space-y-20">
//             {timeline.map((item, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.8, delay: index * 0.2 }}
//                 className="relative flex items-start"
//               >
//                 {/* Timeline Dot */}
//                 <motion.div
//                   initial={{ scale: 0 }}
//                   whileInView={{ scale: 1 }}
//                   transition={{ type: "spring", stiffness: 250, delay: index * 0.2 }}
//                   className={clsx(
//                     "absolute left-8 -ml-2 w-4 h-4 rounded-full shadow-md",
//                     item.type === "break" ? "bg-gray-400" : "bg-accent"
//                   )}
//                 />

//                 {/* Company / Break Card */}
//                 <Card className="ml-20 w-full group hover:shadow-xl transition-all duration-300 border-border">
//                   <CardContent className="p-8">
//                     {item.type === "company" ? (
//                       <>
//                         {/* Company header */}
//                         <div className="mb-6">
//                           <h3 className="flex items-center gap-2 text-2xl font-bold">
//                             <Building className="w-5 h-5 text-accent" />
//                             {item.company}
//                           </h3>
//                           <p className="text-black">{item.location}</p>
//                         </div>

//                         {/* Roles inside company */}
//                         <div className="space-y-10">
//                           {item.roles?.map((role, rIndex) => (
//                             <motion.div
//                               key={rIndex}
//                               initial={{ opacity: 0, y: 20 }}
//                               whileInView={{ opacity: 1, y: 0 }}
//                               transition={{ delay: rIndex * 0.2 }}
//                             >
//                               <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-3">
//                                 <div>
//                                   <h4 className="text-xl font-semibold mb-1">
//                                     {role.title}
//                                   </h4>
//                                   <Badge variant="secondary">{role.type}</Badge>
//                                 </div>
//                                 <div className="flex items-center gap-2 text-sm text-black mt-2 lg:mt-0">
//                                   <Calendar className="w-4 h-4" />
//                                   {role.duration}
//                                 </div>
//                               </div>
//                               <p className="text-foreground leading-relaxed mb-4">
//                                 {role.description}
//                               </p>
//                               <ul className="list-disc pl-5 mb-4 text-black space-y-1">
//                                 {role.achievements.map((a, i) => (
//                                   <li key={i}>{a}</li>
//                                 ))}
//                               </ul>
//                               <div className="flex flex-wrap gap-2">
//                                 {role.technologies.map((tech) => (
//                                   <Badge key={tech} variant="outline" className="text-xs">
//                                     {tech}
//                                   </Badge>
//                                 ))}
//                               </div>
//                             </motion.div>
//                           ))}
//                         </div>
//                       </>
//                     ) : (
//                       <>
//                         {/* Career Break */}
//                         <div className="text-center">
//                           <h3 className="text-xl font-bold text-gray-700">
//                             Career Break
//                           </h3>
//                           <p className="text-black mb-2">{item.duration}</p>
//                           <p className="text-foreground leading-relaxed">
//                             {item.description}
//                           </p>
//                         </div>
//                       </>
//                     )}
//                   </CardContent>
//                 </Card>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


// const timeline = [
//   {
//     type: "company",
//     company: "TechCorp AI Labs",
//     location: "San Francisco, CA",
//     roles: [
//       {
//         title: "Software Engineer",
//         duration: "Aug 7, 2023 – Aug 4, 2024",
//         type: "Full-time",
//         description:
//           "Built scalable, production-grade ML systems powering core business apps.",
//         achievements: [
//           "Optimized training pipeline reducing costs by 40%",
//           "Collaborated across 5 teams to deliver AI-driven features",
//         ],
//         technologies: ["Python", "TensorFlow", "Docker", "AWS"],
//       },
//       {
//         title: "Director of Engineering",
//         duration: "Sep 30, 2025 – Present",
//         type: "Leadership",
//         description:
//           "Promoted to lead engineering division, driving innovation and scaling teams globally.",
//         achievements: [
//           "Spearheaded strategy for 200+ engineers worldwide",
//           "Launched mentorship & R&D programs across org",
//         ],
//         technologies: ["Leadership", "Architecture", "AI Strategy"],
//       },
//     ],
//   },
//   {
//     type: "break",
//     duration: "Aug 2024 – Sep 2025",
//     description:
//       "Took a career break to travel, pursue personal projects, and focus on professional development.",
//   },
//   {
//     type: "company",
//     company: "InnovateTech Solutions",
//     location: "New York, NY",
//     roles: [
//       {
//         title: "Principal Software Engineer",
//         duration: "2020 – 2022",
//         type: "Full-time",
//         description:
//           "Architected distributed systems serving millions with high reliability.",
//         achievements: [
//           "Designed microservices handling 10M+ daily requests",
//           "Reduced system latency by 60% through optimization",
//         ],
//         technologies: ["Go", "Kubernetes", "AWS", "Terraform"],
//       },
//     ],
//   },
// ]

// function ExperienceTimeline() {
//   return (
//     <section className="pb-20 bg-background">
//       <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
//         <h2 className="text-4xl font-bold mb-12 text-center">
//           Professional Journey
//         </h2>

//         <div className="relative">
//           {/* Vertical Progress Line */}
//           <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border" />

//           <div className="space-y-20">
//             {timeline.map((item, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.8, delay: index * 0.2 }}
//                 className="relative flex items-start"
//               >
//                 {/* Timeline Dot */}
//                 <motion.div
//                   initial={{ scale: 0 }}
//                   whileInView={{ scale: 1 }}
//                   transition={{
//                     type: "spring",
//                     stiffness: 250,
//                     delay: index * 0.2,
//                   }}
//                   className={clsx(
//                     "absolute left-8 -ml-2 w-4 h-4 rounded-full shadow-md",
//                     item.type === "break" ? "bg-gray-400" : "bg-accent"
//                   )}
//                 />

//                 {/* Company / Break Card */}
//                 <Card className="ml-20 w-full group hover:shadow-xl transition-all duration-300 border-border">
//                   <CardContent className="p-8">
//                     {item.type === "company" ? (
//                       <>
//                         {/* Company header */}
//                         <div className="mb-6">
//                           <h3 className="flex items-center gap-2 text-2xl font-bold">
//                             <Building className="w-5 h-5 text-accent" />
//                             {item.company}
//                           </h3>
//                           <p className="text-black">
//                             {item.location}
//                           </p>
//                         </div>

//                         {/* Roles inside company (with progression arrows/slant) */}
//                         <div className="relative pl-4 border-l-2 border-dashed border-accent space-y-12">
//                           {item.roles?.map((role, rIndex) => (
//                             <motion.div
//                               key={rIndex}
//                               initial={{ opacity: 0, y: 20 }}
//                               whileInView={{ opacity: 1, y: 0 }}
//                               transition={{ delay: rIndex * 0.2 }}
//                               className={clsx(
//                                 "relative",
//                                 rIndex % 2 === 0 ? "ml-2" : "ml-8"
//                               )}
//                             >
//                               {/* Connector Arrow */}
//                               {rIndex > 0 && (
//                                 <div className="absolute -left-6 top-3 flex items-center text-accent">
//                                   <div className="w-6 h-0.5 bg-accent transform -skew-y-6" />
//                                   <ArrowRight className="w-4 h-4 ml-1" />
//                                 </div>
//                               )}

//                               <div className="bg-card rounded-2xl p-6 shadow-md hover:shadow-lg border border-border transition-all">
//                                 <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-3">
//                                   <div>
//                                     <h4 className="text-xl font-semibold mb-1">
//                                       {role.title}
//                                     </h4>
//                                     <Badge variant="secondary">{role.type}</Badge>
//                                   </div>
//                                   <div className="flex items-center gap-2 text-sm text-black mt-2 lg:mt-0">
//                                     <Calendar className="w-4 h-4" />
//                                     {role.duration}
//                                   </div>
//                                 </div>

//                                 <p className="text-foreground leading-relaxed mb-4">
//                                   {role.description}
//                                 </p>

//                                 <ul className="list-disc pl-5 mb-4 text-black space-y-1">
//                                   {role.achievements.map((a, i) => (
//                                     <li key={i}>{a}</li>
//                                   ))}
//                                 </ul>

//                                 <div className="flex flex-wrap gap-2">
//                                   {role.technologies.map((tech) => (
//                                     <Badge
//                                       key={tech}
//                                       variant="outline"
//                                       className="text-xs"
//                                     >
//                                       {tech}
//                                     </Badge>
//                                   ))}
//                                 </div>
//                               </div>
//                             </motion.div>
//                           ))}
//                         </div>
//                       </>
//                     ) : (
//                       <>
//                         {/* Career Break */}
//                         <div className="text-center">
//                           <h3 className="text-xl font-bold text-gray-700">
//                             Career Break
//                           </h3>
//                           <p className="text-black mb-2">
//                             {item.duration}
//                           </p>
//                           <p className="text-foreground leading-relaxed">
//                             {item.description}
//                           </p>
//                         </div>
//                       </>
//                     )}
//                   </CardContent>
//                 </Card>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
// )
// }


const icons: Record<string, JSX.Element> = {
  "Programming Languages": <Code className="w-5 h-5 text-accent" />,
  "AI/ML Frameworks": <Brain className="w-5 h-5 text-accent" />,
  "Cloud & DevOps": <Cloud className="w-5 h-5 text-accent" />,
  "Databases": <Database className="w-5 h-5 text-accent" />,
  "Web Technologies": <Globe className="w-5 h-5 text-accent" />,
  "Blockchain": <Blocks className="w-5 h-5 text-accent" />,
}

function SkillsSection() {
  return (
    <section className="py-20 bg-card relative overflow-hidden">
      {/* background accent grid */}
      <div className="absolute inset-0 bg-grid-slate-200/25 bg-[size:40px_40px] -z-10" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="font-heading font-bold text-4xl sm:text-5xl text-foreground mb-6"
          >
            Technical Expertise
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-black max-w-3xl mx-auto"
          >
            **Full-spectrum skill set** spanning <span className="text-accent font-semibold">software engineering</span>, 
            <span className="text-accent font-semibold"> cloud-native systems</span>, and 
            <span className="text-accent font-semibold"> advanced AI/ML innovation</span>.
          </motion.p>
        </div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.15 } },
          }}
        >
          {skills.map((skillGroup, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 40 },
                show: { opacity: 1, y: 0 },
              }}
            >
              <Card className="border-border group hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    {icons[skillGroup.category]}
                    <h3 className="font-heading font-bold text-lg text-accent">
                      {skillGroup.category}
                    </h3>
                  </div>
                  <motion.div
                    className="flex flex-wrap gap-2"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={{
                      hidden: {},
                      show: { transition: { staggerChildren: 0.05 } },
                    }}
                  >
                    {skillGroup.items.map((skill) => (
                      <motion.div
                        key={skill}
                        variants={{
                          hidden: { opacity: 0, scale: 0.8 },
                          show: { opacity: 1, scale: 1 },
                        }}
                      >
                        <Badge
                          variant="outline"
                          className="text-sm font-semibold px-2 py-1 hover:bg-accent hover:text-white transition"
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

const skills = [
  { category: "Programming Languages", items: ["TypeScript", "Java", "Rust", "Python", "Go", "JavaScript", "C#", "Move"] },
  { category: "Cloud & DevOps", items: [
    "AWS", 
    // "Azure",
     "GCP", 
     "Kubernetes", 
     "Docker", 
    //  "Terraform", 
    //  "Jenkins"
    ] },
  { category: "Databases", items: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "SQLite", "Firebase", "Firestore", "DynamoDB" 
    // "Elasticsearch", "Neo4j", "InfluxDB"
  ] },
  { category: "Web Technologies", items: ["React", "Next.js", "Node.js", "GraphQL", "REST APIs", "WebSocket"] },
  // { category: "AI/ML Frameworks", items: ["TensorFlow", "PyTorch", "Scikit-learn", "Qiskit", "Hugging Face", "MLflow"] },
  { category: "Blockchain", items: ["SUI", "Solana", "Ethereum", "Web3.js", "IPFS", "Smart Contracts"] },
]


const timeline = [
  {
    type: "company",
    company: "Biyard Inc",
    location: "Remote, Korea",
    roles: [
      {
        title: "QA Engineer",
        duration: "Aug 2025 – Present",
        description: `
          Engineered backend architectures for **4 production-grade projects** — Ratela, Dagit, Incheon Heroes, and Voice Korea — using **Axum (Rust)** with clean REST and WebSocket interfaces integrated into Dioxus frontends.
        `,
        achievements: [
          "Implemented complex relational data models with **PostgreSQL libraries** to handle **multi-tenant workflows** and **property hierarchies**.",
          "Integrated **AWS (S3, RDS, Lambda, CloudFront)** ensuring **scalable deployments with minimal latency**.",
          "Integrated **Kaia Wallet** into Incheon Heroes for **secure blockchain identity verification**.",
          "Designed **graph-based backend algorithms** for dynamic content models in Ratela’s pipelines.",
          "Developed modular **APIs in Axum**, maintaining data integrity and reusable business logic.",
          "Built **backend test suites** (Playwright + custom benchmarking) ensuring responsiveness under high concurrency.",
          "Orchestrated **CI/CD pipelines (GitHub Actions)** with **85%+ success rate** across environments.",
        ],
        technologies: ["Rust", "Axum", "PostgreSQL", "AWS", "Kaia Wallet", "CI/CD"],
      },
      {
        title: "Software Engineer",
        duration: "Apr 2025 – Jul 2025",
        description: `
          Engineered backend architectures for **4 production-grade projects** — Ratela, Dagit, Incheon Heroes, and Voice Korea — using **Axum (Rust)** with clean REST and WebSocket interfaces integrated into Dioxus frontends.
        `,
        achievements: [
          "Implemented complex relational data models with **PostgreSQL libraries** to handle **multi-tenant workflows** and **property hierarchies**.",
          "Integrated **AWS (S3, RDS, Lambda, CloudFront)** ensuring **scalable deployments with minimal latency**.",
          "Integrated **Kaia Wallet** into Incheon Heroes for **secure blockchain identity verification**.",
          "Designed **graph-based backend algorithms** for dynamic content models in Ratela’s pipelines.",
          "Developed modular **APIs in Axum**, maintaining data integrity and reusable business logic.",
          "Built **backend test suites** (Playwright + custom benchmarking) ensuring responsiveness under high concurrency.",
          "Orchestrated **CI/CD pipelines (GitHub Actions)** with **85%+ success rate** across environments.",
        ],
        technologies: ["Rust", "Axum", "PostgreSQL", "AWS", "Kaia Wallet", "CI/CD"],
      },
      {
        title: "Software Engineer - Contract",
        duration: "Feb 2025 – Apr 2025",
        description: `
          Engineered backend architectures for **4 production-grade projects** — Ratela, Dagit, Incheon Heroes, and Voice Korea — using **Axum (Rust)** with clean REST and WebSocket interfaces integrated into Dioxus frontends.
        `,
        achievements: [
          "Implemented complex relational data models with **PostgreSQL libraries** to handle **multi-tenant workflows** and **property hierarchies**.",
          "Integrated **AWS (S3, RDS, Lambda, CloudFront)** ensuring **scalable deployments with minimal latency**.",
          "Integrated **Kaia Wallet** into Incheon Heroes for **secure blockchain identity verification**.",
          "Designed **graph-based backend algorithms** for dynamic content models in Ratela’s pipelines.",
          "Developed modular **APIs in Axum**, maintaining data integrity and reusable business logic.",
          "Built **backend test suites** (Playwright + custom benchmarking) ensuring responsiveness under high concurrency.",
          "Orchestrated **CI/CD pipelines (GitHub Actions)** with **85%+ success rate** across environments.",
        ],
        technologies: ["Rust", "Axum", "PostgreSQL", "AWS", "Kaia Wallet", "CI/CD"],
      },
    ],
  },
  {
    type: "break",
    duration: "Jul 2024 – Feb 2025",
    description:
      "Took a career break to travel, rest, and focus on professional development.",
  },
  {
    type: "company",
    company: "Blockks",
    location: "Lagos, Nigeria",
    roles: [
      {
        title: "Software Engineer - Contract",
        duration: "April 2024 – Jul 2024",
        description: `
          Led backend architecture for **wallet and payment services**, handling over **₦50M+ in transactions** and serving **1,000+ beta users**.
        `,
        achievements: [
          "Integrated **MAPLERAD** and **Risevest APIs** reducing onboarding from **48h → 10min**.",
          "Deployed **Redis-backed microservices**, improving throughput by **60%** and reducing race-condition downtime by **~80%**.",
          "Designed REST APIs in **Express + TypeScript**, enabling **real-time analytics** (+25% transaction frequency).",
          "Modeled **hybrid schemas (MongoDB + PostgreSQL)** processing **30K+ events/day** with sub-100ms responses.",
          "Adopted **TDD** and CI pipelines, cutting post-deployment bugs by **70%**.",
        ],
        technologies: ["Express", "TypeScript", "Redis", "MongoDB", "PostgreSQL", "CI/CD"],
      },
    ],
  },
  {
    type: "company",
    company: "FeedXPay",
    location: "Lagos, Nigeria",
    roles: [
      {
        title: "Software Engineer - Fintech Startup",
        duration: "Aug 2023 – Jan 2024",
        description: `
          Led backend architecture for **wallet and payment services**, handling over **₦50M+ in transactions** and serving **1,000+ beta users**.
        `,
        achievements: [
          "Integrated **MAPLERAD** and **Risevest APIs** reducing onboarding from **48h → 10min**.",
          "Deployed **Redis-backed microservices**, improving throughput by **60%** and reducing race-condition downtime by **~80%**.",
          "Designed REST APIs in **Express + TypeScript**, enabling **real-time analytics** (+25% transaction frequency).",
          "Modeled **hybrid schemas (MongoDB + PostgreSQL)** processing **30K+ events/day** with sub-100ms responses.",
          "Adopted **TDD** and CI pipelines, cutting post-deployment bugs by **70%**.",
        ],
        technologies: ["Express", "TypeScript", "Redis", "MongoDB", "PostgreSQL", "CI/CD"],
      },
    ],
  },
  {
    type: "company",
    company: "Tribal Prints",
    location: "Lagos, Nigeria",
    roles: [
      {
        title: "Software Engineer (Internship)",
        duration: "Oct 2023 – Dec 2023",
        description: `
          Delivered backend infrastructure with **NestJS + TypeScript**, automating **300+ print order processes**.
        `,
        achievements: [
          "Cut invoice errors by **90%** via automation.",
          "Boosted checkout success by **35%** with secure cart/order APIs.",
          "Integrated financial APIs reducing reconciliation time from **2h → <10min/day**.",
          "Achieved **95% sprint goal completion** in agile team of 4.",
          "Reduced failed deployments by **~50%** with CI pipelines + pre-merge testing.",
        ],
        technologies: ["NestJS", "TypeScript", "Sequelize", "PostgreSQL", "CI/CD"],
      },
    ],
  },
  // {
  //   type: "break",
  //   duration: "Aug 2024 – Sep 2025",
  //   description:
  //     "Took a career break to travel, pursue personal projects, and focus on professional development.",
  // },
  {
    type: "company",
    company: "PeerHub",
    location: "Lagos, Nigeria",
    roles: [
      {
        title: "Software Engineer - SaaS Startup",
        duration: "Aug 2023 – Oct 2023",
        description: `
          Designed and deployed scalable backends for **multi-tenant SaaS**, supporting **3+ client apps** with strong uptime.
        `,
        achievements: [
          "Developed middleware improving request handling by **40%**.",
          "Shipped **user auth systems** reducing onboarding time by **25%**.",
          "Built APIs handling **20K+ monthly requests**, backed by MongoDB + PostgreSQL.",
          "Led unit testing (**80%+ coverage**) and CI/CD setup, cutting QA cycles by **60%**.",
        ],
        technologies: ["Node.js", "PostgreSQL", "MongoDB", "CI/CD"],
      },
    ],
  },
]

function ExperienceTimeline() {
  return (
    <section className="pb-20 bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-6xl font-bold mb-12 text-center">Professional Journey</h2>

        <div className="relative">
          {/* Vertical Progress Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border" />

          <div className="space-y-20">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative flex items-start"
              >
                {/* Timeline Dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 250, delay: index * 0.2 }}
                  className="absolute left-8 -ml-2 w-4 h-4 rounded-full shadow-md bg-accent"
                />

                {/* Company Card OR Career Break */}
                <Card className="ml-20 w-full group hover:shadow-xl transition-all duration-300 border-border">
                  <CardContent className="p-8">
                    {item.roles ? (
                      <>
                        {/* Company Info */}
                        <div className="mb-6">
                          <h3 className="flex items-center gap-2 text-2xl font-bold">
                            <Building className="w-5 h-5 text-accent" />
                            {item.company}
                          </h3>
                          <p className="text-black">{item.location}</p>
                        </div>

                        {/* Roles inside company */}
                        <div className="relative pl-4 border-l-2 border-dashed border-accent space-y-12">
                          {item.roles.map((role, rIndex) => (
                            <motion.div
                              key={rIndex}
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ delay: rIndex * 0.2 }}
                              className={clsx(
                                "relative",
                                // rIndex % 2 === 0 ? "ml-2" : "ml-10",
                                rIndex === 0 ? "ml-2" : "",
                                rIndex === 1 ? "ml-10" : "",
                                rIndex === 2 ? "ml-20" : ""
                              )}
                            >
                              {/* Slanted Connector */}
                              {rIndex > 0 && (
                                <div className="absolute -left-6 top-3 flex items-center text-accent">
                                  <div className="w-9 h-0.5 bg-accent transform -skew-y-6" />
                                  <ArrowRight className="w-4 h-4 ml-1" />
                                </div>
                              )}

                              <div className="bg-card rounded-2xl p-6 shadow-md border border-border">
                                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-3">
                                  <div>
                                    <h4 className="text-lg font-bold mb-1">{role.title}</h4>
                                  </div>
                                  <div className="flex items-center gap-2 text-sm text-black mt-2 lg:mt-0">
                                    <Calendar className="w-4 h-4" />
                                    <span className="font-semibold">{role.duration}</span>
                                  </div>
                                </div>

                                {/* Description with bold highlights */}
                                <p
                                  className="text-foreground leading-relaxed mb-4"
                                  dangerouslySetInnerHTML={{ __html: role.description }}
                                />

                                {/* Achievements */}
                                <ul className="list-disc pl-5 mb-4 text-black space-y-1">
                                  {role.achievements.map((a, i) => (
                                    <li
                                      key={i}
                                      dangerouslySetInnerHTML={{ __html: a }}
                                    />
                                  ))}
                                </ul>

                                {/* Tech badges */}
                                <div className="flex flex-wrap gap-2">
                                  {role.technologies.map((tech) => (
                                    <Badge
                                      key={tech}
                                      variant="outline"
                                      className="text-xs font-semibold"
                                    >
                                      {tech}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </>
                    ) : (
                      /* Career Break */
                      <div className="text-center">
                        <h3 className="text-xl font-bold text-gray-700">
                          Career Break
                        </h3>
                        <p className="text-black mb-2">{item.duration}</p>
                        <p className="text-foreground leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}



const experiences = [
  {
    title: "Software Engineer",
    company: "TechCorp AI Labs",
    location: "San Francisco, CA",
    duration: "Aug 7, 2023 – Aug 4, 2024",
    type: "Full-time",
    description:
      "Built scalable, production-grade ML systems powering critical business applications.",
    achievements: [
      "Optimized training pipeline reducing costs by 40%",
      "Collaborated across 5 teams to deliver AI-driven features",
    ],
    technologies: ["Python", "TensorFlow", "Docker", "AWS"],
  },
  {
    title: "Director of Engineering",
    company: "TechCorp AI Labs",
    location: "San Francisco, CA",
    duration: "Sep 30, 2025 – Present",
    type: "Leadership",
    description:
      "Promoted to lead the engineering division, driving innovation and growth across global teams.",
    achievements: [
      "Spearheaded strategy for 200+ engineers worldwide",
      "Launched company-wide mentorship and R&D initiatives",
    ],
    technologies: ["Leadership", "Architecture", "AI Strategy"],
  },
  {
    title: "Director of Engineering",
    company: "TechCorpasf AI Labs",
    location: "San Francisco, CA",
    duration: "Sep 30, 2025 – Present",
    type: "Leadership",
    description:
      "Promoted to lead the engineering division, driving innovation and growth across global teams.",
    achievements: [
      "Spearheaded strategy for 200+ engineers worldwide",
      "Launched company-wide mentorship and R&D initiatives",
    ],
    technologies: ["Leadership", "Architecture", "AI Strategy"],
  },
];


// const skills = [
//   { category: "Programming Languages", items: ["Python", "Go", "JavaScript", "TypeScript", "C++", "Rust", "Solidity"] },
//   {
//     category: "AI/ML Frameworks",
//     items: ["TensorFlow", "PyTorch", "Scikit-learn", "Qiskit", "Hugging Face", "MLflow"],
//   },
//   { category: "Cloud & DevOps", items: ["AWS", "Azure", "GCP", "Kubernetes", "Docker", "Terraform", "Jenkins"] },
//   { category: "Databases", items: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch", "Neo4j", "InfluxDB"] },
//   { category: "Web Technologies", items: ["React", "Next.js", "Node.js", "GraphQL", "REST APIs", "WebSocket"] },
//   { category: "Blockchain", items: ["Ethereum", "Hyperledger", "Web3.js", "IPFS", "Smart Contracts"] },
// ]

export default function ExperiencePage() {
  return (
    <div className="min-h-screen">
      {/* <Navigation /> */}

      {/* Hero Section */}
      <section className="pt-16 py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-1">
            <h1 className="font-heading font-black text-5xl sm:text-7xl text-foreground mb-6">
              PROFESSIONAL
              <br />
              <span className="text-accent">EXPERIENCE</span>
            </h1>
            <div className="w-24 h-1 bg-accent mx-auto mb-8" />
            <p className="text-xl text-black max-w-3xl mx-auto leading-relaxed">
              A journey through innovative companies and research institutions, building cutting-edge technology
              solutions and advancing the state of the art in computer science.
            </p>
          </div>
        </div>
      </section>

      <ExperienceTimeline />

      {/* 
      <section className="pb-20 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {index !== experiences.length - 1 && <div className="absolute left-8 top-20 w-0.5 h-32 bg-border" />}

                <Card className="group hover:shadow-lg transition-all duration-300 border-border">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-6">
                      <div className="w-4 h-4 bg-accent rounded-full mt-2 flex-shrink-0" />

                      <div className="flex-1">
                        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                          <div>
                            <h3 className="font-heading font-bold text-2xl text-foreground group-hover:text-accent transition-colors mb-2">
                              {exp.title}
                            </h3>
                            <div className="flex items-center gap-4 text-black mb-2">
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
                              <li key={i} className="flex items-start gap-2 text-black">
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
      </section>  */}

      {/* Skills Section */}
      {/* <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl sm:text-5xl text-foreground mb-6">Technical Expertise</h2>
            <p className="text-xl text-black max-w-3xl mx-auto">
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
      </section> */}
      <SkillsSection />
    </div>
  )
}
