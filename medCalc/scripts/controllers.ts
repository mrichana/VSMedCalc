/// <reference path="typings/underscore/underscore.d.ts"/>
/// <reference path="views/views.ts"/>

module controllers {
    'use strict';

    interface ICalculatorScope extends ng.IScope {
        filterText: string;
        onFilterTextChange
        setFilter(filterName: string): void;
        location: string;
        views: CalculatorViews.IViewDescriptions;
        categories: _.Dictionary<_.Dictionary<CalculatorViews.IView>>;
        tags: string[];
        values: any;

        openLeftPanel(): void;
        closeLeftPanel(): void;
        toggleLeftPanel(): void;

        currentCategory: string;

        clearSearchBox(): void;
        clearPanel(id: string): void;
    }

    /* Controllers */
    export class calculatorController {
        public static $inject = ['$scope', '$location', '$mdSidenav'];
        constructor(private $scope: ICalculatorScope, private $location: ng.ILocationService, private $mdSidenav: angular.material.ISidenavService) {
            $scope.filterText = '';
            $scope.values = {};
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

            $scope.$watch("filterText", function(newValue, olValue) {
              $scope.setFilter(newValue);
            });

            $scope.setFilter = function (filterText: string = "") {
                $scope.views = views.filter(filterText);
                $scope.categories = $scope.views.categories;
                var regex = new RegExp(filterText, 'i');
                $scope.tags = _.values($scope.views.tags).filter((tag: CalculatorViews.TagDescription): boolean => {
                    return regex.test(tag.name);
                });
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
