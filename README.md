ember-humanize
==============================================================================
*This ember addon is maintained by [Media Pop](https://www.mediapop.co), a software consultancy. Hire us to solve your web application challenges.*


An ember service wrapper for [https://github.com/HubSpot/humanize](https://github.com/HubSpot/humanize)

Installation
------------------------------------------------------------------------------

```
ember install ember-humanize
```


Usage
------------------------------------------------------------------------------

#### As a service

use it in any container
```js
import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';

export default Component.extend({
  humanize: service(),
  property: 123456789,
  
  transformedProperty: computed('humanize', 'property', function(){
    return this.get('humanize').compactInteger(this.get('property'), 2);
    //returns "123.46M"
  }),  
});

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
