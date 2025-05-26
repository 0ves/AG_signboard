"use client";

import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Our products
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          ></div>
        );
      })}
    </>
  );
};

const data = [
  {
    title: "billboard",
    src: "billboard.jpg",
  },
  {
    title: "ACP Signboard",
    src: "acpsignboardwith.jpg",
  },
  {
    title: "Canvas Signboard",
    src: "canvassignboard.png",
  },
  {
    title: "Glass Printing",
    src: "glassprint.png",
  },
  {
    title: "LED Tube Signboard",
    src: "ledtubesign.png",
  },
  {
    title: "Backlight Fabric Signboard",
    src: "backlightfabric.png",
  },
  {
    title: "Metal Signboard",
    src: "metalsign.png",
  },
  {
    title: "Roll-up Standee",
    src: "rollup.png",
  },
  {
    title: "Slim Non-lit Translite",
    src: "slimnonlit.png",
  },
];
