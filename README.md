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


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# repeat

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Repeat a string a specified number of times and return the concatenated result.

<section class="installation">

## Installation

```bash
npm install @stdlib/string-repeat
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).
-   To use as a general utility for the command line, install the corresponding [CLI package][cli-section] globally.

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

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
var discreteUniform = require( '@stdlib/random-base-discrete-uniform' );
var repeat = require( '@stdlib/string-repeat' );

var i;
for ( i = 0; i < 100; i++ ) {
    console.log( repeat( 'beep', discreteUniform( 0, 3 ) ) );
}
```

</section>

<!-- /.examples -->

* * *

<section class="cli">

## CLI

<section class="installation">

## Installation

To use as a general utility, install the CLI package globally

```bash
npm install -g @stdlib/string-repeat-cli
```

</section>

<!-- CLI usage documentation. -->

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

<!-- CLI usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

### Notes

-   If the split separator is a [regular expression][mdn-regexp], ensure that the `split` option is either properly escaped or enclosed in quotes.

    ```bash
    # Not escaped...
    $ echo -n $'beep\nboop' | repstr --n 3 --split /\r?\n/

    # Escaped...
    $ echo -n $'beep\nboop' | repstr --n 3 --split /\\r?\\n/
    ```

-   The implementation ignores trailing delimiters.

</section>

<!-- /.notes -->

<section class="examples">

### Examples

```bash
$ repstr beep --n 5
beepbeepbeepbeepbeep
```

To use as a [standard stream][standard-streams],

```bash
$ echo -n $'ab' | repstr --n 3
ababab
```

By default, when used as a [standard stream][standard-streams], the implementation assumes newline-delimited data. To specify an alternative delimiter, set the `split` option.

```bash
$ echo -n $'beep\tboop' | repstr --n 3 --split '\t'
beepbeepbeep
boopboopboop
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/string-pad`][@stdlib/string/pad]</span><span class="delimiter">: </span><span class="description">pad a string.</span>

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

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/string-repeat.svg
[npm-url]: https://npmjs.org/package/@stdlib/string-repeat

[test-image]: https://github.com/stdlib-js/string-repeat/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/string-repeat/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/string-repeat/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/string-repeat?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/string-repeat.svg
[dependencies-url]: https://david-dm.org/stdlib-js/string-repeat/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[cli-section]: https://github.com/stdlib-js/string-repeat#cli
[cli-url]: https://github.com/stdlib-js/string-repeat/tree/cli
[@stdlib/string-repeat]: https://github.com/stdlib-js/string-repeat/tree/main

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/string-repeat/tree/deno
[deno-readme]: https://github.com/stdlib-js/string-repeat/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/string-repeat/tree/umd
[umd-readme]: https://github.com/stdlib-js/string-repeat/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/string-repeat/tree/esm
[esm-readme]: https://github.com/stdlib-js/string-repeat/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/string-repeat/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/string-repeat/main/LICENSE

[standard-streams]: https://en.wikipedia.org/wiki/Standard_streams

[mdn-regexp]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

<!-- <related-links> -->

[@stdlib/string/pad]: https://github.com/stdlib-js/string-pad

<!-- </related-links> -->

</section>

<!-- /.links -->
