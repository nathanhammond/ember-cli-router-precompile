# ember-cli-router-precompile

Inside of an Ember application router.js requires active processing upon boot in the client application. This is slow. At build time we also want to know where we could possibly split the build.

This addon precompiles router.js to primitives which can be instantly loaded into [route-recognizer](https://github.com/tildeio/route-recognizer) without actively running the code client side.

During the static analysis phase it also identifies which assets are required for particular engines and specifies them at route boundaries so that a future (and unspecified) hook in Ember.js will be able to load those assets upon crossing that route boundary.

## Installation

* `git clone` this repository
* `npm install`
* `bower install`

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `npm test` (Runs `ember try:testall` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://ember-cli.com/](http://ember-cli.com/).
