import { CurrentProject, Hero, Video } from "@/components/home";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-6 md:p-12 lg:p-24">
            <Hero />
            <Video />
            <CurrentProject />
        </main>
    );
}
