export const EXAMPLES = {
    components: {
      title: 'Components',
      description:
        'Components are the building blocks of React applications. A component is a self-contained module (HTML + optional CSS + JS) that renders some output.',
      code: `
        function Welcome() {
          return <h1>Hello, World!</h1>;
        }`,
    },
    jsx: {
      title: 'JSX',
      description:
        'JSX is a syntax extension to JavaScript. It is similar to a template language, but it has full power of JavaScript (e.g., it may output dynamic content).',
      code: `
        <div>
          <h1>Welcome {userName}</h1>
          <p>Time to learn React!</p>
        </div>`,
    },
    react: {
      title: 'React',
      description:
        'React is a JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called components.',
      code: `
        import React from 'react';
        import ReactDOM from 'react-dom';
  
        function App() {
          return (
            <div>
              <h1>Hello, React!</h1>
            </div>
          );
        }
  
        ReactDOM.render(<App />, document.getElementById('root'));
        `,
    },
    hooks: {
      title: 'Hooks',
      description:
        'Hooks are functions that let you use state and other React features without writing a class. They are introduced in React 16.8.',
      code: `
        import React, { useState } from 'react';
  
        function Counter() {
          const [count, setCount] = useState(0);
  
          return (
            <div>
              <p>You clicked {count} times</p>
              <button onClick={() => setCount(count + 1)}>
                Click me
              </button>
            </div>
          );
        }
  
        export default Counter;
        `,
    },
  };
  