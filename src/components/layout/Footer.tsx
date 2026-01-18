import { Leaf, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  const footerSections = [
    {
      title: "Platform",
      links: [
        "Buyer Portal",
        "Manufacturer Portal",
        "Sustainability Hub",
        "Analytics & Insights",
      ],
    },
    {
      title: "Solutions",
      links: [
        "Order Management",
        "Quality Control",
        "Compliance Tools",
        "Payment & Financing",
      ],
    },
    {
      title: "Resources",
      links: [
        "Knowledge Base",
        "Video Tutorials",
        "Community Forum",
        "API Documentation",
      ],
    },
    {
      title: "Company",
      links: [
        "About Us",
        "Careers",
        "Press",
        "Contact",
      ],
    },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                <span className="text-secondary-foreground font-display text-lg font-bold">G</span>
              </div>
              <span className="font-display text-xl font-semibold">
                GarmentLink
              </span>
            </div>
            <p className="text-primary-foreground/70 mb-6 leading-relaxed">
              Connecting the global garment industry with transparency, 
              sustainability, and efficiency.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-primary-foreground/70">
                <MapPin className="w-4 h-4" />
                <span>123 Fashion Avenue, New York, NY 10018</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-primary-foreground/70">
                <Mail className="w-4 h-4" />
                <span>hello@garmentlink.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-primary-foreground/70">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-sm text-primary-foreground/60">
              <Leaf className="w-4 h-4 text-sage" />
              <span>Committed to sustainable fashion practices</span>
            </div>
            <div className="flex items-center gap-6 text-sm text-primary-foreground/60">
              <a href="#" className="hover:text-primary-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-primary-foreground transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-primary-foreground transition-colors">
                Cookie Policy
              </a>
            </div>
            <p className="text-sm text-primary-foreground/60">
              © 2026 GarmentLink. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;