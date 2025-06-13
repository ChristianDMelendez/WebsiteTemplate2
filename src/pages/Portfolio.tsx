
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import PageLayout from "@/components/PageLayout";

const Portfolio = () => {
  const projects = [
    {
      title: "Student Portfolio Website",
      description: "A modern portfolio website for a computer science graduate showcasing projects and skills.",
      image: "/placeholder.svg",
      tech: ["React", "Tailwind CSS", "TypeScript"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Graduate Resume Site",
      description: "Interactive resume website for a recent business graduate with smooth animations.",
      image: "/placeholder.svg",
      tech: ["Next.js", "Framer Motion", "Vercel"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Creative Portfolio",
      description: "Artistic portfolio website for a graphic design student with image galleries.",
      image: "/placeholder.svg",
      tech: ["React", "CSS Grid", "Responsive Design"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Professional Landing Page",
      description: "Clean, professional landing page for a marketing graduate entering the workforce.",
      image: "/placeholder.svg",
      tech: ["HTML5", "CSS3", "JavaScript"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "E-commerce Portfolio",
      description: "Full-stack e-commerce solution built for a business student's capstone project.",
      image: "/placeholder.svg",
      tech: ["React", "Node.js", "MongoDB"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Blog Platform",
      description: "Personal blog platform for a journalism graduate to showcase writing samples.",
      image: "/placeholder.svg",
      tech: ["Next.js", "MDX", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-20">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">My Portfolio</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of websites I've built for students and graduates, helping them launch their careers with professional digital presence
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-2 pt-2">
                  <Button asChild size="sm" variant="outline" className="flex-1">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                  <Button asChild size="sm" variant="outline" className="flex-1">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Process Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-12">My Development Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Discovery", description: "Understanding your goals and requirements" },
              { step: "2", title: "Design", description: "Creating wireframes and visual concepts" },
              { step: "3", title: "Development", description: "Building your website with modern technologies" },
              { step: "4", title: "Launch", description: "Deploying and supporting your new site" }
            ].map((phase) => (
              <div key={phase.step} className="text-center">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {phase.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{phase.title}</h3>
                <p className="text-muted-foreground">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-muted/30 rounded-lg p-12">
          <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Whether you're a recent graduate or current student, I'm here to help you create a stunning portfolio that showcases your potential.
          </p>
          <Button size="lg">Get Started Today</Button>
        </div>
      </div>
    </PageLayout>
  );
};

export default Portfolio;
