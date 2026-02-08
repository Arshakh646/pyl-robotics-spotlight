import Layout from "@/components/Layout";
import { Zap, Shield, Lightbulb, DollarSign, Headphones, Droplets } from "lucide-react";

const differentiators = [
  { icon: Zap, title: "High Efficiency", description: "Our robots clean faster and more thoroughly than manual methods, restoring up to 30% lost energy output." },
  { icon: Shield, title: "Built to Last", description: "Engineered with weather-resistant materials and robust construction for years of reliable operation." },
  { icon: Lightbulb, title: "Innovation-Driven", description: "Continuous R&D ensures our products incorporate the latest advances in robotics and AI technology." },
  { icon: DollarSign, title: "Cost Savings", description: "Reduce labor costs and water usage while improving cleaning frequency and energy yield." },
  { icon: Droplets, title: "Water Efficient", description: "Up to 40% less water consumption compared to traditional cleaning methods." },
  { icon: Headphones, title: "After-Sales Support", description: "Dedicated support team, maintenance packages, and spare parts availability for all our products." },
];

const WhyPYL = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-navy section-padding">
        <div className="container mx-auto text-center">
          <p className="text-accent font-medium text-sm tracking-widest uppercase mb-2">Why Choose Us</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Why PYL Robotics
          </h1>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto text-lg">
            We combine engineering expertise with a deep understanding of the solar industry to deliver solutions that truly make a difference.
          </p>
        </div>
      </section>

      {/* Differentiators */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {differentiators.map((d, i) => (
              <div key={i} className="glass-card p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-6">
                  <d.icon className="text-accent" size={30} />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">{d.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{d.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="section-padding bg-navy">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl font-bold text-primary-foreground">PYL Robotics vs Traditional Cleaning</h2>
          </div>
          <div className="grid grid-cols-3 gap-px bg-border/20 rounded-xl overflow-hidden">
            {/* Header */}
            <div className="bg-navy-light p-4 font-display font-semibold text-primary-foreground/60 text-sm">Feature</div>
            <div className="bg-navy-light p-4 font-display font-semibold text-accent text-sm text-center">PYL Robotics</div>
            <div className="bg-navy-light p-4 font-display font-semibold text-primary-foreground/60 text-sm text-center">Traditional</div>
            {/* Rows */}
            {[
              ["Cleaning Speed", "5x faster", "Baseline"],
              ["Water Usage", "60% less", "High"],
              ["Labor Cost", "Minimal", "High"],
              ["Panel Safety", "Zero damage", "Risk of scratches"],
              ["Consistency", "Automated", "Variable"],
              ["Remote Monitoring", "Yes", "No"],
            ].map(([feature, pyl, trad], i) => (
              <>
                <div key={`f-${i}`} className="bg-navy-dark/50 p-4 text-sm text-primary-foreground/70">{feature}</div>
                <div key={`p-${i}`} className="bg-navy-dark/50 p-4 text-sm text-accent text-center font-medium">{pyl}</div>
                <div key={`t-${i}`} className="bg-navy-dark/50 p-4 text-sm text-primary-foreground/40 text-center">{trad}</div>
              </>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default WhyPYL;
