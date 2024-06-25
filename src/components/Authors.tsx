"use client";
import React from "react";
import { WavyBackground } from "./ui/wavy-background";
import { AnimatedTooltip } from "./ui/animated-tooltip";
const people = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    image:
      "https://imgs.search.brave.com/4eh3NREcr48msCKg6z047rN4bPxfqK26clnl_HcFJ7c/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by92/aWV3LXRocmVlLWRp/bWVuc2lvbmFsLWFu/aW1hdGVkLWNhcnRv/b24tYmlyZF8yMy0y/MTUwOTQ2NDcxLmpw/Zz9zaXplPTYyNiZl/eHQ9anBn",
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "Product Manager",
    image:
      "https://imgs.search.brave.com/4eh3NREcr48msCKg6z047rN4bPxfqK26clnl_HcFJ7c/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by92/aWV3LXRocmVlLWRp/bWVuc2lvbmFsLWFu/aW1hdGVkLWNhcnRv/b24tYmlyZF8yMy0y/MTUwOTQ2NDcxLmpw/Zz9zaXplPTYyNiZl/eHQ9anBn",
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Data Scientist",
    image:
      "https://imgs.search.brave.com/4eh3NREcr48msCKg6z047rN4bPxfqK26clnl_HcFJ7c/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by92/aWV3LXRocmVlLWRp/bWVuc2lvbmFsLWFu/aW1hdGVkLWNhcnRv/b24tYmlyZF8yMy0y/MTUwOTQ2NDcxLmpw/Zz9zaXplPTYyNiZl/eHQ9anBn",
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "UX Designer",
    image:
      "https://imgs.search.brave.com/4eh3NREcr48msCKg6z047rN4bPxfqK26clnl_HcFJ7c/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by92/aWV3LXRocmVlLWRp/bWVuc2lvbmFsLWFu/aW1hdGVkLWNhcnRv/b24tYmlyZF8yMy0y/MTUwOTQ2NDcxLmpw/Zz9zaXplPTYyNiZl/eHQ9anBn",
  },
  {
    id: 5,
    name: "Tyler Durden",
    designation: "Soap Developer",
    image:
      "https://imgs.search.brave.com/4eh3NREcr48msCKg6z047rN4bPxfqK26clnl_HcFJ7c/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by92/aWV3LXRocmVlLWRp/bWVuc2lvbmFsLWFu/aW1hdGVkLWNhcnRv/b24tYmlyZF8yMy0y/MTUwOTQ2NDcxLmpw/Zz9zaXplPTYyNiZl/eHQ9anBn",
  },
  {
    id: 6,
    name: "Dora",
    designation: "The Explorer",
    image:
      "https://imgs.search.brave.com/4eh3NREcr48msCKg6z047rN4bPxfqK26clnl_HcFJ7c/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by92/aWV3LXRocmVlLWRp/bWVuc2lvbmFsLWFu/aW1hdGVkLWNhcnRv/b24tYmlyZF8yMy0y/MTUwOTQ2NDcxLmpw/Zz9zaXplPTYyNiZl/eHQ9anBn",
  },
];

export default function WavyBackgroundDemo() {
  return (
    <div className="relative h-[40rem] overflow-hidden flex items-center justify-center">
      <WavyBackground className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full">
        <h2 className="text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8">
          Meet Our Instructors
        </h2>
        <p className="text-base md:text-lg text-white text-center mb-4">
          Discover the talented professionals who will guide your musical
          journey
        </p>
        <div className="flex flex-row items-center justify-center mb-10 w-full">
          <AnimatedTooltip items={people} />
        </div>
      </WavyBackground>
    </div>
  );
}
