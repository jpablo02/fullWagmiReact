"use client";
import { reverse } from "dns";
import { delay, motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: "easeIn" },
        }}
      >
        {/*image*/}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
          }}
          className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] mix-blend-lighten absolute"
        >
          
            {/* <Image
              src="https://chocolate-legislative-lamprey-152.mypinata.cloud/ipfs/QmRTw6jDucssqbcy2W947KXAgcRsu38xf9fSC5d4hecEMV"
              priority
              quality={100}
              fill
              alt="/pablo.jpg"
              className="object-contain"
            /> */}
          
        </motion.div>

        {/*circle*/}
        <motion.svg
          className="w-[300px] xl:w-[506px] h-[300px] xl:h-[506]"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.pablodrum.xyz"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="#00ff99"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin={"round"}
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;
