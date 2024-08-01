"use client";
import { motion } from "framer-motion";
import  Image  from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div>
        <div className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] mix-blend-lighten">
          <Image
            src="https://bafybeifgvjz7fx7q7ubbbos32ffliiu7c7lsykcsdkvcmitjfkt3gksvge.ipfs.dweb.link/"
            priority
            quality={100}
            fill
            alt="/pablo.jpg"
            className="object-contain"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Photo;
