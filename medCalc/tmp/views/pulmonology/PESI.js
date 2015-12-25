var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var CalculatorViews;
(function (CalculatorViews) {
    'use strict';
    var PESI = (function (_super) {
        __extends(PESI, _super);
        function PESI() {
            _super.apply(this, arguments);
            this.description = new PESIDescription();
            this.template = 'calculator.basic';
            this.defaultValues = {
                'Age': 65,
                'Sex': 'm',
                'Cancer': false,
                'HistoryOf_CHF': false,
                'HistoryOf_PulmonaryDisease': false,
                'HeartRate': 70,
                'BloodPressure_Systolic': 120,
                'BreathRate': 16,
                'BodyTemperature': 36.6,
                'AltMentalStatus': false,
                'ArterialBlood_pO2': 100
            };
            this.fields = [
                CalculatorViews.ageField, CalculatorViews.sexField,
                {
                    id: 'Cancer',
                    name: 'Ενεργός καρκίνος',
                    input: {
                        type: 'check'
                    }
                },
                {
                    id: 'HistoryOf_CHF',
                    name: 'Συμφορητική Καρδιακή Ανεπάρκεια',
                    input: {
                        type: 'check'
                    }
                },
                {
                    id: 'HistoryOf_PulmonaryDisease',
                    name: 'Χ.Α.Π.',
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
                }, CalculatorViews.bloodPressure_SystolicField,
                {
                    id: 'BreathRate',
                    name: 'Ρυθμός αναπνοής (bpm)',
                    input: {
                        type: 'number',
                        step: 1,
                        min: 1,
                        max: 60
                    }
                }, {
                    id: 'BodyTemperature',
                    name: 'Θερμοκρασία σώματος',
                    input: {
                        type: 'number',
                        step: 0.1,
                        min: 35,
                        max: 43
                    }
                }, {
                    id: 'AltMentalStatus',
                    name: 'Επηρεασμένη πνευματική κατάσταση',
                    input: {
                        type: 'check'
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
                },
                CalculatorViews.resultField
            ];
        }
        PESI.prototype.calculator = function (values) {
            var ret = new CalculatorViews.Result();
            ret.result = 0;
            ret.result += values.Age;
            ret.result += (values.Sex == 'f') ? 0 : 10;
            ret.result += values.Cancer * 30;
            ret.result += values.HistoryOf_CHF * 10;
            ret.result += values.HistoryOf_PulmonaryDisease * 10;
            ret.result += (values.HeartRate >= 110) ? 20 : 0;
            ret.result += (values.BloodPressure_Systolic < 100) ? 30 : 0;
            ret.result += (values.BreathRate > 30) ? 20 : 0;
            ret.result += (values.BodyTemperature < 36) ? 20 : 0;
            ret.result += values.AltMentalStatus * 60;
            ret.result += (values.ArterialBlood_pO2 < 90) ? 20 : 0;
            if (ret.result > 125) {
                ret.explanation = "Class V Πολύ υψηλή θνησιμότητα (10-24.5%)";
                ret.resultlevel = CalculatorViews.IResult.resultLevel.abnormal;
            }
            else if (ret.result > 105) {
                ret.explanation = "Class IV Υψηλή θνησιμότητα (4-11.4%)";
                ret.resultlevel = CalculatorViews.IResult.resultLevel.abnormal;
            }
            else if (ret.result > 85) {
                ret.explanation = "Class III Μέτρια θνησιμότητα (3.2-7.1%)";
                ret.resultlevel = CalculatorViews.IResult.resultLevel.intermediate;
            }
            else if (ret.result > 65) {
                ret.explanation = "Class II Χαμηλή θνησιμότητα (1.7-3.5%)";
                ret.resultlevel = CalculatorViews.IResult.resultLevel.normal;
            }
            else {
                ret.explanation = "Class I Πολύ χαμηλή κλινική θνησιμότητα (0-1.6%)";
                ret.resultlevel = CalculatorViews.IResult.resultLevel.normal;
            }
            ;
            return ret;
        };
        ;
        return PESI;
    })(CalculatorViews.View);
    var PESIDescription = (function (_super) {
        __extends(PESIDescription, _super);
        function PESIDescription() {
            _super.apply(this, arguments);
            this.type = PESI;
            this.id = 'PESI';
            this.name = 'Δείκτης σοβαρότητας Πνευμονικής Εμβολής (PESI)';
            this.category = 'Πνευμονολογία';
            this.tags = 'pe';
        }
        return PESIDescription;
    })(CalculatorViews.ViewDescription);
    CalculatorViews.viewsCollection.add(new PESIDescription());
})(CalculatorViews || (CalculatorViews = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUEVTSS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NjcmlwdHMvdmlld3MvcHVsbW9ub2xvZ3kvUEVTSS50cyJdLCJuYW1lcyI6WyJDYWxjdWxhdG9yVmlld3MiLCJDYWxjdWxhdG9yVmlld3MuUEVTSSIsIkNhbGN1bGF0b3JWaWV3cy5QRVNJLmNvbnN0cnVjdG9yIiwiQ2FsY3VsYXRvclZpZXdzLlBFU0kuY2FsY3VsYXRvciIsIkNhbGN1bGF0b3JWaWV3cy5QRVNJRGVzY3JpcHRpb24iLCJDYWxjdWxhdG9yVmlld3MuUEVTSURlc2NyaXB0aW9uLmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7OztBQUVBLElBQU8sZUFBZSxDQXVJckI7QUF2SUQsV0FBTyxlQUFlLEVBQUMsQ0FBQztJQUNwQkEsWUFBWUEsQ0FBQ0E7SUFFYkE7UUFBbUJDLHdCQUFJQTtRQUF2QkE7WUFBbUJDLDhCQUFJQTtZQUNuQkEsZ0JBQVdBLEdBQUdBLElBQUlBLGVBQWVBLEVBQUVBLENBQUNBO1lBRXBDQSxhQUFRQSxHQUFXQSxrQkFBa0JBLENBQUNBO1lBQ3RDQSxrQkFBYUEsR0FBR0E7Z0JBQ1pBLEtBQUtBLEVBQUVBLEVBQUVBO2dCQUNUQSxLQUFLQSxFQUFFQSxHQUFHQTtnQkFDVkEsUUFBUUEsRUFBRUEsS0FBS0E7Z0JBQ2ZBLGVBQWVBLEVBQUVBLEtBQUtBO2dCQUN0QkEsNEJBQTRCQSxFQUFFQSxLQUFLQTtnQkFDbkNBLFdBQVdBLEVBQUVBLEVBQUVBO2dCQUNmQSx3QkFBd0JBLEVBQUVBLEdBQUdBO2dCQUM3QkEsWUFBWUEsRUFBRUEsRUFBRUE7Z0JBQ2hCQSxpQkFBaUJBLEVBQUVBLElBQUlBO2dCQUN2QkEsaUJBQWlCQSxFQUFFQSxLQUFLQTtnQkFDeEJBLG1CQUFtQkEsRUFBRUEsR0FBR0E7YUFDM0JBLENBQUNBO1lBQ0ZBLFdBQU1BLEdBQWFBO2dCQUNmQSx3QkFBUUEsRUFBRUEsd0JBQVFBO2dCQUNsQkE7b0JBQ0lBLEVBQUVBLEVBQUVB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