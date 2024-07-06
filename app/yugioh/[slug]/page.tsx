import { fetchCardById } from "@/app/lib/fetchCards";
import { YugiohCard } from "@/app/lib/interfaces";
import YugiohDetailCard from "@/components/Yugioh/DetailCard";

interface Props {
  params: { card: YugiohCard; slug: string };
}

export default function YugiohDetailView({ params }: Props) {
  const card = fetchCardById(params.slug);
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <YugiohDetailCard
        params={{
          card: card,
        }}
      />
    </div>
  );
}
