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
                success: {
                    DEFAULT: 'var(--color-success)',
                    background: 'var(--color-success-background)',
                    text: 'var(--color-success-text)'
                },
                danger: {
                    DEFAULT: 'var(--color-danger)',
                    background: 'var(--color-danger-background)',
                    text: 'var(--color-danger-text)'
                },
                warning: {
                    DEFAULT: 'var(--color-warning)',
                    background: 'var(--color-warning-background)',
                    text: 'var(--color-warning-text)'
                },
            },
            variables: {
                DEFAULT: {
                    color: {
                        primary: {
                            DEFAULT: '#161c70',
                            light: '#394394'
                        },
                        secondary: {
                            DEFAULT: '#c7c7c7',
                        },
                        success: {
                            DEFAULT: '#2ecc71',
                            background: '#d7f3dd',
                            text: '#155724'
                        },
                        danger: {
                            DEFAULT: '#e74c3c',
                            background: '#f8d7da',
                            text: '#721c24'
                        },
                        warning: {
                            DEFAULT: '#f39c12',
                            background: '#fff3cd',
                            text: '#856404'
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