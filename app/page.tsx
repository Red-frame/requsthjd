// app/page.tsx
import QuestCard from "@/components/QuestCard";
import WalletButton from "@/components/WalletButton";
import { sampleQuests } from "@/lib/quest";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <header className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <WalletButton />
      </header>

      <section>
        <h2 className="text-xl font-semibold mb-2">Active Campaigns</h2>
        <div className="space-y-4">
          {sampleQuests.map((q) => (
            <QuestCard key={q.id} quest={q} />
          ))}
        </div>
      </section>
    </div>
  );
}
