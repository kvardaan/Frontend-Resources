import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: "20px",
				lg: "80px",
			},
			screens: {
				sm: "375px",
				md: "768px",
				lg: "1200px",
			},
		},
		screens: {
			sm: "375px",
			md: "768px",
			lg: "1200px",
		},
		extend: {},
	},
	plugins: [
		function ({ addUtilities }: any) {
			addUtilities({
				".custom-position": {
					position: "absolute",
					top: "50%",
					left: "50%",
					transform: "translate(-50%, -50%)",
				},
			});
		},
	],
};
export default config;
