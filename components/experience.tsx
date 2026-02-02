'use client'

import { motion } from 'framer-motion'
import {
  Code2,
  Database,
  Server,
  Layout,
  GitBranch,
  Cloud,
  Shield,
  Zap,
  Palette,
  GitFork,
} from 'lucide-react'

const experiences = [
  {
    id: 1,
    role: 'Senior Full Stack Developer',
    company: 'Tech Innovations Inc.',
    duration: '2022 - Present',
    description:
      'Led development of scalable full-stack applications, architected microservices, and optimized system performance across multiple client projects.',
    highlights: [
      'Architected scalable applications using React, Next.js, Node.js, and Express.js',
      'Implemented real-time features using WebSocket, Socket.io, and Server-Sent Events',
      'Optimized database queries with MongoDB, MySQL, and Prisma ORM improving performance by 40%',
      'Deployed applications on AWS EC2, DigitalOcean VPS, Vercel, and Firebase',
      'Implemented JWT authentication and BullMQ for task queuing',
    ],
    technologies: [
      { name: 'React', icon: Code2 },
      { name: 'Next.js', icon: Layout },
      { name: 'Node.js', icon: Server },
      { name: 'Express.js', icon: Server },
      { name: 'MongoDB', icon: Database },
      { name: 'MySQL', icon: Database },
      { name: 'GraphQL', icon: Zap },
      { name: 'AWS', icon: Cloud },
    ],
  },
  {
    id: 2,
    role: 'Full Stack Developer',
    company: 'Digital Solutions Co.',
    duration: '2020 - 2022',
    description:
      'Developed and maintained multiple client-facing applications using modern tech stack, collaborated with cross-functional teams.',
    highlights: [
      'Built responsive applications using React, Redux, and RTK Query',
      'Developed backends with Node.js, Express.js, and GraphQL',
      'Managed databases using MongoDB and Mongoose',
      'Styled applications with Tailwind CSS, Material UI, and Styled Components',
      'Deployed projects on Render, Netlify, and Hostinger',
    ],
    technologies: [
      { name: 'React', icon: Code2 },
      { name: 'Redux', icon: Zap },
      { name: 'Node.js', icon: Server },
      { name: 'GraphQL', icon: Zap },
      { name: 'MongoDB', icon: Database },
      { name: 'Tailwind CSS', icon: Palette },
      { name: 'Vercel', icon: Cloud },
    ],
  },
  {
    id: 3,
    role: 'Junior Developer',
    company: 'StartUp Hub',
    duration: '2019 - 2020',
    description:
      'Started tech career building features for SaaS products, learned modern development practices and version control with Git and GitHub.',
    highlights: [
      'Developed responsive UI components using JavaScript, TypeScript, and React',
      'Worked with Bootstrap and Material UI for responsive design',
      'Collaborated with senior developers using Git and GitHub workflows',
      'Debugged applications using Chrome DevTools and VS Code',
      'Participated in code reviews and technical discussions',
    ],
    technologies: [
      { name: 'JavaScript', icon: Code2 },
      { name: 'React', icon: Code2 },
      { name: 'TypeScript', icon: Shield },
      { name: 'Git', icon: GitBranch },
      { name: 'Bootstrap', icon: Palette },
      { name: 'Material UI', icon: Palette },
    ],
  },
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
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8 },
  },
}

export default function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="mb-16"
        >
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Experience</h2>
            <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="max-w-4xl"
        >
          {experiences.map((exp, index) => (
            <motion.div key={exp.id} variants={itemVariants} className="relative mb-8">
              {/* Timeline line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-6 sm:left-8 top-20 bottom-0 w-1 bg-gradient-to-b from-primary to-accent opacity-20" />
              )}

              {/* Timeline dot */}
              <motion.div
                className="absolute left-2 sm:left-4 top-2 w-8 h-8 sm:w-9 sm:h-9 bg-primary rounded-full flex items-center justify-center border-4 border-background"
                whileInView={{
                  scale: [0, 1.2, 1],
                  boxShadow: [
                    '0 0 0 0 rgba(59, 130, 246, 0)',
                    '0 0 0 10px rgba(59, 130, 246, 0.3)',
                    '0 0 0 0 rgba(59, 130, 246, 0)',
                  ],
                }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-2 h-2 bg-background rounded-full" />
              </motion.div>

              {/* Content */}
              <div className="ml-20 sm:ml-24 p-6 bg-card rounded-lg border border-border hover:border-primary/50 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 gap-2">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-1">
                      {exp.role}
                    </h3>
                    <p className="text-primary font-semibold text-sm sm:text-base">{exp.company}</p>
                  </div>
                  <span className="text-muted-foreground text-sm whitespace-nowrap">
                    {exp.duration}
                  </span>
                </div>

                <p className="text-muted-foreground text-sm sm:text-base mb-4 leading-relaxed">
                  {exp.description}
                </p>

                {/* Technologies Tags */}
                <div className="mb-6 pb-6 border-b border-border">
                  <p className="text-xs font-semibold text-muted-foreground mb-3 uppercase tracking-wide">
                    Tech Stack
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => {
                      const IconComponent = tech.icon
                      return (
                        <motion.div
                          key={i}
                          whileHover={{ scale: 1.05, y: -2 }}
                          className="flex items-center gap-1.5 px-3 py-1.5 bg-primary/10 hover:bg-primary/20 border border-primary/30 hover:border-primary/50 rounded-full transition-colors cursor-default"
                        >
                          <IconComponent className="w-4 h-4 text-primary" />
                          <span className="text-xs sm:text-sm font-medium text-foreground">
                            {tech.name}
                          </span>
                        </motion.div>
                      )
                    })}
                  </div>
                </div>

                <ul className="space-y-2">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="flex gap-3 text-sm sm:text-base text-muted-foreground">
                      <span className="text-accent font-bold flex-shrink-0 mt-0.5">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
