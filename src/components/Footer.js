import React from 'react';

function Footer() {
  return (
    <p className='text-gray-900 absolute bottom-0 pb-3 md:text-lg lg:text-xl'>
      Mark Harless
      <a
        href='https://www.linkedin.com/in/superhackerman/'
        target='_blank'
        rel='noopener noreferrer'
      >
        <i className='fab fa-linkedin-in pl-1' style={{ color: '#4a5568' }} />
      </a>
      <a
        href='https://github.com/superhackerboy/pronounly'
        target='_blank'
        rel='noopener noreferrer'
      >
        <i className='fab fa-github pl-1' style={{ color: '#4a5568' }} />
      </a>
    </p>
  );
}

export default Footer;
