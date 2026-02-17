import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
const Footer = () => {
  return <footer className="bg-navy text-primary-foreground/80">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <h3 className="font-display text-xl font-bold text-primary-foreground mb-4">
              PYL <span className="text-accent">Robotics</span>
            </h3>
            <p className="text-sm leading-relaxed text-primary-foreground/60">
              Innovative solar panel cleaning solutions and custom robotics design for the renewable energy sector.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-primary-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {[{
              label: "About Us",
              to: "/about"
            }, {
              label: "Products",
              to: "/products"
            }, {
              label: "Services",
              to: "/services"
            }, {
              label: "Why PYL",
              to: "/why-pyl"
            }, {
              label: "Industries",
              to: "/industries"
            }].map((link) => <li key={link.to}>
                  <Link to={link.to} className="hover:text-accent transition-colors">
                    {link.label}
                  </Link>
                </li>)}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-display font-semibold text-primary-foreground mb-4">Products</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/products" className="hover:text-accent transition-colors">
                  Solar Cleaning Brush
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-accent transition-colors">
                  Solar Cleaning Robot
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-accent transition-colors">
                  Custom Robotics
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-primary-foreground mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-accent" />
                <a href="mailto:sales@pylrobotics.com" className="hover:text-accent transition-colors">
                  sales@pylrobotics.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-accent" />
                <span>+971502894613
              </span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-accent mt-0.5" />
                <span>Dubai 
 & Calicut
              </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center text-sm text-primary-foreground/40">
          © {new Date().getFullYear()} PYL Robotics. All rights reserved.
        </div>
      </div>
    </footer>;};export default Footer;