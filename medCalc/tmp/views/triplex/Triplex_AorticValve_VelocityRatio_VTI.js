var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var CalculatorViews;
(function (CalculatorViews) {
    'use strict';
    var Triplex_AorticValve_VelocityRatio_VTI = (function (_super) {
        __extends(Triplex_AorticValve_VelocityRatio_VTI, _super);
        function Triplex_AorticValve_VelocityRatio_VTI() {
            _super.apply(this, arguments);
            this.description = new Triplex_AorticValve_VelocityRatio_VTIDescription();
            this.template = 'calculator.basic';
            this.defaultValues = {
                Triplex_LVOT_VTI: 25,
                Triplex_AorticValve_VTI: 25
            };
            this.fields = [
                {
                    id: 'Triplex_LVOT_VTI',
                    name: 'LVOT VTI<sub>1</sub> (m)',
                    description: 'Υποβαλβιδικό Ολοκλήρωμα Ταχύτητας Χρόνου',
                    input: {
                        type: 'number',
                        step: 1,
                        min: 10,
                        max: 100
                    }
                }, {
                    id: 'Triplex_AorticValve_VTI',
                    name: 'AV VΤΙ<sub>2</sub> (m)',
                    description: 'Διαβαλβιδικό Ολοκλήρωμα Ταχύτητας Χρόνου',
                    input: {
                        type: 'number',
                        step: 1,
                        min: 10,
                        max: 400
                    }
                },
                CalculatorViews.resultField,
                {
                    id: 'image',
                    input: {
                        type: 'image'
                    },
                    url: 'images/AVVR.png'
                }
            ];
        }
        Triplex_AorticValve_VelocityRatio_VTI.prototype.calculator = function (values) {
            var ret = new CalculatorViews.Result();
            var formula = 'Triplex_LVOT_VTI / Triplex_AorticValve_VTI';
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
        return Triplex_AorticValve_VelocityRatio_VTI;
    })(CalculatorViews.View);
    var Triplex_AorticValve_VelocityRatio_VTIDescription = (function (_super) {
        __extends(Triplex_AorticValve_VelocityRatio_VTIDescription, _super);
        function Triplex_AorticValve_VelocityRatio_VTIDescription() {
            _super.apply(this, arguments);
            this.id = 'Triplex_AorticValve_VelocityRatio_VTI';
            this.name = 'Aortic Valve Velocity Ratio (VTI)';
            this.category = 'Υπερηχοκαρδιογράφημα';
            this.tags = 'AoV\\Stenosis';
            this.type = Triplex_AorticValve_VelocityRatio_VTI;
        }
        return Triplex_AorticValve_VelocityRatio_VTIDescription;
    })(CalculatorViews.ViewDescription);
    CalculatorViews.viewsCollection.add(new Triplex_AorticValve_VelocityRatio_VTIDescription());
})(CalculatorViews || (CalculatorViews = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVHJpcGxleF9Bb3J0aWNWYWx2ZV9WZWxvY2l0eVJhdGlvX1ZUSS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NjcmlwdHMvdmlld3MvdHJpcGxleC9UcmlwbGV4X0FvcnRpY1ZhbHZlX1ZlbG9jaXR5UmF0aW9fVlRJLnRzIl0sIm5hbWVzIjpbIkNhbGN1bGF0b3JWaWV3cyIsIkNhbGN1bGF0b3JWaWV3cy5UcmlwbGV4X0FvcnRpY1ZhbHZlX1ZlbG9jaXR5UmF0aW9fVlRJIiwiQ2FsY3VsYXRvclZpZXdzLlRyaXBsZXhfQW9ydGljVmFsdmVfVmVsb2NpdHlSYXRpb19WVEkuY29uc3RydWN0b3IiLCJDYWxjdWxhdG9yVmlld3MuVHJpcGxleF9Bb3J0aWNWYWx2ZV9WZWxvY2l0eVJhdGlvX1ZUSS5jYWxjdWxhdG9yIiwiQ2FsY3VsYXRvclZpZXdzLlRyaXBsZXhfQW9ydGljVmFsdmVfVmVsb2NpdHlSYXRpb19WVElEZXNjcmlwdGlvbiIsIkNhbGN1bGF0b3JWaWV3cy5UcmlwbGV4X0FvcnRpY1ZhbHZlX1ZlbG9jaXR5UmF0aW9fVlRJRGVzY3JpcHRpb24uY29uc3RydWN0b3IiXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsSUFBTyxlQUFlLENBc0VyQjtBQXRFRCxXQUFPLGVBQWUsRUFBQyxDQUFDO0lBQ3BCQSxZQUFZQSxDQUFDQTtJQUViQTtRQUFvREMseURBQUlBO1FBQXhEQTtZQUFvREMsOEJBQUlBO1lBQ3BEQSxnQkFBV0EsR0FBR0EsSUFBSUEsZ0RBQWdEQSxFQUFFQSxDQUFDQTtZQUVwRUEsYUFBUUEsR0FBV0Esa0JBQWtCQSxDQUFDQTtZQUN2Q0Esa0JBQWFBLEdBQUdBO2dCQUNaQSxnQkFBZ0JBLEVBQUVBLEVBQUVBO2dCQUNwQkEsdUJBQXVCQSxFQUFFQSxFQUFFQTthQUM5QkEsQ0FBQ0E7WUFDRkEsV0FBTUEsR0FBYUE7Z0JBQ2ZBO29CQUNJQSxFQUFFQSxFQUFFQSxrQkFBa0JBO29CQUN0QkEsSUFBSUEsRUFBRUEsMEJBQTBC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