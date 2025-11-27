import { Button } from "@/components/ui/button";

export default function BusinessInsurance() {
  return (
    <main className="min-h-screen pt-[140px] pb-24">
      <div className="container-custom">
        <h1 className="text-5xl font-serif font-bold text-[var(--primary)] mb-8">Property & Casualty</h1>
        <p className="text-xl text-slate-600 max-w-3xl mb-12">
          Our mission of providing excellent products and service starts with learning and understanding your business needs and financial objectives so that we may work together to create a plan that fits your unique operations.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
             <h2 className="text-3xl font-serif font-bold text-[var(--primary)]">Comprehensive Coverage</h2>
             <p className="text-slate-600">
               From general liability to specialized industry coverage, we ensure your business is protected against unforeseen risks. Our team of experts analyzes your specific situation to recommend the most effective solutions.
             </p>
             <ul className="list-disc pl-5 space-y-2 text-slate-600">
               <li>General Liability</li>
               <li>Commercial Property</li>
               <li>Workers' Compensation</li>
               <li>Professional Liability (E&O)</li>
               <li>Cyber Liability</li>
             </ul>
             <Button className="bg-[var(--primary)] text-white mt-4">Request a Consultation</Button>
          </div>
          <div className="h-[400px] bg-slate-200 rounded-lg overflow-hidden relative">
             {/* Placeholder for business image */}
             <div className="absolute inset-0 bg-slate-300 flex items-center justify-center text-slate-500">
               Business Insurance Image
             </div>
          </div>
        </div>
      </div>
    </main>
  );
}
