var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var CalculatorViews;
(function (CalculatorViews) {
    'use strict';
    var GFR = (function (_super) {
        __extends(GFR, _super);
        function GFR() {
            _super.apply(this, arguments);
            this.description = new GFRDescription();
            this.template = 'calculator.basic';
            this.defaultValues = {
                Plasma_Creatinine: 1.0,
                Age: 65,
                Weight: 70,
                Sex: 0
            };
            this.fields = [
                {
                    id: 'Plasma_Creatinine',
                    name: 'Κρεατινίνη Πλάσματος',
                    input: {
                        type: 'number',
                        step: 0.1,
                        min: 0.1,
                        max: 8
                    }
                },
                CalculatorViews.ageField,
                CalculatorViews.weightField,
                CalculatorViews.sexField,
                CalculatorViews.resultField
            ];
        }
        GFR.prototype.calculator = function (values) {
            var ret = new CalculatorViews.Result();
            var formula;
            if (!values.Sex) {
                formula = '((140 - Age) * Weight ) / ( 72 * Plasma_Creatinine )';
            }
            else {
                formula = '(((140 - Age) * Weight ) / ( 72 * Plasma_Creatinine ))*0.85';
            }
            ret.suffix = 'mL/min';
            ret.result = CalculatorViews.View.roundNum(CalculatorViews.View.evaluator(values, formula));
            ret.formula = CalculatorViews.View.formulaEvaluator(values, formula);
            if (ret.result < 15) {
                ret.explanation = 'Νεφρική ανεπάρκεια';
                ret.resultlevel = CalculatorViews.IResult.resultLevel.abnormal;
            }
            else if (ret.result < 30) {
                ret.explanation = 'Νεφρική βλάβη με σοβαρή μείωση του GFR';
                ret.resultlevel = CalculatorViews.IResult.resultLevel.abnormal;
            }
            else if (ret.result < 60) {
                ret.explanation = 'Νεφρική βλάβη με μέτρια μείωση του GFR';
                ret.resultlevel = CalculatorViews.IResult.resultLevel.intermediate;
            }
            else if (ret.result < 90) {
                ret.explanation = 'Νεφρική βλάβη με ήπια μείωση του GFR';
                ret.resultlevel = CalculatorViews.IResult.resultLevel.normal;
            }
            else {
                ret.explanation = 'Φυσιολογική νεφρική λειτουργία';
                ret.resultlevel = CalculatorViews.IResult.resultLevel.normal;
            }
            return ret;
        };
        ;
        return GFR;
    })(CalculatorViews.View);
    var GFRDescription = (function (_super) {
        __extends(GFRDescription, _super);
        function GFRDescription() {
            _super.apply(this, arguments);
            this.type = GFR;
            this.id = 'GFR';
            this.name = 'Ρυθμός Σπειραματικής Διήθησης';
            this.category = 'Παθολογία';
            this.tags = 'renal\\gfr\\creatinine clearance';
        }
        return GFRDescription;
    })(CalculatorViews.ViewDescription);
    CalculatorViews.viewsCollection.add(new GFRDescription());
})(CalculatorViews || (CalculatorViews = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR0ZSLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc2NyaXB0cy92aWV3cy9pbnRlcm5hbE1lZGljaW5lL0dGUi50cyJdLCJuYW1lcyI6WyJDYWxjdWxhdG9yVmlld3MiLCJDYWxjdWxhdG9yVmlld3MuR0ZSIiwiQ2FsY3VsYXRvclZpZXdzLkdGUi5jb25zdHJ1Y3RvciIsIkNhbGN1bGF0b3JWaWV3cy5HRlIuY2FsY3VsYXRvciIsIkNhbGN1bGF0b3JWaWV3cy5HRlJEZXNjcmlwdGlvbiIsIkNhbGN1bGF0b3JWaWV3cy5HRlJEZXNjcmlwdGlvbi5jb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxJQUFPLGVBQWUsQ0F1RXJCO0FBdkVELFdBQU8sZUFBZSxFQUFDLENBQUM7SUFDcEJBLFlBQVlBLENBQUNBO0lBRWJBO1FBQWtCQyx1QkFBSUE7UUFBdEJBO1lBQWtCQyw4QkFBSUE7WUFDbEJBLGdCQUFXQSxHQUFHQSxJQUFJQSxjQUFjQSxFQUFFQSxDQUFDQTtZQUVuQ0EsYUFBUUEsR0FBV0Esa0JBQWtCQSxDQUFDQTtZQUN0Q0Esa0JBQWFBLEdBQUdBO2dCQUNaQSxpQkFBaUJBLEVBQUVBLEdBQUdBO2dCQUN0QkEsR0FBR0EsRUFBRUEsRUFBRUE7Z0JBQ1BBLE1BQU1BLEVBQUVBLEVBQUVBO2dCQUNWQSxHQUFHQSxFQUFFQSxDQUFDQTthQUNUQSxDQUFDQTtZQUNGQSxXQUFNQSxHQUFhQTtnQkFDZkE7b0JBQ0lBLEVBQUVBLEVBQUVBLG1CQUFtQkE7b0JBQ3ZCQSxJQUFJQSxFQUFFQSxzQkFBc0JBO29CQUM1QkEsS0FBS0EsRUFBRUE7d0JBQ0hBLElBQUlBLEVBQUVBLFFBQVFBO3dCQUNkQSxJQUFJQSxFQUFFQSxHQUFHQTt3QkFDVEEsR0FBR0EsRUFBRUEsR0FBR0E7d0JBQ1JBLEdBQUdBLEVBQUVBLENBQUNBO3FCQUNUQTtpQkFDSkE7Z0JBQ0RBLHdCQUFRQTtnQkFDUkEsMkJBQVdBO2dCQUNYQSx3QkFBUUE7Z0JBQ1JB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