/// <reference path="../views.ts"/>

module CalculatorViews {
    'use strict';

    class Triplex_AorticValve_VelocityRatio_Vmax extends View {
        description = new Triplex_AorticValve_VelocityRatio_VmaxDescription();

        template: string = 'calculator.basic';
        defaultValues = {
            Triplex_LVOT_Vmax: 1,
            Triplex_AorticValve_Vmax: 1
        };
        fields: IField[] = [
            {
                id: 'Triplex_LVOT_Vmax',
                name: 'LVOT Vmax<sub>1</sub> (m/s)',
                description: 'Υποβαλβιδική Μέγιστη Ταχύτητα',
                input: {
                    type: 'number',
                    step: 0.1,
                    min: 0.1,
                    max: 8
                }
            }, {
                id: 'Triplex_AorticValve_Vmax',
                name: 'AV Vmax<sub>2</sub> (m/s)',
                description: 'Διαβαλβιδική Μέγιστη Ταχύτητα',
                input: {
                    type: 'number',
                    step: 0.1,
                    min: 0.1,
                    max: 8
                }
            },
            resultField, {
                id: 'image',
                input: {
                    type: 'image'
                },
                url: 'images/AVVR.png'
            }
        ];
        calculator(values) {
            var ret = new Result();
            var formula = 'Triplex_LVOT_Vmax / Triplex_AorticValve_Vmax';
            ret.result = View.roundNum(View.evaluator(values, formula), 2);
            ret.formula = View.formulaEvaluator(values, formula);

            if (ret.result < 0.25) {
                ret.explanation = 'Σοβαρή στένωση αορτικής βαλβίδας';
                ret.resultlevel = IResult.resultLevel.abnormal;
            } else if (ret.result <= 0.50) {
                ret.explanation = 'Μέτρια στένωση αορτικής βαλβίδας';
                ret.resultlevel = IResult.resultLevel.intermediate;
            } else {
                ret.explanation = 'Μικρή στένωση/Σκλήρυνση αορτικής βαλβίδας';
                ret.resultlevel = IResult.resultLevel.normal;
            }
            return ret;
        };
    }
    class Triplex_AorticValve_VelocityRatio_VmaxDescription extends ViewDescription implements IViewDescription {
        id: string = 'Triplex_AorticValve_VelocityRatio_Vmax';
        name: string = 'Aortic Valve Velocity Ratio (Vmax)';
        category: string[] = ['Υπερηχοκαρδιογράφημα', 'Αορτική Βαλβίδα', 'Στένωση Αορτικής'];
        tags: string = 'AoV\\Stenosis';
        type: typeof View = Triplex_AorticValve_VelocityRatio_Vmax;
    }

    viewsCollection.add(new Triplex_AorticValve_VelocityRatio_VmaxDescription());
}
