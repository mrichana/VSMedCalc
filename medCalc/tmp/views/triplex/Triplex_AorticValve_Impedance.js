var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var CalculatorViews;
(function (CalculatorViews) {
    'use strict';
    var Triplex_AorticValve_Impedance = (function (_super) {
        __extends(Triplex_AorticValve_Impedance, _super);
        function Triplex_AorticValve_Impedance() {
            _super.apply(this, arguments);
            this.description = new Triplex_AorticValve_ImpedanceDescription();
            this.template = 'calculator.basic';
            this.defaultValues = {
                Triplex_LVOT_Diameter: 20,
                Triplex_LVOT_VTI: 20,
                BSA: 1.82,
                BloodPressure_Systolic: 120,
                Triplex_AorticValve_Vmean: 1
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
                }, {
                    id: 'BloodPressure_Systolic',
                    name: 'Συστολική Πίεση',
                    input: {
                        type: 'number',
                        step: 5,
                        min: 60,
                        max: 280
                    }
                }, {
                    id: 'Triplex_AorticValve_Vmean',
                    name: 'AV Vmean(m/s)',
                    description: 'Διαβαλβιδική Μέση Ταχύτητα',
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
        Triplex_AorticValve_Impedance.prototype.calculator = function (values) {
            var ret = new CalculatorViews.Result();
            var formula = '( BloodPressure_Systolic + 4 * Triplex_AorticValve_Vmean ^ 2 ) / ( ( ( pi * ((Triplex_LVOT_Diameter / 10) / 2) ^ 2) * Triplex_LVOT_VTI ) / BSA )';
            ret.result = CalculatorViews.View.roundNum(CalculatorViews.View.evaluator(values, formula));
            ret.formula = CalculatorViews.View.formulaEvaluator(values, formula);
            if (ret.result >= 5.5) {
                ret.explanation = 'Πολύ Υψηλή Αορτοβαλβιδική Αντίσταση';
                ret.resultlevel = CalculatorViews.IResult.resultLevel.abnormal;
            }
            else if (ret.result >= 4.5) {
                ret.explanation = 'Υψηλή Αορτοβαλβιδική Αντίσταση';
                ret.resultlevel = CalculatorViews.IResult.resultLevel.intermediate;
            }
            else if (ret.result > 3.50) {
                ret.explanation = 'Μέτρια Αορτοβαλβιδική Αντίσταση';
                ret.resultlevel = CalculatorViews.IResult.resultLevel.normal;
            }
            else {
                ret.explanation = 'Μικρή Αορτοβαλβιδική Αντίσταση';
                ret.resultlevel = CalculatorViews.IResult.resultLevel.normal;
            }
            return ret;
        };
        ;
        return Triplex_AorticValve_Impedance;
    })(CalculatorViews.View);
    var Triplex_AorticValve_ImpedanceDescription = (function (_super) {
        __extends(Triplex_AorticValve_ImpedanceDescription, _super);
        function Triplex_AorticValve_ImpedanceDescription() {
            _super.apply(this, arguments);
            this.type = Triplex_AorticValve_Impedance;
            this.id = 'Triplex_AorticValve_Impedance';
            this.name = 'Aorto-Valvular Impedance (Zva)';
            this.category = 'Υπερηχοκαρδιογράφημα';
            this.tags = 'AoV\\Stenosis';
        }
        return Triplex_AorticValve_ImpedanceDescription;
    })(CalculatorViews.ViewDescription);
    CalculatorViews.viewsCollection.add(new Triplex_AorticValve_ImpedanceDescription());
})(CalculatorViews || (CalculatorViews = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVHJpcGxleF9Bb3J0aWNWYWx2ZV9JbXBlZGFuY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zY3JpcHRzL3ZpZXdzL3RyaXBsZXgvVHJpcGxleF9Bb3J0aWNWYWx2ZV9JbXBlZGFuY2UudHMiXSwibmFtZXMiOlsiQ2FsY3VsYXRvclZpZXdzIiwiQ2FsY3VsYXRvclZpZXdzLlRyaXBsZXhfQW9ydGljVmFsdmVfSW1wZWRhbmNlIiwiQ2FsY3VsYXRvclZpZXdzLlRyaXBsZXhfQW9ydGljVmFsdmVfSW1wZWRhbmNlLmNvbnN0cnVjdG9yIiwiQ2FsY3VsYXRvclZpZXdzLlRyaXBsZXhfQW9ydGljVmFsdmVfSW1wZWRhbmNlLmNhbGN1bGF0b3IiLCJDYWxjdWxhdG9yVmlld3MuVHJpcGxleF9Bb3J0aWNWYWx2ZV9JbXBlZGFuY2VEZXNjcmlwdGlvbiIsIkNhbGN1bGF0b3JWaWV3cy5UcmlwbGV4X0FvcnRpY1ZhbHZlX0ltcGVkYW5jZURlc2NyaXB0aW9uLmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7OztBQUVBLElBQU8sZUFBZSxDQXNHckI7QUF0R0QsV0FBTyxlQUFlLEVBQUMsQ0FBQztJQUNwQkEsWUFBWUEsQ0FBQ0E7SUFFYkE7UUFBNENDLGlEQUFJQTtRQUFoREE7WUFBNENDLDhCQUFJQTtZQUM1Q0EsZ0JBQVdBLEdBQUdBLElBQUlBLHdDQUF3Q0EsRUFBRUEsQ0FBQ0E7WUFFN0RBLGFBQVFBLEdBQVdBLGtCQUFrQkEsQ0FBQ0E7WUFDdENBLGtCQUFhQSxHQUFHQTtnQkFDWkEscUJBQXFCQSxFQUFFQSxFQUFFQTtnQkFDekJBLGdCQUFnQkEsRUFBRUEsRUFBRUE7Z0JBQ3BCQSxHQUFHQSxFQUFFQSxJQUFJQTtnQkFDVEEsc0JBQXNCQSxFQUFFQSxHQUFHQTtnQkFDM0JBLHlCQUF5QkEsRUFBRUEsQ0FBQ0E7YUFDL0JBLENBQUNBO1lBQ0ZBLFdBQU1BLEdBQWFBO2dCQUNmQTtvQkFDSUEsRUFBRUEsRUFBRUEsdUJBQXVCQTtv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