import { CurrentProject, Hero, Video } from "@/components/home";
import LatestProjects from "@/components/home/LatestProjects";
import Mission from "@/components/home/Mission";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-6 md:p-12 lg:p-24">
            <Hero />
            <Video />
            <CurrentProject />
            <Mission />
            <LatestProjects />
        </main>
    );
}
