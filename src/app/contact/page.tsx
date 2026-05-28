"use client";

"use client";
import React, { useState } from "react";
import { BiLogoLinkedin, BiLogoGmail } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";

export default function ContactPage() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("sendtonimzii@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="p-0 lg:pl-20 lg:pr-20 lg:pt-10">
      <h1 className="text-2xl md:text-3xl font-bold border-l-4 border-blue-500 pl-3 mb-2 text-gray-900 dark:text-white">
        Contact
      </h1>
      <p className="text-gray-500 dark:text-gray-400 mb-10 mt-3">
        Feel free to reach out — I am always open to new opportunities and
        collaborations.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div
          onClick={handleCopyEmail}
          className="cursor-pointer group flex items-center gap-4 p-5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-gray-800/50 hover:border-blue-500 hover:shadow-lg transition-all duration-300"
        >
          <div className="w-12 h-12 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
            <BiLogoGmail className="text-red-500 text-2xl" />
          </div>
          <div>
            <p className="text-xs text-gray-400 dark:text-gray-500 uppercase tracking-wide mb-1">
              Email
            </p>
            <p className="font-semibold text-gray-900 dark:text-white text-sm">
              sendtonimzii@gmail.com
            </p>
            <p className="text-xs text-blue-500 mt-1">
              {copied ? "Copied to clipboard!" : "Click to copy"}
            </p>
          </div>
        </div>

        <a
          href="https://linkedin.com/in/kaveennimsara"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-4 p-5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-gray-800/50 hover:border-blue-500 hover:shadow-lg transition-all duration-300"
        >
          <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
            <BiLogoLinkedin className="text-blue-600 text-2xl" />
          </div>
          <div>
            <p className="text-xs text-gray-400 dark:text-gray-500 uppercase tracking-wide mb-1">
              LinkedIn
            </p>
            <p className="font-semibold text-gray-900 dark:text-white text-sm">
              Kaveen Nimsara
            </p>
            <p className="text-xs text-blue-500 mt-1 group-hover:underline">
              View profile
            </p>
          </div>
        </a>

        <a
          href="https://github.com/cheeriocat"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-4 p-5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-gray-800/50 hover:border-blue-500 hover:shadow-lg transition-all duration-300"
        >
          <div className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
            <BsGithub className="text-gray-900 dark:text-white text-2xl" />
          </div>
          <div>
            <p className="text-xs text-gray-400 dark:text-gray-500 uppercase tracking-wide mb-1">
              GitHub
            </p>
            <p className="font-semibold text-gray-900 dark:text-white text-sm">
              cheeriocat
            </p>
            <p className="text-xs text-blue-500 mt-1 group-hover:underline">
              View repositories
            </p>
          </div>
        </a>

        <div className="group flex items-center gap-4 p-5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-gray-800/50 hover:border-blue-500 hover:shadow-lg transition-all duration-300">
          <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
            <FaMapMarkerAlt className="text-green-500 text-xl" />
          </div>
          <div>
            <p className="text-xs text-gray-400 dark:text-gray-500 uppercase tracking-wide mb-1">
              Location
            </p>
            <p className="font-semibold text-gray-900 dark:text-white text-sm">
              Galle, Sri Lanka
            </p>
            <p className="text-xs text-gray-400 mt-1">
              Available for remote work
            </p>
          </div>
        </div>
      </div>

      <div className="mt-10 p-6 rounded-xl border border-blue-200 dark:border-blue-900 bg-blue-50/50 dark:bg-blue-900/20 text-center">
        <p className="text-gray-700 dark:text-gray-300 text-sm">
          Currently open to{" "}
          <span className="text-blue-500 font-semibold">
            internship opportunities
          </span>{" "}
          and{" "}
          <span className="text-blue-500 font-semibold">
            freelance projects
          </span>
          .
        </p>
        <p className="text-gray-500 dark:text-gray-400 text-xs mt-2">
          I typically respond within 24 hours.
        </p>
      </div>
    </div>
  );
}
