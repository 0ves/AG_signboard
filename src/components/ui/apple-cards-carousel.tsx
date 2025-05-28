"use client";

import React, { useEffect, useRef, useState, createContext } from "react";
import { IconArrowNarrowLeft, IconArrowNarrowRight } from "@tabler/icons-react";
import {  motion } from "motion/react";
import { useRouter } from "next/navigation";

interface CarouselProps {
  items: JSX.Element[];
  initialScroll?: number;
}

type CardType = {
  src: string;
  title: string;

  // content removed as per requirement
};

export const CarouselContext = createContext<{
  currentIndex: number;
}>({
  currentIndex: 0,
});

export const Carousel = ({ items, initialScroll = 0 }: CarouselProps) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [currentIndex] = useState(0);

  // useEffects for scroling fucionlaty
  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = initialScroll;
      checkScrollability();
    }
  }, [initialScroll]);
  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };
  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };
  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <CarouselContext.Provider value={{ currentIndex }}>
      <div className="relative w-full">
        <div
          className="flex w-full overflow-x-scroll overscroll-x-auto scroll-smooth py-10 [scrollbar-width:none] md:py-20"
          ref={carouselRef}
          onScroll={checkScrollability}
        >
          <div
            className="absolute right-0 z-[1000] h-auto w-[5%] overflow-hidden bg-gradient-to-l"
          />
          <div
            className="flex flex-row justify-start gap-4 pl-4 mx-auto max-w-7xl"
          >
            {items.map((item, index) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 * index, ease: "easeOut" } }}
                key={"card" + index}
                className="rounded-3xl last:pr-[5%] md:last:pr-[33%]"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>
        <div className="mr-10 flex justify-end gap-2">
          <button
            className="relative z-40 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 disabled:opacity-50"
            onClick={scrollLeft}
            disabled={!canScrollLeft}
            aria-label="Scroll left"
          >
            <IconArrowNarrowLeft className="h-6 w-6 text-gray-500" />
          </button>
          <button
            className="relative z-40 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 disabled:opacity-50"
            onClick={scrollRight}
            disabled={!canScrollRight}
            aria-label="Scroll right"
          >
            <IconArrowNarrowRight className="h-6 w-6 text-gray-500" />
          </button>
        </div>
      </div>
    </CarouselContext.Provider>
  );
};

export const Card = ({
  card,
  index,
}: {
  card: CardType;
  index: number;
}) => {
  const router = useRouter();

  const handleClick = () => {
    // Redirect to a page based on card title (customize as needed)
    router.push(`/products#${encodeURIComponent(card.title)}`);
  };

  return (
    <div
      key={`card-${index}`}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleClick();
        }
      }}
      className=" relative z-10 flex h-80 w-56 cursor-pointer flex-col items-start justify-start overflow-hidden rounded-3xl bg-gray-100 md:h-[40rem] md:w-96 dark:bg-neutral-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
      aria-label={`View details for ${card.title}`}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 z-30 h-full bg-gradient-to-b from-black/50 via-transparent to-transparent" />
      <div className="relative z-40 p-8">
       
        <p className="mt-2 max-w-xs text-left font-sans text-xl font-semibold [text-wrap:balance] text-white md:text-3xl">
          {card.title}
        </p>
      </div>
      <BlurImage
        src={card.src}
        alt={card.title}
        
        className="hover:blur-xs absolute inset-0 z-10 object-cover"
      />
    </div>
  );
};

export const BlurImage = ({
  height,
  width,
  src,
  className,
  alt,
  ...rest
}: React.ImgHTMLAttributes<HTMLImageElement> & { src: string }) => {
  
  return (
    <img
      className={`h-full w-full transition duration-300  ${className ?? ""}`}
      
      src={src}
      width={width}
      height={height}
      loading="lazy"
      decoding="async"
      alt={alt ?? "Image"}
      {...rest}
    />
  );
};
