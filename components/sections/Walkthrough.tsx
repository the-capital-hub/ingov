"use client";
import SectionLabel from "@/components/ui/SectionLabel";
import FadeUp from "@/components/ui/FadeUp";
import CtaButton from "@/components/ui/CtaButton";
import {
	ArrowRight,
	Play,
	Landmark,
	Users,
	LayoutDashboard,
} from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const features = [
	{
		title: "Finance Dashboard - Live Bank Balance to GST Filing",
		desc: "Real-time cash flow, auto-reconciliation, one-click e-invoicing.",
		icon: Landmark,
	},
	{
		title: "Payroll Run - 11,000 Employees Processed in Minutes",
		desc: "Statutory deductions auto-calculated. Salary slips auto-distributed.",
		icon: Users,
	},
	{
		title: "Executive Dashboard - Department KPIs at a Glance",
		desc: "Customisable for IAS officers, HODs, and section-level staff.",
		icon: LayoutDashboard,
	},
];

export default function Walkthrough() {
	const [activeFeature, setActiveFeature] = useState(0);

	return (
		<section
			id="walkthrough"
			className="bg-bgbase py-10 lg:py-16 relative overflow-hidden"
		>
			{/* Decorative background blur */}
			<div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-highlight/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2" />

			<div className="section-inner max-w-7xl mx-auto relative z-10">
				<div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
					{/* Left Content */}
					<div className="w-full lg:w-[45%] flex flex-col items-start text-left">
						<FadeUp delay={0}>
							<SectionLabel>Platform Walkthrough</SectionLabel>
						</FadeUp>
						<FadeUp delay={0.1}>
							<h2 className="text-4xl md:text-5xl lg:text-5xl font-heading font-black text-dark mb-6 leading-tight mt-4">
								See InGov{" "}
								<em className="text-highlight italic font-medium">
									in 3 Minutes
								</em>
							</h2>
						</FadeUp>
						<FadeUp delay={0.2}>
							<p className="text-muted text-lg mb-10 leading-relaxed font-medium">
								Watch how Finance Officers, HR Managers, and Department Heads
								use InGov daily - no jargon, just real workflows.
							</p>
						</FadeUp>

						{/* Feature List */}
						<div className="space-y-4 w-full mb-12">
							{features.map((feature, idx) => {
								const Icon = feature.icon;
								const isActive = activeFeature === idx;
								return (
									<FadeUp delay={0.3 + idx * 0.1} key={idx}>
										<div
											onClick={() => setActiveFeature(idx)}
											className={`
                        flex items-start gap-5 p-5 rounded-2xl cursor-pointer transition-all duration-300 border
                        ${
													isActive
														? "bg-white border-highlight/20 shadow-md scale-[1.02] lg:scale-100 lg:-translate-y-1"
														: "bg-transparent border-transparent hover:bg-white/50 hover:border-border/50"
												}
                      `}
										>
											<div
												className={`
                        w-12 h-12 shrink-0 rounded-xl flex items-center justify-center transition-colors duration-300
                        ${isActive ? "bg-bgbase text-highlight" : "bg-transparent text-muted/50"}
                      `}
											>
												<Icon className="w-6 h-6" />
											</div>
											<div>
												<h4
													className={`font-heading font-bold text-lg mb-1.5 transition-colors duration-300 ${isActive ? "text-dark" : "text-dark/70"}`}
												>
													{feature.title}
												</h4>
												<p
													className={`text-sm leading-relaxed transition-colors duration-300 ${isActive ? "text-muted" : "text-muted/70"}`}
												>
													{feature.desc}
												</p>
											</div>
										</div>
									</FadeUp>
								);
							})}
						</div>

						<FadeUp delay={0.6}>
							<CtaButton
								href="/book-demo"
								variant="primary"
								icon={<ArrowRight className="w-4 h-4 mx-1" />}
								className="px-8 shadow-lg shadow-highlight/20"
							>
								Book a Live Demo Instead
							</CtaButton>
						</FadeUp>
					</div>

					{/* Right Content - Video Container */}
					<div className="w-full lg:w-[55%]">
						<FadeUp delay={0.4} className="w-full relative group">
							{/* Premium video player mockup wrapper */}
							<div className="bg-card-grad rounded-[2.5rem] p-4 sm:p-6 border border-[#cde6fa]/50 shadow-sm relative overflow-hidden transition-all duration-500 lg:hover:-translate-y-2 hover:shadow-[0_30px_60px_rgba(2,132,199,0.15)] group">
								{/* Browser-like top bar */}
								<div className="w-full flex items-center gap-2 pb-4 mb-2 border-b border-[#cde6fa]/50 pl-2">
									<div className="w-3 h-3 rounded-full bg-red-400"></div>
									<div className="w-3 h-3 rounded-full bg-yellow-400"></div>
									<div className="w-3 h-3 rounded-full bg-green-400"></div>
									<div className="ml-4 flex-1 h-6 bg-white/50 rounded-full"></div>
								</div>

								{/* Actual Video area (Placeholder) */}
								<div className="relative w-full aspect-video bg-white rounded-2xl border border-border overflow-hidden shadow-inner flex items-center justify-center">
									{/*  bg-[url('/images/card-bg-light.png')] bg-cover bg-center */}

									{/* Subtle inner overlay */}
									<div className="absolute inset-0 bg-dark/5 group-hover:bg-dark/0 transition-colors duration-500"></div>

									{/* Play Button */}
									<motion.button
										whileHover={{ scale: 1.1 }}
										whileTap={{ scale: 0.95 }}
										className="relative z-10 w-20 h-20 rounded-full bg-highlight text-white flex items-center justify-center shadow-[0_0_0_8px_rgba(2,132,199,0.2)] hover:shadow-[0_0_0_12px_rgba(2,132,199,0.3)] hover:bg-[#0277b5] transition-all duration-300"
									>
										<Play className="w-8 h-8 ml-1" fill="currentColor" />
									</motion.button>

									{/* Fake UI data just to not look completely blank */}
									<div className="absolute bottom-6 left-6 right-6 hidden sm:flex justify-between items-end opacity-40 pointer-events-none">
										<div className="space-y-4 w-full">
											<div className="flex gap-4">
												<div className="w-32 h-20 rounded-xl bg-white border border-border shadow-sm"></div>
												<div className="w-32 h-20 rounded-xl bg-white border border-border shadow-sm"></div>
												<div className="w-32 h-20 rounded-xl bg-white border border-border shadow-sm"></div>
											</div>
											<div className="w-full h-8 bg-white border border-border rounded-lg shadow-sm"></div>
										</div>
									</div>
								</div>
							</div>

							{/* Bottom subtitle text requested by reference */}
							<div className="mt-6 text-center text-muted/80 text-sm font-medium flex items-center justify-center gap-2">
								Click <Play className="w-3 h-3 fill-muted/80" /> to play the{" "}
								{activeFeature === 0
									? "Finance"
									: activeFeature === 1
										? "Payroll"
										: "Executive"}{" "}
								Walkthrough
							</div>
						</FadeUp>
					</div>
				</div>
			</div>
		</section>
	);
}
