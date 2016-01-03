/// <reference path="../viewsCollections.ts"/>
/// <reference path="../views.ts"/>

module CalculatorViews {
    'use strict';
    class Triplex_Stroke_Volume extends View {
        description = new Triplex_Stroke_VolumeDescription();
        template: string = 'calculator.basic';
        defaultValues = {
            Triplex_LVOT_Diameter: 20,
            Triplex_LVOT_VTI: 20,
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
                id: 'Triplex_LVOT_VTI',
                name: 'LVOT VTI<sub>1</sub> (cm)',
                description: 'Υποβαλβιδικό Ολοκλήρωμα',
                input: {
                    type: 'number',
                    step: 1,
                    min: 1,
                    max: 100
                }
            }, resultField
        ];
        calculator(values) {
            var ret = new Result();
            var formula = '( pi * ((Triplex_LVOT_Diameter / 10) / 2) ^ 2) * Triplex_LVOT_VTI';
            ret.result = View.roundNum(View.evaluator(values, formula));
            ret.formula = View.formulaEvaluator(values, formula);

            ret.suffix = 'cm<sup>3</sup>'

            if (ret.result < 60) {
                ret.resultlevel = IResult.resultLevel.abnormal;
            } else {
                ret.resultlevel = IResult.resultLevel.normal;
            }
            return ret;
        };
    }

    class Triplex_Stroke_VolumeDescription extends ViewDescription implements IViewDescription {
        id: string = 'Triplex_Stroke_Volume';
        name: string = 'Stroke Volume (SV)';
        category: string[] = ['Υπερηχοκαρδιογράφημα', 'Διαστάσεις'];
        tags: string = '';
        type: typeof View = Triplex_Stroke_Volume;
    }

    ViewsCollection.add(new Triplex_Stroke_VolumeDescription());

}
