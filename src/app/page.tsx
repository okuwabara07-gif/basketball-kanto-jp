'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

const HERO_IMAGES = [
  { url:'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=900&q=80', pos:'center 30%', label:'関東のコートで、頂点を目指せ' },
  { url:'https://images.unsplash.com/photo-1574623452334-1e0ac2b3ccb4?w=900&q=80', pos:'center 25%', label:'仲間と共に、限界を超えろ' },
  { url:'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=900&q=80', pos:'center 40%', label:'毎日の練習が、未来を変える' },
  { url:'https://images.unsplash.com/photo-1519766304817-4f37bda74a26?w=900&q=80', pos:'center 35%', label:'最高のチームと出会う場所' },
  { url:'https://images.unsplash.com/photo-1504450758481-7338eba7524a?w=900&q=80', pos:'center 20%', label:'ジュニアバスケの未来はここに' },
]

export default function HomePage() {
  const [heroIdx, setHeroIdx] = useState(0)

  useEffect(() => {
    setHeroIdx(Math.floor(Math.random() * HERO_IMAGES.length))
    const timer = setInterval(() => setHeroIdx(prev => (prev + 1) % HERO_IMAGES.length), 5000)
    return () => clearInterval(timer)
  }, [])

  const hero = HERO_IMAGES[heroIdx]

  return (
    <main style={{minHeight:'100vh',background:'#0a0a0a',fontFamily:'-apple-system,sans-serif'}}>

      {/* ヒーロー */}
      <div style={{position:'relative',height:'100svh',maxHeight:700,overflow:'hidden'}}>
        <img key={heroIdx} src={hero.url} alt="バスケットボール"
          style={{width:'100%',height:'100%',objectFit:'cover',objectPosition:hero.pos,animation:'fadeIn 1s ease-in-out'}}/>
        <div style={{position:'absolute',inset:0,background:'linear-gradient(to bottom,rgba(0,0,0,0.3) 0%,rgba(10,10,10,0.95) 100%)'}}>

          <div style={{position:'absolute',top:0,left:0,right:0,padding:'16px',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
            <div>
              <p style={{color:'rgba(255,255,255,0.5)',fontSize:9,letterSpacing:'0.15em',marginBottom:2}}>KANTO BASKETBALL DATABASE</p>
              <p style={{color:'white',fontSize:13,fontWeight:700,lineHeight:1.2}}>バスケ東京・神奈川<br/>埼玉・千葉</p>
            </div>
            <Link href="/member" style={{padding:'8px 14px',borderRadius:20,background:'#FF6B00',color:'white',fontSize:11,fontWeight:700,textDecoration:'none',whiteSpace:'nowrap'}}>
              会員登録
            </Link>
          </div>

          <div style={{position:'absolute',bottom:120,left:20,right:20}}>
            <p style={{color:'rgba(255,255,255,0.5)',fontSize:10,letterSpacing:'0.2em',marginBottom:8}}>TOKYO & KANTO</p>
            <h1 style={{color:'white',fontSize:36,fontWeight:700,lineHeight:1.2,marginBottom:8,textShadow:'0 2px 8px rgba(0,0,0,0.6)'}}>
              チームを探す。<br/>仲間と出会う。<br/>高みを目指す。
            </h1>
            <p style={{color:'rgba(255,255,255,0.75)',fontSize:14,fontWeight:600,lineHeight:1.6,textShadow:'0 1px 4px rgba(0,0,0,0.8)'}}>
              東京・関東のバスケ情報を<br/>ひとつにまとめたプラットフォーム
            </p>
          </div>

          <div style={{position:'absolute',bottom:40,left:20,right:20,display:'flex',gap:10}}>
            <Link href="/teams" style={{flex:2,padding:'14px',borderRadius:12,background:'#FF6B00',color:'white',fontSize:14,fontWeight:700,textDecoration:'none',textAlign:'center',boxShadow:'0 4px 12px rgba(255,107,0,0.4)'}}>
              チームを探す
            </Link>
            <Link href="/mypage" style={{flex:1,padding:'14px',borderRadius:12,background:'rgba(255,255,255,0.12)',border:'1px solid rgba(255,255,255,0.2)',color:'white',fontSize:13,fontWeight:500,textDecoration:'none',textAlign:'center'}}>
              マイページ
            </Link>
          </div>

          <div style={{position:'absolute',bottom:16,left:'50%',transform:'translateX(-50%)',display:'flex',flexDirection:'column',alignItems:'center',gap:8}}>
            <p style={{color:'rgba(255,255,255,0.6)',fontSize:10,textShadow:'0 1px 4px rgba(0,0,0,0.9)'}}>{HERO_IMAGES[heroIdx].label}</p>
            <div style={{display:'flex',gap:6}}>
              {HERO_IMAGES.map((_,i)=>(
                <div key={i} onClick={()=>setHeroIdx(i)}
                  style={{width:i===heroIdx?22:6,height:6,borderRadius:3,background:i===heroIdx?'#FF6B00':'rgba(255,255,255,0.35)',transition:'all 0.4s ease',cursor:'pointer'}}/>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 統計 */}
      <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:1,background:'rgba(255,255,255,0.05)'}}>
        {[['500+','登録チーム'],['4都県','対応エリア'],['無料','チーム検索']].map(([num,label])=>(
          <div key={label} style={{background:'#111',padding:'16px 8px',textAlign:'center'}}>
            <p style={{fontSize:20,fontWeight:700,color:'#FF6B00',marginBottom:2}}>{num}</p>
            <p style={{fontSize:10,color:'rgba(255,255,255,0.4)'}}>{label}</p>
          </div>
        ))}
      </div>

      {/* メニュー */}
      <div style={{padding:'16px'}}>
        <p style={{fontSize:10,color:'rgba(255,255,255,0.3)',letterSpacing:'0.15em',marginBottom:12}}>MENU</p>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:8,marginBottom:8}}>
          {[
            {href:'/teams',emoji:'🗺️',title:'チームを探す',desc:'500+チームをエリアで検索',image:'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400&q=80'},
            {href:'/matching',emoji:'🤝',title:'AIチームマッチング',desc:'7つの質問で最適チームを提案',image:'https://images.unsplash.com/photo-1574623452334-1e0ac2b3ccb4?w=400&q=80'},
          ].map(item=>(
            <Link key={item.href} href={item.href}
              style={{position:'relative',height:130,borderRadius:14,overflow:'hidden',textDecoration:'none',display:'block'}}>
              <img src={item.image} alt={item.title} style={{width:'100%',height:'100%',objectFit:'cover'}}/>
              <div style={{position:'absolute',inset:0,background:'linear-gradient(to bottom,transparent 20%,rgba(0,0,0,0.85) 100%)'}}>
                <div style={{position:'absolute',bottom:10,left:10,right:10}}>
                  <span style={{fontSize:16}}>{item.emoji}</span>
                  <p style={{fontSize:12,fontWeight:700,color:'white',marginBottom:1}}>{item.title}</p>
                  <p style={{fontSize:9,color:'rgba(255,255,255,0.6)'}}>{item.desc}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:6,marginBottom:8}}>
          {[
            {href:'/body-check',emoji:'📊',title:'体格診断',color:'#e63946'},
            {href:'/nutrition',emoji:'🥗',title:'栄養ガイド',color:'#2d6a4f'},
            {href:'/shoes',emoji:'👟',title:'バッシュ選び',color:'#457b9d'},
          ].map(item=>(
            <Link key={item.href} href={item.href}
              style={{padding:'14px 8px',borderRadius:12,background:'#111',border:`1px solid ${item.color}30`,textDecoration:'none',textAlign:'center',display:'block'}}>
              <span style={{fontSize:22,display:'block',marginBottom:4}}>{item.emoji}</span>
              <p style={{fontSize:10,fontWeight:600,color:'white'}}>{item.title}</p>
            </Link>
          ))}
        </div>

        <div style={{display:'flex',flexDirection:'column',gap:6}}>
          {[
            {href:'/rules',emoji:'📋',title:'ルール＆用語検索',desc:'最新ルール・AI質問対応',color:'#854F0B'},
            {href:'/position',emoji:'🎯',title:'ポジション別資料',desc:'PG・SG・SF・PF・C 解説',color:'#534AB7'},
            {href:'/calendar',emoji:'📅',title:'大会カレンダー',desc:'締切情報・申込URL',color:'#185FA5'},
            {href:'/manga',emoji:'📚',title:'バスケ漫画ランキング',desc:'スラムダンク・黒子のバスケ etc.',color:'#e63946'},
          ].map(item=>(
            <Link key={item.href} href={item.href}
              style={{display:'flex',alignItems:'center',gap:12,padding:'12px 14px',borderRadius:12,background:'#111',border:`1px solid ${item.color}20`,textDecoration:'none'}}>
              <span style={{fontSize:22,flexShrink:0}}>{item.emoji}</span>
              <div style={{flex:1}}>
                <p style={{fontSize:12,fontWeight:600,color:'white',marginBottom:1}}>{item.title}</p>
                <p style={{fontSize:10,color:'rgba(255,255,255,0.4)'}}>{item.desc}</p>
              </div>
              <span style={{color:'rgba(255,255,255,0.2)',fontSize:16}}>›</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Amazon用品 */}
      <div style={{margin:'0 16px 16px',padding:'16px',background:'#111',borderRadius:14,border:'1px solid rgba(255,107,0,0.2)'}}>
        <p style={{fontSize:10,color:'rgba(255,255,255,0.4)',letterSpacing:'0.15em',marginBottom:12}}>BASKETBALL GOODS</p>
        <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:6}}>
          {[
            {e:'👟',l:'バッシュ',k:'バスケットシューズ ジュニア'},
            {e:'🏀',l:'ボール',k:'バスケットボール 6号'},
            {e:'👕',l:'ユニフォーム',k:'バスケ ユニフォーム ジュニア'},
            {e:'🎽',l:'練習着',k:'バスケ 練習着 ジュニア'},
          ].map(item=>(
            <a key={item.k}
              href={`https://www.amazon.co.jp/s?k=${encodeURIComponent(item.k)}&tag=${AMAZON_TAG}`}
              target="_blank" rel="noopener noreferrer sponsored"
              style={{padding:'10px 4px',borderRadius:10,background:'rgba(255,255,255,0.03)',border:'1px solid rgba(255,255,255,0.06)',textDecoration:'none',textAlign:'center',display:'block'}}>
              <span style={{fontSize:22,display:'block',marginBottom:3}}>{item.e}</span>
              <p style={{fontSize:9,color:'white',fontWeight:600,marginBottom:1}}>{item.l}</p>
              <p style={{fontSize:8,color:'#FF9900'}}>Amazon</p>
            </a>
          ))}
        </div>
      </div>

      {/* SNS */}
      <div style={{margin:'0 16px 16px',padding:'16px',background:'#111',borderRadius:14,border:'1px solid rgba(255,255,255,0.08)'}}>
        <p style={{fontSize:10,color:'rgba(255,255,255,0.4)',letterSpacing:'0.15em',marginBottom:12}}>SNS・シェア</p>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:8}}>
          <a href="https://line.me/R/msg/text/?関東ジュニアバスケ情報局%0ahttps://basketball-kanto-jp.vercel.app"
            target="_blank" rel="noopener noreferrer"
            style={{display:'flex',alignItems:'center',justifyContent:'center',gap:8,padding:'10px',borderRadius:10,background:'#06C755',textDecoration:'none',color:'white',fontSize:12,fontWeight:700}}>
            💬 LINEで送る
          </a>
          <a href="https://twitter.com/intent/tweet?text=関東のジュニアバスケチームを検索できます🏀&url=https://basketball-kanto-jp.vercel.app&hashtags=ジュニアバスケ,ミニバス,関東バスケ"
            target="_blank" rel="noopener noreferrer"
            style={{display:'flex',alignItems:'center',justifyContent:'center',gap:8,padding:'10px',borderRadius:10,background:'#1DA1F2',textDecoration:'none',color:'white',fontSize:12,fontWeight:700}}>
            🐦 Xで共有
          </a>
        </div>
      </div>

      {/* 会員CTA */}
      <div style={{margin:'0 16px 16px',padding:'20px',borderRadius:14,background:'linear-gradient(135deg,#1a1a2e,#16213e)',border:'1px solid rgba(255,107,0,0.3)'}}>
        <p style={{color:'#FF6B00',fontSize:10,fontWeight:600,marginBottom:3}}>PREMIUM MEMBER</p>
        <p style={{color:'white',fontSize:14,fontWeight:700,marginBottom:2}}>セレクション情報を解放</p>
        <p style={{color:'rgba(255,255,255,0.6)',fontSize:10,marginBottom:12}}>申込URL・締切日・チーム詳細</p>
        <Link href="/member" style={{display:'block',padding:'10px 16px',borderRadius:10,background:'#FF6B00',color:'white',fontSize:12,fontWeight:700,textDecoration:'none',textAlign:'center'}}>
          ¥500/月〜
        </Link>
      </div>

      {/* フッター */}
      <div style={{padding:'16px',borderTop:'1px solid rgba(255,255,255,0.05)',textAlign:'center'}}>
        <p style={{fontSize:10,color:'rgba(255,255,255,0.2)'}}>© 2026 関東ジュニアバスケットボール情報局</p>
        <p style={{fontSize:9,color:'rgba(255,255,255,0.15)',marginTop:4}}>本サイトはアフィリエイト広告を含みます</p>
      </div>

      <style>{`@keyframes fadeIn { from{opacity:0} to{opacity:1} }`}</style>
    </main>
  )
}