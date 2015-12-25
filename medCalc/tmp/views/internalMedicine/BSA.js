var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var CalculatorViews;
(function (CalculatorViews) {
    'use strict';
    var BSA = (function (_super) {
        __extends(BSA, _super);
        function BSA() {
            _super.apply(this, arguments);
            this.description = new BSADescription();
            this.template = 'calculator.basic';
            this.defaultValues = {
                Height: 170,
                Weight: 70
            };
            this.fields = [
                CalculatorViews.heightField,
                CalculatorViews.weightField,
                CalculatorViews.resultField
            ];
        }
        BSA.prototype.calculator = function (values) {
            var ret = new CalculatorViews.Result();
            ret.suffix = 'm<sup>2</sup>';
            var formula = 'sqrt (( Height * Weight ) / 3600)';
            ret.formula = CalculatorViews.View.formulaEvaluator(values, formula);
            ret.result = CalculatorViews.View.roundNum(CalculatorViews.View.evaluator(values, formula), 2);
            ret.resultlevel = CalculatorViews.IResult.resultLevel.normal;
            return ret;
        };
        ;
        return BSA;
    })(CalculatorViews.View);
    var BSADescription = (function (_super) {
        __extends(BSADescription, _super);
        function BSADescription() {
            _super.apply(this, arguments);
            this.type = BSA;
            this.id = 'BSA';
            this.name = 'Επιφάνεια Σώματος (BSA)';
            this.category = 'Παθολογία';
            this.tags = '';
        }
        return BSADescription;
    })(CalculatorViews.ViewDescription);
    CalculatorViews.viewsCollection.add(new BSADescription());
})(CalculatorViews || (CalculatorViews = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQlNBLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc2NyaXB0cy92aWV3cy9pbnRlcm5hbE1lZGljaW5lL0JTQS50cyJdLCJuYW1lcyI6WyJDYWxjdWxhdG9yVmlld3MiLCJDYWxjdWxhdG9yVmlld3MuQlNBIiwiQ2FsY3VsYXRvclZpZXdzLkJTQS5jb25zdHJ1Y3RvciIsIkNhbGN1bGF0b3JWaWV3cy5CU0EuY2FsY3VsYXRvciIsIkNhbGN1bGF0b3JWaWV3cy5CU0FEZXNjcmlwdGlvbiIsIkNhbGN1bGF0b3JWaWV3cy5CU0FEZXNjcmlwdGlvbi5jb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxJQUFPLGVBQWUsQ0FtQ3JCO0FBbkNELFdBQU8sZUFBZSxFQUFDLENBQUM7SUFDcEJBLFlBQVlBLENBQUNBO0lBRWJBO1FBQWtCQyx1QkFBSUE7UUFBdEJBO1lBQWtCQyw4QkFBSUE7WUFDbEJBLGdCQUFXQSxHQUFHQSxJQUFJQSxjQUFjQSxFQUFFQSxDQUFDQTtZQUVuQ0EsYUFBUUEsR0FBV0Esa0JBQWtCQSxDQUFDQTtZQUN0Q0Esa0JBQWFBLEdBQUdBO2dCQUNaQSxNQUFNQSxFQUFFQSxHQUFHQTtnQkFDWEEsTUFBTUEsRUFBRUEsRUFBRUE7YUFDYkEsQ0FBQ0E7WUFDRkEsV0FBTUEsR0FBYUE7Z0JBQ2ZBLDJCQUFXQTtnQkFDWEEsMkJBQVdBO2dCQUNYQSwyQkFBV0E7YUFDZEEsQ0FBQ0E7UUFVTkEsQ0FBQ0E7UUFUR0Qsd0JBQVVBLEdBQVZBLFVBQVdBLE1BQU1BO1lBQ2JFLElBQUlBLEdBQUdBLEdBQUdBLElBQUlBLHNCQUFNQSxFQUFFQSxDQUFDQTtZQUN2QkEsR0FBR0EsQ0FBQ0EsTUFBTUEsR0FBR0EsZUFBZUEsQ0FBQ0E7WUFDN0JBLElBQUlBLE9BQU9BLEdBQUdBLG1DQUFtQ0EsQ0FBQ0E7WUFDbERBLEdBQUdBLENBQUNBLE9BQU9BLEdBQUdBLG9CQUFJQSxDQUFDQSxnQkFBZ0JBLENBQUNBLE1BQU1BLEVBQUVBLE9BQU9BLENBQUNBLENBQUNBO1lBQ3JEQSxHQUFHQSxDQUFDQSxNQUFNQSxHQUFHQSxvQkFBSUEsQ0FBQ0EsUUFBUUEsQ0FBQ0Esb0JBQUlBLENBQUNBLFNBQVNBLENBQUNBLE1BQU1BLEVBQUVBLE9BQU9BLENBQUNBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBO1lBQy9EQSxHQUFHQSxDQUFDQSxXQUFXQSxHQUFHQSx1QkFBT0EsQ0FBQ0EsV0FBV0EsQ0FBQ0EsTUFBTUEsQ0FBQ0E7WUFDN0NBLE1BQU1BLENBQUNBLEdBQUdBLENBQUNBO1FBQ2ZBLENBQUNBOztRQUNMRixVQUFDQTtJQUFEQSxDQUFDQSxBQXRCREQsRUFBa0JBLG9CQUFJQSxFQXNCckJBO0lBQ0RBO1FBQTZCSSxrQ0FBZUE7UUFBNUNBO1lBQTZCQyw4QkFBZUE7WUFDeENBLFNBQUlBLEdBQWdCQSxHQUFHQSxDQUFDQTtZQUN4QkEsT0FBRUEsR0FBV0EsS0FBS0EsQ0FBQ0E7WUFDbkJBLFNBQUlBLEdBQVdBLHlCQUF5QkEsQ0FBQ0E7WUFDekNBLGFBQVFBLEdBQVdBLFdBQVdBLENBQUNBO1lBQy9CQSxTQUFJQSxHQUFXQSxFQUFFQSxDQUFDQTtRQUN0QkEsQ0FBQ0E7UUFBREQscUJBQUNBO0lBQURBLENBQUNBLEFBTkRKLEVBQTZCQSwrQkFBZUEsRUFNM0NBO0lBRURBLCtCQUFlQSxDQUFDQSxHQUFHQSxDQUFDQSxJQUFJQSxjQUFjQSxFQUFFQSxDQUFDQSxDQUFDQTtBQUM5Q0EsQ0FBQ0EsRUFuQ00sZUFBZSxLQUFmLGVBQWUsUUFtQ3JCIn0=