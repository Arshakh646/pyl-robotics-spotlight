import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Pencil, Cpu, FlaskConical, Rocket, ArrowRight, Factory, Cog, Gauge } from "lucide-react";

const processSteps = [
  { icon: Pencil, title: "Design", description: "Understanding your requirements and creating detailed mechanical and electronic designs." },
  { icon: Cpu, title: "Prototype", description: "Building functional prototypes with rapid iteration and real-world testing." },
  { icon: FlaskConical, title: "Test", description: "Rigorous testing under real-world conditions to ensure reliability and performance." },
  { icon: Rocket, title: "Deploy", description: "Final production, installation, training, and ongoing technical support." },
];

const capabilities = [
  { icon: Cog, title: "Mechanical Engineering", description: "Precision-designed frames, actuators, and drive systems for demanding environments." },
  { icon: Cpu, title: "Electronics & Control", description: "Custom PCB design, sensor integration, and embedded control systems." },
  { icon: Gauge, title: "Software & AI", description: "Intelligent path planning, remote monitoring, and data analytics platforms." },
  { icon: Factory, title: "Manufacturing", description: "In-house prototyping and partnerships with certified manufacturing facilities." },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-navy section-padding">
        <div className="container mx-auto text-center">
          <p className="text-accent font-medium text-sm tracking-widest uppercase mb-2">Our Services</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Custom Robotics Design
          </h1>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto text-lg">
            From concept to deployment — we build custom robotic solutions tailored to your industry needs.
          </p>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-14">
            <p className="text-accent font-medium text-sm tracking-widest uppercase mb-2">How We Work</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Our Process</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {processSteps.map((step, i) => (
              <div key={i} className="text-center relative">
                <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <step.icon className="text-accent" size={30} />
                </div>
                <div className="absolute top-8 left-[60%] right-0 h-0.5 bg-border hidden md:block last:hidden" style={{ display: i === 3 ? "none" : undefined }} />
                <p className="text-accent font-display font-bold text-sm mb-1">Step {i + 1}</p>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="section-padding bg-muted">
        <div className="container mx-auto">
          <div className="text-center mb-14">
            <p className="text-accent font-medium text-sm tracking-widest uppercase mb-2">What We Offer</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Engineering Capabilities</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {capabilities.map((cap, i) => (
              <div key={i} className="bg-card rounded-xl p-6 flex gap-5 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <cap.icon className="text-accent" size={24} />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-1">{cap.title}</h3>
                  <p className="text-muted-foreground text-sm">{cap.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-navy text-center">
        <div className="container mx-auto">
          <h2 className="font-display text-3xl font-bold text-primary-foreground mb-4">Have a Custom Robotics Project?</h2>
          <p className="text-primary-foreground/70 mb-8 max-w-lg mx-auto">
            Tell us about your requirements and our engineering team will get back to you with a tailored solution.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              Start Your Project <ArrowRight className="ml-2" size={18} />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
