import Container from "../components/Container";
import Link from "next/link";

import ProjectCard from "../components/ProjectCard";
import Timeline from "../components/Timeline";

import { LIGHT_COLORS } from "../lib/constants";

import { shuffleArray } from "../lib/shuffleArray";
import { useEffect, useState } from "react";
import { RainbowHighlight } from "../ui/RainbowHighlight";

import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { useIsFontReady } from "../lib/useIsFontReady";

import { useTheme } from "next-themes";

export default function Home() {
  const [colors, setColors] = useState([]);
  const isFontReady = useIsFontReady();
  const { theme, setTheme } = useTheme();

  const play = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

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
                  <span className="dark:text-black">Manu Arora</span>
                </RainbowHighlight>{" "}
              </h1>

              <h2 className="text-gray-600 dark:text-gray-400 mb-16 mt-4 font-light tracking-wide leading-normal">
                🖥 I’m a developer, writer, and a creator. <br />
                🗒 I work at{" "}
                <span className="font-bold">
                  <span className="text-blue-500">m</span>roads
                </span>{" "}
                as a{" "}
                <span className="dark:text-white font-bold">
                  Software Engineer.{" "}
                </span>{" "}
                <br />
                {/* 🤗 You've discovered my piece on the internet.
                <br />  */}
                🔨 Building and 🧑🏻‍🏫 Love to teach programming at 🐥 I{" "}
                <a
                  className="font-medium text-gray-700 transition-colors hover:text-gray-900 focus:text-gray-900 focus:outline-none dark:text-gray-300 dark:hover:text-gray-600"
                  target="__blank"></a>{" "}
                about technology, learning and{" "}
              </h2>
            </RoughNotationGroup>
          </div>

          <div className="md:flex hidden md:w-1/4 flex-col">
            <img
              src="avatar-new.png"
              className="rounded-full max-w-[200px] shadow-xl shadow-cyan-500/50"
            />
          </div>
        </div>
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 text-black dark:text-white">
          Most Popular
        </h3>

        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white">
          Projects
        </h3>
        <ProjectCard
          title="Tailwind Master Kit"
          description="Beautiful, Handcrafted, ready-to-use components and templates for your next Tailwind web app project."
          href="https://tailwindmasterkit.com/"
          icon="tailwindmasterkit"
        />
        <ProjectCard
          title="Covid Rescue"
          description="Get Real-time verified leads on Oxygen, Beds, Remdesivir and more with location and resource filtering"
          href="https://covidrescue.co.in/"
          icon="covidrescue"
        />
        <ProjectCard
          title="PlaceholderTech"
          description="We build modern, blazing-fast web applications which helps your business grow and increase sales."
          href="https://placeholdertech.in/"
          icon="placeholdertech"
        />
        <ProjectCard
          title="Feedmeback"
          description="The easiest way to add comments or reviews to your static site. Built as part of React 2025."
          href="https://feedmeback-beta.vercel.app/"
          icon="fastfeedback"
        />
        <Link href="/projects">
          <a
            type="button"
            className="flex items-center text-sm my-4 mx-auto px-4 py-2 rounded-md font-medium text-gray-900 dark:text-gray-100">
            See More
            <svg
              className="h-4 w-4 ml-1"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </a>
        </Link>

        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white">
          Upcoming Projects
        </h3>
        <ProjectCard
          title="Algochurn"
          description="Your last moment friend before a Technical Interview round. Practice the most popular Data Structures & Algorithms"
          href="#"
          icon="algochurn"
        />
        <ProjectCard
          title="VSCode Resume"
          description="A VSCode themed resume for all the web developers out there. A UI which looks exactly like a React file-system based VSCode window with create and update operations."
          href="#"
          icon="vscode"
        />
        <ProjectCard
          title="More projects coming soon.."
          description="I get ideas all day 🙄, All of them are updated here as soon as I start working on them."
          href="#"
          icon="more"
        />
        <Timeline />
        <h1>Contact Page</h1>
      </div>
    </Container>
  );
}
