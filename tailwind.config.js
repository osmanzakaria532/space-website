/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            container: {
                center: true,
                DEFAULT: {
                    padding: "1rem",
                    sm: "2rem",
                },
            },
        },
    },
    plugins: [],
};
