import SectionLabel from "@/components/ui/SectionLabel";
import FadeUp from "@/components/ui/FadeUp";
import CtaButton from "@/components/ui/CtaButton";
import { ArrowRight, FileCheck, Landmark, ShieldEllipsis } from "lucide-react";
import Image from "next/image";

const modules = [
	{
		title: "Finance & Accounting",
		desc: "Clean books, full compliance, real-time reports. Never chase numbers again.",
		features: [
			"Project & branch based accounting",
			"GST filing & e-invoicing compliance",
			"Consolidated financial reports",
			"HDFC & IndusInd bank integration",
			"Budget management & tracking",
		],
		image: "/images/modules/finance-accounting-img.png",
		tag: "FINANCE",
	},
	{
		title: "HRMS & Payroll",
		desc: "From attendance to payslips, handle your entire HR lifecycle with ease.",
		features: [
			"Processes 11,000+ salaries monthly",
			"Leave & attendance tracking",
			"Payroll with statutory compliance",
			"Employee self-service portal",
			"Organisation & personnel management",
		],
		image: "/images/modules/hrms-payroll-img.png",
		tag: "HR",
	},
	{
		title: "Inventory Management",
		desc: "Complete visibility into stock across all your locations.",
		features: [
			"Procurement management",
			"Warehouse data management",
			"Material forecasting",
			"Vendor record management",
			"Sales order processing",
		],
		image: "/images/modules/inventory-management-img.png",
		tag: "SUPPLY CHAIN",
	},
	{
		title: "Asset Management",
		desc: "Track the full lifecycle of capital and operational assets seamlessly.",
		features: [
			"Digital asset lifecycle tracking",
			"Asset procurement & card management",
			"Transaction & depreciation tracking",
			"Maintenance scheduling",
			"Master data setup",
		],
		image: "/images/modules/asset-management-img.png",
		tag: "OPERATIONS",
	},
	{
		title: "Project Management",
		desc: "Keep departmental initiatives on-track and clearly documented.",
		features: [
			"Task management",
			"Resource allocation",
			"Payment tracking",
			"Progress monitoring",
			"Multi-project dashboards",
		],
		image: "/images/modules/project-management-img.png",
		tag: "EXECUTION",
	},
	{
		title: "Dashboard & Analytics",
		desc: "Data-driven insights for faster, highly confident decision-making.",
		features: [
			"Real-time leadership dashboards",
			"Predictive analytics",
			"Custom data visualisation",
			"Performance tracking tracking",
			"Document management system",
		],
		image: "/images/modules/mockup-img.png", // Using general mockup since no specific dashboard image exists.
		tag: "LEADERSHIP",
	},
];

export default function Modules() {
	return (
		<section
			id="modules"
			className="bg-bgbase py-10 lg:py-16 relative overflow-hidden"
		>
			<div className="section-inner max-w-7xl mx-auto">
				<div className="text-center mb-16 max-w-3xl mx-auto">
					<FadeUp delay={0}>
						<SectionLabel>What's Inside</SectionLabel>
					</FadeUp>
					<FadeUp delay={0.1}>
						<h2 className="text-4xl md:text-5xl lg:text-5xl font-heading font-black text-dark mb-6 leading-tight mt-5">
							Six Integrated Modules,
							<br className="hidden md:block" />
							One Unified <em className="text-highlight italic">Platform</em>
						</h2>
					</FadeUp>
					<FadeUp delay={0.2}>
						<p className="mx-auto text-muted text-lg leading-relaxed">
							Every module is built precisely for the strict workflows,
							compliance requirements, and reporting needs of massive Indian
							government departments.
						</p>
					</FadeUp>
				</div>

				{/* Large Alternating Modular Cards */}
				<div className="space-y-16 md:space-y-16 mb-16">
					{modules.map((m, i) => {
						const isEven = i % 2 === 0;

						return (
							<FadeUp delay={0.2} key={i}>
								<div
									className={`flex flex-col gap-12 lg:gap-24 items-center ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"}`}
								>
									{/* Text Content Side */}
									<div className="w-full lg:w-1/2 flex flex-col items-start text-left">
										{/* <div className="inline-block text-xs font-bold px-4 py-1.5 bg-bgbase border border-border text-highlight rounded-full mb-6 tracking-widest uppercase shadow-sm">
                      {m.tag}
                    </div> */}

										<h3 className="font-heading font-black text-dark text-3xl md:text-4xl mb-6 tracking-tight">
											{m.title}
										</h3>

										<p className="text-muted text-lg mb-10 leading-relaxed font-medium">
											{m.desc}
										</p>

										<ul className="space-y-5 mb-12">
											{m.features.map((f, idx) => (
												<li
													key={idx}
													className="flex items-center gap-4 text-base text-dark"
												>
													<div className="w-2 h-2 rounded-full bg-highlight shrink-0 shadow-[0_0_8px_rgba(2,132,199,0.8)]" />
													<span className="leading-snug">{f}</span>
												</li>
											))}
										</ul>

										<CtaButton
											href="/book-demo"
											variant="primary"
											icon={<ArrowRight className="w-4 h-4 mx-1" />}
											className="px-8"
										>
											Learn More
										</CtaButton>
									</div>

									{/* Image Side */}
									<div className="w-full lg:w-1/2 group">
										<div className="bg-card-grad rounded-[2.5rem] p-4 sm:p-8 border border-[#cde6fa]/50 shadow-sm object-cover relative overflow-hidden hover:shadow-[0_20px_40px_rgba(2,132,199,0.15)] transition-all duration-500 lg:hover:-translate-y-2 lg:hover:scale-[1.02]">
											{/* Subtle hover gradient wash */}
											<div className="absolute inset-0 bg-highlight/0 group-hover:bg-highlight/5 transition-colors duration-500 z-0 pointer-events-none" />

											<Image
												src={m.image}
												alt={`${m.title} Interface`}
												width={800}
												height={600}
												className="w-full h-auto rounded-xl relative z-10 drop-shadow-md group-hover:drop-shadow-xl transition-all duration-500"
											/>
										</div>
									</div>
								</div>
							</FadeUp>
						);
					})}
				</div>

				{/* Future Extensibility Big Card */}
				<FadeUp delay={0.3}>
					<div className="relative overflow-hidden bg-card-grad border border-[#cde6fa]/50 rounded-[2.5rem] p-10 md:p-16 shadow-sm max-w-5xl mx-auto flex flex-col items-center text-center">
						<div className="inline-flex items-center justify-center p-4 bg-white rounded-2xl shadow-sm text-highlight mb-8 border border-border">
							<ShieldEllipsis className="w-10 h-10" strokeWidth={2} />
						</div>

						<h3 className="font-heading font-black text-dark text-3xl md:text-5xl mb-6 tracking-tight">
							Future Extensibility
						</h3>
						<p className="text-muted text-lg max-w-2xl mx-auto leading-relaxed">
							The InGov architecture is designed to grow with you. Our core
							modules plug directly into powerful upcoming extensions to
							continually modernize your operations.
						</p>

						<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-3xl mt-10">
							{/* extension 1 */}
							<div className="bg-white border border-border rounded-3xl p-8 flex flex-col items-center hover:border-highlight/30 hover:shadow-md transition-all duration-300 text-center group cursor-default">
								<div className="w-14 h-14 rounded-full bg-bgbase flex items-center justify-center text-highlight mb-6 group-hover:scale-110 group-hover:bg-highlight/10 transition-transform duration-300">
									<FileCheck className="w-6 h-6" />
								</div>
								<h4 className="font-heading font-black text-dark text-xl mb-3 group-hover:text-highlight transition-colors duration-300">
									Tender Management
								</h4>
								<p className="text-muted text-sm leading-relaxed max-w-[250px]">
									End-to-end digital lifecycle handling for public procurements.
								</p>
							</div>

							{/* extension 2 */}
							<div className="bg-white border border-border rounded-3xl p-8 flex flex-col items-center hover:border-highlight/30 hover:shadow-md transition-all duration-300 text-center group cursor-default">
								<div className="w-14 h-14 rounded-full bg-bgbase flex items-center justify-center text-highlight mb-6 group-hover:scale-110 group-hover:bg-highlight/10 transition-transform duration-300">
									<Landmark className="w-6 h-6" />
								</div>
								<h4 className="font-heading font-black text-dark text-xl mb-3 group-hover:text-highlight transition-colors duration-300">
									Govt Fund Management
								</h4>
								<p className="text-muted text-sm leading-relaxed max-w-[250px]">
									Secure, auditable allocation and tracking of state grants.
								</p>
							</div>
						</div>
					</div>
				</FadeUp>
			</div>
		</section>
	);
}
