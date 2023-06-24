# @codewithhong/ui

UI library built using Radix UI and Tailwind CSS.

## Installation

Inside your React project directory, install the library by running either of the following commands:

```bash
npm i @codewithhong/ui @codewithhong/utils

# or

yarn add @codewithhong/ui @codewithhong/utils
```

Also, make sure you installed [tailwindcss](https://tailwindcss.com/docs/installation) and add the following to your `tailwind.config.js`:

```js
import { tailwindPreset } from '@codewithhong/ui'

module.exports = {
  // ...
  content: [
    './node_modules/@codewithhong/**/*.{js,jsx,ts,tsx}', // the path of @codewithhong/*
  ],
  presets: [tailwindPreset],
}
```

Import the `main.css`

```css
@import '@codewithhong/ui/dist/main.css';

@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Documentation

Visit [ui.honghong.me](https://ui.honghong.me) to view the documentation.

## License

This project is licensed under the [MIT License](LICENSE).
