import { YugiohCard } from "@/app/lib/interfaces";
import { ChevronRight, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  params: { card: YugiohCard };
}

export default function YugiohMasterCard({ params }: Props) {
  return (
    <div className="w-90 h-fit backdrop-blur-xl rounded-lg shadow-md p-8 flex justify-around text-white border border-white">
      <Image
        src={params.card.image}
        alt={`${params.card.name} Card Image`}
        width={150}
        height={100}
        className="transition ease-in-out delay-150 hover:scale-110"
      />
      <div className="text-lg">
        <p className="text-xl">{params.card.name}</p>
        <div className="w-full h-px bg-white rounded-lg my-2"></div>
        <p>{params.card.set}</p>
        <p>{params.card.edition} edition</p>
        <p>{params.card.price} €</p>
        <div className="flex my-4 p-4 justify-between">
          <ShoppingCart className="hover:scale-110 hover:cursor-pointer" />
          <Link href={`yugioh/${params.card.id}`}>
            <ChevronRight className="hover:scale-110" />
          </Link>
        </div>
      </div>
    </div>
  );
}
