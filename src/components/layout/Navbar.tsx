"use client"

import * as React from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { ChevronDown, Search, Menu, X, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

const navItems = [
  {
    name: "Business Insurance",
    href: "/business-insurance",
    subItems: [
      "Property & Casualty",
      "Workers' Compensation",
      "Industry Specializations",
      "Risk Management"
    ]
  },
  {
    name: "Employee Benefits",
    href: "/employee-benefits",
    subItems: [
      "Group Health",
      "Wellness Programs",
      "Compliance",
      "HR Consulting"
    ]
  },
  {
    name: "Personal Insurance",
    href: "/personal-insurance",
    subItems: [
      "Home & Auto",
      "Private Client Group",
      "Life & Disability"
    ]
  },
  {
    name: "About Us",
    href: "/about",
    subItems: [
      "Our Story",
      "Our Team",
      "Careers",
      "Community"
    ]
  },
  {
    name: "Resources",
    href: "/resources",
    subItems: [
      "Blog",
      "Webinars",
      "Client Portal"
    ]
  }
]

export function Navbar() {
  const [activeDropdown, setActiveDropdown] = React.useState<string | null>(null)
  const [isMobileOpen, setIsMobileOpen] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent",
      scrolled ? "bg-white shadow-sm border-slate-100 py-2" : "bg-white/95 py-4"
    )}>
      {/* Top Bar */}
      <div className="hidden lg:block border-b border-slate-100 mb-2 pb-2">
         <div className="container-custom flex justify-between items-center text-xs font-medium text-slate-500">
            <div className="flex gap-4">
              <span className="flex items-center gap-1"><Phone size={12} /> (805) 543-6887</span>
              <span className="flex items-center gap-1"><Mail size={12} /> info@morrisgarritano.com</span>
            </div>
            <div className="flex gap-4">
               <Link href="/client-portal" className="hover:text-[var(--secondary)] transition-colors">Client Portal</Link>
               <Link href="/pay-bill" className="hover:text-[var(--secondary)] transition-colors">Pay Bill</Link>
            </div>
         </div>
      </div>

      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="relative z-50 flex items-center gap-2">
          <div className="text-2xl font-serif font-bold text-[var(--primary)] tracking-tight">
            Morris <span className="text-[var(--secondary)]">&</span> Garritano
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <div 
              key={item.name} 
              className="relative group"
              onMouseEnter={() => setActiveDropdown(item.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link 
                href={item.href}
                className="flex items-center gap-1 text-sm font-medium text-slate-700 hover:text-[var(--primary)] transition-colors py-2"
              >
                {item.name}
                <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-200 text-[var(--secondary)]" />
              </Link>
              
              {/* Mega Menu / Dropdown */}
              <AnimatePresence>
                {activeDropdown === item.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 w-64 bg-white shadow-xl rounded-sm border-t-2 border-[var(--secondary)] p-4"
                  >
                    <div className="flex flex-col gap-2">
                      {item.subItems.map((sub) => (
                        <Link 
                          key={sub} 
                          href={`${item.href}/${sub.toLowerCase().replace(/ /g, '-')}`}
                          className="text-sm text-slate-600 hover:text-[var(--primary)] hover:bg-slate-50 px-3 py-2 rounded-sm transition-colors"
                        >
                          {sub}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
          
          <Button variant="ghost" size="icon" className="text-slate-700">
            <Search size={20} />
          </Button>
          
          <Button 
            asChild
            className="bg-[var(--primary)] hover:bg-[#0a2342] text-white rounded-none px-6"
          >
            <Link href="/contact">Get a Quote</Link>
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden p-2 text-slate-800"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
        >
          {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden absolute top-full left-0 w-full bg-white border-t border-slate-100 overflow-y-auto pb-24"
          >
            <div className="flex flex-col p-6 gap-6">
              {navItems.map((item) => (
                <div key={item.name} className="flex flex-col gap-3">
                  <div className="font-serif text-lg font-medium text-[var(--primary)] border-b border-slate-100 pb-2">
                    {item.name}
                  </div>
                  <div className="flex flex-col gap-2 pl-4">
                    {item.subItems.map((sub) => (
                      <Link
                        key={sub}
                        href="#"
                        className="text-sm text-slate-600 py-1"
                        onClick={() => setIsMobileOpen(false)}
                      >
                        {sub}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
              <Button className="w-full bg-[var(--primary)] text-white mt-4">
                Get a Quote
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
