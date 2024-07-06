"use client";

import { YugiohCard } from "@/app/lib/interfaces";
import { ArrowLeft, ArrowRight, ShoppingCart } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface Props {
  params: { card: YugiohCard };
}

export default function YugiohDetailCard({ params }: Props) {
  const cardImages = [params.card.image, "/card-back.png"];
  const [cardIndex, setCardIndex] = useState(0);
  const [effect, setEffect] = useState(false);

  const incrementCardIndex = () => {
    setEffect(true);
    if (cardIndex === cardImages.length - 1) {
      setCardIndex(0);
    } else {
      setCardIndex(cardIndex + 1);
    }
  };
  const decrementCardIndex = () => {
    setEffect(true);
    if (cardIndex === 0) {
      setCardIndex(cardImages.length - 1);
    } else {
      setCardIndex(cardIndex - 1);
    }
  };

  return (
    <div className="backdrop-blur-xl shadow-lg rounded-lg w-2/3 h-1/2 border border-white flex">
      <div className="w-1/2 flex justify-center items-center flex-col">
        <Image
          src={cardImages[cardIndex]}
          alt={`${params.card.name} Card Image`}
          width={250}
          height={150}
          className={`${effect && "animate-wiggle"}`}
          onAnimationEnd={() => setEffect(false)}
        />
        <div className="flex text-white p-4 justify-between w-1/3">
          <ArrowLeft
            size={32}
            strokeWidth={4}
            className="hover:scale-110"
            onClick={decrementCardIndex}
          />
          <ArrowRight
            size={32}
            strokeWidth={4}
            className="hover:scale-110"
            onClick={incrementCardIndex}
          />
        </div>
      </div>
      <div className="w-1/2 text-white p-4">
        <h1 className="text-3xl">{params.card.name}</h1>
        <div className="w-full h-px bg-white rounded-lg my-2"></div>
        <p>{params.card.set}</p>
        <p>{params.card.edition} edition</p>
        <p>{params.card.price} €</p>
        <div className="flex my-4 p-4 justify-between">
          <ShoppingCart className="hover:scale-110 hover:cursor-pointer" />
        </div>
      </div>
    </div>
  );
}
