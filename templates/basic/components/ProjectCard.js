export default function ProjectCard({ title, description, href }) {

  return (
    <a
      className="mb-4 hover:shadow rounded-md shadow-custom border-2 border-[#212121]"
      href={href}
      aria-label={title}
      target="_blank"
      rel="noopener noreferrer">
      <div className="flex items-center border border-gray-200 dark:border-gray-800 rounded p-4">
        <div>
          <h4 className="text-lg font-bold tracking-tight text-gray-900 dark:text-gray-100">
            {title}
          </h4>
          <p className="leading-5 text-gray-700 dark:text-gray-300">
            {description}
          </p>
        </div>
      </div>
    </a>
  );
}
