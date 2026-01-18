import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  ShoppingBag, 
  Factory, 
  BarChart3, 
  FileCheck, 
  MessageCircle, 
  Globe,
  ArrowRight,
  CheckCircle2
} from "lucide-react";

const PortalShowcase = () => {
  const buyerFeatures = [
    { icon: Globe, text: "AI-powered factory matching" },
    { icon: BarChart3, text: "Real-time order tracking" },
    { icon: FileCheck, text: "Quality & compliance dashboards" },
    { icon: MessageCircle, text: "Direct communication tools" },
  ];

  const manufacturerFeatures = [
    { icon: ShoppingBag, text: "Order management system" },
    { icon: BarChart3, text: "Production KPI tracking" },
    { icon: FileCheck, text: "Document & certification uploads" },
    { icon: MessageCircle, text: "Client relationship tools" },
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        {/* Buyer Portal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-2 gap-12 items-center mb-24"
        >
          <div>
            <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <ShoppingBag className="w-4 h-4" />
              For Buyers
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
              Streamline Your Sourcing
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Find verified manufacturers, manage orders, track production, and ensure 
              quality compliance—all from one powerful dashboard designed for fashion brands.
            </p>

            <ul className="space-y-4 mb-8">
              {buyerFeatures.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-sage/10 flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 text-sage" />
                  </div>
                  <span className="text-foreground">{feature.text}</span>
                </li>
              ))}
            </ul>

            <Button variant="secondary" size="lg">
              Explore Buyer Portal
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-secondary/5 to-secondary/10 rounded-2xl p-8">
              <div className="bg-card rounded-xl shadow-elegant overflow-hidden">
                <div className="bg-muted/50 px-4 py-3 flex items-center gap-2 border-b border-border">
                  <div className="w-3 h-3 rounded-full bg-destructive/50" />
                  <div className="w-3 h-3 rounded-full bg-gold/50" />
                  <div className="w-3 h-3 rounded-full bg-sage/50" />
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-muted/50 rounded-lg p-4">
                      <p className="text-sm text-muted-foreground mb-1">Active Orders</p>
                      <p className="text-2xl font-display font-bold text-foreground">24</p>
                    </div>
                    <div className="bg-muted/50 rounded-lg p-4">
                      <p className="text-sm text-muted-foreground mb-1">In Production</p>
                      <p className="text-2xl font-display font-bold text-secondary">12</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
                        <div className="w-10 h-10 rounded-lg bg-muted" />
                        <div className="flex-1">
                          <div className="h-3 bg-muted rounded w-3/4 mb-1" />
                          <div className="h-2 bg-muted/50 rounded w-1/2" />
                        </div>
                        <div className="w-16 h-6 bg-sage/20 rounded-full" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Manufacturer Portal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          <div className="order-2 lg:order-1 relative">
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8">
              <div className="bg-card rounded-xl shadow-elegant overflow-hidden">
                <div className="bg-muted/50 px-4 py-3 flex items-center gap-2 border-b border-border">
                  <div className="w-3 h-3 rounded-full bg-destructive/50" />
                  <div className="w-3 h-3 rounded-full bg-gold/50" />
                  <div className="w-3 h-3 rounded-full bg-sage/50" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Factory className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Sunrise Textiles</h4>
                      <p className="text-sm text-muted-foreground">Premium Knitwear • Bangladesh</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center p-3 bg-muted/30 rounded-lg">
                      <p className="text-xl font-display font-bold text-foreground">98%</p>
                      <p className="text-xs text-muted-foreground">Quality</p>
                    </div>
                    <div className="text-center p-3 bg-muted/30 rounded-lg">
                      <p className="text-xl font-display font-bold text-foreground">95%</p>
                      <p className="text-xs text-muted-foreground">On-Time</p>
                    </div>
                    <div className="text-center p-3 bg-muted/30 rounded-lg">
                      <p className="text-xl font-display font-bold text-foreground">4.9</p>
                      <p className="text-xs text-muted-foreground">Rating</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {["GOTS Certified", "OEKO-TEX", "BSCI"].map((cert) => (
                      <span key={cert} className="px-3 py-1 bg-sage/10 text-sage text-xs font-medium rounded-full">
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Factory className="w-4 h-4" />
              For Manufacturers
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
              Showcase Your Capabilities
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Build your factory profile, receive qualified leads, manage production 
              workflows, and build lasting relationships with global fashion brands.
            </p>

            <ul className="space-y-4 mb-8">
              {manufacturerFeatures.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-sage/10 flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 text-sage" />
                  </div>
                  <span className="text-foreground">{feature.text}</span>
                </li>
              ))}
            </ul>

            <Button variant="default" size="lg">
              Explore Manufacturer Portal
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PortalShowcase;