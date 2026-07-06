import { NextResponse } from 'next/server'

/**
 * お問い合わせ受信エンドポイント。
 *
 * 現状は受信内容をサーバーログに出力し、成功レスポンスを返すだけの実装です。
 * 実運用では、以下のいずれかを接続してください（環境変数で切り替え推奨）。
 *   - メール送信（Resend / SendGrid / SMTP など）
 *   - Google スプレッドシート / フォーム連携
 *   - Slack / Chatwork 等への通知
 */
export async function POST(req: Request) {
  try {
    const body = await req.json()

    const name = String(body.name ?? '').trim()
    const phone = String(body.phone ?? '').trim()
    const message = String(body.message ?? '').trim()

    if (!name || !phone || !message) {
      return NextResponse.json(
        { ok: false, error: '必須項目が入力されていません。' },
        { status: 400 },
      )
    }

    // TODO: メール送信・通知連携をここに実装
    console.info('[contact] 新しいお問い合わせ', {
      company: body.company ?? '',
      name,
      phone,
      email: body.email ?? '',
      topics: body.topics ?? [],
      message,
      at: new Date().toISOString(),
    })

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json(
      { ok: false, error: '受信処理に失敗しました。' },
      { status: 500 },
    )
  }
}
