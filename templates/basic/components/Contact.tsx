import { useState } from "react";
import data from "../data";
export default function Contact() {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const sendMail = () => {
    if (name && subject && message) {
      window.location.href = `mailto:${data.email}?subject=${subject}&body=Hello david, I am ${name}%0d%0d${message}`;
    } else {
      alert("Please enter all the field");
    }
  };

  return (
    <div className=" flex w-full flex-col md:flex-row  gap-8 px-8 py-16 mx-auto  dark:text-green-300">
      <div className="flex flex-col justify-between">
        <div className="space-y-2">
          <h2 className="text-4xl font-bold leading-tight lg:text-5xl">
            {/* eslint-disable-next-line react/no-unescaped-entities*/}
            Let's talk!
          </h2>
          <div className="dark:text-coolGray-400 dark:text-white">
            Vivamus in nisl metus? Phasellus.
          </div>
        </div>
        <img src={data.image} alt="" className="p-6 md:w-96" />
      </div>
      <form
        noValidate={false}
        className="space-y-6 ng-untouched ng-pristine ng-valid">
        <div>
          <label htmlFor="name" className="text-sm">
            Full name
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder=""
            className="w-full p-3 rounded outline-dotted mt-2 active:outline-green-300 dark:bg-gray-600"
          />
        </div>
        <div>
          <label htmlFor="email" className="text-sm">
            Subject
          </label>
          <input
            id="subject"
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="w-full p-3 rounded outline-dotted mt-2 active:outline-green-300 dark:bg-gray-600"
          />
        </div>
        <div>
          <label htmlFor="message" className="text-sm">
            Message
          </label>
          <textarea
            id="message"
            rows={3}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-3 rounded outline-dotted mt-2 active:outline-green-300 dark:bg-gray-600"></textarea>
        </div>
        <button
          type="submit"
          onClick={sendMail}
          className="w-full p-3 text-sm font-bold dark:text-white tracking-wide uppercase rounded bg-emerald-400">
          Send Message
        </button>
      </form>
    </div>
  );
}
