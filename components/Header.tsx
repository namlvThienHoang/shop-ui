import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent } from "@/components/ui/navigation-menu";
import { Wine, ShoppingCart, Search } from 'lucide-react';

export function HeaderComponent() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-[#002626]/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" className="flex items-center space-x-2">
                <Wine className="h-6 w-6 text-amber-400" />
                <span className="text-xl font-bold text-amber-400">TheKey Wine</span>
              </Link>
            </NavigationMenuItem>
            {/* Other navigation items */}
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400" />
            <Input className="w-full bg-transparent pl-8 text-white placeholder:text-gray-400" placeholder="Search wines..." type="search" />
          </div>
          <Button variant="ghost" size="icon" className="text-white">
            <ShoppingCart className="h-5 w-5" />
            <span className="sr-only">Shopping Cart</span>
          </Button>
        </div>
      </div>
    </header>
  );
}
