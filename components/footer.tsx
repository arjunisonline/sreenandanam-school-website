import Link from "next/link"
import { GraduationCap, MapPin, Phone, Mail, Clock } from "lucide-react"

const quickLinks = [
  { href: "/about", label: "About Us" },
  { href: "/academics", label: "Academics" },
  { href: "/facilities", label: "Facilities" },
  { href: "/faculty", label: "Faculty" },
  { href: "/admissions", label: "Admissions" },
  { href: "/gallery", label: "Gallery" },
  { href: "/news", label: "News" },
  { href: "/contact", label: "Contact" },
]

const academics = [
  { href: "/academics#pre-primary", label: "Pre-Primary" },
  { href: "/academics#primary", label: "Primary Education" },
  { href: "/academics#upper-primary", label: "Upper Primary" },
  { href: "/academics#methodology", label: "Teaching Methodology" },
  { href: "/academics#computer-lab", label: "Computer Lab" },
]

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* School Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <p className="font-serif text-xl font-semibold leading-tight">
                  Sree Nandanam
                </p>
                <p className="text-sm text-background/70">Public School</p>
              </div>
            </Link>
            <p className="text-background/80 text-sm leading-relaxed mb-4">
              Nurturing young minds since 2003. We provide quality English medium education 
              for students from Class 1 to Class 7 in a supportive learning environment.
            </p>
            <p className="text-xs text-background/60">
              UDISE Code: 32140900331
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Quick Links</h3>
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

          {/* Academics */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Academics</h3>
            <ul className="space-y-2">
              {academics.map((link) => (
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
            <h3 className="font-serif text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-1 text-primary shrink-0" />
                <span className="text-sm text-background/80">
                  Parassala, Thiruvananthapuram,<br />
                  Kerala, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <span className="text-sm text-background/80">+91 XXXXX XXXXX</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <span className="text-sm text-background/80">info@sreenandanam.edu</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-primary shrink-0" />
                <span className="text-sm text-background/80">Mon - Sat: 8:00 AM - 4:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-background/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-background/60">
              {new Date().getFullYear()} Sree Nandanam Public School. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="text-sm text-background/60 hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-background/60 hover:text-primary transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
