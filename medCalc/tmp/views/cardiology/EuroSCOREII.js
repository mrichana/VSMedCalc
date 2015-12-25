var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var CalculatorViews;
(function (CalculatorViews) {
    'use strict';
    var EuroSCOREII = (function (_super) {
        __extends(EuroSCOREII, _super);
        function EuroSCOREII() {
            _super.apply(this, arguments);
            this.description = new EuroSCOREIIDescription();
            this.template = 'calculator.basic';
            this.defaultValues = {
                Age: 65,
                Sex: 0,
                GFR: 73,
                HistoryOf_VascularDisease: false,
                HistoryOf_PoorMobility: false,
                HistoryOf_CardiacSurgery: false,
                HistoryOf_PulmonaryDisease: false,
                EuroSCORE_ActiveEndocarditis: false,
                EuroSCORE_CriticalState: false,
                HistoryOf_Diabetes: false,
                NYHAClass: 'I',
                AnginaAtRest: false,
                LVEF: 60,
                EuroSCORE_MIinTheLast90Days: false,
                PASP: 40,
                EuroSCOREII_Emergency: 0,
                EuroSCOREII_OperationWeight: 0,
                EuroSCORE_ThoracicAorta: false
            };
            this.fields = [
                CalculatorViews.ageField,
                CalculatorViews.sexField, {
                    id: 'GFR',
                    name: 'GFR',
                    calculator: 'GFR',
                    input: {
                        type: 'number',
                        step: 0.1,
                        min: 0,
                        max: 250
                    }
                }, {
                    id: 'HistoryOf_VascularDisease',
                    name: 'Εξωκαρδιακή Αρτηριοπάθεια',
                    input: {
                        type: 'check'
                    }
                }, {
                    id: 'HistoryOf_PoorMobility',
                    name: 'Σοβαρά Μειωμένη Κινητικότητα',
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
                    id: 'HistoryOf_PulmonaryDisease',
                    name: 'Χ.Α.Π.',
                    input: {
                        type: 'check'
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
                    id: 'HistoryOf_Diabetes',
                    name: 'Σακχαρώδης Διαβήτης ύπο ινσουλίνη',
                    input: {
                        type: 'check'
                    }
                }, {
                    id: 'NYHAClass',
                    name: 'NYHA Class',
                    input: {
                        type: 'select',
                        options: [{
                                value: 'I',
                                name: 'Class I',
                                description: 'Απουσία συμπτωμάτων και κανένας περιορισμός στην φυσιολογική φυσική δραστηριότητα'
                            }, {
                                value: 'II',
                                name: 'Class II',
                                description: 'Ήπια συμπτώματα και μικρός περιορισμός κατά την φυσιολογική δραστηριότητα'
                            }, {
                                value: 'III',
                                name: 'Class III',
                                description: 'Σημαντικός περιορισμός δραστηριότητας λόγω συμπτωμάτων, ακόμα και σε μικρότερη από φυσιολογική δραστηριότητα. Απουσία συμπτωμάτων κατά την ανάπαυση'
                            }, {
                                value: 'IV',
                                name: 'Class IV',
                                description: 'Έντονος περιορισμός δραστηριότητας λόγω συμπτωμάτων. Παρουσία συμπτωμάτων κατά την ανάπαυση'
                            }]
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
                    id: 'EuroSCOREII_Emergency',
                    name: 'Επείγουσα Επέμβαση',
                    input: {
                        type: 'select',
                        options: [{
                                name: 'Προγραμματισμένη',
                                value: 0
                            }, {
                                name: 'Επείγουσα',
                                value: 1
                            }, {
                                name: 'Κατεπείγουσα',
                                value: 2
                            }, {
                                name: 'Διάσωσης',
                                value: 3
                            }]
                    }
                }, {
                    id: 'EuroSCOREII_OperationWeight',
                    name: 'Βαρύτητα Επέμβασης',
                    input: {
                        type: 'select',
                        options: [{
                                name: 'Απλή αορτοστεφανιαία παράκαμψη',
                                value: 0
                            }, {
                                name: 'Απλή μη αορτοστεφανιαία παράκαμψη',
                                value: 1
                            }, {
                                name: 'Διπλή Επέμβαση',
                                value: 2
                            }, {
                                name: 'Τριπλή Επέμβαση',
                                value: 3
                            }]
                    }
                }, {
                    id: 'EuroSCORE_ThoracicAorta',
                    name: 'Επέμβαση Θωρακικής Αορτής',
                    input: {
                        type: 'check'
                    }
                },
                CalculatorViews.resultField
            ];
        }
        EuroSCOREII.prototype.validate = function (newValue, oldValue, scope, field) {
            if (field.id === 'EuroSCOREII_OperationWeight' && newValue == 0 && this.values.EuroSCORE_ThoracicAorta == true) {
                this.values.EuroSCORE_ThoracicAorta = false;
            }
            if (field.id === 'EuroSCORE_ThoracicAorta' && newValue == true && this.values.EuroSCOREII_OperationWeight == 0) {
                this.values.EuroSCOREII_OperationWeight = 1;
            }
        };
        EuroSCOREII.prototype.calculator = function (values) {
            var ret = new CalculatorViews.Result();
            var value = -5.324537;
            value += (0.0285181 * (values.Age < 60 ? 1 : values.Age - 59));
            value += ((!values.Sex) ? 0 : 0.2196434);
            value += (values.GFR == 0 ? 0.6421508 : (values.GFR < 50 ? 0.8592256 : (values.GFR < 85 ? 0.30355 : 0)));
            value += (values.HistoryOf_VascularDisease * 0.5360268);
            value += (values.HistoryOf_PoorMobility * 0.2407181);
            value += (values.HistoryOf_CardiacSurgery * 1.118599);
            value += (values.HistoryOf_PulmonaryDisease * 0.1886564);
            value += (values.EuroSCORE_ActiveEndocarditis * 0.6194522);
            value += (values.EuroSCORE_CriticalState * 1.086517);
            value += (values.HistoryOf_Diabetes * 0.3542749);
            value += (values.NYHAClass == 'I' ? 0 : (values.NYHAClass == 'II' ? 0.1070545 : (values.NYHAClass == 'III' ? 0.2958358 : 0.5597929)));
            value += (values.AnginaAtRest * 0.2226147);
            value += (values.LVEF < 20 ? 0.9346919 : (values.LVEF < 30 ? 0.8084096 : (values.LVEF < 50 ? 0.3150652 : 0)));
            value += (values.EuroSCORE_MIinTheLast90Days * 0.1528943);
            value += (values.PASP > 55 ? 0.3491475 : (values.PASP > 30 ? 0.1788899 : 0));
            value += (values.EuroSCOREII_Emergency == 3 ? 1.362947 : (values.EuroSCOREII_Emergency == 2 ? 0.7039121 : (values.EuroSCOREII_Emergency == 1 ? 0.3174673 : 0)));
            value += (values.EuroSCOREII_OperationWeight == 3 ? 0.9724533 : (values.EuroSCOREII_OperationWeight == 2 ? 0.5521478 : (values.EuroSCOREII_OperationWeight == 1 ? 0.0062118 : 0)));
            value += (values.EuroSCORE_ThoracicAorta * 0.6527205);
            ret.result = 100 * Math.exp(value) / (1 + Math.exp(value));
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
        return EuroSCOREII;
    })(CalculatorViews.View);
    var EuroSCOREIIDescription = (function (_super) {
        __extends(EuroSCOREIIDescription, _super);
        function EuroSCOREIIDescription() {
            _super.apply(this, arguments);
            this.type = EuroSCOREII;
            this.id = 'EuroSCOREII';
            this.name = 'EuroSCORE II';
            this.category = 'Καρδιολογία';
            this.tags = '';
        }
        return EuroSCOREIIDescription;
    })(CalculatorViews.ViewDescription);
    CalculatorViews.viewsCollection.add(new EuroSCOREIIDescription());
})(CalculatorViews || (CalculatorViews = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXVyb1NDT1JFSUkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zY3JpcHRzL3ZpZXdzL2NhcmRpb2xvZ3kvRXVyb1NDT1JFSUkudHMiXSwibmFtZXMiOlsiQ2FsY3VsYXRvclZpZXdzIiwiQ2FsY3VsYXRvclZpZXdzLkV1cm9TQ09SRUlJIiwiQ2FsY3VsYXRvclZpZXdzLkV1cm9TQ09SRUlJLmNvbnN0cnVjdG9yIiwiQ2FsY3VsYXRvclZpZXdzLkV1cm9TQ09SRUlJLnZhbGlkYXRlIiwiQ2FsY3VsYXRvclZpZXdzLkV1cm9TQ09SRUlJLmNhbGN1bGF0b3IiLCJDYWxjdWxhdG9yVmlld3MuRXVyb1NDT1JFSUlEZXNjcmlwdGlvbiIsIkNhbGN1bGF0b3JWaWV3cy5FdXJvU0NPUkVJSURlc2NyaXB0aW9uLmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7OztBQUVBLElBQU8sZUFBZSxDQW9QckI7QUFwUEQsV0FBTyxlQUFlLEVBQUMsQ0FBQztJQUNwQkEsWUFBWUEsQ0FBQ0E7SUFFYkE7UUFBMEJDLCtCQUFJQTtRQUE5QkE7WUFBMEJDLDhCQUFJQTtZQUMxQkEsZ0JBQVdBLEdBQUdBLElBQUlBLHNCQUFzQkEsRUFBRUEsQ0FBQ0E7WUFFM0NBLGFBQVFBLEdBQVdBLGtCQUFrQkEsQ0FBQ0E7WUFDdENBLGtCQUFhQSxHQUFHQTtnQkFDWkEsR0FBR0EsRUFBRUEsRUFBRUE7Z0JBQ1BBLEdBQUdBLEVBQUVBLENBQUNBO2dCQUNOQSxHQUFHQSxFQUFFQSxFQUFFQTtnQkFDUEEseUJBQXlCQSxFQUFFQSxLQUFLQTtnQkFDaENBLHNCQUFzQkEsRUFBRUEsS0FBS0E7Z0JBQzdCQSx3QkFBd0JBLEVBQUVBLEtBQUtBO2dCQUMvQkEsMEJBQTBCQSxFQUFFQSxLQUFLQTtnQkFDakNBLDRCQUE0QkEsRUFBRUEsS0FBS0E7Z0JBQ25DQSx1QkFBdUJBLEVBQUVBLEtBQUtBO2dCQUM5QkEsa0JBQWtCQSxFQUFFQSxLQUFLQTtnQkFDekJBLFNBQVNBLEVB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QSxDQUFDQTtZQUN6R0EsS0FBS0EsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EseUJBQXlCQSxHQUFHQSxTQUFTQSxDQUFDQSxDQUFDQTtZQUN4REEsS0FBS0EsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0Esc0JBQXNCQSxHQUFHQSxTQUFTQSxDQUFDQSxDQUFDQTtZQUNyREEsS0FBS0EsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0Esd0JBQXdCQSxHQUFHQSxRQUFRQSxDQUFDQSxDQUFDQTtZQUN0REEsS0FBS0EsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsMEJBQTBCQSxHQUFHQSxTQUFTQSxDQUFDQSxDQUFDQTtZQUN6REEsS0FBS0EsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsNEJBQTRCQSxHQUFHQSxTQUFTQSxDQUFDQSxDQUFDQTtZQUMzREEsS0FBS0EsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsdUJBQXVCQSxHQUFHQSxRQUFRQSxDQUFDQSxDQUFDQTtZQUNyREEsS0FBS0EsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0Esa0JBQWtCQSxHQUFHQSxTQUFTQSxDQUFDQSxDQUFDQTtZQUNqREEsS0FBS0EsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsU0FBU0EsSUFBSUEsR0FBR0EsR0FBR0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsU0FBU0EsSUFBSUEsSUFBSUEsR0FBR0EsU0FBU0EsR0FBR0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsU0FBU0EsSUFBSUEsS0FBS0EsR0FBR0EsU0FBU0EsR0FBR0EsU0FBU0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDdElBLEtBQUtBLElBQUlBLENBQUNBLE1BQU1BLENBQUNBLFlBQVlBLEdBQUdBLFNBQVNBLENBQUNBLENBQUNBO1lBQzNDQSxLQUFLQSxJQUFJQSxDQUFDQSxNQUFNQSxDQUFDQSxJQUFJQSxHQUFHQSxFQUFFQSxHQUFHQSxTQUFTQSxHQUFHQSxDQUFDQSxNQUFNQSxDQUFDQSxJQUFJQSxHQUFHQSxFQUFFQSxHQUFHQSxTQUFTQSxHQUFHQSxDQUFDQSxNQUFNQSxDQUFDQSxJQUFJQSxHQUFHQSxFQUFFQSxHQUFHQSxTQUFTQSxHQUFHQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUM5R0EsS0FBS0EsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsMkJBQTJCQSxHQUFHQSxTQUFTQSxDQUFDQSxDQUFDQTtZQUMxREEsS0FBS0EsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsSUFBSUEsR0FBR0EsRUFBRUEsR0FBR0EsU0FBU0EsR0FBR0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsSUFBSUEsR0FBR0EsRUFBRUEsR0FBR0EsU0FBU0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDN0VBLEtBQUtBLElBQUlBLENBQUNBLE1BQU1BLENBQUNBLHFCQUFxQkEsSUFBSUEsQ0FBQ0EsR0FBR0EsUUFBUUEsR0FBR0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EscUJBQXFCQSxJQUFJQSxDQUFDQSxHQUFHQSxTQUFTQSxHQUFHQSxDQUFDQSxNQUFNQSxDQUFDQSxxQkFBcUJBLElBQUlBLENBQUNBLEdBQUdBLFNBQVNBLEdBQUdBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO1lBQ2hLQSxLQUFLQSxJQUFJQSxDQUFDQSxNQUFNQSxDQUFDQSwyQkFBMkJBLElBQUlBLENBQUNBLEdBQUdBLFNBQVNBLEdBQUdBLENBQUNBLE1BQU1BLENBQUNBLDJCQUEyQkEsSUFBSUEsQ0FBQ0EsR0FBR0EsU0FBU0EsR0FBR0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsMkJBQTJCQSxJQUFJQSxDQUFDQSxHQUFHQSxTQUFTQSxHQUFHQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUNuTEEsS0FBS0EsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsdUJBQXVCQSxHQUFHQSxTQUFTQSxDQUFDQSxDQUFDQTtZQUV0REEsR0FBR0EsQ0FBQ0EsTUFBTUEsR0FBR0EsR0FBR0EsR0FBR0EsSUFBSUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsR0FBR0EsSUFBSUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDM0RBLEdBQUdBLENBQUNBLE1BQU1BLEdBQUdBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLE1BQU1BLEdBQUdBLEdBQUdBLENBQUNBLEdBQUdBLEdBQUdBLENBQUNBO1lBRWhEQSxFQUFFQSxDQUFDQSxDQUFDQSxHQUFHQSxDQUFDQSxNQUFNQSxHQUFHQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDakJBLEdBQUdBLENBQUNBLFdBQVdBLEdBQUdBLGlCQUFpQkEsQ0FBQ0E7Z0JBQ3BDQSxHQUFHQSxDQUFDQSxXQUFXQSxHQUFHQSx1QkFBT0EsQ0FBQ0EsV0FBV0EsQ0FBQ0EsUUFBUUEsQ0FBQ0E7WUFDbkRBLENBQUNBO1lBQUNBLElBQUlBLENBQUNBLEVBQUVBLENBQUNBLENBQUNBLEdBQUdBLENBQUNBLE1BQU1BLEdBQUdBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO2dCQUN4QkEsR0FBR0EsQ0FBQ0EsV0FBV0EsR0FBR0Esa0JBQWtCQSxDQUFDQTtnQkFDckNBLEdBQUdBLENBQUNBLFdBQVdBLEdBQUdBLHVCQUFPQSxDQUFDQSxXQUFXQSxDQUFDQSxZQUFZQSxDQUFDQTtZQUN2REEsQ0FBQ0E7WUFBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7Z0JBQ0pBLEdBQUdBLENBQUNBLFdBQVdBLEdBQUdBLGlCQUFpQkEsQ0FBQ0E7Z0JBQ3BDQSxHQUFHQSxDQUFDQSxXQUFXQSxHQUFHQSx1QkFBT0EsQ0FBQ0EsV0FBV0EsQ0FBQ0EsTUFBTUEsQ0FBQ0E7WUFDakRBLENBQUNBO1lBRURBLEdBQUdBLENBQUNBLE1BQU1BLEdBQUdBLHNDQUFzQ0EsQ0FBQ0E7WUFDcERBLEdBQUdBLENBQUNBLE1BQU1BLEdBQUdBLEdBQUdBLENBQUNBO1lBR2pCQSxNQUFNQSxDQUFDQSxHQUFHQSxDQUFDQTtRQUNmQSxDQUFDQTs7UUFDTEgsa0JBQUNBO0lBQURBLENBQUNBLEFBdk9ERCxFQUEwQkEsb0JBQUlBLEVBdU83QkE7SUFDREE7UUFBcUNLLDBDQUFlQTtRQUFwREE7WUFBcUNDLDhCQUFlQTtZQUNoREEsU0FBSUEsR0FBZ0JBLFdBQVdBLENBQUNBO1lBQ2hDQSxPQUFFQSxHQUFXQSxhQUFhQSxDQUFDQTtZQUMzQkEsU0FBSUEsR0FBV0EsY0FBY0EsQ0FBQ0E7WUFDOUJBLGFBQVFBLEdBQVdBLGFBQWFBLENBQUNBO1lBQ2pDQSxTQUFJQSxHQUFXQSxFQUFFQSxDQUFDQTtRQUN0QkEsQ0FBQ0E7UUFBREQsNkJBQUNBO0lBQURBLENBQUNBLEFBTkRMLEVBQXFDQSwrQkFBZUEsRUFNbkRBO0lBRURBLCtCQUFlQSxDQUFDQSxHQUFHQSxDQUFDQSxJQUFJQSxzQkFBc0JBLEVBQUVBLENBQUNBLENBQUNBO0FBQ3REQSxDQUFDQSxFQXBQTSxlQUFlLEtBQWYsZUFBZSxRQW9QckIifQ==