// lib/quest.ts
import { Quest } from "@/components/QuestCard";

/**
 * Sample quest list.
 * Replace or load from API later.
 */
export const sampleQuests: Quest[] = [
  {
    id: "dex-launch",
    title: "DEX Launch Campaign",
    reward: "100 XYZ",
    tasks: [
      "Connect Wallet",
      "Swap Token",
      "Provide Liquidity",
      "Follow Twitter",
    ],
  },
  {
    id: "airdrop-test",
    title: "Airdrop Test Quest",
    reward: "50 XYZ",
    tasks: ["Connect Wallet", "Complete Task", "Claim Reward"],
  },
];
