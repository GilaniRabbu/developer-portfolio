import React, { Fragment } from "react";
import { IoIosStar } from "react-icons/io";

const TapeSection = () => {
  const words = [
    "Performant",
    "Accessible",
    "Secure",
    "Interactive",
    "Scalable",
    "User Friendly",
    "Maintainable",
    "Search Optimized",
    "Usable",
    "Reliable",
  ];

  return (
    <div className="py-16 lg:py-24 overflow-x-clip">
      <div className="-rotate-3 -mx-1 bg-[#CBC9C9] dark:bg-[#383231]">
        <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex flex-none gap-4 pr-4 py-4 animate-move-left [animation-duration:30s]">
            {[...new Array(2)].fill(0).map((_, idx) => (
              <Fragment key={idx}>
                {words.map((word) => (
                  <div key={word} className="inline-flex gap-4 items-center">
                    <span className="uppercase font-semibold text-2xl">
                      {word}
                    </span>
                    <IoIosStar className="text-2xl -rotate-12" />
                  </div>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TapeSection;
