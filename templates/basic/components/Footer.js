import data from "../data/index";
const ExternalLink = ({ href, children }) => (
  <a
    className="text-gray-500 hover:text-gray-600 transition"
    target="_blank"
    rel="noopener noreferrer"
    href={href}>
    {children}
  </a>
);

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-start max-w-2xl mx-auto w-full mb-8">
      <hr className="w-full border-1 border-gray-200 dark:border-gray-800 mb-8" />
      <div className="w-full max-w-2xl flex justify-center items-center">
        <div className="flex space-x-3">
          {data.socials.map((social, index) => (
            <ExternalLink key={index} href={social.url}>
              {social.name}
            </ExternalLink>
          ))}
        </div>
      </div>
      <div className="w-full max-w-2xl flex justify-center items-center">
        {" "}
        <p>
          © {new Date().getFullYear()} , {data.name}
        </p>
      </div>
    </footer>
  );
}
