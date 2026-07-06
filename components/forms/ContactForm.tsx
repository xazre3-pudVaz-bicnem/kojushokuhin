'use client'

import { useState } from 'react'
import { INQUIRY_TYPES, PHONE, PHONE_TEL, PHONE_NOTE } from '@/lib/constants'

type Status = 'idle' | 'sending' | 'success' | 'error'

const labelCls = 'block text-sm font-medium text-navy-800 mb-2'
const inputCls =
  'w-full border border-paper-400 bg-paper-50 px-4 py-3 text-sm text-ink-800 rounded-none focus:outline-none focus:border-navy-600 focus:ring-1 focus:ring-navy-600 transition-colors'

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (status === 'sending') return
    setStatus('sending')
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form).entries())
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error('failed')
      setStatus('success')
      form.reset()
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="border border-paper-300 bg-paper-50 p-8 md:p-10 text-center">
        <div className="mx-auto w-14 h-14 rounded-full bg-navy-800 flex items-center justify-center mb-5">
          <svg className="w-7 h-7 text-paper-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
        <h3 className="font-heading text-xl text-navy-800 mb-3">お問い合わせを受け付けました</h3>
        <p className="text-sm leading-loose text-ink-600">
          この度はお問い合わせいただきありがとうございます。<br />
          内容を確認のうえ、担当者より折り返しご連絡いたします。
          <br className="hidden md:block" />
          お急ぎの場合は、お電話（
          <a href={PHONE_TEL} className="text-enji-600 underline underline-offset-2">{PHONE}</a>
          ）でもご相談を承ります。
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="mt-8 inline-block border border-navy-600 text-navy-800 px-6 py-2.5 text-sm tracking-wide hover:bg-navy-800 hover:text-paper-50 transition-colors"
        >
          続けて入力する
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate={false}>
      <div>
        <label htmlFor="company" className={labelCls}>
          会社名・店舗名
        </label>
        <input id="company" name="company" type="text" className={inputCls} placeholder="例）〇〇食堂／株式会社〇〇" autoComplete="organization" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className={labelCls}>
            お名前 <span className="text-enji-500 text-xs align-middle">必須</span>
          </label>
          <input id="name" name="name" type="text" required className={inputCls} placeholder="例）山田 太郎" autoComplete="name" />
        </div>
        <div>
          <label htmlFor="phone" className={labelCls}>
            電話番号 <span className="text-enji-500 text-xs align-middle">必須</span>
          </label>
          <input id="phone" name="phone" type="tel" required className={inputCls} placeholder="例）03-3975-4147" autoComplete="tel" />
        </div>
      </div>

      <div>
        <label htmlFor="email" className={labelCls}>
          メールアドレス
        </label>
        <input id="email" name="email" type="email" className={inputCls} placeholder="例）info@example.com" autoComplete="email" />
      </div>

      <fieldset>
        <legend className={labelCls}>ご希望の内容</legend>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
          {INQUIRY_TYPES.map((t) => (
            <label
              key={t}
              className="flex items-center gap-2 border border-paper-400 bg-paper-50 px-3 py-2.5 text-sm text-ink-700 cursor-pointer hover:border-navy-500 transition-colors has-[:checked]:border-navy-700 has-[:checked]:bg-navy-800 has-[:checked]:text-paper-50"
            >
              <input type="checkbox" name="topics" value={t} className="accent-navy-800" />
              {t}
            </label>
          ))}
        </div>
      </fieldset>

      <div>
        <label htmlFor="message" className={labelCls}>
          相談内容 <span className="text-enji-500 text-xs align-middle">必須</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className={inputCls}
          placeholder="麺の用途、想定しているスープや調理方法、ご希望の食感・数量、ご相談の背景などをご記入ください。「こういう麺を作りたい」という段階のご相談も歓迎です。"
        />
      </div>

      {status === 'error' && (
        <p className="text-sm text-enji-600 bg-enji-500/5 border border-enji-500/30 px-4 py-3">
          送信に失敗しました。時間をおいて再度お試しいただくか、お電話（{PHONE}）にてご連絡ください。
        </p>
      )}

      <div className="pt-2">
        <button
          type="submit"
          disabled={status === 'sending'}
          className="w-full sm:w-auto inline-flex items-center justify-center bg-enji-500 text-paper-50 px-12 py-4 text-sm tracking-widest hover:bg-enji-600 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === 'sending' ? '送信中…' : 'この内容で送信する'}
        </button>
        <p className="mt-4 text-xs text-ink-500 leading-relaxed">
          お電話の際は「{PHONE_NOTE}」。<br />
          送信いただいた内容は、お問い合わせ対応の目的にのみ使用します。
        </p>
      </div>
    </form>
  )
}
