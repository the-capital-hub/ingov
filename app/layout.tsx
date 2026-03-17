import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import { LenisProvider } from "@/lib/lenis";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const outfit = Outfit({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700", "800"],
	variable: "--font-outfit",
	display: "swap",
});

const inter = Inter({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
	variable: "--font-inter",
	display: "swap",
});

export const metadata: Metadata = {
	title: "InGov by iProfit - ERP for Government Departments",
	description:
		"India's only SaaS ERP built from the ground up for government departments. Finance, HR, Assets, Inventory & Projects unified.",
	openGraph: {
		title: "InGov by iProfit",
		description: "Purpose-built ERP for Indian government organisations.",
		// images: ['/og-image.png'],
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={`${outfit.variable} ${inter.variable}`}>
			<body>
				<LenisProvider>
					<Navbar />
					<main>{children}</main>
					<Footer />
				</LenisProvider>
			</body>
		</html>
	);
}
