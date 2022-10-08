import React from "react";
import Image from "next/image";
import Link from "next/link";
export function About() {
  return (
    <div className="my-16">
      <div className="md:flex items-center mx-16">
        <span className="hidden md:inline-flex py-2 px-16 bg-black m-10"></span>
        <h1 className="text-center md:text-left text-5xl text-black font-bold">
          About Us
        </h1>
      </div>

      <div className="mx-16 flex flex-col md:flex-row justify-between items-center m-10 font-serif text-base tracking-wide leading-8 text-center capitalize">
        <p className="w-5/12 mb-5 md:mb-0">
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
          <Image src="/image/bgImage6.avif" width={1920} height={700} />
        </div>

        <div className="md:absolute top-24 mx-36 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white">
            <Image
              src="/image/gridImage1.avif"
              width={1000}
              height={500}
              className="absolute w-full"
            />
            <div className="m-10">
              <h1 className="text-3xl font-serif font-medium mb-5">History</h1>
              <p className="font-serif text-slate-700 tracking-wide leading-6 text-left capitalize mb-5">
                The National art school has a history extending back almost 175
                years.
              </p>
              <Link href="">
                <a className="font-bold underline">More</a>
              </Link>
            </div>
          </div>

          <div className="bg-white">
            <Image
              src="/image/gridImage3.avif"
              width={1000}
              height={500}
              className="absolute w-full"
            />
            <div className="m-10">
              <h1 className="text-3xl font-serif font-medium mb-5">
                Board Of Directors
              </h1>
              <p className="font-serif text-slate-700 tracking-wide leading-6 text-left capitalize mb-5">
                Meet Our Board of Directors
              </p>
              <Link href="">
                <a className="md:absolute font-bold underline bottom-10">
                  More
                </a>
              </Link>
            </div>
          </div>
          <div className="bg-white">
            <Image
              src="/image/gridImage4.avif"
              width={1000}
              height={500}
              className="absolute w-full"
            />
            <div className="m-10">
              <h1 className="text-3xl font-serif font-medium mb-5">Support</h1>
              <p className="font-serif text-slate-700 tracking-wide leading-6 text-left capitalize mb-5">
                Abroad range of creative and mutually rewarding partnerships
                with the corporate sector
              </p>
              <Link href="">
                <a className="md:absolute font-bold underline bottom-10">
                  More
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 m-14">
        <div>
          <div className="relative">
            <Image
              src="/image/gridImage7.avif"
              width={1920}
              height={1000}
              className="absolute w-full"
            />
            <h1 className="absolute bottom-7 left-16 text-white text-3xl">
              Bachelor Of Fine Art
            </h1>
          </div>

          <div className="relative">
            <Image
              src="/image/gridImage9.avif"
              width={1920}
              height={1000}
              className="absolute w-full"
            />
            <h1 className="absolute bottom-7 left-16 text-white text-3xl">
              Doctor Of Fine Art
            </h1>
          </div>
        </div>

        <div>
          <Image
            src="/image/gridImage10.avif"
            width={1920}
            height={2020}
            className=""
          />
        </div>

        <div>
          <div className="relative">
            <Image
              src="/image/gridImage11.avif"
              width={1920}
              height={1000}
              className="object-fill"
            />
            <h1 className="absolute bottom-7 left-16 text-white text-3xl">
              Master Of Fine Art
            </h1>
          </div>

          <div className="relative">
            <Image
              src="/image/gridImage8.avif"
              width={1920}
              height={1000}
              className=""
            />
            <h1 className="absolute bottom-7 left-16 text-white text-3xl">
              Core Subjects
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
