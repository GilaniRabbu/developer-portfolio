"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { useState, FormEvent } from "react";

const socialLinks = [
  { icon: Github, href: "https://github.com/GilaniRabbu", label: "GitHub" },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/toufiq-gilani-rabbu",
    label: "LinkedIn",
  },
  { icon: Twitter, href: "https://x.com/GilaniRabbu", label: "Twitter" },
  { icon: Mail, href: "mailto:toufiqjilanirabbu7@gmail.com", label: "Email" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
};

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section
      id="contact"
      className="py-20 sm:py-24 md:py-32 bg-gradient-to-b from-background to-card/50"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-2xl mx-auto"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Get In Touch
            </h2>
            <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-6" />
            <p className="text-muted-foreground text-lg">
              Have a project in mind? Let's collaborate and create something
              amazing together.
            </p>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            variants={itemVariants}
            onSubmit={handleSubmit}
            className="space-y-6 bg-card p-8 rounded-lg border border-border mb-12"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  required
                  className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  required
                  className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                Subject
              </label>
              <input
                type="text"
                placeholder="Project discussion"
                required
                className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                Message
              </label>
              <textarea
                placeholder="Tell me about your project..."
                rows={5}
                required
                className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
              />
            </div>

            <motion.button
              type="submit"
              className="w-full px-6 py-3 cursor-pointer bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {submitted ? "Message Sent! ✓" : "Send Message"}
            </motion.button>
          </motion.form>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="text-center">
            <p className="text-muted-foreground mb-6">
              Or connect with me on social media
            </p>
            <div className="flex justify-center gap-6">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    className="p-3 rounded-lg bg-card border border-border text-foreground hover:text-primary hover:border-primary transition-colors"
                    whileHover={{ scale: 1.1, y: -4 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
