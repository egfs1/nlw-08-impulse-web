module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        brand: {
          300: '#996dff',
          500: '#8257e6'

        },
        borderRadius: {
          md: '4px'
        }
      },
      animation: {
        type: 'type 1s ease-out .8s 1 normal both',
      },
      keyframes: {
        type: {
          '0%': { width: '0ch' },
          '3.44%': { width: '1ch' },
          '6.88%': { width: '2ch' },
          '10.32%': { width: '3ch' },
          '13.76%': { width: '4ch' },
          '17.2%': { width: '5ch' },
          '20.64%': { width: '6ch' },
          '24.08%': { width: '7ch' },
          '27.52%': { width: '8ch' },
          '30.96%': { width: '9ch' },
          '33.44%': { width: '10ch' },
          '37.84%': { width: '11ch' },
          '41.28%': { width: '12ch' },
          '44.72%': { width: '13ch' },
          '48.16%': { width: '14ch' },
          '51.6%': { width: '15ch' },
          '55.04%': { width: '16ch' },
          '58.48%': { width: '17ch' },
          '61.92%': { width: '18ch' },
          '65.36%': { width: '19ch' },
          '68.8%': { width: '20ch' },
          '72.24%': { width: '21ch' },
          '75.68%': { width: '22ch' },
          '79.12%': { width: '23ch' },
          '82.56%': { width: '24ch' },
          '86%': { width: '25ch' },
          '89.44%': { width: '26ch' },
          '92.88%': { width: '27ch' },
          '96.32%': { width: '28ch' }
        },
        pulse: {
          '50%': {opacity: 0}
        }
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwindcss-scrollbar')
  ],
}
