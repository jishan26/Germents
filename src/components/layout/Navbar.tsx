import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navItems = [
    {
      label: "Platform",
      items: ["For Buyers", "For Manufacturers", "Sustainability Hub"],
    },
    {
      label: "Solutions",
      items: ["Order Management", "Quality & Compliance", "Analytics"],
    },
    {
      label: "Resources",
      items: ["Knowledge Base", "Video Tutorials", "Community"],
    },
    { label: "Pricing" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-navy-light flex items-center justify-center">
              <span className="text-primary-foreground font-display text-lg font-bold">G</span>
            </div>
            <span className="font-display text-xl font-semibold text-foreground">
              GarmentLink
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.items && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center gap-1 text-foreground/80 hover:text-foreground transition-colors py-2">
                  {item.label}
                  {item.items && <ChevronDown className="w-4 h-4" />}
                </button>
                
                <AnimatePresence>
                  {item.items && activeDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-56 bg-card rounded-lg shadow-lg border border-border overflow-hidden"
                    >
                      {item.items.map((subItem) => (
                        <a
                          key={subItem}
                          href="#"
                          className="block px-4 py-3 text-sm text-foreground/80 hover:bg-muted hover:text-foreground transition-colors"
                        >
                          {subItem}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Button variant="ghost" className="text-foreground/80">
              Sign In
            </Button>
            <Button variant="default">Get Started</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="py-4 space-y-4">
                {navItems.map((item) => (
                  <div key={item.label}>
                    <button className="flex items-center justify-between w-full py-2 text-foreground/80">
                      {item.label}
                      {item.items && <ChevronDown className="w-4 h-4" />}
                    </button>
                    {item.items && (
                      <div className="pl-4 space-y-2 mt-2">
                        {item.items.map((subItem) => (
                          <a
                            key={subItem}
                            href="#"
                            className="block py-2 text-sm text-muted-foreground"
                          >
                            {subItem}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="pt-4 space-y-3 border-t border-border">
                  <Button variant="outline" className="w-full">
                    Sign In
                  </Button>
                  <Button className="w-full">Get Started</Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;