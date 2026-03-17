import Hero from "@/components/sections/HeroV1";
import StatsBar from "@/components/sections/StatsBar";
import Walkthrough from "@/components/sections/Walkthrough";
import BeforeAfter from "@/components/sections/BeforeAfter";
import ROIImpact from "@/components/sections/ROIImpact";
import Problem from "@/components/sections/Problem";
import Modules from "@/components/sections/Modules";
import Integrations from "@/components/sections/Integrations";
import HowItWorks from "@/components/sections/HowItWorks";
import Clients from "@/components/sections/Clients";
import Comparison from "@/components/sections/Comparison";
import Security from "@/components/sections/Security";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
	return (
		<>
			<Hero />
			<StatsBar />
			<Walkthrough />
			<BeforeAfter />
			<Problem />
			<ROIImpact />
			<Modules />
			<Integrations />
			<HowItWorks />
			<Clients />
			<Comparison />
			<Security />
			<FAQ />
			<FinalCTA />
		</>
	);
}
