var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var CalculatorViews;
(function (CalculatorViews) {
    'use strict';
    var CHADScore = (function (_super) {
        __extends(CHADScore, _super);
        function CHADScore() {
            _super.apply(this, arguments);
            this.description = new CHADScoreDescription();
            this.template = 'calculator.basic';
            this.defaultValues = {
                'HistoryOf_CHF': false,
                'HistoryOf_Hypertension': false,
                'Age': 65,
                'HistoryOf_Diabetes': false,
                'HistoryOf_Stroke': false,
                'HistoryOf_VascularDisease': false,
                'Sex': 0
            };
            this.fields = [
                {
                    id: 'HistoryOf_CHF',
                    name: 'Συμφορητική Καρδιακή Ανεπάρκεια',
                    input: {
                        type: 'check'
                    }
                }, {
                    id: 'HistoryOf_Hypertension',
                    name: 'Αρτηριακή Υπέρταση',
                    input: {
                        type: 'check'
                    }
                },
                {
                    id: 'HistoryOf_Diabetes',
                    name: 'Σακχαρώδης Διαβήτης',
                    input: {
                        type: 'check'
                    }
                }, {
                    id: 'HistoryOf_Stroke',
                    name: 'Ιστορικό TIA ή εγκεφαλικού',
                    input: {
                        type: 'check'
                    }
                }, {
                    id: 'HistoryOf_VascularDisease',
                    name: 'Περιφερική Αγγειοπάθεια',
                    input: {
                        type: 'check'
                    }
                },
                CalculatorViews.ageField,
                CalculatorViews.sexField,
                CalculatorViews.resultField
            ];
        }
        CHADScore.prototype.calculator = function (values) {
            var ret = new CalculatorViews.Result();
            ret.result = 0;
            ret.result += values.HistoryOf_CHF ? 1 : 0;
            ret.result += values.HistoryOf_Hypertension ? 1 : 0;
            ret.result += values.Age > 65 ? 1 : 0;
            ret.result += values.Age > 75 ? 1 : 0;
            ret.result += values.HistoryOf_Diabetes ? 1 : 0;
            ret.result += values.HistoryOf_Stroke ? 2 : 0;
            ret.result += values.HistoryOf_VascularDisease ? 1 : 0;
            ret.result += (values.Sex) ? 1 : 0;
            var explanations = [0, 1.3, 2.2, 3.2, 4.0, 6.7, 9.8, 9.6, 6.7, 15.2];
            ret.explanation = 'Πιθανότητα ισχαιμικού ΑΕΕ: ' + explanations[ret.result] + '% ανά έτος';
            switch (ret.result) {
                case 0:
                    ret.resultlevel = CalculatorViews.IResult.resultLevel.normal;
                    break;
                case 1:
                case 2:
                    ret.resultlevel = CalculatorViews.IResult.resultLevel.intermediate;
                    break;
                default:
                    ret.resultlevel = CalculatorViews.IResult.resultLevel.abnormal;
            }
            return ret;
        };
        ;
        return CHADScore;
    })(CalculatorViews.View);
    var CHADScoreDescription = (function (_super) {
        __extends(CHADScoreDescription, _super);
        function CHADScoreDescription() {
            _super.apply(this, arguments);
            this.id = 'CHADScore';
            this.name = 'CHA2DS2-VASc Score';
            this.category = 'Καρδιολογία';
            this.tags = 'Καρδιολογία\\af';
            this.type = CHADScore;
        }
        return CHADScoreDescription;
    })(CalculatorViews.ViewDescription);
    CalculatorViews.viewsCollection.add(new CHADScoreDescription());
})(CalculatorViews || (CalculatorViews = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ0hBRFNjb3JlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc2NyaXB0cy92aWV3cy9jYXJkaW9sb2d5L0NIQURTY29yZS50cyJdLCJuYW1lcyI6WyJDYWxjdWxhdG9yVmlld3MiLCJDYWxjdWxhdG9yVmlld3MuQ0hBRFNjb3JlIiwiQ2FsY3VsYXRvclZpZXdzLkNIQURTY29yZS5jb25zdHJ1Y3RvciIsIkNhbGN1bGF0b3JWaWV3cy5DSEFEU2NvcmUuY2FsY3VsYXRvciIsIkNhbGN1bGF0b3JWaWV3cy5DSEFEU2NvcmVEZXNjcmlwdGlvbiIsIkNhbGN1bGF0b3JWaWV3cy5DSEFEU2NvcmVEZXNjcmlwdGlvbi5jb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxJQUFPLGVBQWUsQ0E0RnJCO0FBNUZELFdBQU8sZUFBZSxFQUFDLENBQUM7SUFDdEJBLFlBQVlBLENBQUNBO0lBRWJBO1FBQXdCQyw2QkFBSUE7UUFBNUJBO1lBQXdCQyw4QkFBSUE7WUFDeEJBLGdCQUFXQSxHQUFHQSxJQUFJQSxvQkFBb0JBLEVBQUVBLENBQUNBO1lBQ3pDQSxhQUFRQSxHQUFXQSxrQkFBa0JBLENBQUNBO1lBQ3RDQSxrQkFBYUEsR0FBR0E7Z0JBQ1pBLGVBQWVBLEVBQUVBLEtBQUtBO2dCQUN0QkEsd0JBQXdCQSxFQUFFQSxLQUFLQTtnQkFDL0JBLEtBQUtBLEVBQUVBLEVBQUVBO2dCQUNUQSxvQkFBb0JBLEVBQUVBLEtBQUtBO2dCQUMzQkEsa0JBQWtCQSxFQUFFQSxLQUFLQTtnQkFDekJBLDJCQUEyQkEsRUFBRUEsS0FBS0E7Z0JBQ2xDQSxLQUFLQSxFQUFFQSxDQUFDQTthQUNYQSxDQUFDQTtZQUNGQSxXQUFNQSxHQUFhQTtnQkFDZkE7b0JBQ0lBLEVBQUVBLEVBQUVBLGVBQWVBO29CQUNuQkEsSUFBSUEsRUFBRUEsaUNBQWlDQTtvQkFDdkNBLEtBQUtBLEVBQUVBO3dCQUNIQSxJQUFJQSxFQUFFQSxPQUFPQTtxQkFDaEJBO2lCQUNKQSxF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