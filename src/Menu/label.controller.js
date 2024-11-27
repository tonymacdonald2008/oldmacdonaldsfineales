(function () {
  'use strict'
  angular.module('MenuApp')
  .controller('LabelController', LabelController);

  LabelController.$inject=['thebatch','$scope'];
  function LabelController (thebatch,$scope){
    var ctrl = this;
    ctrl.batch = thebatch;

    ctrl.$onInit = function() {
      console.log("onInit");
      let batchurl = window.location.origin + "/index.html#/batch/" + thebatch.batch;
      let untappdurl = "https://untappd.com/qr/beer/" + thebatch.untappdref;
      new QRCode(document.getElementById("batchQRcode"), {
          text: batchurl,
          width: 160,
          height: 160,
          colorDark : "#000000",
          colorLight : "#ffffff",
          correctLevel : QRCode.CorrectLevel.H
      });
      new QRCode(document.getElementById("untappdBatchQRcode"), {
          text: untappdurl,
          width: 160,
          height: 160,
          colorDark : "#000000",
          colorLight : "#ffffff",
          correctLevel : QRCode.CorrectLevel.H
      });

    }
    $scope.generatePDF = function(){
      console.log("generatePDF");
      var filename = "labels-batch-" + ctrl.batch.batch + ".pdf"
      var divHeight = $('#PrintableLabels').height();
      var divWidth = $('#PrintableLabels').width();
      var ratio = divHeight / divWidth;
      html2canvas(document.getElementById("PrintableLabels",{scale: 8}),
         ).then(function(canvas) {
           console.log("in onrendered");
              var image = canvas.toDataURL("image/jpeg");
              var doc = new jsPDF({orientation: 'p', format: 'letter'}); // using defaults: orientation=portrait, unit=mm, size=letter
              var width = doc.internal.pageSize.getWidth();
              var height = doc.internal.pageSize.getHeight();
              height = ratio * width;
              for (var i = 0; i < 3; i++) {
                let offset = 82 * i + 10;
                doc.addImage(image, 'JPEG', 1, offset, width-2, height-1);
              }
              doc.save(filename); //Download the rendered PDF.

      });
    }
  }
})();
