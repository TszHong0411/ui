import fs from 'fs'
import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  treeshake: true,
  splitting: true,
  dts: true,
  minify: true,
  clean: true,
  external: ['react'],

  async onSuccess() {
    const files = ['dist/index.js', 'dist/index.mjs']

    for (const file of files) {
      const content = await fs.promises.readFile(file, 'utf-8')
      const newContent = `'use client';\n${content}`
      await fs.promises.writeFile(file, newContent)
    }

    const css = fs.readFileSync('./src/main.css', 'utf-8')

    fs.writeFile('./dist/main.css', css, (err) => {
      if (err) console.error(err)
    })
  },
})
