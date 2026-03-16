import { useState } from "react";
import { Terminal, Shield, Zap, Target, Eye, Lock } from "lucide-react";
import { motion } from "framer-motion";

const SkillsPage = () => {
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
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

  const redTeamSkills = [
    { name: "RECON", icon: Eye, color: "#ff0040" },
    { name: "WEAPONIZATION", icon: Zap, color: "#ff4000" },
    { name: "DELIVERY", icon: Target, color: "#ff8000" },
    { name: "EXPLOITATION", icon: Lock, color: "#ffbf00" },
    { name: "INSTALLATION", icon: Shield, color: "#80ff00" },
    { name: "C2 OPERATIONS", icon: Terminal, color: "#00ff80" },
    { name: "(AOO)", icon: Target, color: "#00ffff" },
    { name: "PERSISTENCE", icon: Lock, color: "#0080ff" },
  ];

  const hackingTools = [
    { name: "Metasploit Framework", category: "Exploitation", threat: "HIGH" },
    { name: "Cobalt Strike", category: "C2 Framework", threat: "CRITICAL" },
    { name: "BloodHound", category: "AD Enumeration", threat: "HIGH" },
    {
      name: "Empire/Starkiller",
      category: "Post-Exploitation",
      threat: "HIGH",
    },
    { name: "Burp Suite", category: "Web Application", threat: "MEDIUM" },
    { name: "Nmap/Masscan", category: "Network Discovery", threat: "LOW" },
    { name: "Wireshark", category: "Traffic Analysis", threat: "LOW" },
    { name: "Hashcat", category: "Password Cracking", threat: "MEDIUM" },
    {
      name: "Ghidra/IDA Pro",
      category: "Reverse Engineering",
      threat: "MEDIUM",
    },
    { name: "Responder", category: "Network Poisoning", threat: "HIGH" },
    { name: "Mimikatz", category: "Credential Dumping", threat: "CRITICAL" },
    { name: "PowerShell Empire", category: "Living off Land", threat: "HIGH" },
    { name: "Rust", category: "Exploit Development", threat: "HIGH" },
    { name: "Bash", category: "Scripting", threat: "MEDIUM" },
    { name: "Maltego", category: "OSINT", threat: "HIGH" },
    { name: "Postman", category: "API Analysis", threat: "LOW" },
    { name: "Mitre Att&ck", category: "Framework", threat: "HIGH" },
    { name: "Arch Linux", category: "Operating System", threat: "HIGH" },
    { name: "Gophish", category: "Phishing", threat: "HIGH" },
    { name: "LaZagne", category: "Credential Access", threat: "HIGH" },
  ];

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
            Red Team Skills
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Offensive security capabilities and attack vectors
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-morphism p-4 sm:p-6 md:p-8 rounded-2xl mb-8 apple-shadow border border-primary/10"
        >
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8 text-foreground">
            Proficiency Matrix
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-2 sm:gap-3">
            {redTeamSkills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="glass-morphism p-2 sm:p-3 md:p-4 rounded-lg sm:rounded-xl text-center apple-hover border border-primary/10 group"
                >
                  <div className="flex justify-center mb-1 sm:mb-2">
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="text-foreground font-semibold text-xs sm:text-sm group-hover:text-primary transition-colors line-clamp-1">
                    {skill.name.split(" ")[0]}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="glass-morphism p-4 sm:p-6 md:p-8 rounded-2xl apple-shadow border border-primary/10"
        >
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8 text-foreground">
            Tools, Technologies & Frameworks
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3">
            {hackingTools.map((tool, index) => {
              const getThreatBadgeColor = (threat) => {
                switch (threat) {
                  case "CRITICAL":
                    return "bg-destructive/10 text-destructive border-destructive/30";
                  case "HIGH":
                    return "bg-orange-100 text-orange-600 border-orange-600/30";
                  case "MEDIUM":
                    return "bg-amber-100 text-amber-600 border-amber-600/30";
                  default:
                    return "bg-green-100 text-green-600 border-green-600/30";
                }
              };

              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -3, scale: 1.02 }}
                  className="glass-morphism p-3 sm:p-4 rounded-lg sm:rounded-xl apple-hover group border border-primary/10"
                >
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors text-xs sm:text-sm line-clamp-2">
                      {tool.name}
                    </h3>
                    <span
                      className={`px-2 py-0.5 rounded text-xs font-bold border whitespace-nowrap flex-shrink-0 ${getThreatBadgeColor(
                        tool.threat,
                      )}`}
                    >
                      {tool.threat}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-xs">
                    {tool.category}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SkillsPage;
