import BlogHighlightsComponent from "./BlogHighlights"
import TestimonialsComponent from "./Testimonials"
import AboutSectionComponent from "./AboutSection"
import { FeaturedProductsComponent } from "./FeaturedProducts"
import { HeroSectionComponent } from "./HeroSection"

export default function WineLandingComponent() {
  return (
    <>
      {/* Hero Section */}
      <HeroSectionComponent />

      {/* Featured Products */}
      <FeaturedProductsComponent />

      {/* About Section */}
      <AboutSectionComponent />

      {/* Testimonials */}
      <TestimonialsComponent />

      {/* Blog Highlights */}
      <BlogHighlightsComponent />
    </>
  )
}