var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var CalculatorViews;
(function (CalculatorViews) {
    'use strict';
    var Triplex_AorticValve_VelocityRatio_Vmax = (function (_super) {
        __extends(Triplex_AorticValve_VelocityRatio_Vmax, _super);
        function Triplex_AorticValve_VelocityRatio_Vmax() {
            _super.apply(this, arguments);
            this.description = new Triplex_AorticValve_VelocityRatio_VmaxDescription();
            this.template = 'calculator.basic';
            this.defaultValues = {
                Triplex_LVOT_Vmax: 1,
                Triplex_AorticValve_Vmax: 1
            };
            this.fields = [
                {
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
                },
                CalculatorViews.resultField, {
                    id: 'image',
                    input: {
                        type: 'image'
                    },
                    url: 'images/AVVR.png'
                }
            ];
        }
        Triplex_AorticValve_VelocityRatio_Vmax.prototype.calculator = function (values) {
            var ret = new CalculatorViews.Result();
            var formula = 'Triplex_LVOT_Vmax / Triplex_AorticValve_Vmax';
            ret.result = CalculatorViews.View.roundNum(CalculatorViews.View.evaluator(values, formula), 2);
            ret.formula = CalculatorViews.View.formulaEvaluator(values, formula);
            if (ret.result < 0.25) {
                ret.explanation = 'Σοβαρή στένωση αορτικής βαλβίδας';
                ret.resultlevel = CalculatorViews.IResult.resultLevel.abnormal;
            }
            else if (ret.result <= 0.50) {
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
        return Triplex_AorticValve_VelocityRatio_Vmax;
    })(CalculatorViews.View);
    var Triplex_AorticValve_VelocityRatio_VmaxDescription = (function (_super) {
        __extends(Triplex_AorticValve_VelocityRatio_VmaxDescription, _super);
        function Triplex_AorticValve_VelocityRatio_VmaxDescription() {
            _super.apply(this, arguments);
            this.id = 'Triplex_AorticValve_VelocityRatio_Vmax';
            this.name = 'Aortic Valve Velocity Ratio (Vmax)';
            this.category = 'Υπερηχοκαρδιογράφημα';
            this.tags = 'AoV\\Stenosis';
            this.type = Triplex_AorticValve_VelocityRatio_Vmax;
        }
        return Triplex_AorticValve_VelocityRatio_VmaxDescription;
    })(CalculatorViews.ViewDescription);
    CalculatorViews.viewsCollection.add(new Triplex_AorticValve_VelocityRatio_VmaxDescription());
})(CalculatorViews || (CalculatorViews = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVHJpcGxleF9Bb3J0aWNWYWx2ZV9WZWxvY2l0eVJhdGlvX1ZtYXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zY3JpcHRzL3ZpZXdzL3RyaXBsZXgvVHJpcGxleF9Bb3J0aWNWYWx2ZV9WZWxvY2l0eVJhdGlvX1ZtYXgudHMiXSwibmFtZXMiOlsiQ2FsY3VsYXRvclZpZXdzIiwiQ2FsY3VsYXRvclZpZXdzLlRyaXBsZXhfQW9ydGljVmFsdmVfVmVsb2NpdHlSYXRpb19WbWF4IiwiQ2FsY3VsYXRvclZpZXdzLlRyaXBsZXhfQW9ydGljVmFsdmVfVmVsb2NpdHlSYXRpb19WbWF4LmNvbnN0cnVjdG9yIiwiQ2FsY3VsYXRvclZpZXdzLlRyaXBsZXhfQW9ydGljVmFsdmVfVmVsb2NpdHlSYXRpb19WbWF4LmNhbGN1bGF0b3IiLCJDYWxjdWxhdG9yVmlld3MuVHJpcGxleF9Bb3J0aWNWYWx2ZV9WZWxvY2l0eVJhdGlvX1ZtYXhEZXNjcmlwdGlvbiIsIkNhbGN1bGF0b3JWaWV3cy5UcmlwbGV4X0FvcnRpY1ZhbHZlX1ZlbG9jaXR5UmF0aW9fVm1heERlc2NyaXB0aW9uLmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7OztBQUVBLElBQU8sZUFBZSxDQXFFckI7QUFyRUQsV0FBTyxlQUFlLEVBQUMsQ0FBQztJQUNwQkEsWUFBWUEsQ0FBQ0E7SUFFYkE7UUFBcURDLDBEQUFJQTtRQUF6REE7WUFBcURDLDhCQUFJQTtZQUNyREEsZ0JBQVdBLEdBQUdBLElBQUlBLGlEQUFpREEsRUFBRUEsQ0FBQ0E7WUFFdEVBLGFBQVFBLEdBQVdBLGtCQUFrQkEsQ0FBQ0E7WUFDdENBLGtCQUFhQSxHQUFHQTtnQkFDWkEsaUJBQWlCQSxFQUFFQSxDQUFDQTtnQkFDcEJBLHdCQUF3QkEsRUFBRUEsQ0FBQ0E7YUFDOUJBLENBQUNBO1lBQ0ZBLFdBQU1BLEdBQWFBO2dCQUNmQTtvQkFDSUEsRUFBRUEsRUFBRUEsbUJBQW1CQTtvQkFDdkJBLElBQUlBLEVBQUVB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