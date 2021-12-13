import React, { useContext } from 'react';

import { AppContext } from '../contexts/AppContext/AppContext';

import Logo from '../components/Logo/Logo';
import SearchBar from '../components/SearchBar/SearchBar';
import Button from '../components/Button/Button';

function Home() {
  const { 
    gooptSearch,
    imFeelingLucky,
  } = useContext(AppContext);

  return (
    <div className="w-full h-screen">
      <div className="flex flex-col items-center justify-center w-full h-full space-y-7">
        <Logo className="text-8xl"/>

        <SearchBar className="w-5/12 h-12"/>
        
        <div className="space-x-3">
          <Button
            onClick={ gooptSearch }
            className="w-max"
          >
            Goopt Search
          </Button>

          <Button
            onClick={ imFeelingLucky }
            className="w-max"
          >
            I'm Feeling Lucky
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Home;
