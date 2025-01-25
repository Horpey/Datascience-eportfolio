import tailwindTypography from '@tailwindcss/typography'
/** @type {import('tailwindcss').Config} */
import animate from 'tailwindcss-animate'

export default {
  content: [],
  theme: {
    extend: {
      typography: (theme: (arg0: string) => any) => ({
        DEFAULT: {
          css: {
            color: theme('colors.primary.900'),
            h1: {
              'color': theme('colors.primary.900'),
              'fontSize': '2.25rem',
              'lineHeight': '2.5rem',
              'fontWeight': '600',
              '@media (max-width: theme("screens.sm"))': {
                fontSize: '2rem',
                lineHeight: '2rem',
              },
            },
            h2: {
              'color': theme('colors.primary.900'),
              'fontSize': '1.875rem',
              'lineHeight': '2.5rem',
              'fontWeight': '600',
              '@media (max-width: theme("screens.sm"))': {
                fontSize: '1.875rem',
                lineHeight: '2rem',
              },
            },
            h3: {
              color: theme('colors.primary.900'),
              fontSize: '1.5rem',
              lineHeight: '2.25rem',
              fontWeight: '600',
            },
            h4: {
              color: theme('colors.primary.900'),
              fontSize: '1.5rem',
              lineHeight: '2rem',
              fontWeight: '600',
            },
            h5: {
              color: theme('colors.primary.900'),
              fontSize: '1rem',
              lineHeight: '1.75rem',
              fontWeight: '600',
            },
            h6: {
              color: theme('colors.primary.900'),
              fontSize: '1rem',
              lineHeight: '1.75rem',
              fontWeight: '600',
            },
            a: {
              'color': theme('colors.primary'),
              '&:hover': {
                color: theme('colors.primary.600'),
              },
              'wordWrap': 'break-word',
            },
            ol: {
              ol: {
                li: {
                  '&:before': {
                    content: 'counter(list-item, var(--list-counter-style, lower-alpha)) "."',
                  },
                },
              },
            },
            strong: {
              color: theme('colors.primary.900'),
            },
          },
        },
      }),
      colors: {
        primary: {
          DEFAULT: '#000000',
        },
      },
      fontFamily: {
        sans: ['Geist', 'sans-serif'],
      },
    },
  },
  plugins: [
    animate,
    tailwindTypography({ className: 'prose', target: 'modern' }),
  ],
}
