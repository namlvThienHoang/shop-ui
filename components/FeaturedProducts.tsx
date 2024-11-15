"use client";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import axios from "axios";
import useSWR from "swr";

// Define a fetcher function for SWR
const fetcher = async (url: string) => {
  const response = await axios.get(url);
  return response.data.products;
};

export function FeaturedProductsComponent() {
  // Fetch products using SWR
  const { data, error } = useSWR("https://dummyjson.com/products", fetcher);

  // Handle loading and error states
  if (error) return <div>Failed to load products</div>;
  if (!data) return <div>Loading...</div>;
  return (
    <section className="py-24">
    <div className="container">
      <h2 className="mb-12 text-center text-3xl font-bold text-white">Featured Wines</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {data.slice(0, 4).map((product: any) => (
          <Card key={product.id} className="bg-[#003636] text-white">
            <CardContent className="p-4">
              <Image 
                src={product.thumbnail} 
                alt={product.title} 
                width={200} 
                height={300} 
                className="mx-auto mb-4" 
              />
              <Badge className="mb-2 bg-amber-400 text-[#002626]">New Arrival</Badge>
              <h3 className="mb-2 text-lg font-semibold">{product.title}</h3>
              <p className="mb-4 text-sm text-gray-300">{product.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold text-amber-400">${product.price}</span>
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
