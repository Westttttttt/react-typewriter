# React Typewriter Effect

[![npm version](https://img.shields.io/npm/v/@westttttttt/react-typewriter.svg?style=flat)](https://www.npmjs.com/package/@westttttttt/react-typewriter)
[![npm downloads](https://img.shields.io/npm/dm/@westttttttt/react-typewriter.svg?style=flat)](https://www.npmjs.com/package/@westttttttt/react-typewriter)

A simple and customizable React typewriter effect component with TypeScript support.

![NPM Version](https://img.shields.io/npm/v/@westttttttt/react-typewriter)
![License](https://img.shields.io/npm/l/@westttttttt/react-typewriter)
![Bundle Size](https://img.shields.io/bundlephobia/min/@westttttttt/react-typewriter)

## Features

- 🚀 Easy to use
- 📦 Lightweight
- 🎯 TypeScript support
- ⚡ Zero dependencies
- 🎨 Customizable speed and delay
- 🔧 Callback support

## Installation

```bash
npm install @westttttttt/react-typewriter
```

Or with yarn:

```bash
yarn add @westttttttt/react-typewriter
```

## Usage

```tsx
import { TypewriterEffect } from '@westttttttt/react-typewriter';

function App() {
  return (
    <TypewriterEffect
      text="Hello, this is a typewriter effect!"
      speed={100}
      delay={1000}
      onComplete={() => console.log('Typing completed!')}
    />
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| text | string | required | The text to be displayed with typewriter effect |
| speed | number | 100 | Typing speed in milliseconds |
| delay | number | 0 | Initial delay before typing starts |
| onComplete | function | undefined | Callback function when typing is complete |
| className | string | undefined | CSS class name for styling |

## Examples

### Basic Usage
```tsx
<TypewriterEffect text="Hello World!" />
```

### With Custom Speed and Delay
```tsx
<TypewriterEffect
  text="This will type slower and start after 2 seconds"
  speed={200}
  delay={2000}
/>
```

### With Completion Callback
```tsx
<TypewriterEffect
  text="Notification when done typing"
  onComplete={() => alert('Typing finished!')}
/>
```

### With Custom Styling
```tsx
<TypewriterEffect
  text="Styled text"
  className="custom-typewriter"
/>
```

CSS:
```css
.custom-typewriter {
  font-size: 24px;
  color: #007bff;
  font-family: 'Courier New', monospace;
}
```

## Demo

```tsx
import React from 'react';
import { TypewriterEffect } from '@westttttttt/react-typewriter';

const Demo = () => {
  return (
    <div style={{ padding: '20px' }}>
      <TypewriterEffect
        text="Welcome to my React Typewriter Effect demo!"
        speed={100}
        delay={500}
        className="demo-typewriter"
      />
    </div>
  );
};

export default Demo;
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'feat: Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

MIT © [Westttttttt](https://github.com/Westttttttt)

## Author

- [Westttttttt](https://github.com/Westttttttt)
- Created: 2025-05-04
- Version: 1.0.0

## Support

If you have any questions or need help, please open an issue on [GitHub](https://github.com/Westttttttt/react-typewriter-effect/issues).

## Changelog
## Changelog

### 1.0.2 (2025-05-04)
- Fix: Correct typewriter effect character rendering issue

### 1.0.2 (2025-05-04)
- Fix: Correct typewriter effect character rendering
- Fix: Resolve timing issues with text display

### 1.0.1 (2025-05-04)
- Initial release

### 1.0.0 (2025-05-04)
- Initial release
- Basic typewriter effect implementation
- TypeScript support
- Customizable speed and delay
- Completion callback
- Custom styling support
