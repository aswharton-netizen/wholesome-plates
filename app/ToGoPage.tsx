'use client'
import { useState } from 'react'
import { getSupabase } from '@/lib/supabase'

export default function ToGoPage() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setStatus('loading')
    const { error } = await getSupabase().from('togo_waitlist').insert([{ email }])
    setStatus(error ? 'error' : 'success')
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#1C3A2A', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '48px 24px', textAlign: 'center' }}>
      <div style={{ maxWidth: 520, width: '100%' }}>
        <p style={{ fontFamily: 'Arial, sans-serif', fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#B8892A', margin: '0 0 28px' }}>Wholesome Plates</p>
        <h1 style={{ fontFamily: 'Georgia, serif', fontWeight: 400, lineHeight: 1.1, color: '#FDFAF5', fontSize: 'clamp(48px, 8vw, 64px)', margin: '0 0 28px' }}><em>To-Go</em><br />is coming.</h1>
        <p style={{ fontFamily: 'Arial, sans-serif', fontSize: 14, lineHeight: 1.75, color: '#C8DDD3', margin: '0 0 36px' }}>Premium meal prep, delivered. The same technique-forward cooking you&rsquo;d expect from a private chef — portioned, labeled, and ready for your week. Coming soon to metro Atlanta.</p>
        <div style={{ width: 40, height: 1, backgroundColor: '#B8892A', margin: '0 auto 36px' }} />
        {status === 'success' ? (
          <p style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic', fontSize: 17, color: '#C8DDD3', lineHeight: 1.6 }}>You&rsquo;re on the list.</p>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', gap: 0, maxWidth: 400, margin: '0 auto' }}>
            <input type="email" required placeholder="your@email.com" value={email} onChange={e => setEmail(e.target.value)}
              style={{ flex: 1, backgroundColor: 'rgba(255,255,255,0.06)', border: '0.5px solid rgba(200,221,211,0.3)', borderRight: 'none', color: '#FDFAF5', fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '13px 18px', outline: 'none' }} />
            <button type="submit" disabled={status === 'loading'}
              style={{ backgroundColor: status === 'loading' ? '#9a7322' : '#B8892A', color: '#FAF6EE', fontFamily: 'Arial, sans-serif', fontWeight: 700, fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase', padding: '13px 22px', border: 'none', cursor: status === 'loading' ? 'not-allowed' : 'pointer', whiteSpace: 'nowrap' }}>
              {status === 'loading' ? '…' : 'Notify me'}
            </button>
          </form>
        )}
        {status === 'error' && <p style={{ fontFamily: 'Arial, sans-serif', fontSize: 12, color: '#D4A843', marginTop: 12 }}>Something went wrong — try again in a moment.</p>}
        <div style={{ marginTop: 56 }}><a href="https://table.wholesomeplatescatering.com" style={{ fontFamily: 'Arial, sans-serif', fontSize: 11, color: '#7A7060', textDecoration: 'none', letterSpacing: '0.04em' }}>table.wholesomeplatescatering.com → Book a private chef session today</a></div>
      </div>
      <p style={{ position: 'absolute', bottom: 24, fontFamily: 'Arial, sans-serif', fontSize: 10, color: '#7A7060', letterSpacing: '0.06em' }}>&copy; 2026 Wholesome Plates Catering LLC</p>
    </div>
  )
}
