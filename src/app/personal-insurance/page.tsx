import { Button } from "@/components/ui/button";

export default function PersonalInsurance() {
  return (
    <main className="min-h-screen pt-[140px] pb-24">
      <div className="container-custom">
        <h1 className="text-5xl font-serif font-bold text-[var(--primary)] mb-8">Personal Insurance</h1>
        <p className="text-xl text-slate-600 max-w-3xl mb-12">
          At Morris & Garritano, we build insurance plans around you and your specific needs. Your personal insurance policies should give you complete confidence that what needs protection is secured. Whether it’s coverage for home, auto, theft, or fire, we’ve got your back.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
             <h2 className="text-3xl font-serif font-bold text-[var(--primary)]">Protect What Matters Most</h2>
             <p className="text-slate-600">
               Your personal assets are the result of hard work and dedication. We offer tailored solutions to protect your home, vehicle, and lifestyle from unexpected events.
             </p>
             <ul className="list-disc pl-5 space-y-2 text-slate-600">
               <li>Homeowners Insurance</li>
               <li>Auto Insurance</li>
               <li>Umbrella Liability</li>
               <li>Valuable Articles</li>
               <li>Flood & Earthquake</li>
             </ul>
             <Button className="bg-[var(--primary)] text-white mt-4">Get a Personal Quote</Button>
          </div>
          <div className="h-[400px] bg-slate-200 rounded-lg overflow-hidden relative">
             {/* Placeholder for personal insurance image */}
             <div className="absolute inset-0 bg-slate-300 flex items-center justify-center text-slate-500">
               Personal Insurance Image
             </div>
          </div>
        </div>
      </div>
    </main>
  );
}
