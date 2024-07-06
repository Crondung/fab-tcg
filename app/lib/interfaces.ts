export interface YugiohCard {
  id: string;
  name: string;
  image: string;
  price: number;
  set: string;
  edition: Edition;
}

export type Edition = "1st" | "unltd." | "ltd.";
