import Link from "next/link";
import { GraduationCap, MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube } from "lucide-react";

const quickLinks = [
  { href: "/about", label: "About Us" },
  { href: "/academics", label: "Academics" },
  { href: "/facilities", label: "Facilities" },
  { href: "/careers", label: "Careers" },
  { href: "/admissions", label: "Admissions" },
  { href: "/gallery", label: "Gallery" },
  { href: "/news", label: "News" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* School Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <img src="/images/logo.png" alt="Logo" width={150} height={150} />
            </Link>
            <p className="text-background/80 text-sm leading-relaxed mb-4">
              Nurturing young minds since 2008. We provide quality English
              medium education for students from Class 1 to Class 7 in a
              supportive learning environment.
            </p>
            <p className="text-xs text-background/60 mb-6">
              UDISE Code: 32140900331
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-background/10 hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-4.5 h-4.5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-background/10 hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-4.5 h-4.5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-background/10 hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all duration-300"
                aria-label="YouTube"
              >
                <Youtube className="w-4.5 h-4.5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-background/80 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-1 text-primary shrink-0" />
                <span className="text-sm text-background/80">
                  Parassala, Thiruvananthapuram,
                  <br />
                  Kerala, India
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-1 text-primary shrink-0" />
                <div className="flex flex-col text-sm text-background/80">
                  <a href="tel:+919745433356" className="hover:text-primary transition-colors">
                    +91 97454 33356
                  </a>
                  <a href="tel:+919745433357" className="hover:text-primary transition-colors">
                    +91 97454 33357
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <a
                  href="mailto:sreenandadnamschools@gmail.com"
                  className="text-sm text-background/80 hover:text-primary transition-colors truncate"
                >
                  sreenandadnamschools@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-primary shrink-0" />
                <span className="text-sm text-background/80">
                  Mon - Sat: 8:00 AM - 4:00 PM
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter / Updates */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">
              Stay Updated
            </h3>
            <p className="text-background/80 text-sm leading-relaxed mb-4">
              Subscribe to receive the latest updates, calendar announcements, and event notifications.
            </p>
            <div className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 bg-background/10 border border-background/20 rounded-md text-sm text-white placeholder:text-background/40 focus:outline-none focus:border-primary transition-colors"
              />
              <button
                type="button"
                className="px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm font-medium hover:bg-primary/95 transition-colors"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-background/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-background/60">
              {new Date().getFullYear()} Sree Nandanam Public School. All rights
              reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="/privacy"
                className="text-sm text-background/60 hover:text-primary transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-background/60 hover:text-primary transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
