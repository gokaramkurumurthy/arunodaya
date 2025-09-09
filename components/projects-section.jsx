import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Calendar, FileText, TrendingUp } from "lucide-react"

export default function ProjectsSection() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Our Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Discover our flagship sustainable ventures that are transforming agriculture and creating lasting value for
            communities and investors.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Red Sandalwood Farm Lands */}
          <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="relative h-64">
              <img
                src="/placeholder-3zate.png"
                alt="Red Sandalwood Farm Lands - Vinjamur"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-2xl font-bold">Red Sandalwood Farm Lands</h3>
                <p className="text-white/90 flex items-center mt-1">
                  <MapPin className="h-4 w-4 mr-1" />
                  Vinjamur, Andhra Pradesh
                </p>
              </div>
            </div>
            <CardContent className="p-6">
              <div className="space-y-4">
                <p className="text-foreground leading-relaxed">
                  Our flagship red sandalwood plantation project spans across premium agricultural land in Vinjamur.
                  This sustainable venture combines traditional farming wisdom with modern agricultural techniques to
                  cultivate high-quality red sandalwood trees.
                </p>

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-2 text-primary" />
                    <span>15-20 Year Maturity</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <TrendingUp className="h-4 w-4 mr-2 text-primary" />
                    <span>High ROI Potential</span>
                  </div>
                </div>

                <div className="bg-muted/50 rounded-lg p-4">
                  <h4 className="font-semibold text-primary mb-2 flex items-center">
                    <FileText className="h-4 w-4 mr-2" />
                    Legal Transparency
                  </h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Complete land documentation and clear titles</li>
                    <li>• Government approvals and permits in place</li>
                    <li>• Regular compliance audits and reporting</li>
                    <li>• Transparent ownership structure</li>
                  </ul>
                </div>

                <Button className="w-full bg-primary hover:bg-primary/90">Learn More About This Project</Button>
              </div>
            </CardContent>
          </Card>

          {/* Raigiri Venture */}
          <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="relative h-64">
              <img
                src="/placeholder-wmzz1.png"
                alt="Raigiri Venture Development"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-2xl font-bold">Raigiri Venture</h3>
                <p className="text-white/90 flex items-center mt-1">
                  <MapPin className="h-4 w-4 mr-1" />
                  Strategic Location
                </p>
              </div>
            </div>
            <CardContent className="p-6">
              <div className="space-y-4">
                <p className="text-foreground leading-relaxed">
                  The Raigiri Venture represents our commitment to innovative land development and sustainable community
                  building. This project focuses on creating integrated agricultural and residential spaces that promote
                  sustainable living.
                </p>

                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Project Introduction</h4>
                    <p className="text-sm text-muted-foreground">
                      A comprehensive development project that combines sustainable agriculture with modern
                      infrastructure, creating a model for future rural development initiatives.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-primary mb-2">Location Details</h4>
                    <p className="text-sm text-muted-foreground">
                      Strategically located with excellent connectivity to major transportation networks, ensuring easy
                      access while maintaining the serene rural environment essential for sustainable development.
                    </p>
                  </div>
                </div>

                <div className="bg-card/50 rounded-lg p-4 border border-border">
                  <h4 className="font-semibold text-card-foreground mb-2">Key Features</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Integrated agricultural and residential planning</li>
                    <li>• Sustainable infrastructure development</li>
                    <li>• Community-focused amenities</li>
                    <li>• Environmental conservation measures</li>
                  </ul>
                </div>

                <Button
                  variant="outline"
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                >
                  Explore Raigiri Venture
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
