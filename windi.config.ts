import { defineConfig } from "windicss/helpers";

export default defineConfig({
  shortcuts: {
    "bg-hard": "bg-light-500 dark:bg-dark-800",
    "bg-soft": "bg-light-700 dark:bg-dark-400",
    "text-hard": "text-dark-800 dark:text-light-900",
    "text-soft": "text-dark-600 dark:text-neutral-300",
    "bg-button":
      "bg-light-600 hover:bg-light-700 dark:bg-dark-700 hover:dark:bg-dark-600",
    "border-soft": "border-1 border-slate-400 dark:border-gray-500",
  },
  plugins: [
    require("windicss/plugin/typography")({
      fonts: {
        body: "Poppins, sans-serif",
      },
      dark: true,
    }),
  ],
});
