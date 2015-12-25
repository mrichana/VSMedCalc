var app;
(function (app) {
    'use strict';
    angular.module('medicalCalculator', [
        'medical.services',
        'ngAnimate',
        'ngMaterial',
        'duScroll',
        'katex'
    ])
        .filter('to_trusted', filters.to_trusted)
        .controller('calculatorController', controllers.calculatorController)
        .directive('selectOnClick', directives.selectOnClick)
        .directive('onVisible', directives.onVisible)
        .directive('navView', directives.navView)
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
            $rootScope.debug = function (item) {
                console.log(item);
            };
        }]);
})(app || (app = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc2NyaXB0cy9hcHAudHMiXSwibmFtZXMiOlsiYXBwIl0sIm1hcHBpbmdzIjoiQUFLQSxJQUFPLEdBQUcsQ0FxRFQ7QUFyREQsV0FBTyxHQUFHLEVBQUMsQ0FBQztJQUNSQSxZQUFZQSxDQUFDQTtJQUdiQSxPQUFPQSxDQUFDQSxNQUFNQSxDQUFDQSxtQkFBbUJBLEVBQUVBO1FBQ2hDQSxrQkFBa0JBO1FBQ2xCQSxXQUFXQTtRQUNYQSxZQUFZQTtRQUNaQSxVQUFVQTtRQUNWQSxPQUFPQTtLQUNWQSxDQUFDQTtTQUVHQSxNQUFNQSxDQUFDQSxZQUFZQSxFQUFFQSxPQUFPQSxDQUFDQSxVQUFVQSxDQUFDQTtTQUV4Q0EsVUFBVUEsQ0FBQ0Esc0JBQXNCQSxFQUFFQSxXQUFXQSxDQUFDQSxvQkFBb0JBLENBQUNBO1NBSXBFQSxTQUFTQSxDQUFDQSxlQUFlQSxFQUFFQSxVQUFVQSxDQUFDQSxhQUFhQSxDQUFDQTtTQUNwREEsU0FBU0EsQ0FBQ0EsV0FBV0EsRUFBRUEsVUFBVUEsQ0FBQ0EsU0FBU0EsQ0FBQ0E7U0FFNUNBLFNBQVNBLENBQUNBLFNBQVNBLEVBQUVBLFVBQVVBLENBQUNBLE9BQU9BLENBQUNBO1NBQ3hDQSxTQUFTQSxDQUFDQSxRQUFRQSxFQUFFQSxVQUFVQSxDQUFDQSxNQUFNQSxDQUFDQTtTQUN0Q0EsU0FBU0EsQ0FBQ0EsTUFBTUEsRUFBRUEsVUFBVUEsQ0FBQ0EsSUFBSUEsQ0FBQ0E7U0FDbENBLFNBQVNBLENBQUNBLGVBQWVBLEVBQUVBLFVBQVVBLENBQUNBLGFBQWFBLENBQUNBO1NBQ3BEQSxNQUFNQSxDQUFDQSxDQUFDQSxvQkFBb0JBLEVBQUVBLGlCQUFpQkEsRUFBRUEsVUFBVUEsa0JBQWtCQSxFQUFFQSxlQUFlQTtZQUUzRixlQUFlO2lCQUNWLElBQUksQ0FBQyxNQUFNLEVBQUUsb0JBQW9CLEVBQUUsRUFBRSxDQUFDO2lCQUN0QyxJQUFJLENBQUMsT0FBTyxFQUFFLHFCQUFxQixFQUFFLEVBQUUsQ0FBQztpQkFDeEMsSUFBSSxDQUFDLE1BQU0sRUFBRSxvQkFBb0IsRUFBRSxFQUFFLENBQUM7aUJBQ3RDLElBQUksQ0FBQyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsRUFBRSxDQUFDO2lCQUN4QyxJQUFJLENBQUMsUUFBUSxFQUFFLHNCQUFzQixFQUFFLEVBQUUsQ0FBQztpQkFFMUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLG9CQUFvQixFQUFFLEVBQUUsQ0FBQztpQkFDbEQsSUFBSSxDQUFDLG9CQUFvQixFQUFFLHFCQUFxQixFQUFFLEVBQUUsQ0FBQztpQkFDckQsSUFBSSxDQUFDLDBCQUEwQixFQUFFLG9CQUFvQixFQUFFLEVBQUUsQ0FBQztpQkFDMUQsSUFBSSxDQUFDLHNCQUFzQixFQUFFLHFCQUFxQixFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBRTdELGtCQUFrQixDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUM7aUJBQzlCLGNBQWMsQ0FBQyxNQUFNLENBQUM7aUJBQ3RCLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUU5QixDQUFDLENBQUNBLENBQUNBO1NBQ0ZBLEtBQUtBLENBQUNBLGtCQUFrQkEsRUFBRUEsSUFBSUEsQ0FBQ0E7U0FDL0JBLE1BQU1BLENBQUNBLENBQUNBLGtCQUFrQkEsRUFBRUEsVUFBVUEsZ0JBQWdCQTtZQUNuRCxnQkFBZ0IsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM3QyxDQUFDLENBQUNBLENBQUNBO1NBQ0ZBLEdBQUdBLENBQUNBLENBQUNBLFlBQVlBLEVBQUVBLFVBQVVBLFVBQVVBO1lBQ3BDLFVBQVUsQ0FBQyxLQUFLLEdBQUcsVUFBVSxJQUFVO2dCQUNuQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3RCLENBQUMsQ0FBQTtRQUNMLENBQUMsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7QUFDWkEsQ0FBQ0EsRUFyRE0sR0FBRyxLQUFILEdBQUcsUUFxRFQifQ==