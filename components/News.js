import React from "react";
import Image from "next/image";
import Link from "next/link";
export function News() {
  return (
    <div>
      <div className="max-w-3xl mx-auto relative">
        <h1 className="text-center text-4xl font-serif font-medium mb-5">
          NAS News
        </h1>
        <p className="text-center font-serif text-slate-700 tracking-wide leading-6 capitalize mb-5">
          Keep updated by joining our mailing list. Please enter your email to
          select the newsletters you would like to subscribe to:
        </p>
        <input
          placeholder="Name"
          type="text"
          className="w-full border-slate-400 border-2 p-3 mb-3"
        />

        <input
          placeholder="Email"
          type="email"
          className="w-full border-slate-400 border-2 p-3 mb-3"
        />

        <button className="bg-cyan-800 border py-2 px-5 absolute left-1/2 -bottom-16">
          Submit
        </button>
      </div>
      <div className="mt-24 mx-20 md:mx-0">
        <Image
          src="/image/bgImage11.avif"
          width={1920}
          height={500}
          className="absolute w-full"
        />
      </div>

      <div className="-mt-2 mb-5 mx-20 md:mx-0">
        <Image
          src="/image/bgImage12.avif"
          width={1920}
          height={500}
          className="absolute w-full"
        />
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center m-20">
        <div className="w-5/12 flex flex-col justify-between mb-5 md:mb-0">
          <h1 className="text-left text-4xl font-serif font-medium mb-5">
            Forbes St, Darlinghurst
          </h1>
          <p className="text-left font-serif text-black tracking-wide leading-6 capitalize mb-5">
            NSW, 2010, Australia
          </p>
          <Link href="">
            <a className="text-blue-400">enquires@nas.edu.net</a>
          </Link>
        </div>

        <div className="w-5/12 flex flex-col justify-between">
          <h1 className="text-left text-4xl font-serif font-medium mb-5">
            Student Service
          </h1>
          <p className="text-left font-serif text-black tracking-wide leading-6 capitalize mb-5">
            Our student service office can provide advice and assistance to
            students on a range of enquires regarding admission , progression,
            courses withdrawals, fees , student cards, scholarship, prizes,
            exchange programes, exhibition, assessement, results and graduation
          </p>
        </div>
      </div>
    </div>
  );
}
