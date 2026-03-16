'use client'

import SectionLabel from '@/components/ui/SectionLabel'
import FadeUp from '@/components/ui/FadeUp'
import CtaButton from '@/components/ui/CtaButton'
import { MonitorX, CircleAlert, ServerCrash, ArrowRight } from 'lucide-react'

const problems = [
  {
    num: '01',
    icon: MonitorX,
    title: 'Built for MNCs,\nNot Ministries',
    desc: 'Generic ERPs require massive workarounds for standard government workflows like treasury mapping.',
    stat: '90%',
    statLabel: 'of ERP features go unused',
  },
  {
    num: '02',
    icon: CircleAlert,
    title: 'Stuck in\nthe Excel Era',
    desc: 'Departments run 80% of their actual process on disconnected spreadsheets despite buying expensive software.',
    stat: '80%',
    statLabel: 'of work still on spreadsheets',
  },
  {
    num: '03',
    icon: ServerCrash,
    title: 'Compliance\nNightmares',
    desc: 'No automated GST returns, manual e-invoicing, and complete lack of built-in compliance dashboards.',
    stat: '0',
    statLabel: 'automated compliance tools',
  },
]

export default function Problem() {
  return (
    <section id="problem" className="relative bg-bgbase py-10 lg:py-16 overflow-hidden">

      {/* Subtle top-left tint */}
      <div className="absolute -top-32 -left-32 w-[480px] h-[480px] rounded-full bg-highlight/5 blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-[360px] h-[360px] rounded-full bg-highlight/5 blur-[80px] pointer-events-none" />

      <div className="section-inner relative z-10">

        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-24">
          <FadeUp delay={0}>
            <SectionLabel>The Problem</SectionLabel>
          </FadeUp>

          <FadeUp delay={0.1}>
            <h2 className="text-4xl md:text-5xl font-heading font-black text-dark mb-6 leading-tight">
              Force-fitting corporate ERPs into<br className="hidden md:block" />
              <em className="text-highlight italic">government workflows doesn't work.</em>
            </h2>
          </FadeUp>

          <FadeUp delay={0.2}>
            <p className="text-muted text-lg leading-relaxed">
              Most departments end up abandoning 90% of their ERP features because they were built for global enterprises, not Indian public sector undertakings.
            </p>
          </FadeUp>
        </div>

        {/* Cards with connector line */}
        <div className="relative">

          {/* Horizontal connector line — desktop only */}
          <div className="hidden md:block absolute top-[3.25rem] left-[calc(16.67%+1.5rem)] right-[calc(16.67%+1.5rem)] h-px bg-gradient-to-r from-transparent via-border to-transparent z-0" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {problems.map((p, i) => {
              const Icon = p.icon
              return (
                <FadeUp delay={0.15 * (i + 1)} key={i}>
                  <div className="group relative bg-bgbase hover:bg-white border border-border hover:border-highlight/30 hover:shadow-[0_8px_40px_-12px_rgba(2,132,199,0.18)] rounded-2xl p-8 h-full flex flex-col gap-6 transition-all duration-300 cursor-default">

                    {/* Ghost number + Icon row */}
                    <div className="flex items-center justify-between">
                      <span className="font-heading font-black text-[5rem] leading-none text-dark/[0.05] select-none group-hover:text-highlight/10 transition-colors duration-300">
                        {p.num}
                      </span>
                      {/* Icon chip — sits on top of connector line on desktop */}
                      <div className="w-12 h-12 rounded-xl bg-white border border-border shadow-sm flex items-center justify-center group-hover:border-highlight/30 group-hover:shadow-[0_0_0_4px_rgba(2,132,199,0.08)] group-hover:scale-110 transition-all duration-300">
                        <Icon className="w-5 h-5 text-highlight" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="font-heading font-black text-dark text-2xl leading-tight whitespace-pre-line">
                      {p.title}
                    </h3>

                    {/* Desc */}
                    <p className="text-muted text-sm leading-relaxed flex-1">
                      {p.desc}
                    </p>

                    {/* Stat strip */}
                    <div className="flex items-center gap-3 pt-5 border-t border-border">
                      <span className="font-heading font-black text-2xl text-highlight">{p.stat}</span>
                      <span className="text-muted text-xs leading-snug max-w-[130px]">{p.statLabel}</span>
                    </div>
                  </div>
                </FadeUp>
              )
            })}
          </div>
        </div>

        {/* CTA */}
        <FadeUp delay={0.6}>
          <div className="mt-14 text-center">
            <CtaButton
              href="#modules"
              variant="outline"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              See how InGov solves this
            </CtaButton>
          </div>
        </FadeUp>

      </div>
    </section>
  )
}
