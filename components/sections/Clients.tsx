import FadeUp from '@/components/ui/FadeUp'
import SectionLabel from '@/components/ui/SectionLabel'

export default function Clients() {
  const testimonials = [
    {
      quote: "Before InGov, payroll processing took nearly a week every month. Now we process salaries for more than 3,000 employees in under two hours with zero errors.",
      author: "FINANCE CONTROLLER",
      org: "Haryana Housing Board",
      initials: "FC"
    },
    {
      quote: "The dashboard module transformed leadership decision making. What previously required weekly MIS reports is now available in real time.",
      author: "IT HEAD",
      org: "HVPN",
      initials: "IH"
    },
    {
      quote: "Implementation was seamless. The team mapped every workflow before configuration and we went live in six weeks.",
      author: "DEPUTY DIRECTOR",
      org: "GMDA",
      initials: "DD"
    }
  ]

  return (
    <section id="clients" className="bg-bgbase py-10 lg:py-16 relative overflow-hidden">
      {/* Decorative blurry gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-highlight/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-card-grad opacity-40 rounded-full blur-[100px] pointer-events-none" />

      <div className="section-inner relative z-10 max-w-[85rem] mx-auto">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <FadeUp delay={0}>
            <SectionLabel>Client Success Stories</SectionLabel>
          </FadeUp>

          <FadeUp delay={0.1}>
            <h2 className="text-4xl md:text-5xl font-heading font-black text-dark mb-6 leading-tight mt-5">
              Trusted by leading<br className="hidden md:block" />
              <em className="text-highlight italic"> government departments.</em>
            </h2>
          </FadeUp>

          <FadeUp delay={0.2}>
            <p className="text-muted text-lg leading-relaxed">
              Discover how forward-thinking departments are using InGov to eliminate manual errors, streamline compliance, and build a transparent digital infrastructure.
            </p>
          </FadeUp>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {testimonials.map((t, idx) => (
            <FadeUp delay={0.1 * (idx + 1)} key={idx} className="h-full">
              <div className="group bg-card-grad border border-[#cde6fa]/50 lg:hover:border-highlight/30 rounded-3xl p-8 shadow-sm hover:shadow-[0_8px_30px_-12px_rgba(2,132,199,0.12)] h-full flex flex-col relative overflow-hidden transition-all duration-300">

                {/* Subtle top border glow on hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-highlight/0 to-transparent group-hover:via-highlight/80 transition-all duration-500 opacity-0 group-hover:opacity-100" />

                <div className="text-highlight opacity-10 absolute -top-4 -right-2 font-heading font-black text-9xl leading-none select-none">”</div>

                <p className="text-dark font-medium italic mb-8 relative z-10 font-heading leading-relaxed flex-grow text-[16px]">
                  "{t.quote}"
                </p>

                <div className="mt-auto relative z-10 w-full flex items-center gap-4">
                  {/* Avatar / Portrait Fallback */}
                  <div className="w-12 h-12 shrink-0 rounded-full border border-bgbase bg-card-grad text-highlight font-heading font-black flex items-center justify-center text-lg shadow-sm group-hover:shadow-md transition-shadow duration-300">
                    {t.initials}
                  </div>

                  {/* Author Details */}
                  <div className="flex flex-col">
                    <h4 className="font-bold text-dark text-[12px] uppercase tracking-wider mb-1 leading-tight">{t.author}</h4>
                    <h5 className="text-[12px] font-bold text-highlight tracking-wide leading-tight">{t.org}</h5>
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

      </div>
    </section>
  )
}
