import Image from "next/image";
import { SkillIcon } from "@/lib/skill-data";

interface SkillCardProps {
  name: string;
  level: number;
  icon: SkillIcon;
}

export const SkillCard = ({ name, level, icon: Icon }: SkillCardProps) => {
  // icon が文字列(パス)かどうかを判定
  const isImagePath = typeof Icon === "string";

  return (
    <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-neon/50 hover:bg-white/10 transition-all group">
      <div className="w-8 h-8 flex items-center justify-center text-3xl text-white/50 group-hover:text-neon transition-colors">
        {isImagePath ? (
          /* 画像パスの場合：Next.jsのImageコンポーネントを使用 */
          <Image
            src={Icon as string}
            alt={name}
            width={32}
            height={32}
            className="object-contain brightness-90 group-hover:brightness-110 transition-all"
          />
        ) : (
          /* コンポーネントの場合 */
          <Icon />
        )}
      </div>

      <div className="flex-1">
        <h4 className="text-sm font-bold text-white">{name}</h4>
        <div className="flex gap-0.5 mt-1">
          {[...Array(5)].map((_, i) => (
            <span
              key={i}
              className={`text-xs ${i < level ? "text-neon" : "text-white/10"}`}
            >
              ★
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
