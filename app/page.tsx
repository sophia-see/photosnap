"use client"


import About from "@/components/About";
import Header from "@/components/Header";
import Hero from "@/components/home/Hero";
import Stories from "@/components/Stories";

export default function Home() {
  return (
    <div className="">
      <Header />
      <Hero />
      <About />
      <Stories />
    </div>
  );
}
