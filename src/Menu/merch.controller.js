(function () {
  'use strict'
  angular.module('MenuApp')
  .controller('MerchController', MerchController);

  MerchController.$inject=['themerch'];

  function MerchController (themerch){
    var ctrl = this;
    ctrl.allmerch = themerch;
  }

})();
