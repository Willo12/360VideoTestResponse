import React from 'react';
import logo from './logo.svg';
import './App.css';
import Video from './360video';

function App() {
  return (
    <body>
      <h1 className=' h-16 flex justify-center items-center text-3xl drop-shadow-md bg-gray-900 text-white'>360 video demonstration</h1>
      <div className='flex mt-2 justify-center items-center'>
        <Video src='https://www.youtube.com/watch?v=hEdzv7D4CbQ'/>
      </div>
      <hr className='mt-10' />
      <div className='flex justify-center mt-4'>
        <h1 className='text-2xl '>The purpose of this site
          <p className=''>This site demonstrates how 360 video can be implemented in a website easily.</p>
          <p>This version uses the youtube API</p>
        </h1>
      </div>
    </body>
  );
}

export default App;
