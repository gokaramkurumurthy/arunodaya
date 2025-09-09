import { Card, CardContent } from "@/components/ui/card"
import { Target, Eye, Heart, Users } from "lucide-react"

export default function AboutSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">About Arunodaya Enterprises</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            We are committed to sustainable development through innovative agricultural practices and responsible land
            management, creating value for communities and investors alike.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src="/placeholder-drzns.png"
              alt="Sustainable farming practices"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-primary">Our Story</h3>
            <p className="text-lg text-foreground leading-relaxed">
              Founded with a vision to revolutionize sustainable agriculture, Arunodaya Enterprises has been at the
              forefront of red sandalwood cultivation and responsible land development. Our commitment to environmental
              stewardship and community development drives everything we do.
            </p>
            <p className="text-lg text-foreground leading-relaxed">
              With years of expertise in agricultural innovation and land management, we have successfully created
              sustainable ventures that benefit both investors and local communities while preserving our natural
              resources for future generations.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="text-center hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-6">
              <Target className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-card-foreground mb-3">Our Mission</h3>
              <p className="text-muted-foreground">
                To create sustainable agricultural ventures that generate value while preserving our environment and
                supporting local communities.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-6">
              <Eye className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-card-foreground mb-3">Our Vision</h3>
              <p className="text-muted-foreground">
                To be the leading sustainable agriculture company, setting new standards for environmental
                responsibility and community development.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-6">
              <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-card-foreground mb-3">Our Values</h3>
              <p className="text-muted-foreground">
                Integrity, sustainability, transparency, and community-first approach guide all our business decisions
                and partnerships.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-6">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-card-foreground mb-3">Our Commitment</h3>
              <p className="text-muted-foreground">
                Dedicated to creating lasting positive impact through sustainable practices and ethical business
                operations.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
