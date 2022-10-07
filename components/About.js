import React from "react";

export function About() {
  return (
    <div className="m-16">
      <div className="flex items-center">
        <span className="py-2 px-16 bg-black m-10"></span>
        <h1 className="text-5xl text-black font-bold">About Us</h1>
      </div>

      <div className="flex justify-between items-center m-10 font-serif text-base tracking-wide leading-8 text-center capitalize">
        <p className="w-5/12">
          Art Text is graphic design software for Mac that brings text effects,
          typography, and logo design to the next level. With its intuitive
          design toolkit, graphic presets, and typography templates you will
          create flashy headings for all your desktop publishing projects,
          logos, websites, instantly produce 3D text and 3D titles, and even
          make eye-catching captions for social media posts.
        </p>

        <p className="w-5/12">
          Art Text comes equipped with a wide selection of text styles, surface
          materials and effects. Unrestricted by any presets, your creativity
          will take flight with easily adjustable textures, surface bump maps,
          environment textures, light spots and shadows, and other settings to
          come up with new materials.
          <span className="block py-16 px-2 bg-black"></span>
        </p>
      </div>
    </div>
  );
}
