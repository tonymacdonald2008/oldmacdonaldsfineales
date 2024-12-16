(function () {
'use strict';

angular.module('MenuApp')
.component('recipe', {
  templateUrl: 'src/Menu/templates/recipe.template.html',
  bindings: {
    batch: '<'
  }
});

})();
