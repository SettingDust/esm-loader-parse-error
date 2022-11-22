import {minify} from '@minify-html/wasm';

const encoder = new TextEncoder()
const decoder = new TextDecoder()

console.log(decoder.decode(minify(encoder.encode(`
<p> dsadsadsa </p>

<a> dsadsadsa </a>
`), {})))
