/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#050505',
                secondary: '#0a0a0a',
                accent: '#38bdf8',
            },
            animation: {
                blob:         "blob 7s infinite",
                marquee:      "marquee 18s linear infinite",
                marquee2:     "marquee2 18s linear infinite",
                "marquee-up": "marqueeUp 12s linear infinite",
                "marquee-up-reverse": "marqueeUpReverse 12s linear infinite",
            },
            keyframes: {
                blob: {
                    "0%":   { transform: "translate(0px, 0px) scale(1)" },
                    "33%":  { transform: "translate(30px, -50px) scale(1.1)" },
                    "66%":  { transform: "translate(-20px, 20px) scale(0.9)" },
                    "100%": { transform: "translate(0px, 0px) scale(1)" },
                },
                marquee: {
                    "0%":   { transform: "translateX(0%)" },
                    "100%": { transform: "translateX(-50%)" },
                },
                marquee2: {
                    "0%":   { transform: "translateX(-50%)" },
                    "100%": { transform: "translateX(0%)" },
                },
                marqueeUp: {
                    "0%":   { transform: "translateY(0%)" },
                    "100%": { transform: "translateY(-50%)" },
                },
                marqueeUpReverse: {
                    "0%":   { transform: "translateY(-50%)" },
                    "100%": { transform: "translateY(0%)" },
                },
                spin: {
                    from: { transform: 'rotate(0deg)' },
                    to: { transform: 'rotate(360deg)' },
                },
            },

        },
    },
    plugins: [],
}
