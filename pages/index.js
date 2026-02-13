import React, { useState } from 'react';
import Desktop from '../components/Desktop';
import BootScreen from '../components/BootScreen';
import Head from 'next/head';

export default function Home() {
  const [isBooted, setIsBooted] = useState(false);

  return (
    <div className="bg-black h-screen overflow-hidden">
      <Head>
        <title>Senku AGI | Time Machine</title>
      </Head>

      {!isBooted ? (
        <BootScreen onComplete={() => setIsBooted(true)} />
      ) : (
        <div className="animate-in fade-in zoom-in-95 duration-700 h-full">
           <Desktop />
        </div>
      )}
    </div>
  );
}
