import SectionLabel from '@/components/ui/SectionLabel'
import FadeUp from '@/components/ui/FadeUp'
import { TrendingDown, Clock, AlertTriangle, FileCheck, ArrowRight } from 'lucide-react'

export default function ROIImpact() {
  const items = [
    {
      title: 'Payroll Processing Time',
      icon: Clock,
      before: '~120 hrs/mo',
      beforeLabel: 'spent manually',
      after: '< 2 hrs/mo',
      afterLabel: 'automated via InGov',
    },
    {
      title: 'GST Filing Process',
      icon: FileCheck,
      before: '~80 hrs/qtr',
      beforeLabel: 'cross-checking ledgers',
      after: '1-Click',
      afterLabel: 'native integration',
    },
    {
      title: 'Audit Preparation',
      icon: TrendingDown,
      before: '~21 days/yr',
      beforeLabel: 'collecting physical records',
      after: '< 3 days/yr',
      afterLabel: 'single source of truth',
    },
    {
      title: 'Compliance Risk Exposure',
      icon: AlertTriangle,
      before: '₹2-5 Lakh',
      beforeLabel: 'average penalty exposure',
      after: 'Zero Exposure',
      afterLabel: 'preventative alerts built-in',
    }
  ]

  return (
    <section id="roi-impact" className="bg-bgbase py-10 lg:py-16 text-dark overflow-hidden relative">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-1/3 h-[500px] bg-card-grad opacity-30 rounded-bl-[100px] pointer-events-none" />
      <div className="absolute -left-40 top-1/3 w-[400px] h-[400px] bg-highlight/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="section-inner relative z-10">
        {/* Header area */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-20">
          <div className="max-w-2xl">
            <FadeUp delay={0}>
              <SectionLabel>ROI & Impact</SectionLabel>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="text-4xl md:text-5xl font-heading font-black mb-6 leading-[1.1] mt-5">
                Typical 500-Employee<br />
                <em className="text-highlight italic">Department Impact</em>
              </h2>
            </FadeUp>
            <FadeUp delay={0.2}>
              <p className="text-muted text-lg leading-relaxed max-w-xl">
                The efficiency gains multiply with scale. From time saved on clerical work to eliminating compliance penalties, InGov pays for itself within the first quarter.
              </p>
            </FadeUp>
          </div>

          <FadeUp delay={0.3} className="shrink-0 bg-bgbase border border-border/60 rounded-3xl p-8 lg:p-10 shadow-sm relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-1 h-full bg-highlight group-hover:w-2 transition-all duration-300" />
            <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-highlight/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />
            <div className="relative">
              <div className="font-body text-6xl font-black text-dark mb-3 tracking-tight">300<span className="text-highlight">+</span></div>
              <div className="text-dark font-bold uppercase tracking-widest text-sm mb-2">Operational Hrs Saved</div>
              <div className="text-muted text-sm font-medium">Annually per department</div>
            </div>
          </FadeUp>
        </div>

        {/* List-based Layout instead of Cards */}
        <div className="flex flex-col border-t border-border">
          {items.map((item, i) => {
            const Icon = item.icon
            return (
              <FadeUp delay={0.1 * (i + 1)} key={i}>
                <div className="group flex flex-col lg:flex-row lg:items-center py-8 lg:py-10 border-b border-border gap-8 lg:gap-12 hover:bg-bgbase/40 transition-colors px-4 -mx-4 rounded-2xl cursor-default">

                  {/* Icon & Title */}
                  <div className="flex items-center gap-6 lg:w-[35%]">
                    <div className="w-14 h-14 rounded-2xl bg-white border border-border flex items-center justify-center text-highlight shrink-0 shadow-sm group-hover:scale-110 group-hover:border-highlight/30 transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-heading font-bold text-2xl text-dark leading-tight">{item.title}</h3>
                  </div>

                  {/* Before Stat */}
                  <div className="lg:w-[30%] lg:border-l lg:border-border/60 lg:pl-10 relative">
                    <div className="text-sm font-bold text-muted uppercase tracking-wider mb-2">Before</div>
                    <div className="flex flex-col">
                      <span className="font-mono text-xl text-muted/70 line-through decoration-muted/40 mb-1">{item.before}</span>
                      <span className="text-sm text-muted">{item.beforeLabel}</span>
                    </div>
                  </div>

                  {/* Arrow Divider (Desktop only) */}
                  <div className="hidden lg:flex items-center justify-center -mx-4 text-highlight/40 group-hover:translate-x-2 group-hover:text-highlight transition-all duration-300">
                    <ArrowRight className="w-6 h-6" />
                  </div>

                  {/* After Stat (With InGov) */}
                  <div className="lg:w-[35%] lg:border-l-2 lg:border-highlight/30 lg:pl-10 relative overflow-hidden bg-bgbase lg:bg-transparent p-5 rounded-xl lg:p-0 lg:rounded-none mt-4 lg:mt-0">
                    {/* Animated left border on desktop hover */}
                    <div className="hidden lg:block absolute left-[-2px] top-0 bottom-0 w-[2px] bg-highlight scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-500 ease-out" />

                    <div className="text-sm font-bold text-highlight uppercase tracking-wider mb-2 flex items-center gap-2">
                      With InGov
                    </div>
                    <div className="flex flex-col">
                      <span className="font-body font-black text-3xl text-dark mb-1">{item.after}</span>
                      <span className="text-sm font-medium text-dark/70">{item.afterLabel}</span>
                    </div>
                  </div>

                </div>
              </FadeUp>
            )
          })}
        </div>

      </div>
    </section>
  )
}
