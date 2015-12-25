var directives;
(function (directives) {
    'use strict';
    function selectOnClick($window) {
        return {
            restrict: 'A',
            link: function (scope, element) {
                var focusedElement;
                element.on('click', function () {
                    if (element[0] != focusedElement) {
                        focusedElement = element[0];
                        try {
                            element[0].setSelectionRange(0, element[0].value.length);
                        }
                        catch (e) {
                            element[0].select();
                        }
                    }
                });
                element.on('blur', function () {
                    focusedElement = null;
                });
            }
        };
    }
    directives.selectOnClick = selectOnClick;
    ;
    selectOnClick.$inject = ['$window'];
    function navView() {
        return {
            restrict: 'E',
            templateUrl: 'partials/directives/navView.html'
        };
    }
    directives.navView = navView;
    ;
    ;
    function onVisible($rootScope) {
        return {
            restrict: 'A',
            link: function ($scope, element, attributes) {
                $scope.$on('duScrollspy:becameActive', function ($event, $element, $target) {
                    $target.addClass('active');
                    $scope['active'] = $target;
                    var unregisterWatchScrollBecomeInactive = $rootScope.$on('duScrollspy:becameInactive', function ($event, $element, $target) {
                        $target.removeClass('active');
                        if ($scope['active'] == $target) {
                            $scope['active'] = null;
                        }
                        unregisterWatchScrollBecomeInactive();
                    });
                });
            }
        };
    }
    directives.onVisible = onVisible;
    ;
    onVisible.$inject = ['$rootScope'];
    ;
    function result($rootScope) {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                result: '='
            },
            templateUrl: 'partials/directives/result.html'
        };
    }
    directives.result = result;
    ;
    result.$inject = ['$rootScope'];
    ;
    function view($compile, $http, $templateCache, $timeout, $q, $mdDialog) {
        var promise;
        return {
            restrict: 'E',
            scope: {
                view: '='
            },
            link: function ($scope, element, attributes) {
                _.each($scope.view.fields, function (field) {
                    if (field.id != 'result') {
                        $scope.$watch('view.values.' + field.id, function (newValue, oldValue, $scope) {
                            $scope.view.validate(newValue, oldValue, $scope, field);
                            $scope.view.result = $scope.view.update();
                        });
                    }
                    ;
                });
                _.each($scope.view.external, function (field) {
                    $scope.$watch('view.values.' + field, function (newValue, oldValue, $scope) {
                        $scope.view.validate(newValue, oldValue, $scope, null);
                        $scope.view.result = $scope.view.update();
                    });
                });
                $scope.modalCalculator = function (calculatorView, $event) {
                    if ($event === void 0) { $event = null; }
                    function DialogController($scope, $mdDialog) {
                        $scope.view = calculatorView;
                        $scope.closeDialog = function () {
                            $mdDialog.hide();
                        };
                    }
                    ;
                    DialogController.$inject = ['$scope', '$mdDialog'];
                    var target = $event && $event['currentTarget'];
                    $mdDialog.show({
                        templateUrl: 'partials/directives/dialog.html',
                        controller: DialogController,
                        clickOutsideToClose: true,
                        openFrom: target,
                        closeTo: target
                    });
                };
                var templateName = $scope['view'].template || 'calculator';
                $http.get('partials/views/' + templateName + '.html', {
                    cache: $templateCache
                }).success(function (html) {
                    element.replaceWith(($compile(html))($scope));
                });
            }
        };
    }
    directives.view = view;
    ;
    view.$inject = ['$compile', '$http', '$templateCache', '$timeout', '$q', '$mdDialog'];
    ;
    ;
    function verifiedClick($timeout, $animate) {
        return {
            restrict: 'A',
            scope: {
                verifiedClick: '&'
            },
            link: function ($scope, element, attributes) {
                element.on('tap click', function () {
                    $scope.$apply(function () {
                        var waitTime = attributes.verifyWait || 2000;
                        if (!$scope.timer) {
                            $animate.addClass(element, 'verify');
                            $animate.addClass(element, 'md-accent');
                            $animate.addClass(element.children(), 'spin');
                            $scope.timer = $timeout(function () {
                                $scope.timer = null;
                                $animate.removeClass(element, 'verify');
                                $animate.removeClass(element, 'md-accent');
                                $animate.removeClass(element.children(), 'spin');
                            }, waitTime);
                        }
                        else {
                            $timeout.cancel($scope.timer);
                            $scope.timer = null;
                            $animate.removeClass(element, 'verify');
                            $animate.removeClass(element, 'md-accent');
                            $animate.removeClass(element.children(), 'spin');
                            $scope.verifiedClick(element, attributes);
                        }
                    });
                });
            }
        };
    }
    directives.verifiedClick = verifiedClick;
    ;
    verifiedClick.$inject = ['$timeout', '$animate'];
})(directives || (directives = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyZWN0aXZlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NjcmlwdHMvZGlyZWN0aXZlcy50cyJdLCJuYW1lcyI6WyJkaXJlY3RpdmVzIiwiZGlyZWN0aXZlcy5zZWxlY3RPbkNsaWNrIiwiZGlyZWN0aXZlcy5uYXZWaWV3IiwiZGlyZWN0aXZlcy5vblZpc2libGUiLCJkaXJlY3RpdmVzLnJlc3VsdCIsImRpcmVjdGl2ZXMudmlldyIsImRpcmVjdGl2ZXMudmlldy5EaWFsb2dDb250cm9sbGVyIiwiZGlyZWN0aXZlcy52ZXJpZmllZENsaWNrIl0sIm1hcHBpbmdzIjoiQUFJQSxJQUFPLFVBQVUsQ0ErS2hCO0FBL0tELFdBQU8sVUFBVSxFQUFDLENBQUM7SUFDZkEsWUFBWUEsQ0FBQ0E7SUFFYkEsdUJBQThCQSxPQUFPQTtRQUNqQ0MsTUFBTUEsQ0FBQ0E7WUFDSEEsUUFBUUEsRUFBRUEsR0FBR0E7WUFDYkEsSUFBSUEsRUFBRUEsVUFBVUEsS0FBZ0JBLEVBQUVBLE9BQU9BO2dCQUNyQyxJQUFJLGNBQWMsQ0FBQztnQkFDbkIsT0FBTyxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUU7b0JBQ2hCLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxjQUFjLENBQUMsQ0FBQyxDQUFDO3dCQUMvQixjQUFjLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUM1QixJQUFJLENBQUM7NEJBRUQsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO3dCQUM3RCxDQUFFO3dCQUFBLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBRVQsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO3dCQUN4QixDQUFDO29CQUNMLENBQUM7Z0JBQ0wsQ0FBQyxDQUFDLENBQUM7Z0JBQ0gsT0FBTyxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUU7b0JBQ2YsY0FBYyxHQUFHLElBQUksQ0FBQztnQkFDMUIsQ0FBQyxDQUFDLENBQUM7WUFDUCxDQUFDO1NBQ0pBLENBQUNBO0lBQ05BLENBQUNBO0lBdEJlRCx3QkFBYUEsZ0JBc0I1QkEsQ0FBQUE7SUFBQUEsQ0FBQ0E7SUFDRkEsYUFBYUEsQ0FBQ0EsT0FBT0EsR0FBR0EsQ0FBQ0EsU0FBU0EsQ0FBQ0EsQ0FBQ0E7SUFFcENBO1FBQ0lFLE1BQU1BLENBQUNBO1lBQ0hBLFFBQVFBLEVBQUVBLEdBQUdBO1lBQ2JBLFdBQVdBLEVBQUVBLGtDQUFrQ0E7U0FDbERBLENBQUNBO0lBQ05BLENBQUNBO0lBTGVGLGtCQUFPQSxVQUt0QkEsQ0FBQUE7SUFBQUEsQ0FBQ0E7SUFNREEsQ0FBQ0E7SUFFRkEsbUJBQTBCQSxVQUFnQ0E7UUFDdERHLE1BQU1BLENBQUNBO1lBQ0hBLFFBQVFBLEVBQUVBLEdBQUdBO1lBQ2JBLElBQUlBLEVBQUVBLFVBQUNBLE1BQWlCQSxFQUFFQSxPQUE0QkEsRUFBRUEsVUFBMEJBO2dCQUM5RUEsTUFBTUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsMEJBQTBCQSxFQUFFQSxVQUFVQSxNQUF3QkEsRUFBRUEsUUFBNkJBLEVBQUVBLE9BQTRCQTtvQkFDbEksT0FBTyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFDM0IsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLE9BQU8sQ0FBQztvQkFDM0IsSUFBSSxtQ0FBbUMsR0FBRyxVQUFVLENBQUMsR0FBRyxDQUFDLDRCQUE0QixFQUFFLFVBQVUsTUFBd0IsRUFBRSxRQUE2QixFQUFFLE9BQTRCO3dCQUNsTCxPQUFPLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO3dCQUM5QixFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksT0FBTyxDQUFDLENBQUMsQ0FBQzs0QkFBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsSUFBSSxDQUFDO3dCQUFDLENBQUM7d0JBQzdELG1DQUFtQyxFQUFFLENBQUM7b0JBQzFDLENBQUMsQ0FBQyxDQUFDO2dCQUNQLENBQUMsQ0FBQ0EsQ0FBQ0E7WUFDUEEsQ0FBQ0E7U0FDSkEsQ0FBQUE7SUFDTEEsQ0FBQ0E7SUFmZUgsb0JBQVNBLFlBZXhCQSxDQUFBQTtJQUFBQSxDQUFDQTtJQUNGQSxTQUFTQSxDQUFDQSxPQUFPQSxHQUFHQSxDQUFDQSxZQUFZQSxDQUFDQSxDQUFDQTtJQUlsQ0EsQ0FBQ0E7SUFDRkEsZ0JBQXVCQSxVQUFnQ0E7UUFDbkRJLE1BQU1BLENBQUNBO1lBQ0hBLFFBQVFBLEVBQUVBLEdBQUdBO1lBQ2JBLE9BQU9BLEVBQUVBLElBQUlBO1lBQ2JBLEtBQUtBLEVBQUVBO2dCQUNIQSxNQUFNQSxFQUFFQSxHQUFHQTthQUNkQTtZQUNEQSxXQUFXQSxFQUFFQSxpQ0FBaUNBO1NBQ2pEQSxDQUFDQTtJQUNOQSxDQUFDQTtJQVRlSixpQkFBTUEsU0FTckJBLENBQUFBO0lBQUFBLENBQUNBO0lBQ0ZBLE1BQU1BLENBQUNBLE9BQU9BLEdBQUdBLENBQUNBLFlBQVlBLENBQUNBLENBQUNBO0lBSy9CQSxDQUFDQTtJQUVGQSxjQUFxQkEsUUFBNEJBLEVBQUVBLEtBQXNCQSxFQUFFQSxjQUF3Q0EsRUFBRUEsUUFBNEJBLEVBQUVBLEVBQUVBLEVBQUVBLFNBQVNBO1FBQzVKSyxJQUFJQSxPQUFPQSxDQUFDQTtRQUNaQSxNQUFNQSxDQUFDQTtZQUNIQSxRQUFRQSxFQUFFQSxHQUFHQTtZQUNiQSxLQUFLQSxFQUFFQTtnQkFDSEEsSUFBSUEsRUFBRUEsR0FBR0E7YUFDWkE7WUFDREEsSUFBSUEsRUFBRUEsVUFBQ0EsTUFBa0JBLEVBQUVBLE9BQTRCQSxFQUFFQSxVQUEwQkE7Z0JBQy9FQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxNQUFNQSxFQUFFQSxVQUFVQSxLQUE2QkE7b0JBQzlELEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFLElBQUksUUFBUSxDQUFDLENBQUMsQ0FBQzt3QkFDdkIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDLEVBQUUsRUFBRSxVQUFVLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBa0I7NEJBQ3JGLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDOzRCQUN4RCxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO3dCQUM5QyxDQUFDLENBQUMsQ0FBQztvQkFDUCxDQUFDO29CQUFBLENBQUM7Z0JBQ04sQ0FBQyxDQUFDQSxDQUFDQTtnQkFDSEEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsUUFBUUEsRUFBRUEsVUFBVUEsS0FBS0E7b0JBQ3hDLE1BQU0sQ0FBQyxNQUFNLENBQUMsY0FBYyxHQUFHLEtBQUssRUFBRSxVQUFVLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBa0I7d0JBQ2xGLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO3dCQUN2RCxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO29CQUM5QyxDQUFDLENBQUMsQ0FBQztnQkFDUCxDQUFDLENBQUNBLENBQUNBO2dCQUVIQSxNQUFNQSxDQUFDQSxlQUFlQSxHQUFHQSxVQUFDQSxjQUFxQ0EsRUFBRUEsTUFBa0NBO29CQUFsQ0Esc0JBQWtDQSxHQUFsQ0EsYUFBa0NBO29CQUMvRkEsMEJBQTBCQSxNQUFNQSxFQUFFQSxTQUFTQTt3QkFDdkNDLE1BQU1BLENBQUNBLElBQUlBLEdBQUdBLGNBQWNBLENBQUNBO3dCQUM3QkEsTUFBTUEsQ0FBQ0EsV0FBV0EsR0FBR0E7NEJBQ2pCLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQzt3QkFDckIsQ0FBQyxDQUFBQTtvQkFDTEEsQ0FBQ0E7b0JBQUFELENBQUNBO29CQUNGQSxnQkFBZ0JBLENBQUNBLE9BQU9BLEdBQUdBLENBQUNBLFFBQVFBLEVBQUVBLFdBQVdBLENBQUNBLENBQUNBO29CQUNuREEsSUFBSUEsTUFBTUEsR0FBR0EsTUFBTUEsSUFBSUEsTUFBTUEsQ0FBQ0EsZUFBZUEsQ0FBQ0EsQ0FBQ0E7b0JBQy9DQSxTQUFTQSxDQUFDQSxJQUFJQSxDQUFDQTt3QkFDWEEsV0FBV0EsRUFBRUEsaUNBQWlDQTt3QkFDOUNBLFVBQVVBLEVBQUVBLGdCQUFnQkE7d0JBQzVCQSxtQkFBbUJBLEVBQUVBLElBQUlBO3dCQUN6QkEsUUFBUUEsRUFBRUEsTUFBTUE7d0JBQ2hCQSxPQUFPQSxFQUFFQSxNQUFNQTtxQkFFbEJBLENBQUNBLENBQUNBO2dCQUNQQSxDQUFDQSxDQUFDQTtnQkFFRkEsSUFBSUEsWUFBWUEsR0FBR0EsTUFBTUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0EsUUFBUUEsSUFBSUEsWUFBWUEsQ0FBQ0E7Z0JBQzNEQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxpQkFBaUJBLEdBQUdBLFlBQVlBLEdBQUdBLE9BQU9BLEVBQUVBO29CQUNsREEsS0FBS0EsRUFBRUEsY0FBY0E7aUJBQ3hCQSxDQUFDQSxDQUFDQSxPQUFPQSxDQUFDQSxVQUFVQSxJQUFZQTtvQkFDN0IsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0JBRWxELENBQUMsQ0FBQ0EsQ0FBQ0E7WUFFUEEsQ0FBQ0E7U0FDSkEsQ0FBQUE7SUFDTEEsQ0FBQ0E7SUFwRGVMLGVBQUlBLE9Bb0RuQkEsQ0FBQUE7SUFBQUEsQ0FBQ0E7SUFDRkEsSUFBSUEsQ0FBQ0EsT0FBT0EsR0FBR0EsQ0FBQ0EsVUFBVUEsRUFBRUEsT0FBT0EsRUFBRUEsZ0JBQWdCQSxFQUFFQSxVQUFVQSxFQUFFQSxJQUFJQSxFQUFFQSxXQUFXQSxDQUFDQSxDQUFDQTtJQUlyRkEsQ0FBQ0E7SUFJREEsQ0FBQ0E7SUFDRkEsdUJBQThCQSxRQUE0QkEsRUFBRUEsUUFBNEJBO1FBQ3BGTyxNQUFNQSxDQUFDQTtZQUNIQSxRQUFRQSxFQUFFQSxHQUFHQTtZQUNiQSxLQUFLQSxFQUFFQTtnQkFDSEEsYUFBYUEsRUFBRUEsR0FBR0E7YUFDckJBO1lBQ0RBLElBQUlBLEVBQUVBLFVBQUNBLE1BQTJCQSxFQUFFQSxPQUE0QkEsRUFBRUEsVUFBb0NBO2dCQUNsR0EsT0FBT0EsQ0FBQ0EsRUFBRUEsQ0FBQ0EsV0FBV0EsRUFBRUE7b0JBQ3BCLE1BQU0sQ0FBQyxNQUFNLENBQUM7d0JBQ1YsSUFBSSxRQUFRLEdBQUcsVUFBVSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUM7d0JBQzdDLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7NEJBQ2hCLFFBQVEsQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxDQUFDOzRCQUNyQyxRQUFRLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxXQUFXLENBQUMsQ0FBQzs0QkFDeEMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUM7NEJBQzlDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDO2dDQUNwQixNQUFNLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztnQ0FDcEIsUUFBUSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUM7Z0NBQ3hDLFFBQVEsQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLFdBQVcsQ0FBQyxDQUFDO2dDQUMzQyxRQUFRLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQzs0QkFDckQsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDO3dCQUNqQixDQUFDO3dCQUFDLElBQUksQ0FBQyxDQUFDOzRCQUNKLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDOzRCQUM5QixNQUFNLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQzs0QkFDcEIsUUFBUSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUM7NEJBQ3hDLFFBQVEsQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLFdBQVcsQ0FBQyxDQUFDOzRCQUMzQyxRQUFRLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQzs0QkFDakQsTUFBTSxDQUFDLGFBQWEsQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDLENBQUM7d0JBQzlDLENBQUM7b0JBQ0wsQ0FBQyxDQUFDLENBQUM7Z0JBQ1AsQ0FBQyxDQUFDQSxDQUFDQTtZQUNQQSxDQUFDQTtTQUNKQSxDQUFDQTtJQUNOQSxDQUFDQTtJQWhDZVAsd0JBQWFBLGdCQWdDNUJBLENBQUFBO0lBQUFBLENBQUNBO0lBQ0ZBLGFBQWFBLENBQUNBLE9BQU9BLEdBQUdBLENBQUNBLFVBQVVBLEVBQUVBLFVBQVVBLENBQUNBLENBQUNBO0FBQ3JEQSxDQUFDQSxFQS9LTSxVQUFVLEtBQVYsVUFBVSxRQStLaEIifQ==