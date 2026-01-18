import { motion } from "framer-motion";
import { Leaf, Recycle, Award, TrendingDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const SustainabilitySection = () => {
  const metrics = [
    {
      icon: Leaf,
      value: "30%",
      label: "Carbon Reduction",
      description: "Average supply chain emissions reduction for platform users",
    },
    {
      icon: Recycle,
      value: "85%",
      label: "Certified Partners",
      description: "Manufacturers with sustainability certifications",
    },
    {
      icon: Award,
      value: "200+",
      label: "Certifications",
      description: "Tracked including GOTS, OEKO-TEX, and more",
    },
    {
      icon: TrendingDown,
      value: "40%",
      label: "Water Savings",
      description: "Through sustainable manufacturing practices",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-sage/5 via-background to-sage/10 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-sage/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-sage/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-sage/20 text-sage px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Leaf className="w-4 h-4" />
            Sustainability Hub
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Building a Sustainable Future
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're committed to transforming the garment industry through transparency, 
            ethical practices, and environmental responsibility.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card rounded-2xl p-6 border border-sage/20 hover:border-sage/40 transition-all shadow-sm hover:shadow-elegant"
            >
              <div className="w-12 h-12 rounded-xl bg-sage/10 flex items-center justify-center mb-4">
                <metric.icon className="w-6 h-6 text-sage" />
              </div>
              <p className="text-4xl font-display font-bold text-sage mb-2">
                {metric.value}
              </p>
              <p className="font-semibold text-foreground mb-2">{metric.label}</p>
              <p className="text-sm text-muted-foreground">{metric.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Button variant="accent" size="lg">
            Explore Sustainability Hub
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default SustainabilitySection;