/// <reference path="../views.ts"/>

module CalculatorViews {
    'use strict';

    class ECG_Duke_Treadmill_Score extends View {
        description = new ECG_Duke_Treadmill_ScoreDescription();

        template: string = 'calculator.basic';
        defaultValues = {
            ECG_Bruce_ExerciseTime: 21,
            ECG_Bruce_STDeviation: 0,
            ECG_Bruce_AnginaIndex: 0
        };
        fields: IField[] = [
            {
                id: 'ECG_Bruce_ExerciseTime',
                name: 'Διάρκεια κόπωσης κατά Bruce (min)',
                input: {
                    type: 'number',
                    step: 1,
                    min: 1,
                    max: 21
                }
            }, {
                id: 'ECG_Bruce_STDeviation',
                name: 'Μεταβολή ST (mm)',
                input: {
                    type: 'number',
                    step: 1,
                    min: 0,
                    max: 10
                }
            }, {
                id: 'ECG_Bruce_AnginaIndex',
                name: 'Τύπος προκάρδιου άλγους',
                input: {
                    type: 'select',
                    options: [{
                        value: 0,
                        name: 'Απών'
                    }, {
                            value: 1,
                            name: 'Χωρίς περιορισμό στην κόπωση'
                        }, {
                            value: 2,
                            name: 'Με περιορισμό στην κόπωση'
                        }]
                }
            },
            resultField
        ];
        calculator(values) {
            var ret = new Result();
            var formula = 'ECG_Bruce_ExerciseTime - 5*ECG_Bruce_STDeviation - 4*ECG_Bruce_AnginaIndex';
            ret.formula = View.formulaEvaluator(values, formula);
            ret.result = View.roundNum(View.evaluator(values, formula));

            if (ret.result >= 5) {
                ret.explanation = 'Χαμηλός κίνδυνος (Θνησιμότητα στο έτος: 0.25%)';
                ret.resultlevel = IResult.resultLevel.Normal;
            } else if (ret.result >= -11) {
                ret.explanation = 'Ενδιάμεσος κίνδυνος (Θνησιμότητα στο έτος: 1.25%)';
                ret.resultlevel = IResult.resultLevel.Intermediate;
            } else {
                ret.explanation = 'Υψηλός κίνδυνος (Θνησιμότητα στο έτος: 5.25%)';
                ret.resultlevel = IResult.resultLevel.Abnormal;
            }

            return ret;
        };
    }
    class ECG_Duke_Treadmill_ScoreDescription extends ViewDescription implements IViewDescription {
        type: typeof View = ECG_Duke_Treadmill_Score;
        id: string = 'ECG_Duke_Treadmill_Score';
        name: string = 'Duke Treadmill Score (DTS)';
        category: string = 'ΗΚΓ';
        tags: string = 'nstemi';
    }

    viewsCollection.add(new ECG_Duke_Treadmill_ScoreDescription());
}
