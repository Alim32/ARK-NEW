/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    mode: 'jit',
    theme: {
        extend: {
            maxWidth: {
                '298': '298px',
                '400': '400px',
                '260': '260px',
                '1140': '1140px',
            },
            maxHeight: {
                '576': '576px',
            },
            fontFamily: {
                inter: ['PP Mori', 'sans-serif'],
            },
            colors: {
                black: '#0B0B0B',
                'primary-blue': {
                    DEFAULT: '#2B59FF',
                    100: '#F5F8FF',
                },
                'f-orange': '#FC8A34',
                'orange-light': '#FCE9BC',
                'darker-orange': '#685757',
                grey: '#EFECEC',
                'darker-grey': '#363636',
            },
            keyframes: {
                marquee: {
                    '0%': { transform: 'translateX(0)' },
                    '100%': {
                        transform: 'translateX(-50%)',
                    },
                },
            },
            animation: {
                marquee: 'marquee 15s linear infinite',
            },
        },
    },
    plugins: [],
};
