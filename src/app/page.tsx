import { Hero } from "@/components/home/Hero";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileText, Users, Shield } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen pt-[120px] lg:pt-[140px]">
      <Hero />
      
      {/* Mission Section */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-4xl lg:text-5xl font-serif font-bold text-[var(--primary)] mb-6">
                Trusted advisory <br/> since 1885.
              </h2>
              <div className="w-20 h-1 bg-[var(--secondary)] mb-8" />
            </div>
            <div className="lg:w-1/2">
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                Morris & Garritano has provided trusted advisory since 1885. We pride ourselves on taking a personalized approach to insuring your assets and protecting your people with reputable service and excellence.
              </p>
              <Button variant="outline" className="border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--primary)] hover:text-white rounded-none h-12 px-8">
                Our History
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Articles & Insights */}
      <section className="py-24 bg-slate-50">
        <div className="container-custom">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="text-[var(--secondary)] font-medium tracking-wider uppercase text-sm mb-2 block">Knowledge Center</span>
              <h2 className="text-3xl lg:text-4xl font-serif font-bold text-[var(--primary)]">Articles & Insights</h2>
            </div>
            <Button variant="link" className="text-[var(--primary)] hover:text-[var(--secondary)] hidden md:flex">
              View All Articles <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white group cursor-pointer shadow-sm hover:shadow-md transition-all duration-300">
                <div className="h-48 bg-slate-200 relative overflow-hidden">
                  <div className="absolute inset-0 bg-[var(--primary)]/10 group-hover:bg-transparent transition-colors" />
                  {/* Placeholder for article image */}
                  <div className="absolute top-4 left-4 bg-white px-3 py-1 text-xs font-bold text-[var(--primary)] uppercase tracking-wider">
                    Compliance
                  </div>
                </div>
                <div className="p-8">
                  <div className="text-xs text-slate-500 mb-3">October 2025</div>
                  <h3 className="text-xl font-serif font-bold text-[var(--primary)] mb-4 group-hover:text-[var(--secondary)] transition-colors">
                    October 2025 EB Compliance Recap: IRS Penalties & Adjustments
                  </h3>
                  <p className="text-slate-600 text-sm line-clamp-3 mb-6">
                    In October, the IRS announced 2026 penalties for failure to file or furnish ACA reporting and issued 2026 cost-of-living adjustments for several provisions.
                  </p>
                  <span className="text-[var(--primary)] font-medium text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                    Read Article <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture / Careers */}
      <section className="relative py-32 bg-[var(--primary)] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[var(--secondary)] font-medium tracking-wider uppercase text-sm mb-4 block">Our Culture</span>
              <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6">
                Find your place at <br/> Morris & Garritano.
              </h2>
              <p className="text-slate-300 text-lg mb-8 max-w-lg">
                Our agency is committed to being a place where our employees thrive. Learn more about our opportunities for new talent & growth!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-[var(--secondary)] hover:bg-[#b08d55] text-white rounded-none h-12 px-8">
                  View Careers
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[var(--primary)] rounded-none h-12 px-8">
                  Meet the Team
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 mt-8">
                <div className="h-64 bg-slate-800 rounded-lg overflow-hidden relative group">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                </div>
                <div className="h-40 bg-slate-700 rounded-lg overflow-hidden relative group">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                </div>
              </div>
              <div className="space-y-4">
                <div className="h-40 bg-slate-700 rounded-lg overflow-hidden relative group">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                </div>
                <div className="h-64 bg-slate-800 rounded-lg overflow-hidden relative group">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
