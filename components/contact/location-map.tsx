"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Navigation, Car, Bus } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function LocationMap() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Find Us
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            We operate across two beautiful campuses in Parassala, providing the perfect
            environment for learning and growth at every stage.
          </p>
        </div>

        <Tabs defaultValue="public" className="w-full">
          <div className="flex justify-center mb-10">
            <TabsList className="grid w-full max-w-md grid-cols-2 h-12">
              <TabsTrigger value="public" className="text-base">Public School</TabsTrigger>
              <TabsTrigger value="kindergarten" className="text-base">Kindergarten</TabsTrigger>
            </TabsList>
          </div>

          {/* Public School Tab */}
          <TabsContent value="public" className="mt-0 outline-none">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <Card className="overflow-hidden h-full">
                  <CardContent className="p-0 h-full min-h-[400px]">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d697.8303857203452!2d77.1469325909197!3d8.34992286597727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05ab82b842d75f%3A0xc187a020e7d70a50!2sSreeNandanam%20Schools!5e0!3m2!1sen!2sin!4v1779260003260!5m2!1sen!2sin"

                      width="100%"
                      height="100%"
                      style={{ border: 0, minHeight: "400px" }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Public School Location Map"

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
                        <h3 className="font-semibold text-foreground mb-2">Main Campus</h3>
                        <p className="text-sm text-muted-foreground">
                          Sree Nandanam Public School<br />
                          Near KSRTC Depot, Kurumkutty<br />
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
                            5 minutes from Parassala town center. Ample parking available.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Bus className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <div>
                          <p className="text-sm font-medium text-foreground">By Bus</p>
                          <p className="text-xs text-muted-foreground">
                            Regular KSRTC buses from Trivandrum. Stop: Kurumkutty, Walkable distance from bus stop.
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
                    Get Directions to Main Campus
                  </a>
                </Button>
              </div>
            </div>
          </TabsContent>

          {/* Kindergarten Tab */}
          <TabsContent value="kindergarten" className="mt-0 outline-none">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <Card className="overflow-hidden h-full">
                  <CardContent className="p-0 h-full min-h-[400px]">
                    {/* Placeholder coordinates, slightly different from main campus to show it's another location */}
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3947.614694481352!2d77.15104067501098!3d8.34102689169538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05ab05de8a1d75%3A0x6f9b9fcd8c0a6786!2sSree%20Nandanam%20Kindergarten!5e0!3m2!1sen!2sin!4v1779259941013!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{ border: 0, minHeight: "400px" }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Kindergarten Location Map"

                    />
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-full bg-secondary/20 text-secondary-foreground shrink-0">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">Kindergarten Campus</h3>
                        <p className="text-sm text-muted-foreground">
                          Sree Nandanam Kindergarten<br />
                          Near Mahadeva Temple<br />
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
                        <Car className="w-5 h-5 text-secondary-foreground shrink-0 mt-0.5" />
                        <div>
                          <p className="text-sm font-medium text-foreground">By Car</p>
                          <p className="text-xs text-muted-foreground">
                            Located right in the heart of Parassala town. Short drop-off parking available.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Bus className="w-5 h-5 text-secondary-foreground shrink-0 mt-0.5" />
                        <div>
                          <p className="text-sm font-medium text-foreground">By Bus</p>
                          <p className="text-xs text-muted-foreground">
                            Walking distance from Parassala Mahadeva Temple.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Button
                  className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                  size="lg"
                  asChild
                >
                  <a
                    href="https://www.google.com/maps/dir//8.3300,77.1450"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Navigation className="w-4 h-4 mr-2" />
                    Get Directions to Kindergarten
                  </a>
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
