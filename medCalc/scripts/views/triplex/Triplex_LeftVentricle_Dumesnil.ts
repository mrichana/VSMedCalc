/// <reference path="../viewsCollections.ts"/>
/// <reference path="../views.ts"/>

module CalculatorViews {
    'use strict';

    class Triplex_LeftVentricle_Dumesnil extends View {
        description = new Triplex_LeftVentricle_DumesnilDescription();

        template: string = 'calculator.basic';
        defaultValues = {
            Triplex_LeftVentricle_Volume: 118,
            Triplex_Stroke_Volume: 63
        };
        fields: IField[] = [
            {
                id: 'Triplex_Stroke_Volume',
                name: 'Όγκος Παλμού (SV)',
                calculator: 'Triplex_Stroke_Volume',
                input: {
                    type: 'number',
                    step: 1,
                    min: 50,
                    max: 150
                }
            },
            {
                id: 'Triplex_LeftVentricle_Volume',
                name: 'Όγκος Αριστερής Κοιλίας',
                calculator: 'Triplex_LeftVentricle_Volume',
                input: {
                    type: 'number',
                    step: 1,
                    min: 66,
                    max: 345
                }
            }, resultField,
        ];
        calculator(values) {
            var ret = new Result();

            var formula = '(Triplex_Stroke_Volume/Triplex_LeftVentricle_Volume)*100';
            ret.formula = View.formulaEvaluator(values, formula);
            
            ret.result = View.roundNum(View.evaluator(values, formula));
            ret.suffix = '%';
            
            if (ret.result >= 55) {
                ret.explanation = 'Φυσιολογική Συσταλτικότητα Αρ. Κοιλίας';
                ret.resultlevel = IResult.resultLevel.normal;
            } else if (ret.result >= 45) {
                ret.explanation = 'Οριακά Επηρεασμένη Συσταλτικότητα Αρ. Κοιλίας';
                ret.resultlevel = IResult.resultLevel.normal;
            } else if (ret.result > 35) {
                ret.explanation = 'Επηρεασμένη Συσταλτικότητα Αρ. Κοιλίας';
                ret.resultlevel = IResult.resultLevel.intermediate;
            } else {
                ret.explanation = 'Σοβαρά Επηρεασμένη Συσταλτικότητα Αρ. Κοιλίας';
                ret.resultlevel = IResult.resultLevel.abnormal;
            }
            return ret;
        };
    }
    class Triplex_LeftVentricle_DumesnilDescription extends ViewDescription implements IViewDescription {
        type: typeof View = Triplex_LeftVentricle_Dumesnil;
        id: string = 'Triplex_LeftVentricle_Dumesnil';
        name: string = 'Συσταλτικότητα Αρ.Κοιλίας (Dumesnil)';
        category: string[] = ['Υπερηχοκαρδιογράφημα', 'Κοιλίες', 'Αριστερή Κοιλία'];
        tags: string = '';
    }

    ViewsCollection.add(new Triplex_LeftVentricle_DumesnilDescription());
}
