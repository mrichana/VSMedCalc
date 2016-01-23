/// <reference path="../viewsCollections.ts"/>
/// <reference path="../views.ts"/>

module CalculatorViews {
    'use strict';

    class ECG_QT extends View {
        description = new ECG_QTDescription();

        template: string = 'calculator.basic';
        defaultValues = {
            ECG_QTmm: 10,
            ECG_PaperSpeed: 25
        };
        fields: IField[] = [
            {
                id: 'ECG_QTmm',
                name: 'Διάστημα (mm)',
                input: {
                    type: 'number',
                    step: 1,
                    min: 1,
                    max: 1000
                }
            }, {
                id: 'ECG_PaperSpeed',
                name: 'Ταχύτητα χαρτιού (mm/sec)',
                input: {
                    type: 'select',
                    options: [
                        { name: '25', value: 25 },
                        { name: '50', value: 50 }
                    ]
                }
            },
            resultField
        ];
        calculator(values) {
            var ret = new Result();

            var formula = 'ECG_QTmm * (1/ECG_PaperSpeed) * 1000';
            ret.result = View.evaluator(values, formula);
            ret.formula = View.formulaEvaluator(values, formula);
            ret.suffix = 'msec';

            return ret;
        };
    }
    class ECG_QTDescription extends ViewDescription implements IViewDescription {
        type: typeof View = ECG_QT;
        id: string = 'ECG_QT';
        name: string = 'mm σε msec';
        category: string[] = ['Ηλεκτροκαρδιογράφημα'];
        isHelper: boolean = true;
        tags: string = '';
    }

    ViewsCollection.add(new ECG_QTDescription());
}
