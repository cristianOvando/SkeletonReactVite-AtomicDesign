
import React, { useState } from 'react';
import Logos from '../molecules/Logos';
import Title from '../molecules/Title';
import Fotter from '../atoms/Fotter';
function Landing() {

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <Logos />
      <Title />
      <Fotter />
    </div>
    );
}

export default Landing;