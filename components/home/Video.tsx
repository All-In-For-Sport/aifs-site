"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import Image from "next/image";
import { Play } from "@/components/common";

const INITIAL_SCALE = 0.8;

export function Video() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "start start"],
  });
  const [scale, setScale] = useState(INITIAL_SCALE);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [loadVideo, setLoadVideo] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (latest: any) => {
    setScale(INITIAL_SCALE + latest * 0.15);
  });

  useEffect(() => {
    setLoadVideo(true);
  }, []);

  return (
    <section ref={ref} className="w-full flex items-start justify-center z-20">
      <div className="w-full h-full relative">
        <div className="absolute top-0 right-0 h-full -z-20 w-full bottom-0 left-0 mx-auto">
          <div className="top-0 max-w-screen py-12 min-h-screen overflow-visible w-full sticky flex items-center justify-center">
            <div className="w-full h-full md:w-[600px] md:h-[600px] rounded-full  bg-[#5A6DED] blur-[200px] md:blur-[100px] absolute left-0 right-0 top-0 bottom-0 mx-auto my-auto" />
            <div className="hidden lg:block w-[200px] h-[200px] rounded-full -z-20 bg-[#5A6DED] blur-[100px] absolute right-[100px] top-0 bottom-0 mx-auto my-auto" />
            <div className="hidden lg:block w-[200px] h-[200px] rounded-full -z-20 bg-[#5A6DED] blur-[100px] absolute left-[100px] top-0 bottom-0 mx-auto my-auto" />
          </div>
        </div>

        <div
          className={`top-0 py-12 min-h-screen overflow-visible w-full sticky flex items-center justify-center transition-opacity ${isVideoLoaded ? "opacity-100" : "opacity-0"}`}
        >
          <motion.div
            style={{ scale }}
            className="w-full group bg-opacity-40 cursor-pointer max-w-5xl relative rounded-2xl overflow-clip"
          >
            <video
              className={`size-full transform origin-center ${!isPlaying ? "scale-[0.995]" : "scale-100"}`}
              disablePictureInPicture
              disableRemotePlayback
              controls
              onPlay={() => setIsPlaying(true)}
              onLoadedData={() => setIsVideoLoaded(true)}
            >
              {loadVideo && (
                <source src="/assets/aifs_introduction.mp4" type="video/mp4" />
              )}
            </video>
            <div className="absolute top-0 left-0 size-full pointer-events-none flex items-center justify-center">
              <div
                className={`p-5 rounded-full relative z-10 text-white bg-opacity-40 bg-[#606060] transition-all ${isPlaying && "opacity-0"}`}
              >
                <Play className="w-8 h-8 group-hover:scale-110 transition duration-200" />
              </div>
            </div>
            <Image
              src="/assets/video-thumbnail.jpeg"
              alt="basketball player jumping for a slam dunk"
              fill
              className={`size-full object-cover pointer-events-none transition-all ${isPlaying && "opacity-0"}`}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
