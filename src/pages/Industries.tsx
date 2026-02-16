import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Home, Sun, Factory, ArrowRight } from "lucide-react";
import rooftopSolarImg from "@/assets/rooftop-solar.jpg";
import utilitySolarImg from "@/assets/utility-solar.jpg";

const industries = [
  {
    image: rooftopSolarImg,
    icon: Home,
    title: "Rooftop Solar",
    description: "Residential and commercial rooftop installations require regular cleaning for optimal performance. Our cleaning brush and compact robot are designed for easy operation on rooftops of all sizes.",
    useCases: [
      "Residential solar panel maintenance",
      "Commercial building rooftop installations",
      "Housing society solar projects",
    ],
  },
  {
    image: utilitySolarImg,
    icon: Sun,
    title: "Utility-Scale Solar Farms",
    description: "Large solar farms need automated, scalable cleaning solutions. Our cleaning robot covers vast arrays efficiently, reducing downtime and maximizing energy output across thousands of panels.",
    useCases: [
      "Ground-mounted solar farms",
      "Desert and arid region installations",
      "Government and institutional solar parks",
    ],
  },
  {
    icon: Factory,
    title: "Industrial Facilities",
    description: "Factories, warehouses, and industrial complexes with solar installations benefit from our durable, heavy-duty cleaning systems designed for harsh industrial environments.",
    useCases: [
      "Factory rooftop solar systems",
      "Warehouse and logistics center panels",
      "Industrial park solar installations",
    ],
  },
];

const Industries = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-navy section-padding">
        <div className="container mx-auto text-center">
          <p className="text-accent font-medium text-sm tracking-widest uppercase mb-2">Industries</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Industries & Applications
          </h1>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto text-lg">
            Our solar cleaning solutions serve a wide range of industries and installation types.
          </p>
        </div>
      </section>

      {/* Industries */}
      <section className="section-padding bg-background">
        <div className="container mx-auto space-y-16">
          {industries.map((ind, i) => (
            <div key={i} className={`grid md:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
              <div className={i % 2 === 1 ? "md:order-2" : ""}>
                <div className="bg-muted rounded-2xl aspect-video flex items-center justify-center overflow-hidden">
                  {ind.image ? (
                    <img src={ind.image} alt={ind.title} className="w-full h-full object-contain" />
                  ) : (
                    <div className="text-center text-muted-foreground/50">
                      <ind.icon size={64} className="mx-auto mb-4" />
                      <p className="text-sm">Image Placeholder</p>
                    </div>
                  )}
                </div>
              </div>
              <div className={i % 2 === 1 ? "md:order-1" : ""}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                    <ind.icon className="text-accent" size={24} />
                  </div>
                  <h2 className="font-display text-2xl font-bold text-foreground">{ind.title}</h2>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">{ind.description}</p>
                <h4 className="font-display font-semibold text-foreground text-sm mb-3">Use Cases:</h4>
                <ul className="space-y-2 mb-6">
                  {ind.useCases.map((uc, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                      {uc}
                    </li>
                  ))}
                </ul>
                <Link to="/contact">
                  <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                    Learn More <ArrowRight className="ml-2" size={16} />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Industries;
