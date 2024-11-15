import Link from "next/link"
import { Phone, Search, ShoppingCart, User } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Badge } from "@/components/ui/badge"

export default function NavMenuComponent() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-gradient-to-b from-[#002626] to-[#001a1a]">
      <div className="container flex h-16 items-center justify-between">
        {/* Left Section */}
        <div className="flex items-center space-x-2 lg:w-1/3">
          <Link href="tel:0972261222" className="hidden items-center space-x-2 text-amber-400 lg:flex">
            <Phone className="h-4 w-4" />
            <span className="text-sm font-medium">0972.261.222</span>
          </Link>
        </div>

        {/* Center Section */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList className="flex space-x-4">
            <NavigationMenuItem>
              <Link href="/" className="text-sm font-medium text-white hover:text-amber-400">
                TRANG CHỦ
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/about" className="text-sm font-medium text-white hover:text-amber-400">
                VỀ CHÚNG TÔI
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-sm font-medium text-white hover:text-amber-400">
                SẢN PHẨM
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid gap-3 p-6 w-[400px] lg:w-[500px]">
                  <Link href="/wines/red" className="group grid gap-1">
                    <div className="text-sm font-medium leading-none group-hover:text-amber-400">Rượu Vang Đỏ</div>
                    <p className="line-clamp-2 text-sm text-gray-400">Khám phá bộ sưu tập rượu vang đỏ cao cấp</p>
                  </Link>
                  <Link href="/wines/white" className="group grid gap-1">
                    <div className="text-sm font-medium leading-none group-hover:text-amber-400">Rượu Vang Trắng</div>
                    <p className="line-clamp-2 text-sm text-gray-400">Thưởng thức hương vị tinh tế của rượu vang trắng</p>
                  </Link>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/" className="flex items-center">
                <span className="sr-only">TheKey Wine</span>
                <div className="relative h-10 w-32">
                  {/* Replace with actual logo */}
                  <div className="flex h-full items-center justify-center text-xl font-bold text-amber-400">
                    TheKey Wine
                  </div>
                </div>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-sm font-medium text-white hover:text-amber-400">
                QUÀ TẶNG
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid gap-3 p-6 w-[400px] lg:w-[500px]">
                  <Link href="/gifts/corporate" className="group grid gap-1">
                    <div className="text-sm font-medium leading-none group-hover:text-amber-400">Quà Tặng Doanh Nghiệp</div>
                    <p className="line-clamp-2 text-sm text-gray-400">Giải pháp quà tặng chuyên nghiệp cho doanh nghiệp</p>
                  </Link>
                  <Link href="/gifts/personal" className="group grid gap-1">
                    <div className="text-sm font-medium leading-none group-hover:text-amber-400">Quà Tặng Cá Nhân</div>
                    <p className="line-clamp-2 text-sm text-gray-400">Lựa chọn quà tặng độc đáo cho người thân yêu</p>
                  </Link>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-sm font-medium text-white hover:text-amber-400">
                TIN TỨC
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid gap-3 p-6 w-[400px] lg:w-[500px]">
                  <Link href="/news/latest" className="group grid gap-1">
                    <div className="text-sm font-medium leading-none group-hover:text-amber-400">Tin Tức Mới Nhất</div>
                    <p className="line-clamp-2 text-sm text-gray-400">Cập nhật thông tin mới nhất về rượu vang</p>
                  </Link>
                  <Link href="/news/events" className="group grid gap-1">
                    <div className="text-sm font-medium leading-none group-hover:text-amber-400">Sự Kiện</div>
                    <p className="line-clamp-2 text-sm text-gray-400">Các sự kiện và hoạt động sắp diễn ra</p>
                  </Link>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/showroom" className="text-sm font-medium text-white hover:text-amber-400">
                SHOWROOM - ĐẠI LÝ
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Right Section */}
        <div className="flex items-center space-x-4 lg:w-1/3 lg:justify-end">
          <Button variant="ghost" size="icon" className="text-white hover:text-amber-400">
            <Search className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </Button>
          <Button variant="ghost" size="icon" className="text-white hover:text-amber-400">
            <div className="relative">
              <ShoppingCart className="h-5 w-5" />
              <Badge className="absolute -right-2 -top-2 h-4 w-4 rounded-full bg-red-500 p-0 text-[10px]">
                1
              </Badge>
            </div>
            <span className="sr-only">Shopping Cart</span>
          </Button>
          <Button variant="ghost" size="icon" className="text-white hover:text-amber-400">
            <User className="h-5 w-5" />
            <span className="sr-only">User Account</span>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button variant="ghost" size="icon" className="lg:hidden text-white hover:text-amber-400">
          <svg
            className=" h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <span className="sr-only">Open Menu</span>
        </Button>
      </div>
    </header>
  )
}