const Divider = () => {
  return (
    <div className="border border-gray-200 dark:border-gray-600 w-full my-8" />
  );
};

const Year = ({ children }) => {
  return (
    <h3 className="text-lg md:text-xl font-bold mb-4 tracking-tight text-gray-900 dark:text-gray-100">
      {children}
    </h3>
  );
};

const Step = ({ title, children }) => {
  return (
    <li className="mb-4 ml-2">
      <div className="flex items-center mb-2 text-green-700 dark:text-green-300">
        <span className="sr-only">Check</span>
        <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24">
          <g
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
            <path d="M22 4L12 14.01l-3-3" />
          </g>
        </svg>
        <p className="font-medium text-gray-900 dark:text-gray-100">{title}</p>
      </div>
      <p className="text-gray-700 dark:text-gray-400 ml-6">{children}</p>
    </li>
  );
};

export default function Timeline() {
  return (
    <>
      <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white">
        Timeline
      </h3>
      <Year>2021</Year>
      <ul>
        <Step title="Built Tailwind Master Kit 🪁">
          Built{" "}
          <a href="https://www.tailwindmasterkit.com">TailwindMasterKit</a>, A
          SaaS marketplace for beautiful, handcrafted Website components built
          with and for Tailwind supported websites. Built the components from
          the ground up for React and HTML in 30+ categories.
        </Step>
        <Step title="Created covidrescue.co.in 💊">
          Created <a href="https://www.covidrescue.co.in">covidrescue.co.in</a>
          to help people with verified leads on Oxygen, Remdesivir, Food, Beds,
          ICU, Medicines and more.
        </Step>
        <Step title="Created Covid-19 Vaccination slots notification system 💉">
          Integrated Vaccination slots notification system in covidrescue web
          app. Notified people whenever vaccination slot was available in their
          area and city.
        </Step>
      </ul>
      <Divider />
      <Year>2020</Year>
      <ul>
        <Step title="Joined mroads 🎉">
          {" "}
          Joined{" "}
          <span className="font-bold">
            <span className="text-blue-500">m</span>roads
          </span>{" "}
          as a Software Development Engineer. Working on their Flagship product
          as a Front-End Developer.
        </Step>
        <Step title="Cleared GATE 2019 💯">
          Cleared GATE 2019 after 8 months of continuous studies. I still hate
          Computer System Architecture & Organization.
        </Step>
        <Step title="Competitive Programming 🏆">
          Cleared Hackerrank and Hackerearth contests. Got a strong grip on
          Competitive Programming.
        </Step>
        <Step title="Taught programming to students🥳">
          Taught fundamental programming to school students. It included Basic C
          programming, Introduction to Web Development and logic building.
        </Step>
      </ul>
      <Divider />
      <Year>2019</Year>
      <ul>
        <Step title="Placements - Got Placed ✨">
          Had 3 offers in Hand. 1 On-Campus and 2 Off-Campus in the Software
          Developer (Full-Stack) roles.
        </Step>
        <Step title="Full-Stack Applications 🚀">
          Started freelancing, developed full-stack applications for clients
          ranging from E-Commerce stores to static landing pages.
        </Step>
        <Step title="GATE Preparation ⚛️">
          Started preparing for GATE (Graduate Aptitute Test in Engineering).
          Learnt all the Computer Science subjects again from scratch.
        </Step>
      </ul>
    </>
  );
}
