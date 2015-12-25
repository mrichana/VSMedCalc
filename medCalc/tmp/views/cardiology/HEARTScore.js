var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var CalculatorViews;
(function (CalculatorViews) {
    'use strict';
    var HEARTScore = (function (_super) {
        __extends(HEARTScore, _super);
        function HEARTScore() {
            _super.apply(this, arguments);
            this.description = new HEARTScoreDescription();
            this.template = 'calculator.basic';
            this.defaultValues = {
                'HEARTScore_History': 0,
                'HEARTScore_ECG': 0,
                'Age': 65,
                'HistoryOf_Diabetes': false,
                'Smoker': false,
                'HistoryOf_Hypertension': false,
                'HistoryOf_Hyperlipidemia': false,
                'FamilyHistoryOf_CAD': false,
                'Obesity': false,
                'HEARTScore_Troponine': 0
            };
            this.fields = [
                {
                    id: 'HEARTScore_History',
                    name: 'Ιστορικό',
                    input: {
                        type: 'select',
                        options: [
                            {
                                value: 0,
                                name: 'Μη ύποπτο'
                            },
                            {
                                value: 1,
                                name: 'Μέτρια ύποπτο'
                            },
                            {
                                value: 2,
                                name: 'Έντονα ύποπτο'
                            }
                        ]
                    }
                }, {
                    id: 'HEARTScore_ECG',
                    name: 'ΗΚΓ',
                    input: {
                        type: 'select',
                        options: [
                            {
                                value: 0,
                                name: 'Φυσιολογικό'
                            },
                            {
                                value: 1,
                                name: 'Μη ειδικές διαταραχές επαναπολώσης'
                            },
                            {
                                value: 2,
                                name: 'Σημαντική κατάσπαση ST'
                            }
                        ]
                    }
                },
                CalculatorViews.ageField,
                {
                    id: 'HistoryOf_Diabetes',
                    name: 'Σακχαρώδης Διαβήτης',
                    input: {
                        type: 'check'
                    }
                }, {
                    id: 'Smoker',
                    name: 'Καπνιστής',
                    input: {
                        type: 'check'
                    }
                }, {
                    id: 'HistoryOf_Hypertension',
                    name: 'Αρτηριακή Υπέρταση',
                    input: {
                        type: 'check'
                    }
                }, {
                    id: 'HistoryOf_Hyperlipidemia',
                    name: 'Υπερλιπιδαιμία',
                    input: {
                        type: 'check'
                    }
                }, {
                    id: 'FamilyHistoryOf_CAD',
                    name: 'Οικογενειακό ιστορικό (♂ < 55, ♀ < 65)',
                    input: {
                        type: 'check'
                    }
                }, {
                    id: 'Obesity',
                    name: 'Παχυσαρκία',
                    input: {
                        type: 'check'
                    }
                }, {
                    id: 'HEARTScore_Troponine',
                    name: 'Τροπονίνη κατά την είσοδο',
                    input: {
                        type: 'select',
                        options: [
                            {
                                value: 0,
                                name: '<= Φυσιολογικού Ορίου'
                            },
                            {
                                value: 1,
                                name: '1-3x Φυσιολογικού Ορίου'
                            },
                            {
                                value: 2,
                                name: '>3x Φυσιολογικού Ορίου'
                            }
                        ]
                    }
                },
                CalculatorViews.resultField
            ];
        }
        HEARTScore.prototype.calculator = function (values) {
            var ret = new CalculatorViews.Result();
            ret.result = 0;
            ret.result += values.HEARTScore_History;
            ret.result += values.HEARTScore_ECG;
            ret.result += (values.Age >= 45) ? 1 : 0;
            ret.result += (values.Age >= 65) ? 1 : 0;
            var partialresult = 0;
            partialresult += (values.HistoryOf_Diabetes) ? 1 : 0;
            partialresult += (values.Smoker) ? 1 : 0;
            partialresult += (values.HistoryOf_Hypertension) ? 1 : 0;
            partialresult += (values.HistoryOf_Hyperlipidemia) ? 1 : 0;
            partialresult += (values.FamilyHistoryOf_CAD) ? 1 : 0;
            partialresult += (values.Obesity) ? 1 : 0;
            ret.result += (partialresult >= 1) ? 1 : 0;
            ret.result += (partialresult >= 3) ? 1 : 0;
            ret.result += values.HEARTScore_Troponine;
            switch (ret.result) {
                case 0:
                case 1:
                case 2:
                case 3:
                    ret.explanation = '0.9-1.7%';
                    ret.resultlevel = CalculatorViews.IResult.resultLevel.normal;
                    break;
                case 4:
                case 5:
                case 6:
                case 7:
                    ret.explanation = '12-16.6%';
                    ret.resultlevel = CalculatorViews.IResult.resultLevel.normal;
                    break;
                case 8:
                case 9:
                case 10:
                    ret.explanation = '50-65%';
                    ret.resultlevel = CalculatorViews.IResult.resultLevel.intermediate;
                    break;
            }
            ;
            ret.explanation = 'Πιθανότητα καρδιαγγειακού συμβαμάτος σε 6 εβδομάδες: ' + ret.explanation;
            return ret;
        };
        ;
        return HEARTScore;
    })(CalculatorViews.View);
    var HEARTScoreDescription = (function (_super) {
        __extends(HEARTScoreDescription, _super);
        function HEARTScoreDescription() {
            _super.apply(this, arguments);
            this.type = HEARTScore;
            this.id = 'HEARTScore';
            this.name = 'HEART Score';
            this.category = 'Καρδιολογία';
            this.tags = 'nstemi';
        }
        return HEARTScoreDescription;
    })(CalculatorViews.ViewDescription);
    CalculatorViews.viewsCollection.add(new HEARTScoreDescription());
})(CalculatorViews || (CalculatorViews = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSEVBUlRTY29yZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NjcmlwdHMvdmlld3MvY2FyZGlvbG9neS9IRUFSVFNjb3JlLnRzIl0sIm5hbWVzIjpbIkNhbGN1bGF0b3JWaWV3cyIsIkNhbGN1bGF0b3JWaWV3cy5IRUFSVFNjb3JlIiwiQ2FsY3VsYXRvclZpZXdzLkhFQVJUU2NvcmUuY29uc3RydWN0b3IiLCJDYWxjdWxhdG9yVmlld3MuSEVBUlRTY29yZS5jYWxjdWxhdG9yIiwiQ2FsY3VsYXRvclZpZXdzLkhFQVJUU2NvcmVEZXNjcmlwdGlvbiIsIkNhbGN1bGF0b3JWaWV3cy5IRUFSVFNjb3JlRGVzY3JpcHRpb24uY29uc3RydWN0b3IiXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsSUFBTyxlQUFlLENBdUxyQjtBQXZMRCxXQUFPLGVBQWUsRUFBQyxDQUFDO0lBQ3BCQSxZQUFZQSxDQUFDQTtJQUViQTtRQUF5QkMsOEJBQUlBO1FBQTdCQTtZQUF5QkMsOEJBQUlBO1lBQ3pCQSxnQkFBV0EsR0FBR0EsSUFBSUEscUJBQXFCQSxFQUFFQSxDQUFDQTtZQUUxQ0EsYUFBUUEsR0FBV0Esa0JBQWtCQSxDQUFDQTtZQUN0Q0Esa0JBQWFBLEdBQUdBO2dCQUNaQSxvQkFBb0JBLEVBQUVBLENBQUNBO2dCQUN2QkEsZ0JBQWdCQSxFQUFFQSxDQUFDQTtnQkFDbkJBLEtBQUtBLEVBQUVBLEVBQUVBO2dCQUVUQSxvQkFBb0JBLEVBQUVBLEtBQUtBO2dCQUMzQkEsUUFBUUEsRUFBRUEsS0FBS0E7Z0JBQ2ZBLHdCQUF3QkEsRUFBRUEsS0FBS0E7Z0JBQy9CQSwwQkFBMEJBLEVBQUVBLEtBQUtBO2dCQUNqQ0EscUJBQXFCQSxFQUFFQSxLQUFLQTtnQkFDNUJBLFNBQVNBLEVBQUVBLEtBQUtBO2dCQUVoQkEsc0JBQXNCQSxFQUFFQSxDQUFDQTthQUM1QkEsQ0FBQ0E7WUFDRkEsV0FBTUEsR0FBYUE7Z0JBQ2ZBO29CQUNJQSxFQUFFQSxFQUFFQSxvQkFB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QUFHQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQTtZQUUxQ0EsR0FBR0EsQ0FBQ0EsTUFBTUEsSUFBSUEsQ0FBQ0EsYUFBYUEsSUFBSUEsQ0FBQ0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0E7WUFDM0NBLEdBQUdBLENBQUNBLE1BQU1BLElBQUlBLENBQUNBLGFBQWFBLElBQUlBLENBQUNBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBO1lBRTNDQSxHQUFHQSxDQUFDQSxNQUFNQSxJQUFJQSxNQUFNQSxDQUFDQSxvQkFBb0JBLENBQUNBO1lBRTFDQSxNQUFNQSxDQUFDQSxDQUFDQSxHQUFHQSxDQUFDQSxNQUFNQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDakJBLEtBQUtBLENBQUNBLENBQUNBO2dCQUNQQSxLQUFLQSxDQUFDQSxDQUFDQTtnQkFDUEEsS0FBS0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ1BBLEtBQUtBLENBQUNBO29CQUNGQSxHQUFHQSxDQUFDQSxXQUFXQSxHQUFHQSxVQUFVQSxDQUFDQTtvQkFDN0JBLEdBQUdBLENBQUNBLFdBQVdBLEdBQUdBLHVCQUFPQSxDQUFDQSxXQUFXQSxDQUFDQSxNQUFNQSxDQUFDQTtvQkFDN0NBLEtBQUtBLENBQUNBO2dCQUNWQSxLQUFLQSxDQUFDQSxDQUFDQTtnQkFDUEEsS0FBS0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ1BBLEtBQUtBLENBQUNBLENBQUNBO2dCQUNQQSxLQUFLQSxDQUFDQTtvQkFDRkEsR0FBR0EsQ0FBQ0EsV0FBV0EsR0FBR0EsVUFBVUEsQ0FBQ0E7b0JBQzdCQSxHQUFHQSxDQUFDQSxXQUFXQSxHQUFHQSx1QkFBT0EsQ0FBQ0EsV0FBV0EsQ0FBQ0EsTUFBTUEsQ0FBQ0E7b0JBQzdDQSxLQUFLQSxDQUFDQTtnQkFDVkEsS0FBS0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ1BBLEtBQUtBLENBQUNBLENBQUNBO2dCQUNQQSxLQUFLQSxFQUFFQTtvQkFDSEEsR0FBR0EsQ0FBQ0EsV0FBV0EsR0FBR0EsUUFBUUEsQ0FBQ0E7b0JBQzNCQSxHQUFHQSxDQUFDQSxXQUFXQSxHQUFHQSx1QkFBT0EsQ0FBQ0EsV0FBV0EsQ0FBQ0EsWUFBWUEsQ0FBQ0E7b0JBQ25EQSxLQUFLQSxDQUFDQTtZQUNkQSxDQUFDQTtZQUFBQSxDQUFDQTtZQUVGQSxHQUFHQSxDQUFDQSxXQUFXQSxHQUFHQSx1REFBdURBLEdBQUdBLEdBQUdBLENBQUNBLFdBQVdBLENBQUNBO1lBRTVGQSxNQUFNQSxDQUFDQSxHQUFHQSxDQUFDQTtRQUNmQSxDQUFDQTs7UUFDTEYsaUJBQUNBO0lBQURBLENBQUNBLEFBMUtERCxFQUF5QkEsb0JBQUlBLEVBMEs1QkE7SUFDREE7UUFBb0NJLHlDQUFlQTtRQUFuREE7WUFBb0NDLDhCQUFlQTtZQUMvQ0EsU0FBSUEsR0FBZ0JBLFVBQVVBLENBQUNBO1lBQy9CQSxPQUFFQSxHQUFXQSxZQUFZQSxDQUFDQTtZQUMxQkEsU0FBSUEsR0FBV0EsYUFBYUEsQ0FBQ0E7WUFDN0JBLGFBQVFBLEdBQVdBLGFBQWFBLENBQUNBO1lBQ2pDQSxTQUFJQSxHQUFXQSxRQUFRQSxDQUFDQTtRQUM1QkEsQ0FBQ0E7UUFBREQsNEJBQUNBO0lBQURBLENBQUNBLEFBTkRKLEVBQW9DQSwrQkFBZUEsRUFNbERBO0lBRURBLCtCQUFlQSxDQUFDQSxHQUFHQSxDQUFDQSxJQUFJQSxxQkFBcUJBLEVBQUVBLENBQUNBLENBQUNBO0FBQ3JEQSxDQUFDQSxFQXZMTSxlQUFlLEtBQWYsZUFBZSxRQXVMckIifQ==