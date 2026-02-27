import { SKILL_CATEGORIES } from "@/lib/skill-data";
import { SkillCard } from "./SkillCard";

export const SkillSection = () => {
  return (
    <div className="space-y-10 w-full">
      {SKILL_CATEGORIES.map((category) => (
        <div key={category.title} className="space-y-4">
          <h3 className="text-lg font-bold tracking-widest text-white/60 border-b border-white/10 pb-2">
            {category.title}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {category.skills.map((skill) => (
              <SkillCard
                key={skill.name}
                name={skill.name}
                level={skill.level}
                icon={skill.icon}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
