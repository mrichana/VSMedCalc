/// <reference path="typings/angularjs/angular.d.ts"/>
/// <reference path="typings/angular-scroll/angular-scroll.d.ts"/>
/// <reference path="views/views.ts"/>

module directives {
    'use strict';

    export function selectOnClick($window): ng.IDirective {
        return {
            restrict: 'A',
            link: function (scope: ng.IScope, element) {
                var focusedElement;
                element.on('click', () => {
                    if (element[0] != focusedElement) {
                        focusedElement = element[0];
                        try {
                            // ios likes this but windows-chrome does not on number fields
                            element[0].setSelectionRange(0, element[0].value.length);
                        } catch (e) {
                            // windows-chrome likes this
                            element[0].select();
                        }
                    }
                });
                element.on('blur', () => {
                    focusedElement = null;
                });
            }
        };
    };
    selectOnClick.$inject = ['$window'];

    export function sticky($mdSticky): ng.IDirective {
        return {
            restrict: 'A',
            link: function (scope, element) {
                $mdSticky(scope, element);
            }
        }
    };
    sticky.$inject = ['$mdSticky'];

    export function navView(): ng.IDirective {
        return {
            restrict: 'E',
            templateUrl: 'partials/directives/navView.html'
        };
    };


    interface IResultAttributes extends ng.IAttributes {
    };
    export function result(): ng.IDirective {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                result: '='
            },
            templateUrl: 'partials/directives/result.html',
            link: ($scope: ng.IScope, element: ng.IAugmentedJQuery, attributes: ng.IAttributes) => {
                $scope.$watch('result.resultlevel', (newValue, oldValue, $scope) => {
                    switch (newValue) {
                        case CalculatorViews.IResult.resultLevel.Normal:
                            $scope['resultLevelIcon'] = 'check';
                            $scope['resultLevelClass'] = 'normal';
                            break;
                        case CalculatorViews.IResult.resultLevel.Intermediate:
                            $scope['resultLevelIcon'] = 'info';
                            $scope['resultLevelClass'] = 'intermediate';
                            break;
                        case CalculatorViews.IResult.resultLevel.Abnormal:
                            $scope['resultLevelIcon'] = 'error';
                            $scope['resultLevelClass'] = 'abnormal';
                            break;
                        default:
                            $scope['resultLevelIcon'] = '';
                            $scope['resultLevelClass'] = '';
                    }
                })
            }
        };
    };

    interface IViewScope extends ng.IScope {
        view: CalculatorViews.IView;
        modalCalculator(calculatorView: CalculatorViews.IView, $event: ng.IAugmentedJQuery): void;
    };

    export function view($compile: ng.ICompileService, $http: ng.IHttpService, $templateCache: ng.ITemplateCacheService, $timeout: ng.ITimeoutService, $q, $mdDialog): ng.IDirective {
        var promise;
        return {
            restrict: 'E',
            scope: {
                view: '='
            },
            link: ($scope: IViewScope, element: ng.IAugmentedJQuery, attributes: ng.IAttributes) => {
                _.each($scope.view.fields, function (field: CalculatorViews.IField) {
                    if (field.id != 'result') {
                        $scope.$watch('view.values.' + field.id, function (newValue, oldValue, $scope: IViewScope) {
                            $scope.view.validate(newValue, oldValue, $scope, field);
                            $scope.view.result = $scope.view.update();
                        });
                    };
                });
                _.each($scope.view.external, function (field) {
                    $scope.$watch('view.values.' + field, function (newValue, oldValue, $scope: IViewScope) {
                        $scope.view.validate(newValue, oldValue, $scope, null);
                        $scope.view.result = $scope.view.update();
                    });
                });

                $scope.modalCalculator = (calculatorView: CalculatorViews.IView, $event: ng.IAugmentedJQuery = null) => {
                    function DialogController($scope, $mdDialog) {
                        $scope.view = calculatorView;
                        $scope.closeDialog = function () {
                            $mdDialog.hide();
                        }
                    };
                    var target = $event && $event['currentTarget'];
                    $mdDialog.show({
                        templateUrl: 'partials/directives/modal.html',
                        controller: DialogController,
                        clickOutsideToClose: true,
                        openFrom: target,
                        closeTo: target

                    });
                };

                function asyncLoad() {
                    var deferred = $q.defer();
                    var templateName = $scope['view'].template || 'calculator';
                    $http.get('partials/views/' + templateName + '.html', {
                        cache: $templateCache
                    }).success(function (html: string) {
                        element.html(html);
                    }).then(function () {
                        element.replaceWith($compile(element.html())($scope));
                        deferred.resolve();
                    });
                    return deferred.promise;
                }

                if (!promise) {
                    promise = asyncLoad();
                } else {
                    promise.then(() => asyncLoad());
                }

            }
        }
    };
    view.$inject = ['$compile', '$http', '$templateCache', '$timeout', '$q', '$mdDialog'];

    interface IVerifiedClickAttributes extends ng.IAttributes {
        verifyWait: number;
    };
    interface IVerifiedClickScope extends ng.IScope {
        timer: ng.IPromise<any>;
        verifiedClick(element: ng.IAugmentedJQuery, attributes: IVerifiedClickAttributes): void;
    };
    export function verifiedClick($timeout: ng.ITimeoutService, $animate: ng.IAnimateService): ng.IDirective {
        return {
            restrict: 'A',
            scope: {
                verifiedClick: '&'
            },
            link: ($scope: IVerifiedClickScope, element: ng.IAugmentedJQuery, attributes: IVerifiedClickAttributes) => {
                element.on('tap click', function () {
                    $scope.$apply(function () {
                        var waitTime = attributes.verifyWait || 3000;
                        if (!$scope.timer) {
                            $animate.addClass(element, 'verify');
                            $animate.addClass(element, 'md-accent');
                            element.addClass('spin');
                            $scope.timer = $timeout(function () {
                                $scope.timer = null;
                                $animate.removeClass(element, 'verify');
                                $animate.removeClass(element, 'md-accent');
                                element.removeClass('spin');
                            }, waitTime);
                        } else {
                            $timeout.cancel($scope.timer);
                            $scope.timer = null;
                            $animate.removeClass(element, 'verify');
                            $animate.removeClass(element, 'md-accent');
                            element.removeClass('spin');
                            $scope.verifiedClick(element, attributes);
                        }
                    });
                });
            }
        };
    };
    verifiedClick.$inject = ['$timeout', '$animate'];
}
