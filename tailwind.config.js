/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.{ts,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: '#0B111E',
                secondary: '#151A21',
                accent: '#05C2C9',
                'accent-light': '#39D7DD',
                'accent-dark': '#048A8F',
                gray: {
                    DEFAULT: '#b2bdcd',
                    dark: '#8895A7'
                }
            },
            transitionProperty: {
                'height': 'max-height 0.3s ease-out, opacity 0.3s ease-out',
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                almarai: ['Almarai', 'sans-serif'],
            },
            fontWeight: {
                'extra-bold': 800,
            },
            animation: {
                'spin-slow': 'shine 3s linear infinite',
                'float': 'float 6s ease-in-out infinite',
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            },
            keyframes: {
                shine: {
                    to: {
                        backgroundPosition: '200% center',
                    }
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
            },
            boxShadow: {
                'accent': '0 0 15px rgba(5, 194, 201, 0.5)',
                'inner-accent': 'inset 0 0 5px rgba(5, 194, 201, 0.2)',
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
        },
    },
    plugins: [
        require('@tailwindcss/line-clamp'),
    ],
};