import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";

export default function BlogHighlightsComponent() {
  return (
    <section className="bg-[#003636] py-24">
      <div className="container">
        <h2 className="mb-12 text-center text-3xl font-bold text-white">Latest from Our Blog</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <Link key={i} href="#" className="group">
              <Card className="h-full bg-[#002626] text-white">
                <CardContent className="p-4">
                  <Image
                    src="https://thekeywine.vn/wp-content/uploads/2024/10/4i5-391x391.jpg"
                    alt={`Blog ${i}`}
                    width={400}
                    height={200}
                    className="mb-4 rounded-lg"
                  />
                  <h3 className="mb-2 text-lg font-semibold group-hover:text-amber-400">
                    The Art of Wine Tasting
                  </h3>
                  <p className="mb-4 text-sm text-gray-300">
                    Learn the essential techniques for appreciating wine like a professional sommelier.
                  </p>
                  <div className="flex items-center text-amber-400 group-hover:text-amber-500">
                    Read More
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
