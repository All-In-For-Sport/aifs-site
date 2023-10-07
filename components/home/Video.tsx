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
            className="w-full h-[1500px] overflow-visible flex items-start justify-center relative z-20"
        >
            <div className="top-0 py-12 min-h-screen w-full sticky flex items-center justify-center">
                <motion.div
                    style={{ scale }}
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="w-full group bg-[#606060] bg-opacity-40 cursor-pointer max-w-5xl relative h-[575px] rounded-2xl overflow-hidden"
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
                        <motion.iframe
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            src="https://customer-dtnsdgf6yztpyx6r.cloudflarestream.com/f2adc1226ca24366c1adf254426718ab/iframe?autoplay=true"
                            title="Be Water Web3 Promo Video"
                            allow="accelerometer; encrypted-media; gyroscope; picture-in-picture;"
                            className="w-full h-full"
                            allowFullScreen
                        />
                    )}
                </motion.div>
            </div>
        </section>
    );
}
