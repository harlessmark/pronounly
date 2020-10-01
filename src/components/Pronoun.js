import React from "react";

function Pronoun(props) {
  const { pronoun } = props;
  return (
    <div>
      <h2 className='font-bold text-gray-700 mt-4 text-xl md:text-2xl lg:text-3xl'>
        Identification
      </h2>

      {pronoun === "he" ? (
        <p className='text-gray-900 md:text-lg lg:text-xl'>
          My pronouns are{" "}
          <span className='underline text-gray-800'>he, him and his</span>. This
          does not necessarily reflect my gender or my sexual orientation.
        </p>
      ) : null}

      {pronoun === "she" ? (
        <p className='text-gray-900 md:text-lg lg:text-xl'>
          My pronouns are{" "}
          <span className='underline text-gray-800'>she, her and hers</span>.
          This does not necessarily reflect my gender or my sexual orientation.
        </p>
      ) : null}

      {pronoun === "they" ? (
        <p className='text-gray-900 md:text-lg lg:text-xl'>
          My pronouns are{" "}
          <span className='underline text-gray-800'>they, them and theirs</span>
          . This does not necessarily reflect my gender or my sexual
          orientation.
        </p>
      ) : null}

      {pronoun === "er" ? (
        <p className='text-gray-900 md:text-lg lg:text-xl'>
          Meine Pronomen sind{" "}
          <span className='underline text-grey-800'>er, ihn, sein</span>. Dies
          spiegelt nicht unbedingt mein Geschlecht oder meine sexuelle
          Orientierung wider.
        </p>
      ) : null}

      {pronoun === "sie" ? (
        <p className='text-gray-900 md:text-lg lg:text-xl'>
          Meine Pronomen sind{" "}
          <span className='underline text-grey-800'>
            sie, sie, ihre, oder sie, ihnen, ihre
          </span>
          . Dies spiegelt nicht unbedingt mein Geschlecht oder meine sexuelle
          Orientierung wider.
        </p>
      ) : null}

      {pronoun === "attack-helicopter" ? (
        <div>
          <p className='text-gray-900 md:text-lg lg:text-xl'>
            My pronoun is{" "}
            <span className='underline text-gray-800'>attack helicopter</span>.
            This does not necessarily reflect my branch of service or pronouns
            of my pilots and passengers.
          </p>
        </div>
      ) : null}
    </div>
  );
}

export default Pronoun;
