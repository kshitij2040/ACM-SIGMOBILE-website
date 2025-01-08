"use client";
import Image from "next/image";
import React, { useState } from "react";
import { cn } from "../../lib/utils";
import InstagramFillIcon from "remixicon-react/InstagramFillIcon";
import LinkedinBoxFillIcon from "remixicon-react/LinkedinBoxFillIcon";

export const Card = React.memo(({ card, index, hovered, setHovered }) => (
  <div
    onMouseEnter={() => setHovered(index)}
    onMouseLeave={() => setHovered(null)}
    className={cn(
      "rounded-lg relative bg-gray-100 overflow-hidden h-60 md:h-96 w-full transition-all duration-300 ease-out",
      hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
    )}
  >
    {/* Image */}
    <Image
      src={card.src}
      alt={card.title}
      fill
      className="object-cover absolute inset-0"
    />

    {/* Overlay Content */}
    <div
      className={cn(
        "absolute inset-0 bg-black/50 flex flex-col items-center justify-end py-8 px-4 transition-opacity duration-300",
        hovered === index ? "opacity-100" : "opacity-0"
      )}
    >
      {/* Name */}
      <div className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200">
        {card.title}
      </div>

      {/* Social Icons */}
      <div className="flex gap-4 mt-4">
        <LinkedinBoxFillIcon
          size={40}
          className="hover:fill-blue-500 hover:cursor-pointer"
          onClick={() => window.open(card.linkedin)}
        />
        <InstagramFillIcon
          size={40}
          className="hover:fill-pink-500 hover:cursor-pointer"
          onClick={() => window.open(card.instagram)}
        />
      </div>
    </div>
  </div>
));

Card.displayName = "Card";

export function FocusCards({ cards }) {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="w-full">
      {/* Heading */}
      <div className="flex justify-start p-10 pl-10 md:pl-64 text-5xl font-black">
        <h1>Our Team</h1>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 p-8 md:w-xl max-w-7xl h-4xl mx-auto md:px-8 w-full">
        {cards.map((card, index) => (
          <Card
            key={card.title}
            card={card}
            index={index}
            hovered={hovered}
            setHovered={setHovered}
          />
        ))}
      </div>
    </div>
  );
}
