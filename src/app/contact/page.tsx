import { Metadata } from "next"
import { ContactForm } from "@/components/contact/ContactForm"
import { GoogleMap } from "@/components/contact/GoogleMap"
import { Mail, MapPin, Phone, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact Us | Catalyst Mergers",
  description: "Get in touch with Catalyst Mergers for expert M&A advisory services. Located in Delhi, India.",
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-50 pb-20">
      {/* Hero Section */}
      <section className="bg-[#0f2d52] text-white py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
              Get in Touch
            </h1>
            <p className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed">
              Ready to discuss your merger or acquisition strategy? Our team of experts is here to guide you through every step of the process.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-6 -mt-10 md:-mt-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Contact Information & Map Column */}
          <div className="lg:col-span-5 space-y-8 order-2 lg:order-1">
            {/* Contact Info Card */}
            <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-100 h-fit">
              <h3 className="text-2xl font-serif font-bold text-[#0f2d52] mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-[#c5a065]/10 p-3 rounded-full shrink-0">
                    <MapPin className="w-6 h-6 text-[#c5a065]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 mb-1">Our Office</h4>
                    <p className="text-slate-600 leading-relaxed">
                      Connaught Place<br />
                      New Delhi, Delhi 110001<br />
                      India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#c5a065]/10 p-3 rounded-full shrink-0">
                    <Phone className="w-6 h-6 text-[#c5a065]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 mb-1">Phone</h4>
                    <p className="text-slate-600">
                      <a href="tel:+911123456789" className="hover:text-[#0f2d52] transition-colors">
                        +91 11 2345 6789
                      </a>
                    </p>
                    <p className="text-sm text-slate-500 mt-1">Mon-Fri, 9am - 6pm IST</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#c5a065]/10 p-3 rounded-full shrink-0">
                    <Mail className="w-6 h-6 text-[#c5a065]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 mb-1">Email</h4>
                    <p className="text-slate-600">
                      <a href="mailto:info@catalystmergers.com" className="hover:text-[#0f2d52] transition-colors">
                        info@catalystmergers.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#c5a065]/10 p-3 rounded-full shrink-0">
                    <Clock className="w-6 h-6 text-[#c5a065]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 mb-1">Business Hours</h4>
                    <p className="text-slate-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-slate-600">Saturday - Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Component */}
            <div className="h-[400px] lg:h-[450px] shadow-sm rounded-lg overflow-hidden">
              <GoogleMap />
            </div>
          </div>

          {/* Contact Form Column */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <ContactForm />
          </div>
        </div>
      </div>
    </main>
  )
}
