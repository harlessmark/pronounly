import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <p className='text-gray-900 mt-4 md:text-lg lg:text-xl'>
      Pronounly helps you share your gender pronoun with other people by pasting
      a link in your bio. Pronounly supports traditional gender pronouns:{" "}
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
      .
    </p>
  );
}

export default About;
