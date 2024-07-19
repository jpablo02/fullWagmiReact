import * as React from "react";
import { useAccount, useWriteContract } from "wagmi";
import { abi } from "./abi";
import type { Address } from "viem";

const uris = [
  "https://chocolate-legislative-lamprey-152.mypinata.cloud/ipfs/QmV2M7Fig1PpoCeMCB5mSdztBbjocC6h4X6Ct6oro9QHAQ/1.json",
  // ... (otros URI)
];

export function MintNFT() {
  const { address } = useAccount();
  const tokenId = 0;
  
  const randomUri = uris[Math.floor(Math.random() * uris.length)];

  console.log('address', address);
  console.log('tokenId', tokenId);
  console.log('uri', randomUri);

  const { data: hash, writeContract } = useWriteContract();

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!address) {
      console.error('Address is undefined');
      return;
    }
    writeContract({
      address: "0xC54aC8471C12c68D30D758Fa3f659e6769ED52cf",
      abi,
      functionName: "safeMint",
      args: [address as Address, randomUri],
    });
  }

  return (
    <form onSubmit={submit} className="text-center mt-4">
      <button type="submit" className="btn bg-greenPastel text-black hover:bg-green-400">
        Mint NFT
      </button>
      {hash && <div className="mt-4 text-yellow-500">Transaction Hash: {hash}</div>}
    </form>
  );
}
