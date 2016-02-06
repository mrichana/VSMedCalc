/// <reference path="typings/angularjs/angular.d.ts"/>
/// <reference path="filters.ts"/>
/// <reference path="controllers.ts"/>
/// <reference path="directives.ts"/>

module app {
    'use strict';

    // Declare app level module which depends on filters, and services
    angular.module('medicalCalculator', [
        'medical.services',
        'ngRoute',
        'ngAnimate',
        'ngMaterial',
        'katex',
        'duScroll',
        'vAccordion'
    ])

        .filter('to_trusted', filters.to_trusted)
        .filter('orderObjectBy', filters.orderObjectBy)

        .controller('calculatorController', controllers.calculatorController)
        //  .controller('patientCtrl', controllers.patientCtrl)
        //  .controller('patientsCtrl', controllers.patientsCtrl)

        .directive('selectOnClick', directives.selectOnClick)

        .directive('result', directives.result)
        .directive('view', directives.view)
        .directive('verifiedClick', directives.verifiedClick)
        
        .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
            $routeProvider
            .when('/:calculatorId', {
                template: '<view view="view"></view>',
                controller: 'calculatorController'
            })
            .otherwise({
                redirectTo: '/Calc'
            });
            $locationProvider.html5Mode(true);
        }])
        
        
        .config(['$mdThemingProvider', '$mdIconProvider', function ($mdThemingProvider, $mdIconProvider) {

            $mdIconProvider
                .icon('menu', 'css/fonts/menu.svg', 24)
                .icon('more', 'css/fonts/more.svg', 24)
                .icon('reset', 'css/fonts/reset.svg', 24)
                .icon('edit', 'css/fonts/edit.svg', 24)
                .icon('close', 'css/fonts/close.svg', 24)
                .icon('search', 'css/fonts/search.svg', 24)

                .icon('Γενικά', 'css/fonts/logo.svg', 48)
                .icon('Παθολογία', 'css/fonts/med.svg', 48)
                .icon('Πνευμονολογία', 'css/fonts/pulmo.svg', 48)
                .icon('Καρδιολογία', 'css/fonts/cardio.svg', 48)
                .icon('Ηλεκτροκαρδιογράφημα', 'css/fonts/ecg.svg', 48)
                .icon('Υπερηχοκαρδιογράφημα', 'css/fonts/echo.svg', 48)
                .icon('Φάρμακα', 'css/fonts/drugs.svg', 48)

                .icon('resultlevel-none', 'css/fonts/info.svg', 48)
                .icon('resultlevel-normal', 'css/fonts/check.svg', 48)
                .icon('resultlevel-intermediate', 'css/fonts/info.svg', 48)
                .icon('resultlevel-abnormal', 'css/fonts/error.svg', 48);

            $mdThemingProvider.theme('default')
                .primaryPalette('blue')
                .accentPalette('red');

        }])
        .config(['$compileProvider', function ($compileProvider) {
            $compileProvider.debugInfoEnabled(false); //Set to false for release
        }]);
}
