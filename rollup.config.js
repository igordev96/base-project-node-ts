import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import nodeResolve from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";
import typescript from "@rollup/plugin-typescript";

/** @type {import('rollup').RollupOptions} */
const config = {
	input: "src/main.ts",
	output: {
		dir: "build",
		format: "cjs",
		inlineDynamicImports: true,
	},
	plugins: [
		nodeResolve({ preferBuiltins: true, browser: false }),
		commonjs(),
		json(),
		terser({ mangle: true }),
		typescript(),
	],
};

export default config;
