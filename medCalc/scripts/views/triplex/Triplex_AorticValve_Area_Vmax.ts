/// <reference path="../viewsCollections.ts"/>
/// <reference path="../views.ts"/>

module CalculatorViews {
    'use strict';

    class Triplex_AorticValve_Area_Vmax extends View {
        description = new Triplex_AorticValve_Area_VmaxDescription();

        template: string = 'calculator.basic';
        defaultValues = {
            Triplex_LVOT_Diameter: 20,
            Triplex_LVOT_Vmax: 1,
            Triplex_AorticValve_Vmax: 1
        };
        fields: IField[] = [
            {
                id: 'Triplex_LVOT_Diameter',
                name: 'Διάμετρος LVOT (mm)',
                input: {
                    type: 'number',
                    step: 1,
                    min: 1,
                    max: 50
                }
            }, {
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
            }, resultField, {
                id: 'image',
                input: {
                    type: 'image'
                },
                url: 'images/AVVR.png'
            }
        ];
        calculator(values) {
            var ret = new Result();
            var formula = '(pi * ((Triplex_LVOT_Diameter / 10) / 2) ^ 2) * Triplex_LVOT_Vmax / Triplex_AorticValve_Vmax';

            ret.result = View.roundNum(View.evaluator(values, formula), 2);
            ret.formula = View.formulaEvaluator(values, formula);

            ret.suffix = 'cm<sup>2</sup>'

            if (ret.result < 1.0) {
                ret.explanation = 'Σοβαρή στένωση αορτικής βαλβίδας';
                ret.resultlevel = IResult.resultLevel.abnormal;
            } else if (ret.result <= 1.50) {
                ret.explanation = 'Μέτρια στένωση αορτικής βαλβίδας';
                ret.resultlevel = IResult.resultLevel.intermediate;
            } else {
                ret.explanation = 'Μικρή στένωση/Σκλήρυνση αορτικής βαλβίδας';
                ret.resultlevel = IResult.resultLevel.normal;
            }
            return ret;
        };
    }
    class Triplex_AorticValve_Area_VmaxDescription extends ViewDescription implements IViewDescription {
        type: typeof View = Triplex_AorticValve_Area_Vmax;
        id: string = 'Triplex_AorticValve_Area_Vmax';
        name: string = 'Aortic Valve Area (Vmax)';
        category: string[] = ['Υπερηχοκαρδιογράφημα','Αορτική Βαλβίδα','Στένωση Αορτικής'];
        tags: string = 'AoV\\Stenosis';
    }

    ViewsCollection.add(new Triplex_AorticValve_Area_VmaxDescription());
}
