import React from "react";
import Link from "next/link";
import Image from "next/image";
export function People() {
  return (
    <div className="my-16">
      <div className="md:flex items-center mx-16">
        <span className="hidden md:inline-flex py-2 px-16 bg-black m-10"></span>
        <h1 className="text-center md:text-left text-5xl text-black font-bold">
          People
        </h1>
      </div>

      <div className="mx-16 flex flex-col md:flex-row justify-between items-center m-10 font-serif text-base tracking-wide leading-8 text-center capitalize">
        <p className="w-5/12">
          Art Text is graphic design software for Mac that brings text effects,
          typography, and logo design to the next level. With its intuitive
          design toolkit, graphic presets, and typography templates you will
          create flashy headings for all your desktop publishing projects,
          logos, websites, instantly produce 3D text and 3D titles, and even
          make eye-catching captions for social media posts.
        </p>

        <p className="w-5/12 mt-10">
          Art Text comes equipped with a wide selection of text styles, surface
          materials and effects. Unrestricted by any presets, your creativity
          will take flight with easily adjustable textures, surface bump maps,
          environment textures, light spots and shadows, and other settings to
          come up with new materials.
          <span className="block py-10 px-2 bg-black float-right mt-10"></span>
        </p>
      </div>
      <div className="md:relative">
        <div className="hidden md:inline-flex">
          <Image src="/image/bgImage10.avif" width={1920} height={700} />
        </div>

        <div className="md:absolute top-24 mx-36 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white">
            <Image
              src="/image/gridImage12.avif"
              width={1000}
              height={500}
              className="absolute w-full"
            />
            <div className="m-10">
              <h1 className="text-3xl font-serif font-medium mb-5">
                Current Students
              </h1>
              <p className="font-serif text-slate-700 tracking-wide leading-6 text-left capitalize mb-10">
                The section includes information for enrolled students about
                student resource and support services.
              </p>
              <Link href="">
                <a className="md:nabsolute font-bold underline bottom-5">
                  More
                </a>
              </Link>
            </div>
          </div>

          <div className="bg-white">
            <Image
              src="/image/gridImage13.avif"
              width={1000}
              height={500}
              className="absolute w-full"
            />
            <div className="m-10">
              <h1 className="text-3xl font-serif font-medium mb-5">Alumni</h1>
              <p className="font-serif text-slate-700 tracking-wide leading-6 text-left capitalize mb-5">
                Alumni who have contributed to the history of Australian art and
                continue to influnce contemporary art prctice.
              </p>
              <Link href="">
                <a className="md:absolute font-bold underline bottom-5">More</a>
              </Link>
            </div>
          </div>
          <div className="bg-white">
            <Image
              src="/image/gridImage14.avif"
              width={1000}
              height={500}
              className="absolute w-full"
            />
            <div className="m-10">
              <h1 className="text-3xl font-serif font-medium mb-5">Staff</h1>
              <p className="font-serif text-slate-700 tracking-wide leading-6 text-left capitalize mb-5">
                We are committed creating an environment of artistic and
                education excellence.
              </p>
              <Link href="">
                <a className="md:absolute font-bold underline bottom-5">More</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
