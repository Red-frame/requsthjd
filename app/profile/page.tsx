// app/profile/page.tsx
import WalletButton from "@/components/WalletButton";

export default function ProfilePage() {
  return (
    <div className="space-y-6">
      <header className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Profile</h1>
        <WalletButton />
      </header>

      <section className="space-y-4">
        {/* Placeholder profile info */}
        <p className="text-gray-400">Address: 0x...abcd</p>
        <p className="text-gray-400">Joined: —</p>
        <p className="text-gray-400">Total Rewards: —</p>
      </section>
    </div>
  );
}
