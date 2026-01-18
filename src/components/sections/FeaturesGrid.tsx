import { motion } from "framer-motion";
import { 
  ShieldCheck, 
  Zap, 
  LineChart, 
  Globe, 
  Lock, 
  Clock 
} from "lucide-react";

const FeaturesGrid = () => {
  const features = [
    {
      icon: ShieldCheck,
      title: "Verified Manufacturers",
      description: "Every factory undergoes rigorous verification including audits, certifications, and capability assessments.",
    },
    {
      icon: Zap,
      title: "AI-Powered Matching",
      description: "Our intelligent algorithm matches your requirements with the perfect manufacturing partners.",
    },
    {
      icon: LineChart,
      title: "Real-Time Analytics",
      description: "Track KPIs, monitor production metrics, and gain insights to optimize your supply chain.",
    },
    {
      icon: Globe,
      title: "Global Network",
      description: "Access manufacturers across 45+ countries with diverse specialties and capabilities.",
    },
    {
      icon: Lock,
      title: "Secure Transactions",
      description: "Protected payments, secure document sharing, and encrypted communications.",
    },
    {
      icon: Clock,
      title: "Time Savings",
      description: "Reduce sourcing time by 60% with streamlined workflows and direct connections.",
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
            Why Leading Brands Choose Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Purpose-built features that transform how fashion brands and manufacturers work together.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-card rounded-2xl p-8 border border-border h-full hover:border-secondary/30 transition-all hover:shadow-elegant">
                <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-colors">
                  <feature.icon className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;