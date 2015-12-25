var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var CalculatorViews;
(function (CalculatorViews) {
    'use strict';
    var GenevaScore = (function (_super) {
        __extends(GenevaScore, _super);
        function GenevaScore() {
            _super.apply(this, arguments);
            this.description = new GenevaScoreDescription();
            this.template = 'calculator.basic';
            this.defaultValues = {
                'HistoryOf_DVT': false,
                'HeartRate': 70,
                'HistoryOf_Immobilization': false,
                'Haemoptysis': false,
                'Cancer': false,
                'UnilateralLLimbPain': false,
                'UnilateralLLimbOedema': false,
                'Age': 65
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
                    name: 'Πρόσφατο χειρουργείο ή κάταγμα',
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
                    id: 'UnilateralLLimbPain',
                    name: 'Μονόπλευρο άλγος κάτω άκρου',
                    input: {
                        type: 'check'
                    }
                }, {
                    id: 'UnilateralLLimbOedema',
                    name: 'Άλγος στη ψηλάφηση και οίδημα κάτω άκρου ',
                    input: {
                        type: 'check'
                    }
                },
                CalculatorViews.ageField,
                CalculatorViews.resultField
            ];
        }
        GenevaScore.prototype.calculator = function (values) {
            var ret = new CalculatorViews.Result();
            ret.result = 0;
            ret.result += values.HistoryOf_DVT * 3;
            ret.result += (values.HeartRate >= 75) ? 3 : 0;
            ret.result += (values.HeartRate >= 95) ? 2 : 0;
            ret.result += values.HistoryOf_Immobilization * 2;
            ret.result += values.Haemoptysis * 2;
            ret.result += values.Cancer * 2;
            ret.result += values.UnilateralLLimbPain * 3;
            ret.result += values.UnilateralLLimbOedema * 4;
            ret.result += (values.Age > 65) ? 1 : 0;
            if (ret.result >= 11) {
                ret.explanation = "Υψηλή κλινική πιθανότητα";
                ret.resultlevel = CalculatorViews.IResult.resultLevel.abnormal;
            }
            else if (ret.result >= 4) {
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
        return GenevaScore;
    })(CalculatorViews.View);
    var GenevaScoreDescription = (function (_super) {
        __extends(GenevaScoreDescription, _super);
        function GenevaScoreDescription() {
            _super.apply(this, arguments);
            this.type = GenevaScore;
            this.id = 'GenevaScore';
            this.name = 'Score της Γενέβης';
            this.category = 'Πνευμονολογία';
            this.tags = 'pe';
        }
        return GenevaScoreDescription;
    })(CalculatorViews.ViewDescription);
    CalculatorViews.viewsCollection.add(new GenevaScoreDescription());
})(CalculatorViews || (CalculatorViews = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2VuZXZhU2NvcmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zY3JpcHRzL3ZpZXdzL3B1bG1vbm9sb2d5L0dlbmV2YVNjb3JlLnRzIl0sIm5hbWVzIjpbIkNhbGN1bGF0b3JWaWV3cyIsIkNhbGN1bGF0b3JWaWV3cy5HZW5ldmFTY29yZSIsIkNhbGN1bGF0b3JWaWV3cy5HZW5ldmFTY29yZS5jb25zdHJ1Y3RvciIsIkNhbGN1bGF0b3JWaWV3cy5HZW5ldmFTY29yZS5jYWxjdWxhdG9yIiwiQ2FsY3VsYXRvclZpZXdzLkdlbmV2YVNjb3JlRGVzY3JpcHRpb24iLCJDYWxjdWxhdG9yVmlld3MuR2VuZXZhU2NvcmVEZXNjcmlwdGlvbi5jb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxJQUFPLGVBQWUsQ0F5R3JCO0FBekdELFdBQU8sZUFBZSxFQUFDLENBQUM7SUFDcEJBLFlBQVlBLENBQUNBO0lBRWJBO1FBQTBCQywrQkFBSUE7UUFBOUJBO1lBQTBCQyw4QkFBSUE7WUFDMUJBLGdCQUFXQSxHQUFHQSxJQUFJQSxzQkFBc0JBLEVBQUVBLENBQUNBO1lBRTNDQSxhQUFRQSxHQUFXQSxrQkFBa0JBLENBQUNBO1lBQ3RDQSxrQkFBYUEsR0FBR0E7Z0JBQ1pBLGVBQWVBLEVBQUVBLEtBQUtBO2dCQUN0QkEsV0FBV0EsRUFBRUEsRUFBRUE7Z0JBQ2ZBLDBCQUEwQkEsRUFBRUEsS0FBS0E7Z0JBQ2pDQSxhQUFhQSxFQUFFQSxLQUFLQTtnQkFDcEJBLFFBQVFBLEVBQUVBLEtBQUtBO2dCQUNmQSxxQkFBcUJBLEVBQUVBLEtBQUtBO2dCQUM1QkEsdUJBQXVCQSxFQUFFQSxLQUFLQTtnQkFDOUJBLEtBQUtBLEVBQUVBLEVBQUVBO2FBQ1pBLENBQUNBO1lBQ0ZBLFdBQU1BLEdBQWFBO2dCQUNmQTtvQkFDSUEsRUFBRUEsRUFBRUEsZUFBZUE7b0JBQ25CQSxJQUFJQSxFQUFFQSxtQkFBbUJBO29CQUN6QkEsS0FBS0EsRUFBRUE7d0JB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