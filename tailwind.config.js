/** @type {import('tailwindcss').Config} */
module.exports = {
    // 1. Specifica i percorsi di tutti i tuoi file template
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        // Aggiungi altre cartelle se ne hai, es. "./src/**/*.{js,ts,jsx,tsx,mdx}"
    ],

    theme: {
        extend: {
            // 2. Qui "aggiungi" personalizzazioni senza eliminare quelle di base
            colors: {
                brand: {
                    light: "#3fbaeb",
                    DEFAULT: "#0fa9e6",
                    dark: "#0c87b8",
                },
            },
            borderRadius: {
                glass: "30px", // Comodo per il tuo glassContainer di prima!
            },
        },
    },

    // 3. I plugin aggiungono funzionalità extra (es. form, tipografia)
    plugins: [],
};
