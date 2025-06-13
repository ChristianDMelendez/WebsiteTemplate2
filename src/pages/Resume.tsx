
import { Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import PageLayout from "@/components/PageLayout";

const Resume = () => {
  // This would be replaced with your actual Canva link
  const canvaResumeLink = "https://www.canva.com/design/your-resume-link";

  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-20">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">My Resume</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Download my resume or view it online to see my experience, skills, and qualifications
          </p>
        </div>

        {/* Resume Display Options */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="overflow-hidden">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold mb-4">Interactive Resume</h2>
                <p className="text-muted-foreground mb-6">
                  View my professionally designed resume created with Canva
                </p>
                
                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                  <Button asChild size="lg">
                    <a href={canvaResumeLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Resume Online
                    </a>
                  </Button>
                  <Button variant="outline" size="lg">
                    <Download className="w-4 h-4 mr-2" />
                    Download PDF
                  </Button>
                </div>
              </div>

              {/* Resume Embed Placeholder */}
              <div className="bg-muted/30 rounded-lg p-8 text-center">
                <div className="border-2 border-dashed border-muted-foreground/30 rounded-lg p-12 mb-4">
                  <p className="text-lg font-medium mb-2">Canva Resume Embed</p>
                  <p className="text-muted-foreground text-sm mb-4">
                    Replace this section with your Canva resume embed code
                  </p>
                  <p className="text-xs text-muted-foreground">
                    To embed: Go to your Canva design → Share → Embed → Copy the embed code and replace this placeholder
                  </p>
                </div>
                
                {/* Fallback iframe placeholder */}
                <div className="w-full h-96 bg-background border rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-muted-foreground mb-2">Resume Preview</p>
                    <Button asChild variant="outline">
                      <a href={canvaResumeLink} target="_blank" rel="noopener noreferrer">
                        View Full Resume
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Overview */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <Card className="text-center">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-primary mb-2">3+</h3>
              <p className="text-muted-foreground">Years Experience</p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-primary mb-2">25+</h3>
              <p className="text-muted-foreground">Projects Completed</p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-primary mb-2">15+</h3>
              <p className="text-muted-foreground">Happy Clients</p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-primary mb-2">100%</h3>
              <p className="text-muted-foreground">Client Satisfaction</p>
            </CardContent>
          </Card>
        </div>

        {/* Skills Summary */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-8">Core Competencies</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {[
              "Frontend Development",
              "React & Next.js",
              "TypeScript",
              "UI/UX Design",
              "Responsive Design",
              "SEO Optimization",
              "Database Design",
              "API Integration",
              "Project Management"
            ].map((skill) => (
              <div 
                key={skill}
                className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-muted/30 rounded-lg p-12">
          <h3 className="text-2xl font-bold mb-4">Let's Work Together</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Interested in my background and experience? Let's discuss how I can help bring your project to life.
          </p>
          <Button size="lg">Get In Touch</Button>
        </div>
      </div>
    </PageLayout>
  );
};

export default Resume;
