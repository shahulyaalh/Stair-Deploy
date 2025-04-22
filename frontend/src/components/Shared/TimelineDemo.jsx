import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "About Stair Ecosystem Private Limited",
      content: (
        <div>
          <p className="text-black text-xs md:text-sm font-normal mb-8">
            At Stair Ecosystem Private Limited, we are dedicated to creating a
            sustainable and secure future through innovative solar energy and
            surveillance solutions. As a growing provider in the solar and
            security sector, our goal is to bring reliable, efficient, and
            affordable technology to homes, businesses, and industries.
          </p>
          <p className="text-black text-xs md:text-sm font-normal mb-8">
            Our team is committed to delivering quality service, from
            consultation to installation and after-sales support. Whether you're
            looking to switch to clean energy or strengthen your property’s
            security, we’re here to provide smart, tailored solutions that meet
            your needs.
          </p>
        </div>
      ),
    },
    {
      title: "Solar Energy Solutions",
      content: (
        <div>
          <p className="text-black text-xs md:text-sm font-normal mb-8">
            Harness the power of the sun with our high-performance solar
            systems. We offer end-to-end services including site assessment,
            system design, installation, and maintenance. Our solutions are
            perfect for reducing electricity bills, lowering carbon footprints,
            and achieving energy independence.
          </p>
          <p className="text-black text-xs md:text-sm font-normal mb-8">
            Built with top-tier components and the latest technology, our
            systems are designed for long-term durability and maximum energy
            efficiency — ensuring you get the most out of every ray of sunlight.
          </p>
        </div>
      ),
    },
    {
      title: "CCTV Surveillance Systems",
      content: (
        <div>
          <p className="text-black text-xs md:text-sm font-normal mb-8">
            Stay safe and in control with our advanced CCTV surveillance
            systems. We provide smart security camera solutions with
            high-definition clarity, night vision, motion detection, and mobile
            access — allowing you to monitor your property in real time from
            anywhere.
          </p>
          <p className="text-black text-xs md:text-sm font-normal mb-8">
            Whether for residential, commercial, or industrial use, our systems
            are designed for easy use, reliable performance, and complete peace
            of mind.
          </p>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
