import React from "react";
import about_me from "../assets/images/about.jpg";

function About() {
  return (
    <div className="flex min-h-[60vh] items-center justify-evenly p-20 w-full">
      <div className="w-1/3">
        <h1 className="text-6xl mb-10">About</h1>
        <p className="text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quidem
          blanditiis esse, perspiciatis magni enim, autem quas ad ea animi nisi!
          Numquam accusamus, tenetur qui molestiae error impedit dolorum odit.
          Qui, veniam magni. Iste nulla nesciunt esse, sapiente nihil pariatur
          rerum vitae doloremque architecto est quam commodi sunt nemo
          dignissimos dolore ullam porro illo similique consequatur accusantium!
          Doloremque, numquam facere.
        </p>
      </div>
      <div className="w-1/3">
        <img src={about_me} alt="" className="w-full rounded-2xl" />
      </div>
    </div>
  );
}

export default About;
