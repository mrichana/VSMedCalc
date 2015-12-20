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
        'ngSanitize',
        'ngMaterial',
        'duScroll'
    ])

        .filter('to_trusted', filters.to_trusted)

        .controller('calculatorController', controllers.calculatorController)
        //  .controller('patientCtrl', controllers.patientCtrl)
        //  .controller('patientsCtrl', controllers.patientsCtrl)

        .directive('navView', directives.navView)
        .directive('result', directives.result)
        .directive('view', directives.view)
        .directive('verifiedClick', directives.verifiedClick)
        .config(['$mdThemingProvider', '$mdIconProvider', function ($mdThemingProvider, $mdIconProvider) {

            $mdIconProvider
                .icon('menu', 'fonts/menu.svg', 24)
                .icon('reset', 'fonts/reset.svg', 24)
                .icon('edit', 'fonts/edit.svg', 24)
                .icon('close', 'fonts/close.svg', 24)

                .icon('check', 'fonts/check.svg', 48)
                .icon('info', 'fonts/info.svg', 48)
                .icon('error', 'fonts/error.svg', 48);

            $mdThemingProvider.theme('default')
                .primaryPalette('blue')
                .accentPalette('red');

        }])
        .value('duScrollDuration', 2000)
        .value('duScrollActiveClass', 'md-primary');
}
