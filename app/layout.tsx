// app/layout.tsx
import "./globals.css";
import BottomNav from "@/components/BottomNav";

export const metadata = {
  title: "DEX Quest",
  description: "DEX + Campaign UI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        {/* Container that mimics phone width */}
        <div className="max-w-md mx-auto min-h-[100dvh] flex flex-col">
          <main className="flex-1 overflow-y-auto p-4">{children}</main>
          <BottomNav />
        </div>
      </body>
    </html>
  );
}
