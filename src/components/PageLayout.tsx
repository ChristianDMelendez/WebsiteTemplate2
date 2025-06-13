
import Navigation from "./Navigation";
import { ReactNode } from "react";

interface PageLayoutProps {
  children: ReactNode;
  className?: string;
}

const PageLayout = ({ children, className = "" }: PageLayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className={`pt-16 ${className}`}>
        {children}
      </main>
    </div>
  );
};

export default PageLayout;
