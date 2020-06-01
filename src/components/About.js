import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <p className='text-gray-900 mt-4 md:text-lg lg:text-xl'>
      Pronounly helps you share your preferred pronoun with other people using
      an easy link to put in your bio. For now, Pronounly supports traditional
      gender pronouns:{' '}
      <Link
        to='/he'
        style={{
          backgroundColor: '#2d3748',
          color: '#f4f4f4',
          padding: '0 6px',
          borderRadius: '3px',
        }}
      >
        He
      </Link>
      ,{' '}
      <Link
        to='/she'
        style={{
          backgroundColor: '#2d3748',
          color: '#f4f4f4',
          padding: '0 6px',
          borderRadius: '3px',
        }}
      >
        she
      </Link>{' '}
      and{' '}
      <Link
        to='/they'
        style={{
          backgroundColor: '#2d3748',
          color: '#f4f4f4',
          padding: '0 6px',
          borderRadius: '3px',
        }}
      >
        they
      </Link>
      .
    </p>
  );
}

export default About;
