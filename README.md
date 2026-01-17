# caller-arguments
Returns the arguments of the caller.

## Usage

```js
const args = require('caller-arguments')
function foo() {
  console.log(args())
}

foo('bar') // outputs "[Arguments] { '0': 'bar' }"
```

If your file is in strict mode or you try to call `args()` in an arrow function, it will not work and instead throw an error.
