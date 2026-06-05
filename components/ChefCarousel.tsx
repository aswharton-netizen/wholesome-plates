'use client'
import { useState, useEffect, useRef, useCallback } from 'react'

interface Chef { initials: string; name: string; specialty: string; bio: string; tags: string[] }

const chefs: Chef[] = [
  { initials: 'RJ', name: 'Rashon Jones', specialty: 'Fine dining & technique-forward',
    bio: 'From fine dining supervision in Buckhead to institutional kitchens across the East Coast, Rashon brings professional-grade precision and serious range. He executed three complete recipes — a citrus-braised pork taco, crispy cheese burritos, and a vegan carrot cake from scratch — in a single five-hour session before his first client booking.',
    tags: ['Fine dining', 'Pastry & baking', 'Meal prep systems', 'Sauce work', 'Braising'] },
  { initials: 'MF', name: 'Marlene Findley', specialty: 'Southern tradition',
    bio: "Marlene cooks with the kind of confidence that only comes from decades at the stove. Her smothered turkey legs are the kind of dish people request by name, remember for years, and talk about long after the plate is clean. She brings a generational knowledge of Southern cooking to every session.",
    tags: ['Southern comfort', 'Low and slow', 'Braised proteins', 'Soul food tradition'] },
  { initials: 'MH', name: 'Mike Holcomb', specialty: 'Live fire & smoke',
    bio: "Mike has spent his career understanding heat — how smoke penetrates, how fire builds a bark, how time and low temperature transform a cut of meat into something entirely different. He brings that same mastery of heat and patience to every session, even indoors.",
    tags: ['Pitmaster technique', 'Smoked proteins', 'Live fire', 'American BBQ'] },
  { initials: 'TG', name: 'Thang Gin', specialty: 'Japanese & Asian-inspired',
    bio: 'Trained in sushi technique and deeply versed in the broader traditions of East and Southeast Asian cooking. Thang brings balance, restraint, and precision to every menu he touches — dishes that are exactly what they should be, nothing more and nothing less.',
    tags: ['Sushi & knife work', 'Japanese technique', 'Vietnamese-inspired', 'Asian-fusion'] },
]

const extended = [chefs[chefs.length - 1], ...chefs, chefs[0]]

export default function ChefCarousel() {
  const [index, setIndex] = useState(1)
  const [transitioning, setTransitioning] = useState(true)
  const isJumping = useRef(false)

  const realIndex = (() => {
    if (index === 0) return chefs.length - 1
    if (index === extended.length - 1) return 0
    return index - 1
  })()

  const go = useCallback((dir: 1 | -1) => {
    if (isJumping.current) return
    setTransitioning(true)
    setIndex(i => i + dir)
  }, [])

  useEffect(() => {
    if (!transitioning) return
    if (index === extended.length - 1) {
      const t = setTimeout(() => {
        isJumping.current = true
        setTransitioning(false)
        setIndex(1)
        requestAnimationFrame(() => requestAnimationFrame(() => { setTransitioning(true); isJumping.current = false }))
      }, 320)
      return () => clearTimeout(t)
    }
    if (index === 0) {
      const t = setTimeout(() => {
        isJumping.current = true
        setTransitioning(false)
        setIndex(chefs.length)
        requestAnimationFrame(() => requestAnimationFrame(() => { setTransitioning(true); isJumping.current = false }))
      }, 320)
      return () => clearTimeout(t)
    }
  }, [index, transitioning])

  return (
    <section id="team" style={{ backgroundColor: '#1C3A2A', padding: '96px 0 64px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 48px' }}>
        <p style={{ fontFamily: 'Arial, sans-serif', fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#B8892A', margin: '0 0 12px' }}>Our Chefs</p>
        <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', color: '#FDFAF5', margin: '0 0 12px', fontWeight: 400 }}>The people behind the food.</h2>
        <p style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic', fontSize: 17, color: '#D4A843', margin: '0 0 48px', lineHeight: 1.6 }}>Nearly 100 years of combined experience — Southern tradition, live fire, fine dining, and Japanese technique. They work together to build menus that fit your life.</p>
      </div>
      <div style={{ overflow: 'hidden' }}>
        <div style={{ display: 'flex', transform: `translateX(-${index * 100}%)`, transition: transitioning ? 'transform 300ms ease-in-out' : 'none' }}>
          {extended.map((chef, i) => (
            <div key={i} style={{ minWidth: '100%', padding: '0 48px' }}>
              <div style={{ maxWidth: 1100, margin: '0 auto' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '80px 1fr', gap: 28, alignItems: 'start' }}>
                  <div style={{ width: 80, height: 80, borderRadius: '50%', backgroundColor: '#2C5240', border: '1px solid #B8892A', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Georgia, serif', fontSize: '1.4rem', color: '#D4A843', flexShrink: 0 }}>{chef.initials}</div>
                  <div>
                    <h3 style={{ fontFamily: 'Georgia, serif', fontSize: 22, color: '#FDFAF5', margin: '0 0 4px', fontWeight: 400 }}>{chef.name}</h3>
                    <p style={{ fontFamily: 'Arial, sans-serif', fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#D4A843', margin: '0 0 16px' }}>{chef.specialty}</p>
                    <p style={{ fontFamily: 'Arial, sans-serif', fontSize: 14, lineHeight: 1.75, color: '#C8DDD3', margin: '0 0 20px', maxWidth: 640 }}>{chef.bio}</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                      {chef.tags.map(tag => (<span key={tag} style={{ fontFamily: 'Arial, sans-serif', fontSize: 11, color: '#C8DDD3', border: '1px solid rgba(200,221,211,0.3)', backgroundColor: 'rgba(255,255,255,0.05)', padding: '4px 12px', borderRadius: 20 }}>{tag}</span>))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '40px 48px 0', display: 'flex', alignItems: 'center', gap: 24 }}>
        <div style={{ display: 'flex', gap: 12 }}>
          <button onClick={() => go(-1)} style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(200,221,211,0.2)', color: '#C8DDD3', width: 44, height: 44, cursor: 'pointer', fontSize: 18, display: 'flex', alignItems: 'center', justifyContent: 'center' }} aria-label="Previous">←</button>
          <button onClick={() => go(1)} style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(200,221,211,0.2)', color: '#C8DDD3', width: 44, height: 44, cursor: 'pointer', fontSize: 18, display: 'flex', alignItems: 'center', justifyContent: 'center' }} aria-label="Next">→</button>
        </div>
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center', gap: 10 }}>
          {chefs.map((_, i) => (<button key={i} onClick={() => { setTransitioning(true); setIndex(i + 1) }} style={{ width: i === realIndex ? 10 : 7, height: i === realIndex ? 10 : 7, borderRadius: '50%', background: i === realIndex ? '#D4A843' : 'rgba(200,221,211,0.35)', border: 'none', cursor: 'pointer', padding: 0, transition: 'all 0.2s' }} aria-label={`Chef ${i + 1}`} />))}
        </div>
        <div style={{ fontFamily: 'Arial, sans-serif', fontSize: 12, color: 'rgba(200,221,211,0.5)', letterSpacing: '0.06em', minWidth: 40, textAlign: 'right' }}>{realIndex + 1} / {chefs.length}</div>
      </div>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '40px 48px 0', display: 'flex', alignItems: 'baseline', gap: 16 }}>
        <span style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic', fontSize: 40, color: '#D4A843', lineHeight: 1 }}>~100</span>
        <span style={{ fontFamily: 'Arial, sans-serif', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#C8DDD3' }}>Years of combined culinary experience on your team</span>
      </div>
    </section>
  )
}
