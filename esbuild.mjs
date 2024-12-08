import * as esbuild from "esbuild";

// TODO: fix configuration to get node API typings

const context = await esbuild.context({
  entryPoints: ["./src/entry/popup.tsx", "./src/entry/content.ts"],
  bundle: true,
  minify: true,
  // eslint-disable-next-line no-undef
  sourcemap: process.env.NODE_ENV !== "production",
  outdir: "./public/build",
});

// Manually do an incremental build
await context.rebuild();

// eslint-disable-next-line no-undef
if (process.env.NODE_ENV === "production") {
  await context.dispose();
} else {
  // Enable watch mode
  await context.watch();
}
