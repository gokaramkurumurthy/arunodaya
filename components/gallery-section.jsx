"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const galleryImages = [
    {
      src: "/placeholder-y7ldy.png",
      alt: "Red sandalwood saplings plantation",
      title: "Plantation Process",
    },
    {
      src: "/placeholder-x8trh.png",
      alt: "Mature red sandalwood trees",
      title: "Mature Plantation",
    },
    {
      src: "/placeholder-ulgvp.png",
      alt: "Site visit with stakeholders",
      title: "Stakeholder Visit",
    },
    {
      src: "/placeholder-g0y5q.png",
      alt: "Land preparation activities",
      title: "Land Preparation",
    },
    {
      src: "/placeholder-cfa2k.png",
      alt: "Sustainable irrigation system",
      title: "Irrigation Infrastructure",
    },
    {
      src: "/placeholder-zrabf.png",
      alt: "Team coordination meeting",
      title: "Project Coordination",
    },
    {
      src: "/placeholder-fbrbg.png",
      alt: "Aerial view of farmland",
      title: "Farm Overview",
    },
    {
      src: "/placeholder-rouhv.png",
      alt: "Quality inspection process",
      title: "Quality Assessment",
    },
    {
      src: "/placeholder-ojhxm.png",
      alt: "Community engagement session",
      title: "Community Engagement",
    },
  ]

  const openLightbox = (image, index) => {
    setSelectedImage(image)
    setCurrentIndex(index)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % galleryImages.length
    setCurrentIndex(nextIndex)
    setSelectedImage(galleryImages[nextIndex])
  }

  const prevImage = () => {
    const prevIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length
    setCurrentIndex(prevIndex)
    setSelectedImage(galleryImages[prevIndex])
  }

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Project Gallery</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Take a visual journey through our sustainable farming projects, site visits, and community engagement
            activities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <Card
              key={index}
              className="overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300 hover:scale-105"
              onClick={() => openLightbox(image, index)}
            >
              <div className="relative aspect-video">
                <img src={image.src || "/placeholder.svg"} alt={image.alt} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 hover:opacity-100 transition-opacity duration-300 text-white text-center">
                    <h3 className="text-lg font-semibold">{image.title}</h3>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              <Button
                variant="ghost"
                size="sm"
                className="absolute top-4 right-4 text-white hover:bg-white/20 z-10"
                onClick={closeLightbox}
              >
                <X className="h-6 w-6" />
              </Button>

              <Button
                variant="ghost"
                size="sm"
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20 z-10"
                onClick={prevImage}
              >
                <ChevronLeft className="h-8 w-8" />
              </Button>

              <Button
                variant="ghost"
                size="sm"
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20 z-10"
                onClick={nextImage}
              >
                <ChevronRight className="h-8 w-8" />
              </Button>

              <img
                src={selectedImage.src || "/placeholder.svg"}
                alt={selectedImage.alt}
                className="max-w-full max-h-full object-contain rounded-lg"
              />

              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-center">
                <h3 className="text-xl font-semibold mb-2">{selectedImage.title}</h3>
                <p className="text-sm text-white/80">
                  {currentIndex + 1} of {galleryImages.length}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
