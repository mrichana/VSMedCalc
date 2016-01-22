/// <reference path="../viewsCollections.ts"/>
/// <reference path="../views.ts"/>

module CalculatorViews {
    'use strict';

    class ECG_RW_To_Peak_Time extends View {
        description = new ECG_RW_To_Peak_TimeDescription();

        template: string = 'calculator.basic';
        defaultValues = {
            ECG_II_RWPT: 40
        };
        fields: IField[] = [
            {
                id: 'ECG_II_RWPT',
                name: 'RW to Peak Time (msec)',
                input: {
                    type: 'number',
                    step: 1,
                    min: 20,
                    max: 100
                },
                description: 'Χρόνος από την έναρξη του QRS εώς την πρώτη αλλαγή πολικότητας στην απαγωγή II'
            },
            resultField
        ];
        calculator(values) {
            var ret = new Result();
            if (values.ECG_II_RWPT >= 50) {
                ret.result = 'Κοιλιακή Ταχυκαρδία';
                ret.resultlevel = IResult.resultLevel.abnormal;
            } else {
                ret.result = 'Υπερκοιλιακή Ταχυκαρδία';
                ret.resultlevel = IResult.resultLevel.normal;
            }
            return ret;
        };
    }
    class ECG_RW_To_Peak_TimeDescription extends ViewDescription implements IViewDescription {
        id: string = 'ECG_RW_To_Peak_Time';
        name: string = 'Υπεραπλό Κριτήριο Brugada';
        category: string[] = ['Ηλεκτροκαρδιογράφημα', 'Κοιλιακή Ταχυκαρδία'];
        tags: string = 'Ταχυκαρδία με ευρέα QRS';
        type: typeof View = ECG_RW_To_Peak_Time;
    }

    ViewsCollection.add(new ECG_RW_To_Peak_TimeDescription());
}
