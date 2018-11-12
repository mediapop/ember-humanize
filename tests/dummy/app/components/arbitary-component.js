import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';

// import Humanize from 'humanize';

export default Component.extend({
  humanize: service(),
  property: 123456789,

  transformedProperty: computed('property', function(){
    return this.get('humanize').compactInteger(this.get('property'), 2);
    //returns "123.46M"
  }),
});
