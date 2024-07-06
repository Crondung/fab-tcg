import YugiohMasterCard from "@/components/Yugioh/MasterCard";
import { YugiohCard } from "../lib/interfaces";
import { fetchCards } from "../lib/fetchCards";

export default function YugiohMasterView() {
  const cards = fetchCards();
  return (
    <div className="mt-8 p-12 grid grid-cols-1 md:grid-cols-3 gap-4">
      {cards.map((card, index) => (
        <YugiohMasterCard
          params={{
            card: card,
          }}
          key={index}
        />
      ))}
    </div>
  );
}
