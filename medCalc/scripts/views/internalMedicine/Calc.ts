/// <reference path="../views.ts"/>

module CalculatorViews {
    'use strict';

    class Calc extends View {
        description = new CalcDescription();

        template: string = 'calculator.basic';
        defaultValues = {
            Calculation: ''
        };
        fields: IField[] = [
            {
                id: 'Calculation',
                name: 'Υπολογισμός',
                input: {
                    type: 'text'
                }
            },
            resultField
        ];
        calculator(values) {
            var ret = new Result();
            try {
                var formula = values.Calculation;
                ret.formula = View.formulaEvaluator(values, formula);
                ret.result = View.roundNum(math.eval(formula), 2);
                ret.resultlevel = IResult.resultLevel.none;
                if (!angular.isNumber(ret.result)) {
                    throw 'nan';
                }
                if (!isFinite(ret.result)) {
                    ret.result = 'Άπειρο';
                    ret.resultlevel = IResult.resultLevel.intermediate;
                }
            } catch (err) {
                ret.result = 'Λάθος Υπολογισμός';
                ret.resultlevel = IResult.resultLevel.abnormal;
            }
            return ret;
        };
    }
    class CalcDescription extends ViewDescription implements IViewDescription {
        type: typeof View = Calc;
        id: string = 'Calc';
        name: string = 'Υπολογιστής';
        category: string = 'Κλινική';
        tags: string = '';
    }

    viewsCollection.add(new CalcDescription());
}
