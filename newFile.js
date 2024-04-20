/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./build/*.html"],
    theme: {
        extend: {
            screen: {
                'wideScreen': { 'raw': '(min-aspect-ratio:3/2)' },
                'tailScreen': { 'raw': '(min-scpect-ratio:1/2)' }
            }
        },
    },
    plugins: [],
};
