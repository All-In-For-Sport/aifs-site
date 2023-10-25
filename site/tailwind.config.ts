import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            fontFamily: {
                header: ["var(--red-hat-display)", "inter", "sans-serif"],
                body: ["var(--dm-sans)", "inter", "sans-serif"],
            },
            colors: {
                primary: "#2AA0F6",
                secondary: "#F301F8",
                background: "#111111",
                darkText: "#242424",
            },
        },
    },
    plugins: [require("tailwind-scrollbar")],
};
export default config;
