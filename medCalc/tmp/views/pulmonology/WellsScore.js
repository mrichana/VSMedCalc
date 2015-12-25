var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var CalculatorViews;
(function (CalculatorViews) {
    'use strict';
    var WellsScore = (function (_super) {
        __extends(WellsScore, _super);
        function WellsScore() {
            _super.apply(this, arguments);
            this.description = new WellsScoreDescription();
            this.template = 'calculator.basic';
            this.defaultValues = {
                'HistoryOf_DVT': false,
                'HeartRate': 70,
                'HistoryOf_Immobilization': false,
                'Haemoptysis': false,
                'Cancer': false,
                'DVT': false,
                'PEMostLikely': false
            };
            this.fields = [
                {
                    id: 'HistoryOf_DVT',
                    name: 'Ιστορικό PE ή DVT',
                    input: {
                        type: 'check'
                    }
                }, {
                    id: 'HeartRate',
                    name: 'Σφύξεις κατά την εισαγωγή',
                    input: {
                        type: 'number',
                        step: 1,
                        min: 20,
                        max: 280
                    }
                }, {
                    id: 'HistoryOf_Immobilization',
                    name: 'Ακινητοποίηση ή πρόσφατο χειρουργείο',
                    input: {
                        type: 'check'
                    }
                }, {
                    id: 'Haemoptysis',
                    name: 'Αιμόπτυση',
                    input: {
                        type: 'check'
                    }
                }, {
                    id: 'Cancer',
                    name: 'Ενεργός καρκίνος',
                    input: {
                        type: 'check'
                    }
                }, {
                    id: 'DVT',
                    name: 'Κλινικά σημεία DVT',
                    input: {
                        type: 'check'
                    }
                }, {
                    id: 'PEMostLikely',
                    name: 'Διάγνωση PE πιο πιθανή από εναλλακτικές',
                    input: {
                        type: 'check'
                    }
                },
                CalculatorViews.resultField
            ];
        }
        WellsScore.prototype.calculator = function (values) {
            var ret = new CalculatorViews.Result();
            ret.result = 0;
            ret.result += values.HistoryOf_DVT * 1.5;
            ret.result += (values.HeartRate > 100) ? 1.5 : 0;
            ret.result += values.HistoryOf_Immobilization * 1.5;
            ret.result += values.Haemoptysis * 1;
            ret.result += values.Cancer * 1;
            ret.result += values.DVT * 3;
            ret.result += values.PEMostLikely * 3;
            if (ret.result >= 7) {
                ret.explanation = "Υψηλή κλινική πιθανότητα";
                ret.resultlevel = CalculatorViews.IResult.resultLevel.abnormal;
            }
            else if (ret.result >= 2) {
                ret.explanation = "Ενδιάμεση κλινική πιθανότητα";
                ret.resultlevel = CalculatorViews.IResult.resultLevel.intermediate;
            }
            else {
                ret.explanation = "Χαμηλή κλινική πιθανότητα";
                ret.resultlevel = CalculatorViews.IResult.resultLevel.normal;
            }
            ;
            return ret;
        };
        ;
        return WellsScore;
    })(CalculatorViews.View);
    var WellsScoreDescription = (function (_super) {
        __extends(WellsScoreDescription, _super);
        function WellsScoreDescription() {
            _super.apply(this, arguments);
            this.type = WellsScore;
            this.id = 'WellsScore';
            this.name = 'Κριτήρια του Wells';
            this.category = 'Πνευμονολογία';
            this.tags = 'pe';
        }
        return WellsScoreDescription;
    })(CalculatorViews.ViewDescription);
    CalculatorViews.viewsCollection.add(new WellsScoreDescription());
})(CalculatorViews || (CalculatorViews = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV2VsbHNTY29yZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NjcmlwdHMvdmlld3MvcHVsbW9ub2xvZ3kvV2VsbHNTY29yZS50cyJdLCJuYW1lcyI6WyJDYWxjdWxhdG9yVmlld3MiLCJDYWxjdWxhdG9yVmlld3MuV2VsbHNTY29yZSIsIkNhbGN1bGF0b3JWaWV3cy5XZWxsc1Njb3JlLmNvbnN0cnVjdG9yIiwiQ2FsY3VsYXRvclZpZXdzLldlbGxzU2NvcmUuY2FsY3VsYXRvciIsIkNhbGN1bGF0b3JWaWV3cy5XZWxsc1Njb3JlRGVzY3JpcHRpb24iLCJDYWxjdWxhdG9yVmlld3MuV2VsbHNTY29yZURlc2NyaXB0aW9uLmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7OztBQUVBLElBQU8sZUFBZSxDQXFHckI7QUFyR0QsV0FBTyxlQUFlLEVBQUMsQ0FBQztJQUNwQkEsWUFBWUEsQ0FBQ0E7SUFFYkE7UUFBeUJDLDhCQUFJQTtRQUE3QkE7WUFBeUJDLDhCQUFJQTtZQUN6QkEsZ0JBQVdBLEdBQUdBLElBQUlBLHFCQUFxQkEsRUFBRUEsQ0FBQ0E7WUFFMUNBLGFBQVFBLEdBQVdBLGtCQUFrQkEsQ0FBQ0E7WUFDdENBLGtCQUFhQSxHQUFHQTtnQkFDWkEsZUFBZUEsRUFBRUEsS0FBS0E7Z0JBQ3RCQSxXQUFXQSxFQUFFQSxFQUFFQTtnQkFDZkEsMEJBQTBCQSxFQUFFQSxLQUFLQTtnQkFDakNBLGFBQWFBLEVBQUVBLEtBQUtBO2dCQUNwQkEsUUFBUUEsRUFBRUEsS0FBS0E7Z0JBQ2ZBLEtBQUtBLEVBQUVBLEtBQUtBO2dCQUNaQSxjQUFjQSxFQUFFQSxLQUFLQTthQUN4QkEsQ0FBQ0E7WUFDRkEsV0FBTUEsR0FBYUE7Z0JBQ2ZBO29CQUNJQSxFQUFFQSxFQUFFQSxlQUFlQTtvQkFDbkJBLElBQUlBLEVBQUVBLG1CQUFtQkE7b0JBQ3pCQSxLQUFLQSxFQUFFQTt3QkFDSEEsSUFBSUEsRUFBRUEsT0FBT0E7cUJBQ2hCQTtpQkFDSkEs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