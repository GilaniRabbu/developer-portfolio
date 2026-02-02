'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-4"
        >
          <div className="flex justify-center gap-8">
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors text-sm"
            >
              GitHub
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors text-sm"
            >
              LinkedIn
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors text-sm"
            >
              Twitter
            </a>
          </div>

          <p className="text-muted-foreground text-sm">
            © {currentYear} Full Stack Developer. All rights reserved.
          </p>

          <p className="text-muted-foreground text-xs">
            Designed & Built with{' '}
            <span className="text-accent">React</span> & <span className="text-accent">Next.js</span>
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
