var filters;
(function (filters) {
    'use strict';
    function to_trusted($sce) {
        return function (text) {
            return $sce.trustAsHtml(angular.isDefined(text) ? '' + text : '');
        };
    }
    filters.to_trusted = to_trusted;
    ;
    to_trusted.$inject = ['$sce'];
})(filters || (filters = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NjcmlwdHMvZmlsdGVycy50cyJdLCJuYW1lcyI6WyJmaWx0ZXJzIiwiZmlsdGVycy50b190cnVzdGVkIl0sIm1hcHBpbmdzIjoiQUFBQSxJQUFPLE9BQU8sQ0EwQmI7QUExQkQsV0FBTyxPQUFPLEVBQUMsQ0FBQztJQUNkQSxZQUFZQSxDQUFDQTtJQUdiQSxvQkFBMkJBLElBQW9CQTtRQUM3Q0MsTUFBTUEsQ0FBQ0EsVUFBU0EsSUFBWUE7WUFDMUIsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBQ3BFLENBQUMsQ0FBQ0E7SUFDSkEsQ0FBQ0E7SUFKZUQsa0JBQVVBLGFBSXpCQSxDQUFBQTtJQUFBQSxDQUFDQTtJQUNGQSxVQUFVQSxDQUFDQSxPQUFPQSxHQUFDQSxDQUFDQSxNQUFNQSxDQUFDQSxDQUFDQTtBQWlCOUJBLENBQUNBLEVBMUJNLE9BQU8sS0FBUCxPQUFPLFFBMEJiIn0=