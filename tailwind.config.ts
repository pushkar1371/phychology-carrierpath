import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
      },
      fontFamily: {
        'sans': ['Inter', 'ui-sans-serif', 'system-ui'],
        'display': ['Cal Sans', 'ui-sans-serif', 'system-ui'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'bounce-subtle': 'bounceSubtle 2s infinite',
        'gradient': 'gradient 8s ease infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        gradient: {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
      },
      backgroundSize: {
        '300%': '300%',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          "primary": "#3B82F6",
          "primary-content": "#ffffff",
          "secondary": "#8B5CF6", 
          "secondary-content": "#ffffff",
          "accent": "#06D6A0",
          "accent-content": "#ffffff",
          "neutral": "#64748B",
          "neutral-content": "#ffffff",
          "base-100": "#ffffff",
          "base-200": "#F8FAFC",
          "base-300": "#E2E8F0",
          "base-content": "#1E293B",
          "info": "#0EA5E9",
          "success": "#10B981",
          "warning": "#F59E0B", 
          "error": "#EF4444",
        },
      },
      {
        dark: {
          "primary": "#60A5FA",
          "primary-content": "#1E293B", 
          "secondary": "#A78BFA",
          "secondary-content": "#1E293B",
          "accent": "#34D399",
          "accent-content": "#1E293B",
          "neutral": "#475569",
          "neutral-content": "#E2E8F0",
          "base-100": "#0F172A",
          "base-200": "#1E293B",
          "base-300": "#334155",
          "base-content": "#F1F5F9",
          "info": "#38BDF8",
          "success": "#22C55E", 
          "warning": "#FBBF24",
          "error": "#F87171",
        },
      },
    ],
  },
}

export default config
