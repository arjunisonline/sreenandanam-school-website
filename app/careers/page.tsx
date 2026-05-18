import { PageHero } from "@/components/shared/page-hero";
import { Mail, Briefcase, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <PageHero
          breadcrumb="Home / Careers"
          title="Join Our Team"
          description="Build your career with us. We are always looking for passionate educators and staff to join our vibrant learning community."
          image="/images/cultural.jpg"
        />
        
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                Current Openings
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Explore the available opportunities to join Sree Nandanam Public School.
              </p>
            </div>

            <div className="bg-card border border-border rounded-2xl p-8 md:p-12 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Briefcase className="w-10 h-10 text-primary" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                No Current Openings
              </h3>
              <p className="text-muted-foreground mb-8 max-w-lg mx-auto leading-relaxed">
                We currently don't have any specific openings. However, we are always eager to connect with talented and passionate educators. 
                Please feel free to send us your resume, and our HR team will reach out to you when a suitable position becomes available.
              </p>
              <Button size="lg" className="rounded-full" asChild>
                <a href="mailto:info@sreenandanam.edu">
                  <Mail className="w-5 h-5 mr-2" />
                  Submit Your Resume
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
