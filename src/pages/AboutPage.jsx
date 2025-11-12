import { Shield, Award, Code, Target, Users, Zap } from "lucide-react"

const AboutPage = () => {
  const skills = [
    { icon: Shield, title: "Penetration Testing", description: "Web applications, networks, and infrastructure" },
    { icon: Code, title: "Exploit Development", description: "Custom payloads and proof-of-concepts" },
    { icon: Target, title: "Cyber Operations", description: "Advanced persistent threat simulation" },
    { icon: Users, title: "Social Engineering", description: "Human factor security assessments" },
    { icon: Zap, title: "Incident Response", description: "Threat hunting and forensic analysis" },
    { icon: Award, title: "Compliance", description: "Security frameworks and standards" },
  ]

  const certifications = [
    "CEH - Certified Ethical Hacker : Cisco Networking Academy",
    "ALX SWE - Certified Software Engneer Back-end Specialization",
    "BsC. Information Technology - Programming Major"
  ]

  return (
    <div className="min-h-screen py-8 px-6">
      <div className="max-w-6xl mx-auto">
        <div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            About Gray
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Cybersecurity Engineer with 4+ years of experience in offensive security, penetration testing, and red
            team operations.
          </p>
        </div>

        <div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8"
        >
          <div className="glass-morphism p-6 rounded-2xl">
            <h2 className="text-xl font-bold mb-4 text-primary">Professional Background</h2>
            <p className="text-muted-foreground mb-3 text-sm">
              Specialized in offensive security operations with extensive experience in penetration testing,
              vulnerability assessment, and cyber operations across various industries including finance, healthcare,
              and business sectors.
            </p>
            <p className="text-muted-foreground text-sm">
              Passionate about staying ahead of emerging threats and developing innovative security solutions to protect
              organizations from sophisticated cyber attacks.
            </p>
          </div>

          <div className="glass-morphism p-6 rounded-2xl">
            <h2 className="text-xl font-bold mb-4 text-primary">Certifications</h2>
            <ul className="space-y-2">
              {certifications.map((cert, index) => (
                <li key={index} className="flex items-center text-muted-foreground text-sm">
                  <Award className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                  {cert}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold text-center mb-6 text-primary">Core Competencies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {skills.map((skill, index) => {
              const Icon = skill.icon
              return (
                <div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 * index }}
                  className="glass-morphism p-4 rounded-2xl apple-hover text-center"
                >
                  <Icon className="w-8 h-8 text-primary mb-2 mx-auto" />
                  <h3 className="text-lg font-semibold mb-1">{skill.title}</h3>
                  <p className="text-muted-foreground text-sm">{skill.description}</p>
                </div>
              )
            })}
          </div>
        </div>
        
      </div>
      
    </div>
  )
}

export default AboutPage
