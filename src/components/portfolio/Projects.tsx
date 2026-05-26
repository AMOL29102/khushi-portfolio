import { motion } from "framer-motion";
import { Leaf, Sprout, FileText } from "lucide-react";
import { Section } from "./Section";

const projects = [
  {
    icon: Leaf,
    year: "2023",
    title: "Vegetative Capsule Formulation",
    desc: "Developing plant-based capsules as a sustainable, vegetarian alternative to conventional gelatin shells.",
    tag: "Formulation",
  },
  {
    icon: Sprout,
    year: "Oct 2024",
    title: "Aavishkar Research Competition",
    desc: "Conceptualized a model design for detecting crop diseases and pests to improve agricultural yield efficiency.",
    tag: "Research",
  },
  {
    icon: FileText,
    year: "2024",
    title: "Review Paper — Idiopathic Hypersomnia",
    desc: "Ongoing literature review exploring pathophysiology, diagnosis, and current therapeutic approaches.",
    tag: "Literature",
  },
];

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Selected Work"
      title="Projects"
      description="Research, formulation, and academic projects across the pharmaceutical sciences."
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -6 }}
            className="group relative glass rounded-2xl p-6 overflow-hidden"
          >
            <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors" />
            <div className="relative">
              <div className="flex items-center justify-between mb-4">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-primary/20 to-mint/20 text-primary">
                  <p.icon className="h-6 w-6" />
                </span>
              </div>
              <div className="text-xs text-mint font-semibold mb-2">{p.year} · {p.tag}</div>
              <h3 className="font-semibold text-lg leading-snug">{p.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{p.desc}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
