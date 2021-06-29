# Inline Test

## Format

```html
<!-- TEST CASES -->
<ul>
    <li>Description <!-- test description --></li>
    <li>Should contains `h2` <!-- has("h2") --></li>
    <li>Should contains `h2` <!-- innerText("h2") === "Hello" --></li>
</ul>

<!-- TEST TARGET -->
<div id="reviewer">
    <h2>Hello world</h2>
</div>

<script src="path-to/inlineTests.js"></script>
<script>
    // Run tests
    InlineTest({ 
        targetSelector: "#reviewer",
        testSelector: "ul"
    })
</script>
```

- `Description`: label that show to users
- `test description`: semi javascript that return a boolean, with predefined functions to run tests

## Available test functions

#### `has(selector: string)` => boolean

Check if target contains `selector` element

#### `hasHTML(str: string)` => boolean

Check if target `innerHTML` contains `str`

#### `hasText(str: string)` => boolean

Check if target `innerText` contains `str`

#### `hasHTMLRegex(pattern: string)` => boolean

Check if target `innerText` contains regex `pattern`

#### `innerText(selector: string)` => string | undefined

Get `innerText` of selector element. 
Return `undefined` if selector element does not exists

#### `countText(str: string)` => number

Count the number of `str` appear in target `innerText`

#### `countHTML(str: string)` => number

Count the number of `str` appear in target `innerHTML`

#### `elementOrders(...args: string[]) => boolean

Check if target `children` elements is in similar to `...args` orders.
This will not count commented out (`<!--<element.../>-->`) elements


#### `elementOrdersHTML(...args: string[]) => boolean

Check if target `children` elements is in similar to `...args` orders.
This also count commented out (`<!--<element.../>-->`) elements