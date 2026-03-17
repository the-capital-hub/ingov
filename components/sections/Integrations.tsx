import SectionLabel from "@/components/ui/SectionLabel";
import FadeUp from "@/components/ui/FadeUp";
import {
	Landmark,
	MessageSquare,
	BarChart3,
	FileText,
	CheckCircle2,
	Mail,
	MessageCircle,
	Smartphone,
	AppWindow,
} from "lucide-react";

export default function Integrations() {
	return (
		<section
			className="bg-bgbase py-10 lg:py-24 relative overflow-hidden"
			id="integrations"
		>
			{/* Decorative background glow */}
			<div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-highlight/5 rounded-full blur-[120px] pointer-events-none" />
			<div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-card-grad opacity-40 rounded-full blur-[100px] pointer-events-none" />

			<div className="section-inner relative z-10 max-w-7xl mx-auto">
				{/* Section Header */}
				<div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
					<FadeUp delay={0}>
						<SectionLabel>Seamless Connectivity</SectionLabel>
					</FadeUp>
					<FadeUp delay={0.1}>
						<h2 className="text-4xl md:text-5xl font-heading font-black text-dark mb-6 leading-tight mt-5">
							Plug and Play
							<br className="hidden md:block" />
							<em className="text-highlight italic">Ecosystem Integrations.</em>
						</h2>
					</FadeUp>
					<FadeUp delay={0.2}>
						<p className="text-muted text-lg leading-relaxed">
							InGov connects effortlessly with the systems you already use. From
							direct banking networks to national portal APIs, we ensure your
							data flows securely and accurately without manual intervention.
						</p>
					</FadeUp>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 text-left">
					{/* Column 1: Banking */}
					<FadeUp delay={0.2} className="h-full">
						<div className="bg-white border border-border/60 rounded-3xl p-8 h-full flex flex-col shadow-sm hover:shadow-xl hover:shadow-highlight/5 transition-all duration-500 group relative overflow-hidden">
							{/* Subtle top border glow on hover */}
							<div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-highlight/0 to-transparent group-hover:via-highlight/80 transition-all duration-500 opacity-0 group-hover:opacity-100" />

							<div className="flex items-center gap-4 mb-8">
								<div className="w-14 h-14 rounded-2xl bg-sky-50 text-highlight flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-highlight group-hover:text-white transition-all duration-500">
									<Landmark className="w-7 h-7" strokeWidth={1.5} />
								</div>
								<h3 className="font-heading font-bold text-2xl text-dark">
									Banking
								</h3>
							</div>

							<ul className="space-y-4 mb-8 flex-grow">
								{[
									"Automated Pay-Outs",
									"Collection & Mandates",
									"Real-time Reconciliation",
									"Direct Benefit Transfer (DBT)",
									"Virtual Accounts",
									"Cheque Printing",
									"Fund Allocation Tracking",
									"Multi-Bank Support",
									// "PFMS Integration",
									// "Treasury Single Account (TSA)",
									// "Aadhaar Payment Bridge",
								].map((item) => (
									<li key={item} className="flex items-start gap-3">
										<CheckCircle2 className="w-5 h-5 text-highlight shrink-0 mt-0.5" />
										<span className="text-muted font-medium">{item}</span>
									</li>
								))}
							</ul>

							<div className="pt-6 border-t border-border/50 mt-auto">
								<p className="text-xs font-bold text-muted/70 uppercase tracking-wider mb-4">
									Direct Integrations
								</p>
								<div className="flex flex-wrap gap-3">
									<div className="px-4 py-2.5 rounded-xl border border-slate-100 bg-slate-50 text-sm font-black text-[#ed1c24] tracking-tight hover:border-[#ed1c24]/30 transition-colors cursor-default">
										HDFC BANK
									</div>
									<div className="px-4 py-2.5 rounded-xl border border-slate-100 bg-slate-50 text-sm font-black text-[#8c3123] tracking-tighter hover:border-[#8c3123]/30 transition-colors cursor-default">
										IndusInd Bank
									</div>
								</div>
							</div>
						</div>
					</FadeUp>

					{/* Column 2: Communication */}
					<FadeUp delay={0.3} className="h-full">
						<div className="bg-white border border-border/60 rounded-3xl p-8 h-full flex flex-col shadow-sm hover:shadow-xl hover:shadow-highlight/5 transition-all duration-500 group relative overflow-hidden">
							<div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-highlight/0 to-transparent group-hover:via-highlight/80 transition-all duration-500 opacity-0 group-hover:opacity-100" />

							<div className="flex items-center gap-4 mb-8">
								<div className="w-14 h-14 rounded-2xl bg-sky-50 text-highlight flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-highlight group-hover:text-white transition-all duration-500">
									<MessageSquare className="w-7 h-7" strokeWidth={1.5} />
								</div>
								<h3 className="font-heading font-bold text-2xl text-dark">
									Communication
								</h3>
							</div>

							<p className="text-muted font-medium mb-8">
								Omnichannel notifications and alerts to keep stakeholders
								informed in real-time.
							</p>

							<div className="flex flex-col gap-3 flex-grow">
								<div className="flex items-center gap-3 p-3 rounded-xl border border-slate-100 bg-slate-50 hover:bg-white hover:border-slate-200 transition-colors cursor-default">
									<div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
										<Mail className="w-5 h-5" />
									</div>
									<span className="font-semibold text-dark text-sm">
										Email Delivery
									</span>
								</div>
								<div className="flex items-center gap-3 p-3 rounded-xl border border-slate-100 bg-slate-50 hover:bg-white hover:border-slate-200 transition-colors cursor-default">
									<div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
										<MessageCircle className="w-5 h-5" />
									</div>
									<span className="font-semibold text-dark text-sm">
										WhatsApp Business
									</span>
								</div>
								<div className="flex items-center gap-3 p-3 rounded-xl border border-slate-100 bg-slate-50 hover:bg-white hover:border-slate-200 transition-colors cursor-default">
									<div className="w-10 h-10 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center shrink-0">
										<Smartphone className="w-5 h-5" />
									</div>
									<span className="font-semibold text-dark text-sm">
										SMS Gateway
									</span>
								</div>
								<div className="flex items-center gap-3 p-3 rounded-xl border border-slate-100 bg-slate-50 hover:bg-white hover:border-slate-200 transition-colors cursor-default">
									<div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-600 flex items-center justify-center shrink-0">
										<AppWindow className="w-5 h-5" />
									</div>
									<span className="font-semibold text-dark text-sm">
										Mobile App Push
									</span>
								</div>
							</div>
						</div>
					</FadeUp>

					{/* Column 3: Dashboard & GST */}
					<div className="flex flex-col gap-6 lg:gap-8 h-full">
						{/* Dashboard */}
						<FadeUp delay={0.4} className="flex-1">
							<div className="bg-white border border-border/60 rounded-3xl p-8 h-full flex flex-col shadow-sm hover:shadow-xl hover:shadow-highlight/5 transition-all duration-500 group relative overflow-hidden">
								<div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-highlight/0 to-transparent group-hover:via-highlight/80 transition-all duration-500 opacity-0 group-hover:opacity-100" />

								<div className="flex items-center gap-4 mb-6">
									<div className="w-12 h-12 rounded-2xl bg-sky-50 text-highlight flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-highlight group-hover:text-white transition-all duration-500">
										<BarChart3 className="w-6 h-6" strokeWidth={1.5} />
									</div>
									<h3 className="font-heading font-bold text-xl text-dark leading-tight">
										Analytics &<br />
										Dashboard
									</h3>
								</div>

								<ul className="space-y-3 mt-auto">
									{[
										"Real-time Insights",
										"Data Visualization",
										"Document Management (DMS)",
									].map((item) => (
										<li key={item} className="flex items-center gap-3">
											<div className="w-1.5 h-1.5 rounded-full bg-highlight/50 shrink-0" />
											<span className="text-muted font-medium text-sm">
												{item}
											</span>
										</li>
									))}
								</ul>
							</div>
						</FadeUp>

						{/* GST */}
						<FadeUp delay={0.5} className="flex-1">
							<div className="bg-white border border-border/60 rounded-3xl p-8 h-full flex flex-col shadow-sm hover:shadow-xl hover:shadow-highlight/5 transition-all duration-500 group relative overflow-hidden">
								<div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-highlight/0 to-transparent group-hover:via-highlight/80 transition-all duration-500 opacity-0 group-hover:opacity-100" />

								<div className="flex items-center gap-4 mb-6">
									<div className="w-12 h-12 rounded-2xl bg-sky-50 text-highlight flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-highlight group-hover:text-white transition-all duration-500">
										<FileText className="w-6 h-6" strokeWidth={1.5} />
									</div>
									<h3 className="font-heading font-bold text-xl text-dark leading-tight">
										GST Portal
										<br />
										Integration
									</h3>
								</div>

								<ul className="space-y-3 mb-6">
									{[
										"GSTR-1 & 3B Filing",
										"Vendor Validation",
										"TDS & TCS Returns",
										"Ledger Reconciliation",
									].map((item) => (
										<li key={item} className="flex items-center gap-3">
											<div className="w-1.5 h-1.5 rounded-full bg-highlight/50 shrink-0" />
											<span className="text-muted font-medium text-sm">
												{item}
											</span>
										</li>
									))}
								</ul>

								<div className="flex flex-wrap gap-3 mt-auto">
									<div className="px-4 py-2 rounded-xl bg-slate-50 border border-slate-100 text-dark font-semibold text-sm hover:bg-highlight hover:text-white hover:border-highlight transition-colors cursor-default">
										E-Invoice
									</div>
									<div className="px-4 py-2 rounded-xl bg-slate-50 border border-slate-100 text-dark font-semibold text-sm hover:bg-highlight hover:text-white hover:border-highlight transition-colors cursor-default">
										E-WayBill
									</div>
								</div>
							</div>
						</FadeUp>
					</div>
				</div>
			</div>
		</section>
	);
}
