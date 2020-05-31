import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <p className='text-gray-900 mt-4 md:text-lg lg:text-xl'>
      Pronounly helps you share your preferred pronoun with other people using
      an easy link to put in your bio. For now, Pronounly supports traditional
      gender pronouns:{' '}
      <Link to='/he'>
        <u>He</u>
      </Link>
      ,{' '}
      <Link to='/she'>
        <u>she</u>
      </Link>{' '}
      and{' '}
      <Link to='/they'>
        <u>they</u>
      </Link>
      .
    </p>
  );
}

export default About;
