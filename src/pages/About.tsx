import Layout from "@/components/Layout";
import { Target, Eye, Lightbulb, Leaf, Award, Cpu } from "lucide-react";

const values = [
  { icon: Lightbulb, title: "Innovation", description: "Pushing the boundaries of robotics and automation technology." },
  { icon: Leaf, title: "Sustainability", description: "Building solutions that support a cleaner, greener future." },
  { icon: Award, title: "Engineering Excellence", description: "Precision-engineered products that deliver reliable performance." },
  { icon: Cpu, title: "Smart Automation", description: "Leveraging AI and robotics for intelligent cleaning systems." },
];

const milestones = [
  
  { year: "2020", event: "First Solar Cleaning Brush prototype developed and tested" },
  { year: "2021", event: "Solar Cleaning Robot v1 launched for utility-scale plants" },
  
  { year: "2023", event: "Reached 200+ clients and 500K panels cleaned milestone" },
  { year: "2024", event: "Next-gen water-efficient cleaning robot released" },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-navy section-padding">
        <div className="container mx-auto text-center">
          <p className="text-accent font-medium text-sm tracking-widest uppercase mb-2">About Us</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Engineering the Future of Solar Maintenance
          </h1>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto text-lg">
            PYL Robotics is dedicated to developing innovative, efficient, and sustainable cleaning solutions for the solar energy industry.
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding bg-background">
        <div className="container mx-auto grid md:grid-cols-2 gap-12">
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-4">
              <Eye className="text-accent" size={28} />
              <h2 className="font-display text-2xl font-bold text-foreground">Our Vision</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              To become the global leader in robotic solutions for solar energy maintenance, enabling cleaner and more efficient renewable energy production worldwide.
            </p>
          </div>
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-4">
              <Target className="text-accent" size={28} />
              <h2 className="font-display text-2xl font-bold text-foreground">Our Mission</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              To design and deliver cutting-edge robotic cleaning systems that maximize solar panel efficiency, reduce water usage, and lower operational costs for our clients.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-muted">
        <div className="container mx-auto">
          <div className="text-center mb-14">
            <p className="text-accent font-medium text-sm tracking-widest uppercase mb-2">What Drives Us</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Core Values</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <div key={i} className="bg-card rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <v.icon className="text-accent" size={26} />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">{v.title}</h3>
                <p className="text-muted-foreground text-sm">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-14">
            <p className="text-accent font-medium text-sm tracking-widest uppercase mb-2">Our Journey</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Milestones</h2>
          </div>
          <div className="space-y-0">
            {milestones.map((m, i) => (
              <div key={i} className="flex gap-6 group">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-accent border-4 border-accent/20 flex-shrink-0" />
                  {i < milestones.length - 1 && <div className="w-0.5 h-full bg-border" />}
                </div>
                <div className="pb-10">
                  <p className="font-display font-bold text-accent text-sm">{m.year}</p>
                  <p className="text-foreground">{m.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
