/// <reference path="../viewsCollections.ts"/>
/// <reference path="../views.ts"/>

module CalculatorViews {
    'use strict';
    class Triplex_AorticRoot extends View {
        description = new Triplex_AorticRootDescription();
        template: string = 'calculator.basic';
        defaultValues = {
            'Age': 65,
            BSA: 1.82,
            Triplex_SinusValsalva_Diameter: 32
        };
        fields: IField[] = [
            ageField,
            {
                id: 'BSA',
                name: 'BSA (m<sup>2</sup>)',
                calculator: 'BSA',
                input: {
                    type: 'number',
                    step: 0.1,
                    min: 0.1,
                    max: 3
                }
            }, {
                id: 'Triplex_SinusValsalva_Diameter',
                name: 'Διάμετρος Αορτής στους Κόλπους του Valsalva (mm)',
                input: {
                    type: 'number',
                    step: 1,
                    min: 5,
                    max: 60
                }
            }, resultField
        ];
        calculator(values) {
            var ret = new Result();
            var formula;
            var mean;
            var see;
            var min;
            var max;
            
            if (values.Age<=19) {
                formula = '(1.02+(0.98*BSA))*10';
                see = 1.8;
            } else if (values.Age < 40) {
                formula = '(0.97+(1.12*BSA))*10';
                see = 2.4;
            } else {
                formula = '(1.92+(0.74*BSA))*10';
                see = 3.7;
            }

            mean = View.roundNum(View.evaluator(values, formula));
            min = View.roundNum(mean - 1.96*see);
            max = View.roundNum(mean + 1.96*see); 

            ret.result = 'Aπό '+ min +'mm εώς '+ max +'mm';
            ret.explanation = 'Μέση Τιμή: '+mean+'mm';
            ret.formula = View.formulaEvaluator(values, formula+'+-(1.96*'+see+')');

            if (values.Triplex_SinusValsalva_Diameter < min || values.Triplex_SinusValsalva_Diameter > max) {
                ret.resultlevel = IResult.resultLevel.abnormal;
            } else {
                ret.resultlevel = IResult.resultLevel.normal;
            }
            return ret;
        };
    }

    class Triplex_AorticRootDescription extends ViewDescription implements IViewDescription {
        id: string = 'Triplex_AorticRoot';
        name: string = 'Ανιούσα Αορτή';
        category: string[] = ['Υπερηχοκαρδιογράφημα', 'Διαστάσεις'];
        tags: string = '';
        type: typeof View = Triplex_AorticRoot;
    }

    ViewsCollection.add(new Triplex_AorticRootDescription());

}
