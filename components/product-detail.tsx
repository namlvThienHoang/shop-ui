'use client'

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Minus, Plus, Star, Facebook, Twitter, Instagram, Heart } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Textarea } from "@/components/ui/textarea"

export default function ProductDetailComponent() {
  const [quantity, setQuantity] = React.useState(1)
  const [selectedImage, setSelectedImage] = React.useState(0)

  const productImages = [
    "/placeholder.svg?height=600&width=400",
    "/placeholder.svg?height=600&width=400",
    "/placeholder.svg?height=600&width=400",
    "/placeholder.svg?height=600&width=400",
  ]

  return (
    <div className="min-h-screen bg-[#002626]">
      {/* Breadcrumbs */}
      <div className="container py-4">
        <nav className="flex text-sm text-gray-400">
          <Link href="/" className="hover:text-amber-400">
            Home
          </Link>
          <ChevronRight className="mx-2 h-4 w-4" />
          <Link href="/wines" className="hover:text-amber-400">
            Wines
          </Link>
          <ChevronRight className="mx-2 h-4 w-4" />
          <span className="text-amber-400">Couvent des Jacobins Bourgogne Chardonnay</span>
        </nav>
      </div>

      {/* Product Header */}
      <div className="border-t border-gray-800">
        <div className="container py-8">
          <h1 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Couvent des Jacobins Bourgogne Chardonnay
          </h1>
        </div>
      </div>

      {/* Product Main Section */}
      <div className="container pb-16">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative aspect-square overflow-hidden rounded-lg border border-gray-800">
              <Image
                src={productImages[selectedImage]}
                alt="Wine bottle"
                fill
                className="object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>
            <Carousel className="w-full">
              <CarouselContent>
                {productImages.map((image, index) => (
                  <CarouselItem key={index} className="basis-1/4">
                    <div
                      className={`cursor-pointer overflow-hidden rounded-lg border-2 ${
                        selectedImage === index ? "border-amber-400" : "border-gray-800"
                      }`}
                      onClick={() => setSelectedImage(index)}
                    >
                      <Image
                        src={image}
                        alt={`Wine bottle view ${index + 1}`}
                        width={100}
                        height={100}
                        className="aspect-square object-cover"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>

          {/* Product Details */}
          <div className="space-y-8">
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                ))}
                <span className="text-sm text-gray-400">(24 reviews)</span>
              </div>
              <div className="text-3xl font-bold text-amber-400">$89.99</div>
              <p className="text-gray-400">
                A prestigious Burgundy Chardonnay with elegant aromas of citrus, white flowers, and subtle oak notes.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Label htmlFor="quantity" className="text-white">
                  Quantity
                </Label>
                <div className="flex items-center space-x-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="h-8 w-8 text-white"
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <Input
                    id="quantity"
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                    className="w-16 text-center text-white"
                  />
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setQuantity(quantity + 1)}
                    className="h-8 w-8 text-white"
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <Button className="flex-1 bg-amber-400 text-[#002626] hover:bg-amber-500">
                  Add to Cart
                </Button>
                <Button variant="secondary" className="flex-1">
                  Buy Now
                </Button>
                <Button variant="outline" size="icon">
                  <Heart className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Wine Characteristics */}
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell className="text-white">Region</TableCell>
                  <TableCell className="text-gray-400">Burgundy, France</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="text-white">Grape</TableCell>
                  <TableCell className="text-gray-400">100% Chardonnay</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="text-white">Vintage</TableCell>
                  <TableCell className="text-gray-400">2020</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="text-white">Alcohol</TableCell>
                  <TableCell className="text-gray-400">13.5%</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>

        {/* Product Tabs */}
        <div className="mt-16">
          <Tabs defaultValue="description">
            <TabsList className="w-full justify-start">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="specifications">Specifications</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>
            <TabsContent value="description" className="mt-6 text-gray-400">
              <div className="space-y-4">
                <p>
                  This Burgundy Chardonnay from Couvent des Jacobins exemplifies the elegance and finesse of white
                  wines from this prestigious region. The wine showcases a brilliant pale gold color with green
                  highlights, indicating its youth and freshness.
                </p>
                <p>
                  On the nose, it presents an intricate bouquet of citrus fruits, white flowers, and subtle oak
                  notes. The palate is well-balanced, combining richness with refreshing acidity, featuring flavors
                  of ripe apple, lemon zest, and a touch of vanilla from careful oak aging.
                </p>
              </div>
            </TabsContent>
            <TabsContent value="specifications" className="mt-6">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-white">Characteristic</TableHead>
                    <TableHead className="text-white">Detail</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="text-white">Producer</TableCell>
                    <TableCell className="text-gray-400">Couvent des Jacobins</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="text-white">Region</TableCell>
                    <TableCell className="text-gray-400">Burgundy</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="text-white">Country</TableCell>
                    <TableCell className="text-gray-400">France</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="text-white">Type</TableCell>
                    <TableCell className="text-gray-400">White Wine</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="text-white">Grape</TableCell>
                    <TableCell className="text-gray-400">Chardonnay</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="text-white">Vintage</TableCell>
                    <TableCell className="text-gray-400">2020</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="text-white">Alcohol</TableCell>
                    <TableCell className="text-gray-400">13.5%</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="text-white">Volume</TableCell>
                    <TableCell className="text-gray-400">750ml</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TabsContent>
            <TabsContent value="reviews" className="mt-6">
              <div className="space-y-8">
                {/* Review Form */}
                <Card className="bg-[#003636]">
                  <CardContent className="p-6">
                    <h3 className="mb-4 text-lg font-semibold text-white">Write a Review</h3>
                    <form className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="rating" className="text-white">
                          Rating
                        </Label>
                        <div className="flex space-x-1">
                          {[1, 2, 3, 4, 5].map((rating) => (
                            <Button
                              key={rating}
                              variant="ghost"
                              size="icon"
                              className="hover:text-amber-400"
                            >
                              <Star className="h-5 w-5" />
                            </Button>
                          ))}
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="comment" className="text-white">
                          Review
                        </Label>
                        <Textarea
                          id="comment"
                          placeholder="Write your review here..."
                          className="min-h-[100px] text-white"
                        />
                      </div>
                      <Button className="bg-amber-400 text-[#002626] hover:bg-amber-500">
                        Submit Review
                      </Button>
                    </form>
                  </CardContent>
                </Card>

                {/* Review List */}
                <div className="space-y-4">
                  {[1, 2, 3].map((review) => (
                    <Card key={review} className="bg-[#003636]">
                      <CardContent className="p-6">
                        <div className="mb-2 flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <div className="h-10 w-10 overflow-hidden rounded-full">
                              <Image
                                src="/placeholder.svg?height=40&width=40"
                                alt="Reviewer"
                                width={40}
                                height={40}
                                className="h-full w-full object-cover"
                              />
                            </div>
                            <div>
                              <div className="font-semibold text-white">John Doe</div>
                              <div className="text-sm text-gray-400">2 days ago</div>
                            </div>
                          </div>
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className="h-5 w-5 fill-amber-400 text-amber-400"
                              />
                            ))}
                          </div>
                        </div>
                        <p className="text-gray-400">
                          Excellent wine with great balance and complexity. The oak integration is perfect,
                          and the finish is long and satisfying. Highly recommended!
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Shipping Information */}
        <div className="mt-16">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="shipping">
              <AccordionTrigger className="text-white hover:text-amber-400">
                Shipping & Returns
              </AccordionTrigger>
              <AccordionContent className="text-gray-400">
                <div className="space-y-4">
                  <p>
                    We offer free shipping on orders over $200. Standard shipping typically takes 3-5
                    business days. Express shipping options are available at checkout.
                  </p>
                  <p>
                    Returns are accepted within 30 days of delivery for unopened bottles. Please contact
                    our customer service team to initiate a return.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <h2 className="mb-8 text-2xl font-bold text-white">You May Also Like</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[1, 2, 3, 4].map((product) => (
              <Card key={product} className="bg-[#003636]">
                <CardContent className="p-4">
                  <Image
                    src="/placeholder.svg?height=300&width=200"
                    alt={`Related Wine ${product}`}
                    width={200}
                    height={300}
                    className="mx-auto mb-4"
                  />
                  <h3 className="mb-2 text-lg font-semibold text-white">
                    Château Margaux 2018
                  </h3>
                  <p className="mb-4 text-sm text-gray-400">
                    Premium Bordeaux Red Wine
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-amber-400">$299.99</span>
                    <Button variant="secondary" size="sm">
                      Add to Cart
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-800 bg-[#002626] py-12">
        <div className="container">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <h3 className="mb-4 text-lg font-semibold text-white">Contact Us</h3>
              <ul className="space-y-2 text-gray-400">
                <li>123 Wine Street</li>
                <li>Vineyard City, VC 12345</li>
                <li>Phone: (555) 123-4567</li>
                <li>Email: info@thekeywine.com</li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold text-white">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-amber-400">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-amber-400">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-amber-400">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-amber-400">
                    FAQs
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold text-white">Policies</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-amber-400">
                    Shipping Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-amber-400">
                    Return Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-amber-400">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-amber-400">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold text-white">Follow Us</h3>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-400 hover:text-amber-400">
                  <Facebook className="h-6 w-6" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-amber-400">
                  <Twitter className="h-6 w-6" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-amber-400">
                  <Instagram className="h-6 w-6" />
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} TheKey Wine. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}