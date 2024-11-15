import Image from "next/image";
import { Button } from "@/components/ui/button";

export function HeroSectionComponent() {
  return (
    <section className="relative h-[600px]">
      <Image src="https://thekeywine.vn/wp-content/uploads/2024/11/z6001251682484_75fa3fbc15b704f8241ca3d409d3c211.jpg" alt="Wine Vineyard" className="object-cover" fill priority />
      <div className="absolute inset-0 bg-black/50" />
      <div className="container relative flex h-full items-center">
        <div className="max-w-2xl space-y-4 text-center">
          <h1 className="text-5xl font-bold tracking-tighter text-white">Discover the Finest Wines</h1>
          <p className="text-xl text-gray-200">Curated selection of premium wines from the world's most prestigious vineyards</p>
          <Button className="bg-amber-400 text-[#002626] hover:bg-amber-500">Shop Now</Button>
        </div>
      </div>
    </section>
  );
}
