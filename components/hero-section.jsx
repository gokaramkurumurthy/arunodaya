"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Leaf, Shield, TrendingUp } from "lucide-react"

export default function HeroSection({ setActiveSection }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(22, 78, 99, 0.7), rgba(22, 78, 99, 0.5)), url('/placeholder-r3ts2.png')`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 text-balance">
            Arunodaya Enterprises
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-white/90 mb-8 text-balance">
            Building Trust Through Sustainable Ventures
          </p>
          <p className="text-lg md:text-xl text-white/80 mb-12 max-w-3xl mx-auto text-pretty">
            Pioneering sustainable agriculture with red sandalwood farming and innovative land development projects that
            benefit communities and preserve our environment.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-3 text-lg"
              onClick={() => setActiveSection("projects")}
            >
              Explore Our Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-primary px-8 py-3 text-lg bg-transparent"
              onClick={() => setActiveSection("contact")}
            >
              Get In Touch
            </Button>
          </div>

          {/* Feature highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <Leaf className="h-12 w-12 text-secondary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Sustainable Farming</h3>
              <p className="text-white/80">Eco-friendly agricultural practices that preserve our environment</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <Shield className="h-12 w-12 text-secondary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Legal Transparency</h3>
              <p className="text-white/80">Complete documentation and legal compliance in all ventures</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <TrendingUp className="h-12 w-12 text-secondary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Profitable Returns</h3>
              <p className="text-white/80">Sustainable growth with attractive returns for investors</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
