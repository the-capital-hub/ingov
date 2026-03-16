"use client";

import { useState } from "react";
import {
	Check,
	Lock,
	Shield,
	Building2,
	Users,
	TrendingUp,
	ChevronRight,
	ChevronDown,
} from "lucide-react";

const MODULE_OPTIONS = [
	"Finance & Accounting",
	"HRMS & Payroll",
	"Inventory Management",
	"Asset Management",
	"Project Management",
	"Dashboard & Analytics",
];

function ModuleDropdown({
	value,
	onChange,
}: {
	value: string;
	onChange: (v: string) => void;
}) {
	return (
		<div className="relative">
			<select
				value={value}
				onChange={(e) => onChange(e.target.value)}
				className="styled-select w-full px-4 py-3 pr-10 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-highlight focus:ring-2 focus:ring-highlight/20 transition-all appearance-none"
			>
				<option value="" disabled>
					Select a module
				</option>
				{MODULE_OPTIONS.map((opt) => (
					<option key={opt} value={opt}>
						{opt}
					</option>
				))}
			</select>
			<div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
				<ChevronDown className="w-4 h-4 text-slate-400" />
			</div>
		</div>
	);
}

export default function BookDemoPage() {
	const [module, setModule] = useState("");

	return (
		<div className="bg-hero flex flex-col overflow-x-hidden font-body relative">
			{/* Subtle grid overlay */}
			<div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-positin-[3rem_3rem] pointer-events-none z-0" />

			{/* Card Area */}
			<div className="pt-25 px-0 lg:pt-28 lg:px-28 relative z-10">
				<div className="h-full bg-white lg:rounded-2xl shadow-2xl overflow-hidden flex flex-col lg:flex-row">
					{/* Left: Branding Panel */}
					<div className="hidden lg:flex flex-col bg-highlight text-white w-[40%] shrink-0 p-10 xl:p-12">
						<div className="grow flex flex-col gap-8">
							<div>
								<h2 className="text-2xl xl:text-3xl font-heading font-black leading-snug mb-3">
									India's Only ERP
									<br />
									Built for Government.
								</h2>
								<p className="text-white text-sm leading-relaxed">
									Purpose-built for Indian public sector workflows Treasury,
									Payroll, Assets and Compliance in one unified platform.
								</p>
							</div>

							<div className="space-y-4">
								{[
									{ icon: Building2, text: "7+ Government Departments Live" },
									{ icon: Users, text: "11,000+ Active Payroll Users" },
									{
										icon: TrendingUp,
										text: "₹16Cr+ Monthly Salaries Processed",
									},
								].map((p, i) => (
									<div key={i} className="flex items-center gap-3">
										<div className="w-8 h-8 rounded-lg bg-white/15 flex items-center justify-center shrink-0">
											<p.icon className="w-4 h-4 text-white" />
										</div>
										<span className="text-white text-sm font-medium">
											{p.text}
										</span>
									</div>
								))}
							</div>

							<div>
								<p className="text-white text-[10px] uppercase tracking-widest font-bold mb-3">
									Modules Covered
								</p>
								<div className="flex flex-wrap gap-2">
									{[
										"Finance & Accounting",
										"HRMS & Payroll",
										"Inventory",
										"Assets",
										"Projects",
									].map((m, i) => (
										<span
											key={i}
											className="text-[11px] font-semibold px-3 py-1 rounded-full bg-white/15 text-white/80 border border-white/15"
										>
											{m}
										</span>
									))}
								</div>
							</div>
						</div>

						<div className="flex flex-wrap gap-2 pt-6 border-t border-white/25">
							{[
								"ISO 27001",
								"ISO 9001:2015",
								"CSSD & VAPT Audited",
								"Microsoft Azure Cloud",
							].map((b, i) => (
								<span
									key={i}
									className="text-[10px] font-bold px-3 py-1.5 rounded-full bg-white/10 text-white border border-white/10 uppercase tracking-wide"
								>
									{b}
								</span>
							))}
						</div>
					</div>

					{/* Right: Form Panel */}
					<div className="flex flex-col p-8 sm:p-10 xl:p-12 w-[60%]">
						{/* Header */}
						<div className="mb-8">
							<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-50 border border-sky-100 text-sky-600 text-[11px] font-bold tracking-widest uppercase mb-4">
								<Shield className="w-3 h-3" /> Free · No Commitment · 30 Minutes
							</div>
							<h1 className="text-3xl xl:text-4xl font-heading font-black text-slate-900 mb-2">
								Book Your Free Platform Demo
							</h1>
							<p className="text-slate-500 text-sm xl:text-base">
								See InGov live in your department's context - Finance, HRMS,
								Inventory &amp; more.
							</p>
						</div>

						{/* Form */}
						<form
							className="flex flex-col gap-5"
							onSubmit={(e) => {
								e.preventDefault();
								alert(
									"Thank you! Our team will contact you within 2 business hours.",
								);
							}}
						>
							<div className="grid grid-cols-1 sm:grid-cols-2 gap-5 flex-1 content-start">
								<div>
									<label className="block text-sm font-bold text-slate-700 mb-2">
										Your Name *
									</label>
									<input
										type="text"
										placeholder="Rajesh Kumar"
										required
										className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-highlight focus:ring-2 focus:ring-highlight/20 transition-all"
									/>
								</div>
								<div>
									<label className="block text-sm font-bold text-slate-700 mb-2">
										Designation *
									</label>
									<input
										type="text"
										placeholder="Accounts Officer"
										required
										className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-highlight focus:ring-2 focus:ring-highlight/20 transition-all"
									/>
								</div>

								<div className="sm:col-span-2">
									<label className="block text-sm font-bold text-slate-700 mb-2">
										Department / Organisation *
									</label>
									<input
										type="text"
										placeholder="e.g. Haryana Urban Development Authority"
										required
										className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-highlight focus:ring-2 focus:ring-highlight/20 transition-all"
									/>
								</div>

								<div>
									<label className="block text-sm font-bold text-slate-700 mb-2">
										Mobile Number *
									</label>
									<input
										type="tel"
										placeholder="+91 98000 00000"
										required
										className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-highlight focus:ring-2 focus:ring-highlight/20 transition-all"
									/>
								</div>
								<div>
									<label className="block text-sm font-bold text-slate-700 mb-2">
										Official Email *
									</label>
									<input
										type="email"
										placeholder="name@dept.gov.in"
										required
										className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-highlight focus:ring-2 focus:ring-highlight/20 transition-all"
									/>
								</div>

								<div className="sm:col-span-2">
									<label className="block text-sm font-bold text-slate-700 mb-2">
										Which module interests you most?
									</label>
									<ModuleDropdown value={module} onChange={setModule} />
								</div>
							</div>

							{/* Submit + Trust */}
							<div className="mt-auto pt-4 border-t border-slate-100 space-y-4">
								<button
									type="submit"
									className="w-full bg-highlight hover:bg-sky-700 active:scale-[0.99] text-white font-bold py-4 rounded-xl transition-all shadow-sm text-base flex items-center justify-center gap-2"
								>
									Schedule My Free Demo <ChevronRight className="w-4 h-4" />
								</button>
								<div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-xs font-medium text-slate-400">
									<div className="flex items-center gap-1.5">
										<Check
											className="w-3.5 h-3.5 text-sky-500"
											strokeWidth={3}
										/>
										Response within{" "}
										<span className="text-sky-600 font-bold">
											2 business hours
										</span>
									</div>
									<span className="hidden sm:inline text-slate-200">·</span>
									<div className="flex items-center gap-1.5">
										<Lock className="w-3 h-3" /> Your data stays private
									</div>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}
