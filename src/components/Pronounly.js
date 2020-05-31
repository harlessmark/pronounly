import React from 'react';
import { Link } from 'react-router-dom';

function Pronounly() {
  return (
    <div>
      <Link to='/'>
        <h1 className='text-gray-700 text-5xl md:text-6xl'>Pronounly</h1>

        <p className='text-gray-800 -mt-1 pb-1 border-b-2 border-gray-500 md:text-lg'>
          Share your gender pronouns
        </p>
      </Link>
    </div>
  );
}

export default Pronounly;
