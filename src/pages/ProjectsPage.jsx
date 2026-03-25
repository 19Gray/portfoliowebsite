import {
  ExternalLink,
  Shield,
  Bug,
  Network,
  Terminal,
  Target,
  Eye,
  Zap,
  Code,
  Github,
} from "lucide-react";
import { motion } from "framer-motion";

const ProjectsPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const projects = [
    {
      title: "Bug Bounty Hunting",
      description:
        "Large-scale security assessment simulating advanced attack patterns against critical infrastructure, including industrial control systems and network security evaluation.",
      icon: Zap,
      tags: ["Hacker1", "Bugcrowd", "Security Testing", "Bug Bounties"],
      status: "ONGOING",
      impact: "Demonstrating security gaps in critical systems",
      threatLevel: "HIGH",
      duration: "ONGOING",
      scope: "Multi-site",
      githubUrl: "https://github.com/19Gray/bug-bounty",
    },
    {
      title: "Web Application Security",
      description:
        "Comprehensive web application security testing focusing on vulnerability discovery, security flaw analysis, and business logic testing against e-commerce platform.",
      icon: Bug,
      tags: [
        "Web Security",
        "E-commerce",
        "Vulnerability Research",
        "Portswinger Academy",
      ],
      status: "ONGOING",
      impact: "3 critical vulnerabilities discovered",
      threatLevel: "HIGH",
      duration: "Ongoing",
      scope: "ROE predefined",
      githubUrl: "https://github.com/19Gray/web-app-security",
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
      githubUrl: "https://github.com/19Gray/medref",
    },
    {
      title: "Lipa na Mpesa API",
      description:
        "Created a lipa na mpesa API gateway to streamline online payments through mobile platforms",
      icon: Code,
      tags: ["Backend Development", "API Security", "Code"],
      status: "COMPLETED",
      impact: "OWASP top 10 best practices implementation",
      threatLevel: "HIGH",
      duration: "2 months",
      scope: "Software Development",
      githubUrl: "https://github.com/19Gray/lipa-na-mpesa",
    },
    {
      title: "Scripting & Automation",
      description:
        "Creating custom Burp extensions for effective web exploitation and enumeration, custom Maltego transforms for effective OSINT",
      icon: Code,
      tags: ["Scripting", "Automation"],
      status: "ONGOING",
      impact: "Vulnerabilities Discloser, Skills Gain",
      threatLevel: "MEDIUM",
      duration: "3 months",
      scope: "ONGOING",
      githubUrl: "https://github.com/19Gray/burp-scripts",
    },
    {
      title: "purionX",
      description:
        "A blazing-fast, zero-dependency static analysis tool written in Rust. Detects OWASP Top 10 vulnerabilities in your codebase to help you secure applications before they go live. Lightweight, reliable, and designed for developers who value speed and simplicity.",
      icon: Terminal,
      tags: ["Rust", "Static Analysis", "OWASP"],
      status: "Completed",
      impact: "Vulnerabilities Discloser, Skills Gain",
      threatLevel: "High",
      duration: "3 months",
      scope: "OWASP",
      githubUrl: "https://github.com/19Gray/purionX",
    },
  ];

  const getThreatColor = (level) => {
    switch (level) {
      case "CRITICAL":
        return "text-destructive border-destructive/30 bg-destructive/10";
      case "HIGH":
        return "text-orange-600 border-orange-600/30 bg-orange-100";
      case "MEDIUM":
        return "text-amber-600 border-amber-600/30 bg-amber-100";
      default:
        return "text-green-600 border-green-600/30 bg-green-100";
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "COMPLETED":
        return "text-green-600 border-green-600/30 bg-green-100";
      case "ONGOING":
        return "text-amber-600 border-amber-600/30 bg-amber-100";
      default:
        return "text-primary border-primary/30 bg-primary/10";
    }
  };

  return (
    <div className="space-y-12">
      <div className="max-w-6xl mx-auto space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Projects
          </h1>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Professional cybersecurity assessments and penetration testing
            engagements
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8"
        >
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -6 }}
                className="glass-morphism p-4 sm:p-6 rounded-2xl apple-hover apple-shadow group flex flex-col border border-primary/10"
              >
                <div className="flex flex-col sm:flex-row items-start justify-between mb-4 gap-2">
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <div className="p-2 rounded-lg bg-accent/20 group-hover:bg-accent/30 transition-all duration-300">
                      <Icon className="w-4 sm:w-5 h-4 sm:h-5 text-primary flex-shrink-0" />
                    </div>
                    <span
                      className={`px-2 sm:px-3 py-1 rounded-lg border text-xs font-bold ${getThreatColor(project.threatLevel)}`}
                    >
                      {project.threatLevel}
                    </span>
                  </div>
                  <span
                    className={`px-2 sm:px-3 py-1 rounded-lg border text-xs font-bold ${getStatusColor(project.status)}`}
                  >
                    {project.status}
                  </span>
                </div>

                <div className="flex items-start gap-2 mb-3 group-hover:text-primary transition-colors">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base sm:text-lg font-bold text-foreground group-hover:text-primary transition-colors flex items-center gap-1 sm:gap-2 group/link"
                  >
                    {project.title}
                    <Github className="w-3 sm:w-4 h-3 sm:h-4 opacity-0 group-hover/link:opacity-100 transition-opacity flex-shrink-0" />
                  </a>
                </div>

                <p className="text-muted-foreground mb-4 leading-relaxed flex-grow text-xs sm:text-sm">
                  {project.description}
                </p>

                <div className="glass-morphism p-3 sm:p-4 rounded-xl mb-4 border border-border/50">
                  <div className="grid grid-cols-2 gap-3 sm:gap-4 text-xs sm:text-sm">
                    <div>
                      <span className="text-primary font-semibold text-xs block mb-1">
                        Duration
                      </span>
                      <div className="text-foreground text-xs sm:text-sm">
                        {project.duration}
                      </div>
                    </div>
                    <div>
                      <span className="text-primary font-semibold text-xs block mb-1">
                        Scope
                      </span>
                      <div className="text-foreground text-xs sm:text-sm">
                        {project.scope}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1 sm:gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 sm:px-3 py-1 bg-primary/10 text-primary rounded-lg text-xs font-medium border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="border-t border-border/50 pt-3 sm:pt-4 mt-auto">
                  <p className="text-xs sm:text-sm text-primary mb-1 font-semibold">
                    Project Impact:
                  </p>
                  <p className="font-semibold text-xs sm:text-sm text-foreground">
                    {project.impact}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <div className="glass-morphism p-4 sm:p-6 md:p-8 rounded-2xl apple-shadow border border-primary/10">
            <div className="p-2 sm:p-3 rounded-xl bg-accent/20 w-fit mx-auto mb-3 sm:mb-4">
              <Terminal className="w-6 sm:w-8 h-6 sm:h-8 text-primary" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-foreground">
              Let's Connect
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto leading-relaxed text-sm sm:text-base">
              I'm always interested in discussing cybersecurity, collaborating
              on CTF tournaments, and networking with the red team community.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <motion.a
                href="https://discordapp.com/users/1106104232949600308"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-6 sm:px-8 py-2 sm:py-3 bg-primary text-primary-foreground rounded-xl font-semibold text-sm sm:text-base apple-hover cyber-glow group"
              >
                Get In Touch
                <ExternalLink className="ml-1 sm:ml-2 w-3 sm:w-4 h-3 sm:h-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>

              <motion.a
                href="https://github.com/19Gray"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-6 sm:px-8 py-2 sm:py-3 bg-primary text-primary-foreground rounded-xl font-semibold text-sm sm:text-base apple-hover cyber-glow group"
              >
                Open Source
                <ExternalLink className="ml-1 sm:ml-2 w-3 sm:w-4 h-3 sm:h-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectsPage;
