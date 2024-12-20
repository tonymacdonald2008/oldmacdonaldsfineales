(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/Menu/templates/home.template.html',
    controller: 'MenuAppController as ctrl'
  })

  // Merch page
  .state('merch', {
    url: '/merch',
    templateUrl: 'src/Menu/templates/merch.template.html',
    controller: 'MerchController as ctrl',
    resolve: {
      themerch:
      ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getMerchInfo();
      }]
    }
  })

  // Beer List Page
  .state('beers', {
    url: '/beers',
    templateUrl: 'src/Menu/templates/beerlist.template.html',
    controller: 'BeersController as ctrl',
    resolve: {
      thebeers:
      ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getBatchInfo();
      }]
    }
  })

  // Item detail
  .state('merchitem', {
    url: '/merch/{itemname}',
    templateUrl: 'src/Menu/templates/merchitem.template.html',
    controller: 'MerchItemController as ctrl',
    resolve: {
      theitem:
      ['$stateParams','MenuDataService', function ($stateParams, MenuDataService) {
        return MenuDataService.getMerchItem($stateParams.itemname);
      }]
    }
  })

    // batch info
    .state('batch', {
      url: '/batch/{batchNum}',
      templateUrl: 'src/Menu/templates/batch.template.html',
      controller: 'BatchController as ctrl',
      resolve: {
        thebatch:
        ['$stateParams','MenuDataService', function ($stateParams, MenuDataService) {
          return MenuDataService.getBatchDetail($stateParams.batchNum);
        }]
      }
    })

    // recipe info
    .state('batch.recipe', {
      url: '/recipe',
      templateUrl: 'src/Menu/templates/recipe.template.html',
      controller: 'RecipeController as ctrl',
      resolve: {
        recipe:
        ['$stateParams','MenuDataService', function ($stateParams, MenuDataService) {
          return MenuDataService.getRecipe($stateParams.batchNum);
        }]
      }
    })

  // label info
  .state('label', {
    url: '/label/{batchNum}',
    templateUrl: 'src/Menu/templates/label.template.html',
    controller: 'LabelController as ctrl',
    resolve: {
      thebatch:
      ['$stateParams','MenuDataService', function ($stateParams, MenuDataService) {
        return MenuDataService.getBatchDetail($stateParams.batchNum);
      }]
    }
  });

}

})();
