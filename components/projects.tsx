'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description:
      'A full-stack e-commerce platform with real-time inventory management, payment processing, and analytics dashboard.',
    tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Stripe'],
    image: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    links: {
      github: '#',
      live: '#',
    },
  },
  {
    id: 2,
    title: 'Task Management App',
    description:
      'Collaborative task management application with real-time updates, team workspaces, and advanced filtering.',
    tech: ['React', 'Firebase', 'Tailwind CSS', 'Framer Motion'],
    image: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    links: {
      github: '#',
      live: '#',
    },
  },
  {
    id: 3,
    title: 'AI Content Generator',
    description:
      'AI-powered content generation tool with multiple templates, batch processing, and content optimization.',
    tech: ['Next.js', 'OpenAI', 'Supabase', 'Redis'],
    image: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    links: {
      github: '#',
      live: '#',
    },
  },
  {
    id: 4,
    title: 'Analytics Dashboard',
    description:
      'Real-time analytics dashboard with customizable charts, data export, and predictive insights.',
    tech: ['Next.js', 'TypeScript', 'Recharts', 'Node.js'],
    image: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    links: {
      github: '#',
      live: '#',
    },
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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
}

const hoverVariants = {
  rest: { y: 0 },
  hover: { y: -10 },
}

export default function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-24 md:py-32 bg-card/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="mb-16"
        >
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
            <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover="hover"
              className="group"
            >
              <motion.div
                variants={hoverVariants}
                className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 h-full flex flex-col"
              >
                {/* Project image */}
                <div
                  className="h-48 w-full bg-gradient-to-br relative overflow-hidden"
                  style={{ background: project.image }}
                >
                  <motion.div
                    className="absolute inset-0 bg-black/20 group-hover:bg-black/40"
                    transition={{ duration: 0.3 }}
                  />
                </div>

                {/* Project content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-4 flex-grow">
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4 pt-4 border-t border-border">
                    <motion.a
                      href={project.links.github}
                      className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                      whileHover={{ scale: 1.1 }}
                    >
                      <Github className="w-4 h-4" />
                      <span className="text-sm">Code</span>
                    </motion.a>
                    <motion.a
                      href={project.links.live}
                      className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                      whileHover={{ scale: 1.1 }}
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm">Live</span>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
