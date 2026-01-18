import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-gradient-to-br from-primary via-primary to-navy-light rounded-3xl p-12 md:p-16 overflow-hidden"
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-sage/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary-foreground mb-6">
              Ready to Transform Your Supply Chain?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-10 leading-relaxed">
              Join thousands of brands and manufacturers already using GarmentLink 
              to build more efficient, transparent, and sustainable partnerships.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl">
                Get Started Free
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                variant="heroOutline" 
                size="xl"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              >
                Schedule a Demo
              </Button>
            </div>

            <p className="mt-8 text-sm text-primary-foreground/60">
              No credit card required • Free 14-day trial • Cancel anytime
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;