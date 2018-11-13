'use strict';

module.exports = {
  name: require('./package').name,

  importTransforms: require('ember-cli-cjs-transform').importTransforms,

  included: function(app) {
    this._super.included(app);
    app.import('node_modules/humanize-plus/dist/humanize.js', {
      using: [{transformation: 'cjs', as: 'humanize'}]
    });
  }
};
