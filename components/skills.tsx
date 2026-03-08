"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Server,
  Cloud,
  Palette,
  GitBranch,
} from "lucide-react";

const skillsData = [
  {
    category: "Frontend",
    icon: Code2,
    skills: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Redux",
      "RTK Query",
    ],
  },
  {
    category: "Database",
    icon: Database,
    skills: ["MongoDB", "Mongoose", "NoSQL"],
  },
  {
    category: "Backend",
    icon: Server,
    skills: [
      "Node.js",
      "Express.js",
      // "GraphQL",
      // "WebSocket",
      // "Socket.io",
      // "SSE",
      "JWT",
      // "BullMQ",
    ],
  },
  {
    category: "Hosting & Deployment",
    icon: Cloud,
    skills: [
      // "AWS EC2",
      // "DigitalOcean VPS",
      "Render",
      "Vercel",
      "Netlify",
      "Firebase",
      // "Hostinger",
    ],
  },
  {
    category: "UI & Styling",
    icon: Palette,
    skills: ["Tailwind CSS", "Bootstrap", "Material UI", "Styled Components"],
  },
  {
    category: "Tools",
    icon: GitBranch,
    skills: ["Git", "GitHub", "VS Code", "npm", "Yarn", "Chrome DevTools"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
  hover: {
    y: -5,
    transition: { duration: 0.3 },
  },
};

const tagVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (custom: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      delay: custom * 0.05,
    },
  }),
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-20 sm:py-24 md:py-32 bg-card border-t border-border"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Technical Skills
          </h2>
          <div className="flex justify-center mb-4">
            <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive expertise across the full technology stack, from
            frontend interfaces to cloud infrastructure and DevOps practices.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillsData.map((skillGroup, groupIndex) => {
            const IconComponent = skillGroup.icon;
            return (
              <motion.div
                key={skillGroup.category}
                variants={cardVariants}
                whileHover="hover"
                className="bg-background rounded-lg border border-border p-6 hover:border-primary/50 transition-colors"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <motion.div
                    whileHover={{ rotate: 20, scale: 1.1 }}
                    className="p-2 bg-primary/10 rounded-lg"
                  >
                    <IconComponent className="w-5 h-5 text-primary" />
                  </motion.div>
                  <h3 className="text-lg font-bold text-foreground">
                    {skillGroup.category}
                  </h3>
                </div>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2">
                  {skillGroup.skills.map((skill, index) => (
                    <motion.div
                      key={skill}
                      custom={index}
                      variants={tagVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="px-3 py-1.5 bg-primary/5 hover:bg-primary/15 border border-primary/20 hover:border-primary/50 rounded-full transition-colors"
                    >
                      <span className="text-sm font-medium text-foreground">
                        {skill}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground text-lg">
            Always learning and exploring new technologies to stay current with
            industry trends.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
