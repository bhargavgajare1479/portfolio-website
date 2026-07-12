"use client";

import { useState } from "react";
import Link from "next/link";
import { experienceItems, ExperienceItem } from "@/lib/experience";
import { sessionItems, SessionItem } from "@/lib/experience-sessions";

export function ExperienceContent({ isModal = false }: { isModal?: boolean }) {
  const [activeTab, setActiveTab] = useState<"work" | "sessions">("work");

  return (
    <div className="w-full">
      {/* Horizontal Pill Selector */}
      <div className="flex items-center justify-start mb-12">
        <div className="inline-flex p-1.5 rounded-full bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700/60">
          <button
            type="button"
            onClick={() => setActiveTab("work")}
            className={`px-6 py-2.5 rounded-full text-base sm:text-lg font-medium transition-all duration-300 cursor-pointer ${activeTab === "work"
              ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 shadow-md"
              : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100"
              }`}
          >
            Full Time / Internships
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("sessions")}
            className={`px-6 py-2.5 rounded-full text-base sm:text-lg font-medium transition-all duration-300 cursor-pointer ${activeTab === "sessions"
              ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 shadow-md"
              : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100"
              }`}
          >
            Sessions / Workshops
          </button>
        </div>
      </div>

      {/* Tab 1: Full Time & Internships */}
      {activeTab === "work" && (
        <div className="space-y-12">
          {experienceItems.map((item: ExperienceItem) => (
            <div
              key={item.slug}
              className="border-t border-zinc-200 dark:border-zinc-800 pt-10 first:border-t-0 first:pt-0"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <div>
                  <Link
                    href={`/experience/${item.slug}`}
                    className="font-heading text-3xl font-bold text-zinc-900 dark:text-zinc-100 hover:opacity-80 transition-opacity"
                  >
                    {item.company}
                  </Link>
                  <p className="text-xl font-semibold text-zinc-800 dark:text-zinc-200 mt-1">
                    {item.role}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="px-3.5 py-1 text-sm font-semibold rounded-full bg-zinc-200 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200">
                    {item.type}
                  </span>
                  <span className="text-base font-medium text-zinc-500 dark:text-zinc-400">
                    {item.period}
                  </span>
                </div>
              </div>

              <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed">
                {item.overview}
              </p>

              <div className="mt-6">
                <h4 className="font-heading text-lg font-semibold mb-3 text-zinc-900 dark:text-zinc-100">
                  Key Achievements & Responsibilities
                </h4>
                <ul className="list-disc pl-6 space-y-2">
                  {item.achievements.map((achievement, i) => (
                    <li
                      key={i}
                      className="text-base text-zinc-700 dark:text-zinc-300 leading-relaxed"
                    >
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Tab 2: Sessions & Workshops */}
      {activeTab === "sessions" && (
        <div className="space-y-20">
          {sessionItems.map((item: SessionItem) => (
            <div
              key={item.slug}
              className="first:pt-0"
            >
              {/* Title: [TYPE] Title */}
              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-zinc-100">
                <span className="text-zinc-500 dark:text-zinc-400">[{item.type}]</span>{" "}
                {item.title}
              </h3>

              {/* Date */}
              <p className="mt-2 text-lg text-zinc-500 dark:text-zinc-400 font-medium">
                {item.date}
              </p>

              {/* Image Grid: 1 large hero + 2 side-by-side */}
              {item.images.length > 0 && (
                <div className="mt-6 flex flex-col gap-2">
                  {/* Hero Image */}
                  <div className="w-full overflow-hidden rounded-xl">
                    <img
                      src={item.images[0]}
                      alt={`${item.title} — photo 1`}
                      className="w-full object-cover rounded-xl aspect-[16/10]"
                    />
                  </div>

                  {/* Two side-by-side images */}
                  {item.images.length > 1 && (
                    <div className="grid grid-cols-2 gap-2">
                      {item.images.slice(1, 3).map((img, i) => (
                        <div key={i} className="overflow-hidden rounded-xl">
                          <img
                            src={img}
                            alt={`${item.title} — photo ${i + 2}`}
                            className="w-full object-cover rounded-xl aspect-[5/4]"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Description */}
              <p className="mt-6 text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed italic">
                {item.description}
              </p>

              {/* View on LinkedIn link */}
              {item.linkedinPostLink && (
                <a
                  href={item.linkedinPostLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-4 text-base font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                >
                  View on LinkedIn →
                </a>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
