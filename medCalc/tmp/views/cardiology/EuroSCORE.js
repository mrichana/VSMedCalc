var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var CalculatorViews;
(function (CalculatorViews) {
    'use strict';
    var EuroSCORE = (function (_super) {
        __extends(EuroSCORE, _super);
        function EuroSCORE() {
            _super.apply(this, arguments);
            this.description = new EuroSCOREDescription();
            this.template = 'calculator.basic';
            this.defaultValues = {
                Age: 65,
                Sex: 0,
                HistoryOf_PulmonaryDisease: false,
                HistoryOf_VascularDisease: false,
                HistoryOf_NeurologicalDisease: false,
                HistoryOf_CardiacSurgery: false,
                Plasma_Creatinine: 1.0,
                EuroSCORE_ActiveEndocarditis: false,
                EuroSCORE_CriticalState: false,
                AnginaAtRest: false,
                LVEF: 60,
                EuroSCORE_MIinTheLast90Days: false,
                PASP: 40,
                EuroSCORE_Emergency: false,
                EuroSCORE_SimpleCABG: false,
                EuroSCORE_ThoracicAorta: false,
                EuroSCORE_SeptalRupture: false
            };
            this.fields = [
                CalculatorViews.ageField,
                CalculatorViews.sexField, {
                    id: 'HistoryOf_PulmonaryDisease',
                    name: 'Χ.Α.Π.',
                    input: {
                        type: 'check'
                    }
                }, {
                    id: 'HistoryOf_VascularDisease',
                    name: 'Εξωκαρδιακή Αρτηριοπάθεια',
                    input: {
                        type: 'check'
                    }
                }, {
                    id: 'HistoryOf_NeurologicalDisease',
                    name: 'Νευρολογική Δυσλειτουργία',
                    input: {
                        type: 'check'
                    }
                }, {
                    id: 'HistoryOf_CardiacSurgery',
                    name: 'Προηγηθήσα Καρδιοχειρουργική Επέμβαση',
                    input: {
                        type: 'check'
                    }
                }, {
                    id: 'Plasma_Creatinine',
                    name: 'Κρεατινίνη Πλάσματος',
                    input: {
                        type: 'number',
                        step: 0.1,
                        min: 0.1,
                        max: 8
                    }
                }, {
                    id: 'EuroSCORE_ActiveEndocarditis',
                    name: 'Ενεργή Ενδοκαρδίτιδα',
                    input: {
                        type: 'check'
                    }
                }, {
                    id: 'EuroSCORE_CriticalState',
                    name: 'Κρίσιμη Προεγχειρητική Κατάσταση',
                    input: {
                        type: 'check'
                    }
                }, {
                    id: 'AnginaAtRest',
                    name: 'Στηθάγχη Ηρεμίας',
                    input: {
                        type: 'check'
                    }
                }, {
                    id: 'LVEF',
                    name: 'Λειτουργικότητα Αρ. Κοιλίας',
                    input: {
                        type: 'number',
                        step: 5,
                        min: 10,
                        max: 70
                    }
                }, {
                    id: 'EuroSCORE_MIinTheLast90Days',
                    name: 'Πρόσφατο Έμφραγμα Μυοκαρδίου (90 ημερών)',
                    input: {
                        type: 'check'
                    }
                }, {
                    id: 'PASP',
                    name: 'Πίεση Πνευμονικής Αρτηρίας (mmHg)',
                    input: {
                        type: 'number',
                        step: 5,
                        min: 10,
                        max: 140
                    }
                }, {
                    id: 'EuroSCORE_Emergency',
                    name: 'Επείγουσα Επέμβαση',
                    input: {
                        type: 'check'
                    }
                }, {
                    id: 'EuroSCORE_SimpleCABG',
                    name: 'Απλή Αορτοστεφανιαία Παράκαμψη',
                    input: {
                        type: 'check'
                    }
                }, {
                    id: 'EuroSCORE_ThoracicAorta',
                    name: 'Επέμβαση Θωρακικής Αορτής',
                    input: {
                        type: 'check'
                    }
                }, {
                    id: 'EuroSCORE_SeptalRupture',
                    name: 'Μετεμφραγματική Ρήξη Μεσοκοιλιακού Διαφράγματος',
                    input: {
                        type: 'check'
                    }
                },
                CalculatorViews.resultField
            ];
        }
        EuroSCORE.prototype.validate = function (newValue, oldValue, scope, field) {
            if (field.id === 'EuroSCORE_ThoracicAorta' && this.values.EuroSCORE_ThoracicAorta === true) {
                this.values.EuroSCORE_SimpleCABG = false;
            }
            if (field.id === 'EuroSCORE_SeptalRupture' && this.values.EuroSCORE_SeptalRupture === true) {
                this.values.EuroSCORE_SimpleCABG = false;
            }
            if (field.id === 'EuroSCORE_SimpleCABG' && this.values.EuroSCORE_SimpleCABG === true) {
                this.values.EuroSCORE_ThoracicAorta = this.values.EuroSCORE_SeptalRupture = false;
            }
        };
        EuroSCORE.prototype.calculator = function (values) {
            var ret = new CalculatorViews.Result();
            var value = -4.789594;
            value += (0.0666354 * (values.Age < 60 ? 1 : values.Age - 58));
            value += ((!values.Sex) ? 0 : 0.3304052);
            value += (values.HistoryOf_PulmonaryDisease * 0.4931341);
            value += (values.HistoryOf_VascularDisease * 0.6558917);
            value += (values.HistoryOf_NeurologicalDisease * 0.841626);
            value += (values.HistoryOf_CardiacSurgery * 1.002625);
            value += ((values.Plasma_Creatinine > 2.25) ? 0.6521653 : 0);
            value += (values.EuroSCORE_ActiveEndocarditis * 1.101265);
            value += (values.EuroSCORE_CriticalState * 0.9058132);
            value += (values.AnginaAtRest * 0.5677075);
            value += (values.LVEF < 30 ? 1.094443 : (values.LVEF < 50 ? 0.4191643 : 0));
            value += (values.EuroSCORE_MIinTheLast90Days * 0.5460218);
            value += ((values.PASP > 60) ? 0.7676924 : 0);
            value += (values.EuroSCORE_Emergency * 0.7127953);
            value += (values.EuroSCORE_SimpleCABG ? 0 : 0.5420364);
            value += (values.EuroSCORE_ThoracicAorta * 1.159787);
            value += (values.EuroSCORE_SeptalRupture * 1.462009);
            var value = Math.exp(value);
            ret.result = 100 * value / (1 + value);
            ret.result = Math.round(ret.result * 100) / 100;
            if (ret.result > 8) {
                ret.explanation = 'Υψηλού Κινδύνου';
                ret.resultlevel = CalculatorViews.IResult.resultLevel.abnormal;
            }
            else if (ret.result > 4) {
                ret.explanation = 'Μετρίου Κινδύνου';
                ret.resultlevel = CalculatorViews.IResult.resultLevel.intermediate;
            }
            else {
                ret.explanation = 'Μικρού Κινδύνου';
                ret.resultlevel = CalculatorViews.IResult.resultLevel.normal;
            }
            ret.prefix = 'Υπολογιζόμενη Θνητότητα Χειρουργείου';
            ret.suffix = '%';
            return ret;
        };
        ;
        return EuroSCORE;
    })(CalculatorViews.View);
    var EuroSCOREDescription = (function (_super) {
        __extends(EuroSCOREDescription, _super);
        function EuroSCOREDescription() {
            _super.apply(this, arguments);
            this.type = EuroSCORE;
            this.id = 'EuroSCORE';
            this.name = 'EuroSCORE';
            this.category = 'Καρδιολογία';
            this.tags = '';
        }
        return EuroSCOREDescription;
    })(CalculatorViews.ViewDescription);
    CalculatorViews.viewsCollection.add(new EuroSCOREDescription());
})(CalculatorViews || (CalculatorViews = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXVyb1NDT1JFLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc2NyaXB0cy92aWV3cy9jYXJkaW9sb2d5L0V1cm9TQ09SRS50cyJdLCJuYW1lcyI6WyJDYWxjdWxhdG9yVmlld3MiLCJDYWxjdWxhdG9yVmlld3MuRXVyb1NDT1JFIiwiQ2FsY3VsYXRvclZpZXdzLkV1cm9TQ09SRS5jb25zdHJ1Y3RvciIsIkNhbGN1bGF0b3JWaWV3cy5FdXJvU0NPUkUudmFsaWRhdGUiLCJDYWxjdWxhdG9yVmlld3MuRXVyb1NDT1JFLmNhbGN1bGF0b3IiLCJDYWxjdWxhdG9yVmlld3MuRXVyb1NDT1JFRGVzY3JpcHRpb24iLCJDYWxjdWxhdG9yVmlld3MuRXVyb1NDT1JFRGVzY3JpcHRpb24uY29uc3RydWN0b3IiXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsSUFBTyxlQUFlLENBcU1yQjtBQXJNRCxXQUFPLGVBQWUsRUFBQyxDQUFDO0lBQ3BCQSxZQUFZQSxDQUFDQTtJQUViQTtRQUF3QkMsNkJBQUlBO1FBQTVCQTtZQUF3QkMsOEJBQUlBO1lBQ3hCQSxnQkFBV0EsR0FBR0EsSUFBSUEsb0JBQW9CQSxFQUFFQSxDQUFDQTtZQUV6Q0EsYUFBUUEsR0FBV0Esa0JBQWtCQSxDQUFDQTtZQUN0Q0Esa0JBQWFBLEdBQUdBO2dCQUNaQSxHQUFHQSxFQUFFQSxFQUFFQTtnQkFDUEEsR0FBR0EsRUFBRUEsQ0FBQ0E7Z0JBQ05BLDBCQUEwQkEsRUFBRUEsS0FBS0E7Z0JBQ2pDQSx5QkFBeUJBLEVBQUVBLEtBQUtBO2dCQUNoQ0EsNkJBQTZCQSxFQUFFQSxLQUFLQTtnQkFDcENBLHdCQUF3QkEsRUFBRUEsS0FBS0E7Z0JBQy9CQSxpQkFBaUJBLEVBQUVBLEdBQUdBO2dCQUN0QkEsNEJBQTRCQSxFQUFFQSxLQUFLQTtnQkFDbkNBLHVCQUF1QkEsRUFBRUEsS0FBS0E7Z0JBQzlCQSxZQUFZQSxFQUFFQSxLQUFLQTtnQkFDbkJBLElBQUlBLEVBQUVBLEVBQUVBO2dCQUNS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QUFHQSxRQUFRQSxDQUFDQSxDQUFDQTtZQUN0REEsS0FBS0EsSUFBSUEsQ0FBQ0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsaUJBQWlCQSxHQUFHQSxJQUFJQSxDQUFDQSxHQUFHQSxTQUFTQSxHQUFHQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUM3REEsS0FBS0EsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsNEJBQTRCQSxHQUFHQSxRQUFRQSxDQUFDQSxDQUFDQTtZQUMxREEsS0FBS0EsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsdUJBQXVCQSxHQUFHQSxTQUFTQSxDQUFDQSxDQUFDQTtZQUN0REEsS0FBS0EsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsWUFBWUEsR0FBR0EsU0FBU0EsQ0FBQ0EsQ0FBQ0E7WUFDM0NBLEtBQUtBLElBQUlBLENBQUNBLE1BQU1BLENBQUNBLElBQUlBLEdBQUdBLEVBQUVBLEdBQUdBLFFBQVFBLEdBQUdBLENBQUNBLE1BQU1BLENBQUNBLElBQUlBLEdBQUdBLEVBQUVBLEdBQUdBLFNBQVNBLEdBQUdBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO1lBQzVFQSxLQUFLQSxJQUFJQSxDQUFDQSxNQUFNQSxDQUFDQSwyQkFBMkJBLEdBQUdBLFNBQVNBLENBQUNBLENBQUNBO1lBQzFEQSxLQUFLQSxJQUFJQSxDQUFDQSxDQUFDQSxNQUFNQSxDQUFDQSxJQUFJQSxHQUFHQSxFQUFFQSxDQUFDQSxHQUFHQSxTQUFTQSxHQUFHQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUM5Q0EsS0FBS0EsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsbUJBQW1CQSxHQUFHQSxTQUFTQSxDQUFDQSxDQUFDQTtZQUNsREEsS0FBS0EsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0Esb0JBQW9CQSxHQUFHQSxDQUFDQSxHQUFHQSxTQUFTQSxDQUFDQSxDQUFDQTtZQUN2REEsS0FBS0EsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsdUJBQXVCQSxHQUFHQSxRQUFRQSxDQUFDQSxDQUFDQTtZQUNyREEsS0FBS0EsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsdUJBQXVCQSxHQUFHQSxRQUFRQSxDQUFDQSxDQUFDQTtZQUVyREEsSUFBSUEsS0FBS0EsR0FBR0EsSUFBSUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0E7WUFDNUJBLEdBQUdBLENBQUNBLE1BQU1BLEdBQUdBLEdBQUdBLEdBQUdBLEtBQUtBLEdBQUdBLENBQUNBLENBQUNBLEdBQUdBLEtBQUtBLENBQUNBLENBQUNBO1lBRXZDQSxHQUFHQSxDQUFDQSxNQUFNQSxHQUFHQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxNQUFNQSxHQUFHQSxHQUFHQSxDQUFDQSxHQUFHQSxHQUFHQSxDQUFDQTtZQUVoREEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsTUFBTUEsR0FBR0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ2pCQSxHQUFHQSxDQUFDQSxXQUFXQSxHQUFHQSxpQkFBaUJBLENBQUNBO2dCQUNwQ0EsR0FBR0EsQ0FBQ0EsV0FBV0EsR0FBR0EsdUJBQU9BLENBQUNBLFdBQVdBLENBQUNBLFFBQVFBLENBQUNBO1lBQ25EQSxDQUFDQTtZQUFDQSxJQUFJQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQSxHQUFHQSxDQUFDQSxNQUFNQSxHQUFHQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDeEJBLEdBQUdBLENBQUNBLFdBQVdBLEdBQUdBLGtCQUFrQkEsQ0FBQ0E7Z0JBQ3JDQSxHQUFHQSxDQUFDQSxXQUFXQSxHQUFHQSx1QkFBT0EsQ0FBQ0EsV0FBV0EsQ0FBQ0EsWUFBWUEsQ0FBQ0E7WUFDdkRBLENBQUNBO1lBQUNBLElBQUlBLENBQUNBLENBQUNBO2dCQUNKQSxHQUFHQSxDQUFDQSxXQUFXQSxHQUFHQSxpQkFBaUJBLENBQUNBO2dCQUNwQ0EsR0FBR0EsQ0FBQ0EsV0FBV0EsR0FBR0EsdUJBQU9BLENBQUNBLFdBQVdBLENBQUNBLE1BQU1BLENBQUNBO1lBQ2pEQSxDQUFDQTtZQUVEQSxHQUFHQSxDQUFDQSxNQUFNQSxHQUFHQSxzQ0FBc0NBLENBQUNBO1lBQ3BEQSxHQUFHQSxDQUFDQSxNQUFNQSxHQUFHQSxHQUFHQSxDQUFDQTtZQUVqQkEsTUFBTUEsQ0FBQ0EsR0FBR0EsQ0FBQ0E7UUFDZkEsQ0FBQ0E7O1FBQ0xILGdCQUFDQTtJQUFEQSxDQUFDQSxBQXhMREQsRUFBd0JBLG9CQUFJQSxFQXdMM0JBO0lBQ0RBO1FBQW1DSyx3Q0FBZUE7UUFBbERBO1lBQW1DQyw4QkFBZUE7WUFDOUNBLFNBQUlBLEdBQWdCQSxTQUFTQSxDQUFDQTtZQUM5QkEsT0FBRUEsR0FBV0EsV0FBV0EsQ0FBQ0E7WUFDekJBLFNBQUlBLEdBQVdBLFdBQVdBLENBQUNBO1lBQzNCQSxhQUFRQSxHQUFXQSxhQUFhQSxDQUFDQTtZQUNqQ0EsU0FBSUEsR0FBV0EsRUFBRUEsQ0FBQ0E7UUFDdEJBLENBQUNBO1FBQURELDJCQUFDQTtJQUFEQSxDQUFDQSxBQU5ETCxFQUFtQ0EsK0JBQWVBLEVBTWpEQTtJQUVEQSwrQkFBZUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsSUFBSUEsb0JBQW9CQSxFQUFFQSxDQUFDQSxDQUFDQTtBQUNwREEsQ0FBQ0EsRUFyTU0sZUFBZSxLQUFmLGVBQWUsUUFxTXJCIn0=