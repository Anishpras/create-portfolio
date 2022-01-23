import Container from "../components/Container";

import ProjectCard from "../components/ProjectCard";
import Timeline from "../components/Timeline";

import { LIGHT_COLORS } from "../lib/constants";

import { shuffleArray } from "../lib/shuffleArray";
import { useEffect, useState } from "react";
import { RainbowHighlight } from "../ui/RainbowHighlight";

import { RoughNotationGroup } from "react-rough-notation";
import { useIsFontReady } from "../lib/useIsFontReady";

export default function Home() {
  const [colors, setColors] = useState([]);
  const isFontReady = useIsFontReady();
  useEffect(() => {
    setColors(shuffleArray(LIGHT_COLORS));
  }, []);
  return (
    <Container
      title="Manu Arora - Developer, Writer, Creator"
      description="Full-Stack developer, JavaScript enthusiast, Freelancer, Tech Blogger and a Learner. I love building products and web apps that impact millions of lives.">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="flex md:w-3/4 flex-col">
            <RoughNotationGroup show={isFontReady}>
              <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
                Hey, I’m{" "}
                <RainbowHighlight color={colors[0]}>
                  <span className="text-black">Manu Arora</span>
                </RainbowHighlight>{" "}
              </h1>

              <h2 className="text-gray-600 dark:text-gray-400 mb-16 mt-4 font-light tracking-wide leading-normal">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                minima vitae quos ducimus dolorem dignissimos rem aperiam enim
                pariatur tempore?
              </h2>
            </RoughNotationGroup>
          </div>

          <div className="md:flex hidden md:w-1/4 flex-col">
            <img
              src="/avatar.png"
              className="rounded-full max-w-[200px] shadow-xl shadow-cyan-500/50"
              alt=""
            />
          </div>
        </div>
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white">
          Projects
        </h3>
        <ProjectCard
          title="Tailwind Master Kit"
          description="Beautiful, Handcrafted, ready-to-use components and templates for your next Tailwind web app project."
          href="https://tailwindmasterkit.com/"
        />
        <ProjectCard
          title="Covid Rescue"
          description="Get Real-time verified leads on Oxygen, Beds, Remdesivir and more with location and resource filtering"
          href="https://covidrescue.co.in/"
        />
        <ProjectCard
          title="PlaceholderTech"
          description="We build modern, blazing-fast web applications which helps your business grow and increase sales."
          href="https://placeholdertech.in/"
        />
        <ProjectCard
          title="Feedmeback"
          description="The easiest way to add comments or reviews to your static site. Built as part of React 2025."
          href="https://feedmeback-beta.vercel.app/"
        />
        <Timeline />
        <h1 className="text-green-200">Contact Page</h1>
      </div>
    </Container>
  );
}
