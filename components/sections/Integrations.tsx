import SectionLabel from '@/components/ui/SectionLabel'
import FadeUp from '@/components/ui/FadeUp'

export default function Integrations() {
  return (
    <section className="bg-bgbase py-10 lg:py-16 relative overflow-hidden" id="integrations">
      
      {/* Decorative background glow */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-highlight/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-card-grad opacity-40 rounded-full blur-[100px] pointer-events-none" />

      <div className="section-inner relative z-10 max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <FadeUp delay={0}>
            <SectionLabel>Seamless Connectivity</SectionLabel>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="text-4xl md:text-5xl font-heading font-black text-dark mb-6 leading-tight mt-5">
              Plug and Play<br className="hidden md:block" />
              <em className="text-highlight italic">Ecosystem Integrations.</em>
            </h2>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="text-muted text-lg leading-relaxed">
              InGov connects effortlessly with the systems you already use. From direct banking networks to national portal APIs, we ensure your data flows securely and accurately without manual intervention.
            </p>
          </FadeUp>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {/* Banking */}
          <FadeUp delay={0.2} className="h-full">
            <div className="group bg-card-grad border border-[#cde6fa]/50 rounded-[2rem] p-8 h-full flex flex-col items-center shadow-sm lg:hover:border-highlight/30 hover:shadow-[0_8px_30px_-12px_rgba(2,132,199,0.12)] transition-all duration-300 relative overflow-hidden">
               {/* Subtle top border glow on hover */}
               <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-highlight/0 to-transparent group-hover:via-highlight/80 transition-all duration-500 opacity-0 group-hover:opacity-100" />
              
              <h3 className="font-heading font-black text-dark text-xl mb-8 flex items-center justify-center gap-3 uppercase tracking-wide group-hover:text-highlight transition-colors duration-300">
                <span className="scale-110">🏦</span> BANKING
              </h3>
              <div className="space-y-4 w-full">
                <div className="bg-white rounded-full py-4 px-6 text-center font-bold text-dark shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300 cursor-default">Pay-Out</div>
                <div className="bg-white rounded-full py-4 px-6 text-center font-bold text-dark shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300 cursor-default">Collection</div>
                <div className="bg-white rounded-full py-4 px-6 text-center font-bold text-dark shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300 cursor-default">Reconciliation</div>
                <div className="flex flex-col gap-4 mt-8 pt-6 border-t border-highlight/10">
                  <div className="bg-white rounded-full py-3 px-6 shadow-sm border border-gray-100 flex items-center justify-center hover:scale-[1.02] transition-transform duration-300">
                    <span className="font-black text-[#ed1c24] text-lg tracking-tight">HDFC BANK</span>
                  </div>
                  <div className="bg-white rounded-full py-3 px-6 shadow-sm border border-gray-100 flex items-center justify-center hover:scale-[1.02] transition-transform duration-300">
                    <span className="font-black text-[#8c3123] text-lg tracking-tighter">IndusInd Bank</span>
                  </div>
                </div>
              </div>
            </div>
          </FadeUp>

          {/* Communication */}
          <FadeUp delay={0.3} className="h-full">
            <div className="group bg-card-grad border border-[#cde6fa]/50 rounded-[2rem] p-8 h-full flex flex-col items-center shadow-sm lg:hover:border-highlight/30 hover:shadow-[0_8px_30px_-12px_rgba(2,132,199,0.12)] transition-all duration-300 relative overflow-hidden">
               {/* Subtle top border glow on hover */}
               <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-highlight/0 to-transparent group-hover:via-highlight/80 transition-all duration-500 opacity-0 group-hover:opacity-100" />
              
              <h3 className="font-heading font-black text-dark text-xl mb-8 flex items-center justify-center gap-3 uppercase tracking-wide group-hover:text-highlight transition-colors duration-300">
                <span className="scale-110">📢</span> COMMUNICATION
              </h3>
              <div className="space-y-4 w-full flex-grow">
                <div className="bg-white rounded-full py-4 px-6 text-center font-bold text-dark shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300 cursor-default border border-transparent hover:border-highlight/20">Email</div>
                <div className="bg-white rounded-full py-4 px-6 text-center font-bold text-dark shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300 cursor-default border border-transparent hover:border-highlight/20">SMS</div>
                <div className="bg-white rounded-full py-4 px-6 text-center font-bold text-dark shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300 cursor-default border border-transparent hover:border-highlight/20 text-[#25D366]">Whatsapp</div>
                <div className="bg-white rounded-full py-4 px-6 text-center font-bold text-dark shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300 cursor-default border border-transparent hover:border-highlight/20">Mobile App</div>
                <div className="bg-white rounded-full py-4 px-6 text-center font-bold text-dark shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300 cursor-default border border-transparent hover:border-highlight/20">Chat</div>
              </div>
            </div>
          </FadeUp>

          {/* Dashboard & GST */}
          <div className="flex flex-col gap-6">
            <FadeUp delay={0.4} className="h-full">
              <div className="group bg-card-grad border border-[#cde6fa]/50 rounded-[2rem] p-8 h-full flex flex-col items-center shadow-sm lg:hover:border-highlight/30 hover:shadow-[0_8px_30px_-12px_rgba(2,132,199,0.12)] transition-all duration-300 relative overflow-hidden">
                {/* Subtle top border glow on hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-highlight/0 to-transparent group-hover:via-highlight/80 transition-all duration-500 opacity-0 group-hover:opacity-100" />
                
                <h3 className="font-heading font-black text-dark text-[17px] mb-6 flex items-center justify-center gap-2 uppercase tracking-wide leading-snug group-hover:text-highlight transition-colors duration-300">
                  <span className="scale-110">📊</span> DASHBOARD &amp; ANALYTICS
                </h3>
                <div className="space-y-4 w-full">
                  <div className="bg-white rounded-full py-4 px-4 text-center font-bold text-dark shadow-sm text-[15px] hover:-translate-y-1 hover:shadow-md transition-all duration-300 cursor-default">Real-time Insights</div>
                  <div className="bg-white rounded-full py-4 px-4 text-center font-bold text-dark shadow-sm text-[15px] hover:-translate-y-1 hover:shadow-md transition-all duration-300 cursor-default">Data Visualization</div>
                  <div className="bg-white rounded-full py-4 px-4 text-center font-bold text-dark shadow-sm text-[15px] leading-tight hover:-translate-y-1 hover:shadow-md transition-all duration-300 cursor-default">DMS</div>
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={0.5}>
              <div className="group bg-card-grad border border-[#cde6fa]/50 rounded-[2rem] p-8 flex flex-col items-center shadow-sm lg:hover:border-highlight/30 hover:shadow-[0_8px_30px_-12px_rgba(2,132,199,0.12)] transition-all duration-300 relative overflow-hidden">
                {/* Subtle top border glow on hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-highlight/0 to-transparent group-hover:via-highlight/80 transition-all duration-500 opacity-0 group-hover:opacity-100" />                
                
                <h3 className="font-heading font-black text-dark text-lg mb-6 flex items-center justify-center gap-2 uppercase tracking-wide group-hover:text-highlight transition-colors duration-300">
                  <span className="scale-110">🧾</span> GST PORTAL
                </h3>
                <div className="space-y-4 w-full flex flex-row sm:flex-col lg:flex-row gap-4 sm:gap-4 lg:gap-4">
                  <div className="w-full bg-white rounded-full py-3 px-2 text-center font-bold text-dark shadow-sm text-[14px] hover:-translate-y-1 hover:shadow-md transition-all duration-300 cursor-default border border-transparent hover:border-highlight/20">E-Invoice</div>
                  <div className="w-full bg-white rounded-full py-3 px-2 text-center font-bold text-dark shadow-sm text-[14px] hover:-translate-y-1 hover:shadow-md transition-all duration-300 cursor-default border border-transparent hover:border-highlight/20">E-WayBill</div>
                </div>
              </div>
            </FadeUp>
          </div>

        </div>
      </div>
    </section>
  )
}
