/// <reference path="../typings/main.d.ts" />

angular.module('osElements', ['ngMaterial']).config(function($mdThemingProvider) {
    this.$inject = ['$mdThemingProvider'];

    $mdThemingProvider.definePalette('solutions-blue', $mdThemingProvider.extendPalette('indigo', {
        '500': '0099CE'
    }));

    $mdThemingProvider.definePalette('creative-green', $mdThemingProvider.extendPalette('green', {
        'A200': 'AECC53'
    }));

    $mdThemingProvider.definePalette('rubine-red', $mdThemingProvider.extendPalette('red', {
        '500': 'D40058'
    }));

    $mdThemingProvider.theme('os').primaryPalette('solutions-blue').accentPalette('creative-green').warnPalette('rubine-red');
    $mdThemingProvider.setDefaultTheme('os');
});

export {OsButton} from './components/button/button.component';
export {OsSelect} from './components/select/select';
export {OsTabs} from './components/tabs/tabs';
export {OsTab} from './components/tabs/tab';
export {OsPopover} from './components/popup/popup';
export {OsModal} from './components/modal/modal';
