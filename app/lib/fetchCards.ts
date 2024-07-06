import { YugiohCard } from "./interfaces";

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

export function fetchCards() {
  const cards: YugiohCard[] = [];
  for (let index = 0; index < 12; index++) {
    cards[index] = card;
  }
  return cards;
}

export function fetchCardById(id: string) {
  return card;
}
