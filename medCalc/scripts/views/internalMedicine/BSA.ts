/// <reference path="../viewsCollections.ts"/>
/// <reference path="../views.ts"/>

module CalculatorViews {
    'use strict';

    class BSA extends View {
        description = new BSADescription();

        template: string = 'calculator.basic';
        defaultValues = {
            Height: 170,
            Weight: 70
        };
        fields: IField[] = [
            heightField,
            weightField,
            resultField
        ];
        calculator(values) {
            var ret = new Result();
            ret.suffix = 'm<sup>2</sup>';
            var formula = 'sqrt (( Height * Weight ) / 3600)';
            ret.formula = View.formulaEvaluator(values, formula);
            ret.result = View.roundNum(View.evaluator(values, formula), 2);
            ret.resultlevel = IResult.resultLevel.normal;
            return ret;
        };
    }
    class BSADescription extends ViewDescription implements IViewDescription {
        type: typeof View = BSA;
        id: string = 'BSA';
        name: string = 'Επιφάνεια Σώματος (BSA)';
        category: string[] = ['Παθολογία'];
        tags: string = '';
    }

    ViewsCollection.add(new BSADescription());
}
