/// <reference path="../viewsCollections.ts"/>
/// <reference path="../views.ts"/>

module CalculatorViews {
    'use strict';

    class Triplex_Stroke_Volume_Index extends View {
        description = new Triplex_Stroke_Volume_IndexDescription();
        template: string = 'calculator.basic';
        defaultValues = {
            Triplex_LVOT_Diameter: 20,
            Triplex_LVOT_VTI: 20,
            BSA: 1.82
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
            }, {
                id: 'BSA',
                name: 'BSA (m<sup>2</sup>)',
                calculator: 'BSA',
                input: {
                    type: 'number',
                    step: 0.1,
                    min: 0.1,
                    max: 3
                }
            }, resultField
        ];
        calculator(values) {
            var ret = new Result();
            var formula = '( ( pi * ((Triplex_LVOT_Diameter / 10) / 2) ^ 2) * Triplex_LVOT_VTI ) / BSA ';
            
            ret.result = View.roundNum(View.evaluator(values, formula));
            ret.suffix = 'cm<sup>3</sup>/m<sup>2</sup>';
            ret.formula = View.formulaEvaluator(values, formula);

            if (ret.result < 35) {
                ret.resultlevel = IResult.resultLevel.abnormal;
            } else {
                ret.resultlevel = IResult.resultLevel.normal;
            }
            return ret;
        };
    }

    class Triplex_Stroke_Volume_IndexDescription extends ViewDescription implements IViewDescription {
        id: string = 'Triplex_Stroke_Volume_Index';
        name: string = 'Stroke Volume Index (SVi)';
        category: string[] = ['Υπερηχοκαρδιογράφημα', 'Διαστάσεις'];
        tags: string = '';
        type: typeof View = Triplex_Stroke_Volume_Index;
    }

    ViewsCollection.add(new Triplex_Stroke_Volume_IndexDescription());


}
