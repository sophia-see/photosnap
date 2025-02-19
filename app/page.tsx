"use client"


import About from "@/components/home/About";
import Hero from "@/components/home/Hero";
import Stories, { StoryType } from "@/components/Stories";
import Features, { FeatureType } from "@/components/Features";

const STORIES: StoryType[] = [
  {
    imgName: "mountains",
    imgAlt: "image of a mountain",
    name: "The Mountains",
    author: "John Appleseed",
  },
  {
    imgName: "cityscapes",
    imgAlt: "cityscape with sunset",
    name: "Sunset Cityscapes",
    author: "Benjamin Cruz",
  },
  {
    imgName: "18-days-voyage",
    imgAlt: "a man walking",
    name: "18 Days Voyage",
    author: "Alexei Borodin",
  },
  {
    imgName: "architecturals",
    imgAlt: "spiral architecture",
    name: "Architecturals",
    author: "Samantha Brooke",
  },
]

const FEATURES: FeatureType[] = [
  {
    imgName: "responsive",
    imgAlt: "devices icons",
    name: "100% Responsive",
    description: "No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen.",
  },
  {
    imgName: "no-limit",
    imgAlt: "infinite icon",
    name: "No Photo Upload Limit",
    description: "Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go.",
  },
  {
    imgName: "embed",
    imgAlt: "laptop with multiple social media icons",
    name: "Available to Embed",
    description: "Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more. ",
  },
]

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Stories stories={STORIES} isHomePage={true}/>
      <Features features={FEATURES} isHomePage={true}/>
    </div>
  );
}
