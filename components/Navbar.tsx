"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { ModeToggle } from "@/components/ModeToggle"
import { Menu } from "lucide-react"  // Hapus impor X
import { Button } from "./ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

const Navbar = () => {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = React.useState(false)  // Pertahankan isOpen

  const routes = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/contact", label: "Contact" },
    { href: "/blog", label: "Blog" },
    { href: "/book", label: "Book" },
    { href: "/reviews", label: "Reviews" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 mx-auto items-center justify-between">
        {/* Logo Section */}
        <div className="w-32">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold">
              Pothography
            </span>
          </Link>
        </div>

        {/* Centered Navigation - Desktop */}
        <nav className="flex-1 hidden md:flex justify-center">
          <div className="flex items-center space-x-8">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "transition-colors hover:text-foreground/80",
                  pathname === route.href ? "text-foreground" : "text-foreground/60"
                )}
              >
                {route.label}
              </Link>
            ))}
          </div>
        </nav>

        {/* Right Section */}
        <div className="w-32 flex items-center justify-end gap-4">
          <ModeToggle />
          
          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4 mt-8">
                {routes.map((route) => (
                  <Link
                    key={route.href}
                    href={route.href}
                    className={cn(
                      "block px-2 py-1 text-lg transition-colors hover:text-foreground/80",
                      pathname === route.href ? "text-foreground" : "text-foreground/60"
                    )}
                    onClick={() => setIsOpen(false)}  // Close the sheet on click
                  >
                    {route.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

export default Navbar
