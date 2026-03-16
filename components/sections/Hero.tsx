"use client";
import FadeUp from "@/components/ui/FadeUp";
import Link from "next/link";
import { Play } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const clients = [
	"GMDA",
	"FMDA",
	"Haryana Housing Board",
	"Chandigarh Housing Board",
];

// ── Typewriter phrases ──────────────────────────────────────────────────────
const PHRASES = [
	"The ERP Government Departments Actually Trust",
	"Your Architect for Digital Governance",
];

// Timing constants (ms)
const TYPE_SPEED = 55;
const DELETE_SPEED = 30;
const PAUSE_AFTER = 2200; // pause at end of phrase
const PAUSE_BEFORE = 400; // pause before typing next phrase

function useTypewriter(phrases: string[]) {
	const [displayed, setDisplayed] = useState("");
	const [showCursor, setShowCursor] = useState(true);
	const indexRef = useRef(0); // which phrase
	const charRef = useRef(0); // char position
	const deletingRef = useRef(false); // typing vs deleting

	// Blinking cursor
	useEffect(() => {
		const id = setInterval(() => setShowCursor((v) => !v), 530);
		return () => clearInterval(id);
	}, []);

	// Typewriter engine
	useEffect(() => {
		let timeout: ReturnType<typeof setTimeout>;

		function tick() {
			const phrase = phrases[indexRef.current];
			const deleting = deletingRef.current;

			if (!deleting) {
				// Typing forward
				if (charRef.current < phrase.length) {
					charRef.current += 1;
					setDisplayed(phrase.slice(0, charRef.current));
					timeout = setTimeout(tick, TYPE_SPEED);
				} else {
					// Finished typing — pause, then start deleting
					deletingRef.current = true;
					timeout = setTimeout(tick, PAUSE_AFTER);
				}
			} else {
				// Deleting backward
				if (charRef.current > 0) {
					charRef.current -= 1;
					setDisplayed(phrase.slice(0, charRef.current));
					timeout = setTimeout(tick, DELETE_SPEED);
				} else {
					// Finished deleting — move to next phrase
					deletingRef.current = false;
					indexRef.current = (indexRef.current + 1) % phrases.length;
					timeout = setTimeout(tick, PAUSE_BEFORE);
				}
			}
		}

		timeout = setTimeout(tick, PAUSE_BEFORE);
		return () => clearTimeout(timeout);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return { displayed, showCursor };
}

export default function Hero() {
	const [videoOpen, setVideoOpen] = useState(false);
	const { displayed, showCursor } = useTypewriter(PHRASES);

	return (
		<section className="relative bg-hero min-h-screen flex items-center justify-center text-white overflow-hidden">
			{/* Subtle grid overlay */}
			<div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none z-0" />

			{/* Dot pattern */}
			<div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:26px_26px] pointer-events-none" />
			{/* Glow orbs */}
			<div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-white/5 rounded-full blur-[130px] pointer-events-none" />
			<div className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] bg-white/5 rounded-full blur-[100px] pointer-events-none" />

			{/* Centered Content */}
			<div className="relative z-10 flex flex-col items-center text-center px-6 pt-10 lg:pt-16 pb-10 lg:pb-16 max-w-4xl mx-auto w-full">
				{/* Badge */}
				{/* <FadeUp delay={0}>
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm text-white/85 text-xs font-bold uppercase tracking-widest mb-10">
            🇮🇳&nbsp; Made in India &nbsp;·&nbsp; Purpose-Built for Government
          </div>
        </FadeUp> */}

				{/* H1 — typewriter cycles between phrases */}
				<FadeUp delay={0.1}>
					<h1 className="max-w-2xl text-5xl sm:text-6xl font-heading font-black leading-[1.08] tracking-tight text-white min-h-[3.24em] sm:min-h-52 mb-10 lg:mb-0">
						{displayed}
						<span
							aria-hidden="true"
							className="inline-block w-[3px] h-[0.85em] ml-[2px] align-middle rounded-sm bg-white transition-opacity duration-100"
							style={{ opacity: showCursor ? 1 : 0 }}
						/>
					</h1>
				</FadeUp>

				{/* Subheadline */}
				<FadeUp delay={0.2}>
					<p className="text-white text-base sm:text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
						InGov by iProfit is India's only SaaS-based ERP built from the
						ground up for government departments not adapted, not retrofitted.
						Finance, HR, Assets, Inventory and Projects in one unified platform.
					</p>
				</FadeUp>

				{/* CTAs */}
				<FadeUp delay={0.3}>
					<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
						<Link
							href="/book-demo"
							className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-white/80 text-black font-bold px-8 py-4 rounded-full shadow-lg transition-all hover:-translate-y-0.5 active:translate-y-0 text-base"
						>
							Book My Free Demo
						</Link>
						<button
							onClick={() => setVideoOpen(true)}
							className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 border border-white/30 hover:border-white/60 bg-white/5 hover:bg-white/10 text-white font-semibold px-8 py-4 rounded-full transition-all hover:-translate-y-0.5 active:translate-y-0 text-base backdrop-blur-sm cursor-pointer"
						>
							<Play className="w-4 h-4 fill-white shrink-0" />
							Watch 3-Min Overview
						</button>
					</div>
				</FadeUp>

				{/* Social Proof Strip */}
				<FadeUp delay={0.4}>
					<div className="flex flex-wrap items-center justify-center gap-3">
						<span className="text-white text-sm font-semibold">Trusted by</span>
						{clients.map((c, i) => (
							<span
								key={i}
								className="px-4 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm text-white text-xs font-bold tracking-wide"
							>
								{c}
							</span>
						))}
					</div>
				</FadeUp>
			</div>

			{/* ── Video Modal ── */}
			{videoOpen && (
				<div
					className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
					onClick={() => setVideoOpen(false)}
				>
					<div
						className="bg-white rounded-2xl overflow-hidden w-full max-w-3xl shadow-2xl"
						onClick={(e) => e.stopPropagation()}
					>
						<div className="aspect-video bg-slate-900 flex items-center justify-center">
							<span className="text-white/40 text-sm">
								Platform tour video coming soon.
							</span>
						</div>
						<div className="p-4 flex justify-end">
							<button
								onClick={() => setVideoOpen(false)}
								className="text-sm font-bold text-slate-500 hover:text-slate-800 transition-colors"
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
