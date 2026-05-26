import { createFileRoute } from "@tanstack/react-router";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { Education } from "@/components/portfolio/Education";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Certifications } from "@/components/portfolio/Certifications";
import { Extracurriculars } from "@/components/portfolio/Extracurriculars";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Khushi Dilip Jain — B.Pharm Student Portfolio" },
      {
        name: "description",
        content:
          "Portfolio of Khushi Dilip Jain — Bachelor of Pharmacy student seeking pharmaceutical industry internships. Projects, skills, certifications and achievements.",
      },
      {
        property: "og:title",
        content: "Khushi Dilip Jain — B.Pharm Portfolio",
      },
      {
        property: "og:description",
        content:
          "Pharmaceutical sciences student portfolio: education, skills, research projects and certifications.",
      },
    ],
  }),
});

function Index() {
  return (
    <ThemeProvider>
      <div className="min-h-screen">
        <Navbar />
        <main>
          <Hero />
          <Education />
          <Skills />
          <Projects />
          <Certifications />
          <Extracurriculars />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
