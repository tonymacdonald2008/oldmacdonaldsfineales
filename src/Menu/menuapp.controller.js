(function () {
  'use strict'
  angular.module('MenuApp')
  .controller('MenuAppController', MenuAppController);

  MenuAppController.$inject=['$rootScope'];
  function MenuAppController ($rootScope){
    var ctrl = this;


    var cancellers = [];
    ctrl.$onInit = function () {
    
    // var cancel = $rootScope.$on('$stateChangeStart',
    // function(event, toState, toParams, fromState, fromParams, options){
    //   console.log("state change start: ");
    // });
    // cancellers.push(cancel);
    //
    // cancel = $rootScope.$on('$stateChangeSuccess',
    // function(event, toState, toParams, fromState, fromParams){
    //   console.log("state change success: ");
    // });
    // cancellers.push(cancel);

    var cancel = $rootScope.$on('$stateChangeError',
    function(event, toState, toParams, fromState, fromParams, error){
      console.log("state change error: " + error);
    });
    cancellers.push(cancel);
  };

ctrl.$onDestroy = function () {
  cancellers.forEach(function (item) {
    item();
  });
};
  }

})();
