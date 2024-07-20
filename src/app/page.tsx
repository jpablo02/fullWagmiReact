"use client";

import React from "react";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import { MintNFT } from "./mint-nft";

function App() {
  const { address, isConnected } = useAccount();
  const { connectors, connect, status, error } = useConnect();
  const { disconnect } = useDisconnect();

  return (
    <>
      <div className="relative bg-gray-900 overflow-hidden">
        
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-gray-900 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <svg
              className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-gray-900 transform translate-x-1/2"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>
            <figure>
              <img
                src="http://chocolate-legislative-lamprey-152.mypinata.cloud/ipfs/QmZZF8tSNEbijgtKc3nyV2zMDXysdid3Joakkyuo7H1nac"
                alt="Fortune Cookies"
                className="w-full h-auto" 
              />
            </figure>
{/* 
            <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
              <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
                <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                  <div className="flex items-center justify-between w-full md:w-auto">
                    <a href="#">
                      <span className="sr-only">Workflow</span>
                      <img className="h-8 w-auto sm:h-10" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="" />
                    </a>
                    <div className="-mr-2 flex items-center md:hidden">
                      <button type="button" className="bg-gray-900 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                  <a href="#" className="font-medium text-gray-500 hover:text-gray-900">Product</a>
                  <a href="#" className="font-medium text-gray-500 hover:text-gray-900">Features</a>
                  <a href="#" className="font-medium text-gray-500 hover:text-gray-900">Marketplace</a>
                  <a href="#" className="font-medium text-gray-500 hover:text-gray-900">Company</a>
                  <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">Log in</a>
                </div>
              </nav>
            </div> */}

            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">Data to enrich your</span>
                  <span className="block text-indigo-600 xl:inline">online business</span>
                </h1>
                <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                      Get started
                    </a>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10">
                      Live demo
                    </a>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src="https://tailwindui.com/img/component-images/top-nav-with-multi-column-layout-screenshot.jpg" alt="" />
        </div>
      </div>

      <div className="flex items-center justify-center min-h-screen bg-gray-100 w-full">
        <div className="text-center w-full max-w-4xl">
          <h2 className="text-3xl font-bold text-red-500 mb-4">Account</h2>
          <div className="card bg-base-100 w-full max-w-md shadow-xl mx-auto mb-4">
            <figure>
              <img
                src="http://chocolate-legislative-lamprey-152.mypinata.cloud/ipfs/QmZZF8tSNEbijgtKc3nyV2zMDXysdid3Joakkyuo7H1nac"
                alt="Fortune Cookies"
                className="w-full h-auto" 
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Fortune Cookie</h2>
              <p>Take one daily</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Break a Cookie</button>
              </div>
            </div>
          </div>
          <div className="mb-4">
            status: {isConnected ? "connected" : "disconnected"}
            <br />
            address: {address}
          </div>
          {isConnected && <MintNFT />}
          {isConnected && (
            <button
              type="button"
              onClick={() => disconnect()}
              className="btn btn-secondary mb-4"
            >
              Disconnect
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
