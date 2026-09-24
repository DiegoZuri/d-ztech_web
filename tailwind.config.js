/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Built from "-rgb" channel-triplet tokens (see src/styles/index.css)
        // via rgb(var(...) / <alpha-value>) so opacity modifiers like
        // `bg-primary/20` resolve correctly against CSS-variable colors.
        bg: 'rgb(var(--color-bg-rgb) / <alpha-value>)',
        'bg-alt': 'rgb(var(--color-bg-alt-rgb) / <alpha-value>)',
        'bg-inverse': 'rgb(var(--color-bg-inverse-rgb) / <alpha-value>)',
        surface: 'rgb(var(--color-surface-rgb) / <alpha-value>)',
        'surface-hover': 'rgb(var(--color-surface-hover-rgb) / <alpha-value>)',
        primary: 'rgb(var(--color-primary-rgb) / <alpha-value>)',
        'primary-light': 'rgb(var(--color-primary-light-rgb) / <alpha-value>)',
        'primary-dark': 'rgb(var(--color-primary-dark-rgb) / <alpha-value>)',
        secondary: 'rgb(var(--color-secondary-rgb) / <alpha-value>)',
        accent: 'rgb(var(--color-accent-rgb) / <alpha-value>)',
        text: 'rgb(var(--color-text-rgb) / <alpha-value>)',
        'text-inverse': 'rgb(var(--color-text-inverse-rgb) / <alpha-value>)',
        muted: 'rgb(var(--color-muted-rgb) / <alpha-value>)',
        'muted-inverse': 'rgb(var(--color-muted-inverse-rgb) / <alpha-value>)',
        border: 'var(--color-border)',
        'border-strong': 'var(--color-border-strong)',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      maxWidth: {
        container: '1320px',
      },
      borderRadius: {
        xl2: '1.25rem',
      },
      transitionTimingFunction: {
        premium: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      boxShadow: {
        soft: '0 1px 2px rgba(8,10,16,0.04), 0 8px 24px -8px rgba(8,10,16,0.08)',
        elevated: '0 4px 12px rgba(8,10,16,0.06), 0 24px 48px -16px rgba(8,10,16,0.16)',
        glow: '0 0 0 1px rgba(29,111,255,0.15), 0 8px 32px -8px rgba(29,111,255,0.35)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'spin-slow': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.55' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.22,1,0.36,1) both',
        float: 'float 6s ease-in-out infinite',
        'spin-slow': 'spin-slow 30s linear infinite',
        'pulse-soft': 'pulse-soft 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
