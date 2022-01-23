import Container from "../components/Container";
import Contact from "../components/Contact";
import ProjectCard from "../components/ProjectCard";
import Timeline from "../components/Timeline";

import { LIGHT_COLORS } from "../lib/constants";

import { shuffleArray } from "../lib/shuffleArray";
import { useEffect, useState } from "react";
import { RainbowHighlight } from "../ui/RainbowHighlight";

import { RoughNotationGroup } from "react-rough-notation";
import { useIsFontReady } from "../lib/useIsFontReady";

import data from "../data";

export default function Home() {
  const [colors, setColors] = useState([]);
  const isFontReady = useIsFontReady();
  useEffect(() => {
    setColors(shuffleArray(LIGHT_COLORS));
  }, []);
  return (
    <Container>
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="flex md:w-3/4 flex-col">
            <RoughNotationGroup show={isFontReady}>
              <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
                Hey, I’m{" "}
                <RainbowHighlight color={colors[0]}>
                  <span className="text-black">{data.name}</span>
                </RainbowHighlight>{" "}
              </h1>

              <h2 className="text-gray-600 dark:text-gray-400 mb-16 mt-4 font-light tracking-wide leading-normal">
                {data.description}
              </h2>
            </RoughNotationGroup>
          </div>

          <div className="md:flex hidden md:w-1/4 flex-col">
            <img
              src={data.image}
              className="rounded-full max-w-[200px] shadow-xl shadow-cyan-500/50"
              alt=""
            />
          </div>
        </div>
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white">
          Projects
        </h3>

        {data.projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.name}
            description={project.detail}
            href={project.link}
          />
        ))}

        <Timeline />
        <Contact />
      </div>
    </Container>
  );
}
