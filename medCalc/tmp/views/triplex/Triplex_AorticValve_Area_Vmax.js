var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var CalculatorViews;
(function (CalculatorViews) {
    'use strict';
    var Triplex_AorticValve_Area_Vmax = (function (_super) {
        __extends(Triplex_AorticValve_Area_Vmax, _super);
        function Triplex_AorticValve_Area_Vmax() {
            _super.apply(this, arguments);
            this.description = new Triplex_AorticValve_Area_VmaxDescription();
            this.template = 'calculator.basic';
            this.defaultValues = {
                Triplex_LVOT_Diameter: 20,
                Triplex_LVOT_Vmax: 1,
                Triplex_AorticValve_Vmax: 1
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
                    id: 'Triplex_LVOT_Vmax',
                    name: 'LVOT Vmax<sub>1</sub> (m/s)',
                    description: 'Υποβαλβιδική Μέγιστη Ταχύτητα',
                    input: {
                        type: 'number',
                        step: 0.1,
                        min: 0.1,
                        max: 8
                    }
                }, {
                    id: 'Triplex_AorticValve_Vmax',
                    name: 'AV Vmax<sub>2</sub> (m/s)',
                    description: 'Διαβαλβιδική Μέγιστη Ταχύτητα',
                    input: {
                        type: 'number',
                        step: 0.1,
                        min: 0.1,
                        max: 8
                    }
                }, CalculatorViews.resultField, {
                    id: 'image',
                    input: {
                        type: 'image'
                    },
                    url: 'images/AVVR.png'
                }
            ];
        }
        Triplex_AorticValve_Area_Vmax.prototype.calculator = function (values) {
            var ret = new CalculatorViews.Result();
            var formula = '(pi * ((Triplex_LVOT_Diameter / 10) / 2) ^ 2) * Triplex_LVOT_Vmax / Triplex_AorticValve_Vmax';
            ret.result = CalculatorViews.View.roundNum(CalculatorViews.View.evaluator(values, formula), 2);
            ret.formula = CalculatorViews.View.formulaEvaluator(values, formula);
            ret.suffix = 'cm<sup>2</sup>';
            if (ret.result < 1.0) {
                ret.explanation = 'Σοβαρή στένωση αορτικής βαλβίδας';
                ret.resultlevel = CalculatorViews.IResult.resultLevel.abnormal;
            }
            else if (ret.result <= 1.50) {
                ret.explanation = 'Μέτρια στένωση αορτικής βαλβίδας';
                ret.resultlevel = CalculatorViews.IResult.resultLevel.intermediate;
            }
            else {
                ret.explanation = 'Μικρή στένωση/Σκλήρυνση αορτικής βαλβίδας';
                ret.resultlevel = CalculatorViews.IResult.resultLevel.normal;
            }
            return ret;
        };
        ;
        return Triplex_AorticValve_Area_Vmax;
    })(CalculatorViews.View);
    var Triplex_AorticValve_Area_VmaxDescription = (function (_super) {
        __extends(Triplex_AorticValve_Area_VmaxDescription, _super);
        function Triplex_AorticValve_Area_VmaxDescription() {
            _super.apply(this, arguments);
            this.type = Triplex_AorticValve_Area_Vmax;
            this.id = 'Triplex_AorticValve_Area_Vmax';
            this.name = 'Aortic Valve Area (Vmax)';
            this.category = 'Υπερηχοκαρδιογράφημα';
            this.tags = 'AoV\\Stenosis';
        }
        return Triplex_AorticValve_Area_VmaxDescription;
    })(CalculatorViews.ViewDescription);
    CalculatorViews.viewsCollection.add(new Triplex_AorticValve_Area_VmaxDescription());
})(CalculatorViews || (CalculatorViews = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVHJpcGxleF9Bb3J0aWNWYWx2ZV9BcmVhX1ZtYXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zY3JpcHRzL3ZpZXdzL3RyaXBsZXgvVHJpcGxleF9Bb3J0aWNWYWx2ZV9BcmVhX1ZtYXgudHMiXSwibmFtZXMiOlsiQ2FsY3VsYXRvclZpZXdzIiwiQ2FsY3VsYXRvclZpZXdzLlRyaXBsZXhfQW9ydGljVmFsdmVfQXJlYV9WbWF4IiwiQ2FsY3VsYXRvclZpZXdzLlRyaXBsZXhfQW9ydGljVmFsdmVfQXJlYV9WbWF4LmNvbnN0cnVjdG9yIiwiQ2FsY3VsYXRvclZpZXdzLlRyaXBsZXhfQW9ydGljVmFsdmVfQXJlYV9WbWF4LmNhbGN1bGF0b3IiLCJDYWxjdWxhdG9yVmlld3MuVHJpcGxleF9Bb3J0aWNWYWx2ZV9BcmVhX1ZtYXhEZXNjcmlwdGlvbiIsIkNhbGN1bGF0b3JWaWV3cy5UcmlwbGV4X0FvcnRpY1ZhbHZlX0FyZWFfVm1heERlc2NyaXB0aW9uLmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7OztBQUVBLElBQU8sZUFBZSxDQWlGckI7QUFqRkQsV0FBTyxlQUFlLEVBQUMsQ0FBQztJQUNwQkEsWUFBWUEsQ0FBQ0E7SUFFYkE7UUFBNENDLGlEQUFJQTtRQUFoREE7WUFBNENDLDhCQUFJQTtZQUM1Q0EsZ0JBQVdBLEdBQUdBLElBQUlBLHdDQUF3Q0EsRUFBRUEsQ0FBQ0E7WUFFN0RBLGFBQVFBLEdBQVdBLGtCQUFrQkEsQ0FBQ0E7WUFDdENBLGtCQUFhQSxHQUFHQTtnQkFDWkEscUJBQXFCQSxFQUFFQSxFQUFFQTtnQkFDekJBLGlCQUFpQkEsRUFBRUEsQ0FBQ0E7Z0JBQ3BCQSx3QkFBd0JBLEVBQUVBLENBQUNBO2FBQzlCQSxDQUFDQTtZQUNGQSxXQUFNQSxHQUFhQTtnQkFDZkE7b0JBQ0lBLEVBQUVBLEVBQUVBLHVCQUF1QkE7b0JBQzNCQSxJQUFJQSxFQUFFQSxxQkFBcUJBO29CQUMzQkEsS0FBS0EsRUFBRUE7d0JBQ0hB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