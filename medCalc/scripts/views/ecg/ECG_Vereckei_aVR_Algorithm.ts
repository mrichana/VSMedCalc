/// <reference path="../viewsCollections.ts"/>
/// <reference path="../views.ts"/>

module CalculatorViews {
    'use strict';

    class ECG_Vereckei_aVR_Algorithm extends View {
        description = new ECG_Vereckei_aVR_AlgorithmDescription();

        template: string = 'calculator.basic';
        defaultValues = {
            ECG_aVR_InitialR: undefined,
            ECG_aVR_InitialWaveDuration: undefined,
            ECG_aVR_InitialDownstrokeNotching: undefined,
            ECG_ViVt: undefined
        };
        fields: IField[] = [
            {
                id: 'ECG_aVR_InitialR',
                name: 'Αρχικό κύμα R στην aVR',
                input: {
                    type: 'select',
                    options: [
                        {
                            name: 'Ναι',
                            value: true
                        },
                        {
                            name: 'Όχι',
                            value: false
                        }
                    ]
                },
            },
            {
                id: 'ECG_aVR_InitialWaveDuration',
                name: 'Διάρκεια Αρχικού κύματος στην aVR > 40msec',
                input: {
                    type: 'select',
                    options: [
                        {
                            name: 'Ναι',
                            value: true
                        },
                        {
                            name: 'Όχι',
                            value: false
                        }
                    ],
                    hidden: true
                }
            },
            {
                id: 'ECG_aVR_InitialDownstrokeNotching',
                name: 'Εγκοπή στο αρχικό κατιών κύμα σε αρνητική aVR',
                input: {
                    type: 'select',
                    options: [
                        {
                            name: 'Ναι',
                            value: true
                        },
                        {
                            name: 'Όχι',
                            value: false
                        }
                    ],
                    hidden: true
                }
            },
            {
                id: 'ECG_ViVt',
                name: 'Vi/Vt &le; 1',
                input: {
                    type: 'select',
                    options: [{
                        name: 'Ναι',
                        value: true
                    }, {
                            name: 'Όχι',
                            value: false
                        }],
                    hidden: true,
                },
                description: 'Vi ορίζεται η κάθετη μετακίνηση κατά τα πρώτα 40msec του QRS και Vt η κάθετη μετακίνηση κατά τα τελευταία 40msec'
            },
            resultField
        ];
        calculator(values) {
            var ret = new Result();
            if (values.ECG_aVR_InitialR
                || values.ECG_aVR_InitialWaveDuration
                || values.ECG_aVR_InitialDownstrokeNotching
                || values.ECG_ViVt) {
                ret.result = 'Κοιλιακή Ταχυκαρδία';
                ret.resultlevel = IResult.resultLevel.abnormal;
            } else if (_.isUndefined(this.values.ECG_aVR_InitialR)
                || _.isUndefined(this.values.ECG_aVR_InitialWaveDuration)
                || _.isUndefined(this.values.ECG_aVR_InitialDownstrokeNotching)
                || _.isUndefined(this.values.ECG_ViVt)) {
                ret.result = 'Άγνωστο';
                ret.resultlevel = IResult.resultLevel.intermediate;
            } else {
                ret.result = 'Υπερκοιλιακή Ταχυκαρδία';
                ret.resultlevel = IResult.resultLevel.normal;
            }
            return ret;
        };
        validate(newValue: any, oldValue: any, scope: ng.IScope, field: IField) {
            super.validate(newValue, oldValue, scope, field);
            (_.find(this.fields, function(field) {
                return field.id == 'ECG_aVR_InitialWaveDuration';
            })).input.hidden = _.isUndefined(this.values.ECG_aVR_InitialR) || this.values.ECG_aVR_InitialR;
            (_.find(this.fields, function(field) {
                return field.id == 'ECG_aVR_InitialDownstrokeNotching';
            })).input.hidden = _.isUndefined(this.values.ECG_aVR_InitialWaveDuration) || this.values.ECG_aVR_InitialWaveDuration;
            (_.find(this.fields, function(field) {
                return field.id == 'ECG_ViVt';
            })).input.hidden = _.isUndefined(this.values.ECG_aVR_InitialDownstrokeNotching) || this.values.ECG_aVR_InitialDownstrokeNotching;
        };
    }
    class ECG_Vereckei_aVR_AlgorithmDescription extends ViewDescription implements IViewDescription {
        id: string = 'ECG_Vereckei_aVR_Algorithm';
        name: string = 'Vereckei aVR Algorithm';
        category: string[] = ['Ηλεκτροκαρδιογράφημα', 'Κοιλιακή Ταχυκαρδία'];
        tags: string = 'Ταχυκαρδία με ευρέα QRS';
        type: typeof View = ECG_Vereckei_aVR_Algorithm;
    }

    ViewsCollection.add(new ECG_Vereckei_aVR_AlgorithmDescription());
}
