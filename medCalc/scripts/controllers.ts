/// <reference path="typings/underscore/underscore.d.ts"/>
/// <reference path="typings/angular-material/angular-material.d.ts"/>
/// <reference path="typings/jquery/jquery.d.ts"/>
/// <reference path="views/views.ts"/>
/// <reference path="views/viewsCollections.ts"/>

module controllers {
    'use strict';

    interface ICalculatorScope extends ng.IScope {
        values: any;
        selectedTabCategoryIndex: number;

        filterText: string;
        setFilter(filterName: string): void;
        views: CalculatorViews.IFilteredViews;

        openLeftPanel(): void;
        closeLeftPanel(): void;
        toggleLeftPanel(): void;

        navViewItemClicked($event: JQueryEventObject): void;

        clearSearchBox(): void;

        categoryIndexToName(index: number):string;
        viewsList(): CalculatorViews.IView[];
        
        view: CalculatorViews.IView;
    }

    /* Controllers */
    export class calculatorController {
        public static $inject = ['$scope', '$mdSidenav', '$routeParams'];
        constructor(private $scope: ICalculatorScope, private $mdSidenav: angular.material.ISidenavService, $routeParams) {
            $scope.filterText = '';
            $scope.values = {};

            var views = new CalculatorViews.ViewsCollection($scope.values);
            $scope.view = $routeParams?views.views[$routeParams['calculatorId']]:null;

            $scope.toggleLeftPanel = function() {
                $mdSidenav('left').toggle();
            }

            $scope.openLeftPanel = function() {
                $mdSidenav('left').open();
            }

            $scope.closeLeftPanel = function() {
                $mdSidenav('left').close();
            }

            $scope.$watch("filterText", function(newValue, olValue) {
                $scope.setFilter(newValue);
            });

            $scope.setFilter = function(filterText: string = ""): void {
                $scope.views = views.filter(filterText);
            };

            var viewsListCache = {};
            $scope.viewsList = function(): CalculatorViews.IView[] {
                var ret;
                var selectedTabCategoryName = $scope.categoryIndexToName($scope.selectedTabCategoryIndex);
                if (viewsListCache[selectedTabCategoryName+'||'+$scope.views.filter]) return viewsListCache[selectedTabCategoryName+'||'+$scope.views.filter];
                
                if (!_.isEmpty($scope.views.categories.categories) && selectedTabCategoryName) {
                    ret = $scope.views.viewsList(
                        $scope.views.categories.categories[
                            selectedTabCategoryName
                        ]
                    )
                } else {
                    ret = [];
                }
                viewsListCache[selectedTabCategoryName+'||'+$scope.views.filter]=ret;
                return ret;
            };
 
             $scope.clearSearchBox = function() {
                $scope.filterText = '';
            };
        };
    }
}
