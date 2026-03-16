import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        highlight: '#0284c7', // sky-600
        bgbase: '#f4faff', // very light sky
        hero: '#166aa3', // Hero background blue
        dark: '#0f172a', // slate-900
        muted: '#475569', // slate-600
        border: '#cbd5e1', // slate-300
      },
      fontFamily: {
        heading: ['var(--font-fraunces)', 'Georgia', 'serif'],
        body: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'card-grad': 'linear-gradient(to right, #eaf5ff, #cde6fa)', // gradient background left light to right dark
      }
    },
  },
  plugins: [],
}
export default config
