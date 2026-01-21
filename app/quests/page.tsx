// app/quests/page.tsx
import QuestCard from "@/components/QuestCard";
import { sampleQuests } from "@/lib/quest";
import WalletButton from "@/components/WalletButton";

export default function QuestsPage() {
  return (
    <div className="space-y-6">
      <header className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Quests</h1>
        <WalletButton />
      </header>

      <section>
        <div className="space-y-4">
          {sampleQuests.map((q) => (
            <QuestCard key={q.id} quest={q} />
          ))}
          {sampleQuests.length === 0 && (
            <p className="text-gray-400 text-center">No quests available.</p>
          )}
        </div>
      </section>
    </div>
  );
}
