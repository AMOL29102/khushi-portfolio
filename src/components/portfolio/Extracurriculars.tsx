import { motion } from "framer-motion";
import { Trophy, Medal, Lightbulb, Shirt, Music, Star } from "lucide-react";
import { Section } from "./Section";

const items = [
  { icon: Trophy, text: "1st prize — Model Making Competition (SVKM, Dhule)", rank: "1st" },
  { icon: Medal, text: "2nd prize — Carrom, Sports Day", rank: "2nd" },
  { icon: Lightbulb, text: "Inductee — Wadhwani Foundation Entrepreneurship Program", rank: "Select" },
  { icon: Shirt, text: '2nd prize — "Traditional Day 2025" (CHAVA ACT)', rank: "2nd" },
  { icon: Music, text: '2nd prize — "Flash Mob" (Fiesta 2025)', rank: "2nd" },
  { icon: Star, text: 'Consolation — "Annual Function 2024" (Dance)', rank: "Hon." },
];

export function Extracurriculars() {
  return (
    <Section
      id="extracurriculars"
      eyebrow="Beyond Academics"
      title="Extracurricular Activities"
      description="Achievements, creative pursuits, and leadership outside the classroom."
    >
      <ul className="space-y-3">
        {items.map((item, i) => (
          <motion.li
            key={item.text}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.07 }}
            whileHover={{ x: 6 }}
            className="group flex items-center gap-4 glass rounded-xl p-4 hover:border-primary/40"
          >
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-primary/15 to-mint/20 text-primary shrink-0">
              <item.icon className="h-5 w-5" />
            </span>
            <span className="flex-1 text-sm sm:text-base">{item.text}</span>
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-accent text-accent-foreground shrink-0">
              {item.rank}
            </span>
          </motion.li>
        ))}
      </ul>
    </Section>
  );
}
