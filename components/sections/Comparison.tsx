import SectionLabel from '@/components/ui/SectionLabel'
import FadeUp from '@/components/ui/FadeUp'
import { CheckCircle2, XCircle } from 'lucide-react'

export default function Comparison() {
  const tableData = [
    { feature: 'Government Compliance', ingov: 'Pre-built (GST, E-way bill)', generic: 'Customisation Required' },
    { feature: 'Implementation Time', ingov: '6 – 12 Weeks', generic: '6 – 18 Months' },
    { feature: 'Development Cost', ingov: 'Included in SaaS subscription', generic: 'Massive CaPex' },
    { feature: 'Treasury Workflows', ingov: 'Native Support', generic: 'Workaround / Patches' },
    { feature: 'Data Residency', ingov: 'India (Azure)', generic: 'Varies / Extra Cost' },
    { feature: 'Upgrade Cycles', ingov: 'Continuous & Free', generic: 'Expensive Migration Projects' }
  ]

  return (
    <section className="bg-bgbase py-10 lg:py-16 overflow-hidden relative">
      <div className="text-center mb-16">
        <FadeUp delay={0}>
          <SectionLabel>The Alternate Reality</SectionLabel>
        </FadeUp>
        <FadeUp delay={0.1}>
          <h2 className="text-4xl md:text-5xl font-heading font-black text-dark mb-6">
            Why Governments are Ditching<br className="hidden md:block" />
            <em className="text-highlight italic">Legacy ERP Servers</em>
          </h2>
        </FadeUp>
      </div>

      <FadeUp delay={0.3} className="max-w-5xl mx-auto">
        <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-border">
          {/* Header */}
          <div className="grid grid-cols-3 bg-white border-b border-border">
            <div className="p-6 font-heading font-bold text-dark text-lg uppercase hidden md:flex items-center">Features</div>
            <div className="p-6 font-heading font-bold text-dark text-lg uppercase flex md:hidden items-center">Features</div>
            <div className="p-6 bg-highlight text-white font-heading font-black text-xl text-center shadow-[inset_0_-2px_0_rgba(0,0,0,0.1)]">InGov</div>
            <div className="p-6 text-center font-heading font-bold text-muted text-lg border-l border-border bg-gray-50 flex flex-col justify-center">Generic ERPs<span className="text-xs font-normal opacity-70 block mt-1">(SAP, Oracle, etc)</span></div>
          </div>

          {/* Rows */}
          <div className="divide-y divide-border">
            {tableData.map((row, i) => (
              <div key={i} className="grid grid-cols-3 hover:bg-slate-50 transition-colors">
                <div className="p-5 flex items-center text-sm md:text-base font-semibold text-dark border-r border-border bg-white">{row.feature}</div>

                <div className="p-5 flex flex-col items-center justify-center text-center bg-highlight/5 border-r border-border text-highlight text-sm md:text-base font-bold">
                  <CheckCircle2 className="w-5 h-5 mb-2" />
                  {row.ingov}
                </div>

                <div className="p-5 flex flex-col items-center justify-center text-center text-muted text-sm pb-6">
                  <XCircle className="w-5 h-5 mb-2 opacity-40" />
                  {row.generic}
                </div>
              </div>
            ))}
          </div>

          {/* Footer Alert */}
          <div className="bg-highlight/10 p-4 text-center text-sm text-dark font-medium border-t border-border">
            * Generic ERP customizations often create vendor lock-in and make future upgrades nearly impossible.
          </div>
        </div>
      </FadeUp>
    </section>
  )
}
