(function () {
  'use strict'
  angular.module('MenuApp')
  .controller('BatchController', BatchController);

  BatchController.$inject=['thebatch'];
  function BatchController (thebatch){
    var ctrl = this;
    ctrl.batch = thebatch;
  }

})();
