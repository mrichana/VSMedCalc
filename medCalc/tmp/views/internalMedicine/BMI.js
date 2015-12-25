var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var CalculatorViews;
(function (CalculatorViews) {
    'use strict';
    var BMI = (function (_super) {
        __extends(BMI, _super);
        function BMI() {
            _super.apply(this, arguments);
            this.description = new BMIDescription();
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
        BMI.prototype.calculator = function (values) {
            var ret = new CalculatorViews.Result();
            var formula = 'Weight / (Height/100) ^ 2';
            ret.result = CalculatorViews.View.roundNum(CalculatorViews.View.evaluator(values, formula));
            ret.formula = CalculatorViews.View.formulaEvaluator(values, formula);
            if (ret.result > 40) {
                ret.explanation = 'Νοσογόνος Παχυσαρκία';
                ret.resultlevel = CalculatorViews.IResult.resultLevel.abnormal;
            }
            else if (ret.result > 35) {
                ret.explanation = 'Παχύσαρκος';
                ret.resultlevel = CalculatorViews.IResult.resultLevel.abnormal;
            }
            else if (ret.result > 30) {
                ret.explanation = 'Ήπια Παχύσαρκος';
                ret.resultlevel = CalculatorViews.IResult.resultLevel.intermediate;
            }
            else if (ret.result > 25) {
                ret.explanation = 'Υπέρβαρος';
                ret.resultlevel = CalculatorViews.IResult.resultLevel.normal;
            }
            else if (ret.result > 18.5) {
                ret.explanation = 'Υγειές Βάρος';
                ret.resultlevel = CalculatorViews.IResult.resultLevel.normal;
            }
            else if (ret.result > 16) {
                ret.explanation = 'Ελιποβαρής';
                ret.resultlevel = CalculatorViews.IResult.resultLevel.normal;
            }
            else if (ret.result > 15) {
                ret.explanation = 'Έντονα Ελιποβαρής';
                ret.resultlevel = CalculatorViews.IResult.resultLevel.abnormal;
            }
            else {
                ret.explanation = 'Καχεκτικός';
                ret.resultlevel = CalculatorViews.IResult.resultLevel.abnormal;
            }
            return ret;
        };
        ;
        return BMI;
    })(CalculatorViews.View);
    var BMIDescription = (function (_super) {
        __extends(BMIDescription, _super);
        function BMIDescription() {
            _super.apply(this, arguments);
            this.type = BMI;
            this.id = 'BMI';
            this.name = 'Δείκτης Μάζας Σώματος';
            this.category = 'Παθολογία';
            this.tags = '';
        }
        return BMIDescription;
    })(CalculatorViews.ViewDescription);
    CalculatorViews.viewsCollection.add(new BMIDescription());
})(CalculatorViews || (CalculatorViews = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQk1JLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc2NyaXB0cy92aWV3cy9pbnRlcm5hbE1lZGljaW5lL0JNSS50cyJdLCJuYW1lcyI6WyJDYWxjdWxhdG9yVmlld3MiLCJDYWxjdWxhdG9yVmlld3MuQk1JIiwiQ2FsY3VsYXRvclZpZXdzLkJNSS5jb25zdHJ1Y3RvciIsIkNhbGN1bGF0b3JWaWV3cy5CTUkuY2FsY3VsYXRvciIsIkNhbGN1bGF0b3JWaWV3cy5CTUlEZXNjcmlwdGlvbiIsIkNhbGN1bGF0b3JWaWV3cy5CTUlEZXNjcmlwdGlvbi5jb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxJQUFPLGVBQWUsQ0EyRHJCO0FBM0RELFdBQU8sZUFBZSxFQUFDLENBQUM7SUFDcEJBLFlBQVlBLENBQUNBO0lBRWJBO1FBQWtCQyx1QkFBSUE7UUFBdEJBO1lBQWtCQyw4QkFBSUE7WUFDbEJBLGdCQUFXQSxHQUFHQSxJQUFJQSxjQUFjQSxFQUFFQSxDQUFDQTtZQUVuQ0EsYUFBUUEsR0FBV0Esa0JBQWtCQSxDQUFDQTtZQUN0Q0Esa0JBQWFBLEdBQUdBO2dCQUNaQSxNQUFNQSxFQUFFQSxHQUFHQTtnQkFDWEEsTUFBTUEsRUFBRUEsRUFBRUE7YUFDYkEsQ0FBQ0E7WUFDRkEsV0FBTUEsR0FBYUE7Z0JBQ2ZBLDJCQUFXQTtnQkFDWEEsMkJBQVdBO2dCQUNYQSwyQkFBV0E7YUFDZEEsQ0FBQ0E7UUFrQ05BLENBQUNBO1FBakNHRCx3QkFBVUEsR0FBVkEsVUFBV0EsTUFBTUE7WUFDYkUsSUFBSUEsR0FBR0EsR0FBR0EsSUFBSUEsc0JBQU1BLEVBQUVBLENBQUNBO1lBQ3ZCQSxJQUFJQSxPQUFPQSxHQUFHQSwyQkFBMkJBLENBQUNBO1lBQzFDQSxHQUFHQSxDQUFDQSxNQUFNQSxHQUFHQSxvQkFBSUEsQ0FBQ0EsUUFBUUEsQ0FBQ0Esb0JBQUlBLENBQUNBLFNBQVNBLENBQUNBLE1BQU1BLEVBQUVBLE9BQU9BLENBQUNBLENBQUNB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