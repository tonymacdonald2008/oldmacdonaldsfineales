(function () {
  'use strict'
  angular.module('MenuApp')
  .controller('BatchController', BatchController);

  BatchController.$inject=['thebatch'];
  function BatchController (thebatch){
    var ctrl = this;
    ctrl.batch = thebatch;

    ctrl.abv = function(){
      return ((thebatch.og - thebatch.fg)*131.25).toFixed(1) +"%";
    }
  }
})();
