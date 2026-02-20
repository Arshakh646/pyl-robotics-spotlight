import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  company: z.string().trim().max(100).optional(),
  phone: z.string().trim().max(20).optional(),
  message: z.string().trim().min(1, "Message is required").max(2000)
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contact = () => {
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", company: "", phone: "", message: "" }
  });

  const onSubmit = (data: ContactFormData) => {
    console.log("Contact form submitted:", data);
    toast.success("Thank you! We'll get back to you soon.");
    form.reset();
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-navy section-padding">
        <div className="container mx-auto text-center">
          <p className="text-accent font-medium text-sm tracking-widest uppercase mb-2">Get In Touch</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Contact Us
          </h1>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto text-lg">
            Ready to optimize your solar operations? Reach out and our team will get back to you within 24 hours.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-5 gap-12">
            {/* Form */}
            <div className="md:col-span-3">
              <div className="glass-card p-8">
                <h2 className="font-display text-2xl font-bold text-foreground mb-6">Send Us a Message</h2>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                    <div className="grid md:grid-cols-2 gap-5">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) =>
                        <FormItem>
                            <FormLabel>Name *</FormLabel>
                            <FormControl><Input placeholder="Your name" {...field} /></FormControl>
                            <FormMessage />
                          </FormItem>
                        } />

                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) =>
                        <FormItem>
                            <FormLabel>Email *</FormLabel>
                            <FormControl><Input placeholder="you@example.com" {...field} /></FormControl>
                            <FormMessage />
                          </FormItem>
                        } />

                    </div>
                    <div className="grid md:grid-cols-2 gap-5">
                      <FormField
                        control={form.control}
                        name="company"
                        render={({ field }) =>
                        <FormItem>
                            <FormLabel>Company</FormLabel>
                            <FormControl><Input placeholder="Company name" {...field} /></FormControl>
                            <FormMessage />
                          </FormItem>
                        } />

                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) =>
                        <FormItem>
                            <FormLabel>Phone</FormLabel>
                            <FormControl><Input placeholder="+1 (555) 000-0000" {...field} /></FormControl>
                            <FormMessage />
                          </FormItem>
                        } />

                    </div>
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) =>
                      <FormItem>
                          <FormLabel>Message *</FormLabel>
                          <FormControl><Textarea placeholder="Tell us about your project..." rows={5} {...field} /></FormControl>
                          <FormMessage />
                        </FormItem>
                      } />

                    <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
                      Send Message
                    </Button>
                  </form>
                </Form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="md:col-span-2 space-y-8">
              <div>
                <h3 className="font-display text-xl font-bold text-foreground mb-4">Contact Information</h3>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="text-accent" size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-foreground text-sm">Email</p>
                      <a href="mailto:sales@pylrobotics.com" className="text-accent text-sm hover:underline">
                        sales@pylrobotics.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="text-accent" size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-foreground text-sm">Phone</p>
                      <p className="text-muted-foreground text-sm">+971502894613</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-accent" size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-foreground text-sm">Address</p>
                      <p className="text-muted-foreground text-sm">UAE, Dubai</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="bg-muted rounded-xl aspect-[4/3] flex items-center justify-center">
                <div className="text-center text-muted-foreground/50">
                  <MapPin size={40} className="mx-auto mb-2" />
                  <p className="text-sm">Map Placeholder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
