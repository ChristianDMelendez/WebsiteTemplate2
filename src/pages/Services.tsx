
import { Check, Clock, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import PageLayout from "@/components/PageLayout";

const Services = () => {
  const services = [
    {
      title: "Student Portfolio Package",
      price: "$299",
      description: "Perfect for students showcasing their academic projects and skills",
      features: [
        "5-page custom website",
        "Responsive design",
        "Project showcase section",
        "Contact form",
        "SEO optimization",
        "1 month of support"
      ],
      popular: false
    },
    {
      title: "Graduate Professional Package",
      price: "$499",
      description: "Ideal for recent graduates entering the job market",
      features: [
        "8-page custom website",
        "Professional design",
        "Interactive resume section",
        "Blog functionality",
        "Social media integration",
        "Google Analytics setup",
        "3 months of support",
        "Domain & hosting setup"
      ],
      popular: true
    },
    {
      title: "Business Starter Package",
      price: "$799",
      description: "For graduates starting their own business or freelance career",
      features: [
        "10+ page custom website",
        "E-commerce capability",
        "Client portal",
        "Booking system",
        "Payment integration",
        "Custom branding",
        "6 months of support",
        "Marketing consultation"
      ],
      popular: false
    }
  ];

  const additionalServices = [
    {
      icon: Clock,
      title: "Rush Delivery",
      description: "Need your website fast? 48-72 hour delivery available",
      price: "+$200"
    },
    {
      icon: Users,
      title: "Team Portfolios",
      description: "Showcase your group projects with collaborative team pages",
      price: "From $150"
    },
    {
      icon: Zap,
      title: "Website Redesign",
      description: "Already have a site? Let's give it a modern makeover",
      price: "From $300"
    }
  ];

  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-20">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Services & Pricing</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Affordable, professional website packages designed specifically for students and graduates
          </p>
        </div>

        {/* Main Packages */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`relative ${service.popular ? 'border-primary shadow-xl scale-105' : ''} hover:shadow-lg transition-all duration-300`}
            >
              {service.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
              )}
              
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">{service.title}</CardTitle>
                <div className="text-4xl font-bold text-primary mb-2">{service.price}</div>
                <p className="text-muted-foreground">{service.description}</p>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className="w-full" 
                  variant={service.popular ? "default" : "outline"}
                  size="lg"
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Services */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Additional Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <p className="text-lg font-bold text-primary">{service.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Why Choose Me */}
        <div className="bg-muted/30 rounded-lg p-12 mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose My Services?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Student-Focused", description: "I understand your unique needs and budget constraints" },
              { title: "Modern Design", description: "Up-to-date designs that impress employers and clients" },
              { title: "Fast Delivery", description: "Quick turnaround times to meet your deadlines" },
              { title: "Ongoing Support", description: "I'm here to help even after your site launches" }
            ].map((benefit, index) => (
              <div key={index} className="text-center">
                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Let's discuss your project and find the perfect package for your needs and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">Schedule Consultation</Button>
            <Button variant="outline" size="lg">View Portfolio</Button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Services;
