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
    id: "Java SE 17 Silver 試験対策アプリ",
    title: "Java SE 17 Silver 実践問題集",
    image: "/portfolio/java17.png",
    url: "https://z-b.vercel.app/",
    github: "https://github.com/buroridayo/z-b.git",
    period: "5日間（要件定義〜デプロイ）",
    about:
      "「暗記ではなく理解」を追求。最短合格をサポートするJava SE 17 Silver特化型・演習プラットフォーム。",
    features: [
      "【分野別集中演習】Javaの基礎からオブジェクト指向、API、例外処理まで、全セクションを網羅",
      "【クイック学習モード】隙間時間を活用できるよう、1セクション10問に凝縮したトレーニング機能を搭載",
    ],
    appeal: [
      "Prisma × Neon (PostgreSQL) による効率的なデータ管理：リレーションを活かしたDB設計と高速なデータ取得を実現",
      "開発スピードの追求：Next.jsの特性を活かし、5日間という短期間でフロントエンドからインフラ構築までを完遂",
      "学習体験（UX）の最適化：正誤判定だけでなく、反復学習を前提としたUI設計により学習継続率を向上",
    ],
    tech: {
      frontend: ["React", "Next.js", "TailwindCSS"],
      backend: ["Neon", "Prisma", "PostgreSQL"],
      infra: ["Vercel"],
    },
  },
];
