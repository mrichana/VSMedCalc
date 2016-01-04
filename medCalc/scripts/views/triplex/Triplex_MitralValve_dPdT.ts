/// <reference path="../viewsCollections.ts"/>
/// <reference path="../views.ts"/>

module CalculatorViews {
    'use strict';

    class Triplex_MitralValve_dPdT extends View {
        description = new Triplex_MitralValve_dPdTDescription();

        template: string = 'calculator.basic';
        defaultValues = {
            Triplex_MitralValve_dPdT_Time: 25
        };
        fields: IField[] = [
            {

                id: 'Triplex_MitralValve_dPdT_Time',
                name: '1 to 3m/s MR Acceleration Time (msec)',
                input: {
                    type: 'number',
                    step: 1,
                    min: 10,
                    max: 100
                }
            }, resultField,
            {
                id: 'image',
                input: {
                    type: 'image'
                },
                url: 'images/dP2dT.png'
            }
        ];
        calculator(values) {
            var ret = new Result();

            var formula = '32/(Triplex_MitralValve_dPdT_Time/1000)';
            ret.formula = View.formulaEvaluator(values, formula);
            
            ret.result = View.roundNum(View.evaluator(values, formula));
            ret.suffix = 'mmHg/sec';
            
            if (ret.result > 1200) {
                ret.explanation = 'Φυσιολογική Συσταλτικότητα Αρ. Κοιλίας';
                ret.resultlevel = IResult.resultLevel.normal;
            } else if (ret.result > 800) {
                ret.explanation = 'Οριακά Επηρεασμένη Συσταλτικότητα Αρ. Κοιλίας';
                ret.resultlevel = IResult.resultLevel.normal;
            } else if (ret.result > 500) {
                ret.explanation = 'Επηρεασμένη Συσταλτικότητα Αρ. Κοιλίας';
                ret.resultlevel = IResult.resultLevel.intermediate;
            } else {
                ret.explanation = 'Σοβαρά Επηρεασμένη Συσταλτικότητα Αρ. Κοιλίας';
                ret.resultlevel = IResult.resultLevel.abnormal;
            }
            return ret;
        };
    }
    class Triplex_MitralValve_dPdTDescription extends ViewDescription implements IViewDescription {
        type: typeof View = Triplex_MitralValve_dPdT;
        id: string = 'Triplex_MitralValve_dPdT';
        name: string = 'Συσταλτικότητα Αρ.Κοιλίας (dP/dT)';
        category: string[] = ['Υπερηχοκαρδιογράφημα', 'Κοιλίες', 'Αριστερή Κοιλία'];
        tags: string = '';
    }

    ViewsCollection.add(new Triplex_MitralValve_dPdTDescription());
}
