import { Config } from 'tailwindcss'

const tailwindPreset: Partial<Config> = {
  theme: {
    extend: {
      colors: {
        'accent-fg': 'var(--accent-fg)',
        'accent-bg': 'var(--accent-bg)',
        'accent-1': 'var(--accent-1)',
        'accent-2': 'var(--accent-2)',
        'accent-3': 'var(--accent-3)',
        'accent-4': 'var(--accent-4)',
        'accent-5': 'var(--accent-5)',
        'accent-6': 'var(--accent-6)',
        'accent-7': 'var(--accent-7)',
        'accent-8': 'var(--accent-8)',
        hover: 'var(--hover)',
        danger: 'var(--danger)',
      },
      fontFamily: {
        default: ['var(--font-inter)', 'var(--font-noto-sans-tc)'],
        code: [
          'var(--font-fira-code)',
          'var(--font-inter)',
          'var(--font-noto-sans-tc)',
        ],
        emoji: ['Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'],
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      typography: {
        DEFAULT: {
          css: {
            'h2, h3, h4, h5, h6': {
              position: 'relative',
              scrollMarginTop: '128px',
              '& a::before': {
                content: 'none !important',
              },
            },
            img: {
              margin: '24px auto',
            },
            code: {
              '&::before': {
                content: '"" !important',
              },
              '&::after': {
                content: '"" !important',
              },
            },
            '[data-rehype-pretty-code-title]': {
              backgroundColor: 'var(--accent-1)',
              border: '1px solid var(--accent-2)',
              borderTopLeftRadius: '8px',
              borderTopRightRadius: '8px',
              padding: '10px 20px',
              fontSize: '14px',
            },
            '[data-rehype-pretty-code-title] ~ pre': {
              marginTop: '0',
              borderTopLeftRadius: '0',
              borderTopRightRadius: '0',
              borderTopWidth: '0',
            },
            '[data-rehype-pretty-code-title] ~ pre ~ button': {
              top: '60px !important',
            },
            pre: {
              opacity: 0.98,
              backgroundColor: 'var(--accent-1)',
              padding: '12px 0',
              lineHeight: 2,
              borderRadius: '8px',
              border: '1px solid var(--accent-2)',
              '[data-line-numbers]': {
                '.line::before': {
                  content: 'counter(line)',
                  counterIncrement: 'line',
                  display: 'inline-block',
                  width: '16px',
                  marginRight: '16px',
                  textAlign: 'right',
                  color: 'var(--accent-4)',
                },
                '.line.highlighted::before': {
                  color: 'var(--accent-6)',
                },
              },
              '> code': {
                display: 'grid',
                counterReset: 'line',
                '> .line': {
                  padding: '0 20px 0 12px',
                  borderLeft: '2px solid transparent',
                },
              },
            },
            ':not(pre) > code': {
              color: 'var(--accent-fg)',
              borderRadius: '4px',
              padding: '0 4px',
              backgroundColor: '#ebebeb',
              border: '1px solid #eaeaea',
              fontFamily:
                'var(--font-fira-code), var(--font-inter), var(--font-noto-sans-tc)',
            },
          },
        },
        invert: {
          css: {
            ':not(pre) > code': {
              backgroundColor: '#1f1f1f',
              border: '1px solid #2e2e2e',
            },
          },
        },
      },
    },
  },
}

export { tailwindPreset }
