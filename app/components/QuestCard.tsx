// components/QuestCard.tsx
"use client";
import Link from "next/link";

export interface Quest {
  id: string;
  title: string;
  reward: string;
  tasks: string[];
}

export default function QuestCard({ quest }: { quest: Quest }) {
  return (
    <div className="bg-zinc-900 rounded-2xl p-4 shadow-sm">
      <h3 className="text-lg font-semibold">{quest.title}</h3>
      <p className="text-sm text-gray-400">{quest.reward}</p>
      <Link href={`/quests/${quest.id}`}>
        <div className="mt-3 text-center bg-white text-black rounded-lg py-2 font-medium hover:opacity-90 active:scale-95 transition">
          View quest
        </div>
      </Link>
    </div>
  );
}
