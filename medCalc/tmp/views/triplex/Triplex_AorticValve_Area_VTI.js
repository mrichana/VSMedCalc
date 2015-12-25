var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var CalculatorViews;
(function (CalculatorViews) {
    'use strict';
    var Triplex_AorticValve_Area_VTI = (function (_super) {
        __extends(Triplex_AorticValve_Area_VTI, _super);
        function Triplex_AorticValve_Area_VTI() {
            _super.apply(this, arguments);
            this.description = new Triplex_AorticValve_Area_VTIDescription();
            this.template = 'calculator.basic';
            this.defaultValues = {
                Triplex_LVOT_Diameter: 20,
                Triplex_LVOT_VTI: 20,
                Triplex_AorticValve_VTI: 40
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
                    id: 'Triplex_AorticValve_VTI',
                    name: 'AV VTI<sub>2</sub> (cm)',
                    description: 'Διαβαλβιδικό Ολοκλήρωμα',
                    input: {
                        type: 'number',
                        step: 1,
                        min: 1,
                        max: 100
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
        Triplex_AorticValve_Area_VTI.prototype.calculator = function (values) {
            var ret = new CalculatorViews.Result();
            var formula = '(pi * ((Triplex_LVOT_Diameter / 10) / 2) ^ 2) * Triplex_LVOT_VTI / Triplex_AorticValve_VTI';
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
        return Triplex_AorticValve_Area_VTI;
    })(CalculatorViews.View);
    var Triplex_AorticValve_Area_VTIDescription = (function (_super) {
        __extends(Triplex_AorticValve_Area_VTIDescription, _super);
        function Triplex_AorticValve_Area_VTIDescription() {
            _super.apply(this, arguments);
            this.type = Triplex_AorticValve_Area_VTI;
            this.id = 'Triplex_AorticValve_Area_VTI';
            this.name = 'Aortic Valve Area (VTI)';
            this.category = 'Υπερηχοκαρδιογράφημα';
            this.tags = 'AoV\\Stenosis';
        }
        return Triplex_AorticValve_Area_VTIDescription;
    })(CalculatorViews.ViewDescription);
    CalculatorViews.viewsCollection.add(new Triplex_AorticValve_Area_VTIDescription());
})(CalculatorViews || (CalculatorViews = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVHJpcGxleF9Bb3J0aWNWYWx2ZV9BcmVhX1ZUSS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NjcmlwdHMvdmlld3MvdHJpcGxleC9UcmlwbGV4X0FvcnRpY1ZhbHZlX0FyZWFfVlRJLnRzIl0sIm5hbWVzIjpbIkNhbGN1bGF0b3JWaWV3cyIsIkNhbGN1bGF0b3JWaWV3cy5UcmlwbGV4X0FvcnRpY1ZhbHZlX0FyZWFfVlRJIiwiQ2FsY3VsYXRvclZpZXdzLlRyaXBsZXhfQW9ydGljVmFsdmVfQXJlYV9WVEkuY29uc3RydWN0b3IiLCJDYWxjdWxhdG9yVmlld3MuVHJpcGxleF9Bb3J0aWNWYWx2ZV9BcmVhX1ZUSS5jYWxjdWxhdG9yIiwiQ2FsY3VsYXRvclZpZXdzLlRyaXBsZXhfQW9ydGljVmFsdmVfQXJlYV9WVElEZXNjcmlwdGlvbiIsIkNhbGN1bGF0b3JWaWV3cy5UcmlwbGV4X0FvcnRpY1ZhbHZlX0FyZWFfVlRJRGVzY3JpcHRpb24uY29uc3RydWN0b3IiXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsSUFBTyxlQUFlLENBZ0ZyQjtBQWhGRCxXQUFPLGVBQWUsRUFBQyxDQUFDO0lBQ3BCQSxZQUFZQSxDQUFDQTtJQUViQTtRQUEyQ0MsZ0RBQUlBO1FBQS9DQTtZQUEyQ0MsOEJBQUlBO1lBQzNDQSxnQkFBV0EsR0FBR0EsSUFBSUEsdUNBQXVDQSxFQUFFQSxDQUFDQTtZQUU1REEsYUFBUUEsR0FBV0Esa0JBQWtCQSxDQUFDQTtZQUN0Q0Esa0JBQWFBLEdBQUdBO2dCQUNaQSxxQkFBcUJBLEVBQUVBLEVBQUVBO2dCQUN6QkEsZ0JBQWdCQSxFQUFFQSxFQUFFQTtnQkFDcEJBLHVCQUF1QkEsRUFBRUEsRUFBRUE7YUFDOUJBLENBQUNBO1lBQ0ZBLFdBQU1BLEdBQWFBO2dCQUNmQTtvQkFDSUEsRUFBRUEsRUFBRUEsdUJBQXVCQTtvQkFDM0JBLElBQUlBLEVBQUVBLHFCQUFxQkE7b0JBQzNCQSxLQUFLQSxFQUFFQTt3QkFDSEEsSUFBSUEs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