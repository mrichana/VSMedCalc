/// <reference path="../viewsCollections.ts"/>
/// <reference path="../views.ts"/>

module CalculatorViews {
    'use strict';

    class EuroSCORE extends View {
        description = new EuroSCOREDescription();

        template: string = 'calculator.basic';
        defaultValues = {
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
        fields: IField[] = [
            ageField,
            sexField, {
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
            resultField
        ];

        validate(newValue: any, oldValue: any, scope: ng.IScope, field: IField) {
            if (field.id === 'EuroSCORE_ThoracicAorta' && this.values.EuroSCORE_ThoracicAorta === true) {
                this.values.EuroSCORE_SimpleCABG = false;
            }
            if (field.id === 'EuroSCORE_SeptalRupture' && this.values.EuroSCORE_SeptalRupture === true) {
                this.values.EuroSCORE_SimpleCABG = false;
            }
            if (field.id === 'EuroSCORE_SimpleCABG' && this.values.EuroSCORE_SimpleCABG === true) {
                this.values.EuroSCORE_ThoracicAorta = this.values.EuroSCORE_SeptalRupture = false;
            }
            super.validate(newValue, oldValue, scope, field);
        }

        calculator(values) {
            var ret = new Result();

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
                ret.resultlevel = IResult.resultLevel.abnormal;
            } else if (ret.result > 4) {
                ret.explanation = 'Μετρίου Κινδύνου';
                ret.resultlevel = IResult.resultLevel.intermediate;
            } else {
                ret.explanation = 'Μικρού Κινδύνου';
                ret.resultlevel = IResult.resultLevel.normal;
            }

            ret.prefix = 'Υπολογιζόμενη Θνητότητα Χειρουργείου';
            ret.suffix = '%';

            return ret;
        };
    }
    class EuroSCOREDescription extends ViewDescription implements IViewDescription {
        type: typeof View = EuroSCORE;
        id: string = 'EuroSCORE';
        name: string = 'EuroSCORE';
        category: string[] = ['Καρδιολογία', 'Καρδιοχειρουργικός Κίνδυνος'];
        tags: string = '';
    }

    ViewsCollection.add(new EuroSCOREDescription());
}
