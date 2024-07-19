"use client";

import React from "react";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import { MintNFT } from "./mint-nft";

function App() {
  const { address, isConnected } = useAccount();
  const { connectors, connect, status, error } = useConnect();
  const { disconnect } = useDisconnect();

  return (
    <div className="bg-black text-white min-h-screen p-4">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-yellow-500">Account</h2>
        </div>
        
        <div className="card bg-gray-800 w-96 mx-auto shadow-xl">
          <figure>
            <img
              src="https://bafybeifcr5flcvjqptfoma4zaq2qtd4ca3upbwvtmyia6bhzk2lwxvmxbi.ipfs.dweb.link/galletaok.png"
              alt="Fortune Cookies"
              className="w-full"
            />
          </figure>
          <div className="card-body p-4">
            <h2 className="card-title text-bluePastel text-xl font-semibold">Fortune Cookie</h2>
            <p className="text-purplePastel">Take one daily</p>
            <div className="card-actions justify-end">
              <button className="btn bg-yellow-500 text-black hover:bg-yellow-600">Break a Cookie</button>
            </div>
          </div>
        </div>

        <div className="text-center mt-4">
          <div>Status: {isConnected ? "connected" : "disconnected"}</div>
          <div>Address: {address}</div>
        </div>

        {isConnected && <MintNFT />}
        {isConnected && (
          <div className="text-center mt-4">
            <button type="button" onClick={() => disconnect()} className="btn bg-red-500 text-white hover:bg-red-600">
              Disconnect
            </button>
          </div>
        )}
      </div>

      <div className="container mx-auto mt-8">
        <div className="text-center mb-4">
          <h2 className="text-3xl font-bold text-yellow-500">Connect</h2>
        </div>
        <div className="flex justify-center space-x-4">
          {connectors.map((connector) => (
            <button
              key={connector.id}
              onClick={() => connect({ connector })}
              type="button"
              className="btn bg-bluePastel text-black hover:bg-blue-400"
            >
              {connector.name}
            </button>
          ))}
        </div>
        <div className="text-center mt-4">{status}</div>
        {error && <div className="text-center mt-2 text-red-500">{error.message}</div>}
      </div>
    </div>
  );
}

export default App;
