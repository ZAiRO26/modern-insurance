import { Button } from "@/components/ui/button";

export default function EmployeeBenefits() {
  return (
    <main className="min-h-screen pt-[140px] pb-24">
      <div className="container-custom">
        <h1 className="text-5xl font-serif font-bold text-[var(--primary)] mb-8">Employee Benefits</h1>
        <p className="text-xl text-slate-600 max-w-3xl mb-12">
          We provide a broad range of products for group employee benefit programs and are licensed to represent every major carrier. Find support in learning what you can offer your teams while managing your benefits plan with ease.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
             <h2 className="text-3xl font-serif font-bold text-[var(--primary)]">Invest in Your People</h2>
             <p className="text-slate-600">
               Attract and retain top talent with a competitive benefits package. We help you navigate the complex landscape of healthcare, retirement, and wellness programs to build a culture of care.
             </p>
             <ul className="list-disc pl-5 space-y-2 text-slate-600">
               <li>Group Health Insurance</li>
               <li>Dental & Vision</li>
               <li>Life & Disability</li>
               <li>Wellness Programs</li>
               <li>Compliance & HR Support</li>
             </ul>
             <Button className="bg-[var(--primary)] text-white mt-4">Explore Benefit Plans</Button>
          </div>
          <div className="h-[400px] bg-slate-200 rounded-lg overflow-hidden relative">
             {/* Placeholder for benefits image */}
             <div className="absolute inset-0 bg-slate-300 flex items-center justify-center text-slate-500">
               Employee Benefits Image
             </div>
          </div>
        </div>
      </div>
    </main>
  );
}
