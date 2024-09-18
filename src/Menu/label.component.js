(function () {
'use strict';

angular.module('MenuApp')
.component('label', {
  templateUrl: 'src/Menu/templates/label.template.html',
  bindings: {
    batch: '<'
  }
});

})();
