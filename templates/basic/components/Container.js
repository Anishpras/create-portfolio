import Head from "next/head";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import data from "../data/index";
import Footer from "./Footer";

export default function Container(props) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  useEffect(() => setMounted(true), []);

  const { children } = props;
  const router = useRouter();

  return (
    <div className="bg-white dark:bg-black">
      <Head>
        <title>{data.seo.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={data.seo.description} name="description" />
        <meta property="og:url" content={`${data.seo.url}${router.asPath}`} />
        <link rel="canonical" href={`${data.seo.url}${router.asPath}`} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={`${data.name}`} />
        <meta property="og:description" content={data.seo.description} />
        <meta property="og:title" content={data.seo.title} />
        <meta property="og:image" content={data.seo.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={`${data.seo.url}`} />
        <meta name="twitter:title" content={data.seo.title} />
        <meta name="twitter:description" content={data.seo.description} />
        <meta name="twitter:image" content={data.seo.image} />
      </Head>
      <nav className="sticky-nav flex justify-between items-center max-w-4xl w-full p-8 my-0 md:mb-8 mx-auto bg-white dark:bg-black bg-opacity-60">
        <button
          aria-label="Toggle Dark Mode"
          type="button"
          className="bg-gray-200 dark:bg-gray-800 rounded p-3 h-10 w-10"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
          {mounted && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="currentColor"
              className="h-4 w-4 text-gray-800 dark:text-gray-200">
              {theme === "dark" ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              )}
            </svg>
          )}
        </button>
        <div>
          <a
            download
            href="/basicResume.pdf"
            rel="noopener noreferrer"
            target="_blank"
            className="p-1 sm:p-4 text-gray-900 dark:text-gray-100">
            Resume
          </a>
        </div>
      </nav>
      <main
        id="skip"
        className="flex flex-col justify-center bg-white dark:bg-black px-8 text-gray-900 dark:text-gray-100">
        {children}
        <Footer />
      </main>
    </div>
  );
}
