"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLenis } from "@/lib/lenis";

export default function Navbar() {
	const [scrolled, setScrolled] = useState(false);
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const lenis = useLenis();
	const pathname = usePathname();

	useEffect(() => {
		const handler = () => setScrolled(window.scrollY > 60);
		window.addEventListener("scroll", handler, { passive: true });
		return () => window.removeEventListener("scroll", handler);
	}, []);

	// Lock scroll when mobile menu is open
	useEffect(() => {
		if (mobileMenuOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "";
		}
		return () => {
			document.body.style.overflow = "";
		};
	}, [mobileMenuOpen]);

	const handleNavClick = (e: React.MouseEvent, href: string) => {
		setMobileMenuOpen(false);

		if (href === "/") {
			if (pathname === "/") {
				e.preventDefault();
				if (lenis) {
					lenis.scrollTo(0, { duration: 1.2 });
				} else {
					window.scrollTo({ top: 0, behavior: "smooth" });
				}
			}
			return;
		}

		if (href.startsWith("#")) {
			e.preventDefault();
			lenis?.scrollTo(href, { offset: -80, duration: 1.4 });
		}
	};

	const links = [
		{ label: "Transformation", href: "#before-after" },
		{ label: "Impact", href: "#roi-impact" },
		{ label: "Modules", href: "#modules" },
		{ label: "Process", href: "#how-it-works" },
		{ label: "Security", href: "#security" },
	];

	return (
		<>
			<nav
				className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled && !mobileMenuOpen ? "bg-white/90 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"}`}
			>
				<div className="px-10 flex items-center justify-between">
					<Link
						href="/"
						className="group flex items-center gap-2 shrink-0"
						onClick={(e) => handleNavClick(e, "/")}
					>
						<div className="relative h-10 w-auto">
							<Image
								src="/ingov.png"
								alt="InGov by iProfit logo"
								width={140}
								height={32}
								className="h-10 w-auto object-contain"
								priority
							/>
						</div>
					</Link>

					{/* Desktop Nav */}
					<div className="hidden lg:flex items-center gap-8">
						<div
							className={`flex gap-8 items-center rounded-full px-8 py-3 transition-colors ${scrolled ? "bg-bgbase border border-border" : "bg-white/10 backdrop-blur-sm"}`}
						>
							{links.map((link) => (
								<Link
									key={link.label}
									href={link.href}
									onClick={(e) => handleNavClick(e, link.href)}
									className={`text-sm font-medium transition-colors hover:text-highlight ${scrolled ? "text-dark" : "text-white/90"}`}
								>
									{link.label}
								</Link>
							))}
						</div>
					</div>

					<div className="hidden lg:flex shrink-0">
						<Link
							href="/book-demo"
							className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-white/80 text-black font-bold px-6 py-2.5 rounded-full shadow-lg transition-all hover:-translate-y-0.5 active:translate-y-0 text-sm"
						>
							Book a Free Demo
						</Link>
					</div>

					{/* Mobile Menu Toggle */}
					<button
						className={`lg:hidden p-2 rounded-md transition-colors ${scrolled && !mobileMenuOpen ? "text-dark" : "text-white"}`}
						onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
					>
						{mobileMenuOpen ? (
							<X className="w-8 h-8" />
						) : (
							<Menu className="w-8 h-8" />
						)}
					</button>
				</div>
			</nav>

			{/* Mobile Drawer */}
			<AnimatePresence>
				{mobileMenuOpen && (
					<motion.div
						initial={{ opacity: 0, x: "100%" }}
						animate={{ opacity: 1, x: 0 }}
						exit={{ opacity: 0, x: "100%" }}
						transition={{ type: "spring", damping: 25, stiffness: 200 }}
						className="fixed inset-0 z-40 bg-hero pt-32 px-10 lg:hidden shadow-2xl"
					>
						{/* Background pattern to match hero */}
						<div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />

						<div className="relative z-10 flex flex-col gap-8 text-left">
							{links.map((link, i) => (
								<motion.div
									key={link.label}
									initial={{ opacity: 0, x: -20 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ delay: 0.1 + i * 0.05 }}
								>
									<Link
										href={link.href}
										onClick={(e) => handleNavClick(e, link.href)}
										className="text-2xl font-heading font-bold text-white/90 hover:text-white transition-colors flex items-center group"
									>
										<span className="w-0 group-hover:w-4 h-px bg-highlight mr-0 group-hover:mr-3 transition-all duration-300" />
										{link.label}
									</Link>
								</motion.div>
							))}

							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.4 }}
								className=""
							>
								<Link
									href="/book-demo"
									onClick={() => setMobileMenuOpen(false)}
									className="inline-flex w-full bg-highlight hover:bg-highlight/90 text-white font-bold py-4 rounded-2xl text-lg shadow-lg shadow-highlight/20 items-center justify-center transition-all active:scale-[0.98]"
								>
									Book a Free Demo
								</Link>
							</motion.div>

							<div className="mt-auto pb-10">
								<p className="text-white/80 text-xs font-bold uppercase tracking-[0.2em] mb-4">
									InGov by iProfit
								</p>
								<div className="text-white/80 text-[10px] leading-relaxed">
									Digital Governance Platform <br />
									Modernizing Public Sector Operations
								</div>
							</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
}
