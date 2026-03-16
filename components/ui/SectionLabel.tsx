interface SectionLabelProps { children: React.ReactNode }

export default function SectionLabel({ children }: SectionLabelProps) {
  return (
    <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase
                     text-highlight bg-white border border-border px-4 py-1.5 rounded-full mb-4 shadow-sm">
      {children}
    </span>
  )
}
