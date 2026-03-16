"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Navigation, Car, Bus } from "lucide-react"

export function LocationMap() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Find Us
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            Located in the serene surroundings of Parassala, our campus provides the perfect 
            environment for learning and growth.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="overflow-hidden h-full">
              <CardContent className="p-0 h-full min-h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3948.4023477261156!2d77.1433!3d8.3317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOMKwMTknNTQuMSJOIDc3wrAwOCczNS45IkU!5e0!3m2!1sen!2sin!4v1699000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "400px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="School Location Map"
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                />
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10 text-primary shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Address</h3>
                    <p className="text-sm text-muted-foreground">
                      Sree Nandanam Public School<br />
                      Near Parassala Junction<br />
                      Parassala, Thiruvananthapuram<br />
                      Kerala - 695502
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-4">How to Reach Us</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Car className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-foreground">By Car</p>
                      <p className="text-xs text-muted-foreground">
                        15 minutes from Parassala town center. Ample parking available.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Bus className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-foreground">By Bus</p>
                      <p className="text-xs text-muted-foreground">
                        Regular KSRTC buses from Trivandrum. Stop: Parassala Junction.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Button 
              className="w-full" 
              size="lg"
              asChild
            >
              <a 
                href="https://www.google.com/maps/dir//8.3317,77.1433" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Navigation className="w-4 h-4 mr-2" />
                Get Directions
              </a>
            </Button>
            
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-2">Landmark</h3>
                <p className="text-sm text-muted-foreground">
                  Near the Parassala Panchayat Office, opposite to the Community Health Center. 
                  Look for the green and white school building.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
