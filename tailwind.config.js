/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],

    theme: {
        extend: {
            colors: {
                brand: {
                    light: "#3fbaeb",
                    DEFAULT: "#0fa9e6",
                    dark: "#0c87b8",
                },
            },
            borderRadius: {
                glass: "30px",
            },
        },
    },

    plugins: [],
};
