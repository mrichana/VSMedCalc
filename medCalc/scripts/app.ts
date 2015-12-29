/// <reference path="typings/angularjs/angular.d.ts"/>
/// <reference path="filters.ts"/>
/// <reference path="controllers.ts"/>
/// <reference path="directives.ts"/>

module app {
    'use strict';

    // Declare app level module which depends on filters, and services
    angular.module('medicalCalculator', [
        'medical.services',
        'ngAnimate',
        'ngMaterial',
        'katex',
        'duScroll'
    ])

        .filter('to_trusted', filters.to_trusted)

        .controller('calculatorController', controllers.calculatorController)
        //  .controller('patientCtrl', controllers.patientCtrl)
        //  .controller('patientsCtrl', controllers.patientsCtrl)

        .directive('selectOnClick', directives.selectOnClick)

        .directive('result', directives.result)
        .directive('view', directives.view)
        .directive('verifiedClick', directives.verifiedClick)
        .config(['$mdThemingProvider', '$mdIconProvider', function ($mdThemingProvider, $mdIconProvider) {

            $mdIconProvider
                .icon('menu', 'css/fonts/menu.svg', 24)
                .icon('reset', 'css/fonts/reset.svg', 24)
                .icon('edit', 'css/fonts/edit.svg', 24)
                .icon('close', 'css/fonts/close.svg', 24)
                .icon('search', 'css/fonts/search.svg', 24)

                .icon('resultlevel-none', 'css/fonts/info.svg', 48)
                .icon('resultlevel-normal', 'css/fonts/check.svg', 48)
                .icon('resultlevel-intermediate', 'css/fonts/info.svg', 48)
                .icon('resultlevel-abnormal', 'css/fonts/error.svg', 48);

            $mdThemingProvider.theme('default')
                .primaryPalette('blue')
                .accentPalette('red');

        }])
        .value('duScrollDuration', 2000)
        .config(['$compileProvider', function ($compileProvider) {
            $compileProvider.debugInfoEnabled(false);
        }])
        .run(['$rootScope', function ($rootScope) {
            $rootScope.debug = function (item : any):void {
                console.log(item);
            }
        }]);
}
