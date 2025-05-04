import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import dts from "rollup-plugin-dts";

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: "dist/index.js",
        format: "cjs",
      },
      {
        file: "dist/index.esm.js",
        format: "esm",
      },
    ],
    external: ["react"],
    plugins: [
      resolve(),
      commonjs(),
      typescript({
        tsconfig: "./tsconfig.json",
        declaration: true,
        declarationDir: "./dist/types", // Changed this line
        exclude: ["**/__tests__", "**/*.test.ts"],
      }),
    ],
  },
  {
    input: "src/index.ts", // Changed this line to point to source
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
  },
];