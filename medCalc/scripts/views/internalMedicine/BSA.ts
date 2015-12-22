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
            ret.formula = 'sqrt (( Height * Weight ) / 3600)';
            ret.result = View.roundNum(View.evaluator(values, ret.formula), 2);
            ret.resultlevel = IResult.resultLevel.Normal;
            return ret;
        };
    }
    class BSADescription extends ViewDescription implements IViewDescription {
        type: typeof View = BSA;
        id: string = 'BSA';
        name: string = 'Επιφάνεια Σώματος (BSA)';
        category: string = 'Παθολογία';
        tags: string = '';
    }

    viewsCollection.add(new BSADescription());
}
