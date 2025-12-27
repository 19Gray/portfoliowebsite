
import { useEffect, useRef, useState } from "react"
import { Terminal, Shield, Zap, Target, Eye, Lock } from "lucide-react"

const SkillsPage = () => {
  const canvasRef = useRef(null)
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0)

  const redTeamSkills = [
    { name: "RECON",  icon: Eye, color: "#ff0040" },
    { name: "WEAPONIZATION",  icon: Zap, color: "#ff4000" },
    { name: "DELIVERY",  icon: Target, color: "#ff8000" },
    { name: "EXPLOITATION",  icon: Lock, color: "#ffbf00" },
    { name: "INSTALLATION",  icon: Shield, color: "#80ff00" },
    { name: "C2 OPERATIONS",  icon: Terminal, color: "#00ff80" },
    { name: "(AOO)",  icon: Target, color: "#00ffff" },
    { name: "PERSISTENCE",  icon: Lock, color: "#0080ff" },
  ]

  const hackingTools = [
    { name: "Metasploit Framework", category: "Exploitation", threat: "HIGH" },
    { name: "Cobalt Strike", category: "C2 Framework", threat: "CRITICAL" },
    { name: "BloodHound", category: "AD Enumeration", threat: "HIGH" },
    { name: "Empire/Starkiller", category: "Post-Exploitation", threat: "HIGH" },
    { name: "Burp Suite", category: "Web Application", threat: "MEDIUM" },
    { name: "Nmap/Masscan", category: "Network Discovery", threat: "LOW" },
    { name: "Wireshark", category: "Traffic Analysis", threat: "LOW" },
    { name: "Hashcat", category: "Password Cracking", threat: "MEDIUM" },
    { name: "Ghidra/IDA Pro", category: "Reverse Engineering", threat: "MEDIUM" },
    { name: "Responder", category: "Network Poisoning", threat: "HIGH" },
    { name: "Mimikatz", category: "Credential Dumping", threat: "CRITICAL" },
    { name: "PowerShell Empire", category: "Living off Land", threat: "HIGH" },
    { name: "Rust", category: "Exploit Development", threat: "HIGH"},
    { name: "Bash", category: "Scripting", threat: "MEDIUM"},
    { name: "Maltego", category: "OSINT", threat: "HIGH"},
    { name: "Postman", category: "API Analysis", threat: "LOW"},
    { name: "Mitre Att&ck", category: "Framework", threat: "HIGH"},
    { name: "Arch Linux", category: "Operating System", threat: "HIGH"},
    { name: "Gophish", category: "Phishing", threat: "HIGH"},
    { name: "LaZagne", category: "Credential Access", threat: "HIGH"},
  ]

  return (
    <div className="space-y-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-6"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Red Team Skills
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Offensive security capabilities and attack vectors
          </p>
        </div>

        <div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-morphism p-6 rounded-2xl mb-8"
        >
          <h2 className="text-xl font-bold text-center mb-6 text-primary">Proficiency Matrix</h2>
          <div className="grid grid-cols-4 md:grid-cols-8 gap-3">
            {redTeamSkills.map((skill, index) => {
              const Icon = skill.icon
              return (
                <div key={index} className="glass-morphism p-3 rounded-xl text-center apple-hover">
                  <Icon className="w-5 h-5 mx-auto mb-2 text-primary" />
                  <div className="text-foreground font-semibold text-xs">{skill.name.split(" ")[0]}</div>
                </div>
              )
            })}
          </div>
        </div>

        <div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="glass-morphism p-6 rounded-2xl"
        >
          <h2 className="text-xl font-bold text-center mb-6 text-primary">Tools, Technologies & Frameworks</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {hackingTools.map((tool, index) => (
              <div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.05 * index }}
                className="glass-morphism p-3 rounded-xl apple-hover group"
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors text-sm">
                    {tool.name}
                  </h3>
                  <span
                    className={`px-2 py-1 rounded text-xs font-bold ${
                      tool.threat === "CRITICAL"
                        ? "bg-red-500/20 text-red-400 border border-red-400/30"
                        : tool.threat === "HIGH"
                          ? "bg-orange-500/20 text-orange-400 border border-orange-400/30"
                          : tool.threat === "MEDIUM"
                            ? "bg-yellow-500/20 text-yellow-400 border border-yellow-400/30"
                            : "bg-green-500/20 text-green-400 border border-green-400/30"
                    }`}
                  >
                    {tool.threat}
                  </span>
                </div>
                <p className="text-muted-foreground text-xs">{tool.category}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SkillsPage
