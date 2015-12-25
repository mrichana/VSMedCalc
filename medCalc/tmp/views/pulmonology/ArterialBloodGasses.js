var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var CalculatorViews;
(function (CalculatorViews) {
    'use strict';
    var ArterialBloodGasses = (function (_super) {
        __extends(ArterialBloodGasses, _super);
        function ArterialBloodGasses() {
            _super.apply(this, arguments);
            this.description = new ArterialBloodGassesDescription();
            this.template = 'calculator.basic';
            this.defaultValues = {
                'ArterialBlood_pH': 7.40,
                'ArterialBlood_pO2': 100,
                'ArterialBlood_pCO2': 40,
                'ArterialBlood_H2CO3': 24,
                'ArterialBlood_FiO2': 0.21
            };
            this.fields = [
                {
                    id: 'ArterialBlood_pH',
                    name: 'pH',
                    input: {
                        type: 'number',
                        step: 0.01,
                        min: 6,
                        max: 8
                    }
                }, {
                    id: 'ArterialBlood_pO2',
                    name: 'pO<sub>2</sub>(mmHg)',
                    input: {
                        type: 'number',
                        step: 1,
                        min: 1,
                        max: 200
                    }
                }, {
                    id: 'ArterialBlood_pCO2',
                    name: 'pCO<sub>2</sub>(mmHg)',
                    input: {
                        type: 'number',
                        step: 1,
                        min: 1,
                        max: 100
                    }
                }, {
                    id: 'ArterialBlood_H2CO3',
                    name: 'H<sub>2</sub>CO<sub>3</sub>(mEq/L)',
                    input: {
                        type: 'number',
                        step: 1,
                        min: 1,
                        max: 100
                    }
                }, {
                    id: 'ArterialBlood_FiO2',
                    name: 'FiO2(%)',
                    input: {
                        type: 'select',
                        options: [{
                                value: 0.21,
                                name: '21% (Ατμοσφαιρικός Αέρας)'
                            }, {
                                value: 0.24,
                                name: '24% (Ρινικό 1lt ή Ventouri 24%)'
                            }, {
                                value: 0.28,
                                name: '28% (Ρινικό 2lt ή Ventouri 28%)'
                            }, {
                                value: 0.31,
                                name: '31% (Ventouri 31%)'
                            }, {
                                value: 0.35,
                                name: '35% (Ventouri 35%)'
                            }, {
                                value: 0.40,
                                name: '40% (Ventouri 40%)'
                            }, {
                                value: 0.50,
                                name: '50% (Ventouri 50%)'
                            }, {
                                value: 0.60,
                                name: '60% (Ventouri 60%)'
                            }]
                    }
                },
                CalculatorViews.resultField
            ];
        }
        ArterialBloodGasses.prototype.calculator = function (values) {
            var ret = new CalculatorViews.Result();
            var expectedPco2, phHigh, phLow, hco3High, hco3Low;
            if ((values['ArterialBlood_pH'] < 7.36) && (values['ArterialBlood_pCO2'] <= 40)) {
                ret.result = 'Πρωτοπαθής μεταβολική οξέωση';
                expectedPco2 = 1.5 * values['ArterialBlood_H2CO3'] + 8;
            }
            if ((values['ArterialBlood_pH'] > 7.44) && (values['ArterialBlood_pCO2'] >= 40)) {
                ret.result = 'Πρωτοπαθής μεταβολική αλκάλωση';
                expectedPco2 = 0.7 * values['ArterialBlood_H2CO3'] + 21;
            }
            expectedPco2 = CalculatorViews.View.roundNum(expectedPco2, 0);
            if (values['ArterialBlood_pCO2'] > (expectedPco2 + 2)) {
                ret.result += ',\nμε αναπνευστική οξέωση';
                ret.resultlevel = CalculatorViews.IResult.resultLevel.intermediate;
            }
            if (values['ArterialBlood_pCO2'] < (expectedPco2 - 2)) {
                ret.result += ',\nμε αναπνευστική αλκάλωση';
                ret.resultlevel = CalculatorViews.IResult.resultLevel.intermediate;
            }
            if ((values['ArterialBlood_pCO2'] <= (expectedPco2 + 2)) && (values['ArterialBlood_pCO2'] >= (expectedPco2 - 2))) {
                ret.result += ',\nμε πλήρη αναπνευστική αντιρρόπηση';
                ret.resultlevel = CalculatorViews.IResult.resultLevel.normal;
            }
            if ((values['ArterialBlood_pH'] < 7.4) && (values['ArterialBlood_pCO2'] > 44)) {
                ret.result = 'Πρωτοπαθής αναπνευστική οξέωση';
                phHigh = 7.4 - (0.003 * (values['ArterialBlood_pCO2'] - 40));
                phLow = 7.4 - (0.008 * (values['ArterialBlood_pCO2'] - 40));
                hco3High = 24 + (0.35 * (values['ArterialBlood_pCO2'] - 40));
                hco3Low = 24 + (0.1 * (values['ArterialBlood_pCO2'] - 40));
                phLow = CalculatorViews.View.roundNum(phLow, 2);
                phHigh = CalculatorViews.View.roundNum(phHigh, 2);
                hco3Low = CalculatorViews.View.roundNum(hco3Low, 0);
                hco3High = CalculatorViews.View.roundNum(hco3High, 0);
                if (values['ArterialBlood_pH'] <= (phLow + 0.02)) {
                    ret.result = 'Οξεία (μη αντιρροπούμενη) ' + ret.result;
                    if (values['ArterialBlood_H2CO3'] < (hco3Low - 2)) {
                        ret.result += ',\nμε μεταβολική οξέωση';
                        ret.resultlevel = CalculatorViews.IResult.resultLevel.abnormal;
                    }
                }
                if (values['ArterialBlood_pH'] >= (phHigh - 0.02001)) {
                    ret.result = 'Χρόνια (αντιρροπούμενη) ' + ret.result;
                    if (values['ArterialBlood_H2CO3'] > (hco3High + 2)) {
                        ret.result += ',\nμε μεταβολική αλκάλωση';
                        ret.resultlevel = CalculatorViews.IResult.resultLevel.normal;
                    }
                }
                if ((values['ArterialBlood_pH'] > (phLow + 0.02)) && (values['ArterialBlood_pH'] < (phHigh - 0.02001))) {
                    ret.result = '(1) μερικώς αντιρροπούμενη πρωτοπαθής αναπνευστική οξέωση, ή\n(2) οξεία επί χρόνιας ' + ret.result + ', ή\n(3) μικτή οξεία αναπνευστική οξέωση με μικρή μεταβολική αλκάλωση';
                    ret.resultlevel = CalculatorViews.IResult.resultLevel.intermediate;
                }
            }
            if ((values['ArterialBlood_pH'] > 7.4) && (values['ArterialBlood_pCO2'] < 36)) {
                ret.result = 'Πρωτοπαθής αναπνευστική αλκάλωση';
                phLow = 7.4 + (0.0017 * (40 - values.ArterialBlood_pCO2));
                phHigh = 7.4 + (0.008 * (40 - values.ArterialBlood_pCO2));
                hco3Low = 24 - (0.5 * (40 - values.ArterialBlood_pCO2));
                hco3High = 24 - (0.25 * (40 - values.ArterialBlood_pCO2));
                phLow = CalculatorViews.View.roundNum(phLow, 2);
                phHigh = CalculatorViews.View.roundNum(phHigh, 2);
                hco3Low = CalculatorViews.View.roundNum(hco3Low, 0);
                hco3High = CalculatorViews.View.roundNum(hco3High, 0);
                if (values['ArterialBlood_pH'] <= (phLow + 0.02)) {
                    ret.result = 'Χρόνια (αντιρροπούμενη) ' + ret.result;
                    if (values['ArterialBlood_H2CO3'] < (hco3Low - 2)) {
                        ret.result += ',\nμε μεταβολική οξέωση';
                    }
                    ret.resultlevel = CalculatorViews.IResult.resultLevel.normal;
                }
                if (values['ArterialBlood_pH'] >= (phHigh - 0.02)) {
                    ret.result = 'Οξεία (μη αντιρροπούμενη) ' + ret.result;
                    if (values['ArterialBlood_H2CO3'] > (hco3High + 2)) {
                        ret.result += ',\nμε μεταβολική αλκάλωση';
                    }
                    ret.resultlevel = CalculatorViews.IResult.resultLevel.abnormal;
                }
                if ((values['ArterialBlood_pH'] > (phLow + 0.02)) && (values['ArterialBlood_pH'] < (phHigh - 0.02))) {
                    ret.result = '(1) μερικώς αντιρροπούμενη πρωτοπαθής αναπνευστική αλκάλωση, ή\n' +
                        '(2) οξεία επί χρόνιας ' + ret.result + ', ή\n' +
                        '(3) μικτή οξεία αναπνευστική αλκάλωση με μικρή μεταβολική οξέωση';
                    ret.resultlevel = CalculatorViews.IResult.resultLevel.intermediate;
                }
            }
            if (!ret.result) {
                if ((values['ArterialBlood_pH'] >= 7.36) && (values['ArterialBlood_pH'] <= 7.44)) {
                    if ((values['ArterialBlood_pCO2'] > 40) && (values['ArterialBlood_H2CO3'] > 26)) {
                        ret.result = 'Μικτή αναπνευστική οξέωση - μεταβολική αλκάλωση';
                        ret.resultlevel = CalculatorViews.IResult.resultLevel.abnormal;
                    }
                    else if ((values['ArterialBlood_pCO2'] < 40) && (values['ArterialBlood_H2CO3'] < 22)) {
                        ret.result = 'Μικτή αναπνευστική αλκάλωση - μεταβολική οξέωση';
                        ret.resultlevel = CalculatorViews.IResult.resultLevel.abnormal;
                    }
                    else {
                        ret.result = 'Φυσιολογικά αέρια αίματος';
                        ret.resultlevel = CalculatorViews.IResult.resultLevel.normal;
                    }
                }
            }
            var Aa = CalculatorViews.View.roundNum(((values['ArterialBlood_FiO2'] * 713) - (values['ArterialBlood_pCO2'] / 0.8)) - values['ArterialBlood_pO2'], 0);
            if (Aa >= 10) {
                ret.explanation = 'Αυξημένο shunt<br />Εκτεταμένες Διαταραχές του V/Q<br />Διαταραχή στην Ανταλλαγή των Αερίων';
            }
            else if (Aa > 0) {
                ret.explanation = 'Υποαερισμός (Κεντρικής Αιτιολογίας, Νευρομυικός κτλ.)<br />Χαμηλή Συγκέντρωση Οξυγόνου (Υψόμετρο κτλ.)';
            }
            return ret;
        };
        ;
        return ArterialBloodGasses;
    })(CalculatorViews.View);
    var ArterialBloodGassesDescription = (function (_super) {
        __extends(ArterialBloodGassesDescription, _super);
        function ArterialBloodGassesDescription() {
            _super.apply(this, arguments);
            this.type = ArterialBloodGasses;
            this.id = 'ArterialBloodGasses';
            this.name = 'Αέρια Αίματος';
            this.category = 'Πνευμονολογία';
            this.tags = 'pe';
        }
        return ArterialBloodGassesDescription;
    })(CalculatorViews.ViewDescription);
    CalculatorViews.viewsCollection.add(new ArterialBloodGassesDescription());
})(CalculatorViews || (CalculatorViews = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXJ0ZXJpYWxCbG9vZEdhc3Nlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NjcmlwdHMvdmlld3MvcHVsbW9ub2xvZ3kvQXJ0ZXJpYWxCbG9vZEdhc3Nlcy50cyJdLCJuYW1lcyI6WyJDYWxjdWxhdG9yVmlld3MiLCJDYWxjdWxhdG9yVmlld3MuQXJ0ZXJpYWxCbG9vZEdhc3NlcyIsIkNhbGN1bGF0b3JWaWV3cy5BcnRlcmlhbEJsb29kR2Fzc2VzLmNvbnN0cnVjdG9yIiwiQ2FsY3VsYXRvclZpZXdzLkFydGVyaWFsQmxvb2RHYXNzZXMuY2FsY3VsYXRvciIsIkNhbGN1bGF0b3JWaWV3cy5BcnRlcmlhbEJsb29kR2Fzc2VzRGVzY3JpcHRpb24iLCJDYWxjdWxhdG9yVmlld3MuQXJ0ZXJpYWxCbG9vZEdhc3Nlc0Rlc2NyaXB0aW9uLmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7OztBQUVBLElBQU8sZUFBZSxDQWtPckI7QUFsT0QsV0FBTyxlQUFlLEVBQUMsQ0FBQztJQUNwQkEsWUFBWUEsQ0FBQ0E7SUFFYkE7UUFBa0NDLHVDQUFJQTtRQUF0Q0E7WUFBa0NDLDhCQUFJQTtZQUNsQ0EsZ0JBQVdBLEdBQUdBLElBQUlBLDhCQUE4QkEsRUFBRUEsQ0FBQ0E7WUFFbkRBLGFBQVFBLEdBQVdBLGtCQUFrQkEsQ0FBQ0E7WUFDdENBLGtCQUFhQSxHQUFHQTtnQkFDWkEsa0JBQWtCQSxFQUFFQSxJQUFJQTtnQkFDeEJBLG1CQUFtQkEsRUFBRUEsR0FBR0E7Z0JBQ3hCQSxvQkFBb0JBLEVBQUVBLEVBQUVBO2dCQUN4QkEscUJBQXFCQSxFQUFFQSxFQUFFQTtnQkFDekJBLG9CQUFvQkEsRUFBRUEsSUFBSUE7YUFDN0JBLENBQUNBO1lBQ0ZBLFdBQU1BLEdBQWFBO2dCQUNmQTtvQkFDSUEsRUFBRUEsRUFBRUEsa0JBQWtCQTtvQkFDdEJBLElBQUlBLEVBQUVBLElBQUlBO29CQUNWQSxLQUFLQSxFQUFFQTt3QkFDSEEsSUFBSUEsRUFBRUEs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