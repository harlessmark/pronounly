import React from "react";
import { Link } from "react-router-dom";

function Share() {
  return (
    <div>
      <h2 className='font-bold text-gray-700 mt-4 text-xl md:text-2xl lg:text-3xl'>
        Sharing
      </h2>
      <p className='text-gray-900 md:text-lg lg:text-xl'>
        Enter{" "}
        <Link to='/' className='link-border'>
          pronounly.netlify.app/
        </Link>{" "}
        + your preferred pronoun in your social media bios.
      </p>
    </div>
  );
}

export default Share;
