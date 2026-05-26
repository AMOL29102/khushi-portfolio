import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, Download, X } from "lucide-react";
import { Section } from "./Section";
import { Button } from "@/components/ui/button";

const certs = [
  {
    title: "Expert Talk on Clinical Research",
    issuer: "Pharmaceutical Industry Expert Series",
    date: "2024",
    pdf: new URL("../../assets/certificate1.pdf", import.meta.url).href,
  },
  {
    title: "30hr Live Training Program on Medical Coding",
    issuer: "EXCELR",
    date: "2024",
    pdf: new URL("../../assets/certificate2.pdf", import.meta.url).href,
  },
  {
    title: "Basics of Business Statistics",
    issuer: "TIMESPRO",
    date: "2024",
    pdf: new URL("../../assets/certificate3.pdf", import.meta.url).href,
  },
  {
    title: "Biomedical Equipment Training Program",
    issuer: "Koach",
    date: "2024",
    pdf: new URL("../../assets/certificate4.pdf", import.meta.url).href,
  },
  {
    title: "Workshop on Quality Assurance and Quality Control",
    issuer: "PharmaEdge",
    date: "2024",
    pdf: new URL("../../assets/certificate5.pdf", import.meta.url).href,
  },
];

export function Certifications() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <Section
      id="certifications"
      eyebrow="Credentials"
      title="Certifications & Workshops"
      description="Click any card to preview the certificate."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {certs.map((c, i) => (
          <motion.button
            key={c.title}
            type="button"
            onClick={() => setActive(i)}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            whileHover={{ y: -4 }}
            className="cursor-pointer text-left glass rounded-2xl p-6 hover:shadow-xl transition-all"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-mint/20 text-mint-foreground">
                <Award className="h-5 w-5" />
              </span>
              <span className="text-xs text-muted-foreground">{c.date}</span>
            </div>
            <h3 className="font-semibold leading-snug">{c.title}</h3>
            <p className="text-sm text-muted-foreground mt-2">{c.issuer}</p>
            <div className="mt-4 text-xs text-primary font-medium">View certificate →</div>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[100] grid place-items-center p-4 sm:p-6"
            style={{
              background:
                "radial-gradient(circle at center, color-mix(in oklab, var(--background) 30%, transparent), color-mix(in oklab, var(--background) 70%, transparent))",
              backdropFilter: "blur(24px) saturate(160%)",
              WebkitBackdropFilter: "blur(24px) saturate(160%)",
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ type: "spring", damping: 22 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-[90vw] h-[85vh] max-w-5xl glass-strong rounded-3xl border border-border shadow-2xl overflow-hidden flex flex-col"
            >
              <div className="flex items-center justify-between gap-4 p-5 border-b border-border">
                <div className="min-w-0">
                  <h3 className="font-semibold truncate">{certs[active].title}</h3>
                  <p className="text-xs text-muted-foreground truncate">
                    {certs[active].issuer} · {certs[active].date}
                  </p>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <Button size="sm" className="rounded-full" asChild>
                    <a href={certs[active].pdf} download className="inline-flex items-center gap-2">
                      <Download className="h-4 w-4" />
                      Download PDF
                    </a>
                  </Button>
                  <Button
                    size="icon"
                    variant="ghost"
                    onClick={() => setActive(null)}
                    aria-label="Close"
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>
              </div>
              <iframe
                src={certs[active].pdf}
                title={certs[active].title}
                className="h-full w-full border-0"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}
