import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "GarmentLink transformed our sourcing process. We reduced lead times by 40% and found amazing manufacturing partners we never would have discovered otherwise.",
      author: "Sarah Chen",
      role: "Head of Supply Chain",
      company: "ModernWear Co.",
      rating: 5,
    },
    {
      quote: "As a manufacturer, the platform has brought us quality clients who value our sustainability certifications. Our order volume increased by 300% in the first year.",
      author: "Ahmed Rahman",
      role: "Factory Director",
      company: "Sunrise Textiles Ltd.",
      rating: 5,
    },
    {
      quote: "The real-time tracking and quality monitoring tools have given us unprecedented visibility into our production pipeline. Game-changer for our operations.",
      author: "Maria Santos",
      role: "Operations Director",
      company: "EcoStyle Fashion",
      rating: 5,
    },
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how brands and manufacturers are transforming their partnerships with GarmentLink.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card rounded-2xl p-8 border border-border relative"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-muted-foreground/10" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                ))}
              </div>

              <p className="text-foreground leading-relaxed mb-8">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-secondary to-secondary/50 flex items-center justify-center">
                  <span className="text-secondary-foreground font-semibold">
                    {testimonial.author.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;