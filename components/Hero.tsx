export default function Hero() {
  return (
    <section style={{ position: 'relative', height: '100vh', minHeight: 600, overflow: 'hidden' }}>
      {/* Background image */}
      <div
        style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'url(/images/hero.jpg)',
          backgroundSize: '100% auto',
          backgroundPosition: 'center top',
        }}
      />

      {/* Gradient overlay */}
      <div
        style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to right, rgba(28,58,42,0.9) 0%, rgba(28,58,42,0.55) 50%, rgba(28,58,42,0.1) 100%)',
        }}
      />

      {/* Content */}
      <div
        style={{
          position: 'relative', zIndex: 1,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '0 clamp(24px, 6vw, 96px)',
          maxWidth: 760,
        }}
      >
        <p style={{ fontFamily: 'Arial, sans-serif', fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#B8892A', margin: '0 0 20px' }}>
          Wholesome Plates Table · Metro Atlanta
        </p>

        <h1 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(36px, 5vw, 54px)', lineHeight: 1.1, color: '#FDFAF5', margin: '0 0 20px', fontWeight: 400 }}>
          Your kitchen.<br />
          <em style={{ color: '#D4A843' }}>Food that earns its place in your fridge.</em>
        </h1>

        <p style={{ fontFamily: 'Arial, sans-serif', fontSize: 15, lineHeight: 1.75, color: '#C8DDD3', margin: '0 0 36px', maxWidth: 520 }}>
          A chef comes to your home, cooks for your week, and leaves your kitchen spotless. Our braised dishes and grain bakes are built to deepen in flavor as they sit. By Wednesday you&rsquo;ll be glad you booked Monday.
        </p>

        <div style={{ display: 'flex', gap: 24, alignItems: 'center', flexWrap: 'wrap' }}>
          <a
            href="#book"
            style={{ backgroundColor: '#B8892A', color: '#FAF6EE', fontFamily: 'Arial, sans-serif', fontWeight: 700, fontSize: '0.78rem', letterSpacing: '0.1em', textTransform: 'uppercase', padding: '14px 28px', textDecoration: 'none', display: 'inline-block' }}
          >
            Book a Session
          </a>
          <a
            href="#services"
            style={{ color: '#C8DDD3', fontFamily: 'Arial, sans-serif', fontSize: '0.82rem', letterSpacing: '0.04em', textDecoration: 'none' }}
          >
            See how it works →
          </a>
        </div>

        <div style={{ width: '100%', height: 1, backgroundColor: 'rgba(200,221,211,0.2)', margin: '48px 0 32px' }} />

        <div style={{ display: 'flex', gap: 48, flexWrap: 'wrap' }}>
          {[
            { num: '4', label: 'Chefs on the team' },
            { num: '~100', label: 'Years combined experience' },
            { num: '$350', label: 'Sessions starting from' },
          ].map(s => (
            <div key={s.label}>
              <div style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic', fontSize: 30, color: '#D4A843', lineHeight: 1 }}>
                {s.num}
              </div>
              <div style={{ fontFamily: 'Arial, sans-serif', fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#C8DDD3', marginTop: 6 }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
