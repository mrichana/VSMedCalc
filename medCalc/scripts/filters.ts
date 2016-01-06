module filters {
    'use strict';

    /* Filters */
    export function to_trusted($sce: ng.ISCEService): ng.IFilterService {
        return function(text: string): any {
            return $sce.trustAsHtml(angular.isDefined(text) ? '' + text : '');
        };
    };
    to_trusted.$inject = ['$sce'];

    export function orderObjectBy() {
        return function(items, field, reverse) {
            var filtered = [];
            angular.forEach(items, function(item) {
                filtered.push(item);
            });
            filtered.sort(function(a, b) {
                return (a[field] > b[field] ? 1 : -1);
            });
            if (reverse) filtered.reverse();
            return filtered;
        };
    };


    /*angular.module('medical.filters', []).
    filter('filterPatients', ['patientTemplateTest',
        function(patientTemplateTest) {
            return function(array, patientTemplate) {
              var filterfunc = patientTemplateTest;
  
              var ret = _.sortBy(_.filter(array, function(patient : Patient) {
                  return filterfunc(patient, patientTemplate);
              }), function(item: Patient) {
                  return item.lastname + ' ' + item.firstname;
              });
              return ret;
            };
        }
    ]);*/
}
