/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        color1: "#8A8467",
        color2: "#F2EAC9",
      },
      backgroundColor: {
        bg1: "#4B4D39",
        bg1i: "#EBEBDF",
        bg2: "#EBEBDF",
        bg2i: "#191265",
        bg3: "#F5F5DC",
        bg3i: "#D1ADB6",
        bg4: "#fffcef",
        bg4i: "#2B5288",
        bg5: "#E5E0D9",
        bg5i: "#2B5288",
        bg6: "#F2EAC9",
        bg6i: "#8A8467",
        bg7: "#E46036",
        bg7i: "#F1EDE5",
        bg7ii: "#060606",
        bg7iii: "#FAFAFA",
        bg8: "#1E56C3",
        bg8i: "#ECDCF4",
        bg8ii: "#F3ECDE",
        bg8iii: "#272932",
      },
    },
  },
  plugins: [],
};

/**Colors
 * 1: Off-white: #FEFBF6 / rgb(254, 251, 246) + Dark Olivie: #4B4D39 / rgb(75, 77, 57);
 *
 * 2: Pale gray: #EBEBDF / rgb(235, 235, 223) + Rich blue: #191265 / rgb(25, 18, 101);
 *
 * 3: Warm beige: #F5F5DC / rgb(245, 245, 220) + Muted blush: #D1ADB6 / rgb(209, 173, 182);
 *
 * 4: Ivory cream: #fffcef / rgb(255, 252, 239) + Rich burgundy: #2B5288 / rgb(43, 82, 136);
 *
 * 5: Light taube: #E5E0D9 / rgb(229, 224, 217) + Marine blue: #2B5288 / rgb(43, 82, 136);
 *
 * 6: Pale gold: #F2EAC9 / rgb(242, 234, 201) + Olive green: #8A8467 / rgb(138, 132, 103)
 */
