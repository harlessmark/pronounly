import React from 'react';
import { Link } from 'react-router-dom';

function Share() {
  return (
    <div>
      <h2 className='font-bold text-gray-700 mt-4 text-xl md:text-2xl lg:text-3xl'>
        Sharing
      </h2>
      <p className='text-gray-900 md:text-lg lg:text-xl'>
        In your bio, type in{' '}
        <Link
          to='/'
          style={{
            backgroundColor: '#2d3748',
            color: '#f4f4f4',
            padding: '0 6px',
            borderRadius: '3px',
          }}
        >
          pronounly.co/
        </Link>{' '}
        and append your pronoun (he, she or they).
      </p>
    </div>
  );
}

export default Share;
