import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function AboutSectionComponent() {
  return (
    <section className="bg-[#003636] py-24">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold text-white">Our Story</h2>
            <p className="text-gray-300">
              Since 1990, TheKey Wine has been dedicated to bringing the finest wines from around the world to our
              discerning customers. Our expertise and passion for wine ensure that every bottle in our collection meets
              the highest standards of quality and taste.
            </p>
            <Button variant="outline" className="text-amber-400 hover:text-amber-500">Learn More</Button>
          </div>
          <Image
            src="https://thekeywine.vn/wp-content/uploads/2024/11/z6001251682484_75fa3fbc15b704f8241ca3d409d3c211.jpg"
            alt="Wine Cellar"
            width={600}
            height={400}
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}
