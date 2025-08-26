import React from "react";
import image from "../assets/image.png";

const LandingPage = () => {
  return (
    <div className="w-full h-screen bg-zinc-900 p-8 relative">
      <button className="absolute right-20 top-52 bg-emerald-500 text-white text-lg py-2 px-6 rounded-lg font-bold transition-all duration-300 hover:bg-emerald-600 hover:scale-105 hover:shadow-lg">
        Hire Me
      </button>
      <div className="text-4xl font-mono text-white font-bold mt-44 mr-96 ml-8">
        <h1 className="text-[4.5vw] font-bold uppercase leading-tight tracking-tight">
          I am a <span className="text-emerald-400">learner</span> having a
          passionate <span className="text-amber-400">Mindset</span> for
        </h1>
        <div className="flex items-center mt-4">
          <img
            src={image}
            alt="image"
            className="rounded-xl object-cover mr-4 border-4 border-white"
            style={{ width: "250px", height: "auto" }}
          />
          <h1 className="text-[4.5vw] font-bold uppercase leading-tight tracking-tight">
            <span className="text-red-600">web development </span>
            and <span className="text-blue-500">design </span>
            and <span className="text-yellow-400">AI & ML</span>
          </h1>
        </div>
        <div className="border-t-[1px] border-zinc-800 mt-16 flex justify-between items-center">
            {["~Vipeen Kumar","Ready to work"].map((items, index) => (
                <p key={index} className="text-2xl font-bold">{items}</p>
            ))}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
