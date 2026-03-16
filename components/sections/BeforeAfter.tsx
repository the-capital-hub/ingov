import SectionLabel from '@/components/ui/SectionLabel'
import FadeUp from '@/components/ui/FadeUp'
import { XCircle, CheckCircle2 } from 'lucide-react'

export default function BeforeAfter() {
  const points = [
    { before: 'Manual Excel payroll leading to 120+ hrs spent', after: 'Payroll processed in under 2 hours', highlighted: true },
    { before: 'Disconnected finance and HR systems', after: 'Unified ERP platform with synced data' },
    { before: 'GST filing takes multiple days full of errors', after: 'Automated 1-click GST compliance' },
    { before: 'Asset registers managed through manual paperwork', after: 'Digital asset lifecycle tracking end-to-end' },
    { before: 'Weekly MIS reports built manually by analysts', after: 'Real-time dashboards for leadership' },
  ]

  return (
    <section className="bg-bgbase py-10 lg:py-16 relative overflow-hidden" id="before-after">
      <div className="absolute top-0 right-0 w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] bg-highlight/10 rounded-full blur-[100px] -z-10 translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] bg-highlight/5 rounded-full blur-[100px] -z-10 -translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="section-inner">
        <div className="text-center mb-16">
          <FadeUp delay={0}>
            <SectionLabel>The Transformation</SectionLabel>
          </FadeUp>

          <FadeUp delay={0.1}>
            <h2 className="text-4xl md:text-5xl font-heading font-black text-dark mb-6">
              Life <span className="text-muted opacity-80 line-through decoration-muted/50">Before</span> vs <span className="text-highlight italic">After InGov</span>
            </h2>
          </FadeUp>

          <FadeUp delay={0.2} className="max-w-xl mx-auto text-muted text-lg leading-relaxed">
            See how traditional government operations transform under India's most powerful purpose built SaaS platform.
          </FadeUp>
        </div>

        <div className="max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl bg-white border border-border">
          {/* Header Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-border bg-white text-center font-heading font-bold text-xl uppercase tracking-widest text-dark">
            <div className="p-6 md:p-8 flex items-center justify-center gap-3">
              <span className="w-3 h-3 rounded-full bg-muted" /> Before InGov
            </div>
            <div className="p-6 md:p-8 flex items-center justify-center gap-3 bg-highlight text-white shadow-[inset_0_-4px_rgba(0,0,0,0.1)]">
              <span className="w-3 h-3 rounded-full bg-white animate-pulse" /> With InGov
            </div>
          </div>

          {/* Points */}
          <div className="divide-y divide-border">
            {points.map((p, i) => (
              <FadeUp delay={i * 0.1} key={i}>
                <div className={`grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-border transition-colors hover:bg-slate-50 ${p.highlighted ? 'bg-highlight/5' : ''}`}>
                  {/* Before */}
                  <div className="p-6 md:p-8 flex items-start gap-4">
                    <XCircle className="w-6 h-6 shrink-0 text-muted/60 mt-0.5" />
                    <p className="text-muted leading-relaxed font-medium md:text-lg">{p.before}</p>
                  </div>
                  {/* After */}
                  <div className={`p-6 md:p-8 flex items-start gap-4 ${p.highlighted ? 'bg-highlight/10 text-highlight' : ''}`}>
                    <CheckCircle2 className="w-6 h-6 shrink-0 text-highlight mt-0.5" />
                    <p className={`leading-relaxed font-semibold md:text-lg ${p.highlighted ? 'text-highlight' : 'text-dark'}`}>{p.after}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>

        <FadeUp delay={0.6} className="mt-16 text-center">
          <p className="font-heading italic text-muted mb-6">"Our compliance reporting time dropped by 60% in the first quarter after go-live."</p>
        </FadeUp>
      </div>
    </section>
  )
}
