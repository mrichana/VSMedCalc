/// <reference path="typings/angularjs/angular.d.ts"/>
/// <reference path="typings/angular-scroll/angular-scroll.d.ts"/>

module directives {
  'use strict';

  interface IMrScrollToAttributes extends ng.IAttributes {
      mrScrollTo: string;
      href: string;
  };
  export function mrScrollTo(): ng.IDirective {
      return {
          link: ($scope: ng.IScope, element: ng.IAugmentedJQuery, attributes: IMrScrollToAttributes) => {
              element.on('click', function (e) {
                  e.preventDefault();
                  if (attributes.href) {
                      attributes.mrScrollTo = attributes.href;
                  }
                  var item = angular.element(document.getElementById(attributes.mrScrollTo));
                  item.parent().duScrollTo(item, 0, 2000);
              });
          }
      };
  };

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
      templateUrl: 'partials/directives/result.html'
    };
  };

  interface IViewScope extends ng.IScope {
    resultlevel: number;
    result: any;
    description: string;
    prefix: string;
    suffix: string;
  };

  interface IViewAttributes extends ng.IAttributes {
  };

  export function view($compile: ng.ICompileService, $http: ng.IHttpService, $templateCache: ng.ITemplateCacheService, $timeout: ng.ITimeoutService, $q): ng.IDirective {
    var promise;
    return {
      restrict: 'E',
      replace: true,
      template: '<div class="text-center"><h3><i class="fa fa-spinner fa-spin"></i></h3></div>',
      scope: {
        view: '='
      },
      link: ($scope: ng.IScope, element: ng.IAugmentedJQuery, attributes: IViewAttributes) => {
          _.each($scope['view'].fields, function (field: CalculatorViews.IField) {
          if (field.id != 'result') {
            $scope.$watch('view.values.' + field.id, function(newValue, oldValue, $scope) {
              $scope['view'].validate(newValue, oldValue, $scope, field);
              $scope['view'].result = $scope['view'].update();
            });
          };
        });
        _.each($scope['view'].external, function(field) {
          $scope.$watch('view.values.' + field, function(newValue, oldValue, $scope) {
            $scope['view'].validate(newValue, oldValue, $scope, null);
            $scope['view'].result = $scope['view'].update();
          });
        });

        function asyncLoad() {
          var deferred = $q.defer();
           var templateName = $scope['view'].template || 'calculator';
           $http.get('partials/views/' + templateName + '.html', {
             cache: $templateCache
           }).success(function(html: string) {
             element.html(html);
           }).then(function() {
             element.replaceWith($compile(element.html())($scope));
             deferred.resolve();
           });
          return deferred.promise;
        }

        if (!promise) {
          promise = asyncLoad();
        } else {
          promise.then(()=>asyncLoad());
        }

      }
    }
  };
  view.$inject = ['$compile', '$http', '$templateCache', '$timeout', '$q'];

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
        element.on('tap click', function() {
          $scope.$apply(function() {
            var waitTime = attributes.verifyWait || 3000;
            if (!$scope.timer) {
              $animate.addClass(element, 'verify');
              $animate.addClass(element, 'md-accent');
              element.addClass('spin');
              $scope.timer = $timeout(function() {
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
