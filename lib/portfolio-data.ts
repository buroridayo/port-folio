export const PORTFOLIO_PROJECTS = [
  {
    id: "typing-game",
    title: "FUTURE TYPING",
    image: "/portfolio/typing.png",
    url: "https://purple-typing.vercel.app/",
    github: "https://github.com/buroridayo/typing.git",
    period: "1か月",
    about:
      "「最短で学習を始める」をコンセプトに、軽量な動作とシンプルな操作性を追求したタイピング練習アプリです。",
    features: [
      "無駄を削ぎ落とした、直感的でシンプルなタイピング機能",
      "リアルタイムでのタイマー、成功・失敗カウントによるフィードバック実装",
      "最新のIT技術用語を練習テキストに採用し、スキル向上を支援",
    ],
    appeal: [
      "シームレスなUI/UX：Startボタンをあえて排除し、ページを開いた瞬間に練習を開始できるユーザー体験を設計",
      "学習の効率化：IT業界のトレンド用語をお題に設定。タイピングスキルと最新知識のキャッチアップを同時に実現",
      "パフォーマンスの最適化：複雑なロジックを避け、低レイテンシでストレスのない動作環境を構築",
    ],
    tech: {
      frontend: ["React", "Next.js", "TailwindCSS"],
      backend: ["Neon"],
      infra: ["Vercel"],
    },
  },
];
