var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var CalculatorViews;
(function (CalculatorViews) {
    'use strict';
    var Triplex_Stroke_Volume_Index = (function (_super) {
        __extends(Triplex_Stroke_Volume_Index, _super);
        function Triplex_Stroke_Volume_Index() {
            _super.apply(this, arguments);
            this.description = new Triplex_Stroke_Volume_IndexDescription();
            this.template = 'calculator.basic';
            this.defaultValues = {
                Triplex_LVOT_Diameter: 20,
                Triplex_LVOT_VTI: 20,
                BSA: 1.82
            };
            this.fields = [
                {
                    id: 'Triplex_LVOT_Diameter',
                    name: 'Διάμετρος LVOT (mm)',
                    input: {
                        type: 'number',
                        step: 1,
                        min: 1,
                        max: 50
                    }
                }, {
                    id: 'Triplex_LVOT_VTI',
                    name: 'LVOT VTI<sub>1</sub> (cm)',
                    description: 'Υποβαλβιδικό Ολοκλήρωμα',
                    input: {
                        type: 'number',
                        step: 1,
                        min: 1,
                        max: 100
                    }
                }, {
                    id: 'BSA',
                    name: 'BSA (m<sup>2</sup>)',
                    calculator: 'BSA',
                    input: {
                        type: 'number',
                        step: 0.1,
                        min: 0.1,
                        max: 3
                    }
                }, CalculatorViews.resultField
            ];
        }
        Triplex_Stroke_Volume_Index.prototype.calculator = function (values) {
            var ret = new CalculatorViews.Result();
            var formula = '( ( pi * ((Triplex_LVOT_Diameter / 10) / 2) ^ 2) * Triplex_LVOT_VTI ) / BSA ';
            ret.result = CalculatorViews.View.roundNum(CalculatorViews.View.evaluator(values, formula));
            ret.formula = CalculatorViews.View.formulaEvaluator(values, formula);
            if (ret.result < 35) {
                ret.resultlevel = CalculatorViews.IResult.resultLevel.abnormal;
            }
            else {
                ret.resultlevel = CalculatorViews.IResult.resultLevel.normal;
            }
            return ret;
        };
        ;
        return Triplex_Stroke_Volume_Index;
    })(CalculatorViews.View);
    var Triplex_Stroke_Volume_IndexDescription = (function (_super) {
        __extends(Triplex_Stroke_Volume_IndexDescription, _super);
        function Triplex_Stroke_Volume_IndexDescription() {
            _super.apply(this, arguments);
            this.id = 'Triplex_Stroke_Volume_Index';
            this.name = 'Stroke Volume Index (SVi)';
            this.category = 'Υπερηχοκαρδιογράφημα';
            this.tags = '';
            this.type = Triplex_Stroke_Volume_Index;
        }
        return Triplex_Stroke_Volume_IndexDescription;
    })(CalculatorViews.ViewDescription);
    CalculatorViews.viewsCollection.add(new Triplex_Stroke_Volume_IndexDescription());
})(CalculatorViews || (CalculatorViews = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVHJpcGxleF9TdHJva2VfVm9sdW1lX0luZGV4LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc2NyaXB0cy92aWV3cy90cmlwbGV4L1RyaXBsZXhfU3Ryb2tlX1ZvbHVtZV9JbmRleC50cyJdLCJuYW1lcyI6WyJDYWxjdWxhdG9yVmlld3MiLCJDYWxjdWxhdG9yVmlld3MuVHJpcGxleF9TdHJva2VfVm9sdW1lX0luZGV4IiwiQ2FsY3VsYXRvclZpZXdzLlRyaXBsZXhfU3Ryb2tlX1ZvbHVtZV9JbmRleC5jb25zdHJ1Y3RvciIsIkNhbGN1bGF0b3JWaWV3cy5UcmlwbGV4X1N0cm9rZV9Wb2x1bWVfSW5kZXguY2FsY3VsYXRvciIsIkNhbGN1bGF0b3JWaWV3cy5UcmlwbGV4X1N0cm9rZV9Wb2x1bWVfSW5kZXhEZXNjcmlwdGlvbiIsIkNhbGN1bGF0b3JWaWV3cy5UcmlwbGV4X1N0cm9rZV9Wb2x1bWVfSW5kZXhEZXNjcmlwdGlvbi5jb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxJQUFPLGVBQWUsQ0FzRXJCO0FBdEVELFdBQU8sZUFBZSxFQUFDLENBQUM7SUFDcEJBLFlBQVlBLENBQUNBO0lBRWJBO1FBQTBDQywrQ0FBSUE7UUFBOUNBO1lBQTBDQyw4QkFBSUE7WUFDMUNBLGdCQUFXQSxHQUFHQSxJQUFJQSxzQ0FBc0NBLEVBQUVBLENBQUNBO1lBQzNEQSxhQUFRQSxHQUFXQSxrQkFBa0JBLENBQUNBO1lBQ3RDQSxrQkFBYUEsR0FBR0E7Z0JBQ1pBLHFCQUFxQkEsRUFBRUEsRUFBRUE7Z0JBQ3pCQSxnQkFBZ0JBLEVBQUVBLEVBQUVBO2dCQUNwQkEsR0FBR0EsRUFBRUEsSUFBSUE7YUFDWkEsQ0FBQ0E7WUFDRkEsV0FBTUEsR0FBYUE7Z0JBQ2ZBO29CQUNJQSxFQUFFQSxFQUFFQSx1QkFBdUJBO29CQUMzQkEsSUFBSUEsRUFBRUEscUJBQXFCQTtvQkFDM0JBLEtBQUtBLEVBQUVBO3dCQUNIQSxJQUFJQSxFQUFFQSxRQUFR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