"use client";

import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <section className="h-[36rem] w-full flex flex-col items-center justify-start bg-gray-100 dark:bg-grey overflow-hidden px-4 pt-8">
      {/* Heading block moved up */}
      <div className="text-center mb-6">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-700">
          What Our Customers Say
        </h2>
        <p className="mt-2 text-black-600 dark:text-black-300 max-w-xl mx-auto text-base md:text-lg">
          Real stories from real customers who trusted us with their solar and
          security needs.
        </p>
      </div>

      {/* Wider, taller InfiniteMovingCards container */}
      <div className="w-full max-w-7xl h-[24rem]">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
          className="!rounded-none !shadow-md border border-gray-200 dark:border-gray-700"
        />
      </div>
    </section>
  );
}

const testimonials = [
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: "William Shakespeare",
    title: "Hamlet",
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Jane Austen",
    title: "Pride and Prejudice",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    title: "Moby-Dick",
  },
];
