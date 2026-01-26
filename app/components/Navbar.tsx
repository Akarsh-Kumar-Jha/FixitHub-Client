import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

const navLinks = [
  { name: "Home", href: "#" },
  { name: "About", href: "#" },
  { name: "Contact", href: "#" },
]

export default function Navbar() {
  return (
    <header className="mx-auto mt-6 w-[92%] max-w-7xl rounded-2xl border bg-card sticky top-5 z-99">
      <nav className="flex h-16 items-center justify-between px-6">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
          className="h-full w-36"
            src="https://res.cloudinary.com/dlnzbkyit/image/upload/v1769443413/ChatGPT_Image_Jan_26__2026__09_31_47_PM-removebg-preview_ojljde.png"
            alt="FixitHub Logo"
          />
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Login Button */}
        <Button size="sm">
          Login
        </Button>

      </nav>
    </header>
  )
}