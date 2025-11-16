import React from "react";
import Marquee from "react-fast-marquee";

const AnimatedSlider = () => {
  const icons = [
    "docker",
    "azure",
    "cpp",
    "git",
    "github",
    "nodejs",
    "python",
    "kubernetes",
    "nextjs",
  ];

  return (
    <div className="w-full px-4 py-8">
      <div
        className="
          bg-white 
          overflow-hidden 
          h-32 sm:h-36 md:h-42 lg:h-44
          w-full
          max-w-7xl
          mx-auto
          flex items-center
          rounded-xl
          px-1
        "
      >
        <Marquee
          speed={40}
          gradient={false}
          className="w-full"
          style={{ lineHeight: 0 }}
        >
          {icons.map((name, index) => (
            <img
              key={index}
              src={`/${name}.png`}
              alt={name}
              className="
                mx-12 sm:mx-16 md:mx-20
                h-24 sm:h-28 md:h-32 lg:h-36
                w-auto 
                object-contain 
                block
              "
              draggable="false"
            />
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default AnimatedSlider;
