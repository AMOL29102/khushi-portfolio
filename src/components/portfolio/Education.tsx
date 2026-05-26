import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { Section } from "./Section";

const items = [
  {
    title: "Bachelor of Pharmacy (B.Pharm)",
    place: "SVKM's Institute of Pharmacy, DBATU Lonere",
    period: "Currently Pursuing",
    score: "CGPA: 8.50",
  },
  {
    title: "HSC — State Board",
    place: "Pratap Vidya Mandir High School, Chopda",
    period: "2022",
    score: "68.33%",
  },
  {
    title: "SSC — State Board",
    place: "Pratap Vidya Mandir, Chopda",
    period: "2020",
    score: "91.40%",
  },
];

export function Education() {
  return (
    <Section
      id="education"
      eyebrow="Academic Journey"
      title="Education"
      description="A timeline of academic milestones building toward a career in pharmaceutical sciences."
    >
      <div className="relative">
        <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-mint/40 to-transparent" />
        <div className="space-y-10">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className={`relative flex items-start gap-6 sm:gap-0 ${
                i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
              }`}
            >
              <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 grid h-8 w-8 place-items-center rounded-full bg-primary text-primary-foreground shadow-lg ring-4 ring-background">
                <GraduationCap className="h-4 w-4" />
              </div>
              <div className="ml-14 sm:ml-0 sm:w-1/2 sm:px-8">
                <div className="glass rounded-2xl p-6 hover:-translate-y-1 transition-transform">
                  <div className="text-xs text-mint font-semibold mb-2">
                    {item.period}
                  </div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {item.place}
                  </p>
                  <div className="mt-3 inline-flex px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-medium">
                    {item.score}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
