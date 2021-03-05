# Tagged destructuring

Simple library allowing you to destructure a string using tagged template literals. Uses **0** additional dependencies.

To use as a dependency use:

`yarn add tagged-destructuring`

or

`npm i tagged-destructuring`

or simply fork or copy - really, just do whatever you want.

## Examples

```ts
const testURL = 'https://google.com/pizza/pie';
const res = destructure`https://${'host'}/${'path'}`(testURL);
// 'res' is typed as: { host: string, path: string }
// and has value: { host: 'google.com', path: 'pizza/pie' }
```

```ts
destructure`abc${'x'}`('xyz'); // throws an error
```

_(Refer to the implementation and tests for more details.)_

## Credits

Idea for this package came from the following POC: https://runkit.com/tolmasky/tagged-template-destructuring-proof-of-concept
