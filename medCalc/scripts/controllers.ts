/// <reference path="typings/underscore/underscore.d.ts"/>
/// <reference path="typings/angular-material/angular-material.d.ts"/>
/// <reference path="typings/jquery/jquery.d.ts"/>
/// <reference path="views/views.ts"/>
/// <reference path="views/viewsCollections.ts"/>

module controllers {
    'use strict';

    interface ICalculatorScope extends ng.IScope {
        filterText: string;
        setFilter(filterName: string): void;
        values: any;

        views: CalculatorViews.IFilteredViews;

        selectedTabCategoryIndex: number;

        openLeftPanel(): void;
        closeLeftPanel(): void;
        toggleLeftPanel(): void;

        navViewItemClicked($event: JQueryEventObject): void;

        clearSearchBox(): void;
        clearPanel(id: string): void;

        keys(dictionary: any): string[];
        subcategories(category: any): any;
        items(category: any): any;
        selectedTabCategory(): any;
        viewsList(): CalculatorViews.IView[];

        isNewCategory(index: number): string[];
    }

    /* Controllers */
    export class calculatorController {
        public static $inject = ['$scope', '$mdSidenav'];
        constructor(private $scope: ICalculatorScope, private $mdSidenav: angular.material.ISidenavService) {
            $scope.filterText = '';
            $scope.values = {};
            $scope.selectedTabCategoryIndex = 0;

            var views = new CalculatorViews.ViewsCollection($scope.values);

            $scope.toggleLeftPanel = function() {
                $mdSidenav('left').toggle();
            }

            $scope.openLeftPanel = function() {
                $mdSidenav('left').open();
            }

            $scope.closeLeftPanel = function() {
                $mdSidenav('left').close();
            }

            $scope.navViewItemClicked = ($event: JQueryEventObject) => {
                $scope.closeLeftPanel();
                $event.preventDefault();
                var targetId = angular.element($event.target).parent().parent().attr('href').slice(1);
                var target = angular.element(document.getElementById(targetId));
                var targetContainer = target.parent();
                targetContainer['duScrollToElementAnimated'](target);


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
                var selectedTabCategoryName = _.keys($scope.views.categories.categories)[$scope.selectedTabCategoryIndex];
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

            $scope.isNewCategory = function(index: number) {
                var list = $scope.viewsList();
                var prev: CalculatorViews.IView = list[index - 1];
                var curr: CalculatorViews.IView = list[index];
                var ret: string[] = ['', ''];
                if (curr) {
                    if (!prev || prev.description.category[1] != curr.description.category[1]) {
                        ret[0] = curr.description.category[1] || '';
                        ret[1] = curr.description.category[2] || '';
                    }
                    else if (prev.description.category[2] != curr.description.category[2]) {
                        ret[1] = curr.description.category[2] || '';
                    }
                }
                return ret;
            }

            $scope.clearSearchBox = function() {
                $scope.filterText = '';
            };

            $scope.clearPanel = function(id) {
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
