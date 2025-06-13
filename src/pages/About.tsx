
import { Download, MapPin, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import PageLayout from "@/components/PageLayout";

const About = () => {
  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-20">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Me</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate web developer dedicated to helping students and graduates establish their digital presence
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Story Section */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">My Story</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                As a web developer and programmer, I understand the challenges that high school and college graduates face when trying to establish their professional presence online.
              </p>
              <p>
                My journey began with a simple belief: everyone deserves a professional, beautiful website that represents their unique story and potential.
              </p>
              <p>
                That's why I'm building a specialized website creation business focused on helping students and recent graduates showcase their skills, projects, and achievements in a way that stands out to employers and clients.
              </p>
            </div>
            
            {/* Personal Images Placeholder */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="relative">
                <img 
                  src="/placeholder.svg" 
                  alt="Replace with mystory1.jpg - Upload your personal story image here"
                  className="w-full h-48 object-cover rounded-lg border-2 border-dashed border-muted-foreground/30"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-lg">
                  <p className="text-white text-sm text-center px-2">Upload mystory1.jpg here</p>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="/placeholder.svg" 
                  alt="Replace with mystory2.jpg - Upload your second personal story image here"
                  className="w-full h-48 object-cover rounded-lg border-2 border-dashed border-muted-foreground/30"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-lg">
                  <p className="text-white text-sm text-center px-2">Upload mystory2.jpg here</p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats & Info */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  Based in Your City
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Available for local and remote projects worldwide
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Experience
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  X+ years of web development experience
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Empowering the next generation with professional digital presence through beautiful, functional websites.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Technical Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "React & Next.js",
              "TypeScript & JavaScript",
              "HTML5 & CSS3",
              "Tailwind CSS",
              "Node.js & Express",
              "Database Design",
              "Responsive Design",
              "UI/UX Design",
              "SEO Optimization"
            ].map((skill) => (
              <Card key={skill} className="text-center">
                <CardContent className="p-6">
                  <p className="font-medium">{skill}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Work Together?</h3>
          <p className="text-muted-foreground mb-6">
            Let's discuss your project and how I can help bring your vision to life.
          </p>
          <Button size="lg" className="mr-4">
            <Download className="w-4 h-4 mr-2" />
            Download Resume
          </Button>
        </div>
      </div>
    </PageLayout>
  );
};

export default About;
