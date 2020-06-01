import React from 'react';

function Footer() {
  return (
    <p
      className='text-gray-900 absolute bottom-0 pb-3 sm:text-lg md:text-xl'
      style={{
        backgroundColor: 'rgb(95.7%, 95.7%, 95.7%, .95)',
        width: '50%',
        padding: '1rem 0',
      }}
    >
      <a
        href='https://www.linkedin.com/in/superhackerman/'
        target='_blank'
        rel='noopener noreferrer'
        style={{
          backgroundColor: '#2d3748',
          color: '#f4f4f4',
          padding: '0 6px',
          borderRadius: '3px',
        }}
      >
        Mark Harless
      </a>{' '}
      —
      <a
        href='https://github.com/superhackerboy/pronounly'
        target='_blank'
        rel='noopener noreferrer'
        aria-label='GitHub'
      >
        <i className='fab fa-github-alt pl-2' style={{ color: '#2d3748' }} />
      </a>
    </p>
  );
}

export default Footer;
