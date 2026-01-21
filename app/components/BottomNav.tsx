// components/BottomNav.tsx
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BottomNav() {
  const path = usePathname();

  const items = [
    { href: "/", label: "Home" },
    { href: "/swap", label: "Swap" },
    { href: "/quests", label: "Quests" },
    { href: "/profile", label: "Profile" },
  ];

  return (
    <nav className="h-14 border-t border-zinc-800 bg-zinc-950 flex">
      {items.map((it) => {
        const active = path === it.href;
        return (
          <Link
            key={it.href}
            href={it.href}
            className={`flex-1 flex items-center justify-center text-xs font-medium ${
              active ? "text-white" : "text-gray-500"
            }`}
          >
            {it.label}
          </Link>
        );
      })}
    </nav>
  );
}
