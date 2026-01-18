import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Factory, ShoppingBag, Leaf } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-sage-light/20" />
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-sage/10 text-sage px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Leaf className="w-4 h-4" />
              Sustainable Fashion Supply Chain
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight mb-6">
              Connect. Produce.{" "}
              <span className="text-secondary">Sustain.</span>
            </h1>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl">
              The premier B2B platform connecting fashion brands with verified 
              manufacturers. Streamline your supply chain with transparency, 
              quality control, and sustainable practices.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button variant="hero" size="xl">
                Start as Buyer
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="navyOutline" size="xl">
                Join as Manufacturer
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex items-center gap-8 pt-8 border-t border-border">
              <div>
                <p className="text-3xl font-display font-bold text-foreground">2,500+</p>
                <p className="text-sm text-muted-foreground">Verified Factories</p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div>
                <p className="text-3xl font-display font-bold text-foreground">500+</p>
                <p className="text-sm text-muted-foreground">Global Brands</p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div>
                <p className="text-3xl font-display font-bold text-foreground">45+</p>
                <p className="text-sm text-muted-foreground">Countries</p>
              </div>
            </div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              {/* Main Card */}
              <div className="bg-card rounded-2xl shadow-elegant p-8 border border-border">
                <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-muted to-sage-light/30 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="grid grid-cols-3 gap-4 p-6 w-full">
                      {[1, 2, 3, 4, 5, 6].map((i) => (
                        <div 
                          key={i}
                          className="aspect-square rounded-lg bg-background/80 backdrop-blur shadow-sm flex items-center justify-center"
                        >
                          <div className="w-8 h-8 rounded-full bg-muted" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Cards */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 bg-card rounded-xl shadow-lg p-4 border border-border"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-sage/20 flex items-center justify-center">
                    <Factory className="w-5 h-5 text-sage" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Factory Matched</p>
                    <p className="text-xs text-muted-foreground">Quality Score: 98%</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -bottom-4 -left-4 bg-card rounded-xl shadow-lg p-4 border border-border"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center">
                    <ShoppingBag className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Order Placed</p>
                    <p className="text-xs text-muted-foreground">10,000 units</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;