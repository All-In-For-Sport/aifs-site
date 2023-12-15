"use client";

import {
    motion,
    useMotionValueEvent,
    useScroll,
    useSpring,
} from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";
import { Play } from "@/components/common";

export default function Video() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start center", "start start"],
    });
    const [scale, setScale] = useState(1);
    const [isPlaying, setIsPlaying] = useState(false);

    useMotionValueEvent(scrollYProgress, "change", (latest: any) => {
        setScale(1 + latest * 0.15);
    });

    return (
        // z-20 to keep glow visible throughout the page
        <section
            ref={ref}
            className="w-full h-[1500px] overflow-visible flex items-start justify-center"
        >
            <div className="w-full h-full relative">
                <div className="absolute top-0 right-0 h-full -z-20 w-full bottom-0 left-0 mx-auto">
                    <div className="top-0 max-w-screen py-12 min-h-screen overflow-visible w-full sticky flex items-center justify-center">
                        <div className="w-full h-full md:w-[600px] md:h-[600px] rounded-full  bg-[#5A6DED] blur-[200px] md:blur-[100px] absolute left-0 right-0 top-0 bottom-0 mx-auto my-auto" />
                        <div className="hidden lg:block w-[200px] h-[200px] rounded-full -z-20 bg-[#5A6DED] blur-[100px] absolute right-[100px] top-0 bottom-0 mx-auto my-auto" />
                        <div className="hidden lg:block w-[200px] h-[200px] rounded-full -z-20 bg-[#5A6DED] blur-[100px] absolute left-[100px] top-0 bottom-0 mx-auto my-auto" />
                    </div>
                </div>
                <div className="top-0 py-12 min-h-screen overflow-visible w-full sticky flex items-center justify-center">
                    <motion.div
                        style={{ scale }}
                        onClick={() => setIsPlaying(!isPlaying)}
                        className="w-full group bg-[#606060] z-20 bg-opacity-40 cursor-pointer max-w-5xl relative h-[575px] rounded-2xl overflow-hidden"
                    >
                        {!isPlaying && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="w-full h-full flex items-center justify-center"
                            >
                                <div className="p-5 rounded-full relative z-10 text-white bg-[#606060] bg-opacity-40">
                                    <Play className="w-8 h-8 group-hover:scale-110 transition duration-200" />
                                </div>
                                <Image
                                    src="/assets/video-thumbnail.jpeg"
                                    alt=""
                                    fill
                                    className="object-cover object-center"
                                />
                            </motion.div>
                        )}
                        {isPlaying && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="w-full h-full bg-[#606060]"
                            >
                                <iframe
                                    src="https://customer-dtnsdgf6yztpyx6r.cloudflarestream.com/d73bfa756455d5c3895b25cbe9b33dba/iframe?autoplay=true"
                                    title="All in for Sport Introduction"
                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture;"
                                    className="w-full h-full"
                                    allowFullScreen
                                />
                            </motion.div>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
