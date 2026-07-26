import { motion } from 'framer-motion';
import {
  Award,
  BookOpen,
  Code,
  Image as ImageIcon,
  Shield,
  Target,
  Trophy,
  Users,
  Zap,
} from 'lucide-react';
import { useState } from 'react';

const AboutPage = () => {
  const [imageErrors, setImageErrors] = useState({});
  const skills = [
    {
      icon: Shield,
      title: 'Penetration Testing',
      description: 'Web applications, networks, and infrastructure',
    },
    {
      icon: Code,
      title: 'Exploit Development',
      description: 'Custom payloads and proof-of-concepts',
    },
    {
      icon: Target,
      title: 'Cyber Operations',
      description: 'Advanced persistent threat simulation',
    },
    {
      icon: Users,
      title: 'Social Engineering',
      description: 'Human factor security assessments',
    },
    {
      icon: Zap,
      title: 'Incident Response',
      description: 'Threat hunting and forensic analysis',
    },
    {
      icon: Award,
      title: 'Compliance',
      description: 'Security frameworks and standards',
    },
  ];

  const certifications = [
    {
      name: 'African Leadership Experience (ALX)',
      credential: 'Software Engineering (Back-end) Specialization',
      icon: BookOpen,
      image: '/certificates/alx.png',
    },
    {
      name: 'Bachelor of Science - Information Technology',
      credential: 'Programming Major',
      icon: Trophy,
      image: '/certificates/bsc-certificate.png',
    },
    {
      name: 'API Penetration Testing',
      credential: 'APISEC Certification',
      icon: Award,
      image: '/certificates/apisec.png',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
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
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-foreground">
            About R00KE0
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed px-2">
            Cybersecurity Engineer with 4+ years of experience in offensive security, penetration
            testing, and red team operations.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="grid grid-cols-1 gap-6 mb-8"
        >
          <motion.div
            variants={itemVariants}
            className="glass-morphism p-4 sm:p-6 md:p-8 rounded-2xl apple-shadow apple-hover border border-primary/10"
          >
            <h2 className="text-lg sm:text-2xl font-bold mb-4 text-primary flex items-center gap-2">
              <div className="w-1 h-6 sm:h-8 bg-primary rounded-full" />
              Professional Background
            </h2>
            <p className="text-muted-foreground mb-3 sm:mb-4 text-xs sm:text-sm leading-relaxed">
              Specialized in offensive security operations with extensive experience in penetration
              testing, vulnerability assessment, and cyber operations across various industries
              including finance, healthcare, and business sectors.
            </p>
            <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
              Passionate about staying ahead of emerging threats and developing innovative security
              solutions to protect organizations from sophisticated cyber attacks.
            </p>
          </motion.div>
        </motion.div>

        <motion.div initial="hidden" animate="visible" variants={containerVariants}>
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-10 text-foreground">
            Professional Certifications
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {certifications.map((cert, index) => {
              const CertIcon = cert.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -6 }}
                  className="glass-morphism rounded-2xl apple-shadow apple-hover border border-primary/10 group overflow-hidden flex flex-col"
                >
                  {/* Image Section */}
                  <div className="relative h-48 sm:h-56 bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center overflow-hidden">
                    {cert.image && !imageErrors[index] ? (
                      <img
                        src={cert.image}
                        alt={cert.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        onError={() => {
                          setImageErrors(prev => ({
                            ...prev,
                            [index]: true,
                          }));
                          console.log('[v0] Certificate image failed to load:', cert.image);
                        }}
                        onLoad={() => {
                          console.log('[v0] Certificate image loaded:', cert.image);
                        }}
                      />
                    ) : (
                      <div className="flex flex-col items-center justify-center gap-2 p-4">
                        <div className="p-3 rounded-xl bg-accent/30">
                          {cert.image ? (
                            <ImageIcon className="w-8 h-8 text-muted-foreground" />
                          ) : (
                            <CertIcon className="w-8 h-8 text-primary" />
                          )}
                        </div>
                        {cert.image && imageErrors[index] && (
                          <p className="text-xs text-muted-foreground text-center">
                            Image not found
                          </p>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Text Section */}
                  <div className="p-4 sm:p-6 flex flex-col flex-grow">
                    <h3 className="text-base sm:text-lg font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                      {cert.name}
                    </h3>
                    <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                      {cert.credential}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        <motion.div initial="hidden" animate="visible" variants={containerVariants}>
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-10 text-foreground">
            Core Competencies
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -6 }}
                  className="glass-morphism p-4 sm:p-6 rounded-2xl apple-hover text-center border border-primary/10 group"
                >
                  <div className="flex justify-center mb-2 sm:mb-3">
                    <div className="p-2 sm:p-3 rounded-xl bg-accent/20 group-hover:bg-accent/30 transition-all duration-300">
                      <Icon className="w-5 sm:w-6 h-5 sm:h-6 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold mb-2 text-foreground">
                    {skill.title}
                  </h3>
                  <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                    {skill.description}
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

export default AboutPage;
