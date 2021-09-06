<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Repeat

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] [![dependencies][dependencies-image]][dependencies-url]

> Repeat a string a specified number of times and return the concatenated result.

<section class="installation">

## Installation

```bash
npm install @stdlib/string-repeat
```

</section>

<section class="usage">

## Usage

```javascript
var repeat = require( '@stdlib/string-repeat' );
```

#### repeat( str, n )

Repeats a string `n` times and returns the concatenated result.

```javascript
var str = repeat( 'a', 5 );
// returns 'aaaaa'

str = repeat( '', 100 );
// returns ''

str = repeat( 'beep', 0 );
// returns ''
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var round = require( '@stdlib/math-base-special-round' );
var randu = require( '@stdlib/random-base-randu' );
var repeat = require( '@stdlib/string-repeat' );

var str = 'beep';
var n;
var i;

for ( i = 0; i < 100; i++ ) {
    n = round( randu()*3.0 );
    console.log( repeat( str, n ) );
}
```

</section>

<!-- /.examples -->

* * *

<section class="cli">

## CLI

<section class="installation">

## Installation

To use the module as a general utility, install the module globally

```bash
npm install -g @stdlib/string-repeat
```

</section>

<section class="usage">

### Usage

```text
Usage: repstr [options] [<string>] --n <repeats>

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
         --n repeats           Number of repetitions.
```

</section>

<!-- /.usage -->

<section class="examples">

### Examples

```bash
$ repstr beep -n 5
beepbeepbeepbeepbeep
```

To use as a [standard stream][standard-streams],

```bash
$ echo -n 'ab' | repstr -n 3
ababab
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   [`@stdlib/string/pad`][@stdlib/string/pad]: pad a string.

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/string-repeat.svg
[npm-url]: https://npmjs.org/package/@stdlib/string-repeat

[test-image]: https://github.com/stdlib-js/string-repeat/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/string-repeat/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/string-repeat/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/string-repeat?branch=main

[dependencies-image]: https://img.shields.io/david/stdlib-js/string-repeat.svg
[dependencies-url]: https://david-dm.org/stdlib-js/string-repeat/main

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/string-repeat/main/LICENSE

[standard-streams]: https://en.wikipedia.org/wiki/Standard_streams

<!-- <related-links> -->

[@stdlib/string/pad]: https://github.com/stdlib-js/string-pad

<!-- </related-links> -->

</section>

<!-- /.links -->
