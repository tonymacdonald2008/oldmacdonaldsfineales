(function () {
'use strict';

angular.module('MenuApp')
.component('beers', {
  templateUrl: 'src/Menu/templates/beerlist.template.html',
  bindings: {
    batch: '<'
  }
});

})();
