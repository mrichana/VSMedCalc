/// <reference path="typings/underscore/underscore.d.ts"/>
/// <reference path="typings/angular-material/angular-material.d.ts"/>
/// <reference path="views/views.ts"/>

module controllers {
    'use strict';

    interface ICalculatorScope extends ng.IScope {
        filterText: string;
        onFilterTextChange
        setFilter(filterName: string): void;
        location: string;
        views: CalculatorViews.IViewDescriptions;
        categories: any[];
        tags: string[];
        values: any;

        selectedTabCategoryIndex: number;

        openLeftPanel(): void;
        closeLeftPanel(): void;
        toggleLeftPanel(): void;

        navViewItemClicked(viewId: string): void;

        clearSearchBox(): void;
        clearPanel(id: string): void;

        keys(dictionary: any): string[];
        subcategories(category: any): any;
        items(category: any): any;
        selectedTabCategory(): any;
        viewsList(): CalculatorViews.IView[];
    }

    /* Controllers */
    export class calculatorController {
        public static $inject = ['$scope', '$mdSidenav'];
        constructor(private $scope: ICalculatorScope, private $mdSidenav: angular.material.ISidenavService) {
            $scope.filterText = '';
            $scope.values = {};
            $scope.selectedTabCategoryIndex = 0;

            var views = new CalculatorViews.viewsCollection($scope.values);

            $scope.toggleLeftPanel = function () {
                $mdSidenav('left').toggle();
            }

            $scope.openLeftPanel = function () {
                $mdSidenav('left').open();
            }

            $scope.closeLeftPanel = function () {
                $mdSidenav('left').close();
            }

            $scope.navViewItemClicked = (viewId: string) => {
                $scope.closeLeftPanel();
            }

            $scope.$watch("filterText", function(newValue, olValue) {
              $scope.setFilter(newValue);
            });

            $scope.setFilter = function (filterText: string = "") {
                $scope.views = views.filter(filterText);
                //$scope.categories = [];
                //$scope.categories[0] = { name: 'Υπολογιστές', categories: _.omit($scope.views.categories, (category, name) => { return name == 'Υπερηχοκαρδιογράφημα'; }) };
                //$scope.categories[1] = { name: 'Υπερηχοκαρδιογράφημα', categories: _.pick($scope.views.categories, (category, name) => { return name == 'Υπερηχοκαρδιογράφημα'; }) };
                var regex = new RegExp(filterText, 'i');
                $scope.tags = _.values($scope.views.tags).filter((tag: CalculatorViews.TagDescription): boolean => {
                    return regex.test(tag.name);
                });
            };

            $scope.setFilter($scope.filterText);

            $scope.keys = function (dictionary: any) {
                return _.keys(dictionary);
            }

            $scope.subcategories = function (category: any) {
                return _.pick(category, (items, index) => {
                    return !_.has(items, 'description');
                });
            }
            $scope.items = function (category: any) {
                return _.pick(category, (items, index) => {
                    return _.has(items, 'description');
                });
            }

            $scope.selectedTabCategory = function () {
                return $scope.views.categories[$scope.keys($scope.views.categories)[$scope.selectedTabCategoryIndex]];
            }

            $scope.viewsList = function () {
                var ret: CalculatorViews.IView[] = [];
                _.each($scope.items($scope.selectedTabCategory()), (item: CalculatorViews.IView) => {
                    ret.push(item);
                });
                _.each($scope.subcategories($scope.selectedTabCategory()), (subcategory: any) => {
                    _.each($scope.items(subcategory), (item: CalculatorViews.IView) => {
                        ret.push(item);
                    });
                    _.each($scope.subcategories(subcategory), (subcategory: any) => {
                        _.each($scope.items(subcategory), (item: CalculatorViews.IView) => {
                            ret.push(item);
                        });
                    });
                });
                return ret;
            };



            $scope.clearSearchBox = function() {
              $scope.filterText='';
            };

            $scope.clearPanel = function (id) {
                $scope.views.views[id].reset();
            };
        };
    }

    /*
      interface IPatientScope extends ICalculatorScope {
        patient: any;
      };
      export class patientCtrl {
        public static $inject = ['$scope', '$location', 'patient', 'views', 'patientViews', 'internalMedicineViews', 'ΠνευμονολογίαViews', 'ΚαρδιολογίαViews', 'triplexViews'];
        constructor(private $scope: IPatientScope, private $location, private patient, private views, private patientViews, private internalMedicineViews, private pulmonologyViews, private cardiologyViews, private triplexViews) {
          var updatePanelsList = function() {
            $scope.panelsList = angular.copy(_.sortBy(_.filter(views.all(), function(view) {
              return _.contains(_.keys($scope.patient.calculatorsActive), view.id);
            }), 'order'));
          };

          $scope.patient = patient.value;
          updatePanelsList();
          _.each($scope.panelsList, function(panel) {
            panel.values = $scope.patient;
          });

          $scope.fullName = function(patient) {
            return patient && patient.lastname + ', ' + patient.firstname;
          };
          $scope.save = function() {
            patient.save();
            $location.path('/Patients');
          };
          $scope.delete = function() {
            patient.delete();
            $location.path('/Patients');
          };

          $scope.dropdown = [{
            text: 'Στοιχεία Επικοινωνίας...',
            disabled: 'existPanel(\'patientContactDetails\')',
            click: 'addPanel(\'patientContactDetails\')'
          }, {
              text: 'Σημειώσεις...',
              disabled: 'existPanel(\'patientNotes\')',
              click: 'addPanel(\'patientNotes\')'
            }];


          $scope.existPanel = function(panelId) {
            return _.contains(_.keys($scope.patient.calculatorsActive), panelId);
          };

          $scope.addPanel = function(panelId) {
            $scope.patient.calculatorsActive = $scope.patient.calculatorsActive || {};
            $scope.patient.calculatorsActive[panelId] = true;

            updatePanelsList();

            _.each($scope.panelsList, function(panel) {
              panel.values = $scope.patient;
            });
          };

          $scope.removePanel = function(id) {
            _.each(views.all()[id].defaultValues, function(value, key) {
              $scope.patient[key] = value;
            });
            delete $scope.patient.calculatorsActive[id];
            $scope.panelsList = _.filter(views.all(), function(view) {
              return _.contains(_.keys($scope.patient.calculatorsActive), view.id);
            });
            _.each($scope.panelsList, function(panel) {
              panel.values = $scope.patient;
            });
          };
        };
      }

      export class patientsCtrl {
        public static $inject = ['$scope', '$location', 'views', 'patients', 'patientViews'];
        constructor($scope, $location, views, patients, patientViews) {
          var values = {};

          $scope.searchView = views.all().newPatient;
          $scope.patientView = views.all().patientView;
          $scope.searchView.values = $scope.values = values;

          $scope.values.patients = patients.list;

          $scope.searchView.addPatient = function() {
            this.result.calculatorsActive = {
              patientEdit: true
            };
            patients.add(this.result);
            $scope.go('/Patient/' + this.result.id);
          };

          $scope.go = function(address) {
            $location.path(address);
          };

          $scope.$watch('values', function() {
            $scope.patientTemplate = {
              amka: values.amka,
              firstname: values.firstname,
              lastname: values.lastname
            };

            //     // $scope.values.filteredPatients = patientStorage.filterPatients({
            //     //     amka: values.amka,
            //     //     firstname: values.firstname,
            //     //     lastname: values.lastname
            //     // });

            //     // $scope.patients = _.map($scope.values.patients, function(patient) {
            //     //     var view = views.all().patientView;
            //     //     view.values = patient;
            //     //     return view;
            //     // });
          }, true);

          $scope.clearPanel = function(id) {
            views.all()[id].reset();
          };

          $scope.fullName = function(patient) {
            return patient && patient.lastname + ', ' + patient.firstname;
          };
        }
      }
    */
}
