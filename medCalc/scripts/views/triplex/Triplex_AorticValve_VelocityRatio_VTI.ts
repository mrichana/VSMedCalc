/// <reference path="../viewsCollections.ts"/>
/// <reference path="../views.ts"/>

module CalculatorViews {
    'use strict';

    class Triplex_AorticValve_VelocityRatio_VTI extends View {
        description = new Triplex_AorticValve_VelocityRatio_VTIDescription();

         template: string = 'calculator.basic';
        defaultValues = {
            Triplex_LVOT_VTI: 25,
            Triplex_AorticValve_VTI: 25
        };
        fields: IField[] = [
            {
                id: 'Triplex_LVOT_VTI',
                name: 'LVOT VTI<sub>1</sub> (m)',
                description: 'Υποβαλβιδικό Ολοκλήρωμα Ταχύτητας Χρόνου',
                input: {
                    type: 'number',
                    step: 1,
                    min: 10,
                    max: 100
                }
            }, {
                id: 'Triplex_AorticValve_VTI',
                name: 'AV VΤΙ<sub>2</sub> (m)',
                description: 'Διαβαλβιδικό Ολοκλήρωμα Ταχύτητας Χρόνου',
                input: {
                    type: 'number',
                    step: 1,
                    min: 10,
                    max: 400
                }
            },
            resultField,
            {
                id: 'image',
                input: {
                    type: 'image'
                },
                url: 'images/AVVR.png'
            }
        ];
        calculator(values) {
            var ret = new Result();
            var formula = 'Triplex_LVOT_VTI / Triplex_AorticValve_VTI';
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
    class Triplex_AorticValve_VelocityRatio_VTIDescription extends ViewDescription implements IViewDescription {
        id: string = 'Triplex_AorticValve_VelocityRatio_VTI';
        name: string = 'Aortic Valve Velocity Ratio (VTI)';
        category: string[] = ['Υπερηχοκαρδιογράφημα', 'Βαλβίδες', 'Στένωση Αορτικής'];
        tags: string = 'AoV\\Stenosis';
       type: typeof View = Triplex_AorticValve_VelocityRatio_VTI;
    }

    ViewsCollection.add(new Triplex_AorticValve_VelocityRatio_VTIDescription());
}
