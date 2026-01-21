// components/SwapBox.tsx
"use client";
import { useState } from "react";

export default function SwapBox() {
  const [fromAmount, setFromAmount] = useState("");
  const [toAmount, setToAmount] = useState("");

  // placeholder tokens
  const tokens = ["TOKENA", "TOKENB"];

  const [fromToken, setFromToken] = useState(tokens[0]);
  const [toToken, setToToken] = useState(tokens[1]);

  const onSwap = () => {
    // placeholder action
    alert(`Swap ${fromAmount} ${fromToken} → ${toAmount} ${toToken}`);
  };

  return (
    <div className="bg-zinc-900 rounded-2xl p-4 space-y-4 shadow-sm">
      <div className="space-y-2">
        <label className="text-gray-300 text-sm">From</label>
        <div className="flex space-x-2">
          <select
            value={fromToken}
            onChange={(e) => setFromToken(e.target.value)}
            className="flex-1 bg-zinc-800 text-white rounded-lg p-2 text-sm"
          >
            {tokens.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
          <input
            type="number"
            value={fromAmount}
            onChange={(e) => setFromAmount(e.target.value)}
            placeholder="0.0"
            className="w-24 bg-zinc-800 text-white rounded-lg p-2 text-right text-sm"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-gray-300 text-sm">To</label>
        <div className="flex space-x-2">
          <select
            value={toToken}
            onChange={(e) => setToToken(e.target.value)}
            className="flex-1 bg-zinc-800 text-white rounded-lg p-2 text-sm"
          >
            {tokens.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
          <input
            type="number"
            value={toAmount}
            onChange={(e) => setToAmount(e.target.value)}
            placeholder="0.0"
            className="w-24 bg-zinc-800 text-white rounded-lg p-2 text-right text-sm"
          />
        </div>
      </div>

      <button
        onClick={onSwap}
        className="w-full bg-white text-black py-3 rounded-xl font-semibold hover:opacity-90 active:scale-95 transition"
      >
        Swap
      </button>
    </div>
  );
}
