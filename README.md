ember-humanize
==============================================================================
*This ember addon is maintained by [Media Pop](https://www.mediapop.co), a software consultancy. Hire us to solve your web application challenges.*
[![Build Status](https://travis-ci.org/mediapop/ember-humanize.svg?branch=master)](https://travis-ci.org/mediapop/ember-humanize)


An ember helper wrapper for [humanize](https://github.com/HubSpot/humanize)'s most useful functions that are unavailable in vanilla JS and native Ember.js

Installation
------------------------------------------------------------------------------

```
ember install @mediapop/ember-humanize
```


Usage
------------------------------------------------------------------------------

Use in any template.  You can also customise the display using the optional named parameters.

**humanize-compact-number**

Shortens the number to well known abbreviations.
```hbs
{{humanize-compact-number 123456789}}
//123M

{{humanize-compact-number 123456789 decimals=2}}
//123.46M
```

**humanize-number**

similar to JS's `toLocaleString()` but with custom control over thousands and decimal seperators
```hbs
{{humanize-number 10000000}}
//10,000,000

{{humanize-number 10000000 precision=2 thousand=' ' decimal=','}}
//10 000 000,000
```

**humanize-ordinal-number**

expresses numbers in their ordinal form
```hbs
{{humanize-ordinal-number 1332}}
//1332nd
```

Contributing
------------------------------------------------------------------------------

### Installation

* `git clone https://github.com/mediapop/ember-humanize`
* `cd ember-humanize`
* `npm install`

### Linting

* `npm run lint:hbs`
* `npm run lint:js`
* `npm run lint:js -- --fix`

### Running tests

* `ember test` – Runs the test suite on the current Ember version
* `ember test --server` – Runs the test suite in "watch mode"
* `ember try:each` – Runs the test suite against multiple Ember versions

### Running the dummy application

* `ember serve`
* Visit the dummy application at [http://localhost:4200](http://localhost:4200).

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).

License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
