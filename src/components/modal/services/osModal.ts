/// <reference path="../../../../typings/main.d.ts" />

import IDialogService = angular.material.IDialogService;

export class OsModal {

  $get = ['$mdDialog', ($mdDialog: IDialogService) => {

    return {
      alert: () => {
        let alert = $mdDialog.alert({
          title: 'Attention',
          textContent: 'This is an example of how easy dialogs can be!',
          ok: 'Close'
        });

        $mdDialog
          .show(alert)
          .finally(function () {
            console.log('dialog closed');
          });
      }
    }
  }];

}
