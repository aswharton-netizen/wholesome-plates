import type { Config } from 'tailwindcss'
const config: Config = {
  content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}','./components/**/*.{js,ts,jsx,tsx,mdx}','./app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: { extend: { colors: { forest:'#1C3A2A', gold:'#B8892A', goldLight:'#D4A843', cream:'#FAF6EE', sage:'#C8DDD3', stone:'#7A7060', white:'#FDFAF5' }, fontFamily: { serif:['Georgia','Times New Roman','serif'], sans:['Arial','Helvetica','sans-serif'] } } },
  plugins: [],
}
export default config
