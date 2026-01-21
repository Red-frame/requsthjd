
// app/swap/page.tsx
import SwapBox from "@/components/SwapBox";
import WalletButton from "@/components/WalletButton";

export default function SwapPage() {
  return (
    <div className="space-y-6">
      <header className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Swap</h1>
        <WalletButton />
      </header>

      <section>
        <SwapBox />
      </section>
    </div>
  );
}
