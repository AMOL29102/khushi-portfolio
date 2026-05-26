import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
}: {
  id: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="py-20 sm:py-28 px-4 sm:px-6 scroll-mt-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-12"
        >
          {eyebrow && (
            <div className="text-xs uppercase tracking-[0.2em] text-mint font-semibold mb-3">
              {eyebrow}
            </div>
          )}
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            {title}
          </h2>
          {description && (
            <p className="mt-3 text-muted-foreground">{description}</p>
          )}
        </motion.div>
        {children}
      </div>
    </section>
  );
}
