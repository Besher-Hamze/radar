
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: '#FC5D48',
					foreground: '#FFFFFF'
				},
				secondary: {
					DEFAULT: '#272636',
					foreground: '#FFFFFF'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				coral: {
					DEFAULT: '#FC5D48',
					50: '#FEF2F1',
					100: '#FDE5E3',
					200: '#FBCBC7',
					300: '#F8A8A1',
					400: '#F57A6C',
					500: '#FC5D48',
					600: '#E8402A',
					700: '#C2311C',
					800: '#A1291A',
					900: '#86261C'
				},
				dark: {
					DEFAULT: '#272636',
					50: '#F4F4F5',
					100: '#E9E9EB',
					200: '#D3D3D7',
					300: '#BCBCC3',
					400: '#8A8A95',
					500: '#5A5A67',
					600: '#4A4A55',
					700: '#393947',
					800: '#272636',
					900: '#1C1C28'
				}
			},
			borderRadius: {
				lg: '12px',
				md: '8px',
				sm: '6px'
			},
			keyframes: {
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(30px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'fade-in-left': {
					'0%': { opacity: '0', transform: 'translateX(-30px)' },
					'100%': { opacity: '1', transform: 'translateX(0)' }
				},
				'fade-in-right': {
					'0%': { opacity: '0', transform: 'translateX(30px)' },
					'100%': { opacity: '1', transform: 'translateX(0)' }
				},
				'scale-in': {
					'0%': { opacity: '0', transform: 'scale(0.95)' },
					'100%': { opacity: '1', transform: 'scale(1)' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-20px)' }
				},
				'glow': {
					'0%, 100%': { boxShadow: '0 0 20px rgba(252, 93, 72, 0.3)' },
					'50%': { boxShadow: '0 0 40px rgba(252, 93, 72, 0.6)' }
				},
				'slide-infinite': {
					'0%': { transform: 'translateX(0)' },
					'100%': { transform: 'translateX(-100%)' }
				},
				'counter': {
					'0%': { transform: 'translateY(20px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' }
				}
			},
			animation: {
				'fade-in': 'fade-in 0.6s ease-out forwards',
				'fade-in-left': 'fade-in-left 0.6s ease-out forwards',
				'fade-in-right': 'fade-in-right 0.6s ease-out forwards',
				'scale-in': 'scale-in 0.5s ease-out forwards',
				'float': 'float 3s ease-in-out infinite',
				'glow': 'glow 2s ease-in-out infinite',
				'slide-infinite': 'slide-infinite 30s linear infinite',
				'counter': 'counter 0.8s ease-out forwards'
			},
			backdropBlur: {
				xs: '2px'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
