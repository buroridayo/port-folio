import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    const slackMessage = {
      text: `🚀 *ポートフォリオから新着メッセージがありました*`,
      attachments: [
        {
          color: "#00ff88", // ネオングリーン
          fields: [
            { title: "名前", value: name, short: true },
            { title: "メールアドレス", value: email, short: true },
            { title: "メッセージ", value: message, short: false },
          ],
        },
      ],
    };

    const response = await fetch(process.env.SLACK_WEBHOOK_URL!, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(slackMessage),
    });

    if (!response.ok) throw new Error("Slack送信エラー");

    return NextResponse.json({ message: "送信完了" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "送信失敗" }, { status: 500 });
  }
}
