'use client'
import { useState } from 'react'
import { getSupabase } from '@/lib/supabase'

export default function BookingSection() {
  const [form, setForm] = useState({ name: '', email: '', household_size: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    const { error } = await getSupabase().from('table_inquiries').insert([form])
    setStatus(error ? 'error' : 'success')
  }

  const inputStyle: React.CSSProperties = { width: '100%', backgroundColor: 'rgba(255,255,255,0.07)', border: '1px solid rgba(200,221,211,0.25)', color: '#FDFAF5', fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '14px 16px', outline: 'none' }
  const labelStyle: React.CSSProperties = { fontFamily: 'Arial, sans-serif', fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase' as const, color: 'rgba(200,221,211,0.6)', display: 'block', marginBottom: 6 }

  return (
    <section id="book" style={{ backgroundColor: '#2C5240', padding: '96px 48px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}>
        <div>
          <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 32, color: '#FDFAF5', margin: '0 0 20px', fontWeight: 400, lineHeight: 1.2 }}>Let&rsquo;s build your menu.</h2>
          <p style={{ fontFamily: 'Arial, sans-serif', fontSize: 13, lineHeight: 1.85, color: '#C8DDD3', margin: '0 0 40px' }}>Tell us about your household and what a great week of eating looks like. We&rsquo;ll follow up to schedule your 15-minute intro call and match you with your chef.</p>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 18 }}>
            {[{ text: '15-minute intro call — no commitment required', sub: null },{ text: '50% deposit at booking, remainder 24 hours before your session', sub: null },{ text: 'Groceries separate — you shop, or we source for you', sub: 'Grocery sourcing from $50 · varies by session size' },{ text: 'Sessions Tuesday through Saturday across metro Atlanta', sub: null }].map((item, i) => (
              <li key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                <span style={{ color: '#D4A843', fontSize: 8, marginTop: 6, flexShrink: 0 }}>●</span>
                <div><span style={{ fontFamily: 'Arial, sans-serif', fontSize: 13, color: '#C8DDD3', lineHeight: 1.6 }}>{item.text}</span>{item.sub && <p style={{ fontFamily: 'Arial, sans-serif', fontSize: 11, color: '#D4A843', margin: '4px 0 0' }}>{item.sub}</p>}</div>
              </li>
            ))}
          </ul>
        </div>
        <div>
          {status === 'success' ? (
            <div style={{ padding: '48px 0' }}><p style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic', fontSize: 17, color: '#C8DDD3', lineHeight: 1.7 }}>We received your message. We&rsquo;ll be in touch within 24 hours.</p></div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <div><label style={labelStyle}>Full Name</label><input type="text" required placeholder="Your name" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} style={inputStyle} /></div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                <div><label style={labelStyle}>Email</label><input type="email" required placeholder="your@email.com" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} style={inputStyle} /></div>
                <div><label style={labelStyle}>Household Size</label><input type="text" placeholder="e.g. 2 adults, 1 child" value={form.household_size} onChange={e => setForm(f => ({ ...f, household_size: e.target.value }))} style={inputStyle} /></div>
              </div>
              <div><label style={labelStyle}>What brings you here?</label><textarea rows={4} placeholder="Tell us about what you're looking for..." value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))} style={{ ...inputStyle, resize: 'vertical', verticalAlign: 'top' }} /></div>
              {status === 'error' && <p style={{ fontFamily: 'Arial, sans-serif', fontSize: 13, color: '#D4A843' }}>Something went wrong. Please email us directly at info@wholesomeplatescatering.com.</p>}
              <button type="submit" disabled={status === 'loading'} style={{ width: '100%', backgroundColor: status === 'loading' ? '#9a7322' : '#B8892A', color: '#FAF6EE', fontFamily: 'Arial, sans-serif', fontWeight: 700, fontSize: '0.78rem', letterSpacing: '0.12em', textTransform: 'uppercase', padding: '16px', border: 'none', cursor: status === 'loading' ? 'not-allowed' : 'pointer' }}>{status === 'loading' ? 'Sending…' : 'Get Started →'}</button>
              <p style={{ fontFamily: 'Arial, sans-serif', fontSize: 11, color: 'rgba(200,221,211,0.5)', textAlign: 'center', margin: 0 }}>Sessions from $350 · Groceries separate · Your kitchen, our work</p>
            </form>
          )}
          <div style={{ marginTop: 48 }}>
            <p style={{ fontFamily: 'Arial, sans-serif', fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(200,221,211,0.5)', marginBottom: 16 }}>Or book your 15-minute intro call directly:</p>
            <div className="calendly-inline-widget" data-url="https://calendly.com/team-wholesomeplatescatering/30min?background_color=2C5240&text_color=FDFAF5&primary_color=B8892A" style={{ minWidth: 280, height: 630 }} />
          </div>
        </div>
      </div>
    </section>
  )
}
