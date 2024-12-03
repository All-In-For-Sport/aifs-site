"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import Image from "next/image";
import { Play } from "@/components/shared";

const INITIAL_SCALE = 0.85;

export default function Video() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "start start"],
  });
  const [scale, setScale] = useState(INITIAL_SCALE);
  const [isThumbnailLoaded, setIsThumbnailLoaded] = useState(false);
  const [loadVideo, setLoadVideo] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (latest: any) => {
    if (latest >= 0.67) return;
    setScale(INITIAL_SCALE + latest * 0.15);
  });

  useEffect(() => {
    setLoadVideo(true);
  }, []);

  return (
    <section ref={ref} className="z-20 flex w-full items-start justify-center">
      <div className="relative h-full w-full">
        <div className="absolute bottom-0 left-0 right-0 top-0 -z-20 mx-auto h-full w-full">
          <div className="max-w-screen sticky top-0 flex min-h-screen w-full items-center justify-center overflow-visible py-12">
            <div className="absolute left-0 right-0 top-0 mx-auto my-auto h-full w-full translate-y-16 transform rounded-full bg-[#5A6DED] blur-[200px] md:h-[600px] md:w-[600px] md:blur-[100px]" />
          </div>
        </div>

        <div
          className={`sticky top-0 flex min-h-[50vh] w-full items-center justify-center overflow-visible pt-12 transition-opacity ${isThumbnailLoaded ? "opacity-100" : "opacity-0"}`}
        >
          <motion.div
            style={{ scale }}
            className="group relative w-full cursor-pointer overflow-clip rounded-2xl bg-opacity-40"
          >
            <video
              className={`size-full origin-center transform ${!isPlaying ? "scale-[0.995]" : "scale-100"}`}
              disablePictureInPicture
              disableRemotePlayback
              controls
              onPlay={() => setIsPlaying(true)}
            >
              {loadVideo && (
                <source src="/assets/aifs_introduction.mp4" type="video/mp4" />
              )}
            </video>
            <div className="pointer-events-none absolute left-0 top-0 flex size-full items-center justify-center">
              <div
                className={`relative z-10 rounded-full bg-[#606060] bg-opacity-40 p-5 text-white transition-all ${isPlaying && "opacity-0"}`}
              >
                <Play className="h-8 w-8 transition duration-200 group-hover:scale-110" />
              </div>
            </div>
            <Image
              src="/assets/video-thumbnail.jpeg"
              alt="basketball player jumping for a slam dunk"
              fill
              className={`pointer-events-none size-full object-cover transition-all ${isPlaying && "opacity-0"}`}
              onLoad={() => setIsThumbnailLoaded(true)}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
