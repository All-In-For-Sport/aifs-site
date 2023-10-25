import { AboutCTA, AboutHero, PilotProjects } from "@/components/about";
import Approach from "@/components/about/Approach";
import Partnership from "@/components/about/Partnership";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-6 md:p-12 lg:p-24">
            <div className="block left-0 right-0 mx-auto w-[400px] h-[300px] rounded-full -z-20 bg-[#5A6DED] blur-[100px] absolute -top-[150px]" />
            <AboutHero />
            <Partnership />
            <Approach />
            <PilotProjects />
            <AboutCTA />
        </main>
    );
}
