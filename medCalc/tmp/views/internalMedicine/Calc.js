var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var CalculatorViews;
(function (CalculatorViews) {
    'use strict';
    var Calc = (function (_super) {
        __extends(Calc, _super);
        function Calc() {
            _super.apply(this, arguments);
            this.description = new CalcDescription();
            this.template = 'calculator.basic';
            this.defaultValues = {
                Calculation: ''
            };
            this.fields = [
                {
                    id: 'Calculation',
                    name: 'Υπολογισμός',
                    input: {
                        type: 'text'
                    }
                },
                CalculatorViews.resultField
            ];
        }
        Calc.prototype.calculator = function (values) {
            var ret = new CalculatorViews.Result();
            try {
                var formula = values.Calculation;
                ret.formula = CalculatorViews.View.formulaEvaluator(values, formula);
                ret.result = math.eval(formula);
                ret.resultlevel = CalculatorViews.IResult.resultLevel.none;
                if (!angular.isNumber(ret.result)) {
                    throw 'nan';
                }
                if (!isFinite(ret.result)) {
                    ret.result = 'Άπειρο';
                    ret.resultlevel = CalculatorViews.IResult.resultLevel.intermediate;
                }
            }
            catch (err) {
                ret.result = 'Λάθος Υπολογισμός';
                ret.resultlevel = CalculatorViews.IResult.resultLevel.abnormal;
            }
            return ret;
        };
        ;
        return Calc;
    })(CalculatorViews.View);
    var CalcDescription = (function (_super) {
        __extends(CalcDescription, _super);
        function CalcDescription() {
            _super.apply(this, arguments);
            this.type = Calc;
            this.id = 'Calc';
            this.name = 'Υπολογιστής';
            this.category = 'Παθολογία';
            this.tags = '';
        }
        return CalcDescription;
    })(CalculatorViews.ViewDescription);
    CalculatorViews.viewsCollection.add(new CalcDescription());
})(CalculatorViews || (CalculatorViews = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FsYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NjcmlwdHMvdmlld3MvaW50ZXJuYWxNZWRpY2luZS9DYWxjLnRzIl0sIm5hbWVzIjpbIkNhbGN1bGF0b3JWaWV3cyIsIkNhbGN1bGF0b3JWaWV3cy5DYWxjIiwiQ2FsY3VsYXRvclZpZXdzLkNhbGMuY29uc3RydWN0b3IiLCJDYWxjdWxhdG9yVmlld3MuQ2FsYy5jYWxjdWxhdG9yIiwiQ2FsY3VsYXRvclZpZXdzLkNhbGNEZXNjcmlwdGlvbiIsIkNhbGN1bGF0b3JWaWV3cy5DYWxjRGVzY3JpcHRpb24uY29uc3RydWN0b3IiXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsSUFBTyxlQUFlLENBa0RyQjtBQWxERCxXQUFPLGVBQWUsRUFBQyxDQUFDO0lBQ3BCQSxZQUFZQSxDQUFDQTtJQUViQTtRQUFtQkMsd0JBQUlBO1FBQXZCQTtZQUFtQkMsOEJBQUlBO1lBQ25CQSxnQkFBV0EsR0FBR0EsSUFBSUEsZUFBZUEsRUFBRUEsQ0FBQ0E7WUFFcENBLGFBQVFBLEdBQVdBLGtCQUFrQkEsQ0FBQ0E7WUFDdENBLGtCQUFhQSxHQUFHQTtnQkFDWkEsV0FBV0EsRUFBRUEsRUFBRUE7YUFDbEJBLENBQUNBO1lBQ0ZBLFdBQU1BLEdBQWFBO2dCQUNmQTtvQkFDSUEsRUFBRUEsRUFBRUEsYUFBYUE7b0JBQ2pCQSxJQUFJQSxFQUFFQSxhQUFhQTtvQkFDbkJBLEtBQUtBLEVBQUVBO3dCQUNIQSxJQUFJQSxFQUFFQSxNQUFNQTtxQkFDZkE7aUJBQ0pBO2dCQUNEQSwyQkFBV0E7YUFDZEEsQ0FBQ0E7UUFxQk5BLENBQUNBO1FBcEJHRCx5QkFBVUEsR0FBVkEsVUFBV0EsTUFBTUE7WUFDYkUsSUFBSUEsR0FBR0EsR0FBR0EsSUFBSUEsc0JBQU1BLEVBQUVBLENBQUNBO1lBQ3ZCQSxJQUFJQSxDQUFDQTtnQkFDREEsSUFBSUEsT0FBT0EsR0FBR0EsTUFBTUEsQ0FBQ0EsV0FBV0EsQ0FBQ0E7Z0JBQ2pDQSxHQUFHQSxDQUFDQSxPQUFPQSxHQUFHQSxvQkFBSUEsQ0FBQ0EsZ0JBQWdCQSxDQUFDQSxNQUFNQSxFQUFFQSxPQUFPQSxDQUFDQSxDQUFDQTtnQkFDckRBLEdBQUdBLENBQUNBLE1BQU1BLEdBQUdBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLENBQUNBO2dCQUNoQ0EsR0FBR0EsQ0FBQ0EsV0FBV0EsR0FBR0EsdUJBQU9BLENBQUNBLFdBQVdBLENBQUNBLElBQUlBLENBQUNBO2dCQUMzQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsUUFBUUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7b0JBQ2hDQSxNQUFNQSxLQUFLQSxDQUFDQTtnQkFDaEJBLENBQUNBO2dCQUNEQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxRQUFRQSxDQUFDQSxHQUFHQSxDQUFDQSxNQUFNQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtvQkFDeEJBLEdBQUdBLENBQUNBLE1BQU1BLEdBQUdBLFFBQVFBLENBQUNBO29CQUN0QkEsR0FBR0EsQ0FBQ0EsV0FBV0EsR0FBR0EsdUJBQU9BLENBQUNBLFdBQVdBLENBQUNBLFlBQVlBLENBQUNBO2dCQUN2REEsQ0FBQ0E7WUFDTEEsQ0FBRUE7WUFBQUEsS0FBS0EsQ0FBQ0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ1hBLEdBQUdBLENBQUNBLE1BQU1BLEdBQUdBLG1CQUFtQkEsQ0FBQ0E7Z0JBQ2pDQSxHQUFHQSxDQUFDQSxXQUFXQSxHQUFHQSx1QkFBT0EsQ0FBQ0EsV0FBV0EsQ0FBQ0EsUUFBUUEsQ0FBQ0E7WUFDbkRBLENBQUNBO1lBQ0RBLE1BQU1BLENBQUNBLEdBQUdBLENBQUNBO1FBQ2ZBLENBQUNBOztRQUNMRixXQUFDQTtJQUFEQSxDQUFDQSxBQXJDREQsRUFBbUJBLG9CQUFJQSxFQXFDdEJBO0lBQ0RBO1FBQThCSSxtQ0FBZUE7UUFBN0NBO1lBQThCQyw4QkFBZUE7WUFDekNBLFNBQUlBLEdBQWdCQSxJQUFJQSxDQUFDQTtZQUN6QkEsT0FBRUEsR0FBV0EsTUFBTUEsQ0FBQ0E7WUFDcEJBLFNBQUlBLEdBQVdBLGFBQWFBLENBQUNBO1lBQzdCQSxhQUFRQSxHQUFXQSxXQUFXQSxDQUFDQTtZQUMvQkEsU0FBSUEsR0FBV0EsRUFBRUEsQ0FBQ0E7UUFDdEJBLENBQUNBO1FBQURELHNCQUFDQTtJQUFEQSxDQUFDQSxBQU5ESixFQUE4QkEsK0JBQWVBLEVBTTVDQTtJQUVEQSwrQkFBZUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsSUFBSUEsZUFBZUEsRUFBRUEsQ0FBQ0EsQ0FBQ0E7QUFDL0NBLENBQUNBLEVBbERNLGVBQWUsS0FBZixlQUFlLFFBa0RyQiJ9