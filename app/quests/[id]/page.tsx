// app/quests/[id]/page.tsx
import { sampleQuests } from "@/lib/quest";
import WalletButton from "@/components/WalletButton";
import { useParams } from "next/navigation";
import Link from "next/link";

export default function QuestDetailPage() {
  const params = useParams();
  const id = params?.id as string;
  const quest = sampleQuests.find((q) => q.id === id);

  if (!quest) {
    return (
      <div className="space-y-6">
        <header className="flex justify-between items-center">
          <Link href="/quests" className="text-gray-400">
            {"< Back"}
          </Link>
          <WalletButton />
        </header>
        <p className="text-center text-gray-400">Quest not found.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <header className="flex justify-between items-center">
        <Link href="/quests" className="text-gray-400">
          {"< Back"}
        </Link>
        <WalletButton />
      </header>

      <section className="space-y-4">
        <h1 className="text-2xl font-bold">{quest.title}</h1>
        <p className="text-gray-400">{quest.reward}</p>

        <div className="space-y-2">
          <h2 className="font-semibold">Tasks</h2>
          <ul className="list-disc list-inside space-y-1 text-gray-300">
            {quest.tasks.map((t, i) => (
              <li key={i}>{t}</li>
            ))}
          </ul>
        </div>

        <button
          className="w-full mt-4 bg-white text-black py-3 rounded-xl font-semibold hover:opacity-90 active:scale-95 transition"
          // onClick logic to claim later
        >
          Claim reward
        </button>
      </section>
    </div>
  );
}
