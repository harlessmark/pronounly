import React from "react";
import { Link } from "react-router-dom";

function Contribute() {
  return (
    <div>
      <h2 className='font-bold text-gray-700 mt-4 text-xl md:text-2xl lg:text-3xl'>
        Contributing
      </h2>

      <p className='text-gray-900 md:text-lg lg:text-xl'>
        Pronounly supports traditional gender pronouns:{" "}
        <Link to='/he' className='link-border'>
          He
        </Link>
        ,{" "}
        <Link to='/she' className='link-border'>
          she
        </Link>{" "}
        and{" "}
        <Link to='/they' className='link-border'>
          they
        </Link>{" "}
        as well as common German pronouns:{" "}
        <Link to='/er' className='link-border'>
          er
        </Link>{" "}
        and{" "}
        <Link to='/sie' className='link-border'>
          sie
        </Link>
        . If you are interested in contributing to this project, please submit a
        pull request with your changes to the{" "}
        <a
          href='https://github.com/superhackerboy/pronounly'
          target='_blank'
          rel='noopener noreferrer'
          className='link-border'>
          repository
        </a>
        .
      </p>
    </div>
  );
}

export default Contribute;
