"use client"

import { ExternalLink, Shield, Bug, Network, Terminal, Target, Eye, Zap, Code } from "lucide-react"

const ProjectsPage = () => {
  const projects = [

    {
      title: "Network Penetration Testing",
      description:
        "Comprehensive penetration testing of enterprise network using advanced testing techniques, security control bypass methods, and custom security tool development.",
      icon: Eye,
      tags: ["Network Security", "Enterprise Testing", "Custom Tools"],
      status: "COMPLETED",
      impact: "Successfully bypassed multiple security layers",
      threatLevel: "HIGH",
      duration: "8 weeks",
      scope: "Enterprise network",
    },
    {
      title: "Infrastructure Security Testing",
      description:
        "Large-scale security assessment simulating advanced attack patterns against critical infrastructure, including industrial control systems and network security evaluation.",
      icon: Zap,
      tags: ["Critical Infrastructure", "Industrial Systems", "Security Testing"],
      status: "COMPLETED",
      impact: "Demonstrated security gaps in critical systems",
      threatLevel: "HIGH",
      duration: "12 weeks",
      scope: "Multi-site infrastructure",
    },
    {
      title: "Web Application Security",
      description:
        "Comprehensive web application security testing focusing on vulnerability discovery, security flaw analysis, and business logic testing against e-commerce platform.",
      icon: Bug,
      tags: ["Web Security", "E-commerce", "Vulnerability Research"],
      status: "ONGOING",
      impact: "3 critical vulnerabilities discovered",
      threatLevel: "HIGH",
      duration: "Ongoing",
      scope: "Multi-million user platform",
    },
    {
      title: "Active Directory Assessment",
      description:
        "Internal network security testing with focus on Active Directory security, authentication system analysis, and domain security evaluation in enterprise environment.",
      icon: Network,
      tags: ["Active Directory", "Authentication Security", "Enterprise"],
      status: "COMPLETED",
      impact: "Complete security assessment of AD infrastructure",
      threatLevel: "HIGH",
      duration: "3 weeks",
      scope: "10,000+ domain users",
    },
    {
      title: "MEDREF",
      description:
        "Medical Referral Appointment System created to streamline and simplify the manual referral systems in hospitals",
      icon: Code,
      tags: ["Backend Development", "API Security", "Code"],
      status: "COMPLETED",
      impact: "Completed the Automation referral",
      threatLevel: "HIGH",
      duration: "4 months",
      scope: "Software Development",
    },
    {
      title: "Lipa na Mpesa API",
      description:
        "Creted a lipa na mpesa API gateway to streamline online paments through mobile platforms",
      icon: Code,
      tags: ["Backend Development", "API Security", "Code"],
      status: "COMPLETED",
      impact: "OWASP top 10 best practices implementation",
      threatLevel: "HIGH",
      duration: "2 months",
      scope: "Software Development",
    },
    {
      title: "Scripting",
      description:
        "Creating custom Burp extentions for effective web exploitation and enumeration, custom Maltego transforms for effective OSINT",
      icon: Code,
      tags: ["Scripting", "Automation"],
      status: "ONGOING",
      impact: "Vulnrebilities Discloser, Skills Gain",
      threatLevel: "MEDIUM",
      duration: "3 months",
      scope: "Ongoing",
    },
  ]


  const getThreatColor = (level) => {
    switch (level) {
      case "CRITICAL":
        return "text-red-400 border-red-400/30 bg-red-500/20"
      case "HIGH":
        return "text-orange-400 border-orange-400/30 bg-orange-500/20"
      case "MEDIUM":
        return "text-yellow-400 border-yellow-400/30 bg-yellow-500/20"
      default:
        return "text-green-400 border-green-400/30 bg-green-500/20"
    }
  }

  const getStatusColor = (status) => {
    switch (status) {
      case "COMPLETED":
        return "text-green-400 border-green-400/30 bg-green-500/20"
      case "ONGOING":
        return "text-yellow-400 border-yellow-400/30 bg-yellow-500/20"
      default:
        return "text-blue-400 border-blue-400/30 bg-blue-500/20"
    }
  }

  return (
    <div className="space-y-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Security Projects
          </h1>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
            Professional cybersecurity assessments and penetration testing engagements
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
          {projects.map((project, index) => {
            const Icon = project.icon
            return (
              <div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 * index }}
                className="glass-morphism p-6 rounded-2xl apple-hover group flex flex-col"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <Icon className="w-6 h-6 text-primary flex-shrink-0" />
                    <span
                      className={`px-3 py-1 rounded-xl border text-xs font-bold ${getThreatColor(project.threatLevel)}`}
                    >
                      {project.threatLevel}
                    </span>
                  </div>
                  <span className={`px-3 py-1 rounded-xl border text-xs font-bold ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </div>

                <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors text-foreground">
                  {project.title}
                </h3>

                <p className="text-muted-foreground mb-4 leading-relaxed flex-grow text-sm">{project.description}</p>

                <div className="glass-morphism p-4 rounded-xl mb-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-primary font-semibold">Duration:</span>
                      <div className="text-foreground">{project.duration}</div>
                    </div>
                    <div>
                      <span className="text-primary font-semibold">Scope:</span>
                      <div className="text-foreground">{project.scope}</div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 glass-morphism text-primary rounded-xl text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="border-t border-border pt-4 mt-auto">
                  <p className="text-sm text-primary mb-2 font-semibold">Project Impact:</p>
                  <p className="text-accent font-semibold text-sm">{project.impact}</p>
                </div>
              </div>
            )
          })}
        </div>

        <div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <div className="glass-morphism p-8 rounded-2xl">
            <Terminal className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4 text-primary">Collaboration & Networking</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Connect with me for cybersecurity discussions, CTF tournaments,
              <br />
              and professional networking in the red team community
            </p>
            <a
              href="https://discordapp.com/users/1106104232949600308"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold apple-hover cyber-glow group"
            >
              Get In Touch
              <ExternalLink className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectsPage
