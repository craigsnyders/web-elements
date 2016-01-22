angular
    .module('demo-app', ['osElements'])
    .controller('AppController', ['$OsModal', function($OsModal) {

        console.log($OsModal);


        this.clicked = function() {

          $OsModal.alert();

          /*
          alert = $mdDialog.alert({
            title: 'Attention',
            textContent: 'This is an example of how easy dialogs can be!',
            ok: 'Close'
          });

          $mdDialog
            .show(alert)
            .finally(function () {
              alert = undefined;
           });
           */
        }
    }]);

angular.element().ready(function() {
    angular.bootstrap(angular.element(document.body), ['demo-app']);
});


