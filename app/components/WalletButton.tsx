// components/WalletButton.tsx
"use client";
import { useState } from "react";

/**
 * Placeholder wallet button.
 * Later replace with wagmi connect logic.
 */
export default function WalletButton() {
  const [connected, setConnected] = useState(false);

  const toggle = () => setConnected((v) => !v);

  return (
    <button
      onClick={toggle}
      className="bg-white text-black py-1.5 px-3 rounded-lg text-sm font-medium hover:opacity-90 active:scale-95 transition"
    >
      {connected ? "Connected" : "Connect"}
    </button>
  );
}
