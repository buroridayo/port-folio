"use client";
import Link from "next/link";

export const NavBar = () => {
  const menus = ["Home", "Port", "History", "Skill"];

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-2 bg-black/80 border border-white/10 backdrop-blur-xl px-4 py-2 rounded-full shadow-2xl">
        {menus.map((item) => (
          <Link
            key={item}
            href={`#${item.toLowerCase()}`}
            className="px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 hover:text-white hover:bg-neon/20 hover:shadow-neon-glow"
          >
            {item}
          </Link>
        ))}
      </div>
    </nav>
  );
};
