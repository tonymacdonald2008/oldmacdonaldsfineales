(function () {
  'use strict'
  angular.module('MenuApp')
  .controller('BeersController', BeersController);

  BeersController.$inject=['thebeers'];
  function BeersController (thebeers){
    var ctrl = this;
    ctrl.allbeers = thebeers;
  }

})();
