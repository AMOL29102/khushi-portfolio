import { useState } from "react";
import { motion } from "framer-motion";
import { Download, Sparkles, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import profile from "@/assets/profile.jpeg";

const resumePdf = new URL("../../assets/resume.pdf", import.meta.url).href;

export function Hero() {
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <>
      <section id="home" className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 px-4 sm:px-6">
        <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex justify-center md:justify-start"
          >
            <div className="relative pulse-ring">
              <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-primary/30 to-mint/30 blur-2xl" />
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative h-56 w-56 sm:h-72 sm:w-72 rounded-full overflow-hidden ring-4 ring-card shadow-2xl transition-transform duration-300 cursor-pointer"
              >
                <img
                  src={profile}
                  alt="Khushi Dilip Jain"
                  loading="eager"
                  className="h-full w-full object-cover"
                />
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
            }}
            className="text-center md:text-left"
          >
            <motion.div
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
              className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs text-muted-foreground mb-5"
            >
              <Sparkles className="h-3.5 w-3.5 text-mint" />
              Open to Pharmaceutical Internships
            </motion.div>
            <motion.h1
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight"
            >
              Hi, I'm <span className="text-gradient">Khushi Dilip Jain</span>
            </motion.h1>
            <motion.p
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
              className="mt-4 text-lg sm:text-xl text-foreground/80"
            >
              Bachelor of Pharmacy (B.Pharm) Student
            </motion.p>
            <motion.p
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
              className="mt-3 text-muted-foreground max-w-xl md:max-w-none"
            >
              Looking for an internship in the Pharmaceutical Industry to apply
              my knowledge and skills.
            </motion.p>
            <motion.div
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
              className="mt-8 flex flex-wrap gap-3 justify-center md:justify-start"
            >
              <Button
                size="lg"
                className="group rounded-full bg-primary hover:bg-primary/90 shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-0.5 transition-all"
                onClick={() => setResumeOpen(true)}
              >
                <Download className="mr-2 h-4 w-4 group-hover:translate-y-0.5 transition-transform" />
                Resume
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full"
                asChild
              >
                <a href="#projects">View Projects</a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {resumeOpen && (
        <div
          className="fixed inset-0 z-[100] grid place-items-center p-4 sm:p-6 bg-black/40 backdrop-blur-sm"
          onClick={() => setResumeOpen(false)}
        >
          <div
            className="relative w-[90vw] h-[88vh] max-w-5xl glass-strong rounded-3xl border border-border shadow-2xl overflow-hidden"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-4 p-5 border-b border-border">
              <div>
                <h3 className="font-semibold">Resume Preview</h3>
                <p className="text-xs text-muted-foreground">Preview and download the resume from inside.</p>
              </div>
              <div className="flex items-center gap-2">
                <Button size="sm" className="rounded-full" asChild>
                  <a href={resumePdf} download="resume.pdf" className="inline-flex items-center gap-2">
                    <Download className="h-4 w-4" /> Download
                  </a>
                </Button>
                <Button
                  size="icon"
                  variant="ghost"
                  onClick={() => setResumeOpen(false)}
                  aria-label="Close resume preview"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
            </div>
            <iframe
              src={resumePdf}
              title="Resume preview"
              className="h-full w-full border-0"
            />
          </div>
        </div>
      )}
    </>
  );
}
