// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
//   theme: {
//     fontSize: {
//       xs: "clamp(0.7038rem, 0.8082rem + -0.1348vw, 0.7813rem)",
//       sm: "clamp(0.9375rem, 0.9375rem + 0vw, 0.9375rem)",
//       base: "clamp(1.125rem, 1.0815rem + 0.2174vw, 1.25rem)",
//       lg: "clamp(1.35rem, 1.24rem + 0.55vw, 1.6663rem)",
//       xl: "clamp(1.62rem, 1.4109rem + 1.0457vw, 2.2213rem)",
//       "2xl": "clamp(1.9438rem, 1.5901rem + 1.7685vw, 2.9606rem)",
//       "3xl": "clamp(2.3325rem, 1.771rem + 2.8076vw, 3.9469rem)",
//       "4xl": "clamp(2.7994rem, 1.9433rem + 4.2804vw, 5.2606rem)",
//     },
//     extend: {
//       container: {
//         center: true,
//         padding: "1.4rem",
//       },
//       gridTemplateRows: {
//         auto_1fr_auto: "auto 1fr auto",
//       },
//       colors: {
//         theme: {
//           base: "#202020",
//           text: "#ECE9E2",
//           accent: "#F66835",
//         },
//       },
//     },
//   },
//   plugins: [],
// };

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontSize: {
      xs: "clamp(0.7038rem, 0.8082rem + -0.1348vw, 0.7813rem)",
      sm: "clamp(0.9375rem, 0.9375rem + 0vw, 0.9375rem)",
      base: "clamp(1.125rem, 1.0815rem + 0.2174vw, 1.25rem)",
      lg: "clamp(1.35rem, 1.24rem + 0.55vw, 1.6663rem)",
      xl: "clamp(1.62rem, 1.4109rem + 1.0457vw, 2.2213rem)",
      "2xl": "clamp(1.9438rem, 1.5901rem + 1.7685vw, 2.9606rem)",
      "3xl": "clamp(2.3325rem, 1.771rem + 2.8076vw, 3.9469rem)",
      "4xl": "clamp(2.7994rem, 1.9433rem + 4.2804vw, 5.2606rem)",
    },
    extend: {
      container: {
        center: true,
        padding: "1.4rem",
      },
      gridTemplateRows: {
        auto_1fr_auto: "auto 1fr auto",
      },
      colors: {
        theme: {
          base: "#F0F4F8",  // 浅蓝灰色背景
          text: "#2D3748",  // 深蓝灰色文本
          accent: "#F66835", // 保留原有的强调色
          secondary: "#4299E1", // 添加一个新的蓝色作为二级色
        },
      },
      boxShadow: {
        'custom': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      },
    },
  },
  plugins: [],
};