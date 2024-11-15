import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function FeaturedProductsComponent() {
  return (
    <section className="py-24">
      <div className="container">
        <h2 className="mb-12 text-center text-3xl font-bold text-white">Featured Wines</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[1, 2, 3, 4].map((i) => (
            <Card key={i} className="bg-[#003636] text-white">
              <CardContent className="p-4">
                <Image src="https://thekeywine.vn/wp-content/uploads/2024/05/Foresta-261x391.png" alt={`Wine ${i}`} width={200} height={300} className="mx-auto mb-4" />
                <Badge className="mb-2 bg-amber-400 text-[#002626]">New Arrival</Badge>
                <h3 className="mb-2 text-lg font-semibold">Château Margaux 2018</h3>
                <p className="mb-4 text-sm text-gray-300">A prestigious Bordeaux with complex aromas and elegant tannins</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-amber-400">$299.99</span>
                  <Button variant="secondary" size="sm">Add to Cart</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
