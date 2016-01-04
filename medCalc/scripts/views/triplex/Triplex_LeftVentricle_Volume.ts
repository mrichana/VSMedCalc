/// <reference path="../viewsCollections.ts"/>
/// <reference path="../views.ts"/>
/// <reference path="../MinMaxToValue.ts"/>

module CalculatorViews {
    'use strict';

    class Triplex_LeftVentricle_Volume extends View {
description = new Triplex_LeftVentricle_VolumeDescription();

        template: string = 'calculator.basic';
        defaultValues = {
            Triplex_LeftVentricle_EDD: 50
        };
        fields: IField[] = [
            {
                id: 'Triplex_LeftVentricle_EDD',
                name: 'Τελοδιαστολική διάμετρος Αρ. Κοιλίας(cm)',
                input: {
                    type: 'number',
                    step: 1,
                    min: 30,
                    max: 80
                }
            }, resultField, {
                id: 'image',
                input: {
                    type: 'image'
                },
                url: 'images/lvedd.png'
            }
        ];
        calculator(values) {
            var formula = '7 * ((Triplex_LeftVentricle_EDD/10) ^ 3) / ( 2.4 + (Triplex_LeftVentricle_EDD/10) )';
            var result = View.roundNum(View.evaluator(values, formula));

             var resultArray = new CalculatorViews.MinMaxToValue([
                { result: new Result(result, IResult.resultLevel.abnormal, 'Μεγάλη διάταση αριστεράς κοιλίας') },
                { value: 64, result: new Result(result, IResult.resultLevel.intermediate, 'Μικρή διάταση αριστεράς κοιλίας') },
                { value: 60, result: new Result(result, IResult.resultLevel.normal, 'Φυσιολογικές διαστάσεις αριστεράς κοιλίας') },
                { value: 39, result: new Result(result, IResult.resultLevel.abnormal, 'Υπερβολικά χαμηλή τιμή - Πιθανό λάθος μετρήσεως') }
            ]);
            var ret = resultArray.value(values.Triplex_LeftVentricle_EDD);
            ret.formula = View.formulaEvaluator(values, formula);
            ret.suffix = 'cm<sup>3</sup>'

            return ret;
        };
    }



    class Triplex_LeftVentricle_VolumeDescription extends ViewDescription implements IViewDescription {
        id: string = 'Triplex_LeftVentricle_Volume';
        name: string = 'Όγκος Αριστερής Κοιλίας';
        category: string[] = ['Υπερηχοκαρδιογράφημα', 'Κοιλίες', 'Αριστερή Κοιλία'];
        tags: string = '';
        type: typeof View = Triplex_LeftVentricle_Volume;
    }

    ViewsCollection.add(new Triplex_LeftVentricle_VolumeDescription());

}
