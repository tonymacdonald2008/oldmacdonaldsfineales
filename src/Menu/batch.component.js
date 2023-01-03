(function () {
'use strict';

angular.module('MenuApp')
.component('batch', {
  templateUrl: 'src/Menu/templates/batch.template.html',
  bindings: {
    batch: '<'
  }
});

})();
