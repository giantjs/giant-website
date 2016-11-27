<!-- @@@page:blog@@@ -->
<!-- @@@title:Change Log@@@ -->

Change log
==========

v0.4.0
------

*22 Nov 2016*

### Breaking changes

- Renames `$transport.Throttler` to `$transport.MultiThrottler`
- Renames `String#toThrottler()` to `String#toMultiThrottler` 
- Methods `$utils.Async.setTimeout` & `$utils.Async.setInterval` no longer take a callback.

### Other changes

- Adds `$utils.Throttler`, and (adds back) `String#toThrottler()`
- Adds `$data.Dictionary#forEachItem()` for iterating over key-value pairs of the dictionary.
- Adds extra checks to `$oop.Base#addPrivate()` to exclude methods.
- Adds support for npm linking. Cli command `giant link` will link up all modules to development versions.
- Upgrades tests to run with PhantomJs 2.1
- Various bugfixes

v0.3.0
------

*16 Nov 2015*

### Breaking changes

- Moves behavior classes from `$data` to `$utils`
    - `$data.Documented` -> `$utils.Documented`
    - `$data.Managed` -> `$utils.Managed`
- Upgrades build process to **npm 3**.

### Other changes

- Introduces async tools in `$utils`.
    - `$utils.Timeout`
    - `$utils.Interval`
    - `$utils.Async`
    - `$utils.Debouncer`
- Removes `Q` as dependency.
    - Introduces Giant promises: `$utils.Deferred` and `$utils.Promise`, a synchronous *Promises/A* implementation.
    - Changes current `jQuery` and `Q`-based promises to Giant promises.
- Adds `init` command to Giant CLI (`giant-cli`), for initializing:
    - new project (`giant init`)
    - new module in an existing project (`giant init <moduleName>`) 
- Replaces the library `grocer` used in the build process with `giant-asset` across all modules.
- Changes test browser from Chrome to PhantomJS.
