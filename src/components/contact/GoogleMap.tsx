"use client"

import { cn } from "@/lib/utils"

interface GoogleMapProps {
  className?: string
}

export function GoogleMap({ className }: GoogleMapProps) {
  return (
    <div className={cn("w-full h-full min-h-[400px] rounded-lg overflow-hidden border border-slate-200 shadow-sm bg-slate-100", className)}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.83923192776!2d77.06889754721612!3d28.52758200617607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0, minHeight: "400px" }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Catalyst Mergers Location - Delhi"
        className="w-full h-full object-cover"
        aria-label="Google Map showing Catalyst Mergers location in Delhi"
      />
    </div>
  )
}
