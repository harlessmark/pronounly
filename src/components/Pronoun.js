import React from 'react';

function Pronoun(props) {
  return (
    <div>
      <h2 className='font-bold text-gray-700 mt-4 text-xl md:text-2xl lg:text-3xl'>
        Identification
      </h2>
      {props.pronoun === 'he' ? (
        <p className='text-gray-900 md:text-lg lg:text-xl'>
          My pronouns are{' '}
          <span className='font-bold text-gray-800'>he, him and his</span>. This
          does not necessarily reflect my gender or my sexual orientation.
        </p>
      ) : null}

      {props.pronoun === 'she' ? (
        <p className='text-gray-900 md:text-lg lg:text-xl'>
          My pronouns are{' '}
          <span className='font-bold text-gray-800'>she, her and hers</span>.
          This does not necessarily reflect my gender or my sexual orientation.
        </p>
      ) : null}

      {props.pronoun === 'they' ? (
        <p className='text-gray-900 md:text-lg lg:text-xl'>
          My pronouns are{' '}
          <span className='font-bold text-gray-800'>they, them and theirs</span>
          . This does not necessarily reflect my gender or my sexual
          orientation.
        </p>
      ) : null}
    </div>
  );
}

export default Pronoun;
