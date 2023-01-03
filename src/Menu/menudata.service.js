( function (){
  'use strict'

  angular.module('Data')
  .service('MenuDataService', MenuDataService)

  MenuDataService.$inject=['$http'];
  function MenuDataService ($http) {
    var service = this;

    service.getBatchInfo = function () {
      return $http({
        method: 'GET',
        url: "data/batchinfo.csv"
      }).then(function (response){
        return parseCSV(response.data);
      });
    }

    service.getBatchDetail = function (batchNum) {
      return $http({
        method: 'GET',
        url: "data/batchinfo.csv"
      }).then(function (response){
        return parseCSV(response.data)[batchNum];
      });
    }


    service.getMerchInfo = function () {
      return $http({
        method: 'GET',
        url: "data/merch.json"
      }).then(function (response){
        return response.data;
      });
    }

    service.getMerchItem = function (itemname) {
      return $http({
        method: 'GET',
        url: "data/merch.json"
      }).then(function (response){
        return response.data.find(x => x.title === itemname);
      });
    }

    service.getAllCategories = function () {
      return $http({
        method: 'GET',
        url: "https://davids-restaurant.herokuapp.com/categories.json"
      }).then(function (response){
        return response.data;
      });
    }

    service.getItemsForCategory = function (categoryShortName) {
      var myurl = "https://davids-restaurant.herokuapp.com/menu_items.json?category=" +categoryShortName;
      return $http({
        method: 'GET',
        url: myurl
      }).then(function (response){
        return response.data;
      });
    }

    function parseCSV(csvstring){
      var lines = csvstring.split("\n");
      var columnnames = lines[0].split(",");
      var content = [];
      var entry = {};
      var columns;
      var done = false;
      for (var i = 0;(i<lines.length && !done);i++ ){
        entry = {};
        columns = lines[i].split(",");
        for (var j = 0;j<columnnames.length;j++){
          entry[columnnames[j]]=columns[j];
        }
        if (entry[columnnames[1]]){
          //ignore place holders at the end were name is not set
          content[i]=entry;
        } else {
          done = true;
        }
      }
      return content;
    }

  }

})();
