"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { ModeToggle } from "@/components/ModeToggle"
import { Menu, Camera, Heart } from "lucide-react"
import { Button } from "./ui/button"



const Navbar = () => {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = React.useState(false)

  const routes = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/contact", label: "Contact" },
    { href: "/blog", label: "Blog" },
    { href: "/book", label: "Booking" },
    { href: "/reviews", label: "Reviews" },
  ]



  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/90 dark:bg-luxury-charcoal-900/90 backdrop-luxury supports-[backdrop-filter]:bg-white/80 dark:supports-[backdrop-filter]:bg-luxury-charcoal-900/80 shadow-luxury border-luxury-charcoal-200/30 dark:border-luxury-charcoal-800/30">
      <div className="container flex h-20 mx-auto items-center justify-between px-6">
        {/* Logo Section */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-luxury-charcoal-900 to-luxury-charcoal-800 rounded-2xl flex items-center justify-center shadow-luxury group-hover:shadow-luxury-lg transition-all duration-500 group-hover:scale-105 border border-luxury-gold-400/20">
                <Camera className="w-6 h-6 text-luxury-gold-400" />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-luxury-gold-500 rounded-full flex items-center justify-center shadow-luxury">
                <span className="text-xs">✨</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-xl gradient-text-luxury group-hover:scale-105 transition-all duration-300">
                Madiun Photography
              </span>
              <span className="text-xs text-luxury-charcoal-500 dark:text-luxury-charcoal-400 font-medium">
                Luxury Visual Stories
              </span>
            </div>
          </Link>
        </div>

        {/* Centered Navigation - Desktop */}
        <nav className="flex-1 hidden lg:flex justify-center">
          <div className="flex items-center space-x-2 bg-luxury-charcoal-50/80 dark:bg-luxury-charcoal-800/80 rounded-full p-2 backdrop-luxury border border-luxury-charcoal-200/30 dark:border-luxury-charcoal-700/30 shadow-luxury">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "px-6 py-3 rounded-full text-sm font-semibold transition-all duration-500 relative overflow-hidden group",
                  pathname === route.href
                    ? "bg-gradient-to-r from-luxury-charcoal-900 to-luxury-charcoal-800 text-white shadow-luxury border border-luxury-gold-400/30"
                    : "text-luxury-charcoal-600 dark:text-luxury-charcoal-300 hover:text-luxury-gold-600 dark:hover:text-luxury-gold-400 hover:bg-white/90 dark:hover:bg-luxury-charcoal-700/90"
                )}
              >
                <span className="relative z-10">{route.label}</span>
                {pathname !== route.href && (
                  <div className="absolute inset-0 bg-gradient-to-r from-luxury-gold-500/10 to-luxury-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                )}
              </Link>
            ))}
          </div>
        </nav>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          <ModeToggle />



          {/* Book Now Button - Desktop */}
          <Link href="/book" className="hidden lg:block">
            <Button className="bg-gradient-to-r from-luxury-charcoal-900 to-luxury-charcoal-800 hover:from-luxury-charcoal-800 hover:to-luxury-charcoal-700 text-white shadow-luxury hover:shadow-glow transition-all duration-500 rounded-full px-6 py-2 font-semibold border border-luxury-gold-400/20 hover:border-luxury-gold-400/40">
              <Heart className="w-4 h-4 mr-2" />
              Book Now
            </Button>
          </Link>

          {/* Mobile Menu */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full"
              onClick={() => setIsOpen(!isOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-t border-gray-200/20 dark:border-gray-700/20 shadow-xl z-50">
            <div className="container px-6 py-6">
              <nav className="space-y-4">
                {routes.map((route) => (
                  <Link
                    key={route.href}
                    href={route.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "block px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                      pathname === route.href
                        ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                        : "text-foreground/70 hover:text-foreground hover:bg-accent"
                    )}
                  >
                    {route.label}
                  </Link>
                ))}
              </nav>

              <div className="mt-6 pt-6 border-t border-gray-200/20 dark:border-gray-700/20 space-y-4">
                <Link href="/book" onClick={() => setIsOpen(false)}>
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                    <Heart className="w-4 h-4 mr-2" />
                    Book Now
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Navbar

