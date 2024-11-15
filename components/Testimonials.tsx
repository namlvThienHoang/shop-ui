import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

export default function TestimonialsComponent() {
  return (
    <section className="py-24">
      <div className="container">
        <h2 className="mb-12 text-center text-3xl font-bold text-white">What Our Customers Say</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="bg-[#003636] text-white">
              <CardContent className="p-6">
                <div className="mb-4 flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="mb-4 text-gray-300">
                  "Exceptional selection of wines and outstanding service. TheKey Wine has become my go-to destination
                  for premium wines."
                </p>
                <div className="flex items-center space-x-4">
                  <Image
                    src="https://thekeywine.vn/wp-content/uploads/2022/10/mr-duc-anh-100x100.jpg"
                    alt="Customer"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div>
                    <p className="font-semibold">John Smith</p>
                    <p className="text-sm text-gray-400">Wine Enthusiast</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
