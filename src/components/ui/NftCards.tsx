import React, { useState } from "react";
import Image from "next/image";
import { MintNFT } from "../../app/mint-nft";
import AnimatedCircle from "../ui/AnimatedCircle"; // Ajusta la ruta según sea necesario

const images = [
  "https://bafybeiexjn4b7ewg2a7embuyrfooxqk7nsbkds3chcbqdgxkz3gbbybmuq.ipfs.dweb.link/1.png",
  "https://bafybeiexjn4b7ewg2a7embuyrfooxqk7nsbkds3chcbqdgxkz3gbbybmuq.ipfs.dweb.link/2.png",
  "https://bafybeiexjn4b7ewg2a7embuyrfooxqk7nsbkds3chcbqdgxkz3gbbybmuq.ipfs.dweb.link/3.png",
  "https://bafybeiexjn4b7ewg2a7embuyrfooxqk7nsbkds3chcbqdgxkz3gbbybmuq.ipfs.dweb.link/4.png",
  "https://bafybeiexjn4b7ewg2a7embuyrfooxqk7nsbkds3chcbqdgxkz3gbbybmuq.ipfs.dweb.link/5.png",
  "https://bafybeiexjn4b7ewg2a7embuyrfooxqk7nsbkds3chcbqdgxkz3gbbybmuq.ipfs.dweb.link/6.png",
  "https://bafybeiexjn4b7ewg2a7embuyrfooxqk7nsbkds3chcbqdgxkz3gbbybmuq.ipfs.dweb.link/7.png",
  // Agrega más URLs de imágenes aquí
];

const NftCards = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="relative">
      <AnimatedCircle className="absolute inset-0 z-0 w-full h-full" />
      <div className="relative z-10">
        <Image
          src={images[currentIndex]}
          width={1200}
          height={630}
          alt="NFT Image"
          className="object-contain w-full h-auto"
          layout="responsive"
        />
      </div>
      <div className="card-body relative z-10 flex items-center justify-between mt-4">
        <button
          onClick={handlePrev}
          className="bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-600"
        >
          Prev
        </button>
        <div className="flex flex-col items-center">
          <MintNFT /> {/* Botón Mint NFT */}
        </div>
        <button
          onClick={handleNext}
          className="bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-600"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default NftCards;
