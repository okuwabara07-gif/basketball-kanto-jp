import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '関東ジュニアバスケットボール情報局 | チーム検索・AI診断',
  description: '東京・神奈川・埼玉・千葉のミニバス・ジュニアバスケチーム500以上を検索。AI診断・セレクション情報も。',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3460729726810386" crossorigin="anonymous"></script>
<html lang="ja">
      <body>{children}</body>
    </html>
  )
}