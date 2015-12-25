var controllers;
(function (controllers) {
    'use strict';
    var calculatorController = (function () {
        function calculatorController($scope, $mdSidenav) {
            this.$scope = $scope;
            this.$mdSidenav = $mdSidenav;
            $scope.filterText = '';
            $scope.values = {};
            var views = new CalculatorViews.viewsCollection($scope.values);
            $scope.toggleLeftPanel = function () {
                $mdSidenav('left').toggle();
            };
            $scope.openLeftPanel = function () {
                $mdSidenav('left').open();
            };
            $scope.closeLeftPanel = function () {
                $mdSidenav('left').close();
            };
            $scope.$watch("filterText", function (newValue, olValue) {
                $scope.setFilter(newValue);
            });
            $scope.setFilter = function (filterText) {
                if (filterText === void 0) { filterText = ""; }
                $scope.views = views.filter(filterText);
                $scope.categories = $scope.views.categories;
                var regex = new RegExp(filterText, 'i');
                $scope.tags = _.values($scope.views.tags).filter(function (tag) {
                    return regex.test(tag.name);
                });
            };
            $scope.clearSearchBox = function () {
                $scope.filterText = '';
            };
            $scope.clearPanel = function (id) {
                $scope.views.views[id].reset();
            };
        }
        ;
        calculatorController.$inject = ['$scope', '$mdSidenav'];
        return calculatorController;
    })();
    controllers.calculatorController = calculatorController;
})(controllers || (controllers = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbGxlcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zY3JpcHRzL2NvbnRyb2xsZXJzLnRzIl0sIm5hbWVzIjpbImNvbnRyb2xsZXJzIiwiY29udHJvbGxlcnMuY2FsY3VsYXRvckNvbnRyb2xsZXIiLCJjb250cm9sbGVycy5jYWxjdWxhdG9yQ29udHJvbGxlci5jb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6IkFBSUEsSUFBTyxXQUFXLENBK0xqQjtBQS9MRCxXQUFPLFdBQVcsRUFBQyxDQUFDO0lBQ2hCQSxZQUFZQSxDQUFDQTtJQXVCYkE7UUFFSUMsOEJBQW9CQSxNQUF3QkEsRUFBVUEsVUFBNENBO1lBQTlFQyxXQUFNQSxHQUFOQSxNQUFNQSxDQUFrQkE7WUFBVUEsZUFBVUEsR0FBVkEsVUFBVUEsQ0FBa0NBO1lBQzlGQSxNQUFNQSxDQUFDQSxVQUFVQSxHQUFHQSxFQUFFQSxDQUFDQTtZQUN2QkEsTUFBTUEsQ0FBQ0EsTUFBTUEsR0FBR0EsRUFBRUEsQ0FBQ0E7WUFDbkJBLElBQUlBLEtBQUtBLEdBQUdBLElBQUlBLGVBQWVBLENBQUNBLGVBQWVBLENBQUNBLE1BQU1BLENBQUNBLE1BQU1BLENBQUNBLENBQUNBO1lBRS9EQSxNQUFNQSxDQUFDQSxlQUFlQSxHQUFHQTtnQkFDckIsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ2hDLENBQUMsQ0FBQUE7WUFFREEsTUFBTUEsQ0FBQ0EsYUFBYUEsR0FBR0E7Z0JBQ25CLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUM5QixDQUFDLENBQUFBO1lBRURBLE1BQU1BLENBQUNBLGNBQWNBLEdBQUdBO2dCQUNwQixVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDL0IsQ0FBQyxDQUFBQTtZQUVEQSxNQUFNQSxDQUFDQSxNQUFNQSxDQUFDQSxZQUFZQSxFQUFFQSxVQUFTQSxRQUFRQSxFQUFFQSxPQUFPQTtnQkFDcEQsTUFBTSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUM3QixDQUFDLENBQUNBLENBQUNBO1lBRUhBLE1BQU1BLENBQUNBLFNBQVNBLEdBQUdBLFVBQVVBLFVBQXVCQTtnQkFBdkIsMEJBQXVCLEdBQXZCLGVBQXVCO2dCQUNoRCxNQUFNLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBQ3hDLE1BQU0sQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUM7Z0JBQzVDLElBQUksS0FBSyxHQUFHLElBQUksTUFBTSxDQUFDLFVBQVUsRUFBRSxHQUFHLENBQUMsQ0FBQztnQkFDeEMsTUFBTSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLFVBQUMsR0FBbUM7b0JBQ2pGLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDaEMsQ0FBQyxDQUFDLENBQUM7WUFDUCxDQUFDLENBQUNBO1lBRUZBLE1BQU1BLENBQUNBLGNBQWNBLEdBQUdBO2dCQUN0QixNQUFNLENBQUMsVUFBVSxHQUFDLEVBQUUsQ0FBQztZQUN2QixDQUFDLENBQUNBO1lBRUZBLE1BQU1BLENBQUNBLFVBQVVBLEdBQUdBLFVBQVVBLEVBQUVBO2dCQUM1QixNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNuQyxDQUFDLENBQUNBO1FBQ05BLENBQUNBOztRQXRDYUQsNEJBQU9BLEdBQUdBLENBQUNBLFFBQVFBLEVBQUVBLFlBQVlBLENBQUNBLENBQUNBO1FBdUNyREEsMkJBQUNBO0lBQURBLENBQUNBLEFBeENERCxJQXdDQ0E7SUF4Q1lBLGdDQUFvQkEsdUJBd0NoQ0EsQ0FBQUE7QUErSExBLENBQUNBLEVBL0xNLFdBQVcsS0FBWCxXQUFXLFFBK0xqQiJ9