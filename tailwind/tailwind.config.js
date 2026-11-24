/*
 * Per rigenerare assets/styles.css dopo aver cambiato le classi in index.html:
 *   npx --yes tailwindcss@3 -c tailwind/tailwind.config.js -i tailwind/input.css -o assets/styles.css --minify
 */
module.exports = {
  content: ['./index.html'],
  safelist: [
    { pattern: /grid-cols-(2|3)/, variants: ['md'] }
  ],
  theme: {
    extend: {
      colors: {
        ivory: '#FAF8F5',
        paper: '#F3EFE8',
        card: '#FFFFFF',
        ink: '#1E242B',
        muted: '#525C68',
        malcolm: {
          DEFAULT: '#1E3A5F',
          light: '#EAF0F6',
          border: '#B8C9DE',
          dark: '#142842'
        },
        maryjo: {
          DEFAULT: '#C87D28',
          light: '#FDF4E7',
          border: '#ECCB9E',
          dark: '#9E5F18'
        },
        dawn: {
          border: '#E2DDD5',
          highlight: '#FFF8EB'
        }
      },
      fontFamily: {
        sans: ['"Source Sans 3"', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
        serif: ['"Lora"', 'Georgia', 'Cambria', '"Times New Roman"', 'serif']
      }
    }
  }
};
