import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Zap, Bot, Wrench, Sun, Droplets, Users, ArrowRight, Shield, TrendingUp } from "lucide-react";

const stats = [
  { value: "500K+", label: "Panels Cleaned", icon: Sun },
  { value: "40%", label: "Water Saved", icon: Droplets },
  { value: "200+", label: "Clients Served", icon: Users },
  { value: "99.5%", label: "Uptime", icon: TrendingUp },
];

const products = [
  {
    title: "Solar Cleaning Brush",
    description: "Manual and semi-automated cleaning tools designed for rooftop and utility-scale solar plants.",
    icon: Wrench,
  },
  {
    title: "Solar Cleaning Robot",
    description: "Advanced robotic systems for automated, water-efficient, and safe solar panel cleaning.",
    icon: Bot,
  },
  {
    title: "Custom Robotics Design",
    description: "End-to-end custom robotic solutions — from design and prototyping to testing and deployment.",
    icon: Zap,
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative bg-navy overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/30 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-energy/20 rounded-full blur-[100px]" />
        </div>
        <div className="container mx-auto px-4 py-28 md:py-40 relative z-10">
          <div className="max-w-3xl">
            <p className="text-accent font-medium text-sm tracking-widest uppercase mb-4 animate-fade-in-up">
              Solar Cleaning Robotics
            </p>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              Powering Clean Energy with{" "}
              <span className="text-gradient">Smart Robotics</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/70 max-w-2xl mb-10 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              PYL Robotics delivers innovative, efficient, and cost-effective solar panel cleaning solutions and custom robotics for the renewable energy industry.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              <Link to="/contact">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
                  Get a Quote <ArrowRight className="ml-2" size={18} />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                  Contact Sales
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-navy-light border-y border-border/10">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <stat.icon className="mx-auto mb-2 text-accent" size={28} />
                <p className="font-display text-3xl font-bold text-primary-foreground">{stat.value}</p>
                <p className="text-sm text-primary-foreground/60">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-14">
            <p className="text-accent font-medium text-sm tracking-widest uppercase mb-2">Our Solutions</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">What We Build</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product, i) => (
              <Card key={i} className="group hover:shadow-xl transition-all duration-300 border-border/50 hover:border-accent/30">
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                    <product.icon className="text-accent" size={28} />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">{product.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{product.description}</p>
                  <Link to="/products" className="text-accent text-sm font-medium hover:underline inline-flex items-center gap-1">
                    Learn more <ArrowRight size={14} />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Teaser */}
      <section className="section-padding bg-navy">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-accent font-medium text-sm tracking-widest uppercase mb-2">Why Choose Us</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
                Engineered for Performance & Reliability
              </h2>
              <p className="text-primary-foreground/70 mb-8 leading-relaxed">
                Our solutions are built by engineers who understand the demands of solar energy operations. From extreme weather durability to water-efficient cleaning, every detail is optimized.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Shield, label: "Durable & Reliable" },
                  { icon: Droplets, label: "Water Efficient" },
                  { icon: Zap, label: "High Performance" },
                  { icon: TrendingUp, label: "Cost Savings" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <item.icon className="text-accent" size={20} />
                    <span className="text-primary-foreground/80 text-sm font-medium">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-navy-light rounded-2xl aspect-video flex items-center justify-center border border-border/10">
              <div className="text-center text-primary-foreground/30">
                <Bot size={64} className="mx-auto mb-4" />
                <p className="text-sm">Product Image Placeholder</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-accent">
        <div className="container mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-accent-foreground mb-4">
            Ready to Optimize Your Solar Operations?
          </h2>
          <p className="text-accent-foreground/80 mb-8 max-w-xl mx-auto">
            Get in touch with our team to discover how PYL Robotics can boost your energy output and reduce maintenance costs.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-navy text-primary-foreground hover:bg-navy-light font-semibold">
              Contact Us Today <ArrowRight className="ml-2" size={18} />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
