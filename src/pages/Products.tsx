import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, Wrench, Bot } from "lucide-react";
import solarBrushImg from "@/assets/solar-brush.png";
import solarRobotProductImg from "@/assets/solar-robot-product.jpg";

const brushFeatures = [
  "Lightweight and portable design",
  "Suitable for rooftop and ground-mounted panels",
  "Soft bristle technology – no panel damage",
  "Manual and semi-automated options",
  "Easy to maintain and operate",
  "Cost-effective for small to mid-scale plants",
];

const robotFeatures = [
  "Fully automated cleaning cycle",
  "Water-efficient – up to 40% less water usage",
  "AI-powered path planning",
  "Weather-resistant and durable build",
  "Remote monitoring and control",
  "Scalable for utility-scale solar farms",
];

const Products = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-navy section-padding">
        <div className="container mx-auto text-center">
          <p className="text-accent font-medium text-sm tracking-widest uppercase mb-2">Our Products</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Solar Cleaning Solutions
          </h1>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto text-lg">
            From manual brushes to fully automated robots — we have the right solution for every solar installation.
          </p>
        </div>
      </section>

      {/* Solar Cleaning Brush */}
      <section className="section-padding bg-background" id="brush">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-muted rounded-2xl aspect-[4/3] overflow-hidden flex items-center justify-center">
              <img src={solarBrushImg} alt="PYL Robotics solar cleaning brush" className="w-full h-full object-contain" />
            </div>
            <div>
              <p className="text-accent font-medium text-sm tracking-widest uppercase mb-2">Product 01</p>
              <h2 className="font-display text-3xl font-bold text-foreground mb-4">Solar Cleaning Brush</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Our Solar Cleaning Brush is designed for efficient manual and semi-automated cleaning of solar panels. Built with soft-bristle technology, it ensures thorough cleaning without causing any damage to panel surfaces.
              </p>
              <ul className="space-y-3 mb-8">
                {brushFeatures.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="text-accent mt-0.5 flex-shrink-0" size={18} />
                    <span className="text-foreground text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link to="/contact">
                <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
                  Request a Quote <ArrowRight className="ml-2" size={16} />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Solar Cleaning Robot */}
      <section className="section-padding bg-muted" id="robot">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <p className="text-accent font-medium text-sm tracking-widest uppercase mb-2">Product 02</p>
              <h2 className="font-display text-3xl font-bold text-foreground mb-4">Solar Panel Cleaning Robot</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Our flagship cleaning robot uses advanced automation and AI-powered path planning to deliver efficient, water-saving, and consistent cleaning across large-scale solar installations.
              </p>
              <ul className="space-y-3 mb-8">
                {robotFeatures.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="text-accent mt-0.5 flex-shrink-0" size={18} />
                    <span className="text-foreground text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link to="/contact">
                <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
                  Request a Quote <ArrowRight className="ml-2" size={16} />
                </Button>
              </Link>
            </div>
            <div className="order-1 md:order-2 bg-background rounded-2xl aspect-[4/3] overflow-hidden border border-border">
              <img src={solarRobotProductImg} alt="PYL Robotics solar panel cleaning robot" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Products;
