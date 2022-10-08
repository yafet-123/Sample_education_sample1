import Head from "next/head";
import Image from "next/image";
import { About } from "../components/About";
import { News } from "../components/News";
import { People } from "../components/People";

export default function Home() {
  return (
    <div>
      <div className="relative ">
        <Image
          src="/image/bgImage3.avif"
          width={1920}
          height={600}
          className="absolute w-full"
        />
        <div className="absolute right-10 z-10 bottom-20 flex items-center">
          <span className="hidden md:inline-flex py-2 px-20 bg-white m-20"></span>
          <h1 className="text-5xl md:text-7xl text-white font-bold mt-16 italic">
            National Art <sapn className="block text-right">School</sapn>{" "}
          </h1>
        </div>
      </div>
      <About />
      <People />
      <News />
    </div>
  );
}
