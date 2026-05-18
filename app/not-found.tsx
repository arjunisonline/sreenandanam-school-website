import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-secondary/30 via-background to-muted/30 py-24">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-xl mx-auto space-y-6">
            <h1 className="text-8xl md:text-9xl font-bold text-primary opacity-20">
              404
            </h1>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
              Page Not Found
            </h2>
            <p className="text-lg text-muted-foreground">
              Oops! The page you are looking for might have been removed, had its
              name changed, or is temporarily unavailable.
            </p>
            <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="rounded-full">
                <Link href="/">Return to Home</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full">
                <Link href="/contact">Contact Support</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
