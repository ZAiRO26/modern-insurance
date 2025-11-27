"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"

const services = [
  {
    id: "01",
    title: "Property & Casualty",
    description: "Our mission of providing excellent products and service starts with learning and understanding your business needs.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2301&auto=format&fit=crop", // Business building
    link: "/business-insurance"
  },
  {
    id: "02",
    title: "Employee Benefits",
    description: "We provide a broad range of products for group employee benefit programs and are licensed to represent every major carrier.",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2301&auto=format&fit=crop", // Meeting/People
    link: "/employee-benefits"
  },
  {
    id: "03",
    title: "Personal Insurance",
    description: "Your personal insurance policies should give you complete confidence that what needs protection is secured.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059ee971?q=80&w=2301&auto=format&fit=crop", // Home/Life
    link: "/personal-insurance"
  }
]

export function Hero() {
  return (
    <section className="relative w-full">
      <div className="flex flex-col lg:flex-row min-h-[calc(100vh-80px)]">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            className="group relative flex-1 min-h-[400px] lg:min-h-screen overflow-hidden border-b lg:border-b-0 lg:border-r border-white/20 last:border-0"
          >
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
                priority={index === 0}
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-[var(--primary)]/80 group-hover:bg-[var(--primary)]/70 transition-colors duration-500" />
            </div>

            {/* Content */}
            <div className="relative h-full flex flex-col justify-end p-8 lg:p-12 text-white">
              <div className="mb-auto pt-24 lg:pt-32">
                <span className="text-4xl lg:text-6xl font-serif text-white/20 font-bold block mb-4">
                  {service.id}
                </span>
              </div>
              
              <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h2 className="text-2xl lg:text-3xl font-serif font-bold mb-4">
                  {service.title}
                </h2>
                <p className="text-slate-300 mb-6 max-w-sm line-clamp-3 group-hover:line-clamp-none transition-all">
                  {service.description}
                </p>
                
                <Link 
                  href={service.link}
                  className="inline-flex items-center gap-2 text-[var(--secondary)] font-medium tracking-wide uppercase text-sm hover:text-white transition-colors"
                >
                  Learn More <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
