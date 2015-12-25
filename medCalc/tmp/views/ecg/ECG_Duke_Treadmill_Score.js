var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var CalculatorViews;
(function (CalculatorViews) {
    'use strict';
    var ECG_Duke_Treadmill_Score = (function (_super) {
        __extends(ECG_Duke_Treadmill_Score, _super);
        function ECG_Duke_Treadmill_Score() {
            _super.apply(this, arguments);
            this.description = new ECG_Duke_Treadmill_ScoreDescription();
            this.template = 'calculator.basic';
            this.defaultValues = {
                ECG_Bruce_ExerciseTime: 21,
                ECG_Bruce_STDeviation: 0,
                ECG_Bruce_AnginaIndex: 0
            };
            this.fields = [
                {
                    id: 'ECG_Bruce_ExerciseTime',
                    name: 'Διάρκεια κόπωσης κατά Bruce (min)',
                    input: {
                        type: 'number',
                        step: 1,
                        min: 1,
                        max: 21
                    }
                }, {
                    id: 'ECG_Bruce_STDeviation',
                    name: 'Μεταβολή ST (mm)',
                    input: {
                        type: 'number',
                        step: 1,
                        min: 0,
                        max: 10
                    }
                }, {
                    id: 'ECG_Bruce_AnginaIndex',
                    name: 'Τύπος προκάρδιου άλγους',
                    input: {
                        type: 'select',
                        options: [{
                                value: 0,
                                name: 'Απών'
                            }, {
                                value: 1,
                                name: 'Χωρίς περιορισμό στην κόπωση'
                            }, {
                                value: 2,
                                name: 'Με περιορισμό στην κόπωση'
                            }]
                    }
                },
                CalculatorViews.resultField
            ];
        }
        ECG_Duke_Treadmill_Score.prototype.calculator = function (values) {
            var ret = new CalculatorViews.Result();
            var formula = 'ECG_Bruce_ExerciseTime - 5*ECG_Bruce_STDeviation - 4*ECG_Bruce_AnginaIndex';
            ret.formula = CalculatorViews.View.formulaEvaluator(values, formula);
            ret.result = CalculatorViews.View.roundNum(CalculatorViews.View.evaluator(values, formula));
            if (ret.result >= 5) {
                ret.explanation = 'Χαμηλός κίνδυνος (Θνησιμότητα στο έτος: 0.25%)';
                ret.resultlevel = CalculatorViews.IResult.resultLevel.normal;
            }
            else if (ret.result >= -11) {
                ret.explanation = 'Ενδιάμεσος κίνδυνος (Θνησιμότητα στο έτος: 1.25%)';
                ret.resultlevel = CalculatorViews.IResult.resultLevel.intermediate;
            }
            else {
                ret.explanation = 'Υψηλός κίνδυνος (Θνησιμότητα στο έτος: 5.25%)';
                ret.resultlevel = CalculatorViews.IResult.resultLevel.abnormal;
            }
            return ret;
        };
        ;
        return ECG_Duke_Treadmill_Score;
    })(CalculatorViews.View);
    var ECG_Duke_Treadmill_ScoreDescription = (function (_super) {
        __extends(ECG_Duke_Treadmill_ScoreDescription, _super);
        function ECG_Duke_Treadmill_ScoreDescription() {
            _super.apply(this, arguments);
            this.type = ECG_Duke_Treadmill_Score;
            this.id = 'ECG_Duke_Treadmill_Score';
            this.name = 'Duke Treadmill Score (DTS)';
            this.category = 'ΗΚΓ';
            this.tags = 'nstemi';
        }
        return ECG_Duke_Treadmill_ScoreDescription;
    })(CalculatorViews.ViewDescription);
    CalculatorViews.viewsCollection.add(new ECG_Duke_Treadmill_ScoreDescription());
})(CalculatorViews || (CalculatorViews = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRUNHX0R1a2VfVHJlYWRtaWxsX1Njb3JlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc2NyaXB0cy92aWV3cy9lY2cvRUNHX0R1a2VfVHJlYWRtaWxsX1Njb3JlLnRzIl0sIm5hbWVzIjpbIkNhbGN1bGF0b3JWaWV3cyIsIkNhbGN1bGF0b3JWaWV3cy5FQ0dfRHVrZV9UcmVhZG1pbGxfU2NvcmUiLCJDYWxjdWxhdG9yVmlld3MuRUNHX0R1a2VfVHJlYWRtaWxsX1Njb3JlLmNvbnN0cnVjdG9yIiwiQ2FsY3VsYXRvclZpZXdzLkVDR19EdWtlX1RyZWFkbWlsbF9TY29yZS5jYWxjdWxhdG9yIiwiQ2FsY3VsYXRvclZpZXdzLkVDR19EdWtlX1RyZWFkbWlsbF9TY29yZURlc2NyaXB0aW9uIiwiQ2FsY3VsYXRvclZpZXdzLkVDR19EdWtlX1RyZWFkbWlsbF9TY29yZURlc2NyaXB0aW9uLmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7OztBQUVBLElBQU8sZUFBZSxDQStFckI7QUEvRUQsV0FBTyxlQUFlLEVBQUMsQ0FBQztJQUNwQkEsWUFBWUEsQ0FBQ0E7SUFFYkE7UUFBdUNDLDRDQUFJQTtRQUEzQ0E7WUFBdUNDLDhCQUFJQTtZQUN2Q0EsZ0JBQVdBLEdBQUdBLElBQUlBLG1DQUFtQ0EsRUFBRUEsQ0FBQ0E7WUFFeERBLGFBQVFBLEdBQVdBLGtCQUFrQkEsQ0FBQ0E7WUFDdENBLGtCQUFhQSxHQUFHQTtnQkFDWkEsc0JBQXNCQSxFQUFFQSxFQUFFQTtnQkFDMUJBLHFCQUFxQkEsRUFBRUEsQ0FBQ0E7Z0JBQ3hCQSxxQkFBcUJBLEVBQUVBLENBQUNBO2FBQzNCQSxDQUFDQTtZQUNGQSxXQUFNQSxHQUFhQTtnQkFDZkE7b0JBQ0lBLEVBQUVBLEVBQUVBLHdCQUF3QkE7b0JBQzVCQSxJQUFJQSxFQUFFQSxtQ0FBbUNBO29CQUN6Q0EsS0FBS0EsRUFBRUE7d0JBQ0hBLElBQUlBLEVBQUVBLFFBQVFBO3dCQUNkQSxJQUFJQSxFQUFFQSxD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