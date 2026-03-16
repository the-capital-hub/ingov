import AnimatedCounter from '@/components/ui/AnimatedCounter'

const stats = [
  { value: '7+',       label: 'Government Enterprises' },
  { value: '11,000+',  label: 'Active Payroll Users' },
  { value: '₹16Cr+',   label: 'Monthly Salaries Processed' },
  { value: '90+',      label: 'Net Promoter Score' },
]

export default function StatsBar() {
  return (
    <section className="bg-bgbase py-10 lg:py-16 relative z-20 shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.05)]">
      <div className="section-inner flex flex-wrap lg:flex-nowrap items-center justify-center gap-y-10">
        {stats.map((s, i) => (
          <>
            <div key={i} className="flex flex-col items-center justify-center px-8 w-1/2 lg:w-auto lg:flex-1">
              <AnimatedCounter value={s.value} label={s.label} />
            </div>
            {/* Centered divider between consecutive stats — not after the last one */}
            {i < stats.length - 1 && (
              <div
                key={`divider-${i}`}
                className="hidden lg:block self-stretch w-px bg-border shrink-0"
              />
            )}
          </>
        ))}
      </div>
    </section>
  )
}
