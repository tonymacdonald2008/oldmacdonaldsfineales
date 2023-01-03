(function () {
  'use strict'
  angular.module('MenuApp')
  .controller('MerchItemController', MerchItemController);

  MerchItemController.$inject=['theitem'];
  function MerchItemController (theitem){
    var ctrl = this;
    ctrl.item = theitem;
  }

})();
