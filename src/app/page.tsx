// Ensure client-side rendering for useState
"use client";

import { useState } from 'react';
import { HoverEffect } from "../components/ui/card-hover-effect";
import { AnimatedTooltip } from "../components/ui/animated-tooltip";

export default function Home() {
  const [longUrl, setLongUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [copySuccess, setCopySuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://vasux.xyz/yt', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ longUrl }),
      });

      if (!response.ok) {
        throw new Error('Failed to shorten URL');
      }

      const data = await response.json();
      const generatedShortUrl = `https://vasux.xyz/${data.urlCode}`;
      setShortUrl(generatedShortUrl);
      setCopySuccess(false); // Reset copy success message
    } catch (error) {
      console.error('Error creating short URL:', error.message);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shortUrl);
    setCopySuccess(true);
  };

  return (
    <div className="main-area">
      <div className="topBar flex items-center justify-center">
        <div className="flex flex-col items-center justify-center mt-32">
          <h1 className="main-title">YouTube Video Embedding Tool</h1>
          <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base text-center">
            Welcome to the ultimate solution for embedding YouTube videos with all controls removed. Our tool simplifies the process, giving you clean, distraction-free video links for a more professional presentation.
          </p>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-10">
            <a href="#urlBox">
              <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
              Try It Free
              </button>
            </a>
            <button className="w-40 h-10 rounded-xl bg-white text-black border border-black text-sm">
              Signup
            </button>
          </div>
          <div className="flex flex-row items-center justify-center mt-16 mb-10 w-full">
            <AnimatedTooltip items={people} />
          </div>
        </div>
        <img className="side-image" src="/ythost.svg" alt="logo" />
      </div>

      <div className="livePreview"> 
        <h4>Live Preview</h4>
        <p>See the difference with our live preview. Experience how your videos will look without YouTube branding and ads.</p>
        <div className="videoBox mb-10">
          
          <iframe
            width="100%"
            className="ytBox"
            src="https://www.youtube.com/embed/0e3GPea1Tyg?si=E1-O612m8qQcMGwf&amp;start=61"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          <video
            src="https://vasux.xyz/-SgaYPzdE"
            poster="https://i.ytimg.com/vi/0e3GPea1Tyg/hq720.jpg"
            controls
            autoPlay
            muted
          ></video>
        </div>
      </div>

      <div className="urlBox" id="urlBox">
        <form onSubmit={handleSubmit} className="flex gap-8 justify-center items-center">
          <input
            type="url"
            value={longUrl}
            onChange={(e) => setLongUrl(e.target.value)}
            placeholder="http://www.youtube.com/watch?v=-wtIMTCHWuI"
            required
            className="urlTextBox"
          />
          <button type="submit" className="urlButton">
            Host Url
          </button>
        </form>
        {shortUrl && (
          <div className=" text-center videoShortUrl">
            <div className="flex items-center justify-center videoShortUrlInner">
              <a href={shortUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                {shortUrl}
              </a>
              <button onClick={copyToClipboard} className="ml-2 text-blue-500 hover:underline focus:outline-none copyClass ">
              </button>
              {copySuccess && <span className="ml-2 text-red-500">Copied!</span>}
            </div>
          </div>
        )}
      </div>

      <div>
        <HoverEffect items={projects} />
      </div>
    </div>
  );
}

const projects = [
  {
    title: "Control-Free Embedding",
    description:
      "Generate YouTube video links without any controls, ensuring your audience focuses solely on your content.",
    link: "/",
  },
  {
    title: "Personalized Hosting Experience",
    description:
      "Enjoy the benefits of embedding YouTube videos as if they were hosted on your personal server, without any YouTube branding or distractions.",
    link: "/",
  },
  {
    title: "User-Friendly Interface",
    description:
      "Our tool is designed with simplicity in mind, allowing you to create customized links in just a few clicks.",
    link: "/",
  },
  {
    title: "Fast and Efficient",
    description:
      "Get your video links quickly, without any lag or complicated processes. Just input the URL, and our tool handles the rest.",
    link: "/",
  },
  {
    title: "No Ads",
    description:
      "Say goodbye to pre-roll ads and interruptions. Our tool provides a clean viewing experience.",
    link: "/",
  },
  {
    title: "SEO Friendly",
    description:
      "Enhance your site's SEO with embedded videos that blend seamlessly with your content.",
    link: "/",
  },
];

const people = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "Product Manager",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Data Scientist",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "UX Designer",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 5,
    name: "Tyler Durden",
    designation: "Soap Developer",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  },
  {
    id: 6,
    name: "Dora",
    designation: "The Explorer",
    image:
      "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
  },
];
