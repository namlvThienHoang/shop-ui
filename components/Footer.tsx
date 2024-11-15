import { Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";

export default function FooterComponent() {
  return (
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
              <li><Link href="#" className="hover:text-amber-400">About Us</Link></li>
              <li><Link href="#" className="hover:text-amber-400">Contact</Link></li>
              <li><Link href="#" className="hover:text-amber-400">Blog</Link></li>
              <li><Link href="#" className="hover:text-amber-400">FAQs</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Policies</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="#" className="hover:text-amber-400">Shipping Policy</Link></li>
              <li><Link href="#" className="hover:text-amber-400">Return Policy</Link></li>
              <li><Link href="#" className="hover:text-amber-400">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-amber-400">Terms of Service</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Follow Us</h3>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-amber-400"><Facebook className="h-6 w-6" /></Link>
              <Link href="#" className="text-gray-400 hover:text-amber-400"><Twitter className="h-6 w-6" /></Link>
              <Link href="#" className="text-gray-400 hover:text-amber-400"><Instagram className="h-6 w-6" /></Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} TheKey Wine. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
