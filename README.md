# @tszhong0411/ui

UI library built using Radix UI and Tailwind CSS.

## Installation

Inside your React project directory, install the library by running either of the following commands:

```bash
npm i @tszhong0411/ui @tszhong0411/utils

# or

yarn add @tszhong0411/ui @tszhong0411/utils
```

Also, make sure you installed [tailwindcss](https://tailwindcss.com/docs/installation) and add the following to your `tailwind.config.js`:

```js
import { tailwindPreset } from '@tszhong0411/ui'

module.exports = {
  // ...
  content: [
    './node_modules/@tszhong0411/**/*.{js,jsx,ts,tsx}', // the path of @tszhong0411/*
  ],
  presets: [tailwindPreset],
}
```

Import the `main.css`

```css
@import '@tszhong0411/ui/dist/main.css';

@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Documentation

Visit [ui.honghong.me](https://ui.honghong.me) to view the documentation.

## License

This project is licensed under the [MIT License](LICENSE).
