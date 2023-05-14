import fs from 'fs'
import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.tsx'],
  format: ['esm', 'cjs'],
  treeshake: true,
  splitting: true,
  dts: true,
  minify: false,
  clean: true,
  external: ['react'],

  async onSuccess() {
    const css = fs.readFileSync('./src/main.css', 'utf-8')

    fs.writeFile('./dist/main.css', css, (err) => {
      if (err) console.error(err)
    })
  },
})
