"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { ModeToggle } from "@/components/ModeToggle"

const Navbar = () => {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 mx-auto items-center justify-between">
        {/* Logo Section */}
        <div className="w-32">
          <Link href="/" className="flex items-center space-x-2">
            <span className="hidden font-bold sm:inline-block">
              Pothography
            </span>
          </Link>
        </div>

        {/* Centered Navigation */}
        <nav className="flex-1 hidden md:flex justify-center">
          <div className="flex items-center space-x-8">
            <Link
              href="/"
              className={cn(
                "transition-colors hover:text-foreground/80",
                pathname === "/" ? "text-foreground" : "text-foreground/60"
              )}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={cn(
                "transition-colors hover:text-foreground/80",
                pathname === "/about" ? "text-foreground" : "text-foreground/60"
              )}
            >
              About
            </Link>
            <Link
              href="/services"
              className={cn(
                "transition-colors hover:text-foreground/80",
                pathname === "/services"
                  ? "text-foreground"
                  : "text-foreground/60"
              )}
            >
              Services
            </Link>
            <Link
              href="/portfolio"
              className={cn(
                "transition-colors hover:text-foreground/80",
                pathname === "/portfolio"
                  ? "text-foreground"
                  : "text-foreground/60"
              )}
            >
              Portfolio
            </Link>
            <Link
              href="/contact"
              className={cn(
                "transition-colors hover:text-foreground/80",
                pathname === "/contact"
                  ? "text-foreground"
                  : "text-foreground/60"
              )}
            >
              Contact
            </Link>
            <Link
              href="/blog"
              className={cn(
                "transition-colors hover:text-foreground/80",
                pathname === "/blog" ? "text-foreground" : "text-foreground/60"
              )}
            >
              Blog
            </Link>
            <Link
              href="/book"
              className={cn(
                "transition-colors hover:text-foreground/80",
                pathname === "/book" ? "text-foreground" : "text-foreground/60"
              )}
            >
              Book
            </Link>
            <Link
              href="/reviews"
              className={cn(
                "transition-colors hover:text-foreground/80",
                pathname === "/reviews" ? "text-foreground" : "text-foreground/60"
              )}
            >
              Reviews
            </Link>
          </div>
        </nav>

        {/* Right Section */}
        <div className="w-32 flex justify-end">
          <ModeToggle />
        </div>
      </div>
    </header>
  )
}

export default Navbar