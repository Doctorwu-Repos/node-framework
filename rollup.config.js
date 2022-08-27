// rollup.config.ts
import resolvePlugin from "@rollup/plugin-node-resolve";
import babelPlugin from "rollup-plugin-babel";
import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import { uglify } from "rollup-plugin-uglify";
const globals = {
  os: "os",
  tty: "tty",
  fs: "fs",
  util: "util",
  events: "events",
  path: "path",
  http: "http",
  url: "url",
  crypto: "crypto",
  timers: "timers",
  buffer: "buffer",
  stream: "stream",
  dns: "dns",
  punycode: "punycode",
  zlib: "zlib",
  net: "net",
  tls: "tls",
  assert: "assert",
  querystring: "querystring",
  string_decoder: "string_decoder",
};

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: "dist/dt-node.umd.js", // 导出文件
        format: "umd", // 打包文件支持的形式
        name: "dt-node",
        globals,
      },
      {
        file: "dist/dt-node.cjs.js",
        format: "cjs",
        name: "dt-node",
        globals,
      },
    ],
    plugins: [commonjs(), resolvePlugin(), babelPlugin(), typescript(), json()],
  },
];
