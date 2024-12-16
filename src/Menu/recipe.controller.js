(function () {
  'use strict'
  angular.module('MenuApp')
  .controller('RecipeController', RecipeController);

  RecipeController.$inject=['recipe'];
  function RecipeController (recipe){
    var ctrl = this;
    ctrl.recipe = recipe;

  }
})();
