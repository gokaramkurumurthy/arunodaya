import { Leaf, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Leaf className="h-8 w-8 text-secondary" />
              <h3 className="text-xl font-bold">Arunodaya Enterprises</h3>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Building trust through sustainable ventures in agriculture and land development, creating value for
              communities and investors.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <a href="#home" className="hover:text-secondary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-secondary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-secondary transition-colors">
                  Our Projects
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-secondary transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-secondary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Our Projects */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Our Projects</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <a href="#projects" className="hover:text-secondary transition-colors">
                  Red Sandalwood Farm Lands
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-secondary transition-colors">
                  Raigiri Venture
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-secondary transition-colors">
                  Sustainable Agriculture
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-secondary transition-colors">
                  Land Development
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Info</h4>
            <div className="space-y-3 text-primary-foreground/80">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-1 text-secondary flex-shrink-0" />
                <span className="text-sm">Vinjamur, Andhra Pradesh, India</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-secondary" />
                <span className="text-sm">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-secondary" />
                <span className="text-sm">info@arunodayaenterprises.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © 2024 Arunodaya Enterprises. All rights reserved. | Building Trust Through Sustainable Ventures
          </p>
        </div>
      </div>
    </footer>
  )
}
