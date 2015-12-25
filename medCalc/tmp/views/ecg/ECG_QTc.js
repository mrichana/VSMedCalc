var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var CalculatorViews;
(function (CalculatorViews) {
    'use strict';
    var ECG_QTc = (function (_super) {
        __extends(ECG_QTc, _super);
        function ECG_QTc() {
            _super.apply(this, arguments);
            this.description = new ECG_QTcDescription();
            this.template = 'calculator.basic';
            this.defaultValues = {
                HeartRate: 70,
                ECG_QT: 400
            };
            this.fields = [
                {
                    id: 'ECG_QT',
                    name: 'Διάστημα QT(msec)',
                    calculator: 'ECG_QT',
                    input: {
                        type: 'number',
                        step: 10,
                        min: 200,
                        max: 1000
                    }
                }, {
                    id: 'HeartRate',
                    name: 'Σφύξεις',
                    input: {
                        type: 'number',
                        step: 1,
                        min: 20,
                        max: 280
                    }
                },
                CalculatorViews.resultField
            ];
        }
        ECG_QTc.prototype.calculator = function (values) {
            var ret = new CalculatorViews.Result();
            var formula = 'ECG_QT / sqrt(60 / HeartRate)';
            ret.result = CalculatorViews.View.roundNum(CalculatorViews.View.evaluator(values, formula));
            ret.formula = CalculatorViews.View.formulaEvaluator(values, formula);
            if (ret.result >= 480) {
                ret.explanation = 'Έντονα παρατεταμένο QT';
                ret.resultlevel = CalculatorViews.IResult.resultLevel.abnormal;
            }
            else if (ret.result >= 460) {
                ret.explanation = 'Παρατεταμένο QT';
                ret.resultlevel = CalculatorViews.IResult.resultLevel.intermediate;
            }
            else if (ret.result >= 440) {
                ret.explanation = 'Μικρή παράταση QT';
                ret.resultlevel = CalculatorViews.IResult.resultLevel.normal;
            }
            else if (ret.result <= 330) {
                ret.explanation = 'Έντονη βράχυνση QT';
                ret.resultlevel = CalculatorViews.IResult.resultLevel.abnormal;
            }
            else if (ret.result <= 350) {
                ret.explanation = 'Βραχύ QT';
                ret.resultlevel = CalculatorViews.IResult.resultLevel.intermediate;
            }
            else if (ret.result <= 370) {
                ret.explanation = 'Μικρή βράχυνση QT';
                ret.resultlevel = CalculatorViews.IResult.resultLevel.normal;
            }
            else {
                ret.explanation = 'Φυσιολογικό QT';
                ret.resultlevel = CalculatorViews.IResult.resultLevel.normal;
            }
            return ret;
        };
        ;
        return ECG_QTc;
    })(CalculatorViews.View);
    var ECG_QTcDescription = (function (_super) {
        __extends(ECG_QTcDescription, _super);
        function ECG_QTcDescription() {
            _super.apply(this, arguments);
            this.type = ECG_QTc;
            this.id = 'ECG_QTc';
            this.name = 'Διορθωμένο QT';
            this.category = 'ΗΚΓ';
            this.tags = '';
        }
        return ECG_QTcDescription;
    })(CalculatorViews.ViewDescription);
    CalculatorViews.viewsCollection.add(new ECG_QTcDescription());
})(CalculatorViews || (CalculatorViews = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRUNHX1FUYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NjcmlwdHMvdmlld3MvZWNnL0VDR19RVGMudHMiXSwibmFtZXMiOlsiQ2FsY3VsYXRvclZpZXdzIiwiQ2FsY3VsYXRvclZpZXdzLkVDR19RVGMiLCJDYWxjdWxhdG9yVmlld3MuRUNHX1FUYy5jb25zdHJ1Y3RvciIsIkNhbGN1bGF0b3JWaWV3cy5FQ0dfUVRjLmNhbGN1bGF0b3IiLCJDYWxjdWxhdG9yVmlld3MuRUNHX1FUY0Rlc2NyaXB0aW9uIiwiQ2FsY3VsYXRvclZpZXdzLkVDR19RVGNEZXNjcmlwdGlvbi5jb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxJQUFPLGVBQWUsQ0EwRXJCO0FBMUVELFdBQU8sZUFBZSxFQUFDLENBQUM7SUFDcEJBLFlBQVlBLENBQUNBO0lBRWJBO1FBQXNCQywyQkFBSUE7UUFBMUJBO1lBQXNCQyw4QkFBSUE7WUFDdEJBLGdCQUFXQSxHQUFHQSxJQUFJQSxrQkFBa0JBLEVBQUVBLENBQUNBO1lBRXZDQSxhQUFRQSxHQUFXQSxrQkFBa0JBLENBQUNBO1lBQ3RDQSxrQkFBYUEsR0FBR0E7Z0JBQ1pBLFNBQVNBLEVBQUVBLEVBQUVBO2dCQUNiQSxNQUFNQSxFQUFFQSxHQUFHQTthQUNkQSxDQUFDQTtZQUNGQSxXQUFNQSxHQUFhQTtnQkFDZkE7b0JBQ0lBLEVBQUVBLEVBQUVBLFFBQVFBO29CQUNaQSxJQUFJQSxFQUFFQSxtQkFBbUJBO29CQUN6QkEsVUFBVUEsRUFBRUEsUUFBUUE7b0JBQ3BCQSxLQUFLQSxFQUFFQTt3QkFDSEEsSUFBSUEsRUFBRUEsUUFBUUE7d0JBQ2RBLElBQUlBLEVBQUVBLEVBQUVBO3dCQUNSQSxHQUFHQSxFQUFFQSxHQUFHQTt3QkFDUkEsR0FBR0EsRUFBRUEsSUFBSUE7cUJBQ1pBO2lCQUNKQSxFQUFFQTtvQkFDQ0EsRUFBRUEsRUFBRUEsV0FBV0E7b0JBQ2ZBLElBQUlBLEVBQUVBLFNBQVNBO29CQUNm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