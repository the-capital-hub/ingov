import SectionLabel from '@/components/ui/SectionLabel'
import FadeUp from '@/components/ui/FadeUp'
import { Lock, FileCheck, ShieldCheck, Cloud } from 'lucide-react'

export default function Security() {
   const pillars = [
      {
         icon: Lock,
         title: 'ISO 27001 Certified',
         desc: 'Information security management audited and certified annually.',
      },
      {
         icon: FileCheck,
         title: 'ISO 9001:2015',
         desc: 'Quality management systems certified for consistent service delivery.',
      },
      {
         icon: ShieldCheck,
         title: 'VAPT Audited',
         desc: 'Regular Vulnerability Assessment & Penetration Testing by auditors.',
      },
      {
         icon: Cloud,
         title: 'Microsoft Azure India',
         desc: 'All data hosted on Azure with India data residency — no data leaves Indian jurisdiction.',
      },
   ]

   return (
      <section className="bg-bgbase py-10 lg:py-16 text-dark relative overflow-hidden" id="security">
         {/* Subtle Light radial gradients for depth */}
         <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-highlight/5 rounded-full blur-[120px] pointer-events-none" />
         <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-card-grad opacity-40 rounded-full blur-[100px] pointer-events-none" />

         <div className="section-inner relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-20">
               <FadeUp delay={0}>
                  <SectionLabel>Enterprise-Grade Security</SectionLabel>
               </FadeUp>
               <FadeUp delay={0.1}>
                  <h2 className="text-4xl md:text-5xl lg:text-5xl font-heading font-black mb-6 leading-tight mt-5 text-dark">
                     Government-Grade Security.<br className="hidden md:block" />
                     <em className="text-highlight italic">India-First</em> Infrastructure.
                  </h2>
               </FadeUp>
            </div>

            {/* 4-card Premium Centered Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
               {pillars.map((p, i) => {
                  const Icon = p.icon
                  return (
                     <FadeUp delay={0.15 * (i + 1)} key={i} className="h-full">
                        <div className="group relative bg-white border border-border lg:hover:border-highlight/30 rounded-2xl p-8 h-full shadow-sm hover:shadow-[0_8px_30px_-12px_rgba(2,132,199,0.15)] transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-default">

                           {/* Subtle top border glow on hover */}
                           <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-highlight/0 to-transparent group-hover:via-highlight/80 transition-all duration-500 opacity-0 group-hover:opacity-100" />

                           <div>
                              {/* Icon container */}
                              <div className="w-14 h-14 rounded-xl bg-bgbase border border-border/80 flex items-center justify-center mb-8 group-hover:bg-highlight/5 group-hover:scale-110 group-hover:border-highlight/30 transition-all duration-300 text-highlight relative shadow-sm group-hover:shadow-[0_0_15px_-3px_rgba(2,132,199,0.2)]">
                                 <Icon className="w-6 h-6" strokeWidth={2.5} />
                              </div>

                              <h3 className="text-dark font-heading font-black text-xl tracking-tight mb-4 group-hover:text-highlight transition-colors duration-300">
                                 {p.title}
                              </h3>
                              <p className="text-muted text-sm leading-relaxed">
                                 {p.desc}
                              </p>
                           </div>
                        </div>
                     </FadeUp>
                  )
               })}
            </div>

            <FadeUp delay={0.8} className="mt-20 text-center max-w-4xl mx-auto">
               <p className="text-muted text-sm md:text-base italic font-medium tracking-wide">
                  <span className="text-highlight font-bold">"CSSD Security Audited &bull; VAPT Penetration Tested &bull; Secure Coding Reviews"</span> <br className="hidden md:block" />
                  <span className="mt-2 block md:inline-block">Security documentation and audit certificates available on request for your procurement committee.</span>
               </p>
            </FadeUp>
         </div>
      </section>
   )
}
