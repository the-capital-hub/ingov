"use client";
import FadeUp from "@/components/ui/FadeUp";
import Link from "next/link";
import { Play } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export default function HeroV1() {
	const [videoOpen, setVideoOpen] = useState(false);

	return (
		<section className="relative bg-hero min-h-screen flex items-center text-white overflow-hidden py-24 lg:py-0">
			{/* Subdued Grid Overlay */}
			<div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none z-0" />
			{/* Dot Pattern Overlay */}
			<div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:26px_26px] pointer-events-none" />
			
			{/* Soft Glow Orbs for Depth */}
			<div className="absolute top-1/4 left-[5%] w-[500px] h-[500px] bg-white/5 rounded-full blur-[130px] pointer-events-none" />
			<div className="absolute bottom-[0%] right-[5%] w-[600px] h-[600px] bg-white/10 rounded-full blur-[150px] pointer-events-none" />

			{/* Main Content Container - Split Layout */}
			<div className="relative z-10 w-full max-w-7xl mx-auto px-6 h-full flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 pt-12 lg:pt-20">
				
				{/* 1. Left Column (Text & CTAs) */}
				<div className="flex-1 w-full flex flex-col items-start text-left lg:max-w-2xl">
					
					<FadeUp delay={0.1}>
						<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md shadow-lg shadow-black/10 text-white/90 text-xs sm:text-sm font-bold uppercase tracking-widest mb-8">
							<span className="relative flex h-2 w-2">
								<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-300 opacity-75"></span>
								<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-400"></span>
							</span>
							The Next Evolution
						</div>
					</FadeUp>

					<FadeUp delay={0.2}>
						<h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-heading font-black leading-[1.05] tracking-tight text-white mb-6">
							Your Architect for <br className="hidden lg:block"/>
							<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">
								Digital Governance
							</span>
						</h1>
					</FadeUp>

					<FadeUp delay={0.3}>
						<p className="text-white/80 text-lg md:text-xl font-medium leading-relaxed max-w-xl mb-10">
							InGov by iProfit is India's only SaaS-based ERP built from the ground up for government departments. Manage Finance, HR, Assets, Inventory, and Projects securely in one unified platform.
						</p>
					</FadeUp>

					{/* Call to Actions */}
					<FadeUp delay={0.4}>
						<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-12">
							<Link
								href="/book-demo"
								className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-black font-bold px-8 py-4 rounded-full shadow-xl shadow-black/20 hover:shadow-white/20 transition-all hover:-translate-y-1 text-base text-center"
							>
								Book My Free Demo
							</Link>
							<button
								onClick={() => setVideoOpen(true)}
								className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 border border-white/30 hover:border-white/60 bg-white/5 hover:bg-white/10 text-white font-semibold px-8 py-4 rounded-full shadow-lg transition-all hover:-translate-y-1 text-base backdrop-blur-sm cursor-pointer"
							>
								<Play className="w-4 h-4 fill-white shrink-0" />
								Watch 3-Min Overview
							</button>
						</div>
					</FadeUp>
				</div>

				{/* 2. Right Column (Rich Interactive Mockup) */}
				<div className="flex-1 w-full lg:max-w-none relative mb-12 lg:mb-0">
					<FadeUp delay={0.5}>
						{/* Ambient Glow behind image */}
						<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-blue-500/20 rounded-full blur-[120px] -z-10"></div>
						
						{/* Window Container */}
						<div className="relative group" style={{ perspective: '1000px' }}>
							<div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/80 border border-white/10 bg-black/40 backdrop-blur-md transition-all duration-700 lg:[transform:rotateY(-8deg)_rotateX(2deg)] group-hover:[transform:rotateY(0deg)_rotateX(0deg)] group-hover:-translate-y-2 group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.6),0_0_80px_rgba(59,130,246,0.3)] group-hover:border-white/20">
								
								{/* Mac-like Header */}
								<div className="absolute top-0 inset-x-0 h-10 bg-gradient-to-b from-white/10 to-transparent border-b border-white/10 flex items-center px-4 gap-2 z-10 transition-colors group-hover:from-white/20">
									<div className="flex gap-1.5">
										<div className="w-3 h-3 rounded-full bg-red-400"></div>
										<div className="w-3 h-3 rounded-full bg-yellow-400"></div>
										<div className="w-3 h-3 rounded-full bg-green-400"></div>
									</div>
									<div className="mx-auto flex h-full items-center">
										<div className="h-1.5 w-16 bg-white/10 rounded-full"></div>
									</div>
								</div>

								{/* The passing Mockup image */}
								<div className="pt-10 px-0 sm:px-2 lg:px-3 pb-0 sm:pb-2 lg:pb-3 w-full">
									<div className="relative w-full aspect-[4/3] sm:aspect-[16/10] sm:rounded-b-lg lg:rounded-lg overflow-hidden border-t sm:border border-white/10 shadow-inner bg-[#0f172a]">
										<Image 
											src="/images/modules/mockup-img.png"
											alt="InGov Platform Interface"
											fill
											className="object-cover object-top sm:rounded-b-lg lg:rounded-lg opacity-95 transition-opacity duration-300 group-hover:opacity-100"
											priority
										/>
									</div>
								</div>
							</div>

							{/* Floating Widgets (Only visible on MD & above) */}
							<div className="absolute -bottom-6 -left-6 lg:-left-12 px-5 py-3 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl hidden md:flex items-center gap-3 transform translate-y-0 group-hover:-translate-y-2 transition-transform duration-700 delay-100 z-20">
								<div className="w-10 h-10 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center">
									<svg className="w-5 h-5 text-blue-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
									</svg>
								</div>
								<div>
									<div className="text-white text-sm font-bold">Unified Data</div>
									<div className="text-white/60 text-xs">All modules synced</div>
								</div>
							</div>

							<div className="absolute -top-6 -right-6 lg:-right-8 px-5 py-3 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl hidden md:flex items-center gap-3 transform translate-y-0 group-hover:-translate-y-2 transition-transform duration-700 z-20">
								<div className="w-10 h-10 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center">
									<svg className="w-5 h-5 text-blue-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
									</svg>
								</div>
								<div>
									<div className="text-white text-sm font-bold">10x Faster</div>
									<div className="text-white/60 text-xs">Implementation</div>
								</div>
							</div>
						</div>
					</FadeUp>
				</div>
			</div>

			{/* ── Video Modal ── */}
			{videoOpen && (
				<div
					className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 transition-all"
					onClick={() => setVideoOpen(false)}
				>
					<div
						className="bg-slate-900 border border-white/10 rounded-2xl overflow-hidden w-full max-w-4xl shadow-2xl transform scale-100 opacity-100 transition-all duration-300"
						onClick={(e) => e.stopPropagation()}
					>
						<div className="aspect-video bg-black flex items-center justify-center relative">
							{/* Placeholder for video frame */}
							<span className="text-white/40 text-sm font-medium z-10">
								Platform tour video coming soon.
							</span>
							<div className="absolute inset-0 bg-blue-500/5 pulse-slow pointer-events-none"></div>
						</div>
						<div className="p-4 bg-slate-900/95 backdrop-blur-lg flex justify-end">
							<button
								onClick={() => setVideoOpen(false)}
								className="text-sm font-semibold text-slate-400 hover:text-white transition-colors"
							>
								Close ✕
							</button>
						</div>
					</div>
				</div>
			)}
		</section>
	);
}
