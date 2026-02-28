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
  {
    id: "java-silver-app",
    title: "Java SE 17 Silver 学習支援アプリ",
    image: "/portfolio/java.png",
    url: "https://java-silver-app.vercel.app/",
    github: "https://github.com/buroridayo/java-silver-app.git",
    period: "5日間",
    about:
      "Java SE 17 Silver 試験の合格を目指す学習者のための演習プラットフォームです。アウトプット中心の学習を効率化するために開発しました。",
    features: [
      "網羅的な問題演習機能（全問解説付き）",
      "学習目的に合わせた4つのモード（分野別・本番形式・復習・ホーム遷移）を実装",
      "直感的な操作を可能にするレスポンシブなUIデザイン",
    ],
    appeal: [
      "圧倒的なアウトプット量：合格に必要な知識を定着させるため、豊富な問題数を収録",
      "戦略的な難易度設計：分野別演習では、基礎固めの20問と実践レベルの30問を組み合わせ、効率的なステップアップを実現",
      "実用性の追求：間違えた問題のみを抽出する復習機能により、弱点克服に特化した学習が可能",
    ],
    tech: {
      frontend: ["React", "Next.js", "TailwindCSS"],
      backend: ["Neon", "Prisma"],
      infra: ["Vercel"],
    },
  },
];
