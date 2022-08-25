/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{ts,html}"],
    theme: {
        extend: {
            colors: {
                slateblue: {
                    100: "#d9dce1",
                    200: "#b4b9c4",
                    300: "#8e96a6",
                    400: "#697389",
                    500: "#43506b",
                    600: "#364056",
                    700: "#283040",
                    800: "#1b202b",
                    900: "#0d1015",
                },
            },
        },
    },
    plugins: [],
};
