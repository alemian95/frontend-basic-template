const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');

module.exports = {
    theme: {
        fontSize: {
            sm: '0.75rem',
            base: '1rem',
            md: '1rem',
            lg: '1.15rem',
            xl: '1.3rem',
            '2xl': '1.5em',
            '3xl': '1.75rem',
            '4xl': '2rem',
            '5xl': '2.35rem',
        },
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                primary: {
                    DEFAULT: 'var(--color-primary)',
                },
                secondary: {
                    DEFAULT: 'var(--color-secondary)',
                },
            },
            variables: {
                DEFAULT: {
                    color: {
                        primary: {
                            DEFAULT: '#161c70',
                        },
                        secondary: {
                            DEFAULT: '#c7c7c7',
                        },
                    }
                }
            }
        }
    },
    content: require('fast-glob').sync([
        './resources/js/*.js',
        './**/*.html'
    ]),
    plugins: [
        require('@tailwindcss/forms'),
        require('@mertasan/tailwindcss-variables'),
        plugin(function({ addBase }) {
            addBase({
                'html': { fontSize: "16px" },
            })
        })
    ],
}