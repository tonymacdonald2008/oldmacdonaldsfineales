(function () {
  'use strict'
  angular.module('MenuApp')
  .controller('LabelController', LabelController);

  LabelController.$inject=['thebatch'];
  function LabelController (thebatch){
    var ctrl = this;
    ctrl.batch = thebatch;

    ctrl.$onInit = function() {
      console.log("onInit");
      let batchurl = window.location.origin + "/index.html#/batch/" + thebatch.batch;
      let untappdurl = "http://untp.beer/" + thebatch.untappdref;
      new QRCode(document.getElementById("batchQRcode"), {
          text: batchurl,
          width: 128,
          height: 128,
          colorDark : "#000000",
          colorLight : "#ffffff",
          correctLevel : QRCode.CorrectLevel.H
      });
      new QRCode(document.getElementById("untappdBatchQRcode"), {
          text: untappdurl,
          width: 128,
          height: 128,
          colorDark : "#000000",
          colorLight : "#ffffff",
          correctLevel : QRCode.CorrectLevel.H
      });

    }
  }
})();
