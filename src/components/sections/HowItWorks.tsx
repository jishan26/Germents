import { motion } from "framer-motion";
import { Search, MessageSquare, Package, Truck } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Search,
      step: "01",
      title: "Find & Match",
      description: "Search through verified manufacturers filtered by specialty, certifications, capacity, and location. Our AI recommends the best matches.",
    },
    {
      icon: MessageSquare,
      step: "02",
      title: "Connect & Negotiate",
      description: "Communicate directly, share tech packs, request quotes, and negotiate terms through our secure messaging platform.",
    },
    {
      icon: Package,
      step: "03",
      title: "Produce & Monitor",
      description: "Track production in real-time with quality checkpoints, inspection reports, and live status updates from the factory floor.",
    },
    {
      icon: Truck,
      step: "04",
      title: "Ship & Deliver",
      description: "Manage logistics, track shipments globally, and receive comprehensive delivery documentation all in one place.",
    },
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            How GarmentLink Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From discovery to delivery, we streamline every step of your garment sourcing journey.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-border to-transparent z-0" />
              )}

              <div className="bg-card rounded-2xl p-8 border border-border shadow-sm hover:shadow-elegant transition-all duration-300 relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                    <step.icon className="w-7 h-7 text-secondary" />
                  </div>
                  <span className="text-5xl font-display font-bold text-muted-foreground/20">
                    {step.step}
                  </span>
                </div>
                <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;