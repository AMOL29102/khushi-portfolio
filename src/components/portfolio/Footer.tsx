import { Mail, Phone, MapPin, Linkedin, Github, Pill } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-10 border-t border-border">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12 grid md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-2 font-semibold mb-3">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary text-primary-foreground">
              <Pill className="h-5 w-5" />
            </span>
            <span className="text-gradient">Khushi Dilip Jain</span>
          </div>
          <p className="text-sm text-muted-foreground max-w-xs">
            B.Pharm student passionate about pharmaceutical research,
            formulation, and clinical sciences.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-4">Get in touch</h4>
          <ul className="space-y-3 text-sm">
            <li>
              <a
                href="mailto:ph22464207@gmail.com"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4" /> ph22464207@gmail.com
              </a>
            </li>
            <li>
              <a
                href="tel:+919370804776"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="h-4 w-4" /> +91 93708 04776
              </a>
            </li>
            <li className="flex items-center gap-3 text-muted-foreground">
              <MapPin className="h-4 w-4" /> Chopda, Maharashtra (425107)
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-4">Connect</h4>
          <div className="flex gap-3">
            <a
              href="https://www.linkedin.com/in/jain-khushi-profile/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="grid h-10 w-10 place-items-center rounded-xl glass hover:text-primary hover:-translate-y-0.5 transition-all"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="mailto:ph22464207@gmail.com"
              aria-label="Email"
              className="grid h-10 w-10 place-items-center rounded-xl glass hover:text-primary hover:-translate-y-0.5 transition-all"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-5 text-xs text-muted-foreground text-center">
          © {new Date().getFullYear()} Khushi Dilip Jain. Crafted with care.
        </div>
      </div>
    </footer>
  );
}
