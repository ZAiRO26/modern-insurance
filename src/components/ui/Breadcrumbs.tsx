"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronRight, Home } from "lucide-react"

export function Breadcrumbs() {
  const pathname = usePathname()
  
  if (pathname === "/") return null

  const paths = pathname.split("/").filter(Boolean)

  return (
    <nav aria-label="Breadcrumb" className="bg-slate-50 py-3 border-b border-slate-100">
      <div className="container-custom">
        <ol className="flex items-center space-x-2 text-sm text-slate-500">
          <li>
            <Link 
              href="/" 
              className="flex items-center hover:text-[var(--primary)] transition-colors"
            >
              <Home className="h-4 w-4" />
              <span className="sr-only">Home</span>
            </Link>
          </li>
          
          {paths.map((path, index) => {
            const href = `/${paths.slice(0, index + 1).join("/")}`
            const isLast = index === paths.length - 1
            const label = path
              .split("-")
              .map(word => word.charAt(0).toUpperCase() + word.slice(1))
              .join(" ")

            return (
              <li key={path} className="flex items-center space-x-2">
                <ChevronRight className="h-4 w-4 text-slate-300" />
                {isLast ? (
                  <span className="font-medium text-[var(--primary)]" aria-current="page">
                    {label}
                  </span>
                ) : (
                  <Link 
                    href={href}
                    className="hover:text-[var(--primary)] transition-colors"
                  >
                    {label}
                  </Link>
                )}
              </li>
            )
          })}
        </ol>
      </div>
    </nav>
  )
}
