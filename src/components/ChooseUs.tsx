"use client";
import React from "react";
import data from "@/data/music_courses.json";
import Link from "next/link";
import { BackgroundGradient } from "./ui/background-gradient";
interface Courses {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
}
const ChooseUs = () => {
  const test = data.courses.filter((course: Courses) => course.isFeatured);
  return (
    <>
      <div className="py-12 bg-gray-900">
        <div className=" text-center">
          <div className=" text-base text-teal-600 font-semibold tracking-wide uppercase">
            {" "}
            Featured Courses
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
              Learn with the best
            </p>
          </div>
        </div>

        <div className=" mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {test.map((item) => (
            <div key={item.id} className="flex justify-center text-sm">
              <BackgroundGradient className="flex flex-col gap-2 rounded-[22px] p-5 bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                  {item.title}
                </p>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">
                  {item.description}
                </p>
                <Link href={`/courses/${item.slug}`}>
                  {" "}
                  <button className="inline-flex relative h-10 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                    Learn More
                  </button>
                </Link>
              </BackgroundGradient>
            </div>
          ))}
        </div>
        <div className="mt-20 text-center">
          <Link
            href={"/courses"}
            className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
          >
            View All courses
          </Link>
        </div>
      </div>
    </>
  );
};

export default ChooseUs;
