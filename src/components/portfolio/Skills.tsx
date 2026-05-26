import { motion } from "framer-motion";
import { Beaker, FlaskConical, Monitor } from "lucide-react";
import { Section } from "./Section";

const groups = [
  {
    title: "Proficient In",
    icon: Beaker,
    accent: "primary",
    items: [
      "UV Spectrophotometer",
      "Tablet Punching Machine",
      "Friability Tester",
      "Mon Santo Hardness",
      "Disintegration Apparatus",
      "Microscopy",
      "ChemSketch",
      "PubChem",
      "Mol Inspiration",
      "Swiss ADME",
    ],
  },
  {
    title: "Familiar With",
    icon: FlaskConical,
    accent: "mint",
    items: ["HPLC", "Dissolution Apparatus", "Spectroscopy", "Chromatography", "Avogadro"],
  },
  {
    title: "IT Skills",
    icon: Monitor,
    accent: "accent",
    items: ["Windows 8/10", "MS Office", "PowerPoint", "Excel"],
  },
];

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Toolkit"
      title="Technical Skills"
      description="Laboratory instruments, computational tools, and software I work with."
    >
      <div className="grid md:grid-cols-3 gap-6">
        {groups.map((g, idx) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="glass rounded-2xl p-6 hover:shadow-xl transition-shadow"
          >
            <div className="flex items-center gap-3 mb-4">
              <span
                className={`grid h-10 w-10 place-items-center rounded-xl ${
                  g.accent === "primary"
                    ? "bg-primary/15 text-primary"
                    : g.accent === "mint"
                    ? "bg-mint/20 text-mint-foreground"
                    : "bg-accent text-accent-foreground"
                }`}
              >
                <g.icon className="h-5 w-5" />
              </span>
              <h3 className="font-semibold">{g.title}</h3>
            </div>
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.04 } } }}
              className="flex flex-wrap gap-2"
            >
              {g.items.map((item) => (
                <motion.span
                  key={item}
                  variants={{ hidden: { opacity: 0, scale: 0.85 }, show: { opacity: 1, scale: 1 } }}
                  whileHover={{ y: -2 }}
                  className="px-3 py-1.5 rounded-full text-xs font-medium border border-border bg-card/60 hover:border-primary hover:text-primary transition-colors"
                >
                  {item}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
