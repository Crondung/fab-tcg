import YugiohMasterCard from "@/components/Yugioh/MasterCard";
import { YugiohCard } from "../lib/interfaces";

const card: YugiohCard = {
  id: "1",
  name: "Blue Eyes White Dragon",
  //   image:
  //     "https://static.wikia.nocookie.net/yugioh/images/f/f3/BlueEyesWhiteDragon-DPKB-EN-SR-1E.png",
  image: "/BlueEyesWhiteDragon.webp",
  price: 169,
  set: "DBKB",
  edition: "1st",
};

const cards: YugiohCard[] = [];
for (let index = 0; index < 12; index++) {
  cards[index] = card;
}

export default function YugiohMasterView() {
  return (
    <main className="w-full h-screen bg-yugioh bg-scroll bg-cover bg-no-repeat bg-bottom overflow-y-scroll p-12 grid grid-cols-3 gap-4">
      {cards.map((card) => (
        <YugiohMasterCard
          params={{
            card: card,
          }}
        />
      ))}
    </main>
  );
}
