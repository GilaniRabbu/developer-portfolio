'use client'

import { motion } from 'framer-motion'

const skills = [
  { name: 'Frontend', level: 95, color: 'from-primary to-accent' },
  { name: 'Backend', level: 90, color: 'from-accent to-secondary' },
  { name: 'Databases', level: 88, color: 'from-secondary to-primary' },
  { name: 'Cloud & DevOps', level: 85, color: 'from-primary to-secondary' },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
}

export default function About() {
  return (
    <section className="py-20 sm:py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          {/* About text */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">About Me</h2>
              <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
            </div>

            <p className="text-muted-foreground text-lg leading-relaxed">
              I'm a passionate full stack developer with over 5 years of experience building
              scalable web applications. I specialize in creating seamless user experiences
              combined with robust backend systems.
            </p>

            <p className="text-muted-foreground text-lg leading-relaxed">
              My journey in tech has taught me that great software comes from understanding
              both the technical requirements and the human element. I love collaborating with
              teams, learning new technologies, and solving complex problems.
            </p>

            <p className="text-muted-foreground text-lg leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to
              open-source projects, or sharing knowledge with the developer community.
            </p>
          </motion.div>

          {/* Skills */}
          <motion.div variants={itemVariants} className="space-y-8">
            <h3 className="text-2xl sm:text-3xl font-bold">Skills & Expertise</h3>

            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                className="space-y-2"
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold text-foreground">{skill.name}</span>
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="w-full h-3 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1, ease: 'easeOut' }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
