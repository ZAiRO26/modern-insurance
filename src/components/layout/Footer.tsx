"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[var(--primary)] text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Column 1: Brand */}
          <div className="flex flex-col gap-6">
            <div className="text-2xl font-serif font-bold tracking-tight">
              Morris <span className="text-[var(--secondary)]">&</span> Garritano
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              Since 1885, we have provided trusted advisory and comprehensive insurance solutions to businesses and individuals across California.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="text-white/70 hover:text-[var(--secondary)] transition-colors">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-serif text-lg mb-6 text-[var(--secondary)]">Quick Links</h4>
            <ul className="space-y-3 text-sm text-slate-300">
              <li><Link href="#" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="font-serif text-lg mb-6 text-[var(--secondary)]">Services</h4>
            <ul className="space-y-3 text-sm text-slate-300">
              <li><Link href="#" className="hover:text-white transition-colors">Business Insurance</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Employee Benefits</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Personal Insurance</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Risk Management</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Workers' Compensation</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="font-serif text-lg mb-6 text-[var(--secondary)]">Contact Us</h4>
            <ul className="space-y-3 text-sm text-slate-300">
              <li>1122 Laurel Lane</li>
              <li>San Luis Obispo, CA 93401</li>
              <li className="pt-2">(805) 543-6887</li>
              <li>info@morrisgarritano.com</li>
              <li className="pt-4 text-[var(--secondary)] font-medium">License #0850493</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Morris & Garritano Insurance Agency. All rights reserved.</p>
          <p>Designed & Developed for Excellence.</p>
        </div>
      </div>
    </footer>
  )
}
