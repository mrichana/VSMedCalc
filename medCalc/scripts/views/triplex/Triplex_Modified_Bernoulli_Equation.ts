/// <reference path="../viewsCollections.ts"/>
/// <reference path="../views.ts"/>

module CalculatorViews {
    'use strict';

    class Triplex_Modified_Bernoulli_Equation extends View {
        description = new Triplex_Modified_Bernoulli_EquationDescription();

        template: string = 'calculator.basic';
        defaultValues = {
            Triplex_Modified_Bernoulli_Equation_V1: 0,
            Triplex_Modified_Bernoulli_Equation_V2: 2
        };
        fields: IField[] = [
            {
                id: 'Triplex_Modified_Bernoulli_Equation_V1',
                name: 'V<sub>1</sub> (m/sec)',
                input: {
                    type: 'number',
                    step: 0.01,
                    min: 0,
                    max: 10
                }
            }, {
                id: 'Triplex_Modified_Bernoulli_Equation_V2',
                name: 'V<sub>2</sub> (m/sec)',
                input: {
                    type: 'number',
                    step: 0.01,
                    min: 0,
                    max: 10
                }
            }, resultField, {
                id: 'image',
                input: {
                    type: 'image'
                },
                url: 'images/bernoulli.png'
            }
        ];
        calculator(values) {
            var ret = new Result();
            var formula = '4 * ((Triplex_Modified_Bernoulli_Equation_V2 ^ 2) - (Triplex_Modified_Bernoulli_Equation_V1 ^ 2))';
            ret.formula = View.formulaEvaluator(values, formula);

            ret.result = View.roundNum(View.evaluator(values, formula));
            ret.suffix = 'mmHg'
            return ret;
        };
    }
    class Triplex_Modified_Bernoulli_EquationDescription extends ViewDescription implements IViewDescription {
        type: typeof View = Triplex_Modified_Bernoulli_Equation;
        id: string = 'Triplex_Modified_Bernoulli_Equation';
        name: string = 'Τροποποιημένη Εξίσωση Bernoulli';
        category: string[] = ['Υπερηχοκαρδιογράφημα'];
        tags: string = '';
    }

    ViewsCollection.add(new Triplex_Modified_Bernoulli_EquationDescription());
}
