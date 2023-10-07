import type { Config } from 'tailwindcss'


const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        dark: {
          primary: '#000000', // Set your dark theme primary color
          // Add other dark theme colors as needed
        },
        light: {
          primary: '#ffffff', // Set your light theme primary color
          // Add other light theme colors as needed
        },
      },
    },
  },
  plugins: [
    require("flowbite/plugin")
  ],
}
export default config

