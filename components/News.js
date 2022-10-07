import React from "react";

export function News() {
  return (
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
  );
}
